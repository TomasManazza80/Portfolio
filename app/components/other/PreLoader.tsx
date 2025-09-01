// components/PreLoader.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const PreLoader = ({ logoSrc, onComplete }) => {
  const preloaderRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    const preLoaderAnim = () => {
      tl.to(".texts-container", {
        duration: 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      })
      .from(".texts-container span", {
        duration: 0.5,
        delay: 0.5,
        y: 70,
        skewY: 10,
        stagger: 0.2,
        ease: "Power3.easeOut",
      })
      .to(".texts-container span", {
        duration: 0.5,
        y: 70,
        skewY: -20,
        stagger: 0.2,
        ease: "Power3.easeOut",
      })
      .to(preloaderRef.current, {
        duration: 1.5,
        height: "0vh",
        ease: "Power3.easeOut",
        onComplete: onComplete, // Call the onComplete prop when the animation finishes
      }, "-=1") // Start this animation 1 second before the previous one ends
      .to(preloaderRef.current, {
        duration: 0,
        css: { display: "none" },
      });
    };

    preLoaderAnim();
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="preloader fixed inset-0 z-50 flex flex-col items-center justify-center 
                 bg-black bg-opacity-70 backdrop-filter backdrop-blur-md"
    >
      <div className="texts-container relative flex flex-col items-center justify-center gap-4 
                      opacity-0 overflow-hidden text-center
                      rounded-xl p-8
                      bg-white bg-opacity-10 shadow-lg backdrop-filter backdrop-blur-sm 
                      border border-white border-opacity-10">
        {logoSrc && (
          <img src={logoSrc} alt="Logo" className="w-24 h-24 mb-4 object-contain" />
        )}
        <div className="relative text-white text-4xl font-bold tracking-widest uppercase overflow-hidden">
          <span className="inline-block relative">E</span>
          <span className="inline-block relative">M</span>
          <span className="inline-block relative">P</span>
          <span className="inline-block relative">T</span>
          <span className="inline-block relative">Y</span>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;