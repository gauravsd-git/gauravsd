import { useEffect, useRef } from "react";
import { User, Code2, FileText, Home } from "lucide-react";
import myImage from "../assets/myimage.png";

/* ── Custom SVGs for icons that vary by lucide-react version ── */
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
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const NAV_LINKS = [
    { Icon: GithubIcon, label: "GitHub", href: "https://github.com/gauravsd-git" },
    { Icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/gaurava-sd/" },
    { Icon: Home, label: "Home", href: "/", lucide: true },
    { Icon: Code2, label: "Projects", href: "/projects", lucide: true },
    { Icon: FileText, label: "Resume", href: "/resume.pdf", lucide: true },
];

const HEADLINE = "Passionate Software Designer & Developer";

export default function GauravPortfolio() {
    useEffect(() => {
        const style = document.createElement("style");
        style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&family=Inter:wght@300;400;500&display=swap');

      @keyframes marquee {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
      }
      
      .marquee-outer {
        overflow: hidden;
        width: 100%;
      }
      
      .marquee-track {
        display: flex;
        width: max-content;
        animation: marquee 132s linear infinite;
        will-change: transform;
      }
      @media (prefers-reduced-motion: reduce) {
        .marquee-track { animation: none; }
      }
      @keyframes blink {
        0%,100% { opacity: 1; }
        50%      { opacity: 0.3; }
      }
      @keyframes pulse-line {
        0%,100% { opacity: 1; }
        50%      { opacity: 0.25; }
      }
      .status-dot  { animation: blink 2.4s ease-in-out infinite; }
      .scroll-line { animation: pulse-line 2s ease-in-out infinite; }

      .nav-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: rgba(18,18,18,0.82);
        border: 1px solid rgba(255,255,255,0.13);
        color: #f0ede8;
        backdrop-filter: blur(10px);
        text-decoration: none;
        transition: background 0.2s, border-color 0.2s, transform 0.18s;
      }
      .nav-btn:hover {
        background: rgba(240,237,232,0.14);
        border-color: rgba(255,255,255,0.38);
        transform: translateY(-3px);
      }
      .grain-vignette {
        background:
          radial-gradient(ellipse 75% 65% at 50% 38%, transparent 28%, rgba(0,0,0,0.80) 100%),
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
      }
      .syne { font-family: 'Syne', sans-serif; font-weight: 800; }
      .inter { font-family: 'Inter', sans-serif; }
    `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    /* 4 copies → seamless 2-copy marquee loop */
    const headlineItems = [...Array(4)].map((_, i) => (
        <span key={i} className="heading flex items-center gap-[0.28em] whitespace-nowrap">
            {HEADLINE}
            <span style={{ color: "rgba(240,237,232,0.32)", fontSize: "0.52em", lineHeight: 1 }}>
                ✦
            </span>
        </span>
    ));

    return (
        <div
            className="relative overflow-hidden"
            style={{
                background: "#111010",
                color: "#f0ede8",
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
            }}
        >
            {/* ── PHOTO ─────────────────────────────────────────── */}

            <img
                src={myImage}
                alt="Gaurav Vishwakarma"
                style={{
                    position: "absolute", inset: 0,
                    width: "100%", height: "100%",
                    objectFit: "cover", objectPosition: "center top",
                    zIndex: 0,
                    filter: "grayscale(1) contrast(1.06) brightness(0.85)"
                }}
            />

            {/* ── VIGNETTE + GRAIN ── */}
            <div
                className="grain-vignette"
                style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}
            />

            {/* ── CORNER LEFT ── */}
            <div className="inter" style={{
                position: "absolute", top: 36, left: 44, zIndex: 10,
                fontSize: 13, fontWeight: 300, lineHeight: 1.65
            }}>
                <strong style={{ fontWeight: 500, display: "block" }}>
                    Hii, I am Gaurav Vishwakarma
                </strong>
                A full stack java developer &amp; web designer
            </div>

            {/* ── CORNER RIGHT ── */}
            <div className="inter" style={{
                position: "absolute", top: 36, right: 44, zIndex: 10,
                fontSize: 13, fontWeight: 300, lineHeight: 1.65,
                maxWidth: 340, textAlign: "right",
            }}>
                Passionate Creative Designer and Developer, dedicated to
                crafting innovative solutions and exceptional digital
                experiences through modern technologies
            </div>

            {/* ── SCROLL HINT ── */}
            <div className="inter" style={{
                position: "absolute", bottom: 350, right: 44, zIndex: 10,
                display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
                color: "rgba(240,237,232,0.4)", fontSize: 10, letterSpacing: "0.12em",
                textTransform: "uppercase", writingMode: "vertical-rl",
            }}>
                scroll
                <span className="scroll-line" style={{
                    display: "block", width: 1, height: 48,
                    background: "linear-gradient(to bottom, rgba(240,237,232,0.4), transparent)"
                }} />
            </div>

            {/* ── AVAILABLE DOT ── */}
            <div className="inter" style={{
                position: "absolute", bottom: 30, left: 44, zIndex: 10,
                display: "flex", alignItems: "center", gap: 8,
                fontSize: 12, color: "rgba(240,237,232,0.45)", letterSpacing: "0.04em",
            }}>
                <span className="status-dot" style={{
                    width: 7, height: 7, borderRadius: "50%",
                    background: "#5aff8a", boxShadow: "0 0 8px #5aff8a", flexShrink: 0
                }} />
                Available for work
            </div>

            {/* ── HEADLINE MARQUEE ── */}
            <div style={{ position: "relative", zIndex: 10, overflow: "hidden", lineHeight: 0.88, paddingBottom: 2 }}
                aria-label={HEADLINE}>
                <div
                    className="marquee-track syne"
                    style={{ fontSize: "clamp(60px,11.5vw,155px)", gap: "0.28em" }}
                >
                    {headlineItems}
                </div>
            </div>

            {/* ── NAV ICONS ── */}
            <nav aria-label="Social links" style={{
                position: "relative", zIndex: 10,
                display: "flex", justifyContent: "center", gap: 6,
                paddingTop: 16, paddingBottom: 28,
            }}>
                {NAV_LINKS.map(({ Icon, label, href, lucide }) => (
                    <a key={label} href={href} aria-label={label} className="nav-btn">
                        {lucide
                            ? <Icon size={19} strokeWidth={1.6} />
                            : <Icon />
                        }
                    </a>
                ))}
            </nav>
        </div>
    );
}