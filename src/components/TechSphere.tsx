import React, { useState, useEffect, useRef, useMemo } from 'react'

export type TechCategory = 'all' | 'web-mobile' | 'backend-cloud' | 'data-ai'

export interface TechItem {
  name: string
  category: TechCategory
  icon: string
}

export const ALL_TECHNOLOGIES: TechItem[] = [
  // 1. Web & Mobile (11)
  { name: 'React', category: 'web-mobile', icon: '/icons/react.svg' },
  { name: 'TypeScript', category: 'web-mobile', icon: '/icons/typescript.svg' },
  { name: 'JavaScript', category: 'web-mobile', icon: '/icons/javascript.svg' },
  { name: 'HTML5', category: 'web-mobile', icon: '/icons/html.svg' },
  { name: 'CSS3', category: 'web-mobile', icon: '/icons/css.svg' },
  { name: 'Figma', category: 'web-mobile', icon: '/icons/figma.svg' },
  { name: 'Flutter', category: 'web-mobile', icon: '/icons/flutter.svg' },
  { name: 'React Native', category: 'web-mobile', icon: '/icons/reactnative.svg' },
  { name: 'Swift', category: 'web-mobile', icon: '/icons/swift.svg' },
  { name: 'Kotlin', category: 'web-mobile', icon: '/icons/kotlin.svg' },
  { name: 'Android Studio', category: 'web-mobile', icon: '/icons/androidstudio.svg' },

  // 2. Backend & Cloud (16)
  { name: 'Python', category: 'backend-cloud', icon: '/icons/python.svg' },
  { name: 'FastAPI', category: 'backend-cloud', icon: '/icons/fastapi.svg' },
  { name: 'Django', category: 'backend-cloud', icon: '/icons/django.svg' },
  { name: 'Flask', category: 'backend-cloud', icon: '/icons/flask.svg' },
  { name: 'Java', category: 'backend-cloud', icon: '/icons/java.svg' },
  { name: 'RabbitMQ', category: 'backend-cloud', icon: '/icons/rabbitmq.svg' },
  { name: 'Docker', category: 'backend-cloud', icon: '/icons/docker.svg' },
  { name: 'Kubernetes', category: 'backend-cloud', icon: '/icons/kubernetes.svg' },
  { name: 'AWS', category: 'backend-cloud', icon: '/icons/aws.svg' },
  { name: 'Google Cloud', category: 'backend-cloud', icon: '/icons/gcp.svg' },
  { name: 'Azure', category: 'backend-cloud', icon: '/icons/azure.svg' },
  { name: 'Linux', category: 'backend-cloud', icon: '/icons/linux.svg' },
  { name: 'Nginx', category: 'backend-cloud', icon: '/icons/nginx.svg' },
  { name: 'Terraform', category: 'backend-cloud', icon: '/icons/terraform.svg' },
  { name: 'Jenkins', category: 'backend-cloud', icon: '/icons/jenkins.svg' },
  { name: 'GitHub Actions', category: 'backend-cloud', icon: '/icons/githubactions.svg' },

  // 3. Data & AI Tools (19)
  { name: 'PostgreSQL', category: 'data-ai', icon: '/icons/postgresql.svg' },
  { name: 'Redis', category: 'data-ai', icon: '/icons/redis.svg' },
  { name: 'MongoDB', category: 'data-ai', icon: '/icons/mongodb.svg' },
  { name: 'MySQL', category: 'data-ai', icon: '/icons/mysql.svg' },
  { name: 'SQLite', category: 'data-ai', icon: '/icons/sqlite.svg' },
  { name: 'Supabase', category: 'data-ai', icon: '/icons/supabase.svg' },
  { name: 'Firebase', category: 'data-ai', icon: '/icons/firebase.svg' },
  { name: 'DeepSeek', category: 'data-ai', icon: '/icons/deepseek.svg' },
  { name: 'Claude', category: 'data-ai', icon: '/icons/claude.svg' },
  { name: 'ChatGPT', category: 'data-ai', icon: '/icons/chatgpt.svg' },
  { name: 'GitHub Copilot', category: 'data-ai', icon: '/icons/copilot.svg' },
  { name: 'Cursor', category: 'data-ai', icon: '/icons/cursor.svg' },
  { name: 'VS Code', category: 'data-ai', icon: '/icons/vscode.svg' },
  { name: 'Git', category: 'data-ai', icon: '/icons/git.svg' },
  { name: 'GitHub', category: 'data-ai', icon: '/icons/github.svg' },
  { name: 'Postman', category: 'data-ai', icon: '/icons/postman.svg' },
  { name: 'Selenium', category: 'data-ai', icon: '/icons/selenium.svg' },
  { name: 'Jira', category: 'data-ai', icon: '/icons/jira.svg' },
  { name: 'Slack', category: 'data-ai', icon: '/icons/slack.svg' },
]

// 4 Consolidated Categories
const CATEGORY_TABS: { key: TechCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'web-mobile', label: 'Web & Mobile' },
  { key: 'backend-cloud', label: 'Backend & Cloud' },
  { key: 'data-ai', label: 'Data & AI Tools' },
]

export function TechSphere() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedCategory, setSelectedCategory] = useState<TechCategory>('all')
  const [rotation, setRotation] = useState({ rx: 0.2, ry: 0.3 })
  const [isDragging, setIsDragging] = useState(false)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const dragStart = useRef({ x: 0, y: 0 })
  const lastPos = useRef({ x: 0, y: 0 })
  const velocity = useRef({ vx: 0.002, vy: 0.003 })
  const reqId = useRef<number | null>(null)

  // Filtered technology list based on chosen category
  const activeTechList = useMemo(() => {
    if (selectedCategory === 'all') return ALL_TECHNOLOGIES
    return ALL_TECHNOLOGIES.filter((item) => item.category === selectedCategory)
  }, [selectedCategory])

  // Fibonacci spherical distribution points for the active count
  const points = useMemo(() => {
    const pts = []
    const count = activeTechList.length
    const phi = Math.PI * (3 - Math.sqrt(5)) // Golden angle

    for (let i = 0; i < count; i++) {
      const y = count === 1 ? 0 : 1 - (i / (count - 1)) * 2
      const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y))
      const theta = phi * i

      const x = Math.cos(theta) * radiusAtY
      const z = Math.sin(theta) * radiusAtY

      pts.push({ x, y, z })
    }
    return pts
  }, [activeTechList.length])

  // Continuous physics animation loop with inertial rotation
  useEffect(() => {
    let lastTime = performance.now()

    const animate = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000
      lastTime = currentTime

      if (!isDragging) {
        setRotation((prev) => ({
          rx: prev.rx + velocity.current.vx * (delta * 60),
          ry: prev.ry + velocity.current.vy * (delta * 60),
        }))

        // Inertia decay
        velocity.current.vx *= 0.985
        velocity.current.vy *= 0.985

        // Baseline orbit
        if (Math.abs(velocity.current.vx) < 0.001) velocity.current.vx = 0.0015
        if (Math.abs(velocity.current.vy) < 0.001) velocity.current.vy = 0.002
      }

      reqId.current = requestAnimationFrame(animate)
    }

    reqId.current = requestAnimationFrame(animate)
    return () => {
      if (reqId.current) cancelAnimationFrame(reqId.current)
    }
  }, [isDragging])

  // Pointer Interaction Handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true)
    dragStart.current = { x: e.clientX, y: e.clientY }
    lastPos.current = { x: e.clientX, y: e.clientY }
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return
    const dx = e.clientX - lastPos.current.x
    const dy = e.clientY - lastPos.current.y

    lastPos.current = { x: e.clientX, y: e.clientY }

    const speedMultiplier = 0.006
    velocity.current = {
      vx: -dy * speedMultiplier,
      vy: dx * speedMultiplier,
    }

    setRotation((prev) => ({
      rx: prev.rx - dy * speedMultiplier,
      ry: prev.ry + dx * speedMultiplier,
    }))
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false)
    ;(e.target as HTMLElement).releasePointerCapture?.(e.pointerId)
  }

  // Dynamic sphere radius based on density
  const count = activeTechList.length
  const sphereRadius = count > 30 ? 190 : count > 15 ? 165 : 145

  const projectedItems = useMemo(() => {
    const cosX = Math.cos(rotation.rx)
    const sinX = Math.sin(rotation.rx)
    const cosY = Math.cos(rotation.ry)
    const sinY = Math.sin(rotation.ry)

    return points.map((p, i) => {
      const tech = activeTechList[i]

      // Rotate around Y axis
      const x1 = p.x * cosY - p.z * sinY
      const z1 = p.z * cosY + p.x * sinY

      // Rotate around X axis
      const y1 = p.y * cosX - z1 * sinX
      const z2 = z1 * cosX + p.y * sinX

      // Perspective projection
      const depth = z2
      const scaleBase = count > 30 ? 0.72 : 0.82
      const scaleMultiplier = count > 30 ? 0.22 : 0.28
      const scale = scaleBase + (depth + 1) * scaleMultiplier
      const opacity = Math.max(0.4, 0.5 + (depth + 1) * 0.25)
      const zIndex = Math.round((depth + 1) * 1000)

      const screenX = x1 * sphereRadius
      const screenY = y1 * sphereRadius

      return {
        tech,
        screenX,
        screenY,
        scale,
        opacity,
        zIndex,
      }
    })
  }, [points, rotation, activeTechList, count, sphereRadius])

  return (
    <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center select-none">
      {/* 4 Clean Category Filter Tabs (AI Fiesta Floating Pill Style) */}
      <div className="inline-flex p-1 rounded-full bg-white border border-slate-200/90 shadow-xs mb-8">
        {CATEGORY_TABS.map((tab) => {
          const isActive = selectedCategory === tab.key
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setSelectedCategory(tab.key)}
              className={`px-4 py-1.5 rounded-full font-sans text-[13px] font-medium transition-all cursor-pointer ${
                isActive
                  ? 'bg-slate-950 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              <span>{tab.label}</span>
            </button>
          )
        })}
      </div>

      {/* 3D Orbit Display Stage */}
      <div className="relative w-full flex flex-col items-center">
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className={`relative flex items-center justify-center touch-none ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{ height: '460px', minHeight: '460px', width: '100%' }}
        >
          {projectedItems.map(({ tech, screenX, screenY, scale, opacity, zIndex }) => {
            if (!tech) return null
            const isHovered = hoveredTech === tech.name

            return (
              <div
                key={tech.name}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
                className="absolute pointer-events-auto transition-transform duration-100 ease-out"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) translate3d(${screenX}px, ${screenY}px, 0px) scale(${scale})`,
                  opacity: isHovered ? 1 : opacity,
                  zIndex: isHovered ? 3000 : zIndex,
                  willChange: 'transform, opacity',
                }}
              >
                <div
                  className={`tech-sphere-tile relative flex items-center justify-center rounded-2xl p-2.5 sm:p-3 transition-all duration-200 ${
                    isHovered ? 'scale-125 is-hovered' : ''
                  }`}
                >
                  {/* Official SVG Icon */}
                  <div className="size-7 sm:size-8 flex items-center justify-center">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      width={32}
                      height={32}
                      className="size-6 sm:size-7 object-contain select-none pointer-events-none"
                      loading="eager"
                      draggable={false}
                    />
                  </div>

                  {/* Interactive Tooltip shown strictly on Hover */}
                  {isHovered && (
                    <div className="tech-sphere-tooltip absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold whitespace-nowrap pointer-events-none z-50">
                      {tech.name}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TechSphere
