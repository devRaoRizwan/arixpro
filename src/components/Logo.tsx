import { Link } from 'react-router-dom'

interface LogoProps {
  variant?: 'light' | 'dark'
}

export default function Logo({ variant = 'dark' }: LogoProps) {
  const mark = variant === 'light' ? '/logo-mark-light.svg' : '/logo-mark.svg'
  return (
    <Link to="/" className="logo" aria-label="ArixPro Home">
      <img src={mark} alt="" width={32} height={32} aria-hidden="true" />
      <span className="logo__wordmark">
        Arix<span className="pro">Pro.</span>
      </span>
    </Link>
  )
}
