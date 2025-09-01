"use client";
import React, {useState, useEffect} from "react";
import { useEffectOnce, useEventListener } from 'usehooks-ts';

import PreLoader from "./components/other/PreLoader";
import useBlobity from "./components/blobity/useBlobity";
import Titulos from "./sections/titulos.tsx";
import Blur from "./components/overlay/Blur";
import Color from "./components/overlay/Color";

import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Tools from "./sections/Tools.tsx";

export default function Home() {

    const [isMobile, setIsMobile] = useState(false);

    useEffectOnce(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
        setIsMobile(window.innerWidth < 768);
        
        // Asegurar que el body permita scroll
        document.body.style.overflow = 'auto';
        document.body.style.height = 'auto';
        document.documentElement.style.overflow = 'auto';
        document.documentElement.style.height = 'auto';
    });

    // Efecto para asegurar que el scroll funcione correctamente
    useEffect(() => {
        // Forzar estilos que permitan el scroll
        const style = document.createElement('style');
        style.innerHTML = `
            html, body {
                overflow: auto !important;
                height: auto !important;
                overscroll-behavior: none;
            }
            
            /* Prevenir que cualquier elemento bloquee el scroll */
            * {
                overscroll-behavior: none !important;
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    useEventListener('resize', () => {
        setIsMobile(window.innerWidth < 768);
    });

    useBlobity(
        {
            licenseKey: "opensource",
            focusableElementsOffsetX: 4,
            focusableElementsOffsetY: 4,
            color: "#ffffff",
            dotColor: "#ffffff",
            invert: true,
            focusableElements:
                "[data-blobity], a:not([data-no-blobity]), h4:not([data-no-blobity]), li:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
            font: "'Montserrat','Source Sans Pro',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",
            fontSize: 16,
            fontWeight: 900,
            opacity: 1.0,
            fontColor: "#ffffff",
            zIndex: 35,
            size: 50,
            radius: 5,
            magnetic: false,
        }
    );

    return (
        <div className="min-h-screen bg-black overflow-auto">
            <PreLoader />
            <Blur />
            <Color />
            <NavBar />
            <main className="overflow-visible">
                <Hero />
                <About />
                <Work />
                <Titulos/>
                <Tools />
                <Contact />
                <Footer />
            </main>
        </div>
    );
}