import { useState, useRef } from 'react'
import {
   Sun, UserCog, Code2, GitFork, Users, Megaphone, DollarSign, BarChart2,
   Menu, X, ChevronRight, ChevronLeft,
} from 'lucide-react'
import Navbar from './Navbar'
import Button from '../ui/Button'
import logo from '../../assets/logo.png'

const dropdownData = {
   services: [
      { icon: <Sun size={18} strokeWidth={1.8} />, title: 'AI Automation', description: 'Accelerate business growth' },
      { icon: <UserCog size={18} strokeWidth={1.8} />, title: 'Fractional Chief Automation Officer', description: 'Strategy-led automation, without full-time cost' },
      { icon: <Code2 size={18} strokeWidth={1.8} />, title: 'Software Optimization', description: 'Select and maximize the right software' },
      { icon: <GitFork size={18} strokeWidth={1.8} />, title: 'Workflow Automation', description: 'Eliminate bottlenecks and human error' },
   ],
   solutions: [
      { icon: <Users size={18} strokeWidth={1.8} />, title: 'CRM Automation', description: 'Streamline your customer relationships' },
      { icon: <Megaphone size={18} strokeWidth={1.8} />, title: 'Marketing Automation', description: 'Run campaigns on autopilot' },
      { icon: <DollarSign size={18} strokeWidth={1.8} />, title: 'Sales Automation', description: 'Close more deals with less effort' },
      { icon: <BarChart2 size={18} strokeWidth={1.8} />, title: 'Reporting & Analytics', description: 'Make data-driven decisions faster' },
   ],
}

const mobileNavLinks = [
   { label: 'Services', hasDropdown: true, key: 'services' },
   { label: 'Solutions', hasDropdown: true, key: 'solutions' },
   { label: 'Case Studies' },
   { label: 'Pricing' },
   { label: 'About' },
   { label: 'Blog' },
   { label: 'Contact' },
]

const DropdownItem = ({ item }) => (
   <a href="#" className="flex items-start gap-4 px-5 py-4 group no-underline transition-colors">
      <div className="w-10 h-10 rounded-lg bg-[#f5f5f5] group-hover:bg-[#ff4f00] flex items-center justify-center transition-colors text-[#ff4f00] group-hover:text-white shrink-0">
         {item.icon}
      </div>
      <div className="flex flex-col">
         <p className="font-semibold text-sm text-[#1A1A1A] group-hover:text-[#ff4f00] m-0 mb-0.5 transition-colors">
            {item.title}
         </p>
         <div className="h-px bg-[#ff4f00] w-0 group-hover:w-full transition-all duration-300 ease-out mb-0.5" />
         <p className="text-xs text-gray-600 m-0">{item.description}</p>
      </div>
   </a>
)

const PANEL_WIDTH = 420

const Header = () => {
   const [openDropdown, setOpenDropdown] = useState(null)
   const [panelLeft, setPanelLeft] = useState(0)
   const [panelTop, setPanelTop] = useState(0)
   const [mobileOpen, setMobileOpen] = useState(false)
   const [mobileSubmenu, setMobileSubmenu] = useState(null)
   const closeTimer = useRef(null)
   const headerRef = useRef(null)

   const clearClose = () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
   }

   const scheduleClose = () => {
      clearClose()
      closeTimer.current = setTimeout(() => setOpenDropdown(null), 150)
   }

   const handleNavEnter = (key, rect) => {
      clearClose()
      setOpenDropdown(key)
      const headerBottom = headerRef.current?.getBoundingClientRect().bottom ?? rect.bottom
      const left = Math.min(rect.left, window.innerWidth - PANEL_WIDTH - 16)
      setPanelLeft(left)
      setPanelTop(headerBottom)
   }

   const closeMobile = () => {
      setMobileOpen(false)
      setTimeout(() => setMobileSubmenu(null), 300)
   }

   return (
      <>
         <header
            ref={headerRef}
            className="sticky top-0 z-100 px-6 xl:px-10 transition-colors duration-200"
            style={{ backgroundColor: openDropdown ? '#ffffff' : '#FEF6F5' }}
         >
            <div className="max-w-[1500px] mx-auto flex items-center justify-between h-20 xl:h-25 w-full">

               {/* Logo */}
               <a href="/" className="select-none no-underline">
                  <img src={logo} alt="Flow Wizards" className="h-10 xl:h-[80px] w-auto object-contain" />
               </a>

               {/* Desktop Nav + CTA — grouped on the right */}
               <div className="hidden xl:flex items-center gap-12">
                  <Navbar
                     openDropdown={openDropdown}
                     onNavMouseEnter={handleNavEnter}
                     onNavMouseLeave={scheduleClose}
                  />
                  <Button variant="primary" size="md" className="text-sm! px-5! py-3!">
                     Schedule a complimentary call
                  </Button>
               </div>

               {/* Mobile right side */}
               <div className="flex xl:hidden items-center gap-1.5">
                  <Button variant="primary" size="sm" className="text-[10px]! px-2.5! py-1.5! whitespace-nowrap rounded-md!">
                     Schedule a complimentary call
                  </Button>
                  <button
                     onClick={() => setMobileOpen(true)}
                     className="w-8 h-8 bg-[#ff4f00] text-white rounded-md flex items-center justify-center shrink-0 cursor-pointer"
                  >
                     <Menu size={18} />
                  </button>
               </div>

            </div>
         </header>

         {/* Desktop dropdown overlay */}
         {openDropdown && (
            <>
               <div
                  className="fixed bg-white border-t-[3px] border-[#ff4f00] z-90 shadow-xl rounded-sm"
                  style={{ top: panelTop, left: panelLeft, width: PANEL_WIDTH }}
                  onMouseEnter={clearClose}
                  onMouseLeave={scheduleClose}
               >
                  <div className="py-3 divide-y divide-gray-100">
                     {dropdownData[openDropdown].map((item) => (
                        <DropdownItem key={item.title} item={item} />
                     ))}
                  </div>
               </div>
               <div className="fixed inset-0 top-25 bg-black/65 z-80" onMouseEnter={scheduleClose} />
            </>
         )}

         {/* Mobile backdrop */}
         <div
            className={`fixed inset-0 bg-black/50 z-190 xl:hidden transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={closeMobile}
         />

         {/* Mobile drawer — slides in from right */}
         <div
            className={`fixed top-0 right-0 h-full w-full max-w-sm bg-[#FEF6F5] z-200 flex flex-col xl:hidden
               transition-transform duration-300 ease-in-out overflow-hidden
               ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
         >
            {/* Drawer top bar */}
            <div className="flex items-center justify-between px-4 py-4 shrink-0 bg-[#FEF6F5]">
               {mobileSubmenu ? (
                  <button
                     className="flex items-center gap-1 text-[#1A1A1A] font-semibold text-sm cursor-pointer"
                     onClick={() => setMobileSubmenu(null)}
                  >
                     <ChevronLeft size={18} />
                     Back
                  </button>
               ) : (
                  <a href="/" className="select-none no-underline">
                     <img src={logo} alt="Flow Wizards" className="h-9 w-auto object-contain" />
                  </a>
               )}
               <div className="flex items-center gap-1.5">
                  <Button variant="primary" size="sm" className="text-[10px]! px-2.5! py-1.5! whitespace-nowrap rounded-md!">
                     Schedule a complimentary call
                  </Button>
                  <button
                     onClick={closeMobile}
                     className="w-8 h-8 bg-[#ff4f00] text-white rounded-md flex items-center justify-center shrink-0 cursor-pointer"
                  >
                     <X size={18} />
                  </button>
               </div>
            </div>

            {/* Sliding content area */}
            <div className="relative flex-1 overflow-hidden">

               {/* Main nav — slides out left when submenu opens */}
               <div
                  className={`absolute inset-0 overflow-y-auto transition-transform duration-300 ease-in-out
                     ${mobileSubmenu ? '-translate-x-full' : 'translate-x-0'}`}
               >
                  <div className="flex flex-col px-5 pt-2">
                     {mobileNavLinks.map((link) => (
                        <div key={link.label}>
                           <div
                              className="flex items-center justify-between py-5 cursor-pointer"
                              onClick={() => link.hasDropdown && setMobileSubmenu(link.key)}
                           >
                              <span className="text-[#1A1A1A] font-semibold text-lg">{link.label}</span>
                              {link.hasDropdown && <ChevronRight size={20} className="text-[#1A1A1A]" />}
                           </div>
                           <hr className="border-gray-300 m-0" />
                        </div>
                     ))}
                     <div className="pb-8" />
                  </div>
               </div>

               {/* Submenu — slides in from right */}
               <div
                  className={`absolute inset-0 overflow-y-auto transition-transform duration-300 ease-in-out
                     ${mobileSubmenu ? 'translate-x-0' : 'translate-x-full'}`}
               >
                  {mobileSubmenu && (
                     <div className="flex flex-col px-5 pt-4">
                        <div className="border border-[#ff4f00]/20 rounded-xl overflow-hidden bg-white">
                           {dropdownData[mobileSubmenu].map((item, idx) => (
                              <a
                                 key={item.title}
                                 href="#"
                                 className={`flex items-start gap-3 px-4 py-4 no-underline ${idx < dropdownData[mobileSubmenu].length - 1 ? 'border-b border-gray-100' : ''}`}
                              >
                                 <div className="w-9 h-9 rounded-lg bg-[#fff5f2] flex items-center justify-center text-[#ff4f00] shrink-0">
                                    {item.icon}
                                 </div>
                                 <div>
                                    <p className="font-semibold text-sm text-[#1A1A1A] m-0">{item.title}</p>
                                    <p className="text-xs text-gray-500 mt-0.5 m-0">{item.description}</p>
                                 </div>
                              </a>
                           ))}
                        </div>
                     </div>
                  )}
               </div>

            </div>
         </div>
      </>
   )
}

export default Header
