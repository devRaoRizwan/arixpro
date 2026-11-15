import { Link } from 'react-router-dom'

interface LogoProps {
  animated?: boolean
  isFooter?: boolean
}

export default function Logo({ isFooter = false }: LogoProps) {
  return (
    <Link to="/" className="logo" aria-label="ArixPro Home">
      <img
        src="/brand/arixpro-sign.png"
        alt={isFooter ? '' : 'ArixPro'}
        aria-hidden={isFooter ? true : undefined}
        className="logo__sign-img"
      />
      <span className="logo__wordmark">
        Arix<span className="pro">Pro.</span>
      </span>
    </Link>
  )
}
