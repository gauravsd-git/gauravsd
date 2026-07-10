const HEADLINE = "Software Designer & Developer";
const COPIES = 12;

export default function Headline() {
  const items = [...Array(COPIES)].map((_, i) => (
    <span
      key={i}
      className="bebas inline-flex items-center whitespace-nowrap"
    >
      {HEADLINE}

      <span
        className="
          mx-[0.4em]
          text-[0.45em]
          leading-none
          text-[rgba(240,237,232,0.28)]
        "
      >
        ✦
      </span>
    </span>
  ));

  return (
    <div
      className="
        absolute
        bottom-22.5     
        inset-x-0
        z-10
      "
      aria-label={HEADLINE}
    >
      <div
        className="
          marquee-track
          bebas
          text-[clamp(60px,11.5vw,155px)]
          leading-[0.9]
        "
      >
        {items}
      </div>
    </div>
  );
}