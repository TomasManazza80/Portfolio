import React from 'react';
import { FaNodeJs, FaReact, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiTailwindcss, SiHtml5, SiVite, SiDocker , SiJavascript, SiExpress, SiNestjs } from 'react-icons/si';

const Tools = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36"
    >
     <h1 className="text-center mb-[60px]">STACK DE TECNOLOGÍAS</h1>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col items-center mx-4">
          <FaNodeJs className="text-5xl text-white" />
          <span className="text-lg text-white">Node.js</span>
        </div>
        <div className="flex flex-col items-center mx-4">
          <FaReact className="text-5xl text-white" />
          <span className="text-lg text-white">React</span>
        </div>
        <div className="flex flex-col items-center mx-4">
          <SiNestjs className="text-5xl text-white" />
          <span className="text-lg text-white">Nest.js</span>
        </div>
        <div className="flex flex-col items-center mx-4">
          <SiTypescript className="text-5xl text-white" />
          <span className="text-lg text-white">TypeScript</span>
        </div>
        <div className="flex flex-col items-center mx-4">
          <SiJavascript className="text-5xl text-white" />
          <span className="text-lg text-white">JavaScript</span>
        </div>
        <div className="flex flex-col items-center mx-4">
          <SiExpress className="text-5xl text-white" />
          <span className="text-lg text-white">Express</span>
        </div>

        <div className="flex flex-col items-center mx-4">
          <SiPostgresql className="text-5xl text-white" />
          <span className="text-lg text-white">PostgreSQL</span>
        </div>


        <div className="flex flex-col items-center mx-4">
          <SiVite className="text-5xl text-white" />
          <span className="text-lg text-white">Vite</span>
        </div>

        <div className="flex flex-col items-center mx-4">
          <SiDocker className="text-5xl text-white" />
          <span className="text-lg text-white">Docker</span>
        </div>



        <div className="flex flex-col items-center mx-4">
          <SiHtml5 className="text-5xl text-white" />
          <span className="text-lg text-white">HTML</span>
        </div>

        <div className="flex flex-col items-center mx-4">
          <FaGithub className="text-5xl text-white" />
          <span className="text-lg text-white">GitHub</span>
        </div>

        <div className="flex flex-col items-center mx-4">
          <SiTailwindcss className="text-5xl text-white" />
          <span className="text-lg text-white">Tailwind</span>
        </div>

        {/* Agrega más herramientas aquí */}
      </div>
    </section>
  );
};

export default Tools;