import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sun,
  UserCog,
  Code2,
  GitFork,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Navbar from "./Navbar";
import Button from "../ui/Button";
import logo from "../../assets/logo.png";
import logoAirtable from "@assets/software/s8.png";
import logoJotform from "@assets/jot-icon.png";
import logoHubSpot from "@assets/software/s2.svg";
import logoPipedrive from "@assets/pipedrive-icon.png";
import logoZapier from "@assets/zapier-icon.svg";

const dropdownData = {
  services: [
    {
      icon: <Sun size={18} strokeWidth={1.8} />,
      title: "AI Automation",
      description: "Accelerate business growth",
      href: "/ai-automation-services",
    },
    {
      icon: <UserCog size={18} strokeWidth={1.8} />,
      title: "Fractional Chief Automation Officer",
      description: "Strategy-led automation, without full-time cost",
      href: "/fractional-chief-automation",
    },
    {
      icon: <Code2 size={18} strokeWidth={1.8} />,
      title: "Software Optimization",
      description: "Select and maximize the right software",
      href: "/software-setup-services",
    },
    {
      icon: <GitFork size={18} strokeWidth={1.8} />,
      title: "Workflow Automation",
      description: "Eliminate bottlenecks and human error",
      href: "/workflow-automation",
    },
  ],
  solutions: [
    { logo: logoAirtable, title: "Airtable", href: "/airtable-consultant" },
    { logo: logoJotform, title: "Jotform", href: "/jotform-consultant" },
    { logo: logoHubSpot, title: "HubSpot", href: "/hubspot-consultant" },
    { logo: logoPipedrive, title: "Pipedrive", href: "/pipedrive-consultant" },
    { logo: logoZapier, title: "Zapier", href: "/zapier-consultant" },
  ],
};

const mobileNavLinks = [
  { label: "Services", hasDropdown: true, key: "services" },
  { label: "Solutions", hasDropdown: true, key: "solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const DropdownItem = ({ item, onClose, isActive }) => {
  const inner = (
    <div
      className={`flex items-center gap-3.5 px-3 py-3 rounded-xl transition-all duration-200
          ${isActive ? "bg-[#fff3ee]" : "group-hover:bg-[#fff3ee]"}`}
    >
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 shrink-0
            ${isActive ? "bg-[#ff4f00] text-white" : "bg-[#f5f5f5] text-[#ff4f00] group-hover:bg-[#ff4f00] group-hover:text-white"}`}
      >
        {item.icon}
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <p
          className={`font-semibold text-sm m-0 leading-snug transition-colors
               ${isActive ? "text-[#ff4f00]" : "text-[#1A1A1A] group-hover:text-[#ff4f00]"}`}
        >
          {item.title}
        </p>
        <p className="text-xs text-gray-500 m-0 mt-0.5 leading-relaxed">
          {item.description}
        </p>
      </div>
      <ChevronRight
        size={15}
        className={`shrink-0 transition-all duration-200 ${isActive ? "text-[#ff4f00] opacity-100" : "text-[#ff4f00] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"}`}
      />
    </div>
  );
  if (item.href) {
    return (
      <Link
        to={item.href}
        onClick={onClose}
        className="block group no-underline"
      >
        {inner}
      </Link>
    );
  }
  return (
    <a href="#" className="block group no-underline">
      {inner}
    </a>
  );
};

const PANEL_WIDTH = 420;

const Header = () => {
  const { pathname } = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [panelLeft, setPanelLeft] = useState(0);
  const [panelTop, setPanelTop] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const closeTimer = useRef(null);
  const headerRef = useRef(null);

  const clearClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const scheduleClose = () => {
    clearClose();
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const handleNavEnter = (key, rect) => {
    clearClose();
    setOpenDropdown(key);
    const headerBottom =
      headerRef.current?.getBoundingClientRect().bottom ?? rect.bottom;
    const centered = rect.left + rect.width / 2 - PANEL_WIDTH / 2;
    const left = Math.max(
      16,
      Math.min(centered, window.innerWidth - PANEL_WIDTH - 16),
    );
    setPanelLeft(left);
    setPanelTop(headerBottom);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setTimeout(() => setMobileSubmenu(null), 300);
  };

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-100 transition-colors duration-200"
        style={{ backgroundColor: openDropdown ? "#ffffff" : "#FEF6F5" }}
      >
        <div className="max-w-360 mx-auto px-5 sm:px-8 xl:px-16 relative flex items-center justify-between h-20 xl:h-25 w-full">
          {/* Logo — left */}
          <Link to="/" className="select-none no-underline relative z-10">
            <img
              src={logo}
              alt="Flow Wizards"
              className="h-10 xl:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav — absolutely centered, never overlaps logo or CTA */}
          <div className="hidden xl:flex absolute left-1/2 -translate-x-1/2">
            <Navbar
              openDropdown={openDropdown}
              onNavMouseEnter={handleNavEnter}
              onNavMouseLeave={scheduleClose}
            />
          </div>

          {/* Right side — CTA + mobile hamburger */}
          <div className="flex items-center relative z-10">
            <div className="hidden xl:block">
              <Button variant="primary" size="md" className="text-sm! px-5! py-3!">
                Schedule a complimentary call
              </Button>
            </div>
            <button
              onClick={() => setMobileOpen(true)}
              className="w-10 h-10 bg-[#ff4f00] text-white rounded-lg flex xl:hidden items-center justify-center shrink-0 cursor-pointer"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Desktop dropdown overlay */}
      {openDropdown && (
        <>
          <div
            className="fixed bg-white border-t-[3px] border-[#ff4f00] z-90 shadow-xl rounded-bl-md rounded-br-md hidden xl:block"
            style={{ top: panelTop, left: panelLeft, width: PANEL_WIDTH }}
            onMouseEnter={clearClose}
            onMouseLeave={scheduleClose}
          >
            {openDropdown === "solutions" ? (
              <div className="py-3 px-3">
                <p className="text-[10px] font-bold text-[#ff4f00] uppercase tracking-widest mb-2 px-3">
                  By software
                </p>
                <div className="flex flex-col gap-0.5">
                  {dropdownData.solutions.map((item) => {
                    const active = !!item.href && pathname === item.href;
                    const inner = (
                      <div
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200
                            ${active ? "bg-[#fff3ee]" : "group-hover:bg-[#fff3ee]"}`}
                      >
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${active ? "bg-[#f5f5f5]" : "bg-[#f5f5f5] group-hover:bg-[#ff4f00]/10"}`}
                        >
                          <img
                            src={item.logo}
                            alt={item.title}
                            className="w-5 h-5 object-contain"
                          />
                        </div>
                        <span
                          className={`font-semibold text-sm flex-1 transition-colors ${active ? "text-[#ff4f00]" : "text-[#1A1A1A] group-hover:text-[#ff4f00]"}`}
                        >
                          {item.title}
                        </span>
                        <ChevronRight
                          size={14}
                          className={`shrink-0 transition-all duration-200 ${active ? "text-[#ff4f00] opacity-100" : "text-[#ff4f00] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"}`}
                        />
                      </div>
                    );
                    return item.href && item.href !== "#" ? (
                      <Link
                        key={item.title}
                        to={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block group no-underline"
                      >
                        {inner}
                      </Link>
                    ) : (
                      <a
                        key={item.title}
                        href="#"
                        className="block group no-underline"
                      >
                        {inner}
                      </a>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="py-3 px-3 flex flex-col gap-0.5">
                {dropdownData[openDropdown].map((item) => (
                  <DropdownItem
                    key={item.title}
                    item={item}
                    onClose={() => setOpenDropdown(null)}
                    isActive={!!item.href && pathname === item.href}
                  />
                ))}
              </div>
            )}
          </div>
          <div
            className="fixed inset-0 top-25 bg-black/65 z-80"
            onMouseEnter={scheduleClose}
          />
        </>
      )}

      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-190 xl:hidden transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={closeMobile}
      />

      {/* Mobile drawer — slides in from right */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-[#FEF6F5] z-200 flex flex-col xl:hidden
               transition-transform duration-300 ease-in-out overflow-hidden
               ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer top bar — same height & padding as header */}
        <div className="flex items-center justify-between px-4 h-20 shrink-0 bg-[#FEF6F5]">
          {mobileSubmenu ? (
            <button
              className="flex items-center gap-1 text-[#1A1A1A] font-semibold text-sm cursor-pointer"
              onClick={() => setMobileSubmenu(null)}
            >
              <ChevronLeft size={18} />
              Back
            </button>
          ) : (
            <Link to="/" className="select-none no-underline">
              <img
                src={logo}
                alt="Flow Wizards"
                className="h-10 w-auto object-contain"
              />
            </Link>
          )}
          <button
            onClick={closeMobile}
            className="w-10 h-10 bg-[#ff4f00] text-white rounded-lg flex items-center justify-center shrink-0 cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Sliding content area */}
        <div className="relative flex-1 overflow-hidden">
          {/* Main nav — slides out left when submenu opens */}
          <div
            className={`absolute inset-0 overflow-y-auto transition-transform duration-300 ease-in-out
                     ${mobileSubmenu ? "-translate-x-full" : "translate-x-0"}`}
          >
            <div className="flex flex-col px-5 pt-2">
              {mobileNavLinks.map((link) => {
                const isActive = link.href
                  ? pathname === link.href
                  : link.hasDropdown
                    ? dropdownData[link.key]?.some(
                        (item) => item.href && pathname === item.href,
                      )
                    : false;
                return (
                  <div key={link.label}>
                    {link.href ? (
                      <Link
                        to={link.href}
                        onClick={closeMobile}
                        className="flex items-center justify-between py-5 no-underline"
                      >
                        <span
                          className={`font-semibold text-lg ${isActive ? "text-[#ff4f00]" : "text-[#1A1A1A]"}`}
                        >
                          {link.label}
                        </span>
                      </Link>
                    ) : (
                      <div
                        className="flex items-center justify-between py-5 cursor-pointer"
                        onClick={() =>
                          link.hasDropdown && setMobileSubmenu(link.key)
                        }
                      >
                        <span
                          className={`font-semibold text-lg ${isActive ? "text-[#ff4f00]" : "text-[#1A1A1A]"}`}
                        >
                          {link.label}
                        </span>
                        {link.hasDropdown && (
                          <ChevronRight
                            size={20}
                            className={
                              isActive ? "text-[#ff4f00]" : "text-[#1A1A1A]"
                            }
                          />
                        )}
                      </div>
                    )}
                    <hr className="border-gray-300 m-0" />
                  </div>
                );
              })}
              <div className="pt-4 pb-8">
                <Button variant="primary" size="md" className="w-full! text-sm!">
                  Schedule a complimentary call
                </Button>
              </div>
            </div>
          </div>

          {/* Submenu — slides in from right */}
          <div
            className={`absolute inset-0 overflow-y-auto transition-transform duration-300 ease-in-out
                     ${mobileSubmenu ? "translate-x-0" : "translate-x-full"}`}
          >
            {mobileSubmenu && (
              <div className="flex flex-col px-5 pt-4">
                {mobileSubmenu === "solutions" ? (
                  <div className="border border-[#ff4f00]/20 rounded-xl overflow-hidden bg-white">
                    <div className="px-4 pt-3 pb-1">
                      <p className="text-[10px] font-bold text-[#ff4f00] uppercase tracking-widest">
                        By software
                      </p>
                    </div>
                    {dropdownData.solutions.map((item, idx) => {
                      const active = !!item.href && pathname === item.href;
                      const cls = `flex items-center gap-3 px-4 py-3.5 no-underline ${idx < dropdownData.solutions.length - 1 ? "border-b border-gray-100" : ""}`;
                      const inner = (
                        <>
                          <div
                            className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${active ? "bg-[#ff4f00]" : "bg-[#f5f5f5]"}`}
                          >
                            <img
                              src={item.logo}
                              alt={item.title}
                              className="h-5 w-auto object-contain"
                            />
                          </div>
                          <p
                            className={`font-semibold text-sm m-0 ${active ? "text-[#ff4f00]" : "text-[#1A1A1A]"}`}
                          >
                            {item.title}
                          </p>
                        </>
                      );
                      return item.href && item.href !== "#" ? (
                        <Link
                          key={item.title}
                          to={item.href}
                          className={cls}
                          onClick={closeMobile}
                        >
                          {inner}
                        </Link>
                      ) : (
                        <a key={item.title} href="#" className={cls}>
                          {inner}
                        </a>
                      );
                    })}
                  </div>
                ) : (
                  <div className="border border-[#ff4f00]/20 rounded-xl overflow-hidden bg-white">
                    {dropdownData[mobileSubmenu].map((item, idx) => {
                      const active = !!item.href && pathname === item.href;
                      const cls = `flex items-start gap-3 px-4 py-4 no-underline ${idx < dropdownData[mobileSubmenu].length - 1 ? "border-b border-gray-100" : ""}`;
                      const inner = (
                        <>
                          <div
                            className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0
                                          ${active ? "bg-[#ff4f00] text-white" : "bg-[#fff5f2] text-[#ff4f00]"}`}
                          >
                            {item.icon}
                          </div>
                          <div>
                            <p
                              className={`font-semibold text-sm m-0 ${active ? "text-[#ff4f00]" : "text-[#1A1A1A]"}`}
                            >
                              {item.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5 m-0">
                              {item.description}
                            </p>
                          </div>
                        </>
                      );
                      return item.href ? (
                        <Link
                          key={item.title}
                          to={item.href}
                          className={cls}
                          onClick={closeMobile}
                        >
                          {inner}
                        </Link>
                      ) : (
                        <a key={item.title} href="#" className={cls}>
                          {inner}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
