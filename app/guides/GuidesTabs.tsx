'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import type { GuideEntry, Platform } from '@/lib/manifest';

interface PlatformBlock {
  platform: Platform;
  label: string;
  core: GuideEntry[];
  topical: GuideEntry[];
}

interface Props {
  platforms: PlatformBlock[];
  platformLabel: Record<Platform, string>;
}

const PLATFORM_ORDER: Platform[] = ['chatgpt', 'claude', 'gemini', 'copilot'];

function isPlatform(v: string | null): v is Platform {
  return v === 'chatgpt' || v === 'claude' || v === 'gemini' || v === 'copilot';
}

export default function GuidesTabs({ platforms }: Props) {
  const router = useRouter();
  const params = useSearchParams();
  const initial = params.get('tool');
  const [active, setActive] = useState<Platform>(
    isPlatform(initial) ? initial : 'chatgpt'
  );

  // Keep URL in sync — bookmarkable tabs.
  useEffect(() => {
    const current = params.get('tool');
    if (current !== active) {
      const next = new URLSearchParams(Array.from(params.entries()));
      next.set('tool', active);
      router.replace(`/guides?${next.toString()}`, { scroll: false });
    }
  }, [active, router, params]);

  const block = platforms.find((p) => p.platform === active) ?? platforms[0]!;

  return (
    <>
      <div className="guides-tab-select-wrap">
        <select
          className="guides-tab-select"
          value={active}
          onChange={(e) => setActive(e.target.value as Platform)}
          aria-label="Select platform"
        >
          {PLATFORM_ORDER.map((p) => {
            const blk = platforms.find((x) => x.platform === p);
            return (
              <option key={p} value={p}>
                {blk?.label ?? p}
              </option>
            );
          })}
        </select>
      </div>

      <div className="guides-tabs-bar" role="tablist">
        {PLATFORM_ORDER.map((p) => {
          const blk = platforms.find((x) => x.platform === p);
          if (!blk) return null;
          return (
            <button
              key={p}
              type="button"
              role="tab"
              aria-selected={p === active}
              className={`guides-tab ${p === active ? 'is-active' : ''}`}
              onClick={() => setActive(p)}
            >
              {blk.label}
            </button>
          );
        })}
      </div>

      {block.core.length > 0 && (
        <div className="guides-subsection">
          <div className="guides-subsection-header">
            <span className="eyebrow">Core User Guides</span>
            <h3>The structured series.</h3>
          </div>
          <div className="guide-grid">
            {block.core.map((g) => (
              <a key={g.slug} href={`/guides/${g.file}`} className="guide-card">
                <span className="title">{g.title}</span>
                {g.sub && <span className="sub">{g.sub}</span>}
              </a>
            ))}
          </div>
        </div>
      )}

      {block.topical.length > 0 && (
        <div className="guides-subsection">
          <div className="guides-subsection-header">
            <span className="eyebrow">Topical Guides</span>
            <h3>Use cases & deep dives.</h3>
          </div>
          <div className="guide-grid">
            {block.topical.map((g) => (
              <a key={g.slug} href={`/guides/${g.file}`} className="guide-card">
                <span className="title">{g.title}</span>
                {g.sub && <span className="sub">{g.sub}</span>}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
