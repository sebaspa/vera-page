import { useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

import { nousish } from "../assets"

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export const Nounish = () => {
  const main = useRef();

  useGSAP(() => {
    gsap.to('.logoNousish', {
      opacity: 0.2,
      scrollTrigger: {
        trigger: '.sectionLogo',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      },
      ease: 'power1.inOut',
      markers: true
    })
  }, { scope: main });
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-0 flex items-center justify-center sectionLogo">
      <img src={nousish} alt="nounsish" className="logoNousish opacity-100 top-0" />
    </div>
  )
}
