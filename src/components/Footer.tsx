import { Link } from 'react-router-dom'
import Logo from './Logo'
import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo />
            <p className="footer__copy">
              Backend-first software house, Lahore, Pakistan.
            </p>
            <p className="footer__copy">
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>

          {/* Bottom navigation */}
          <nav className="footer__nav" aria-label="Footer navigation">
            <ul className="footer__nav-list" role="list">
              {site.nav.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer__bottom">
          <p className="mono">© 2026 ArixPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
