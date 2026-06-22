import React from 'react'
import LandingPage from './pages/LandingPage';
import Banner from './pages/Banner';
import InspoPage from "./pages/InspoPage";
const App = () => {
  return (
    <>
     <LandingPage />
     <Banner/>
     {/* <section className="relative z-20 mt-[-55vh]">  */}
      <InspoPage /> 
      {/* </section> */}
    </>
  )
}

export default App