interface Tab {
  id: string
  label: string
  count?: number
}

interface TabsProps {
  tabs: Tab[]
  activeTab: string
  onChange: (id: string) => void
}

export function Tabs({ tabs, activeTab, onChange }: TabsProps) {
  return (
    <div className="flex items-center gap-6 border-b border-[#E4DEF2] overflow-x-auto">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`relative pb-3 font-sans text-[16px] font-medium transition-colors cursor-pointer whitespace-nowrap ${
              isActive ? 'text-[#241044]' : 'text-[#6B6578] hover:text-[#241044]'
            }`}
          >
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span className="ml-2 font-mono text-[12px] text-[#6B6578]">
                ({tab.count})
              </span>
            )}
            {isActive && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#241044]" />
            )}
          </button>
        )
      })}
    </div>
  )
}

export default Tabs
