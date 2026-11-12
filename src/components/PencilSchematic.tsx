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
    <div className="w-full flex items-center justify-center">
      <svg
        viewBox="0 0 680 390"
        className="w-full h-auto max-h-[440px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
          <defs>
            {/* Multi-Color Signal Pulse Gradient */}
            <linearGradient id="sharp-schematic-signal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="50%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>

          {/* ======================================================== */}
          {/* 1. BACKEND SERVERS NODE (Left) - Sharp Royal Purple      */}
          {/* ======================================================== */}
          <g className="transition-all duration-500" style={{ opacity: activeStep >= 0 ? 1 : 0.4 }}>
            {/* Server Rack Body */}
            <rect
              x="50"
              y="100"
              width="140"
              height="185"
              rx="10"
              className="schematic-purple-stroke"
              strokeWidth="2.2"
              strokeDasharray="4 2 8 2"
              fill="none"
            />
            {/* Outer Guideline Box */}
            <rect
              x="45"
              y="95"
              width="150"
              height="195"
              rx="12"
              className="schematic-purple-stroke"
              strokeWidth="1"
              strokeOpacity="0.3"
              strokeDasharray="2 3"
              fill="none"
            />

            {/* Server Unit 1 */}
            <rect x="62" y="118" width="116" height="34" rx="5" className="schematic-unit-bg schematic-neutral-stroke" strokeWidth="1.6" />
            <circle cx="76" cy="135" r="3.5" fill="#10B981" />
            <circle cx="88" cy="135" r="3.5" fill="#0284C7" />
            <circle cx="100" cy="135" r="3.5" fill="#7C3AED" />
            <line x1="116" y1="135" x2="164" y2="135" className="schematic-purple-stroke" strokeWidth="2" strokeDasharray="4 2" />

            {/* Server Unit 2 */}
            <rect x="62" y="164" width="116" height="34" rx="5" className="schematic-unit-bg schematic-neutral-stroke" strokeWidth="1.6" />
            <circle cx="76" cy="181" r="3.5" fill="#10B981" />
            <circle cx="88" cy="181" r="3.5" fill="#F59E0B" />
            <line x1="104" y1="181" x2="164" y2="181" className="schematic-purple-stroke" strokeWidth="2" strokeDasharray="3 3" />

            {/* Server Unit 3 (Database Cylinder) */}
            <rect x="62" y="210" width="116" height="34" rx="5" className="schematic-unit-bg schematic-neutral-stroke" strokeWidth="1.6" />
            <ellipse cx="90" cy="227" rx="14" ry="5" className="schematic-purple-stroke" strokeWidth="1.6" fill="none" />
            <line x1="76" y1="227" x2="76" y2="233" className="schematic-purple-stroke" strokeWidth="1.6" />
            <line x1="104" y1="227" x2="104" y2="233" className="schematic-purple-stroke" strokeWidth="1.6" />
            <ellipse cx="90" cy="233" rx="14" ry="5" className="schematic-purple-stroke" strokeWidth="1.6" fill="none" />
            <line x1="116" y1="227" x2="164" y2="227" className="schematic-emerald-stroke" strokeWidth="2" strokeDasharray="2 3" />

            {/* Node Label: Backends */}
            <text x="120" y="78" textAnchor="middle" className="schematic-title-text font-sans font-bold text-[14px]">
              Backends &amp; Servers
            </text>
          </g>

          {/* ======================================================== */}
          {/* 2. DATA CONNECTOR (Server to Monitor) - Sky Blue Signal  */}
          {/* ======================================================== */}
          <g>
            <path
              d="M 190 140 C 270 140, 270 85, 360 85"
              className="schematic-guide-path"
              strokeWidth="1.8"
              strokeDasharray="4 4"
            />
            <path
              d="M 190 140 C 270 140, 270 85, 360 85"
              stroke="url(#sharp-schematic-signal)"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeDasharray="300"
              strokeDashoffset="300"
              className="animate-[draw-line_3.5s_cubic-bezier(0.4,0,0.2,1)_infinite]"
            />

            {/* Traveling Data Spark 1 */}
            <circle r="4" fill="#0284C7" className="dark:fill-[#38BDF8]">
              <animateMotion
                path="M 190 140 C 270 140, 270 85, 360 85"
                dur="3.5s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Annotation Tag: REST / API */}
            <g transform="translate(245, 92)">
              <rect x="0" y="0" width="76" height="20" rx="10" className="schematic-surface-bg schematic-sky-stroke" strokeWidth="1.4" />
              <text x="38" y="14" textAnchor="middle" className="schematic-tag-sky-text font-mono text-[10px] font-bold">
                REST / API
              </text>
            </g>
          </g>

          {/* ======================================================== */}
          {/* 3. MONITOR NODE (Top Right) - Sharp Electric Sky Blue    */}
          {/* ======================================================== */}
          <g className="transition-all duration-500" style={{ opacity: activeStep >= 1 ? 1 : 0.4 }}>
            {/* Monitor Outer Shell */}
            <rect
              x="360"
              y="35"
              width="175"
              height="120"
              rx="8"
              className="schematic-sky-stroke"
              strokeWidth="2.2"
              strokeDasharray="6 2 4 2"
              fill="none"
            />
            {/* Monitor Stand */}
            <path d="M 435 155 L 435 178 L 418 178 L 482 178 L 465 178 L 465 155" className="schematic-sky-stroke" strokeWidth="2" strokeLinecap="round" />

            {/* Screen Chrome Bar */}
            <rect x="368" y="43" width="159" height="16" rx="3" className="schematic-unit-bg schematic-sky-stroke" strokeWidth="1.2" />
            <circle cx="378" cy="51" r="2.2" fill="#EF4444" />
            <circle cx="385" cy="51" r="2.2" fill="#F59E0B" />
            <circle cx="392" cy="51" r="2.2" fill="#10B981" />
            <line x1="406" y1="51" x2="484" y2="51" className="schematic-neutral-stroke" strokeWidth="1.5" />

            {/* Screen UI Dashboard Wireframes */}
            <rect x="368" y="65" width="72" height="42" rx="4" className="schematic-surface-bg schematic-sky-stroke" strokeWidth="1.4" />
            <path d="M 374 94 L 388 82 L 402 88 L 416 76 L 430 84" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <rect x="446" y="65" width="81" height="19" rx="3" className="schematic-surface-bg schematic-purple-stroke" strokeWidth="1.2" />
            <rect x="446" y="88" width="81" height="19" rx="3" className="schematic-surface-bg schematic-sky-stroke" strokeWidth="1.2" />

            {/* Label: Frontend */}
            <text x="447" y="22" textAnchor="middle" className="schematic-title-text font-sans font-bold text-[14px]">
              Monitors &amp; Frontend
            </text>
          </g>

          {/* ======================================================== */}
          {/* 4. CABLE CONNECTOR (Server & Monitor to Apps) - Emerald  */}
          {/* ======================================================== */}
          <g>
            {/* Cable from Backend to Mobile/Apps */}
            <path
              d="M 190 240 C 270 240, 320 300, 420 300"
              className="schematic-guide-path"
              strokeWidth="1.8"
              strokeDasharray="4 4"
            />
            <path
              d="M 190 240 C 270 240, 320 300, 420 300"
              stroke="url(#sharp-schematic-signal)"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeDasharray="300"
              strokeDashoffset="300"
              className="animate-[draw-line_3.5s_cubic-bezier(0.4,0,0.2,1)_infinite]"
              style={{ animationDelay: '0.8s' }}
            />

            {/* Cable from Monitor to Apps */}
            <path
              d="M 447 180 L 447 225"
              className="schematic-guide-path"
              strokeWidth="1.8"
              strokeDasharray="3 3"
            />

            {/* Traveling Data Spark 2 */}
            <circle r="4" fill="#10B981">
              <animateMotion
                path="M 190 240 C 270 240, 320 300, 420 300"
                dur="3.5s"
                repeatCount="indefinite"
                begin="0.8s"
              />
            </circle>

            {/* Sync Tag: WebSocket */}
            <g transform="translate(280, 258)">
              <rect x="0" y="0" width="80" height="20" rx="10" className="schematic-surface-bg schematic-emerald-stroke" strokeWidth="1.4" />
              <text x="40" y="14" textAnchor="middle" className="schematic-tag-emerald-text font-mono text-[10px] font-bold">
                WebSocket
              </text>
            </g>
          </g>

          {/* ======================================================== */}
          {/* 5. APPS & MOBILE CLUSTER (Bottom Right) - Sharp Emerald  */}
          {/* ======================================================== */}
          <g className="transition-all duration-500" style={{ opacity: activeStep >= 2 ? 1 : 0.4 }}>
            {/* Mobile / Cloud App Container */}
            <rect
              x="420"
              y="230"
              width="195"
              height="120"
              rx="12"
              className="schematic-emerald-stroke"
              strokeWidth="2.2"
              strokeDasharray="5 3 2 3"
              fill="none"
            />

            {/* Mobile Device Sketched Inside */}
            <rect x="435" y="243" width="48" height="92" rx="7" className="schematic-unit-bg schematic-neutral-stroke" strokeWidth="1.6" />
            <circle cx="459" cy="250" r="1.8" className="schematic-neutral-stroke" />
            {/* Screen wireframe box */}
            <rect x="441" y="258" width="36" height="22" rx="3" className="schematic-surface-bg schematic-sky-stroke" strokeWidth="1.2" />
            {/* Sample wireframe lines inside phone */}
            <rect x="441" y="286" width="36" height="5" rx="2" className="schematic-sample-purple" />
            <rect x="441" y="295" width="26" height="5" rx="2" className="schematic-sample-emerald" />
            <circle cx="459" cy="328" r="2.5" className="schematic-neutral-stroke" />

            {/* Abstract Wireframe Cards (Sharp Sample Lines Only — No text or names) */}
            <rect
              x="495"
              y="248"
              width="108"
              height="38"
              rx="6"
              className="schematic-surface-bg schematic-neutral-stroke"
              strokeWidth="1.4"
            />
            {/* Sample line 1 (Emerald header line) */}
            <rect x="506" y="258" width="48" height="5" rx="2.5" className="schematic-sample-emerald" />
            {/* Sample line 2 (Muted sub line) */}
            <rect x="506" y="269" width="76" height="4" rx="2" className="schematic-sample-muted" opacity="0.6" />

            <rect
              x="495"
              y="292"
              width="108"
              height="38"
              rx="6"
              className="schematic-surface-bg schematic-neutral-stroke"
              strokeWidth="1.4"
            />
            {/* Sample line 3 (Sky Blue header line) */}
            <rect x="506" y="302" width="56" height="5" rx="2.5" className="schematic-sample-sky" />
            {/* Sample line 4 (Muted sub line) */}
            <rect x="506" y="313" width="68" height="4" rx="2" className="schematic-sample-muted" opacity="0.6" />

            {/* Label: Apps & Mobile */}
            <text x="517" y="372" textAnchor="middle" className="schematic-title-text font-sans font-bold text-[14px]">
              Production Apps &amp; Mobile
            </text>
          </g>

          {/* Pencil Tip Icon Tracing the Active Path */}
          <g className="animate-[pencil-orbit_7s_linear_infinite]">
            <circle cx="0" cy="0" r="4.5" fill="#7C3AED" className="animate-ping" />
            <polygon points="0,-12 6,4 -6,4" fill="#F59E0B" />
            <polygon points="0,-12 2,-2 -2,-2" fill="#120826" className="dark:fill-white" />
          </g>
        </svg>
    </div>
  )
}

export default PencilSchematic
