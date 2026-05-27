#!/usr/bin/env node
/**
 * seed-manifest.js — walks public/guides/ and writes content/guides.json
 * with one entry per HTML file. `sub` fields are left empty (Brené's draft
 * in content/sub-lines-draft.md gets merged separately after Brad approval).
 *
 * Run from repo root:
 *   node scripts/seed-manifest.js
 *   npm run seed-manifest
 *
 * Group inference (spec §6.4):
 *   - filename matches "master-*.html"            → master
 *   - filename ends in "-user-guide.html"         → core
 *   - everything else                              → topical
 *
 * Title derivation: humanize the slug, strip platform prefix, strip
 * "-user-guide" suffix, title-case the result.
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const PUBLIC_GUIDES = path.join(REPO_ROOT, 'public', 'guides');
const MANIFEST_PATH = path.join(REPO_ROOT, 'content', 'guides.json');

const PLATFORMS = ['chatgpt', 'claude', 'gemini', 'copilot'];

function inferGroup(slug) {
  if (slug.startsWith('master-')) return 'master';
  if (slug.endsWith('-user-guide.html') || slug.endsWith('-user-guide')) return 'core';
  return 'topical';
}

function titleCase(str) {
  return str
    .split(/[\s-]+/)
    .filter(Boolean)
    .map((w) => {
      // Preserve a few brand spellings/casings.
      const lower = w.toLowerCase();
      if (lower === 'chatgpt') return 'ChatGPT';
      if (lower === 'gpts') return 'GPTs';
      if (lower === 'gpt') return 'GPT';
      if (lower === 'ai') return 'AI';
      if (lower === 'api') return 'API';
      if (lower === 'm365') return 'M365';
      if (lower === 'it') return 'IT';
      if (lower === 'qa') return 'Q&A';
      if (lower === 'vs') return 'vs';
      return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    })
    .join(' ');
}

function deriveTitle(platform, slug, group) {
  let base = slug.replace(/\.html$/i, '');

  if (group === 'master') {
    return `${titleCase(platform === 'chatgpt' ? 'ChatGPT' : platform)} Master Guide`;
  }

  // Strip leading platform prefix if present.
  const prefixes = [`${platform}-`];
  for (const p of prefixes) {
    if (base.startsWith(p)) base = base.slice(p.length);
  }
  // Strip "-user-guide" suffix.
  base = base.replace(/-user-guide$/, '');

  return titleCase(base);
}

function nextOrder(prevByGroupPlatform, group, platform) {
  const key = `${platform}:${group}`;
  const prev = prevByGroupPlatform.get(key) ?? 0;
  const next = prev + 10;
  prevByGroupPlatform.set(key, next);
  return next;
}

function seed() {
  const entries = [];
  const order = new Map();

  for (const platform of PLATFORMS) {
    const dir = path.join(PUBLIC_GUIDES, platform);
    if (!fs.existsSync(dir)) continue;

    const files = fs
      .readdirSync(dir)
      .filter((f) => /\.html$/i.test(f))
      .sort();

    // Pass 1 — masters first so they get order 0.
    const masters = files.filter((f) => inferGroup(f) === 'master');
    const core = files.filter((f) => inferGroup(f) === 'core');
    const topical = files.filter((f) => inferGroup(f) === 'topical');

    for (const f of masters) {
      entries.push({
        slug: f.replace(/\.html$/i, ''),
        platform,
        group: 'master',
        title: deriveTitle(platform, f, 'master'),
        sub: '',
        file: `${platform}/${f}`,
        order: 0,
      });
    }
    for (const f of core) {
      entries.push({
        slug: f.replace(/\.html$/i, ''),
        platform,
        group: 'core',
        title: deriveTitle(platform, f, 'core'),
        sub: '',
        file: `${platform}/${f}`,
        order: nextOrder(order, 'core', platform),
      });
    }
    for (const f of topical) {
      entries.push({
        slug: f.replace(/\.html$/i, ''),
        platform,
        group: 'topical',
        title: deriveTitle(platform, f, 'topical'),
        sub: '',
        file: `${platform}/${f}`,
        order: nextOrder(order, 'topical', platform),
      });
    }
  }

  // ---------- Preserve existing sub values if guides.json already exists ----
  if (fs.existsSync(MANIFEST_PATH)) {
    try {
      const existing = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
      const existingList = Array.isArray(existing) ? existing : existing.guides ?? [];
      const subBySlug = new Map();
      for (const e of existingList) {
        if (e && e.slug && e.sub) subBySlug.set(e.slug, e.sub);
      }
      for (const e of entries) {
        if (subBySlug.has(e.slug)) e.sub = subBySlug.get(e.slug);
      }
    } catch {
      // Ignore — start fresh.
    }
  }

  fs.mkdirSync(path.dirname(MANIFEST_PATH), { recursive: true });
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(entries, null, 2) + '\n', 'utf8');

  // ---------- Summary -------------------------------------------------------
  const breakdown = {};
  for (const e of entries) {
    breakdown[e.platform] = breakdown[e.platform] ?? { master: 0, core: 0, topical: 0 };
    breakdown[e.platform][e.group] += 1;
  }
  console.log('\n=== seed-manifest ==========================================');
  console.log(`Wrote ${entries.length} entries → content/guides.json`);
  for (const p of PLATFORMS) {
    const b = breakdown[p] ?? { master: 0, core: 0, topical: 0 };
    console.log(`  ${p.padEnd(8)}  master ${b.master}   core ${b.core}   topical ${b.topical}`);
  }
  console.log('============================================================\n');
}

seed();
