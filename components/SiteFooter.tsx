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
