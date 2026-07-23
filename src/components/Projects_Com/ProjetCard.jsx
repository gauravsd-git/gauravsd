import { ExternalLink } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const topOffset = 80 + index * 24; // each card peeks 24px below the previous

  return (
    <div
      className="sticky w-full rounded-2xl overflow-hidden"
      style={{
        top: topOffset,
        background: project.bg,
        border: "1px solid rgba(255,255,255,0.08)",
        height: "70vh",
        maxHeight: 520,
      }}
    >
      {/* Card inner layout */}
      <div className="flex flex-col h-full p-8 md:p-12">

        {/* Top row — number + year + link */}
        <div className="flex items-start justify-between mb-auto">
          <span
            className="bebas text-[65px] leading-none select-none"
            style={{ color: "rgba(255,255,255,0.26)" }}
          >
            {project.number}
          </span>

          <div className="flex items-center gap-4 mt-2">
            <span className="inter text-[12px] tracking-widest uppercase"
              style={{ color: "rgba(240,237,232,0.35)" }}>
              {project.year}
            </span>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-200 hover:scale-110"
              style={{
                borderColor: "rgba(255,255,255,0.15)",
                color: project.accent,
              }}
            >
              <ExternalLink size={15} strokeWidth={1.6} />
            </a>
          </div>
        </div>

        {/* Middle — title */}
        <div className="my-6">
          <h2
            className="bebas leading-none"
            style={{ fontSize: "clamp(40px, 6vw, 86px)", color: "#f0ede8" }}
          >
            {project.title}
          </h2>
        </div>

        {/* Bottom — description + tags */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <p
            className="inter text-[14px] leading-relaxed max-w-lg"
            style={{ color: "rgba(240,237,232,0.55)" }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 md:justify-start shrink-0">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inter text-[11px] tracking-wide px-3 py-1 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(240,237,232,0.6)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Accent line at bottom */}
        <div
          className="mt-6 h-[2px] w-16 rounded-full"
          style={{ background: project.accent }}
        />
      </div>
    </div>
  );
}