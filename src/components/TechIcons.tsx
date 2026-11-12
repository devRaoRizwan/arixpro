import { useState } from 'react'

interface TechIconItem {
  name: string
  icon: string
}

const TECH_ICONS: TechIconItem[] = [
  { name: 'Python', icon: '/icons/python.svg' },
  { name: 'FastAPI', icon: '/icons/fastapi.svg' },
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'Java', icon: '/icons/java.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
  { name: 'Redis', icon: '/icons/redis.svg' },
  { name: 'Docker', icon: '/icons/docker.svg' },
  { name: 'AWS', icon: '/icons/aws.svg' },
  { name: 'Kubernetes', icon: '/icons/kubernetes.svg' },
  { name: 'MongoDB', icon: '/icons/mongodb.svg' },
  { name: 'Linux', icon: '/icons/linux.svg' },
  { name: 'Git', icon: '/icons/git.svg' },
]

function TechIconBadge({ item }: { item: TechIconItem }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="group flex flex-col items-center justify-center gap-2.5 p-2 rounded-xl transition-all hover:bg-white/[0.05] min-w-[72px]">
      <div className="size-9 flex items-center justify-center transition-transform group-hover:scale-110">
        {!failed ? (
          <img
            src={item.icon}
            alt={item.name}
            width={32}
            height={32}
            className="size-8 object-contain"
            loading="lazy"
            onError={() => setFailed(true)}
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
    ? names.map((name) => {
        const found = TECH_ICONS.find(
          (i) => i.name.toLowerCase() === name.toLowerCase()
        )
        return found || { name, icon: `/icons/${name.toLowerCase()}.svg` }
      })
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
