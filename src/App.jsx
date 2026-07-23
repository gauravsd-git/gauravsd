import React from 'react'
import LandingPage from './pages/LandingPage';
import Banner from './pages/Banner';
import InspoPage from "./pages/InspoPage";
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
const App = () => {
  return (
    <>
      <LandingPage />
      <ProjectsPage />
      <SkillsPage />
      <InspoPage />
      <Banner />
    </>
  )
}

export default App