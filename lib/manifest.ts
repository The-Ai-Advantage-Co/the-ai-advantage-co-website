import fs from 'fs';
import path from 'path';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type Platform = 'chatgpt' | 'claude' | 'gemini' | 'copilot';
export type Group = 'master' | 'core' | 'topical';

export interface GuideEntry {
  slug: string;
  platform: Platform;
  group: Group;
  title: string;
  sub: string;
  file: string;
  order: number;
  updated?: string;
}

// ---------------------------------------------------------------------------
// Load + validate
// ---------------------------------------------------------------------------

const MANIFEST_PATH = path.join(process.cwd(), 'content', 'guides.json');
const PUBLIC_GUIDES = path.join(process.cwd(), 'public', 'guides');

const VALID_PLATFORMS: Platform[] = ['chatgpt', 'claude', 'gemini', 'copilot'];
const VALID_GROUPS: Group[] = ['master', 'core', 'topical'];

let _cache: GuideEntry[] | null = null;

export function loadManifest(): GuideEntry[] {
  if (_cache) return _cache;

  if (!fs.existsSync(MANIFEST_PATH)) {
    // Graceful: return empty array if manifest not yet seeded (during first build)
    return [];
  }

  const raw = fs.readFileSync(MANIFEST_PATH, 'utf-8');
  const data: GuideEntry[] = JSON.parse(raw);

  // ---------- Validation (spec §6.3) ----------
  const slugsSeen = new Set<string>();
  const mastersPerPlatform: Record<string, number> = {};

  for (const entry of data) {
    // Unique slugs
    if (slugsSeen.has(entry.slug)) {
      throw new Error(`Duplicate slug in guides.json: "${entry.slug}"`);
    }
    slugsSeen.add(entry.slug);

    // Platform valid
    if (!VALID_PLATFORMS.includes(entry.platform)) {
      throw new Error(
        `Invalid platform "${entry.platform}" on slug "${entry.slug}". Must be one of: ${VALID_PLATFORMS.join(', ')}`
      );
    }

    // Group valid
    if (!VALID_GROUPS.includes(entry.group)) {
      throw new Error(
        `Invalid group "${entry.group}" on slug "${entry.slug}". Must be one of: ${VALID_GROUPS.join(', ')}`
      );
    }

    // File exists on disk
    const filePath = path.join(PUBLIC_GUIDES, entry.file);
    if (!fs.existsSync(filePath)) {
      throw new Error(
        `guides.json entry "${entry.slug}" references missing file: public/guides/${entry.file}`
      );
    }

    // Count masters per platform
    if (entry.group === 'master') {
      mastersPerPlatform[entry.platform] = (mastersPerPlatform[entry.platform] ?? 0) + 1;
    }

    // Sub-line length warning
    if (entry.sub && entry.sub.length > 90) {
      console.warn(
        `guides.json: sub for "${entry.slug}" is ${entry.sub.length} chars (max 90): "${entry.sub.slice(0, 60)}..."`
      );
    }
  }

  // Exactly one master per platform
  for (const platform of VALID_PLATFORMS) {
    const count = mastersPerPlatform[platform] ?? 0;
    if (count !== 1) {
      console.warn(
        `guides.json: expected exactly 1 master for "${platform}", found ${count}`
      );
    }
  }

  _cache = data;
  return data;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getMasters(): GuideEntry[] {
  return loadManifest()
    .filter((e) => e.group === 'master')
    .sort((a, b) => {
      // Sort by canonical platform order: chatgpt, claude, gemini, copilot
      const order: Record<Platform, number> = { chatgpt: 0, claude: 1, gemini: 2, copilot: 3 };
      return order[a.platform] - order[b.platform];
    });
}

export function getCoreForPlatform(platform: Platform): GuideEntry[] {
  return loadManifest()
    .filter((e) => e.platform === platform && e.group === 'core')
    .sort((a, b) => a.order - b.order);
}

export function getTopicalForPlatform(platform: Platform): GuideEntry[] {
  return loadManifest()
    .filter((e) => e.platform === platform && e.group === 'topical')
    .sort((a, b) => a.order - b.order);
}

export function getAllForPlatform(platform: Platform): GuideEntry[] {
  return loadManifest()
    .filter((e) => e.platform === platform)
    .sort((a, b) => a.order - b.order);
}
