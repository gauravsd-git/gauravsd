import { Code2, FileText, Home } from "lucide-react";

const GithubIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61
      c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77
      5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0
      C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77
      a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7
      A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

// ── Update hrefs below with your real links ──
const NAV_LINKS = [
  { Icon: GithubIcon,  label: "GitHub",   href: "https://github.com/gauravsd-git",      external: true,  lucide: false },
  { Icon: LinkedinIcon,label: "LinkedIn", href: "https://www.linkedin.com/in/gaurava-sd/", external: true,  lucide: false },
  { Icon: Home,        label: "Home",     href: "/",                                     external: false, lucide: true  },
  { Icon: Code2,       label: "Projects", href: "/projects",                             external: false, lucide: true  },
  { Icon: FileText,    label: "Resume",   href: "/resume.pdf",                           external: true,  lucide: true  },
];

export default function Navbar() {
  return (
    <nav
      aria-label="Social links"
      style={{
        position: "fixed",
        bottom: 22,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 30,
        display: "flex",
        gap: 6,
      }}
    >
      {NAV_LINKS.map(({ Icon, label, href, lucide, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="nav-btn"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {lucide ? <Icon size={19} strokeWidth={1.6} /> : <Icon />}
        </a>
      ))}
    </nav>
  );
}