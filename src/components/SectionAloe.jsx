import { useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import { aloe1, aloe2 } from "../assets";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);


export const SectionAloe = () => {
  const main = useRef();

  useGSAP(() => {
    gsap.to('.aloe-1', {
      x: "-70vw",
      y: "150vh",
      rotate: -70,
      scrollTrigger: {
        trigger: '.section-1',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      },
      ease: 'power1.inOut',
    }),
      gsap.to('.aloe-2', {
        rotate: 70,
        y: "150vh",
        x: "70vw",
        scrollTrigger: {
          trigger: '.section-1',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        },
        ease: 'power1.inOut',
      },
        { scope: main }
      )

  })
  return (

    <div className="absolute inset-0 w-full h-screen overflow-hidden">
      <img src={aloe1} alt="aloe 1" className="w-auto fixed aloe aloe-1" />
      <img src={aloe2} alt="aloe 2" className="w-auto fixed aloe aloe-2" />
    </div>
  )
}
