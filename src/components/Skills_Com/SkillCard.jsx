const IconRow = ({ devicons }) => (
  <div className="flex gap-3 flex-wrap mb-1">
    {devicons.map((cls, i) => (
      <i key={i} className={`${cls} text-3xl`} />
    ))}
  </div>
);

const TagRow = ({ tags }) => (
  <div className="flex flex-wrap gap-2 mt-auto pt-2">
    {tags.map((tag) => (
      <span
        key={tag}
        className="inter text-[10px] px-2 py-0.5 rounded-full"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.09)",
          color: "rgba(240,237,232,0.5)",
        }}
      >
        {tag}
      </span>
    ))}
  </div>
);

export default function SkillCard({ skill }) {
  const cardBase = "rounded-2xl p-5 flex flex-col gap-3 h-full";
  const cardStyle = { background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.07)" };

  if (skill.size === "tag-only") {
    return (
      <div className={cardBase} style={cardStyle}>
        <div className="flex flex-wrap gap-2 mb-1">
          {skill.tags.map((tag) => (
            <span
              key={tag}
              className="inter text-[11px] px-3 py-1 rounded-full"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(240,237,232,0.6)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="inter font-semibold text-[15px] text-[#f0ede8]">{skill.title}</h3>
        <p className="inter text-[12px] leading-relaxed" style={{ color: "rgba(240,237,232,0.45)" }}>
          {skill.description}
        </p>
      </div>
    );
  }

  return (
    <div className={cardBase} style={cardStyle}>
      <IconRow devicons={skill.devicons} />
      <h3 className="inter font-semibold text-[15px] text-[#f0ede8]">{skill.title}</h3>
      <p className="inter text-[12px] leading-relaxed" style={{ color: "rgba(240,237,232,0.45)" }}>
        {skill.description}
      </p>
      <TagRow tags={skill.tags} />
    </div>
  );
}