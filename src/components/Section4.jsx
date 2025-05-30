import { useEffect, useState } from "react"
import { useRef } from "react"
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import { hand } from "../assets"
import { CardInfo } from "./CardInfo"
import { getInfoSection4 } from "../api/infoSections"

export const Section4 = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [info, setInfo] = useState([])
  const [hideCup, setHideCup] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    const getInfoFromApi = async () => {
      const info = await getInfoSection4()
      setInfo(info)
      setIsLoading(false)
    }
    getInfoFromApi().catch(console.error)
  }, []);

  const cupRef = useRef(null)
  const sectionRef = useRef(null)

  useGSAP(() => {
    const cup = cupRef.current;
    const section = sectionRef.current;

    gsap.set(cup, {
      y: "-300px",
      scale: 0.6
    });

    // Timeline para la primera sección
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "center center",
        scrub: 1,
        markers: false,
      },
    });

    tl1.to(cup, {
      y: "-220px",
      x: "290px",
      rotate: -15,
      scale: 0.4,
      ease: "none"
    });
  }, { scope: sectionRef });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= 915 && scrollPosition <= 2742) {
        setHideCup(false);
      } else {
        setHideCup(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container mx-auto px-4" ref={sectionRef}>
      <div className="container mx-auto px-4 relative hidden md:block">
        <div className={hideCup ? "hidden" : ""}>
          <img src="/src/assets/full-cup.webp" alt="cup" className={`w-[600px] h-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30`} ref={cupRef} />
        </div>
      </div>
      <div className="w-full h-full grid-cols-2 grid gap-2 lg:gap-12">
        <div className="col-span-12 lg:col-span-1 pt-10 lg:pt-52">
          {
            isLoading ? <div>Loading...</div> :
              info.map((item, index) => (
                <CardInfo key={index} img={item.img} title={item.title} description={item.description} className={item.className} />
              ))
          }
        </div>
        <div className="col-span-12 lg:col-span-1 relative lg:h-screen flex justify-center items-center">
          <img src="/src/assets/full-cup.webp" alt="cup" className="mx-auto w-[130px] -mt-20 md:hidden absolute" />
          <img src={hand} alt="hand" className="w-full h-auto lg:mt-24" />
        </div>
      </div>
    </div>
  )
}
