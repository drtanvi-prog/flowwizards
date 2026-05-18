import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, ChevronUp } from 'lucide-react'

const navLinks = [
  { label: 'Services', hasDropdown: true, key: 'services' },
  { label: 'Solutions', hasDropdown: true, key: 'solutions' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const Navbar = ({ openDropdown, onNavMouseEnter, onNavMouseLeave }) => {
  const { pathname } = useLocation()

  const handleMouseEnter = (link, e) => {
    if (!link.hasDropdown) return
    onNavMouseEnter(link.key, e.currentTarget.getBoundingClientRect())
  }

  return (
    <ul className="flex items-center gap-0.5 list-none m-0 p-0">
      {navLinks.map((link) => {
        const isActive = link.href ? pathname === link.href : false
        const isOpen = openDropdown === link.key
        const highlighted = isActive || isOpen

        const label = (
          <span
            className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-[13.5px] font-medium whitespace-nowrap
              transition-all duration-150
              ${highlighted
                ? 'text-[#ff4f00] bg-[#fff3ee]'
                : 'text-[#3D3D3D] hover:text-[#ff4f00] hover:bg-[#fff3ee]'
              }`}
          >
            {link.label}
            {link.hasDropdown && (
              isOpen
                ? <ChevronUp size={13} strokeWidth={2.5} className="mt-px" />
                : <ChevronDown size={13} strokeWidth={2.5} className="mt-px" />
            )}
          </span>
        )

        return (
          <li
            key={link.label}
            onMouseEnter={(e) => handleMouseEnter(link, e)}
            onMouseLeave={onNavMouseLeave}
          >
            {link.href ? (
              <Link to={link.href} className="no-underline">
                {label}
              </Link>
            ) : (
              <a href="#" className="no-underline">
                {label}
              </a>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default Navbar
