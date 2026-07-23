import { useEffect } from "react";
import GLOBAL_CSS   from "../components/Landing_com/GlobalStyles.jsx";
import SkillsHeader from "../components/Skills_Com/SkillsHeader.jsx";
import SkillCard    from "../components/Skills_Com/SkillCard.jsx";
import SKILLS       from "../components/Skills_Com/SkillsData.js";

export default function SkillsPage() {
  useEffect(() => {
    const tag = document.createElement("style");
    tag.setAttribute("data-page", "skills");
    tag.textContent = GLOBAL_CSS;
    document.head.appendChild(tag);
    return () => document.head.removeChild(tag);
  }, []);

  return (
    <div className="min-h-screen w-full pb-24" style={{ background: "#000000", color: "#f0ede8" }}>

      <SkillsHeader />

      {/* Bento grid */}
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

          {/* Row 1: normal | normal | small */}
          <SkillCard skill={SKILLS[0]} />   {/* Front-End */}
          <SkillCard skill={SKILLS[1]} />   {/* Styling */}
          <SkillCard skill={SKILLS[2]} />   {/* Languages */}

          {/* Row 2: normal | normal | small */}
          <SkillCard skill={SKILLS[3]} />   {/* Back-End */}
          <SkillCard skill={SKILLS[4]} />   {/* Animations */}
          <SkillCard skill={SKILLS[5]} />   {/* Database */}

          {/* Row 3: tag-only (span 1) | small | small */}
          <SkillCard skill={SKILLS[6]} />   {/* Core CS */}
          {/* <SkillCard skill={SKILLS[7]} />   Mobile */}
          <SkillCard skill={SKILLS[8]} />   {/* Version Control */}

          {/* Row 4: normal | normal (span 2) */}
          <SkillCard skill={SKILLS[9]} />   {/* Cloud */}
          <SkillCard skill={SKILLS[10]} />  {/* Testing */}
          <SkillCard skill={SKILLS[12]} />  {/* AI/ML */}

          {/* Row 5: tag-only (span 1) | tag-only (span 2) */}
          <SkillCard skill={SKILLS[11]} />  {/* UI/UX */}
          <div className="col-span-2">
            <SkillCard skill={SKILLS[13]} /> {/* Personal Dev */}
          </div>

        </div>
      </div>
    </div>
  );
}