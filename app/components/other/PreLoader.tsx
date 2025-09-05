import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const PreLoader = ({ onComplete }: { onComplete: () => void }) => {
  const preloaderRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    const preLoaderAnim = () => {
      tl.to(".texts-container", {
        duration: 0.5,
        opacity: 1,
        ease: "Power3.easeOut",
      })
      .from(".texts-container span", {
        duration: 0.5,
        delay: 0.5,
        y: 0,
        skewY: 0,
        stagger: 0.2,
        ease: "Power3.easeOut",
      })
      .to(preloaderRef.current, {
        duration: 1,
        height: "0vh",
        ease: "Power3.easeOut",
        onComplete: onComplete,
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
                      opacity-0 overflow-visible text-center rounded-xl p-8 bg-white bg-opacity-10 shadow-lg backdrop-filter backdrop-blur-sm 
                      border border-white border-opacity-10" style={{ opacity: 1 }}>
        <div className="relative text-white text-8xl md:text-9xl font-bold tracking-widest uppercase  flex justify-center items-center space-x-4 md:space-x-8">
          <span className="inline-block" style={{ top: 20 }}>E</span>
          <span className="inline-block" style={{ top: 30 }}>M</span>
          <span className="inline-block" style={{ top: 40 }}>P</span>
          <span className="inline-block" style={{ top: 50 }}>T</span>
          <span className="inline-block" style={{ top: 60 }}>Y</span>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;