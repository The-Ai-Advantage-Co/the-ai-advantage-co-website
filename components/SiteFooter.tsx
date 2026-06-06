export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo-wrap">
              <img src="/assets/web/logo-mark.png" alt="" />
              <span className="wordmark">
                THE A<span className="i-lower">i</span> ADVANTAGE
              </span>
            </div>
            <p>
              Practical Ai coaching for individuals, teams, and small businesses. Based in
              Warrnambool — sessions online Australia-wide.
            </p>
          </div>
          <div className="footer-col">
            <h4>Site</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/pricing">Pricing</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/guides">User Guides</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Coaching</h4>
            <ul>
              <li>
                <a href="/services#single">Single Session</a>
              </li>
              <li>
                <a href="/services#kickstart">Kick-Start Pack</a>
              </li>
              <li>
                <a href="/services#team">Team &amp; Business</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get in touch</h4>
            <ul>
              <li>
                <a href="mailto:theaiadvantagecoadmin@gmail.com">
                  theaiadvantagecoadmin@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:0400062251">0400 062 251</a>
              </li>
              <li>
                <a href="/contact">Send an enquiry</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <div className="footer-social-text">
            <h4>Follow &amp; Subscribe</h4>
            <p>
              Tips, updates, and practical Ai walkthroughs — follow us to stay in the loop.
            </p>
          </div>
          <div className="footer-social-icons">
            <a
              href="https://www.youtube.com/@Thaiadvantageco"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Subscribe on YouTube"
              className="social-icon"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>YouTube</span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61590753322773"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Facebook"
              className="social-icon"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/theaiadvantageco/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Instagram"
              className="social-icon"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
              <span>Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/in/brad-harle-aiadvantage/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn"
              className="social-icon"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; 2026 The Ai Advantage Co. &nbsp;&middot;&nbsp; Warrnambool, Australia</div>
          <div>
            <a href="#">Privacy</a> &nbsp;&middot;&nbsp; <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
