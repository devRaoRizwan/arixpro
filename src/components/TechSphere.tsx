import React, { useState, useEffect, useRef, useMemo } from 'react'

interface TechItem {
  name: string
  category: string
  color: string
  svg: React.ReactNode
}

export function TechSphere() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ rx: 0.2, ry: 0.3 })
  const [isDragging, setIsDragging] = useState(false)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const dragStart = useRef({ x: 0, y: 0 })
  const lastPos = useRef({ x: 0, y: 0 })
  const velocity = useRef({ vx: 0.0025, vy: 0.0035 })
  const reqId = useRef<number | null>(null)

  // 16 Core Verified Engineering Runtimes & Frameworks
  const techList: TechItem[] = useMemo(
    () => [
      {
        name: 'Python 3.12',
        category: 'Backend Architecture',
        color: '#3776AB',
        svg: (
          <svg viewBox="0 0 45 45" className="size-8 sm:size-10">
            <path
              d="M22.28 4.3c-1.48 0-2.9.13-4.15.35-3.67.65-4.34 2.01-4.34 4.52v3.31h8.68v1.1H10.54c-2.52 0-4.73 1.52-5.42 4.4-.8 3.31-.83 5.37 0 8.82.62 2.57 2.09 4.4 4.61 4.4h2.98v-3.97c0-2.87 2.48-5.39 5.42-5.39h8.67c2.41 0 4.34-1.99 4.34-4.41V9.17c0-2.35-1.98-4.12-4.34-4.51-1.49-.25-3.04-.36-4.52-.36zm-4.7 2.66c.9 0 1.63.74 1.63 1.66s-.73 1.65-1.63 1.65c-.9 0-1.63-.74-1.63-1.65s.73-1.66 1.63-1.66z"
              fill="#3776AB"
            />
            <path
              d="M32.23 13.58v3.86c0 2.99-2.53 5.5-5.42 5.5h-8.67c-2.38 0-4.34 2.03-4.34 4.41v8.27c0 2.35 2.05 3.73 4.34 4.41 2.75.81 5.38.95 8.67 0 2.19-.63 4.34-1.9 4.34-4.41v-3.31h-8.67v-1.1h13.01c2.52 0 3.46-1.76 4.34-4.4.91-2.72.87-5.34 0-8.83-.62-2.51-1.81-4.4-4.34-4.4l-3.26-.01zm-4.88 20.93c.9 0 1.63.74 1.63 1.65 0 .91-.73 1.66-1.63 1.66-.9 0-1.63-.75-1.63-1.66 0-.91.73-1.65 1.63-1.65z"
              fill="#FFD43B"
            />
          </svg>
        ),
      },
      {
        name: 'React 18',
        category: 'Frontend Engineering',
        color: '#61DAFB',
        svg: (
          <svg viewBox="0 0 45 40" className="size-8 sm:size-10">
            <ellipse cx="22" cy="19.6" rx="4.2" ry="4.2" fill="#61DAFB" />
            <ellipse cx="22" cy="19.6" rx="18.5" ry="7" fill="none" stroke="#61DAFB" strokeWidth="2.2" />
            <ellipse cx="22" cy="19.6" rx="18.5" ry="7" transform="rotate(60 22 19.6)" fill="none" stroke="#61DAFB" strokeWidth="2.2" />
            <ellipse cx="22" cy="19.6" rx="18.5" ry="7" transform="rotate(120 22 19.6)" fill="none" stroke="#61DAFB" strokeWidth="2.2" />
          </svg>
        ),
      },
      {
        name: 'TypeScript',
        category: 'Strict Type System',
        color: '#3178C6',
        svg: (
          <svg viewBox="0 0 44 44" className="size-8 sm:size-10">
            <rect width="44" height="44" rx="8" fill="#3178C6" />
            <path
              d="M17 21v15h-3.8V21H7.8v-3.2h14.6V21H17zm17.5 4.8c-.8-.5-1.8-.8-2.9-.8-1.5 0-2.3.7-2.3 1.7 0 1.1.9 1.5 2.7 2.2 2.8 1.1 4.5 2.4 4.5 5.1 0 3.4-2.7 5.4-6.8 5.4-2 0-3.8-.5-5.2-1.5l1.4-2.8c1.1.8 2.6 1.4 4 1.4 1.7 0 2.6-.7 2.6-1.8 0-1-.8-1.5-2.8-2.3-2.7-1-4.4-2.2-4.4-4.9 0-3.2 2.5-5.2 6.3-5.2 1.8 0 3.3.4 4.5 1.1l-1.6 2.7z"
              fill="#FFFFFF"
            />
          </svg>
        ),
      },
      {
        name: 'Node.js',
        category: 'Async Runtime',
        color: '#339933',
        svg: (
          <svg viewBox="0 0 38 43" className="size-8 sm:size-10">
            <path
              d="M19 0L1.7 10v20L19 40l17.3-10V10L19 0zm10 25.5c0 3.4-2.8 5.2-7.7 5.2-6.8 0-8.2-3.2-8.2-5.8v-1.1h3.6v1.1c0 1.1.4 2.5 4.6 2.5 3.3 0 4.1-.7 4.1-2.1 0-1-.4-1.7-5.5-2.2-4.3-.4-6.8-1.3-6.8-4.8 0-3.1 2.6-5 7.1-5 5.2 0 7.4 1.8 7.7 5.4h-3.5c-.5-2.1-1.6-2.5-4.2-2.5-3.6 0-3.9 1.2-3.9 2.1 0 1.1.5 1.4 5.3 2.1 4.8.6 7.4 1.5 7.4 5.2z"
              fill="#83CD29"
            />
          </svg>
        ),
      },
      {
        name: 'FastAPI',
        category: 'High-Throughput APIs',
        color: '#059669',
        svg: (
          <svg viewBox="0 0 45 45" className="size-8 sm:size-10">
            <circle cx="22.5" cy="22.5" r="21" fill="#009688" />
            <path d="M24 8L12 24h9l-2 13 14-18h-9l4-11z" fill="#FFFFFF" />
          </svg>
        ),
      },
      {
        name: 'PostgreSQL',
        category: 'Relational Database',
        color: '#336791',
        svg: (
          <svg viewBox="0 0 45 45" className="size-8 sm:size-10">
            <rect width="45" height="45" rx="8" fill="#336791" />
            <path
              d="M22.5 7C14 7 10 12 10 18c0 4 2 8 5 11 2 2 3 6 3 9h9c0-3 1-7 3-9 3-3 5-7 5-11 0-6-4-11-12.5-11zm-4 13a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm8 0a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
              fill="#FFFFFF"
            />
          </svg>
        ),
      },
      {
        name: 'Docker',
        category: 'Container Isolation',
        color: '#2496ED',
        svg: (
          <svg viewBox="0 0 45 45" className="size-8 sm:size-10">
            <path
              d="M44.5 19.5c-1.3-.8-3.1-.9-4.5-.4-.4-1.6-1.4-3-2.8-3.8l-.5-.3-.3.5c-.8 1.4-.7 3.3.3 4.6-1.2.7-2.6 1-4 1H6.5c-1 0-1.8.8-1.8 1.8 0 4.2 1.6 8.3 4.5 11.2C12.8 37 17.5 39 23 39c10.4 0 18.2-6.5 20.8-16.7.7-.3 1.3-.8 1.6-1.4.5-.7.4-1-.9-1.4zM10 18h3.5v3.5H10V18zm4.5 0H18v3.5h-3.5V18zm4.5 0h3.5v3.5H19V18zm0-4.5h3.5V17H19v-3.5zm4.5 4.5H27v3.5h-3.5V18zm0-4.5H27V17h-3.5v-3.5zm4.5 4.5h3.5v3.5H28V18zm0-4.5h3.5V17H28v-3.5zm0-4.5h3.5V12H28V9z"
              fill="#00AADA"
            />
          </svg>
        ),
      },
      {
        name: 'Redis',
        category: 'In-Memory Cache',
        color: '#DC382D',
        svg: (
          <svg viewBox="0 0 45 45" className="size-8 sm:size-10">
            <path
              d="M22.5 3L3 13.5l19.5 10.5 19.5-10.5L22.5 3zm0 14L8 10l14.5-7.5L37 10l-14.5 7zm-18 6.5l4 2.2v6.5l-4-2.2v-6.5zm36 0v6.5l-4 2.2v-6.5l4-2.2zM22.5 28L6 19v6.5l16.5 9 16.5-9V19L22.5 28zm0 8.5L9.5 29.5v3l13 7 13-7v-3l-13 7z"
              fill="#DC382D"
            />
          </svg>
        ),
      },
      {
        name: 'Django',
        category: 'Enterprise Python',
        color: '#092E20',
        svg: (
          <svg viewBox="0 0 45 45" className="size-8 sm:size-10">
            <rect width="45" height="45" rx="8" fill="#0C4B33" />
            <path
              d="M21 10h5v19c0 4-2 6-6 6h-2v-4h1.5c2 0 2.5-.8 2.5-2.5V10zm-8 7h4v17h-4v-3c-1 2-2.5 3-4.5 3-4 0-6-3.5-6-8.5s2.5-8.5 6.5-8.5c2 0 3.5 1 4 2.5V17zm-4 4.5c-2 0-3 1.5-3 4.5s1 4.5 3 4.5 3-1.5 3-4.5-1-4.5-3-4.5z"
              fill="#FFFFFF"
            />
          </svg>
        ),
      },
      {
        name: 'AWS Cloud',
        category: 'Cloud Infrastructure',
        color: '#FF9900',
        svg: (
          <svg viewBox="0 0 45 45" className="size-8 sm:size-10">
            <path
              d="M13 19c0 3.5 2.5 6 6 6 2 0 3.5-1 4.5-2.5V25h4V13h-4v2c-1-1.5-2.5-2-4.5-2-3.5 0-6 2.5-6 6zm4 0c0-1.8 1.2-3 3-3s3 1.2 3 3-1.2 3-3 3-3-1.2-3-3zm18-6h-3.5l-3 12h3.5l.5-3h3.5l.5 3H40L35 13zm-1.8 7l1-5 1 5h-2zM4 32c8 4 18 5 27 1 .8-.4.2-1.5-.6-1-8 4-17 3-25-1-.7-.4-1.8.4-.4 1z"
              fill="#FF9900"
            />
          </svg>
        ),
      },
      {
        name: 'Next.js',
        category: 'SSR & Edge Runtimes',
        color: '#000000',
        svg: (
          <svg viewBox="0 0 45 45" className="size-8 sm:size-10">
            <circle cx="22.5" cy="22.5" r="21" fill="#000000" />
            <path
              d="M33.3 35.2L17 14.7V31h-2.5V13h2.5l17.7 22.2h-1.4zM29.5 13H32v12.5h-2.5V13z"
              fill="#FFFFFF"
            />
          </svg>
        ),
      },
      {
        name: 'Tailwind CSS',
        category: 'Design Systems',
        color: '#38BDF8',
        svg: (
          <svg viewBox="0 0 45 45" className="size-8 sm:size-10">
            <path
              d="M12.5 18c1.5-6 6-9 13.5-9 9 0 11.5 6 13.5 9-2.5 1-4.5 1.5-6.5 1.5-7.5 0-9.5-6-13.5-6-4.5 0-6 3-7 4.5zm-7 12c1.5-6 6-9 13.5-9 9 0 11.5 6 13.5 9-2.5 1-4.5 1.5-6.5 1.5-7.5 0-9.5-6-13.5-6-4.5 0-6 3-7 4.5z"
              fill="#38BDF8"
            />
          </svg>
        ),
      },
      {
        name: 'GraphQL',
        category: 'Query Language',
        color: '#E10098',
        svg: (
          <svg viewBox="0 0 45 45" className="size-8 sm:size-10">
            <path
              d="M22.5 4L37 12.5v17L22.5 38 8 29.5v-17L22.5 4zm0 3.5L11 14.2v13.6L22.5 34.4l11.5-6.6V14.2L22.5 7.5z"
              fill="#E10098"
            />
            <circle cx="22.5" cy="4" r="3" fill="#E10098" />
            <circle cx="37" cy="12.5" r="3" fill="#E10098" />
            <circle cx="37" cy="29.5" r="3" fill="#E10098" />
            <circle cx="22.5" cy="38" r="3" fill="#E10098" />
            <circle cx="8" cy="29.5" r="3" fill="#E10098" />
            <circle cx="8" cy="12.5" r="3" fill="#E10098" />
          </svg>
        ),
      },
      {
        name: 'MongoDB',
        category: 'Document Storage',
        color: '#47A248',
        svg: (
          <svg viewBox="0 0 45 45" className="size-8 sm:size-10">
            <path
              d="M22.5 2C22.5 2 11 13 11 25c0 6.5 5 12 11.5 12 6.5 0 11.5-5.5 11.5-12 0-12-11.5-23-11.5-23zm.5 34.5v-7c0-2-1.5-3.5-3.5-3.5H16c.5-5 3.5-9.5 6.5-13.5v24h.5z"
              fill="#47A248"
            />
          </svg>
        ),
      },
      {
        name: 'Git VCS',
        category: 'Version Infrastructure',
        color: '#F05032',
        svg: (
          <svg viewBox="0 0 45 45" className="size-8 sm:size-10">
            <path
              d="M41.7 19.8L25.2 3.3a3.5 3.5 0 00-5 0l-4.1 4.1 5.2 5.2a4 4 0 014.5 4.5l5.1 5.1a4 4 0 11-2.5 2.5l-4.8-4.8v10a4 4 0 11-3.5 0V19.5a4 4 0 01-2.2-5.2l-5.1-5.1L3.3 20.2a3.5 3.5 0 000 5l16.5 16.5a3.5 3.5 0 005 0l16.9-16.9a3.5 3.5 0 000-5z"
              fill="#F05032"
            />
          </svg>
        ),
      },
      {
        name: 'Linux Debian',
        category: 'Core Kernel',
        color: '#A81D33',
        svg: (
          <svg viewBox="0 0 45 45" className="size-8 sm:size-10">
            <circle cx="22.5" cy="22.5" r="21" fill="#D70A53" />
            <path
              d="M22.5 8c-7 0-12 5-12 11 0 5 3 9 7 11 2 1 3 3 3 5 0 1-.5 2-1.5 2.5-1 .5-2.5 0-3.5-1-1.5-1.5-2-3.5-2-5.5 0-6.5 5.5-12 12-12 7.5 0 13.5 6 13.5 13.5S28.5 36 21 36c-2 0-4-.5-5.5-1.5l-1.5 3c2.5 1.5 5 2 8 2 9 0 16.5-7.5 16.5-16.5S32 8 22.5 8z"
              fill="#FFFFFF"
            />
          </svg>
        ),
      },
    ],
    []
  )

  // Fibonacci Sphere 3D coordinate generation
  const sphereNodes = useMemo(() => {
    const N = techList.length
    const radius = 155 // Sphere radius in px

    return techList.map((tech, i) => {
      // Golden spiral distribution
      const phi = Math.acos(1 - (2 * (i + 0.5)) / N)
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5)

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.cos(phi)
      const z = radius * Math.sin(phi) * Math.sin(theta)

      return { tech, x0: x, y0: y, z0: z }
    })
  }, [techList])

  // Continuous physics / auto-orbit loop with momentum dampening
  useEffect(() => {
    const loop = () => {
      if (!isDragging) {
        // Subtle constant orbit plus leftover drag momentum
        setRotation((prev) => ({
          rx: prev.rx + velocity.current.vx,
          ry: prev.ry + velocity.current.vy,
        }))

        // Damp velocity gently toward base orbital speed
        velocity.current.vx = velocity.current.vx * 0.96 + 0.0018 * 0.04
        velocity.current.vy = velocity.current.vy * 0.96 + 0.0032 * 0.04
      }

      reqId.current = requestAnimationFrame(loop)
    }

    reqId.current = requestAnimationFrame(loop)
    return () => {
      if (reqId.current) cancelAnimationFrame(reqId.current)
    }
  }, [isDragging])

  // Pointer drag controls (Mouse & Touch)
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true)
    dragStart.current = { x: e.clientX, y: e.clientY }
    lastPos.current = { x: e.clientX, y: e.clientY }
    if (containerRef.current) {
      containerRef.current.setPointerCapture(e.pointerId)
    }
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return

    const dx = e.clientX - lastPos.current.x
    const dy = e.clientY - lastPos.current.y

    // Calculate rotation delta based on drag
    const deltaY = dx * 0.008
    const deltaX = -dy * 0.008

    setRotation((prev) => ({
      rx: prev.rx + deltaX,
      ry: prev.ry + deltaY,
    }))

    // Track instant velocity for smooth spin-release momentum
    velocity.current = {
      vx: deltaX * 0.6,
      vy: deltaY * 0.6,
    }

    lastPos.current = { x: e.clientX, y: e.clientY }
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false)
    if (containerRef.current && containerRef.current.hasPointerCapture(e.pointerId)) {
      containerRef.current.releasePointerCapture(e.pointerId)
    }
  }

  // 3D rotation transform calculation
  const cosX = Math.cos(rotation.rx)
  const sinX = Math.sin(rotation.rx)
  const cosY = Math.cos(rotation.ry)
  const sinY = Math.sin(rotation.ry)

  return (
    <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center">
      {/* Interactive 3D Sphere Canvas */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative flex items-center justify-center cursor-grab active:cursor-grabbing touch-none select-none w-full"
        style={{ height: '420px', minHeight: '420px' }}
      >
        {sphereNodes.map(({ tech, x0, y0, z0 }) => {
          // 3D rotation around Y axis then X axis
          const x1 = x0 * cosY + z0 * sinY
          const z1 = -x0 * sinY + z0 * cosY
          const y2 = y0 * cosX - z1 * sinX
          const z2 = y0 * sinX + z1 * cosX

          // Perspective projection calculations
          const radius = 155
          const depth = z2 / radius // -1 (back) to +1 (front)
          const scale = 0.85 + (depth + 1) * 0.28 // 0.85 to 1.41
          const opacity = Math.max(0.35, 0.45 + (depth + 1) * 0.28) // 0.35 to 1.0
          const zIndex = Math.round((depth + 1) * 1000)

          const isHovered = hoveredTech === tech.name

          return (
            <div
              key={tech.name}
              className="tech-node-item absolute top-1/2 left-1/2 p-2 pointer-events-auto transition-opacity"
              style={{
                transform: `translate(-50%, -50%) translate3d(${x1.toFixed(1)}px, ${y2.toFixed(1)}px, 0px) scale(${isHovered ? scale * 1.15 : scale})`,
                opacity: isHovered ? 1 : opacity,
                zIndex: isHovered ? 9999 : zIndex,
                willChange: 'transform, opacity',
              }}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div
                className={`relative flex items-center justify-center rounded-2xl p-2.5 sm:p-3 transition-all duration-200 cursor-pointer ${
                  isHovered
                    ? 'ring-2 ring-[#7C3AED] shadow-xl bg-white dark:bg-[#1E1138]'
                    : 'bg-white/85 dark:bg-[#120824]/80 shadow-sm border border-slate-200/80 dark:border-white/[0.08] backdrop-blur-md hover:border-[#7C3AED]/40'
                }`}
                title={`${tech.name} • ${tech.category}`}
              >
                <div className="size-8 sm:size-10 flex items-center justify-center transition-transform duration-200">
                  <span className="inline-flex shrink-0 items-center justify-center size-full object-contain drop-shadow-sm">
                    {tech.svg}
                  </span>
                </div>

                {/* Live Tooltip when Hovered */}
                {isHovered && (
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-md bg-[#120826] text-white text-[11px] font-mono font-medium shadow-lg pointer-events-none z-50">
                    {tech.name}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Subtle Drag Prompt Indicator */}
      <div className="mt-2 flex items-center gap-2 font-mono text-[12px] text-slate-500 dark:text-[#8378A6]">
        <span className="size-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
        <span>Interactive 3D Technology Orbit • Drag or swipe to inspect runtimes</span>
      </div>
    </div>
  )
}

export default TechSphere
