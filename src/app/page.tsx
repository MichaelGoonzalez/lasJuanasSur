"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Type assertion to fix className issue with Framer Motion v11 and React 19
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MotionDiv = motion.div as any;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [section, setSection] = useState<
    | "inicio"
    | "nosotras"
    | "proyectos"
    | "mapa"
    | "denuncia"
    | "eventos"
    | "recursos"
  >("inicio");

  // Estado para controlar si el menú está expandido o compacto
  const isMenuExpanded = section === "inicio";

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/fondo2.png)",
        }}
      />

      {/* Overlay oscuro para profesionalismo */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Efectos de luces rosas */}
      {/* Luz rosa esquina inferior izquierda */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-70">
        <div
          className="w-full h-full rounded-full blur-3xl transform -translate-x-1/3 -translate-y-1/3"
          style={{
            background:
              "radial-gradient(circle, rgba(244, 114, 182, 0.4) 0%, rgba(251, 113, 133, 0.2) 30%, rgba(236, 72, 153, 0.1) 60%, transparent 100%)",
          }}
        />
      </div>

      {/* Luz rosa esquina superior derecha */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-60">
        <div
          className="w-full h-full rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"
          style={{
            background:
              "radial-gradient(circle, rgba(244, 114, 182, 0.5) 0%, rgba(251, 113, 133, 0.3) 25%, rgba(236, 72, 153, 0.15) 50%, transparent 100%)",
          }}
        />
      </div>

      {/* Overlay gradiente sutil para mejorar legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/20" />
      {/* Contenido principal */}
      <div className="relative z-10 w-full h-full">
        {/* Header principal: Título y menú - Responsive con animaciones */}
        <MotionDiv
          className={`w-full z-20 relative transition-all duration-500 ease-in-out ${
            isMenuExpanded
              ? "h-[10vh] sm:h-[22vh] md:h-[25vh]"
              : "h-[10vh] sm:h-[10vh]"
          }`}
          animate={{
            height: isMenuExpanded ? "h-[10vh] sm:h-[22vh] md:h-[25vh]" : "h-[8vh] sm:h-[10vh]",
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
        >
          {/* Título LAS JUANAS con animación - Solo visible en modo expandido */}
          {isMenuExpanded && (
            <MotionDiv
              className="hidden sm:flex justify-center items-start text-center 
             text-[2.2rem] xs:text-[1.5rem] sm:text-[2rem] md:text-[3.5rem] 
             lg:text-[6rem] xl:text-[8rem] 2xl:text-[8rem] 
             text-pink-400 select-none drop-shadow-lg font-espa
             leading-none whitespace-nowrap -mt-2 sm:-mt-4 md:-mt-6 lg:-mt-8"
              style={{ letterSpacing: "0.15em" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              LAS JUANAS
            </MotionDiv>
          )}
          {/* Navegación con animación */}
          <MotionDiv
            className={`w-full flex sm:justify-center px-4 transition-all duration-500 ease-in-out ${
              isMenuExpanded ? "mt-2 sm:mt-3 md:mt-5" : "mt-1 sm:mt-2"
            }`}
            animate={{
              marginTop: isMenuExpanded ? "1rem" : "0.5rem",
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
          >
           {/* Header para Móvil (visible < sm) */}
<div className="sm:hidden w-full flex flex-col items-center relative">
  {/* Logo */}
  <div
    onClick={() => setSection("inicio")}
    className="text-pink-400 font-espa font-bold text-5xl cursor-pointer -mt-1"
    style={{ letterSpacing: "0.15em" }}
  >
    LAS JUANAS
  </div>

  {/* Menú debajo del logo, en horizontal */}
  <MotionDiv
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="flex flex-row justify-center items-center w-full mt-3 gap-4 text-white font-bold text-sm"
  >
    <a
      href="#inicio"
      onClick={() => setSection("inicio")}
      className={`px-2 sm:px-3 hover:text-pink-400 transition border-r-2 border-pink-400 last:border-r-0 ${
        section === "inicio" ? "text-pink-400" : ""
      }`}
    >
      INICIO
    </a>
    <a
      href="#nosotras"
      onClick={() => setSection("nosotras")}
      className={`px-2 sm:px-3 hover:text-pink-400 transition border-r-2 border-pink-400 last:border-r-0 ${
        section === "nosotras" ? "text-pink-400" : ""
      }`}
    >
      NOSOTRAS
    </a>
    <a
      href="#proyectos"
      onClick={() => setSection("proyectos")}
      className={`px-2 sm:px-3 hover:text-pink-400 transition border-r-2 border-pink-400 last:border-r-0 ${
        section === "proyectos" ? "text-pink-400" : ""
      }`}
    >
      PROYECTOS
    </a>
    <a
      href="#mapa"
      onClick={() => setSection("mapa")}
      className={`px-2 sm:px-3 hover:text-pink-400 transition border-r-2 border-pink-400 last:border-r-0 ${
        section === "mapa" ? "text-pink-400" : ""
      }`}
    >
      MAPA
    </a>
    <a
      href="#denuncia"
      onClick={() => setSection("denuncia")}
      className={`px-2 sm:px-3 hover:text-pink-400 transition last:border-r-0 ${
        section === "denuncia" ? "text-pink-400" : ""
      }`}
    >
      DENUNCIA
    </a>
  </MotionDiv>
</div>




            {/* Header para Desktop (visible >= sm) */}
            <MotionDiv
              style={{ letterSpacing: "0.12em" }}
              className={`hidden sm:flex w-full items-center text-white transition-all duration-500 ease-in-out ${
                isMenuExpanded
                  ? "max-w-6xl justify-center gap-0 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"
                  : "max-w-4xl justify-between text-xs sm:text-sm md:text-base"
              }`}
              animate={{
                maxWidth: isMenuExpanded ? "72rem" : "56rem",
                justifyContent: isMenuExpanded ? "center" : "space-between",
                fontSize: isMenuExpanded ? "1rem" : "0.875rem",
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
            >
              {/* En modo compacto, mostrar LAS JUANAS a la izquierda */}
              {!isMenuExpanded && (
                <MotionDiv
                  onClick={() => setSection("inicio")}
                  className="text-pink-400 font-espa font-bold text-xl md:text-3xl lg:text-5xl"
                  style={{ letterSpacing: "0.15em", cursor: "pointer" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  LAS JUANAS
                </MotionDiv>
              )}

              {/* Botones de navegación */}
              <div
                className={`flex items-center transition-all duration-500 ease-in-out ${
                  isMenuExpanded ? "gap-0" : "gap-1 sm:gap-2"
                }`}
              >
                <a
                  href="#inicio"
                  onClick={() => setSection("inicio")}
                  className={`py-1 sm:py-2 hover:text-pink-400 transition border-r-2 sm:border-r-3 md:border-r-4 border-pink-400 first:rounded-l last:rounded-r last:border-r-0 border-solid ${
                    isMenuExpanded
                      ? "px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10"
                      : "px-2 sm:px-3 md:px-4"
                  } ${section === "inicio" ? " text-pink-400" : ""}`}
                >
                  <span
                    className={`${
                      section === "inicio" ? "animate-bounce-slow" : ""
                    }`}
                  >
                    INICIO
                  </span>
                </a>
                <a
                  href="#nosotras"
                  onClick={() => setSection("nosotras")}
                  className={`py-1 sm:py-2 hover:text-pink-400 transition border-r-2 sm:border-r-3 md:border-r-4 border-pink-400 border-solid ${
                    isMenuExpanded
                      ? "px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10"
                      : "px-2 sm:px-3 md:px-4"
                  } ${section === "nosotras" ? " text-pink-400" : ""}`}
                >
                  <span
                    className={`${
                      section === "nosotras" ? "animate-bounce-slow" : ""
                    }`}
                  >
                    NOSOTRAS
                  </span>
                </a>
                <a
                  href="#proyectos"
                  onClick={() => setSection("proyectos")}
                  className={`py-1 sm:py-2 hover:text-pink-400 transition border-r-2 sm:border-r-3 md:border-r-4 border-pink-400 border-solid ${
                    isMenuExpanded
                      ? "px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10"
                      : "px-2 sm:px-3 md:px-4"
                  } ${section === "proyectos" ? " text-pink-400" : ""}`}
                >
                  <span
                    className={`${
                      section === "proyectos" ? "animate-bounce-slow" : ""
                    }`}
                  >
                    PROYECTOS
                  </span>
                </a>
                <a
                  href="#mapa"
                  onClick={() => setSection("mapa")}
                  className={`py-1 sm:py-2 hover:text-pink-400 transition border-r-2 sm:border-r-3 md:border-r-4 border-pink-400 border-solid ${
                    isMenuExpanded
                      ? "px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10"
                      : "px-2 sm:px-3 md:px-4"
                  } ${section === "mapa" ? " text-pink-400" : ""}`}
                >
                  <span
                    className={`${
                      section === "mapa" ? "animate-bounce-slow" : ""
                    }`}
                  >
                    MAPA
                  </span>
                </a>
                <a
                  href="#denuncia"
                  onClick={() => setSection("denuncia")}
                  className={`py-1 sm:py-2 hover:text-pink-400 transition border-r-2 sm:border-r-3 md:border-r-4 border-pink-400 border-solid ${
                    isMenuExpanded
                      ? "px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10"
                      : "px-2 sm:px-3 md:px-4"
                  } ${section === "denuncia" ? " text-pink-400" : ""}`}
                >
                  <span
                    className={`${
                      section === "denuncia" ? "animate-bounce-slow" : ""
                    }`}
                  >
                    DENUNCIA
                  </span>
                </a>
                {/* <a href="#eventos" onClick={()=>setSection('eventos')} className={`py-1 sm:py-2 hover:text-pink-400 transition border-r-2 sm:border-r-3 md:border-r-4 border-pink-400 border-solid ${
                isMenuExpanded 
                  ? 'px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10'
                  : 'px-2 sm:px-3 md:px-4'
              } ${section==='eventos'?' text-pink-400':''}`}>
              <span className={`${section==='eventos' ? 'animate-bounce-slow' : ''}`}>EVENTOS</span>
            </a> */}
                {/* <a href="#recursos" onClick={()=>setSection('recursos')} className={`py-1 sm:py-2 hover:text-pink-400 transition border-solid ${
                isMenuExpanded 
                  ? 'px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10'
                  : 'px-2 sm:px-3 md:px-4'
              } ${section==='recursos'?' text-pink-400':''}`}>
              <span className={`${section==='recursos' ? 'animate-bounce-slow' : ''}`}>RECURSOS</span>
            </a> */}
              </div>
            </MotionDiv>
          </MotionDiv>

          {/* Menú móvil */}
          {menuOpen && (
            <div className="absolute top-[5rem] sm:top-[5rem] left-1/2 
            -translate-x-1/2 bg-black/90 rounded-lg shadow-lg flex flex-col 
            gap-2 p-4 text-white font-extrabold text-3xl sm:hidden animate-fade-in z-20 min-w-[200px]">
              <a
                href="#inicio"
                onClick={() => {
                  setMenuOpen(false);
                  setSection("inicio");
                }}
                className="hover:text-pink-400 transition py-1"
              >
                Inicio
              </a>
              <a
                href="#nosotras"
                onClick={() => {
                  setMenuOpen(false);
                  setSection("nosotras");
                }}
                className="hover:text-pink-400 transition py-1"
              >
                Nosotras
              </a>
              <a
                href="#proyectos"
                onClick={() => {
                  setMenuOpen(false);
                  setSection("proyectos");
                }}
                className="hover:text-pink-400 transition py-1"
              >
                Proyectos
              </a>
              <a
                href="#mapa"
                onClick={() => {
                  setMenuOpen(false);
                  setSection("mapa");
                }}
                className="hover:text-pink-400 transition py-1"
              >
                Mapa
              </a>
              <a
                href="#denuncia"
                onClick={() => {
                  setMenuOpen(false);
                  setSection("denuncia");
                }}
                className="hover:text-pink-400 transition py-1"
              >
                Denuncia
              </a>
              {/* <a href="#eventos" onClick={()=>{setMenuOpen(false);setSection('eventos')}} className="hover:text-pink-400 transition py-1">Eventos</a>
            <a href="#recursos" onClick={()=>{setMenuOpen(false);setSection('recursos')}} className="hover:text-pink-400 transition py-1">Recursos</a> */}
            </div>
          )}
        </MotionDiv>

        {/* Contenido principal animado */}
        <main
          className={`relative flex items-center justify-center px-2 sm:px-4 md:px-8 pt-2 
            sm:pt-4 md:pt-8 pb-0 w-full mx-auto overflow-hidden transition-all duration-500
             ease-in-out ${
            isMenuExpanded
              ? "h-[90vh] sm:h-[78vh] md:h-[80vh]"
              : "h-[90vh] sm:h-[90vh] md:h-[95vh]"
          }`}
        >
          <AnimatePresence mode="wait">
            {section === "inicio" && (
              <>
                {/* Versión Web/Tablet */}
                <MotionDiv
                  key="inicio-web"
                  className="hidden sm:flex w-full h-full top-0 left-0 flex-col lg:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.6, ease: "easeOut" },
                  }}
                  exit={{
                    y: "-100%",
                    opacity: 0,
                    transition: { duration: 0.5, ease: "easeIn" },
                  }}
                >
                  {/* Imagen grande */}
                  <div className="w-full lg:w-[40%] xl:w-[40%] flex items-end h-[40%] sm:h-[45%] md:h-[50%] lg:h-full overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src="/mujerjuans.png"
                        alt="Ilustración"
                        fill
                        style={{ objectFit: "cover", objectPosition: "top" }}
                        priority
                      />
                    </div>
                  </div>

                  {/* Texto */}
                  <div className="w-full lg:w-[55%] xl:w-[50%] flex flex-col items-center text-center justify-center h-[60%] sm:h-[55%] md:h-[50%] lg:h-full px-2 sm:px-4">
                    <p
                      className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base lg:text-5xl 
          text-white/80 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto mb-2 sm:mb-4 leading-tight"
                    >
                      Investigamos, mapeamos y visibilizamos las violencias
                      basadas en género en el departamento del Huila, a partir
                      de la incidencia política.
                    </p>

                    {/* Ícono */}
                    <div className="mt-1 sm:mt-2 md:mt-4 flex items-center justify-center">
                      <div className="animate-bounce">
                        <Image
                          src="/fuego.png"
                          alt="Globo mundial"
                          width={48}
                          height={48}
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
                        />
                      </div>
                    </div>
                  </div>
                </MotionDiv>

                {/* Versión Móvil */}
                <MotionDiv
                  key="inicio-mobile"
                  className="flex sm:hidden w-full h-full top-0 left-0 flex-col   gap-4"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.6, ease: "easeOut" },
                  }}
                  exit={{
                    y: "-100%",
                    opacity: 0,
                    transition: { duration: 0.5, ease: "easeIn" },
                  }}
                >
                  {/* Texto primero */}
                  <div className="w-full flex flex-col items-center text-center justify-center px-4">
                    <p className="mt-2 text-4xl sm:text-3xl text-white/80 max-w-sm mx-auto mb-4 leading-snug">
                      Investigamos, mapeamos y visibilizamos las violencias
                      basadas en género en el departamento del Huila, a partir
                      de la incidencia política.
                    </p>

                    {/* Ícono */}
                    <div className="mt-4 flex items-center justify-center">
                      <div className="animate-bounce">
                        <Image
                          src="/fuego.png"
                          alt="Globo mundial"
                          width={48}
                          height={48}
                          className="w-10 h-10"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Imagen después */}
                  <div className="w-full h-100 flex items-end overflow-hidden mt-4">
                    <div className="relative w-full h-full">
                      <Image
                        src="/mujerjuans.png"
                        alt="Ilustración"
                        fill
                        style={{ objectFit: "cover", objectPosition: "top" }}
                        priority
                      />
                    </div>
                  </div>
                </MotionDiv>
              </>
            )}

            {section === "nosotras" && (
              <MotionDiv
                key="nosotras"
                className="w-full h-full top-0 left-0 flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 relative px-2 sm:px-4"
                initial={{ y: "100%", opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.6, ease: "easeOut" },
                }}
                exit={{
                  y: "-100%",
                  opacity: 0,
                  transition: { duration: 0.5, ease: "easeIn" },
                }}
              >
                <NosotrasContent />
              </MotionDiv>
            )}
            {section === "proyectos" && (
              <MotionDiv
                key="proyectos"
                className="w-full h-full flex flex-col
               items-center justify-center gap-4 sm:gap-6
                md:gap-8 mb-4 sm:mb-6 relative px-2 sm:px-4"
                initial={{ y: "100%", opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.6, ease: "easeOut" },
                }}
                exit={{
                  y: "-100%",
                  opacity: 0,
                  transition: { duration: 0.5, ease: "easeIn" },
                }}
              >
                <ProyectosSection />
              </MotionDiv>
            )}
            {section === "mapa" && (
              <MotionDiv
                key="mapa"
                className="w-full h-full flex items-center justify-center px-2 sm:px-4"
                initial={{ y: "100%", opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.6, ease: "easeOut" },
                }}
                exit={{
                  y: "-100%",
                  opacity: 0,
                  transition: { duration: 0.5, ease: "easeIn" },
                }}
              >
                <div className="text-center">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold text-white/60 uppercase tracking-wider">
                    DISPONIBLE PROXIMAMENTE
                  </h2>
                </div>
              </MotionDiv>
            )}
            {section === "denuncia" && (
              <MotionDiv
                key="denuncia"
                className="w-full h-full flex items-center justify-center px-2 sm:px-4"
                initial={{ y: "100%", opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.6, ease: "easeOut" },
                }}
                exit={{
                  y: "-100%",
                  opacity: 0,
                  transition: { duration: 0.5, ease: "easeIn" },
                }}
              >
                <DenunciaSection />
              </MotionDiv>
            )}
            {section === "eventos" && <EventosSection />}
            {section === "recursos" && <RecursosSection />}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

function NosotrasSlider() {
  const images = [
    "/nosotras/1.jpg",
    "/nosotras/2.jpg",
    "/nosotras/3.jpg",
    "/nosotras/6.jpg",
    "/nosotras/5.jpg",
  ];
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [index, images.length]);

  // Determina la dirección (siempre izquierda)
  const direction = 1;

  return (
    <div className="relative w-full lg:w-1/2 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[340px] xl:h-[420px] flex items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl">
      <AnimatePresence custom={direction} mode="wait">
        <MotionDiv
          key={images[prevIndex] + "-out"}
          className="absolute w-full h-full flex items-center justify-center rounded-xl sm:rounded-2xl"
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: "-100%", opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Image
            src={images[prevIndex]}
            alt={`Nosotras ${prevIndex + 1}`}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl sm:rounded-2xl"
          />
        </MotionDiv>
        <MotionDiv
          key={images[index] + "-in"}
          className="absolute w-full h-full flex items-center justify-center rounded-xl sm:rounded-2xl"
          initial={{ x: "100%", opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
        >
          <Image
            src={images[index]}
            alt={`Nosotras ${index + 1}`}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl sm:rounded-2xl"
          />
        </MotionDiv>
      </AnimatePresence>
    </div>
  );
}

function NosotrasContent() {
  return (
    <div className="w-full h-full overflow-y-auto scrollbar-hide">
      {/* Contenido principal - Descripción */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
        {/* Columna izquierda: imagen visible con opacidad, texto centrado */}
        <div className="relative w-full lg:w-1/2 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[340px] xl:h-[420px] flex items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl">
  <Image
    src="/nosotras/4.jpg"
    alt="Fondo nosotras"
    fill
    style={{ objectFit: "cover" }}
    className="rounded-xl sm:rounded-2xl"
  />

  {/* Overlay negro para reducir brillo */}
  <div className="absolute inset-0 bg-black/40 rounded-xl sm:rounded-2xl"></div>

  {/* Contenedor de texto con scroll SOLO en móvil */}
  <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-full px-3 sm:px-4 py-4 sm:py-6 z-10">
    <div className="max-w-4xl mx-auto overflow-y-auto sm:overflow-visible scrollbar-hide">
      <p
        className="font-bold 
        text-xl sm:text-sm md:text-base lg:text-2xl  
        mb-2 sm:mb-4 text-white text-center tracking-widest leading-relaxed
        "
        style={{
          textShadow:
            "2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6), 0 0 12px rgba(0,0,0,0.4)",
        }}
      >
        <span
          className="text-pink-400"
          style={{
            textShadow:
              "1px 1px 2px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.7)",
          }}
        >
          Somos Las Juanas,
        </span>{" "}
        una colectiva feminista de Neiva, que nace desde la digna rabia, la
        memoria y la transformAcción. Nos organizamos para resistir, cuestionar
        y transformar las violencias estructurales que atraviesan nuestros
        cuerpos y territorios. Nos moviliza la investigación, la pedagogía
        popular, el arte y la incidencia politicosocial, nuestra lucha siempre
        será una ciudad mas segura para todas, porque la vida y el feminismo
        también florecen en el sur.
      </p>
    </div>
  </div>

  {/* Flecha indicadora SOLO en móvil */}
  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 sm:hidden animate-bounce">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-pink-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</div>

        {/* Columna derecha: slider de imágenes */}
        <NosotrasSlider />
      </div>

      {/* Sección de Principios - Contenedor separado */}
      <div className="w-full mb-8 sm:mb-12">
        <PrincipiosSection />
      </div>

      {/* Sección de Equipo */}
      <NuestroEquipo />

      {/* Espaciado adicional al final para mejor visualización */}
      <div className="h-20 sm:h-24 md:h-32"></div>
    </div>
  );
}

// Sección de Principios con clic
function PrincipiosSection() {
  const [selectedPrincipio, setSelectedPrincipio] = useState<number | null>(
    null
  );

  const principios = [
    {
      id: 1,
      titulo: "Identidad política",
      subtemas: [
        {
          titulo: "Lo personal es político",
          descripcion:
            "Nuestras experiencias cotidianas están atravesadas por estructuras de poder. Lo íntimo y lo público se entrelazan, y desde allí construimos conciencia y acción.",
        },
        {
          titulo: "Feminismo crítico y comunitario",
          descripcion:
            "Nuestro posicionamiento se enraíza en prácticas colectivas, anticapitalistas, anticoloniales y antipatriarcales, desde y para los territorios.",
        },
      ],
    },
    {
      id: 2,
      titulo: "Diversidad y justicia social",
      subtemas: [
        {
          titulo: "Diversidad e inclusión",
          descripcion:
            "Afirmamos el derecho a existir y participar desde múltiples identidades, cuerpos, saberes y trayectorias. No hay un solo modo de ser mujer o de habitar los feminismos.",
        },
        {
          titulo: "Igualdad",
          descripcion:
            "Promovemos relaciones horizontales y justas, desafiando las jerarquías impuestas por género, clase, etnia, edad u orientación sexual.",
        },
      ],
    },
    {
      id: 3,
      titulo: "Cuidado como práctica política",
      subtemas: [
        {
          titulo: "Cuidado colectivo",
          descripcion:
            "Sostenemos redes de apoyo que protejan la vida, reconociendo que cuidar es una responsabilidad política y transformadora.",
        },
        {
          titulo: "Autocuidado",
          descripcion:
            "Valoramos la atención a nuestras necesidades físicas, emocionales y espirituales como parte de la sostenibilidad de nuestras luchas.",
        },
        {
          titulo: "Corresponsabilidad",
          descripcion:
            "Compartimos tareas, tiempos y afectos para construir organizaciones más justas, íntimas y protectoras.",
        },
      ],
    },
    {
      id: 4,
      titulo: "Organización comunitaria y acción colectiva",
      subtemas: [
        {
          titulo: "Solidaridad",
          descripcion:
            "Nos movemos desde el reconocimiento mutuo, acompañando las luchas desde una ética del apoyo y la reciprocidad y unión.",
        },
        {
          titulo: "Cooperación",
          descripcion:
            "Trabajamos juntas, sumando saberes y fuerzas, para generar cambios reales desde lo común, porque la lucha se hace en colectivo.",
        },
        {
          titulo: "Articulación",
          descripcion:
            "Nos vinculamos con otras colectivas, redes y movimientos para fortalecer nuestras voces y resistencias compartidas.",
        },
      ],
    },
    {
      id: 5,
      titulo: "Prácticas éticas y políticas",
      subtemas: [
        {
          titulo: "Democracia",
          descripcion:
            "Construimos nuestros procesos de manera participativa, deliberativa y crítica, reconociendo los saberes y experiencias propias.",
        },
        {
          titulo: "Sin fines lucrativos",
          descripcion:
            "Nuestro accionar no busca enriquecimiento económico, sino transformación social. Los recursos que gestionamos son herramientas para la justicia, no fines en sí mismos.",
        },
      ],
    },
  ];

  return (
    <div className="w-full rounded-xl ">
      <div className="flex flex-col items-center justify-center mb-5">
        <h3 className="text-2xl sm:text-lg md:text-xl
        lg:text-3xl font-bold text-bwhite-400 mb-4 text-center tracking-wide">
          Conoce más de nuestro trabajo
        </h3>
        <a
          href="https://www.instagram.com/lasjuanasur/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-pink-500 hover:bg-pink-600 text-white font-extrabold px-6 py-3 rounded-lg uppercase tracking-wider shadow-lg transition-transform transform hover:scale-105"
        >
          @LASJUANASUR
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="opacity-90"
          >
            <path
              d="M5 12h14M13 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
      <h3 className="text-4xl mt-15 sm:text-xl md:text-2xl lg:text-5xl font-extrabold text-pink-400 mb-6 sm:mb-8 text-center uppercase tracking-wide">
        Nuestros principios
      </h3>

      {/* Lista de principios como rectángulos horizontales */}
      <div className="space-y-3 sm:space-y-4">
        {principios.map((principio) => (
          <div key={principio.id} className="w-full">
            {/* Botón del principio */}
            <button
              onClick={() =>
                setSelectedPrincipio(
                  selectedPrincipio === principio.id ? null : principio.id
                )
              }
              className={`w-full bg-pink-500 hover:bg-pink-600 rounded-lg p-4 sm:p-6 
                cursor-pointer transition-all duration-300 flex items-center justify-between ${
                selectedPrincipio === principio.id
                  ? "ring-2 ring-yellow-400"
                  : ""
              }`}
            >
              <h4 className="text-white font-bold text-2xl sm:text-base md:text-3xl text-left">
                {principio.titulo}
              </h4>
              <div className="text-white text-2xl sm:text-2xl">
                {selectedPrincipio === principio.id ? "−" : "+"}
              </div>
            </button>

            {/* Contenido expandible */}
            <AnimatePresence>
              {selectedPrincipio === principio.id && (
                <MotionDiv
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="bg-black/60 rounded-b-lg p-4 sm:p-6 mt-1 border-t border-pink-400/20">
                    <div className="space-y-4">
                      {principio.subtemas.map((subtema, index) => (
                        <div
                          key={index}
                          className="border-l-4 border-pink-400 pl-4"
                        >
                          <h5 className="font-bold text-pink-300 text-2xl sm:text-base md:text-3xl mb-2">
                            {subtema.titulo}
                          </h5>
                          <p className="text-white text-xl sm:text-base md:text-2xl leading-relaxed">
                            {subtema.descripcion}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </MotionDiv>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

type Persona = {
  id: number;
  nombre: string;
  imagen: string;
  descripcion: string;
};
// Sección Nuestro Equipo (estructura base)
function NuestroEquipo() {
  const [isMobile, setIsMobile] = useState(false);
   const [selectedPersona, setSelectedPersona] = useState<Persona | null>(null);

  const equipo = [
    {
      id: 1,
      nombre: "Nórida Andrade",
      imagen: "/nosotras/equipo/3.jpeg",
      descripcion:
        "Comunicadora, periodista lesbiana y feminista. Especializada en contenido audiovisual y fotográfico para la incidencia política de género.",
    },
    {
      id: 2,
      nombre: "Karen Flórez",
      imagen: "/nosotras/equipo/1.jpeg",
      descripcion:
        "Psicóloga, feminista e investigadora con enfoque crítico y comunitario desde las epistemologías del sur.",
    },
    {
      id: 3,
      nombre: "Andrea Gaspar",
      imagen: "/nosotras/equipo/5.jpg",
      descripcion:
        "Feminista y politóloga del sur de Colombia. Cree en la dignidad como derecho y en el territorio como lugar de transformación.",
    },
    {
      id: 4,
      nombre: "Dayana Parra",
      imagen: "/nosotras/equipo/4.jpeg",
      descripcion:
        "Psicóloga e Ilustradora feminista sentipensante con énfasis en investigación participativa y acompañamiento psicosocial.",
    },
    {
      id: 5,
      nombre: "Yulieth Díaz",
      imagen: "/nosotras/equipo/2.jpeg",
      descripcion:
        "Politóloga, educadora rural y feminista; fiel creyente de que la educación es el motor de transformación de los pueblos.",
    },
  ];

  // Detectar si es móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // breakpoint md
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center">
      <h3 className="text-4xl sm:text-xl md:text-2xl lg:text-5xl font-extrabold text-pink-400 mb-1 text-center uppercase tracking-wide">
        Nuestro equipo
      </h3>
      <p className="text-white text-center max-w-4xl mb-6 text-xl sm:text-lg lg:text-3xl leading-relaxed">
        &ldquo;Somos hijas enraizadas del sur. Con una apuesta que configura
        redes e investigación. Nuestra labor parte del feminismo crítico y
        comunitario, orientado a la acción colectiva y a la transformación de
        estructuras que limitan la vida en libertad y dignidad.&rdquo;
      </p>

      {/* Cartas */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl">
        {equipo.map((persona) => (
          <div
            key={persona.id}
            className="flex flex-col items-center group cursor-pointer"
            onClick={() => isMobile && setSelectedPersona(persona)} // abrir modal en móvil
          >
            {/* Contenedor de la carta */}
            <div className="relative w-28 h-32 sm:w-32 sm:h-36 md:w-36 md:h-40 lg:w-40 lg:h-44 mb-4 perspective-1000">
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d 
                ${!isMobile ? "group-hover:rotate-y-180" : ""}`}
              >
                {/* Frente */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <Image
                    src={persona.imagen}
                    alt={persona.nombre}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>

                {/* Reverso solo en escritorio */}
                {!isMobile && (
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="w-full h-full bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl p-3 flex items-center justify-center shadow-lg">
                      <p className="text-white text-xs sm:text-sm text-center leading-tight">
                        {persona.descripcion}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Nombre */}
            <span className="text-sm sm:text-base md:text-lg text-white font-bold text-center uppercase">
              {persona.nombre}
            </span>
          </div>
        ))}
      </div>

      {/* Modal para móvil */}
      {isMobile && selectedPersona && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-neutral-900 rounded-2xl max-w-sm w-full p-6 relative text-center border border-pink-500">
            {/* Botón cerrar */}
            <button
              onClick={() => setSelectedPersona(null)}
              className="absolute top-2 right-2 text-pink-400 hover:text-white text-xl"
            >
              ✕
            </button>

            {/* Imagen */}
            <div className="w-32 h-32 mx-auto mb-4 relative rounded-full overflow-hidden border-4 border-pink-500">
              <Image
                src={selectedPersona.imagen}
                alt={selectedPersona.nombre}
                fill
                className="object-cover"
              />
            </div>

            {/* Nombre */}
            <h4 className="text-2xl font-bold text-pink-400 mb-2 uppercase">
              {selectedPersona.nombre}
            </h4>

            {/* Descripción */}
            <p className="text-white text-xl leading-relaxed">
              {selectedPersona.descripcion}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}


function ProyectosSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState<number>(0);

  // State and ref for the scroll arrow
  const [showScrollIcon, setShowScrollIcon] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveImage(0);
  }, [selectedProject]);

  // Check for scroll possibility on mount and resize
  useEffect(() => {
    const container = scrollContainerRef.current;
    const checkScrollable = () => {
      if (container) {
        const isScrollable = container.scrollHeight > container.clientHeight;
        // Also check if we are not already at the bottom
        const isNotAtBottom =
          container.scrollHeight -
            container.scrollTop -
            container.clientHeight >
          1;
        setShowScrollIcon(isScrollable && isNotAtBottom);
      }
    };

    checkScrollable(); // Check on mount

    // Use a timeout to re-check after content has likely loaded and resized the container
    const timer = setTimeout(checkScrollable, 500);

    window.addEventListener("resize", checkScrollable);
    return () => {
      window.removeEventListener("resize", checkScrollable);
      clearTimeout(timer);
    };
  }, []);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;
      // Hide icon when near the bottom (e.g., last 20px)
      if (scrollHeight - scrollTop - clientHeight < 20) {
        setShowScrollIcon(false);
      } else {
        setShowScrollIcon(true);
      }
    }
  };

  const proyectos = [
    {
      titulo: "Rumbeando sin violencias",
      desc: "Las VBG en contexto de rumba, son consideradas microviolencias que se desenvuelven en lugares de ocio y consumo. Las Juanas creó una propuesta de incidencia pública, autoprotección, identificación y prevención de las VBG en contextos de rumba para la construcción de espacios seguros.",
      img: "/proyectos/rsv.png",
      logoImg: "/proyectos/LOGO RUMBIANDO.png",
      descripcionCompleta:
        "Las VBG en contexto de rumba, son consideradas microviolencias que se desenvuelven en lugares de ocio y consumo. Las Juanas creó una propuesta de incidencia pública, autoprotección, identificación y prevención de las VBG en contextos de rumba para la construcción de espacios seguros.",
      assets: {
        images: [
          "/proyectos/gráficas y elementos de RSV/formato 2.jpg",
          "/proyectos/gráficas y elementos de RSV/6eb95637-f974-476e-b4c8-37181212b8c2.jpg",
          "/proyectos/gráficas y elementos de RSV/0e6352cd-11d4-499a-88a9-4f0267a148b6.jpg",
          "/proyectos/gráficas y elementos de RSV/3.jpg",
          "/proyectos/gráficas y elementos de RSV/4.jpg",
          "/proyectos/gráficas y elementos de RSV/5.jpg",
          "/proyectos/gráficas y elementos de RSV/Poster_RSV.png",
          "/proyectos/gráficas y elementos de RSV/90a7589b-a1c8-4bfb-96d9-11dbf6383285.jpg",
        ],
        pdfs: [
          "/proyectos/gráficas y elementos de RSV/Ellas perrean, tu ofreces rumba segura (1).pdf",
          "/proyectos/gráficas y elementos de RSV/GUÍA DE PREVENCIÓN Y ACTUACIÓN DE VBG EN AMBIENTES DE RUMBA - RSV.pdf",
          "/proyectos/gráficas y elementos de RSV/Sin perreo no hay revolución (1).pdf",
          "/proyectos/gráficas y elementos de RSV/Ruta institucional.pdf",
          "/proyectos/gráficas y elementos de RSV/Boletín RSV.pdf",
        ],
      },
      redesSociales: {
        instagram: "https://instagram.com/lasjuanasur",
        facebook: "https://facebook.com/lasjuanasur",
        twitter: "https://twitter.com/lasjuanasur",
      },
      estadisticas: [
        { label: "Participantes", valor: "150+" },
        { label: "Talleres realizados", valor: "25" },
        { label: "Comunidades impactadas", valor: "8" },
      ],
    },
    {
      titulo: "Escuela femipolítica",
      desc: "La escuela es una apuesta de formación con enfoque de género de la Colectiva Las Juanas. Pensada para brindar herramientas a mujeres y diversidad sexual en su participación en escenarios políticos y decisorios de la ciudad de Neiva.",
      img: "/proyectos/PROYECTO ESCUELA FEMIPOLÍTICA.jpg",
      logoImg: "/proyectos/LOGO ESCUELA FEMIPOLÍTICA.png",
      descripcionCompleta:
        "La escuela es una apuesta de formación con enfoque de género de la Colectiva Las Juanas. Pensada para brindar herramientas a mujeres y diversidad sexual en su participación en escenarios políticos y decisorios de la ciudad de Neiva.",
      assets: {
        images: [
          "/proyectos/gráficas y elementos de EFP/4.png",
          "/proyectos/gráficas y elementos de EFP/1.png",
          "/proyectos/gráficas y elementos de EFP/3.png",
          "/proyectos/gráficas y elementos de EFP/5.png",
        ],
        videos: [
          "/proyectos/gráficas y elementos de EFP/1.Escenarios de participación política.mp4",
          "/proyectos/gráficas y elementos de EFP/2. Audiovisual y fotografía móvil.mp4",
          "/proyectos/gráficas y elementos de EFP/3. Comunicación feminista.mp4",
          "/proyectos/gráficas y elementos de EFP/4. Escritura.mp4",
          "/proyectos/gráficas y elementos de EFP/5. Oralidad.mp4",
          "/proyectos/gráficas y elementos de EFP/6. Gestión de proyectos.mp4",
          "https://www.youtube.com/embed/2v0k1Whqx0s?si=MoT1WLCmeuhJbz3W",
          "https://www.youtube.com/embed/ULM8UqejK_0?si=3P1yAZpd-zT32lEL",
          "https://www.youtube.com/embed/jr96x6k59O8?si=qFcCsV8WvLp17JG3",
        ],
        pdfs: ["/proyectos/gráficas y elementos de EFP/Nota Desde La U.pdf"],
      },
      redesSociales: {
        instagram: "https://instagram.com/lasjuanasur",
        facebook: "https://facebook.com/lasjuanasur",
        twitter: "https://twitter.com/lasjuanasur",
      },
      estadisticas: [
        { label: "Estudiantes", valor: "80+" },
        { label: "Módulos completados", valor: "15" },
        { label: "Graduadas", valor: "65" },
      ],
    },
    {
      titulo: "Pa' la calle sin acoso",
      desc: "Pa’ la calle sin acoso, es una iniciativa que busca visibilizar el acoso callejero como una violencia que se perpetua diariamente sobre los cuerpos de mujeres y diversidades en espacios públicos y semipúblicos de la ciudad de Neiva. ",
      img: "/proyectos/PROYECTO PA_ LA CALLE SIN ACOSO.jpg",
      logoImg: "/proyectos/LOGO PA LA CALLE.png",
      descripcionCompleta:
        "Pa’ la calle sin acoso, es una iniciativa que busca visibilizar el acoso callejero como una violencia que se perpetua diariamente sobre los cuerpos de mujeres y diversidades en espacios públicos y semipúblicos de la ciudad de Neiva. ",
      assets: {
        images: [
          "/proyectos/gráficas y elementos de PLCSA/1.png",
          "/proyectos/gráficas y elementos de PLCSA/2.png",
          "/proyectos/gráficas y elementos de PLCSA/3.png",
          "/proyectos/gráficas y elementos de PLCSA/4.png",
          "/proyectos/gráficas y elementos de PLCSA/5.png",
          "/proyectos/gráficas y elementos de PLCSA/6.jpg",
          "/proyectos/gráficas y elementos de PLCSA/7.jpg",
          "/proyectos/gráficas y elementos de PLCSA/8.jpg",
        ],
        pdfs: [
          "/proyectos/gráficas y elementos de PLCSA/Acoso y tipos de acoso.pdf",
          "/proyectos/gráficas y elementos de PLCSA/Experiencias.pdf",
          "/proyectos/gráficas y elementos de PLCSA/Boletín Pa la calle sin acoso.pdf",
        ],
        videos: [],
      },
      redesSociales: {
        instagram: "https://instagram.com/lasjuanasur",
        facebook: "https://facebook.com/lasjuanasur",
        twitter: "https://twitter.com/lasjuanasur",
      },
      estadisticas: [
        { label: "Casos documentados", valor: "200+" },
        { label: "Zonas mapeadas", valor: "12" },
        { label: "Denuncias procesadas", valor: "45" },
      ],
    },

    {
      titulo: "Neiva sin Acoso",
      desc: "Neiva sin acoso es una apuesta comunicativa que busca visibilizar la problemática del acoso callejero en la ciudad de Neiva, mediante propuestas gráficas y artísticas que sensibilicen a la ciudadanía. La iniciativa pretende ocupar el espacio público y generar disrupción en la cotidianidad de quienes transitan por él.",
      img: "/proyectos/proyectoneivasinacoso.jpg",
      logoImg: "/proyectos/logoneivasinacoso.png",
      descripcionCompleta:
        "Neiva sin acoso es una apuesta comunicativa que busca visibilizar la problemática del acoso callejero en la ciudad de Neiva, mediante propuestas gráficas y artísticas que sensibilicen a la ciudadanía. La iniciativa pretende ocupar el espacio público y generar disrupción en la cotidianidad de quienes transitan por él.",
      assets: {
        images: [
          "/proyectos/neivasinacoso/1.jpg",
          "/proyectos/neivasinacoso/2.jpg",
          "/proyectos/neivasinacoso/3.jpg",
          "/proyectos/neivasinacoso/4.jpg",
          "/proyectos/neivasinacoso/5.jpg",
          "/proyectos/neivasinacoso/6.jpg",
          "/proyectos/neivasinacoso/7.jpg",
          "/proyectos/neivasinacoso/8.jpg",
          "/proyectos/neivasinacoso/9.jpg",
          "/proyectos/neivasinacoso/10.jpg",
          "/proyectos/neivasinacoso/Ilustración.jpg",
        ],
        pdfs: ["/proyectos/neivasinacoso/Artículo investigativo .pdf"],
        videos: [
          "https://www.youtube.com/embed/PVoDXRzJNmk?si=U0I59w-FhHqfJXrw",
          "https://www.youtube.com/embed/U6z-nNjl6lE?si=1IxTGTFuRojU3lCp",
        ],
      },
      redesSociales: {
        instagram: "https://instagram.com/lasjuanasur",
        facebook: "https://facebook.com/lasjuanasur",
        twitter: "https://twitter.com/lasjuanasur",
      },
      estadisticas: [
        { label: "Casos documentados", valor: "200+" },
        { label: "Zonas mapeadas", valor: "12" },
        { label: "Denuncias procesadas", valor: "45" },
      ],
    },
    {
      titulo: "Observatorio de acoso callejero",
      desc: "El Observatorio de Acoso Callejero Huila es una iniciativa de rastreo y mapeo del acoso en el departamento, que surge a partir de la experiencia de Pa’ la calle sin acoso. Este observatorio busca consolidarse como un proyecto continuo para sistematizar los casos de acoso callejero en los 37 municipios del Huila y, al mismo tiempo, convertirse en una plataforma de incidencia política.",
      img: "/proyectos/proyectoobservatorio.jpg",
      logoImg: "/proyectos/logoobservatorio.png",
      descripcionCompleta:
        "El Observatorio de Acoso Callejero Huila es una iniciativa de rastreo y mapeo del acoso en el departamento, que surge a partir de la experiencia de Pa’ la calle sin acoso. Este observatorio busca consolidarse como un proyecto continuo para sistematizar los casos de acoso callejero en los 37 municipios del Huila y, al mismo tiempo, convertirse en una plataforma de incidencia política.",
      assets: {
        images: [
          "/proyectos/observatorio/1.png",
          "/proyectos/observatorio/2.jpg",
          "/proyectos/observatorio/4.jpg",
          "/proyectos/observatorio/5.jpg",
          "/proyectos/observatorio/6.jpg",
          "/proyectos/observatorio/7.jpg",
          "/proyectos/observatorio/8.jpg",
          "/proyectos/observatorio/8.jpg",
          "/proyectos/observatorio/Descargable Ilustración.jpeg",
        ],
        pdfs: ["/proyectos/observatorio/Tipología.pdf"],
        videos: ["/proyectos/observatorio/3.mp4"],
      },
      redesSociales: {
        instagram: "https://instagram.com/lasjuanasur",
        facebook: "https://facebook.com/lasjuanasur",
        twitter: "https://twitter.com/lasjuanasur",
      },
      estadisticas: [
        { label: "Casos documentados", valor: "200+" },
        { label: "Zonas mapeadas", valor: "12" },
        { label: "Denuncias procesadas", valor: "45" },
      ],
    },
  ];

  // Devuelve las imágenes del proyecto incluyendo el logo como imagen descargable/visible
  const getProjectImages = (idx: number) => {
    const base = proyectos[idx]?.assets?.images || [];
    return [...base];
  };

  const getProjectMedia = (idx: number) => {
    const imgs = getProjectImages(idx).map((src) => ({
      type: "image" as const,
      src,
    }));

    const vids = (proyectos[idx]?.assets?.videos || []).map((src) => {
      if (src.includes("youtube.com/embed")) {
        const videoIdMatch = src.match(/embed\/([a-zA-Z0-9_-]+)/);
        const videoId = videoIdMatch ? videoIdMatch[1] : null;
        return {
          type: "youtube" as const,
          src,
          thumbnail: videoId
            ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
            : "/fondo.jpg", // fallback image
        };
      }
      return { type: "video" as const, src };
    });

    return [...imgs, ...vids];
  };

  return (
    <div
      ref={scrollContainerRef}
      onScroll={handleScroll}
      className="relative w-screen h-screen overflow-y-auto scrollbar-hide"
    >
      {proyectos.map((p, i) => (
        <div
          key={i}
          className="relative w-screen h-80 flex-shrink-0 overflow-hidden cursor-pointer group"
          onClick={() => setSelectedProject(i)}
        >
          <Image
            src={p.img}
            alt={p.titulo}
            fill
            style={{ objectFit: "cover" }}
            className="absolute inset-0 w-full h-full transform
             transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Overlay: oscurece y crea gradiente de izquierda a derecha */}
          <div className="absolute inset-0 bg-black/50 transition-opacity duration-500 ease-out group-hover:opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent transition-opacity duration-500 ease-out group-hover:from-black/70 group-hover:via-black/40" />

          {/* Contenido */}
          <div className="relative z-10 w-full h-full flex flex-col sm:flex-row items-center sm:items-stretch text-center sm:text-left">
  {/* Texto arriba (en móvil) o izquierda (en web) */}
  <div className="flex-1 flex flex-col justify-center px-3 sm:px-6 transform transition-transform duration-500 ease-out group-hover:translate-x-1">
    <h4 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow mb-1 sm:mb-2">
      {p.titulo}
    </h4>
    <p className="text-white/90 
    text-2xl sm:text-sm md:text-xl leading-snug line-clamp-2 max-w-[60ch] mx-auto sm:mx-0">
      {p.desc}
    </p>
  </div>

  {/* Logo debajo en móvil, a la derecha en web */}
  {p.logoImg ? (
    <div className="flex justify-center  sm:mt-0 sm:justify-center 
    sm:items-center w-full sm:w-1/3 md:w-1/5 lg:w-1/5 pr-0 sm:pr-6">
  <div className=" mb-4 relative w-80 h-30 
  sm:w-44 sm:h-20 
  md:w-100 md:h-70
  transform transition-transform duration-500 ease-out group-hover:translate-y-[-2px] group-hover:scale-105">
    <Image
      src={p.logoImg}
      alt={`${p.titulo} logo`}
      fill
      className="object-contain"
    />
  </div>
</div>

  ) : null}
</div>

        </div>
      ))}

      {/* Scroll Down Arrow */}
      {showScrollIcon && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-20">
          <svg
            className="w-10 h-10 text-pink-400 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      )}

      {/* Popup Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-black/30 backdrop-blur-md border border-pink-400/30 rounded-xl 
          sm:rounded-2xl w-full  max-w-[100vw]
          sm:max-w-2xl md:max-w-5xl lg:max-w-7xl
           max-h-[90vh] sm:max-h-[80vh] 
           overflow-y-auto relative">
            {/* Botón cerrar */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 bg-pink-500/80 hover:bg-pink-500 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-colors text-sm sm:text-base shadow-lg"
            >
              ✕
            </button>

            <div className="p-3 sm:p-5 md:p-8">
              <div className="space-y-4 sm:space-y-6">
                {/* Encabezado */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-pink-400">
                      {proyectos[selectedProject].titulo}
                    </h2>
                    <p className="text-white/90 text-xl sm:text-base md:text-lg mt-1">
                      {proyectos[selectedProject].descripcionCompleta}
                    </p>
                  </div>
                </div>

                {/* Contenido: Carrusel a la izquierda y Documentos a la derecha */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  <div className="lg:col-span-8 space-y-6">
                    {getProjectMedia(selectedProject).length ? (
                      <>
                        <h3 className="text-white/90 text-xl font-bold">Galería</h3>
                        <div className="relative w-full h-[56vh] sm:h-[58vh] md:h-[60vh]
                         lg:h-[62vh] bg-black rounded-lg overflow-hidden ring-1 ring-white/10">
                          <MotionDiv
                            key={activeImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            {(() => {
                              const media =
                                getProjectMedia(selectedProject)[activeImage];
                              switch (media.type) {
                                case "image":
                                  return (
                                    <Image
                                      src={media.src}
                                      alt={`Media ${activeImage + 1}`}
                                      fill
                                      style={{ objectFit: "contain" }}
                                    />
                                  );
                                case "video":
                                  return (
                                    <video
                                      controls
                                      className="w-full h-full"
                                      style={{ objectFit: "contain" }}
                                    >
                                      <source
                                        src={media.src}
                                        type="video/mp4"
                                      />
                                    </video>
                                  );
                                case "youtube":
                                  return (
                                    <iframe
                                      className="w-full h-full"
                                      src={media.src}
                                      title="YouTube video player"
                                      frameBorder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowFullScreen
                                    ></iframe>
                                  );
                                default:
                                  return null;
                              }
                            })()}
                          </MotionDiv>
                          <button
                            onClick={() =>
                              setActiveImage(
                                (prev) =>
                                  (prev -
                                    1 +
                                    getProjectMedia(selectedProject).length) %
                                  getProjectMedia(selectedProject).length
                              )
                            }
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-9 h-9 flex items-center justify-center"
                          >
                            ‹
                          </button>
                          <button
                            onClick={() =>
                              setActiveImage(
                                (prev) =>
                                  (prev + 1) %
                                  getProjectMedia(selectedProject).length
                              )
                            }
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-9 h-9 flex items-center justify-center"
                          >
                            ›
                          </button>
                          {/* Botón Descargar media actual */}
                          <a
                            href={
                              getProjectMedia(selectedProject)[activeImage].src
                            }
                            download
                            aria-label="Descargar"
                            className="absolute right-2 top-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full p-2 shadow flex items-center justify-center"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 3v12m0 0l4-4m-4 4l-4-4"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M5 21h14a2 2 0 0 0 2-2v-3"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </div>
                        <div className="flex gap-2 overflow-x-auto pb-1">
                          {getProjectMedia(selectedProject).map((m, idx) => (
                            <button
                              key={idx}
                              onClick={() => setActiveImage(idx)}
                              className={`relative flex-none w-24 h-16 rounded-md overflow-hidden ring-2 ${
                                activeImage === idx
                                  ? "ring-pink-400"
                                  : "ring-white/10"
                              }`}
                            >
                              {m.type === "image" && (
                                <Image
                                  src={m.src}
                                  alt={`Miniatura ${idx + 1}`}
                                  fill
                                  style={{ objectFit: "cover" }}
                                />
                              )}
                              {m.type === "video" && (
                                <video
                                  muted
                                  playsInline
                                  className="w-full h-full"
                                  style={{ objectFit: "cover" }}
                                >
                                  <source src={m.src} type="video/mp4" />
                                </video>
                              )}
                              {m.type === "youtube" && (
                                <Image
                                  src={m.thumbnail}
                                  alt={`Miniatura ${idx + 1}`}
                                  fill
                                  style={{ objectFit: "cover" }}
                                />
                              )}
                              {(m.type === "video" || m.type === "youtube") && (
                                <span className="absolute bottom-1 right-1 bg-black/60 text-white text-[10px] px-1 rounded">
                                  Video
                                </span>
                              )}
                            </button>
                          ))}
                        </div>
                      </>
                    ) : null}

                    {/* Sin sección de videos separada; videos integrados en la galería */}
                  </div>
                  <div className="lg:col-span-4">
                    {proyectos[selectedProject].assets?.pdfs?.length ? (
                      <div className="bg-white/5 rounded-lg p-3 sm:p-4 ring-1 ring-white/10 h-full">
                        <h3 className="text-white text-xl font-bold mb-3">
                          Documentos
                        </h3>
                        <div className="flex flex-col gap-2">
                          {proyectos[selectedProject].assets.pdfs.map(
                            (pdf, idx) => (
                              <div
                                key={idx}
                                className="flex items-center justify-between gap-3 bg-black/30 rounded-lg p-3 ring-1 ring-white/10"
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <Image
                                    src="/file.svg"
                                    alt="pdf"
                                    width={24}
                                    height={24}
                                  />
                                  <span className="text-white text-xl truncate">
                                    {pdf.split("/").pop()}
                                  </span>
                                </div>
                                <div className="flex gap-2 flex-shrink-0">
                                  <a
                                    href={pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-pink-500 hover:bg-pink-600
                                     text-white text-xl font-bold px-2 py-1 rounded"
                                  >
                                    Ver
                                  </a>
                                  <a
                                    href={pdf}
                                    download
                                    className="bg-white/10 hover:bg-white/20 text-white text-xl font-bold px-2 py-1 rounded"
                                  >
                                    Descargar
                                  </a>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="bg-white/5 rounded-lg p-3 sm:p-4 ring-1 ring-white/10 h-full flex items-center justify-center text-white/60">
                        Sin documentos disponibles.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DenunciaSection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="flex flex-col gap-4 sm:gap-6 items-center text-center">
          {/* Cabezote */}
          <div className="relative w-full max-w-4xl h-28 sm:h-32 md:h-36 lg:h-60 rounded-xl overflow-hidden ring-1 ring-white/10 bg-black">
            <Image
              src="/denuncia/CABEZOTE DENUNCIA.png"
              alt="Denuncia el acoso callejero"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Descripción */}
          <div className=" ring-white/10">
            <p className="text-white text-xl sm:text-xl leading-relaxed">
              Este formulario hace parte del Observatorio de Acoso Callejero
              Huila, un proyecto de investigación e incidencia política que
              busca rastrear las experiencias de acoso callejero que viven las
              mujeres a diario en el departamento. Al responder, nos ayudas a
              reunir datos de gran importancia que servirán para seguir exigir
              acciones de justicia y seguridad, construir entornos más seguros y
              defender nuestro derecho a transitar por el espacio público libres
              de violencias y sin miedo.
              <br />
              Debes completar el formulario por cada hecho de acoso que desees
              denunciar. Denuncia las veces que desees.
              <br />
              <span className="text-pink-300 font-bold">¡Recuerda!</span> Tus
              datos están protegidos 💜
              <br />
              <span className="text-pink-300 font-bold">
                Cuéntanos, para que nadie más tenga que callar 🗣️
              </span>
            </p>
            <div className="flex justify-center mt-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScy2So9nnWxB0xj0J9HruU6uTqY4SFJFDYeqvlI56SEtrUr4g/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-pink-500 hover:bg-pink-600 text-white font-extrabold px-6 py-3 rounded-lg uppercase tracking-wider shadow-lg transition-transform transform hover:scale-105"
              >
                Denunciar ahora
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="opacity-90"
                >
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EventosSection() {
  const [selectedEvento, setSelectedEvento] = useState<number | null>(null);
  const eventos = [
    {
      titulo: "Taller de Autodefensa Digital",
      descripcion:
        "Aprende a proteger tu privacidad y seguridad en línea con herramientas feministas. Cupos limitados.",
      fecha: "2024-08-10",
      fuente: "Las Juanas",
      img: "/1.jpg",
      descripcionCompleta: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      imagenes: ["/1.jpg", "/2.jpg"],
      enlaces: [
        { label: "Ver en Instagram", url: "https://instagram.com/lasjuanasur" },
        { label: "Descargar afiche", url: "#" },
      ],
    },
    {
      titulo: "Cine Foro: Mujeres y Territorio",
      descripcion:
        "Proyección de documental y conversatorio sobre luchas territoriales de mujeres en el sur.",
      fecha: "2024-09-02",
      fuente: "Red Feminista",
      img: "/2.jpg",
      descripcionCompleta: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod nisi.`,
      imagenes: ["/2.jpg", "/3.jpg"],
      enlaces: [
        {
          label: "Evento en Facebook",
          url: "https://facebook.com/lasjuanasur",
        },
      ],
    },
    {
      titulo: "Festival de Arte Feminista",
      descripcion:
        "Exposición colectiva, música y talleres para celebrar la creatividad y resistencia feminista.",
      fecha: "2024-10-15",
      fuente: "Colectiva Sur",
      img: "/3.jpg",
      descripcionCompleta: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod nisi.`,
      imagenes: ["/3.jpg", "/4.jpg"],
      enlaces: [{ label: "Más info", url: "#" }],
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 py-4 sm:py-6 md:py-8 gap-4 sm:gap-6 md:gap-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-pink-400 mb-3 sm:mb-4 md:mb-6 text-center uppercase tracking-wider">
        Eventos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-6xl">
        {eventos.map((evento, i) => (
          <div
            key={i}
            className="bg-white/10 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden flex flex-col cursor-pointer border-2 border-pink-400 hover:scale-105 transition-transform"
            onClick={() => setSelectedEvento(i)}
          >
            <div className="relative w-full h-32 sm:h-40 md:h-48">
              <Image
                src={evento.img}
                alt={evento.titulo}
                fill
                style={{ objectFit: "cover" }}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3 sm:p-4 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-pink-400 text-white px-2 py-1 rounded-full font-bold uppercase">
                  {evento.fuente}
                </span>
                <span className="text-xs text-white/70 ml-auto">
                  {new Date(evento.fecha).toLocaleDateString()}
                </span>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-1 line-clamp-2">
                {evento.titulo}
              </h3>
              <p className="text-white/80 text-xs sm:text-sm line-clamp-3 mb-2">
                {evento.descripcion}
              </p>
              <div className="mt-auto flex gap-2">
                <span className="text-pink-300 text-xs font-bold">
                  Leer más
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Popup Modal */}
      {selectedEvento !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl max-w-xs sm:max-w-2xl md:max-w-3xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedEvento(null)}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 bg-pink-400 hover:bg-pink-500 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-colors text-lg sm:text-xl md:text-2xl"
            >
              ✕
            </button>
            <div className="p-3 sm:p-4 md:p-6 lg:p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-pink-400 mb-2">
                {eventos[selectedEvento].titulo}
              </h2>
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                <div className="flex-1 space-y-3 sm:space-y-4">
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-2 leading-relaxed">
                    {eventos[selectedEvento].descripcionCompleta}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {eventos[selectedEvento].enlaces.map((enlace, idx) => (
                      <a
                        key={idx}
                        href={enlace.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-pink-400 hover:bg-pink-500 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-bold transition-colors"
                      >
                        {enlace.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex-1 space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    {eventos[selectedEvento].imagenes.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative h-20 sm:h-24 md:h-28 rounded-md sm:rounded-lg overflow-hidden"
                      >
                        <Image
                          src={img}
                          alt={`Imagen evento ${idx + 1}`}
                          fill
                          style={{ objectFit: "cover" }}
                          className="rounded-md sm:rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    {new Date(
                      eventos[selectedEvento].fecha
                    ).toLocaleDateString()}{" "}
                    | {eventos[selectedEvento].fuente}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function RecursosSection() {
  const recursos = [
    {
      titulo: "FOTOGRAFÍAS",
      img: "/1.jpg",
    },
    {
      titulo: "GRÁFICOS",
      img: "/2.jpg",
    },
    {
      titulo: "BOLETINES",
      img: "/3.jpg",
    },
  ];
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 py-4 sm:py-6 md:py-8">
      <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 sm:gap-6 md:gap-8 w-full max-w-5xl">
        {recursos.map((r, i) => (
          <div key={i} className="flex-1 flex flex-col items-center">
            <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-2 sm:border-3 md:border-4 border-black bg-black">
              <Image
                src={r.img}
                alt={r.titulo}
                fill
                style={{
                  objectFit: "cover",
                  filter: i === 0 ? "grayscale(1) contrast(1.2)" : undefined,
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 sm:top-3 md:top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="bg-yellow-300 text-black font-extrabold px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm md:text-base lg:text-lg shadow-lg uppercase tracking-wide">
                  {r.titulo}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
