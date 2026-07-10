const GLOBAL_CSS = `
  @keyframes marquee {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .marquee-outer { overflow: hidden; width: 100%; }
  .marquee-track {
    display: flex;
    width: max-content;
    animation: marquee 199s linear infinite;
    will-change: transform;
  }
  @media (prefers-reduced-motion: reduce) {
    .marquee-track { animation: none; }
  }

  @keyframes blink {
    0%,100% { opacity: 1; }
    50%      { opacity: 0.3; }
  }
  .status-dot { animation: blink 2.4s ease-in-out infinite; }

  @keyframes pulse-line {
    0%,100% { opacity: 1; }
    50%      { opacity: 0.25; }
  }
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
    cursor: pointer;
  }
  .nav-btn:hover {
    background: rgba(240,237,232,0.14);
    border-color: rgba(255,255,255,0.38);
    transform: translateY(-3px);
  }

  .grain-vignette {
    background:
      radial-gradient(ellipse 75% 65% at 50% 38%, transparent 28%, rgba(0,0,0,0.82) 100%),
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
  }

  .bebas { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.01em; }
  .inter { font-family: 'Inter', sans-serif; }
`;

export default GLOBAL_CSS;