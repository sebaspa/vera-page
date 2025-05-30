import { MainMenu, Section2, Section3, Section4, Section5, SectionAloe } from "./components"
import { bg5 } from "./assets";
import { useEffect } from "react";

export const App = () => {

  useEffect(() => {
    window.scrollBy(0, 1);
  })
  return (
    <div className="bg-vera-green-50 relative" >
      <MainMenu />
      <section className="section-1 w-full h-screen flex items-center justify-center z-10 relative" >
        <SectionAloe />
      </section>
      <section className="section-2 w-full h-screen relative" >
        <Section2 />
      </section>
      <section className="section-3 relative w-full py-8 md:py-0 md:h-screen" >
        <Section3 />
      </section>
      <section className="section4 w-full h-screen relative bg-white" >
        <Section4 />
      </section>
      <section className="section-5 w-full h-screen relative overflow-hidden bg-no-repeat bg-bottom" style={{ backgroundImage: `url(${bg5})` }} >
        <Section5 />
      </section>
    </div>
  )
}

