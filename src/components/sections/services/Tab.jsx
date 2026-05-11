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

const Tab = ({ service, isActive, onClick, variant = 'dark' }) => {
  const [hovered, setHovered] = useState(false)
  const Icon = service.icon ?? ICONS[service.id]

  const isDark = variant === 'dark'

  const style = isDark
    ? {
      background: isActive ? service.color : hovered ? `${service.color}22` : 'rgba(255,255,255,0.05)',
      borderColor: isActive ? service.color : hovered ? `${service.color}80` : 'rgba(255,255,255,0.1)',
      color: isActive ? '#fff' : hovered ? '#fff' : 'rgba(255,255,255,0.55)',
      boxShadow: isActive ? `0 0 28px ${service.color}45` : hovered ? `0 0 16px ${service.color}25` : 'none',
    }
    : {
      background: isActive ? service.color : hovered ? `${service.color}18` : `${service.color}10`,
      borderColor: isActive ? service.color : `${service.color}40`,
      color: isActive ? '#fff' : service.color,
      boxShadow: isActive ? `0 2px 12px ${service.color}35` : 'none',
    }

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={style}
      className="
                inline-flex items-center gap-1.5
                px-3 py-1.5
                sm:px-4 sm:py-2
                rounded-full border
                font-medium
                text-xs sm:text-sm
                whitespace-nowrap
                transition-all duration-200
                cursor-pointer shrink-0
            "
    >
      {Icon && <Icon size={11} strokeWidth={2.2} />}
      {service.label}
    </button>
  )
}

export default Tab
