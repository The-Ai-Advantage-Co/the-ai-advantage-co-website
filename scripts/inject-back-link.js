#!/usr/bin/env node
/**
 * inject-back-link.js — idempotent pre-build step.
 * Walks public/guides/**\/*.html and inserts a small "← Guide Library" pill
 * (per spec §5.3) immediately after <body> in each file, IF the marker
 * <!-- aiadv-back --> is absent.
 *
 * Re-running this script is safe: it only patches files that don't already
 * carry the marker.
 *
 * Run from repo root:
 *   node scripts/inject-back-link.js
 *   npm run inject-back-link
 *
 * Also wired as the `prebuild` step in package.json so Vercel builds always
 * carry the back-pill.
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const PUBLIC_GUIDES = path.join(REPO_ROOT, 'public', 'guides');

const MARKER = '<!-- aiadv-back -->';

const SNIPPET = `
<!-- aiadv-back -->
<a id="aiadv-back" href="/guides">← Guide Library</a>
<style>
  #aiadv-back {
    position: fixed; top: 16px; right: 16px; z-index: 9999;
    font-family: Inter, -apple-system, sans-serif;
    font-size: 13px; font-weight: 500; letter-spacing: -0.01em;
    padding: 8px 14px; border-radius: 999px;
    background: rgba(255,255,255,0.92); -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px);
    border: 1px solid #D2D2D7; color: #1D1D1F;
    text-decoration: none; transition: all 0.18s ease;
  }
  #aiadv-back:hover { color: #B8741A; border-color: #B8741A; }
  @media print { #aiadv-back { display: none; } }
</style>
`;

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) {
      out.push(...walk(p));
    } else if (/\.html$/i.test(name)) {
      out.push(p);
    }
  }
  return out;
}

function inject() {
  const files = walk(PUBLIC_GUIDES);
  let patched = 0;
  let skipped = 0;
  const errors = [];

  for (const f of files) {
    try {
      const src = fs.readFileSync(f, 'utf8');
      if (src.includes(MARKER)) {
        skipped += 1;
        continue;
      }
      // Insert immediately after the first <body...> tag.
      const bodyMatch = src.match(/<body[^>]*>/i);
      if (!bodyMatch) {
        errors.push(`No <body> tag found in ${f}`);
        continue;
      }
      const insertAt = (bodyMatch.index ?? 0) + bodyMatch[0].length;
      const patchedSrc = src.slice(0, insertAt) + SNIPPET + src.slice(insertAt);
      fs.writeFileSync(f, patchedSrc, 'utf8');
      patched += 1;
    } catch (err) {
      errors.push(`${f}: ${err.message}`);
    }
  }

  console.log('\n=== inject-back-link =======================================');
  console.log(`Patched:    ${patched}`);
  console.log(`Skipped:    ${skipped} (already carry the marker)`);
  if (errors.length) {
    console.log(`Errors:     ${errors.length}`);
    for (const e of errors) console.log('  ! ' + e);
    process.exit(1);
  }
  console.log('============================================================\n');
}

inject();
