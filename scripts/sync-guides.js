#!/usr/bin/env node
/**
 * sync-guides.js — one-way copy of HTML user guides from OneDrive into
 * public/guides/<platform>/<slug>.html.
 *
 * THIS IS ONE-WAY ONLY. We NEVER write back to OneDrive.
 * Source files in OneDrive are read-only as far as this script is concerned.
 *
 * Run from repo root:
 *   node scripts/sync-guides.js
 *   npm run sync-guides
 *
 * Prints a diff at the end: added / updated / removed.
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const PUBLIC_GUIDES = path.join(REPO_ROOT, 'public', 'guides');

// Source folder per platform (from spec §3.1 + memory paths).
const SOURCES = {
  chatgpt: 'C:/Users/harle/OneDrive/The Ai Advantage Co/03 - User Guides/01 - ChatGPT/HTML',
  claude: 'C:/Users/harle/OneDrive/The Ai Advantage Co/03 - User Guides/02 - Claude/HTML',
  gemini: 'C:/Users/harle/OneDrive/The Ai Advantage Co/03 - User Guides/03 - Gemini/HTML',
  copilot: 'C:/Users/harle/OneDrive/The Ai Advantage Co/03 - User Guides/04 - Copilot/HTML',
};

// Filenames matching any of these patterns are skipped — they're internal
// authoring templates / scratch files, not client-facing guides.
// (Confirmed by Brené Brown's sub-lines draft, see content/sub-lines-draft.md.)
const EXCLUDE_FILENAME_PATTERNS = [
  /template/i,
];

// ---------- Slug derivation -------------------------------------------------
// Turn "Master Guide - Copilot.html" → "master-copilot.html"
// Turn "Copilot-101-User-Guide.html" → "copilot-101-user-guide.html"
// Turn "ChatGPT Custom Instructions.html" → "chatgpt-custom-instructions.html"
function toSlug(filename) {
  const base = filename.replace(/\.html$/i, '');
  return (
    base
      .toLowerCase()
      // Replace spaces, dots, slashes, ampersands with hyphens.
      .replace(/[\s.&/]+/g, '-')
      // Drop characters that aren't a-z, 0-9, or hyphen.
      .replace(/[^a-z0-9-]+/g, '')
      // Collapse multiple hyphens.
      .replace(/-+/g, '-')
      // Trim leading/trailing hyphens.
      .replace(/^-+|-+$/g, '') + '.html'
  );
}

function fileHash(filepath) {
  // Cheap "did it change" signal — size + mtime. Avoids hashing full contents.
  const stat = fs.statSync(filepath);
  return `${stat.size}-${stat.mtimeMs}`;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function sync() {
  const summary = {
    added: [],
    updated: [],
    unchanged: [],
    removed: [],
    errors: [],
  };

  for (const [platform, sourceDir] of Object.entries(SOURCES)) {
    const targetDir = path.join(PUBLIC_GUIDES, platform);
    ensureDir(targetDir);

    if (!fs.existsSync(sourceDir)) {
      summary.errors.push(`Source dir missing: ${sourceDir}`);
      continue;
    }

    // Read all .html files in source, skipping internal templates.
    const sourceFiles = fs
      .readdirSync(sourceDir)
      .filter((f) => /\.html$/i.test(f))
      .filter((f) => !EXCLUDE_FILENAME_PATTERNS.some((re) => re.test(f)));

    // Map source filename → target slug.
    const slugMap = new Map();
    for (const src of sourceFiles) {
      slugMap.set(src, toSlug(src));
    }

    // Detect slug collisions within the platform.
    const seen = new Map();
    for (const [src, slug] of slugMap) {
      if (seen.has(slug)) {
        summary.errors.push(
          `[${platform}] slug collision: "${src}" and "${seen.get(slug)}" both → ${slug}`
        );
      } else {
        seen.set(slug, src);
      }
    }

    // Build target file set from current public/guides/<platform>/.
    const targetExisting = new Set(
      fs.existsSync(targetDir)
        ? fs.readdirSync(targetDir).filter((f) => /\.html$/i.test(f))
        : []
    );

    // Copy each source → target.
    for (const [src, slug] of slugMap) {
      const srcPath = path.join(sourceDir, src);
      const dstPath = path.join(targetDir, slug);

      const existed = fs.existsSync(dstPath);
      if (existed) {
        // Compare to decide updated vs unchanged.
        const srcSize = fs.statSync(srcPath).size;
        const dstSize = fs.statSync(dstPath).size;
        if (srcSize === dstSize) {
          // Likely unchanged. Still re-copy occasionally? No — skip if same size.
          // (Build-time inject-back-link.js will run idempotently anyway.)
          summary.unchanged.push(`${platform}/${slug}`);
          continue;
        }
      }

      fs.copyFileSync(srcPath, dstPath);
      if (existed) {
        summary.updated.push(`${platform}/${slug}`);
      } else {
        summary.added.push(`${platform}/${slug}`);
      }
      targetExisting.delete(slug);
    }

    // Anything still in targetExisting wasn't matched by a source → removed.
    for (const orphan of targetExisting) {
      const orphanPath = path.join(targetDir, orphan);
      fs.unlinkSync(orphanPath);
      summary.removed.push(`${platform}/${orphan}`);
    }
  }

  // ---------- Print summary -------------------------------------------------
  console.log('\n=== sync-guides ============================================');
  console.log(`Added:     ${summary.added.length}`);
  for (const a of summary.added) console.log('  + ' + a);
  console.log(`Updated:   ${summary.updated.length}`);
  for (const u of summary.updated) console.log('  ~ ' + u);
  console.log(`Removed:   ${summary.removed.length}`);
  for (const r of summary.removed) console.log('  - ' + r);
  console.log(`Unchanged: ${summary.unchanged.length}`);
  if (summary.errors.length) {
    console.log(`Errors:    ${summary.errors.length}`);
    for (const e of summary.errors) console.log('  ! ' + e);
    process.exit(1);
  }
  console.log('============================================================\n');
}

sync();
