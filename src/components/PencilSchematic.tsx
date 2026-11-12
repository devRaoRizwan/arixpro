import { useEffect, useState } from 'react'

export function PencilSchematic() {
  const [activeStep, setActiveStep] = useState(0)

  // Smooth cyclical pulse between phases (Owner -> ArixPro -> Live)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3)
    }, 3200)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full flex flex-col items-center justify-center select-none">
      <div className="w-full max-w-[700px] bg-white border border-slate-200/90 rounded-3xl p-3 sm:p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] relative overflow-hidden">
        {/* Subtle architectural grid watermark */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)',
            backgroundSize: '16px 16px'
          }}
        />

        {/* Hand-Sketched Architectural Blueprint SVG */}
        <svg
          viewBox="0 0 720 390"
          className="w-full h-auto max-h-[440px] relative z-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Hand-sketched flow gradients */}
            <linearGradient id="sketch-flow-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DC2626" />
              <stop offset="50%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#6336C5" />
            </linearGradient>

            <linearGradient id="sketch-flow-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6336C5" />
              <stop offset="50%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>

            {/* Pattern for Barber Awning Stripes */}
            <pattern id="awning-stripes" width="12" height="12" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="12" stroke="#DC2626" strokeWidth="4" />
              <line x1="6" y1="0" x2="6" y2="12" stroke="#FFFFFF" strokeWidth="4" />
            </pattern>
          </defs>

          {/* ======================================================== */}
          {/* 1. NODE 1 (LEFT): BUSINESS OWNER - LOST IN SEARCH        */}
          {/* ======================================================== */}
          <g className="transition-all duration-500" style={{ opacity: activeStep === 0 ? 1 : 0.65 }}>
            {/* Hand-drawn Outer Drafting Box */}
            <rect
              x="25"
              y="55"
              width="200"
              height="280"
              rx="14"
              stroke="#0F172A"
              strokeWidth="1.8"
              strokeDasharray="6 2 4 2"
              fill="#FFFFFF"
            />
            {/* Architectural guideline offset */}
            <rect
              x="20"
              y="50"
              width="210"
              height="290"
              rx="16"
              stroke="#94A3B8"
              strokeWidth="0.8"
              strokeDasharray="2 3"
              fill="none"
            />

            {/* Node Title */}
            <text x="125" y="40" textAnchor="middle" className="font-sans font-bold text-[13px] fill-slate-900 tracking-tight">
              1. Barber, Bistro or Store
            </text>
            <text x="125" y="80" textAnchor="middle" className="font-sans font-semibold text-[11.5px] fill-red-600">
              Lost in Search &amp; Fragile Tools
            </text>

            {/* Sketched Storefront Awning */}
            <path
              d="M 45 95 L 205 95 L 195 118 L 55 118 Z"
              fill="url(#awning-stripes)"
              stroke="#0F172A"
              strokeWidth="1.6"
            />

            {/* Sketched Store Window & Barber Pole Icon */}
            <rect x="52" y="125" width="46" height="42" rx="4" stroke="#64748B" strokeWidth="1.2" strokeDasharray="3 2" fill="#F8FAFC" />
            <text x="75" y="151" textAnchor="middle" className="font-sans text-[16px]">💈</text>
            
            {/* Store Door */}
            <rect x="105" y="125" width="42" height="42" rx="3" stroke="#64748B" strokeWidth="1.4" fill="#FFFFFF" />
            <line x1="105" y1="146" x2="147" y2="146" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="140" cy="146" r="2" fill="#0F172A" />

            {/* Sketched Owner Figure Scratching Head */}
            <g transform="translate(162, 126)">
              <circle cx="15" cy="8" r="7" stroke="#0F172A" strokeWidth="1.5" fill="#FFFFFF" />
              <path d="M 15 15 L 15 32 M 15 20 L 5 28 M 15 20 L 25 14 M 25 14 L 23 8" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
              <text x="24" y="6" className="font-sans text-[13px] font-bold fill-red-500">?</text>
            </g>

            {/* Hand-Sketched Confusing Search Query Bubble */}
            <g transform="translate(38, 178)">
              <rect x="0" y="0" width="174" height="26" rx="13" stroke="#CBD5E1" strokeWidth="1.2" fill="#F8FAFC" />
              <text x="10" y="17" className="font-sans text-[10px] fill-slate-700">
                🔍 &quot;how to build booking &amp; cards?&quot;
              </text>
            </g>

            {/* The 3 Problem Frustrations (Sketched Warning Post-its) */}
            <g transform="translate(38, 214)">
              <rect x="0" y="0" width="174" height="30" rx="6" stroke="#FCA5A5" strokeWidth="1" fill="#FEF2F2" />
              <text x="8" y="14" className="font-sans font-bold text-[10px] fill-red-800">⚠️ Plugin Conflict &amp; Crashes</text>
              <text x="8" y="24" className="font-sans text-[8.5px] fill-red-600">Booking theme error 500 on checkout</text>
            </g>

            <g transform="translate(38, 250)">
              <rect x="0" y="0" width="174" height="30" rx="6" stroke="#FDE68A" strokeWidth="1" fill="#FFFBEB" />
              <text x="8" y="14" className="font-sans font-bold text-[10px] fill-amber-900">💸 $180/mo Disconnected Fees</text>
              <text x="8" y="24" className="font-sans text-[8.5px] fill-amber-700">Builder + plugin + SMS + 3.9% cut</text>
            </g>

            <g transform="translate(38, 286)">
              <rect x="0" y="0" width="174" height="30" rx="6" stroke="#E2E8F0" strokeWidth="1" fill="#F8FAFC" />
              <text x="8" y="14" className="font-sans font-bold text-[10px] fill-slate-800">⏳ Manual Calendar WhatsApps</text>
              <text x="8" y="24" className="font-sans text-[8.5px] fill-slate-500">Double-bookings &amp; missed customers</text>
            </g>
          </g>

          {/* ======================================================== */}
          {/* CONNECTOR 1: STORE OWNER TO ARIXPRO (Hand-drawn Vector)   */}
          {/* ======================================================== */}
          <g>
            {/* Sketched Spline Guide Path */}
            <path
              d="M 225 190 C 255 190, 255 190, 285 190"
              stroke="#CBD5E1"
              strokeWidth="2"
              strokeDasharray="4 3"
            />
            {/* Animated Hand-drawn Signal Path */}
            <path
              d="M 225 190 C 255 190, 255 190, 285 190"
              stroke="url(#sketch-flow-1)"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeDasharray="120"
              strokeDashoffset="120"
              className="animate-[draw-line_3.2s_ease-in-out_infinite]"
            />
            {/* Traveling Data Pulse */}
            <circle r="4" fill="#6336C5">
              <animateMotion
                path="M 225 190 L 285 190"
                dur="3.2s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Sketched Hand-written Pill Tag */}
            <g transform="translate(230, 155)">
              <rect x="0" y="0" width="52" height="18" rx="9" stroke="#6336C5" strokeWidth="1.2" fill="#FFFFFF" />
              <text x="26" y="13" textAnchor="middle" className="font-sans text-[9px] font-bold fill-[#6336C5]">
                DISCOVERS
              </text>
            </g>
          </g>

          {/* ======================================================== */}
          {/* 2. NODE 2 (CENTER): ARIXPRO COMPLETE PACKAGE              */}
          {/* ======================================================== */}
          <g className="transition-all duration-500" style={{ opacity: activeStep === 1 ? 1 : 0.85 }}>
            {/* Central Architectural Blueprint Box */}
            <rect
              x="285"
              y="35"
              width="200"
              height="320"
              rx="16"
              stroke="#6336C5"
              strokeWidth="2.2"
              strokeDasharray="7 3 2 3"
              fill="#FFFFFF"
            />
            {/* Second Sketched Offset Guideline */}
            <rect
              x="280"
              y="30"
              width="210"
              height="330"
              rx="18"
              stroke="#6336C5"
              strokeWidth="0.9"
              strokeOpacity="0.4"
              strokeDasharray="3 3"
              fill="none"
            />

            {/* Node Title */}
            <text x="385" y="22" textAnchor="middle" className="font-sans font-bold text-[13px] fill-slate-900 tracking-tight">
              2. ArixPro Engineering
            </text>

            {/* Turnkey Badge Header */}
            <g transform="translate(300, 48)">
              <rect x="0" y="0" width="170" height="26" rx="13" fill="#6336C5" />
              <text x="85" y="17" textAnchor="middle" className="font-sans font-bold text-[10.5px] fill-white tracking-wide">
                COMPLETE TURNKEY SUITE
              </text>
            </g>

            {/* Module 1: Sketched Web App */}
            <g transform="translate(300, 84)">
              <rect x="0" y="0" width="170" height="52" rx="8" stroke="#CBD5E1" strokeWidth="1.4" fill="#F8FAFC" />
              <rect x="0" y="0" width="170" height="15" rx="8" fill="#F1F5F9" />
              <circle cx="8" cy="8" r="2" fill="#EF4444" />
              <circle cx="15" cy="8" r="2" fill="#F59E0B" />
              <circle cx="22" cy="8" r="2" fill="#10B981" />
              <text x="8" y="30" className="font-sans font-bold text-[10px] fill-slate-900">🌐 1. Custom Responsive Web</text>
              <text x="8" y="44" className="font-sans text-[8.5px] fill-slate-600">Tailored branding • Mobile-first</text>
              <text x="145" y="36" className="font-sans font-bold text-[11px] fill-[#059669]">✓</text>
            </g>

            {/* Module 2: Sketched Booking & Menu Engine */}
            <g transform="translate(300, 144)">
              <rect x="0" y="0" width="170" height="52" rx="8" stroke="#CBD5E1" strokeWidth="1.4" fill="#F8FAFC" />
              <text x="8" y="18" className="font-sans font-bold text-[10px] fill-slate-900">📅 2. Live Booking &amp; Calendar</text>
              {/* Mini Calendar Grid Sketch */}
              <g transform="translate(8, 24)">
                <rect x="0" y="0" width="26" height="18" rx="3" stroke="#94A3B8" strokeWidth="1" fill="#FFFFFF" />
                <text x="13" y="13" textAnchor="middle" className="font-sans font-bold text-[8px] fill-slate-700">10:00</text>
                <rect x="32" y="0" width="26" height="18" rx="3" stroke="#94A3B8" strokeWidth="1" fill="#FFFFFF" />
                <text x="45" y="13" textAnchor="middle" className="font-sans font-bold text-[8px] fill-slate-700">11:30</text>
                <rect x="64" y="0" width="26" height="18" rx="3" stroke="#6336C5" strokeWidth="1.4" fill="#EDE9FE" />
                <text x="77" y="13" textAnchor="middle" className="font-sans font-bold text-[8px] fill-[#6336C5]">4:30</text>
              </g>
              <text x="145" y="36" className="font-sans font-bold text-[11px] fill-[#059669]">✓</text>
            </g>

            {/* Module 3: Sketched Stripe Card Payments */}
            <g transform="translate(300, 204)">
              <rect x="0" y="0" width="170" height="52" rx="8" stroke="#CBD5E1" strokeWidth="1.4" fill="#F8FAFC" />
              <text x="8" y="18" className="font-sans font-bold text-[10px] fill-slate-900">💳 3. Direct Stripe Payments</text>
              {/* Mini Sketched Card */}
              <g transform="translate(8, 24)">
                <rect x="0" y="0" width="55" height="18" rx="3" stroke="#64748B" strokeWidth="1" fill="#FFFFFF" />
                <rect x="4" y="4" width="8" height="6" rx="1" fill="#F59E0B" />
                <line x1="16" y1="7" x2="48" y2="7" stroke="#CBD5E1" strokeWidth="2" />
                <line x1="16" y1="12" x2="36" y2="12" stroke="#CBD5E1" strokeWidth="1.5" />
              </g>
              <text x="75" y="36" className="font-sans text-[8.5px] fill-slate-500">0% markup</text>
              <text x="145" y="36" className="font-sans font-bold text-[11px] fill-[#059669]">✓</text>
            </g>

            {/* Module 4: Sketched SMS & WhatsApp Confirmations */}
            <g transform="translate(300, 264)">
              <rect x="0" y="0" width="170" height="46" rx="8" stroke="#CBD5E1" strokeWidth="1.4" fill="#F8FAFC" />
              <text x="8" y="18" className="font-sans font-bold text-[10px] fill-slate-900">📲 4. Automated SMS &amp; Alerts</text>
              <text x="8" y="33" className="font-sans text-[8.5px] fill-slate-600">Zero manual phone calls needed</text>
              <text x="145" y="32" className="font-sans font-bold text-[11px] fill-[#059669]">✓</text>
            </g>

            {/* Bottom Stamp of Guarantee */}
            <text x="385" y="335" textAnchor="middle" className="font-sans font-bold text-[9.5px] fill-[#059669] tracking-wider uppercase">
              ★ NO PLUGINS • HANDLED BY US ★
            </text>
          </g>

          {/* ======================================================== */}
          {/* CONNECTOR 2: ARIXPRO TO PRODUCTION (Hand-drawn Vector)    */}
          {/* ======================================================== */}
          <g>
            {/* Sketched Spline Guide Path */}
            <path
              d="M 485 190 C 510 190, 510 190, 535 190"
              stroke="#CBD5E1"
              strokeWidth="2"
              strokeDasharray="4 3"
            />
            {/* Animated Hand-drawn Signal Path */}
            <path
              d="M 485 190 C 510 190, 510 190, 535 190"
              stroke="url(#sketch-flow-2)"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeDasharray="120"
              strokeDashoffset="120"
              className="animate-[draw-line_3.2s_ease-in-out_infinite]"
            />
            {/* Traveling Data Pulse */}
            <circle r="4" fill="#059669">
              <animateMotion
                path="M 485 190 L 535 190"
                dur="3.2s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Sketched Hand-written Pill Tag */}
            <g transform="translate(488, 155)">
              <rect x="0" y="0" width="46" height="18" rx="9" stroke="#059669" strokeWidth="1.2" fill="#FFFFFF" />
              <text x="23" y="13" textAnchor="middle" className="font-sans text-[9px] font-bold fill-[#059669]">
                SHIPPED
              </text>
            </g>
          </g>

          {/* ======================================================== */}
          {/* 3. NODE 3 (RIGHT): LIVE APPS, REVENUE & HAPPY CLIENTS     */}
          {/* ======================================================== */}
          <g className="transition-all duration-500" style={{ opacity: activeStep === 2 ? 1 : 0.7 }}>
            {/* Hand-drawn Outer Drafting Box */}
            <rect
              x="535"
              y="55"
              width="160"
              height="280"
              rx="14"
              stroke="#059669"
              strokeWidth="1.8"
              strokeDasharray="6 2 4 2"
              fill="#FFFFFF"
            />
            {/* Architectural guideline offset */}
            <rect
              x="530"
              y="50"
              width="170"
              height="290"
              rx="16"
              stroke="#059669"
              strokeWidth="0.8"
              strokeOpacity="0.4"
              strokeDasharray="2 3"
              fill="none"
            />

            {/* Node Title */}
            <text x="615" y="40" textAnchor="middle" className="font-sans font-bold text-[13px] fill-slate-900 tracking-tight">
              3. Live &amp; Automated
            </text>
            <text x="615" y="80" textAnchor="middle" className="font-sans font-semibold text-[11.5px] fill-[#059669]">
              Full Calendar, Zero Headaches
            </text>

            {/* Sketched Smartphone Device */}
            <g transform="translate(555, 95)">
              <rect x="0" y="0" width="120" height="145" rx="10" stroke="#0F172A" strokeWidth="1.6" fill="#FFFFFF" />
              {/* Speaker Notch */}
              <line x1="45" y1="6" x2="75" y2="6" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />

              {/* Live Web Screen on Phone */}
              <rect x="8" y="14" width="104" height="118" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
              
              {/* Live Toast Confirmation on Screen */}
              <rect x="12" y="22" width="96" height="38" rx="5" stroke="#86EFAC" strokeWidth="1.2" fill="#ECFDF5" />
              <text x="18" y="34" className="font-sans font-bold text-[8.5px] fill-[#065F46]">✓ BOOKING CONFIRMED</text>
              <text x="18" y="46" className="font-sans text-[7.5px] fill-[#047857]">David M. • Fade &amp; Beard</text>
              <text x="18" y="55" className="font-sans font-bold text-[8px] fill-[#059669]">+ $65.00 PAID</text>

              {/* Live Calendar Slot Marker */}
              <rect x="12" y="66" width="96" height="24" rx="4" stroke="#CBD5E1" strokeWidth="1" fill="#FFFFFF" />
              <circle cx="20" cy="78" r="3" fill="#10B981" />
              <text x="28" y="81" className="font-sans text-[8px] fill-slate-800">4:30 PM • Slot Reserved</text>

              {/* SMS Alert Pill */}
              <g transform="translate(12, 96)">
                <rect x="0" y="0" width="96" height="20" rx="4" stroke="#BAE6FD" strokeWidth="1" fill="#F0F9FF" />
                <text x="6" y="13" className="font-sans text-[7.5px] fill-[#0369A1]">📲 SMS sent to customer</text>
              </g>
            </g>

            {/* Sketched Revenue & Status Card */}
            <g transform="translate(548, 252)">
              <rect x="0" y="0" width="134" height="66" rx="8" stroke="#A7F3D0" strokeWidth="1.4" fill="#F0FDF4" />
              <text x="10" y="18" className="font-sans font-bold text-[11px] fill-[#065F46]">
                💰 Revenue: +$910/day
              </text>
              <text x="10" y="34" className="font-sans text-[9px] fill-[#047857]">
                14 of 14 Slots Fully Booked
              </text>
              <line x1="10" y1="42" x2="124" y2="42" stroke="#A7F3D0" strokeWidth="1" />
              <text x="10" y="56" className="font-sans font-bold text-[8.5px] fill-slate-900">
                100% Automated by ArixPro
              </text>
            </g>
          </g>

          {/* ======================================================== */}
          {/* ANIMATED HAND-DRAWN PENCIL TIP TRACING PATH              */}
          {/* ======================================================== */}
          <g className="animate-[pencil-orbit_8s_linear_infinite]">
            <circle cx="0" cy="0" r="5" fill="#6336C5" className="animate-ping" />
            {/* Lead point */}
            <polygon points="0,-16 2.5,-3 -2.5,-3" fill="#0F172A" />
            {/* Wooden collar */}
            <polygon points="0,-16 7,4 -7,4" fill="#F59E0B" />
            {/* Pencil body */}
            <rect x="-6" y="4" width="12" height="15" fill="#F59E0B" rx="1" />
            {/* Brass metal ring */}
            <rect x="-6" y="19" width="12" height="4" fill="#CBD5E1" />
            {/* Pink rubber eraser */}
            <rect x="-6" y="23" width="12" height="6" fill="#F472B6" rx="1" />
          </g>
        </svg>

        {/* Clean Interactive Subtitle Bar at Bottom of the Blueprint */}
        <div className="mt-2 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-[11.5px] text-slate-600 gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block size-2 rounded-full bg-[#6336C5] animate-pulse" />
            <span className="font-medium text-slate-900">
              Architectural Hand-Sketched Blueprint
            </span>
          </div>
          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span className={activeStep === 0 ? 'text-red-600 font-bold' : 'text-slate-400'}>
              [01. Struggle]
            </span>
            <span className="text-slate-300">→</span>
            <span className={activeStep === 1 ? 'text-[#6336C5] font-bold' : 'text-slate-400'}>
              [02. ArixPro Suite]
            </span>
            <span className="text-slate-300">→</span>
            <span className={activeStep === 2 ? 'text-[#059669] font-bold' : 'text-slate-400'}>
              [03. Live &amp; Automated]
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PencilSchematic
