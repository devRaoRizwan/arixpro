import { Link } from 'react-router-dom'

interface LogoProps {
  animated?: boolean
}

export default function Logo({ animated = false }: LogoProps) {
  return (
    <Link to="/" className="logo" aria-label="ArixPro Home">
      {animated ? (
        <span className="logo__sign-wrap" aria-hidden="true">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/brand/arixpro-sign.png"
            className="logo__sign-video"
          >
            <source src="/brand/arixpro-sign-animation-hero.webm" type="video/webm" />
            <img
              src="/brand/arixpro-sign-animation-hero.gif"
              alt=""
              className="logo__sign-fallback"
            />
          </video>
          <img
            src="/brand/arixpro-sign.png"
            alt=""
            className="logo__sign-static"
          />
        </span>
      ) : (
        <img
          src="/brand/arixpro-sign.png"
          alt=""
          className="logo__sign-img"
          aria-hidden="true"
        />
      )}
      <span className="logo__wordmark">
        Arix<span className="pro">Pro.</span>
      </span>
    </Link>
  )
}
