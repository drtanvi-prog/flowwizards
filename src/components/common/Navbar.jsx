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
      <ul className="flex items-center gap-7 list-none m-0 p-0">
         {navLinks.map((link) => {
            const isActive = link.href ? pathname === link.href : false
            const isDropdownOpen = openDropdown === link.key
            const colorClass = isActive || isDropdownOpen
               ? 'text-[#ff4f00]'
               : 'text-[#2D2D2D] hover:text-[#ff4f00]'

            const inner = (
               <>
                  {link.label}
                  {link.hasDropdown && (
                     isDropdownOpen
                        ? <ChevronUp size={14} strokeWidth={2.5} />
                        : <ChevronDown size={14} strokeWidth={2.5} />
                  )}
               </>
            )

            return (
               <li
                  key={link.label}
                  onMouseEnter={(e) => handleMouseEnter(link, e)}
                  onMouseLeave={onNavMouseLeave}
               >
                  {link.href ? (
                     <Link
                        to={link.href}
                        className={`flex items-center gap-0.75 text-[15px] font-medium font-roboto transition-colors no-underline ${colorClass}`}
                     >
                        {inner}
                     </Link>
                  ) : (
                     <a
                        href="#"
                        className={`flex items-center gap-0.75 text-[15px] font-medium font-roboto transition-colors no-underline ${colorClass}`}
                     >
                        {inner}
                     </a>
                  )}
               </li>
            )
         })}
      </ul>
   )
}

export default Navbar
