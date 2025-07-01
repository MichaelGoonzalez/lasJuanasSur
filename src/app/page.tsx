'use client'
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [section, setSection] = useState<'inicio' | 'nosotras'>("inicio");
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Scroll handler para cambiar de sección
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollTimeout.current) return; // Evita scroll rápido
      if (e.deltaY > 0 && section === "inicio") {
        setSection("nosotras");
      } else if (e.deltaY < 0 && section === "nosotras") {
        setSection("inicio");
      }
      scrollTimeout.current = setTimeout(() => {
        scrollTimeout.current = null;
      }, 800); // tiempo de bloqueo entre scrolls
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [section]);

  // Variants para animación slide
  const variants = {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { y: "-100%", opacity: 0, transition: { duration: 0.5, ease: "easeIn" } },
  };

  return ( 
    <div className="relative h-screen bg-gradient-to-br from-black via-fuchsia-900 to-purple-900 overflow-hidden">
      {/* Header principal: Título y menú - 20vh */}
      <header className="flex flex-col items-center w-full 
      h-[25vh] pt-2 pb-2 z-20 relative">
        <div 
  className="flex justify-center items-start text-center 
  text-[1.8rem] md:text-[3.5rem] lg:text-[10rem] text-pink-400
   select-none drop-shadow-lg font-espa
  leading-none whitespace-nowrap -mt-8"
  style={{ letterSpacing: '0.25em' }}
>
  LAS JUANAS
</div>
        <nav className="mt-5 w-screen max-w-none 
        flex justify-center px-0">
          <div style={{ letterSpacing: '0.18em' }} 
            className="hidden md:flex w-full
             justify-center gap-0 items-center
              text-white text-lg md:text-xs lg:text-base ">
            <a href="#inicio" 
             onClick={()=>setSection('inicio')} className={`px-10 py-2 hover:text-pink-400 transition border-r-4 border-pink-400  first:rounded-l last:rounded-r last:border-r-0 border-solid${section==='inicio'?' text-pink-400':''}`}>INICIO</a>
            <a href="#nosotras"
              onClick={()=>setSection('nosotras')} className={`px-10 py-2 hover:text-pink-400 transition border-r-4 border-pink-400 last:border-r-0 border-solid${section==='nosotras'?' text-pink-400':''}`}>NOSOTRAS</a>
            <a href="#about" className="px-10 py-2 hover:text-pink-400 transition border-r-4 border-pink-400 last:border-r-0 border-solid">PROYECTOS</a>
            <a href="#price" className="px-10 py-2 hover:text-pink-400 transition border-r-4 border-pink-400 last:border-r-0 border-solid">MAPA</a>
            <a href="#login" className="px-10 py-2 hover:text-pink-400 transition border-r-4 border-pink-400 last:border-r-0 border-solid">DENUNCIA</a>
            <a href="#login" className="px-10 py-2 hover:text-pink-400 transition border-r-4 border-pink-400 last:border-r-0 border-solid">EVENTOS</a>
            <a href="#about2" className="px-10 py-2 hover:text-pink-400 transition border-solid">RECURSOS</a>
          </div>
          {/* Botón menú móvil */}
          <button className="md:hidden flex flex-col gap-1 z-30 ml-4" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
            <span className="w-6 h-0.5 bg-yellow-400 rounded"></span>
            <span className="w-6 h-0.5 bg-yellow-400 rounded"></span>
            <span className="w-6 h-0.5 bg-yellow-400 rounded"></span>
          </button>
        </nav>
        {/* Menú móvil */}
        {menuOpen && (
          <div className="absolute top-[5rem] left-1/2 -translate-x-1/2 bg-black/90 rounded-lg shadow-lg flex flex-col gap-2 p-4 text-white font-extrabold text-base md:hidden animate-fade-in z-20">
            <a href="#inicio" onClick={()=>{setMenuOpen(false);setSection('inicio')}} className="hover:text-pink-400 transition">Inicio</a>
            <a href="#nosotras" onClick={()=>{setMenuOpen(false);setSection('nosotras')}} className="hover:text-pink-400 transition">Nosotras</a>
            <a href="#about" onClick={()=>setMenuOpen(false)} className="hover:text-pink-400 transition">Proyectos</a>
            <a href="#price" onClick={()=>setMenuOpen(false)} className="hover:text-pink-400 transition">Mapa</a>
            <a href="#login" onClick={()=>setMenuOpen(false)} className="hover:text-pink-400 transition">Denuncia</a>
            <a href="#login" onClick={()=>setMenuOpen(false)} className="hover:text-pink-400 transition">Eventos</a>
            <a href="#about2" onClick={()=>setMenuOpen(false)} className="hover:text-pink-400 transition">Recursos</a>
          </div>
        )}
      </header>

      {/* Contenido principal animado */}
      <main className="relative flex items-center justify-center px-4 md:px-8 pt-4 md:pt-8 pb-0 w-full h-[75vh] mx-auto overflow-hidden">
        <AnimatePresence mode="wait">
          {section === 'inicio' && (
            <motion.div
              key="inicio"
              className="w-full h-full top-0 left-0 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-4"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              as="div"
            >
              {/* Imagen grande, proporcionada */}
              <div className="w-full md:w-[40%] flex items-end h-full overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src="/mujerjuans.png"
                    alt="Ilustración"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                    priority
                  />
                </div> 
              </div>
              {/* Texto principal a la derecha */}
              <div className="w-full md:w-[45%] flex flex-col items-center text-center justify-center h-full">
                <h1 className="text-2xl md:text-3xl lg:text-8xl font-extrabold text-white drop-shadow-lg leading-none mb-2">
                  Las Juanas <br />
                  <span className="text-pink-400">colectiva feminista</span>
                </h1>
                <p className="mt-1 md:mt-2 text-sm md:text-base lg:text-4xl
                 text-white/80 max-w-sm mx-auto mb-4">
                  Investigamos, visibilizamos y hacemos incidencia política frente a violencias basadas en género.
                </p>
                {/* Ícono animado */}
                <div className="mt-1 md:mt-4 flex items-center justify-center">
                  <div className="animate-bounce">
                    <Image 
                      src="/fuego.png" 
                      alt="Globo mundial" 
                      width={48} 
                      height={48} 
                      className="w-12 h-12 md:w-16 md:h-16"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          {section === 'nosotras' && (
            <motion.div
              key="nosotras"
              className="w-full h-full top-0 left-0 flex flex-col items-center justify-center"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              as="div"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-pink-400 mb-6">Nosotras</h2>
              <p className="text-lg md:text-2xl text-white/90 max-w-xl text-center mb-8">Somos una colectiva feminista dedicada a la investigación, visibilización y acción política frente a las violencias de género. Nuestro trabajo se basa en la sororidad, la acción colectiva y la transformación social.</p>
              <div className="w-32 h-32 rounded-full bg-pink-400/30 flex items-center justify-center">
                <span className="text-6xl text-pink-400 font-bold">♀</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
