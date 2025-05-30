import { useEffect, useRef, useState } from "react"
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export const Section5 = () => {

  const cupRef = useRef(null)
  const sectionRef = useRef(null)
  const [hideCup, setHideCup] = useState(false);

  useGSAP(() => {
    const cup = cupRef.current;
    const section = sectionRef.current;

    gsap.set(cup, {
      y: "-220px",
      x: "290px",
      rotate: -15,
      scale: 0.4
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
      x: 0,
      y: '-50px',
      rotate: 0,
      scale: 0.6,
      ease: "none"
    });
  }, { scope: sectionRef })

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= 2742) {
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
    <div className="container mx-auto px-4 text-center pt-48" ref={sectionRef}>
      <div className="container mx-auto px-4 relative hidden md:block">
        <div className={hideCup ? "hidden" : ""}>
          <img src="/src/assets/full-cup.webp" alt="cup" className="w-[600px] h-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30" ref={cupRef} />
        </div>
      </div>
      <h4 className="font-gfs-didot text-3xl md:text-7xl uppercase font-medium text-white mb-4">Vera Skin Nourish</h4>
      <p className="font-inter text-white text-base md:text-3xl mb-16">Simple cosmetic jar mockup, it can be downloaded </p>
      <a href="#" className="bg-white text-black font-gfs-didot font-medium text-xl md:text-3xl py-4 px-8">Buy Now</a>
      <img src="/src/assets/full-cup.webp" alt="cup" className="mx-auto w-[250px] mt-20 md:hidden" />
    </div >
  )
}
