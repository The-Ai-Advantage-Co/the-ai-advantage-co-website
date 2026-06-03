'use client';

import { usePathname } from 'next/navigation';

interface SiteNavProps {
  isAuthenticated: boolean;
}

export default function SiteNav({ isAuthenticated }: SiteNavProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <a href="/" className="nav-logo" aria-label="The Ai Advantage Co. home">
          <img src="/assets/web/logo-mark.png" alt="" className="brand-mark" />
          <span className="brand-text">
            <span className="brand-name">
              THE A<span className="i-lower">i</span> ADVANTAGE{' '}
              <span className="brand-co">Co.</span>
            </span>
            <span className="brand-tagline">AI Coaching &amp; Implementation</span>
          </span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="/" className={isActive('/') ? 'is-active' : ''}>
              Home
            </a>
          </li>
          <li>
            <a href="/services" className={isActive('/services') ? 'is-active' : ''}>
              Services
            </a>
          </li>
          <li>
            <a
              href="/kick-starter"
              className={isActive('/kick-starter') ? 'is-active' : ''}
            >
              Kick Starter
            </a>
          </li>
          <li>
            <a
              href="/brand-kit"
              className={isActive('/brand-kit') ? 'is-active' : ''}
            >
              Brand Kit
            </a>
          </li>
          <li>
            <a href="/pricing" className={isActive('/pricing') ? 'is-active' : ''}>
              Pricing
            </a>
          </li>
          <li>
            <a href="/contact" className={isActive('/contact') ? 'is-active' : ''}>
              Contact
            </a>
          </li>
          <li>
            <a href="/guides" className={isActive('/guides') ? 'is-active' : ''}>
              User Guides
            </a>
          </li>
        </ul>
        <div className="nav-controls" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a href="/pricing" className="btn btn-primary btn-sm">
            Book a Session
          </a>
          {isAuthenticated && (
            <form action="/guides/logout" method="POST" style={{ margin: 0 }}>
              <button
                type="submit"
                className="btn btn-sm"
                style={{
                  background: 'transparent',
                  border: '1px solid var(--hairline)',
                  color: 'var(--ink-secondary)',
                  fontSize: '13px',
                  padding: '8px 14px',
                  borderRadius: '980px',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Sign out
              </button>
            </form>
          )}
        </div>
        <button className="nav-menu-toggle" aria-label="Open menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
