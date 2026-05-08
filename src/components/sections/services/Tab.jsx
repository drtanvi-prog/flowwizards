import { useState } from 'react'
import { TrendingUp, Database, LayoutDashboard, Target, UserPlus, Headphones } from 'lucide-react'

export const ICONS = {
  1: TrendingUp,
  2: Database,
  3: LayoutDashboard,
  4: Target,
  5: UserPlus,
  6: Headphones,
}

const Tab = ({ service, isActive, onClick }) => {
  const [hovered, setHovered] = useState(false)
  const Icon = ICONS[service.id]
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: isActive ? service.color : hovered ? `${service.color}22` : 'rgba(255,255,255,0.05)',
        borderColor: isActive ? service.color : hovered ? `${service.color}80` : 'rgba(255,255,255,0.1)',
        color: isActive ? '#fff' : hovered ? '#fff' : 'rgba(255,255,255,0.55)',
        boxShadow: isActive ? `0 0 28px ${service.color}45` : hovered ? `0 0 16px ${service.color}25` : 'none',
      }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border font-semibold text-sm whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0"
    >
      {Icon && <Icon size={13} strokeWidth={2.2} />}
      {service.label}
    </button>
  )
}

export default Tab
