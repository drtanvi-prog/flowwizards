import { useLocation, Link } from "react-router-dom";
import { openCalendly } from '@/utils/calendly';
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "../../assets/logo.png";
import Button from "../ui/Button";
import FooterCTA from "./FooterCTA";

const SOLUTIONS = [
  { label: "Airtable", href: "/airtable-consultant" },
  { label: "Jotform", href: "/jotform-consultant" },
  { label: "Pipedrive", href: "/pipedrive-consultant" },
  { label: "Zapier", href: "/zapier-consultant" },
];
const RESOURCES = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
const PORTAL = [
  { label: "Tuesday Wizard", href: "https://tuesdaywizards.com" },
];
const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/tuesdaywizard" },
  { label: "Instagram", href: "https://www.instagram.com/flow_wizards/" },
];

const ROW1 = [
  { label: "Terms", href: "/terms-of-service" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];
const ROW2 = [
  { label: "Master Consultant Service Agreement", href: "/msa" },
];

const linkStyle = {
  fontSize: "0.83rem",
  color: "rgba(255,255,255,0.85)",
};
const NavLink = ({ children, href = "#" }) => {
  const cls = "transition-colors duration-200";
  const handlers = {
    onMouseEnter: (e) => (e.target.style.color = "#F07020"),
    onMouseLeave: (e) => (e.target.style.color = "rgba(255,255,255,0.85)"),
  };
  if (href.startsWith("/")) {
    return (
      <Link to={href} className={cls} style={linkStyle} {...handlers}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={cls}
      style={linkStyle}
      {...handlers}
    >
      {children}
    </a>
  );
};

const ColHead = ({ children }) => (
  <h4
    className="font-bold text-white mb-4"
    style={{ fontSize: "0.85rem", letterSpacing: "0.02em" }}
  >
    {children}
  </h4>
);

const Footer = () => {
  const { pathname } = useLocation();
  const HIDE_CTA_PATHS = [
    "/ai-automation-services",
    "/workflow-automation",
    "/case-studies",
    "/contact",
    "/zapier-consultant",
    "/privacy-policy",
    "/msa",
    "/terms-of-service",
    "/location",
  ];
  const showCTA = !HIDE_CTA_PATHS.includes(pathname);

  let ctaProps = {
    heading: (
      <>
        Businesses standing still go with the Flow. Businesses surging forward
        go with Flow.
      </>
    ),
    subtext: (
      <>
        The{" "}
        <span style={{ textDecoration: "line-through", opacity: 0.7 }}>
          future
        </span>{" "}
        present belongs to those who move fastest.
        <br />
        See you there?
      </>
    ),
    buttonText: "Schedule your free discovery session",
  };

  if (pathname === "/airtable-consultant") {
    ctaProps = {
      heading: (
        <>
          Airtable can do wonders for your business
          <br />
          <span style={{ opacity: 0.75 }}>Let us show you how</span>
        </>
      ),
      subtext: "",
      buttonText: "Schedule your free discovery session",
      bgColor: "#E84040",
    };
  } else if (pathname === "/about") {
    ctaProps = {
      heading: (
        <>
          Now, let's get to <span style={{ opacity: 0.75 }}>know you.</span>
        </>
      ),
      subtext: "",
      buttonText: "Schedule your free discovery session",
    };
  } else if (pathname === "/hubspot-consultant") {
    ctaProps = {
      heading: (
        <>
          You already invested in HubSpot.{" "}
          <span style={{ opacity: 0.75 }}>
            Let us help you get the most out of it.
          </span>
        </>
      ),
      subtext: "",
      buttonText: "Schedule your free discovery session",
    };
  } else if (pathname === "/pipedrive-consultant") {
    ctaProps = {
      heading: (
        <>
          Your CRM tool is a{" "}
          <span style={{ opacity: 0.75 }}>sleeping giant</span>
        </>
      ),
      subtext:
        "Now let’s turn it into a mean, dark-green, deal-closing machine.",
      buttonText: "Schedule your free discovery session",
    };
  } else if (pathname === "/ai-automation-services") {
    ctaProps = {
      heading: (
        <>
          The goal isn’t more automation. It’s a business that runs without you babysitting it.
        </>
      ),
      subtext: (
        <>
          <b>Bonus:</b> You’ll leave your competitors wondering how you make it
          look so effortless.
        </>
      ),
      buttonText: "Let’s talk about what that looks like",
    };
  } else if (pathname === "/fractional-chief-automation") {
    ctaProps = {
      heading: (
        <>
          Get total peace of mind,
          <br />
          and scale without the drama
        </>
      ),
      subtext: (
        <>
          <b>Bonus:</b> You’ll leave your competitors wondering how you make it
          look so effortless.
        </>
      ),
      buttonText: "Schedule your free discovery session",
    };
  } else if (pathname === "/software-setup-services") {
    ctaProps = {
      heading: (
        <>
          Get ready, get set up...
          <br />
          and watch your business grow.
        </>
      ),
      subtext: "",
      buttonText: "Schedule your free discovery session",
    };
  } else if (pathname === "/blog" || pathname.startsWith("/blog/")) {
    ctaProps = {
      heading: (
        <>
          Let's make your workflow woes a{" "}
          <span style={{ opacity: 0.65 }}>distant memory.</span>
        </>
      ),
      subtext: "",
      buttonText: "Schedule free discovery session",
      bgColor: "#E84040",
    };
  } else if (pathname === "/jotform-consultant") {
    ctaProps = {
      heading: (
        <>
          Jotform can do wonders for your business
          <br />
          <span style={{ opacity: 0.75 }}>Let us show you how</span>
        </>
      ),
      subtext: "",
      buttonText: "Schedule your free discovery session",
      bgColor: "#E84040",
    };
  } else if (pathname === "/pricing") {
    ctaProps = {
      heading: (
        <>
          Not sure which package is right for you?{" "}
          <span style={{ color: "#FFBDAA" }}>Let's talk about it</span>
        </>
      ),
      subtext: "",
      buttonText: "Schedule your free discovery session",
      bgColor: "#E84040",
    };
  }

  return (
    <footer>
      {showCTA && <FooterCTA {...ctaProps} bgColor={ctaProps.bgColor} />}

      {/* ── Main Footer ── */}
      <div style={{ background: "#161615" }}>
        <div className="max-w-360 mx-auto px-5 sm:px-8 xl:px-16 pt-14 pb-10">
          {/* ── Top section: Brand + 3 nav cols ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr_1fr_1.4fr] gap-10 lg:gap-8 xl:gap-12 pb-10">
            {/* Col 1 — Brand */}
            <div className="flex flex-col gap-5">
              <div className="select-none">
                <img
                  src={logo}
                  alt="Flow Wizards"
                  style={{
                    width: "120px",
                    height: "auto",
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </div>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.85,
                }}
              >
                Certified workflow, sales, and marketing automation specialists
                helping businesses simplify processes, streamline operations,
                and scale their profits.
              </p>
              <Button
                variant="primary"
                size="md"
                className="self-start text-[11px]! sm:text-sm! px-3! py-1.5! sm:px-5! sm:py-2.5!"
                onClick={openCalendly}
              >
                Schedule a complimentary call
              </Button>
              {/* Socials inline */}
              <div className="flex items-center gap-4 mt-1">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "0.78rem",
                      color: "rgba(255,255,255,0.4)",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#F07020")}
                    onMouseLeave={(e) =>
                      (e.target.style.color = "rgba(255,255,255,0.4)")
                    }
                    className="transition-colors duration-200"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 — Solutions */}
            <div>
              <ColHead>Solutions</ColHead>
              <ul className="flex flex-col gap-3">
                {SOLUTIONS.map((s) => (
                  <li key={s.label}>
                    <NavLink href={s.href}>{s.label}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Company */}
            <div>
              <ColHead>Company</ColHead>
              <ul className="flex flex-col gap-3">
                {RESOURCES.map((r) => (
                  <li key={r.label}>
                    <NavLink href={r.href}>{r.label}</NavLink>
                  </li>
                ))}
                {PORTAL.map((p) => (
                  <li key={p.label}>
                    <NavLink href={p.href}>{p.label}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Get in Touch */}
            <div>
              <ColHead>Get in Touch</ColHead>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={13}
                    style={{ color: "#F07020", marginTop: 3, flexShrink: 0 }}
                  />
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.75,
                    }}
                  >
                    31500 Grape St Ste 3-118
                    <br />
                    Lake Elsinore, CA 92532
                    <br />
                    United States
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone
                    size={13}
                    style={{ color: "#F07020", flexShrink: 0 }}
                  />
                  <a
                    href="tel:+19495912301"
                    style={{
                      fontSize: "0.8rem",
                      color: "rgba(255,255,255,0.5)",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#fff")}
                    onMouseLeave={(e) =>
                      (e.target.style.color = "rgba(255,255,255,0.5)")
                    }
                    className="transition-colors duration-200"
                  >
                    +1 (949) 591-2301
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={13} style={{ color: "#F07020", flexShrink: 0 }} />
                  <a
                    href="mailto:sales@tuesdaywizards.com"
                    style={{
                      fontSize: "0.8rem",
                      color: "rgba(255,255,255,0.5)",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#fff")}
                    onMouseLeave={(e) =>
                      (e.target.style.color = "rgba(255,255,255,0.5)")
                    }
                    className="transition-colors duration-200"
                  >
                    sales@tuesdaywizards.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="max-w-360 mx-auto px-5 sm:px-8 xl:px-16 py-5 flex flex-col gap-2 items-center text-center">
            <div className="flex flex-wrap items-center justify-center gap-y-1">
              <span style={{ fontSize: "0.82rem", color: "#fff" }}>
                © {new Date().getFullYear()} ALL RIGHTS RESERVED.
              </span>
              {ROW1.map((link) => (
                <span key={link.label} className="flex items-center">
                  <span
                    style={{
                      margin: "0 10px",
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.82rem",
                    }}
                  >
                    |
                  </span>
                  <NavLink
                    href={link.href}
                    style={{ fontSize: "0.82rem", color: "#fff" }}
                  >
                    {link.label}
                  </NavLink>
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-y-1">
              {ROW2.map((link, i) => (
                <span key={link.label} className="flex items-center">
                  {i > 0 && (
                    <span
                      style={{
                        margin: "0 10px",
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "0.82rem",
                      }}
                    >
                      |
                    </span>
                  )}
                  <NavLink
                    href={link.href}
                    style={{ fontSize: "0.82rem", color: "#fff" }}
                  >
                    {link.label}
                  </NavLink>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
