import { useEffect, useRef, useState } from "react"
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export const Section2 = () => {

  const [hideCup, setHideCup] = useState(false);

  const cupRef = useRef(null)
  const sectionRef = useRef(null)

  useGSAP(() => {
    const cup = cupRef.current;
    const section = sectionRef.current;

    gsap.set(cup, {
      y: "500px",
      scale: 0.8
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
      y: "-300px",
      scale: 0.6,
      rotate: 0,
      ease: "none"
    });
  }, { scope: sectionRef });

  useEffect(() => {
    setHideCup(true);
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= 0 && scrollPosition <= 914) {
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
    <div className="container mx-auto px-4 text-center h-screen flex flex-col justify-center items-center" ref={sectionRef}>
      <div className={hideCup ? "hidden" : ""}>
        <img src="/src/assets/full-cup.webp" alt="cup" className={`w-[600px] h-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30`} ref={cupRef} />
      </div>
      <img src="/src/assets/nousish.webp" alt="nousish" className="opacity-20" />
    </div>
  )
}
