import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiZig
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Exodium Gym",
        description:
            "Eccommerce made with Next.js, Tailwind CSS and Framer Motion.",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/TomasManazza80",
        demo: "https://exodium.netlify.app/",
        image: "/proyectos/exodium.png",
        available: true,
    },
    {
        id: 1,
        name: "Sistema de Gestion Inmobiliari",
        description:
            "Eccommerce made with Next.js, Tailwind CSS and Framer Motion.",
        technologies: [SiCplusplus, SiRust, SiNeovim],
        techNames: ["C++", "Rust", "Neovim"],
        techLinks: ["https://cplusplus.com/", "https://www.rust-lang.org/", "https://neovim.io/"],
        github: "https://github.com/TomasManazza80",
        demo: "https://alquileresoc.netlify.app/",
        image: "/proyectos/octa.png",
        available: true,
    },
    {
        id: 2,
        name: "Ecommerce Decoration Deinger",
        description:
            "Eccommerce made with Next.js, Tailwind CSS and Framer Motion.",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/TomasManazza80",
        demo: "https://tubular-meerkat-c8ef9a.netlify.app/",
        image: "/proyectos/ecommerce.png",
        available: true,
    },
    {
        id: 3,
        name: "New Style Gym",
        description:
            "Eccommerce made with Next.js, Tailwind CSS and Framer Motion.",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/TomasManazza80",
        demo: "https://newstylegym.life/",
        image: "/proyectos/newStyle.png",
        available: true,
    },
];
