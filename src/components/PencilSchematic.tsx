import { useEffect, useState } from 'react'

export function PencilSchematic() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4)
    }, 2800)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full rounded-2xl border border-white/[0.12] bg-[#0C061A]/95 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.85)] overflow-hidden">
      {/* Window Header */}
      <div className="flex items-center border-b border-white/[0.08] bg-white/[0.03] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-[#FF5F56]/80" />
          <span className="size-2.5 rounded-full bg-[#FFBD2E]/80" />
          <span className="size-2.5 rounded-full bg-[#27C93F]/80" />
        </div>
      </div>

      {/* SVG Canvas Area with Architectural Grid */}
      <div className="relative p-4 sm:p-6 min-h-[380px] sm:min-h-[420px] flex items-center justify-center bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:20px_20px] overflow-hidden">
        {/* Subtle Ambient Backlight */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#794BE8]/10 via-transparent to-[#38BDF8]/10 pointer-events-none" />

        <svg
          viewBox="0 0 680 390"
          className="w-full h-auto max-h-[390px] drop-shadow-[0_4px_24px_rgba(121,75,232,0.2)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Hand-Drawn Pencil Texture Filter */}
            <filter id="pencil-texture" x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.4" xChannelSelector="R" yChannelSelector="G" />
            </filter>

            {/* Glowing Gradient for Active Line Tracing */}
            <linearGradient id="pencil-glow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A78BFA" />
              <stop offset="50%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>

            <linearGradient id="server-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#6336C5" stopOpacity="0.06" />
            </linearGradient>

            <linearGradient id="monitor-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0.06" />
            </linearGradient>

            <linearGradient id="app-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.06" />
            </linearGradient>
          </defs>

          {/* ======================================================== */}
          {/* 1. BACKEND SERVERS NODE (Left)                           */}
          {/* ======================================================== */}
          <g className="transition-all duration-500" style={{ opacity: activeStep >= 0 ? 1 : 0.4 }}>
            {/* Server Rack Body (Pencil Sketched) */}
            <rect
              x="50"
              y="100"
              width="140"
              height="185"
              rx="10"
              stroke="#A78BFA"
              strokeWidth="2.2"
              strokeDasharray="4 2 8 2"
              fill="url(#server-grad)"
              filter="url(#pencil-texture)"
              className="animate-[pulse_4s_ease-in-out_infinite]"
            />
            {/* Outer Pencil Guideline Box */}
            <rect
              x="45"
              y="95"
              width="150"
              height="195"
              rx="12"
              stroke="#A78BFA"
              strokeWidth="1"
              strokeOpacity="0.25"
              strokeDasharray="2 3"
            />

            {/* Server Unit 1 */}
            <rect x="62" y="118" width="116" height="34" rx="5" stroke="#C9C2E0" strokeWidth="1.8" fill="#140A28" />
            <circle cx="76" cy="135" r="3.5" fill="#10B981" className="animate-ping" style={{ animationDuration: '2s' }} />
            <circle cx="76" cy="135" r="3" fill="#10B981" />
            <circle cx="88" cy="135" r="3" fill="#38BDF8" />
            <circle cx="100" cy="135" r="3" fill="#A78BFA" />
            <line x1="120" y1="135" x2="164" y2="135" stroke="#C9C2E0" strokeWidth="2" strokeDasharray="4 2" />

            {/* Server Unit 2 */}
            <rect x="62" y="164" width="116" height="34" rx="5" stroke="#C9C2E0" strokeWidth="1.8" fill="#140A28" />
            <circle cx="76" cy="181" r="3" fill="#10B981" />
            <circle cx="88" cy="181" r="3" fill="#FBBF24" />
            <line x1="104" y1="181" x2="164" y2="181" stroke="#C9C2E0" strokeWidth="2" strokeDasharray="3 3" />

            {/* Server Unit 3 (Database Cylinder Representation) */}
            <rect x="62" y="210" width="116" height="34" rx="5" stroke="#C9C2E0" strokeWidth="1.8" fill="#140A28" />
            <ellipse cx="90" cy="227" rx="14" ry="5" stroke="#A78BFA" strokeWidth="1.5" />
            <line x1="76" y1="227" x2="76" y2="233" stroke="#A78BFA" strokeWidth="1.5" />
            <line x1="104" y1="227" x2="104" y2="233" stroke="#A78BFA" strokeWidth="1.5" />
            <ellipse cx="90" cy="233" rx="14" ry="5" stroke="#A78BFA" strokeWidth="1.5" />
            <line x1="120" y1="227" x2="164" y2="227" stroke="#34D399" strokeWidth="2" strokeDasharray="2 3" />

            {/* Node Label: Backends */}
            <text x="120" y="78" textAnchor="middle" fill="#FFFFFF" fontFamily="var(--font-sans)" fontWeight="700" fontSize="14" letterSpacing="0.02em">
              Backends &amp; Servers
            </text>
          </g>

          {/* ======================================================== */}
          {/* 2. PENCIL LINE DRAWING IN LOOP (Server to Monitor)       */}
          {/* ======================================================== */}
          <g>
            {/* Background Pencil Guide Line */}
            <path
              d="M 190 140 C 270 140, 270 85, 360 85"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Animated Pencil Line */}
            <path
              d="M 190 140 C 270 140, 270 85, 360 85"
              stroke="url(#pencil-glow)"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeDasharray="300"
              strokeDashoffset="300"
              className="animate-[draw-line_3.5s_cubic-bezier(0.4,0,0.2,1)_infinite]"
            />

            {/* Traveling Data Spark 1 */}
            <circle r="4" fill="#38BDF8">
              <animateMotion
                path="M 190 140 C 270 140, 270 85, 360 85"
                dur="3.5s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Annotation Tag */}
            <g transform="translate(245, 92)">
              <rect x="0" y="0" width="76" height="20" rx="10" fill="#090314" stroke="#38BDF8" strokeWidth="1.2" />
              <text x="38" y="14" textAnchor="middle" fill="#38BDF8" fontFamily="var(--font-mono)" fontSize="10" fontWeight="600">
                REST / API
              </text>
            </g>
          </g>

          {/* ======================================================== */}
          {/* 3. MONITOR / FRONTEND NODE (Top Right)                   */}
          {/* ======================================================== */}
          <g className="transition-all duration-500" style={{ opacity: activeStep >= 1 ? 1 : 0.4 }}>
            {/* Monitor Outer Shell */}
            <rect
              x="360"
              y="35"
              width="175"
              height="120"
              rx="8"
              stroke="#38BDF8"
              strokeWidth="2.2"
              strokeDasharray="6 2 4 2"
              fill="url(#monitor-grad)"
              filter="url(#pencil-texture)"
            />
            {/* Monitor Stand */}
            <path d="M 435 155 L 435 178 L 418 178 L 482 178 L 465 178 L 465 155" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />

            {/* Screen Chrome Bar */}
            <rect x="368" y="43" width="159" height="16" rx="3" fill="#140A28" stroke="#38BDF8" strokeWidth="1" />
            <circle cx="378" cy="51" r="2.2" fill="#FF5F56" />
            <circle cx="385" cy="51" r="2.2" fill="#FFBD2E" />
            <circle cx="392" cy="51" r="2.2" fill="#27C93F" />
            <line x1="406" y1="51" x2="484" y2="51" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

            {/* Screen UI Dashboard Wireframes */}
            <rect x="368" y="65" width="72" height="42" rx="4" stroke="#C9C2E0" strokeWidth="1.2" fill="#0C061A" />
            <path d="M 374 94 L 388 82 L 402 88 L 416 76 L 430 84" stroke="#34D399" strokeWidth="2" strokeLinecap="round" fill="none" />
            <rect x="446" y="65" width="81" height="19" rx="3" stroke="#A78BFA" strokeWidth="1" fill="#0C061A" />
            <rect x="446" y="88" width="81" height="19" rx="3" stroke="#38BDF8" strokeWidth="1" fill="#0C061A" />

            {/* Label: Frontend */}
            <text x="447" y="22" textAnchor="middle" fill="#FFFFFF" fontFamily="var(--font-sans)" fontWeight="700" fontSize="14" letterSpacing="0.02em">
              Monitors &amp; Frontend
            </text>
          </g>

          {/* ======================================================== */}
          {/* 4. PENCIL LINE DRAWING IN LOOP (Server & Monitor to Apps)*/}
          {/* ======================================================== */}
          <g>
            {/* Cable from Backend to Mobile/SaaS Apps */}
            <path
              d="M 190 240 C 270 240, 320 300, 420 300"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d="M 190 240 C 270 240, 320 300, 420 300"
              stroke="url(#pencil-glow)"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeDasharray="300"
              strokeDashoffset="300"
              className="animate-[draw-line_3.5s_cubic-bezier(0.4,0,0.2,1)_infinite]"
              style={{ animationDelay: '0.8s' }}
            />

            {/* Cable from Monitor to Apps */}
            <path
              d="M 447 180 L 447 225"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="1.8"
              strokeDasharray="3 3"
            />
            <path
              d="M 447 180 L 447 225"
              stroke="#34D399"
              strokeWidth="2.2"
              strokeDasharray="100"
              strokeDashoffset="100"
              className="animate-[draw-line_2.5s_linear_infinite]"
              style={{ animationDelay: '1.2s' }}
            />

            {/* Traveling Data Spark 2 */}
            <circle r="4" fill="#34D399">
              <animateMotion
                path="M 190 240 C 270 240, 320 300, 420 300"
                dur="3.5s"
                repeatCount="indefinite"
                begin="0.8s"
              />
            </circle>

            {/* Sync Tag */}
            <g transform="translate(280, 258)">
              <rect x="0" y="0" width="80" height="20" rx="10" fill="#090314" stroke="#34D399" strokeWidth="1.2" />
              <text x="40" y="14" textAnchor="middle" fill="#34D399" fontFamily="var(--font-mono)" fontSize="10" fontWeight="600">
                WebSocket
              </text>
            </g>
          </g>

          {/* ======================================================== */}
          {/* 5. APPS & MOBILE CLUSTER NODE (Bottom Right)             */}
          {/* ======================================================== */}
          <g className="transition-all duration-500" style={{ opacity: activeStep >= 2 ? 1 : 0.4 }}>
            {/* Mobile / Cloud App Container */}
            <rect
              x="420"
              y="230"
              width="195"
              height="120"
              rx="12"
              stroke="#10B981"
              strokeWidth="2.2"
              strokeDasharray="5 3 2 3"
              fill="url(#app-grad)"
              filter="url(#pencil-texture)"
            />

            {/* Mobile Device Sketched Inside */}
            <rect x="435" y="243" width="48" height="92" rx="7" stroke="#FFFFFF" strokeWidth="1.8" fill="#140A28" />
            <circle cx="459" cy="250" r="1.8" fill="#C9C2E0" />
            <rect x="441" y="258" width="36" height="22" rx="3" fill="#38BDF8" fillOpacity="0.3" stroke="#38BDF8" strokeWidth="1" />
            <rect x="441" y="284" width="36" height="6" rx="2" fill="#A78BFA" fillOpacity="0.4" />
            <rect x="441" y="294" width="24" height="6" rx="2" fill="#34D399" fillOpacity="0.4" />
            <circle cx="459" cy="328" r="2.5" fill="#8378A6" />

            {/* SaaS Multi-Tenant Live Cards */}
            <rect x="495" y="248" width="108" height="38" rx="6" stroke="#C9C2E0" strokeWidth="1.4" fill="#0C061A" />
            <text x="505" y="265" fill="#FFFFFF" fontFamily="var(--font-mono)" fontSize="10" fontWeight="700">
              TENANT_ALPHA
            </text>
            <text x="505" y="278" fill="#10B981" fontFamily="var(--font-mono)" fontSize="9">
              ● ACTIVE (p99 28ms)
            </text>

            <rect x="495" y="292" width="108" height="38" rx="6" stroke="#C9C2E0" strokeWidth="1.4" fill="#0C061A" />
            <text x="505" y="309" fill="#FFFFFF" fontFamily="var(--font-mono)" fontSize="10" fontWeight="700">
              TENANT_BETA
            </text>
            <text x="505" y="322" fill="#38BDF8" fontFamily="var(--font-mono)" fontSize="9">
              ● SYNCING (100%)
            </text>

            {/* Label: Apps & Mobile */}
            <text x="517" y="372" textAnchor="middle" fill="#FFFFFF" fontFamily="var(--font-sans)" fontWeight="700" fontSize="14" letterSpacing="0.02em">
              Production Apps &amp; Mobile
            </text>
          </g>

          {/* Pencil Tip Icon Tracing the Active Path */}
          <g className="animate-[pencil-orbit_7s_linear_infinite]">
            <circle cx="0" cy="0" r="5" fill="#FFFFFF" className="animate-ping" />
            <polygon points="0,-12 6,4 -6,4" fill="#FBBF24" />
            <polygon points="0,-12 2,-2 -2,-2" fill="#241044" />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default PencilSchematic
