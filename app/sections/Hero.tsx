import { spaceGrotesk } from "../fonts/spaceGrotesk.ts";
import { motion } from "framer-motion";
import HeroBackground from "../components/background/HeroBackground";
import React from "react";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[100vh] w-full justify-center"
      id="home"
      initial="initial"
      animate="animate"
    >
      <HeroBackground />
      <div className="mt-20 flex flex-col items-center justify-center sm:mt-0">
        <div
          className={`relative flex flex-col items-center justify-center ${spaceGrotesk.className} pointer-events-none`}
        >
          <h1
            style={{
              height: "auto",
              padding: "10px 20px",
              marginBottom: "10px",
              fontSize: "clamp(3rem, 8vw, 4rem)", // Ajustado el tamaño de la fuente
              fontWeight: "bold",
              textAlign: "center",
              position: "relative",
              top: "-60px", // Ajustado el posicionamiento
              backgroundColor: "rgba(17, 17, 17, 0.5)",
              borderRadius: "50px",
              display: "inline-block",
              lineHeight: "1.2",
            }}
          >
            TOMÁS MANAZZA
          </h1>
          <img
            src="\backgorund\tomas9.png"
            style={{
              boxShadow: "0px 0px 30px rgb(255, 255, 255)", // Ligero ajuste al shadow
              width: "200px", // Reducido el tamaño de la imagen
              height: "200px",
              objectFit: "cover",
              borderRadius: "50%",
              marginBottom: "10px",
              position: "relative",
              top: "-33px",
            }}
            alt=""
          />
          <h2
            style={{
              fontSize: "clamp(1rem, 3vw, 1.2rem)", // Ajustado el tamaño de la fuente
              color: "#e4ded7",
              textAlign: "center",
              marginBottom: "0px",
              marginTop: "0px",
              position: "relative",
              top: "-15px",
            }}
          >
            Full Stack Developer
          </h2>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;