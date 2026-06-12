import { useEffect } from "react";
import myImage from "../assets/myimage.png";

import GLOBAL_CSS    from "../components/landing/GlobalStyles.jsx";
import TopLeftText   from "../components/landing/TopLeftText.jsx";
import TopRightText  from "../components/Landing/TopRightText.jsx";
import Headline      from "../components/landing/Headline.jsx";
import Navbar        from "../components/landing/Navbar.jsx";
import A_dot         from "../components/landing/A_dot.jsx";
import ScrollHint    from "../components/landing/ScrollHint.jsx";
import VignetteGrain from "../components/landing/VignetteGrain.jsx";

export default function LandingPage() {
  useEffect(() => {
    const tag = document.createElement("style");
    tag.setAttribute("data-page", "landing");
    tag.textContent = GLOBAL_CSS;
    document.head.appendChild(tag);
    return () => document.head.removeChild(tag);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden text-white"
    >
      {/* Background photo */}
      <img
        src={myImage}
        alt="Gaurav Vishwakarma"
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center top",
          zIndex: 0,
          filter: "grayscale(1) contrast(1.06) brightness(0.85)",
        }}
      />

      <VignetteGrain />
      <TopLeftText />
      <TopRightText />
      <ScrollHint />
      <Headline />
      <A_dot />
      <Navbar />
    </div>
  );
}