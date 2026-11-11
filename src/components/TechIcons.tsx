import { useState } from 'react'

interface TechIconItem {
  name: string
  file: string
  fallbackFile?: string
}

const TECH_ICONS: TechIconItem[] = [
  { name: 'Python', file: 'python/python-original.svg' },
  { name: 'FastAPI', file: 'fastapi/fastapi-original.svg' },
  { name: 'JavaScript', file: 'javascript/javascript-original.svg' },
  { name: 'Java', file: 'java/java-original.svg' },
  { name: 'TypeScript', file: 'typescript/typescript-original.svg' },
  { name: 'React', file: 'react/react-original.svg' },
  { name: 'PostgreSQL', file: 'postgresql/postgresql-original.svg' },
  { name: 'Redis', file: 'redis/redis-original.svg' },
  { name: 'Docker', file: 'docker/docker-original.svg' },
  {
    name: 'AWS',
    file: 'amazonwebservices/amazonwebservices-original.svg',
    fallbackFile: 'amazonwebservices/amazonwebservices-plain.svg',
  },
]

const CDN_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/'

function TechIconBadge({ item }: { item: TechIconItem }) {
  const [src, setSrc] = useState(`${CDN_BASE}${item.file}`)
  const [failed, setFailed] = useState(false)

  return (
    <div className="group flex flex-col items-center justify-center gap-2.5 p-2 rounded-xl transition-all hover:bg-white/[0.05] min-w-[72px]">
      <div className="size-9 flex items-center justify-center transition-transform group-hover:scale-110">
        {!failed ? (
          <img
            src={src}
            alt={item.name}
            width={32}
            height={32}
            className="size-8 object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
            loading="lazy"
            onError={(e) => {
              if (item.fallbackFile && src !== `${CDN_BASE}${item.fallbackFile}`) {
                setSrc(`${CDN_BASE}${item.fallbackFile}`)
              } else {
                e.currentTarget.style.display = 'none'
                setFailed(true)
              }
            }}
          />
        ) : (
          <span className="font-mono text-[13px] font-bold text-[#A78BFA]">
            {item.name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <span className="font-mono text-[12px] text-[#C9C2E0]/80 group-hover:text-white transition-colors text-center whitespace-nowrap">
        {item.name}
      </span>
    </div>
  )
}

export function TechIcons({ names }: { names?: string[] }) {
  const list = names
    ? TECH_ICONS.filter((i) =>
        names.some((n) => n.toLowerCase() === i.name.toLowerCase())
      )
    : TECH_ICONS

  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-4 sm:gap-8">
      {list.map((item) => (
        <TechIconBadge key={item.name} item={item} />
      ))}
    </div>
  )
}

export default TechIcons
