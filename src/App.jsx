import React from 'react'
import LandingPage from './pages/LandingPage';
import Banner from './pages/Banner';
import InspoPage from "./pages/InspoPage";
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
const App = () => {
  return (
    <>
     <LandingPage />
     <Banner/>
     {/* <section className="relative z-20 mt-[-55vh]">  */}
      <InspoPage /> 
      {/* </section> */}

      <ProjectsPage/>
      <SkillsPage/>
      <ContactPage/>
    </>
  )
}

export default App