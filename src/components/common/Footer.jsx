import { useLocation, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Button from "../ui/Button";
import FooterCTA from "./FooterCTA";

const SOLUTIONS = ["Airtable", "Jotform", "Pipedrive", "Zapier"];
const RESOURCES = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Brand kit", href: "#" },
];
const PORTAL = [
  { label: "Tuesday Wizard", href: "https://tuesdaywizards.com" },
];
const SOCIALS = ["Instagram", "X", "LinkedIn"];

const ROW1 = [
  { label: "Impressum", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "#" },
];
const ROW2 = [
  "Consent Preferences",
  "Your Privacy Choices",
  "Master Consultant Service Agreement",
  "Trust Center",
  "Accessibility",
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
        <div className="max-w-360 mx-auto px-5 sm:px-8 xl:px-16 py-12 lg:py-16">
          {/*mobile screen layout */}
          <div className="lg:hidden">
            <div
              className="flex flex-col gap-5 pb-10 mb-10"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.8,
                }}
              >
                We're certified workflow, sales, and marketing automation
                specialists helping businesses unleash the power of automation
                to simplify their processes, streamline their operations, and
                scale their profits.
              </p>
              <Button
                variant="primary"
                size="md"
                className="
                           self-start
                           text-[11px]! sm:text-sm!
                           px-3! py-1.5!
                           sm:px-5! sm:py-3!
                         "
              >
                Schedule a complimentary call
              </Button>
              <div className="flex justify-center mt-2 select-none">
                <img
                  src={logo}
                  alt="Flow Wizards"
                  style={{
                    width: "130px",
                    height: "auto",
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0 16px",
              }}
            >
              <div className="flex flex-col gap-6">
                <div>
                  <ColHead>Solutions</ColHead>
                  <ul className="flex flex-col gap-2.5">
                    {SOLUTIONS.map((s) => (
                      <li key={s}>
                        <NavLink>{s}</NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="pt-6"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <ColHead>Connect With Us</ColHead>
                  <div className="flex flex-col gap-2.5">
                    {SOCIALS.map((s) => (
                      <NavLink key={s}>{s}</NavLink>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Resources + Portal */}
              <div className="flex flex-col gap-6">
                <div>
                  <ColHead>Resources</ColHead>
                  <ul className="flex flex-col gap-2.5">
                    {RESOURCES.map((r) => (
                      <li key={r.label}>
                        <NavLink href={r.href}>{r.label}</NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="pt-6"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <ul className="flex flex-col gap-2.5">
                    {PORTAL.map((p) => (
                      <li key={p.label}>
                        <NavLink href={p.href}>{p.label}</NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* desktop layout */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:divide-x lg:divide-white/[0.07]">
            {/* Col 1 — Brand */}
            <div className="flex flex-col gap-5 lg:pr-10">
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.8,
                }}
              >
                We're certified workflow, sales, and marketing automation
                specialists helping businesses unleash the power of automation
                to simplify their processes, streamline their operations, and
                scale their profits.
              </p>
              <Button
                variant="primary"
                size="md"
                className="self-start text-sm! px-5! py-3!"
              >
                Schedule a complimentary call
              </Button>
              <div className="mt-4 select-none">
                <img
                  src={logo}
                  alt="Flow Wizards"
                  style={{
                    width: "130px",
                    height: "auto",
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </div>
            </div>

            {/* Col 2 — Solutions + Connect */}
            <div className="flex flex-col gap-6 lg:px-10">
              <div>
                <ColHead>Solutions</ColHead>
                <ul className="flex flex-col gap-2.5">
                  {SOLUTIONS.map((s) => (
                    <li key={s}>
                      <NavLink>{s}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="pt-6"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              >
                <ColHead>Connect With Us</ColHead>
                <div className="flex items-center flex-wrap gap-y-1">
                  {SOCIALS.map((s, i) => (
                    <span key={s} className="flex items-center">
                      {i > 0 && (
                        <span
                          style={{
                            margin: "0 10px",
                            color: "rgba(255,255,255,0.2)",
                            fontSize: "0.83rem",
                          }}
                        >
                          |
                        </span>
                      )}
                      <NavLink>{s}</NavLink>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Col 3 — Resources + Portal */}
            <div className="lg:pl-10">
              <ColHead>Resources</ColHead>
              <ul className="flex flex-col gap-2.5">
                {RESOURCES.map((r) => (
                  <li key={r.label}>
                    <NavLink href={r.href}>{r.label}</NavLink>
                  </li>
                ))}
              </ul>
              <div
                className="mt-6 pt-6"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              >
                <ul className="flex flex-col gap-2.5">
                  {PORTAL.map((p) => (
                    <li key={p.label}>
                      <NavLink href={p.href}>{p.label}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="max-w-360 mx-auto px-5 sm:px-8 xl:px-16 py-5 flex flex-col gap-2 items-center text-center">
            <div className="flex flex-wrap items-center justify-center gap-y-1">
              <span style={{ fontSize: "0.82rem", color: "#fff" }}>
                © 2026 ALL RIGHTS RESERVED.
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
                  <NavLink href={link.href} style={{ fontSize: "0.82rem", color: "#fff" }}>
                    {link.label}
                  </NavLink>
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-y-1">
              {ROW2.map((link, i) => (
                <span key={link} className="flex items-center">
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
                  <a
                    href="#"
                    style={{ fontSize: "0.82rem", color: "#fff" }}
                    className="hover:opacity-70 transition-opacity"
                  >
                    {link}
                  </a>
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
