import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../../app/animations/AnimatedBody.tsx";
import AnimatedTitle from "../animations/AnimatedTitle.tsx";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"Full Stack Dev"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

<div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px]">
    {/* Primera línea (imagen + primer texto) - Alineación horizontal */}
    <div className="flex flex-col lg:flex-row lg:gap-20 items-start">
        {/* Imagen */}
        <img 
  src="\backgorund\tomas7.jpeg" 
  alt="Foto de Tomás Manazza"
  style={{

    boxShadow: "0px 0px 40px rgb(255, 255, 255)",
    borderRadius: "25%",          // Forma circular perfecta
    width: "300px",               // Diámetro del círculo
    height: "300px", 

    marginTop: "70px", 
    marginBottom: "90px",           // Margen superior
    objectFit: "cover",           // Ajuste de imagen sin deformación
    objectPosition: "center",     // Centra la imagen en el círculo
    display: "block",             // Elimina espacio inferior por defecto
    border: "3px solid #e4ded7"   // Borde opcional (mismo color que tu texto)
  }}
/>

        {/* Primer texto */}
        <div style={{ marginTop: "120px" }} className="text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:text-[20px] lg:text-[24px]">
            <AnimatedBody text="¡Encantado de conocerte! Mi nombre es Tomás Manazza y soy estudiante de Ingeniería en Informática, con experiencia como desarrollador full-stack y una especialización en desarrollo Backend." />
        </div>
    </div>

    {/* Resto del texto (debajo, en columna completa) */}
    <div className="flex flex-col gap-4 mt-6 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:gap-6 md:text-[20px] lg:text-[24px]">
        <AnimatedBody
            delay={0.1}
            text="Además de mi experiencia como desarrollador Full Stack, he trabajado en diversos proyectos que me han permitido fortalecer mis habilidades técnicas y colaborar en equipos dinámicos. Mi enfoque en el desarrollo Backend se complementa con un conocimiento sólido del Frontend, lo que me permite entregar soluciones completas y funcionales. He implementado APIs REST, optimizado procesos de desarrollo y trabajado con metodologías ágiles como Scrum para garantizar la eficiencia y el éxito de los proyectos."
        />

        <AnimatedBody
            delay={0.2}
            text="Soy una persona proactiva, apasionada por la innovación tecnológica y comprometida con el aprendizaje continuo. Me motiva resolver problemas complejos y traducir ideas en soluciones concretas que impulsen el desarrollo de las empresas. Mi meta es contribuir al crecimiento y éxito de proyectos desafiantes mientras perfecciono mis habilidades profesionales."
        />
    </div>
</div>
            </div>
        </section>
    );
};

export default About;
