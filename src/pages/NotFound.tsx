import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';

export default function NotFound() {
  useSeo({
    title: 'Page Not Found | ArixPro',
    description: 'The page you are looking for does not exist.',
    canonical: 'https://arixpro.com/404',
  });

  return (
    <section className="page-404" aria-labelledby="not-found-heading">
      <div className="container">
        <p className="section-label">404 Error</p>
        <h1 id="not-found-heading">This page doesn't exist.</h1>
        <p className="section-note">
          The link is incorrect or the page has moved. The engineering backends, however, are very real.
        </p>
        <div className="cta-actions">
          <Link to="/" className="btn btn-primary">
            Back to Home <ArrowRight size={16} className="btn-arrow" />
          </Link>
          <Link to="/work" className="btn btn-outline">
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
}
