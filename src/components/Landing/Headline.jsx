const HEADLINE = "   Software Designer & Developer";
const COPIES = 12;

export default function Headline() {
  const items = [...Array(COPIES)].map((_, i) => (
    <span
      key={i}
      className="bebas"
      style={{ whiteSpace: "nowrap", display: "inline-flex", alignItems: "center" }}
    >
      {HEADLINE}
      <span style={{ color: "rgba(240,237,232,0.28)", fontSize: "0.45em", margin: "0 0.4em", lineHeight: 1 }}>
        ✦
      </span>
    </span>
  ));

  return (
    <div
      className="marquee-outer"
      style={{ position: "absolute", bottom: 90, left: 0, right: 0, zIndex: 10 }}
      aria-label={HEADLINE}
    >
      <div
        className="marquee-track bebas"
        style={{ fontSize: "clamp(60px, 11.5vw, 155px)", lineHeight: 0.9 }}
      >
        {items}
      </div>
    </div>
  );
}