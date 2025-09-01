import ProjectCard from "./ProjectCard";
import {projects, ProjectProps} from "./projectDetails";
import React from "react";

const ProjectGrid = () => {
    return (
        <>
        <h1 style={{color: "#e4ded7", fontSize: "clamp(2.5rem, 6vw, 6rem)", fontWeight: "bold", textAlign: "center", marginBottom: "100px", marginTop: "0px "}}>Mis proyectos</h1>
            <div className="mb-10 flex gap-16 text-[#e4ded7] md:mb-16  lg:mb-20 ">


                <h4
                    className={`text-[16px] md:text-[20px] lg:text-[34px] ${"text-[#e4ded7]"}`}
                >
          ¡Echa un vistazo a mis trabajos!
                </h4>
            </div>

            <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
                {projects.map((project: ProjectProps) => (
                    <ProjectCard
                        id={project.id}
                        key={project.id}
                        name={project.name}
                        description={project.description}
                        technologies={project.technologies}
                        techNames={project.techNames}
                        techLinks={project.techLinks}
                        github={project.github}
                        demo={project.demo}
                        image={project.image}
                        available={project.available}
                    />
                ))}
            </div>
        </>
    );
};

export default ProjectGrid;
