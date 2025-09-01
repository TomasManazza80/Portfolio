import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../../animations/AnimatedTitle";
import AnimatedBody from "../../animations/AnimatedBody";
import { motion } from "framer-motion";
import Container from "../container/Container";
import React from "react";
import { SiGithub } from "react-icons/si";
import { BsLink45Deg } from "react-icons/bs";

// Nuevo componente para la animación de forma abstracta
const AnimatedShape = () => {
  const shapeVariants = {
    initial: { opacity: 0, scale: 0.5, rotate: 0 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      rotate: [0, 90, 180, 270, 360],
      transition: {
        duration: 8,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }
    }
  };

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full mix-blend-screen opacity-5 z-0"
      variants={shapeVariants}
      initial="initial"
      animate="animate"
      style={{
        background: "linear-gradient(45deg, #FF6B6B, #556270, #FFD166, #A1C4FD)",
      }}
    />
  );
};

const ProjectCard = ({
  id,
  name,
  description,
  github,
  demo,
  image,
  available,
}: ProjectProps) => {
  return (
    <motion.div
      className="relative z-10 w-full h-full min-h-[650px] md:min-h-[700px] lg:min-h-[550px]"
      initial="initial"
      animate="animate"
    >
      <Container
        width="100%"
        height="100%"
        borderRadius={25}
        color="rgba(255, 255, 255, 0.1)"
        blur={false}
        grain={true}
        top="0px"
        left="0px"
        angle={0}
      >
        <div className="relative flex flex-col h-full p-6 md:p-8 lg:p-10 lg:flex-row">
          {/* Añadir la animación abstracta al fondo */}
          <AnimatedShape />

          {/* Sección de contenido - 50% en desktop */}
          <div className={`flex flex-col w-full lg:w-1/2 ${id % 2 === 0 ? "lg:order-2 lg:pl-8" : "lg:pr-8"}`}>
            
            {/* Header con título y botones de acción */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 z-10">
              <div className="w-full md:w-3/4 mb-4 md:mb-0">
                <AnimatedTitle
                  text={name}
                  className="max-w-full text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight"
                  wordSpace={"mr-[0.25em]"}
                  charSpace={"-mr-[0.01em]"}
                />
              </div>
              
              <div className="flex gap-3">
                {available ? (
                  <>
                    <Link
                      href={github}
                      target="_blank"
                      aria-label="Open GitHub Repository"
                      className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 text-gray-900 transition-all duration-300 hover:bg-white hover:scale-110 hover:shadow-lg"
                    >
                      <SiGithub className="text-lg md:text-xl" />
                    </Link>
                    <Link
                      href={demo}
                      target="_blank"
                      aria-label="Open Live Demo"
                      className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 text-gray-900 transition-all duration-300 hover:bg-white hover:scale-110 hover:shadow-lg"
                    >
                      <BsLink45Deg className="text-lg md:text-xl" />
                    </Link>
                  </>
                ) : (
                  <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-600 cursor-not-allowed">
                    <BsLink45Deg className="text-lg md:text-xl text-gray-400" />
                  </div>
                )}
              </div>
            </div>

            {/* Descripción del proyecto */}
            <AnimatedBody
              text={description}
              className="mt-2 text-base md:text-lg text-gray-300 leading-relaxed z-10"
            />
          </div>

          {/* Sección de imagen - 50% en desktop */}
          <div className={`flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 z-10 ${id % 2 === 0 ? "lg:order-1" : ""}`}>
            <motion.div 
              className="relative w-full h-64 md:h-80 lg:h-96"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Image
                src={image}
                alt={name}
                fill
                className="object-contain drop-shadow-2xl"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Efectos visuales para la imagen */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <div className="absolute inset-0 rounded-lg border border-white/10 shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default ProjectCard;