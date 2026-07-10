import { useEffect } from "react";
import myImage from "../assets/myimage.png";

import GLOBAL_CSS from "../components/Landing_com/GlobalStyles.jsx";
import TopLeftText from "../components/Landing_com/TopLeftText.jsx";
import TopRightText from "../components/Landing_com/TopRightText.jsx";
import Headline from "../components/Landing_com/Headline.jsx";
import Navbar from "../components/Landing_com/Navbar.jsx";
import A_dot from "../components/Landing_com/A_dot.jsx";
import ScrollHint from "../components/Landing_com/ScrollHint.jsx";
import VignetteGrain from "../components/Landing_com/VignetteGrain.jsx";

export default function LandingPage() {
  useEffect(() => {
    const tag = document.createElement("style");

    tag.setAttribute("data-page", "landing");
    tag.textContent = GLOBAL_CSS;

    document.head.appendChild(tag);

    return () => {
      document.head.removeChild(tag);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden text-white"> 
      <img
        src={myImage}
        alt="Gaurav Vishwakarma"
        className="
          absolute
          inset-0
          z-0
          h-full
          w-full
          object-cover
          object-[center_top]
          grayscale
          contrast-[1.06]
          brightness-[0.85]
        "
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