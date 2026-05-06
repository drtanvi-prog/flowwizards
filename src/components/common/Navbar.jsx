import React from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const navLinks = [
   { label: 'Services', hasDropdown: true, key: 'services' },
   { label: 'Solutions', hasDropdown: true, key: 'solutions' },
   { label: 'Case Studies' },
   { label: 'Pricing' },
   { label: 'About' },
   { label: 'Blog' },
   { label: 'Contact' },
]

const Navbar = ({ openDropdown, onNavMouseEnter, onNavMouseLeave }) => {
   const handleMouseEnter = (link, e) => {
      if (!link.hasDropdown) return
      onNavMouseEnter(link.key, e.currentTarget.getBoundingClientRect())
   }

   return (
      <ul className="flex items-center gap-7 list-none m-0 p-0">
         {navLinks.map((link) => (
            <li
               key={link.label}
               onMouseEnter={(e) => handleMouseEnter(link, e)}
               onMouseLeave={onNavMouseLeave}
            >
               <a
                  href="#"
                  className={`flex items-center gap-0.75 text-[16px] font-medium transition-colors no-underline ${openDropdown === link.key
                     ? 'text-[#ff4f00]'
                     : 'text-[#2D2D2D] hover:text-[#ff4f00]'
                     }`}
               >
                  {link.label}
                  {link.hasDropdown && (
                     openDropdown === link.key
                        ? <ChevronUp size={14} strokeWidth={2.5} />
                        : <ChevronDown size={14} strokeWidth={2.5} />
                  )}
               </a>
            </li>
         ))}
      </ul>
   )
}

export default Navbar
