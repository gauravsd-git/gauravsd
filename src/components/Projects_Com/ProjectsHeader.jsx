export default function ProjectsHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
      <h1
        className="bebas leading-none"
        style={{ fontSize: "clamp(60px, 8vw, 120px)", color: "#f0ede8" }}
      >
        Impressive Works
        {/* <br /> */}
        
      </h1>
      <p
        className="inter text-[13px] leading-relaxed max-w-60 mb-2 text-right"
        style={{ color: "rgba(240,237,232,0.4)" }}
      >
        A collection of projects I've designed and built — from concept to deployment.
      </p>
    </div>
  );
}