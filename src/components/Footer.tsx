import { Link } from 'react-router-dom'
import { Linkedin, Github } from 'lucide-react'
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

          <div className="footer__socials">
            {site.socials.linkedin && (
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ArixPro on LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            )}
            {site.socials.github && (
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rao Rizwan on GitHub"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>

        <div className="footer__bottom">
          <p className="mono">© 2026 ArixPro. All rights reserved.</p>
        </div>
      </div>
      <div className="footer__wordmark-strip" aria-hidden="true">
        <span className="footer__giant-wordmark">ArixPro.</span>
      </div>
    </footer>
  )
}
