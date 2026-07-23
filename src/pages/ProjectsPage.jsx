import { useEffect } from "react";
import GLOBAL_CSS from "../components/Landing_com/GlobalStyles.jsx";
import Navbar     from "../components/Landing_com/Navbar.jsx";
import ProjectsHeader from "../components/Projects_Com/ProjectsHeader.jsx";
import ProjectCard from "../components/Projects_Com/ProjetCard.jsx";
import PROJECTS       from "../components/Projects_Com/ProjectsData.js";

export default function ProjectsPage() {
  useEffect(() => {
    const tag = document.createElement("style");
    tag.setAttribute("data-page", "projects");
    tag.textContent = GLOBAL_CSS;
    document.head.appendChild(tag);
    return () => document.head.removeChild(tag);
  }, []);

  return (
    <div
      className="min-h-screen w-full"
      style={{ background: "#000000", color: "#f0ede8" }}
    >
      {/* Scrollable content with bottom padding for fixed nav */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 pt-20 pb-32">

        <ProjectsHeader />

        {/* Sticky stacking cards */}
        <div className="flex flex-col gap-4">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Spacer so last card fully unstacks before page ends */}
        <div className="h-[30vh]" />
      </div>

      <Navbar />
    </div>
  );
}