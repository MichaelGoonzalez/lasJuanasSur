'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Type assertion to fix className issue with Framer Motion v11 and React 19
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MotionDiv = motion.div as any;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [section, setSection] = useState<'inicio' | 'nosotras' | 'proyectos' | 'mapa' | 'denuncia' | 'eventos' | 'recursos'>("inicio");

  // Estado para controlar si el menú está expandido o compacto
  const isMenuExpanded = section === 'inicio';


  return ( 
    <div className="relative h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{
            backgroundImage: 'url(/fondo2.png)',
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
            background: 'radial-gradient(circle, rgba(244, 114, 182, 0.4) 0%, rgba(251, 113, 133, 0.2) 30%, rgba(236, 72, 153, 0.1) 60%, transparent 100%)'
          }}
        />
      </div>
      
      {/* Luz rosa esquina superior derecha */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-60">
        <div 
          className="w-full h-full rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"
          style={{
            background: 'radial-gradient(circle, rgba(244, 114, 182, 0.5) 0%, rgba(251, 113, 133, 0.3) 25%, rgba(236, 72, 153, 0.15) 50%, transparent 100%)'
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
            ? 'h-[20vh] sm:h-[22vh] md:h-[25vh] pt-1 sm:pt-2 pb-1 sm:pb-2' 
            : 'h-[8vh] sm:h-[10vh] pt-1 sm:pt-2 pb-1 sm:pb-2'
        }`}
        animate={{ 
          height: isMenuExpanded ? "20vh" : "8vh",
          transition: { duration: 0.5, ease: "easeInOut" }
        }}
      >
        {/* Título LAS JUANAS con animación - Solo visible en modo expandido */}
        {isMenuExpanded && (
          <MotionDiv 
            className="flex justify-center items-start text-center text-[2.2rem] xs:text-[1.5rem] sm:text-[2rem] md:text-[3.5rem] lg:text-[6rem] xl:text-[8rem] 2xl:text-[8rem] text-pink-400 select-none drop-shadow-lg font-espa leading-none whitespace-nowrap -mt-2 sm:-mt-4 md:-mt-6 lg:-mt-8"
  style={{ letterSpacing: '0.15em' }}
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
            isMenuExpanded ? 'mt-2 sm:mt-3 md:mt-5' : 'mt-1 sm:mt-2'
          }`}
          animate={{
            marginTop: isMenuExpanded ? "1rem" : "0.5rem",
            transition: { duration: 0.5, ease: "easeInOut" }
          }}
        >
          {/* Header para Móvil (visible < sm) */}
          <div className="sm:hidden w-full flex items-center justify-between">
            {/* Espaciador para centrar el logo */}
            <div className="w-6" />

            {/* Logo, solo en modo compacto */}
            {!isMenuExpanded && (
              <div 
                className="text-pink-400 font-espa font-bold text-lg"
                style={{ letterSpacing: '0.15em' }}
              >
                LAS JUANAS
              </div>
            )}
            {isMenuExpanded && <div />}

            {/* Botón de Hamburguesa */}
            <button className="flex flex-col gap-1 z-30" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
              <span className="w-6 h-0.5 bg-yellow-400 rounded"></span>
              <span className="w-6 h-0.5 bg-yellow-400 rounded"></span>
              <span className="w-6 h-0.5 bg-yellow-400 rounded"></span>
            </button>
          </div>

          {/* Header para Desktop (visible >= sm) */}
          <MotionDiv 
            style={{ letterSpacing: '0.12em' }} 
            className={`hidden sm:flex w-full items-center text-white transition-all duration-500 ease-in-out ${
              isMenuExpanded 
                ? 'max-w-6xl justify-center gap-0 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'
                : 'max-w-4xl justify-between text-xs sm:text-sm md:text-base'
            }`}
            animate={{
              maxWidth: isMenuExpanded ? "72rem" : "56rem",
              justifyContent: isMenuExpanded ? "center" : "space-between",
              fontSize: isMenuExpanded ? "1rem" : "0.875rem",
              transition: { duration: 0.5, ease: "easeInOut" }
            }}
          >
            {/* En modo compacto, mostrar LAS JUANAS a la izquierda */}
            {!isMenuExpanded && (
              <MotionDiv 
                className="text-pink-400 font-espa font-bold text-xl md:text-3xl lg:text-5xl"
                style={{ letterSpacing: '0.15em' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                LAS JUANAS
              </MotionDiv>
            )}
            
            {/* Botones de navegación */}
            <div className={`flex items-center transition-all duration-500 ease-in-out ${
              isMenuExpanded ? 'gap-0' : 'gap-1 sm:gap-2'
            }`}>
            <a href="#inicio" 
             onClick={()=>setSection('inicio')} 
               className={`py-1 sm:py-2 hover:text-pink-400 transition border-r-2 sm:border-r-3 md:border-r-4 border-pink-400 first:rounded-l last:rounded-r last:border-r-0 border-solid ${
                 isMenuExpanded 
                   ? 'px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10'
                   : 'px-2 sm:px-3 md:px-4'
               } ${section==='inicio'?' text-pink-400':''}`}>
              <span className={`${section==='inicio' ? 'animate-bounce-slow' : ''}`}>INICIO</span>
            </a>
            <a href="#nosotras"
                onClick={()=>setSection('nosotras')} className={`py-1 sm:py-2 hover:text-pink-400 transition border-r-2 sm:border-r-3 md:border-r-4 border-pink-400 border-solid ${
                  isMenuExpanded 
                    ? 'px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10'
                    : 'px-2 sm:px-3 md:px-4'
                } ${section==='nosotras'?' text-pink-400':''}`}>
              <span className={`${section==='nosotras' ? 'animate-bounce-slow' : ''}`}>NOSOTRAS</span>
            </a>
              <a href="#proyectos" onClick={()=>setSection('proyectos')} className={`py-1 sm:py-2 hover:text-pink-400 transition border-r-2 sm:border-r-3 md:border-r-4 border-pink-400 border-solid ${
                isMenuExpanded 
                  ? 'px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10'
                  : 'px-2 sm:px-3 md:px-4'
              } ${section==='proyectos'?' text-pink-400':''}`}>
              <span className={`${section==='proyectos' ? 'animate-bounce-slow' : ''}`}>PROYECTOS</span>
            </a>
              {/* <a href="#mapa" onClick={()=>setSection('mapa')} className={`py-1 sm:py-2 hover:text-pink-400 transition border-r-2 sm:border-r-3 md:border-r-4 border-pink-400 border-solid ${
                isMenuExpanded 
                  ? 'px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10'
                  : 'px-2 sm:px-3 md:px-4'
              } ${section==='mapa'?' text-pink-400':''}`}>
              <span className={`${section==='mapa' ? 'animate-bounce-slow' : ''}`}>MAPA</span>
            </a> */}
              <a href="#denuncia" onClick={()=>setSection('denuncia')} className={`py-1 sm:py-2 hover:text-pink-400 transition border-r-2 sm:border-r-3 md:border-r-4 border-pink-400 border-solid ${
                isMenuExpanded 
                  ? 'px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10'
                  : 'px-2 sm:px-3 md:px-4'
              } ${section==='denuncia'?' text-pink-400':''}`}>
              <span className={`${section==='denuncia' ? 'animate-bounce-slow' : ''}`}>DENUNCIA</span>
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
          <div className="absolute top-[4rem] sm:top-[5rem] left-1/2 -translate-x-1/2 bg-black/90 rounded-lg shadow-lg flex flex-col gap-2 p-4 text-white font-extrabold text-sm sm:hidden animate-fade-in z-20 min-w-[200px]">
            <a href="#inicio" onClick={()=>{setMenuOpen(false);setSection('inicio')}} className="hover:text-pink-400 transition py-1">Inicio</a>
            <a href="#nosotras" onClick={()=>{setMenuOpen(false);setSection('nosotras')}} className="hover:text-pink-400 transition py-1">Nosotras</a>
            <a href="#proyectos" onClick={()=>{setMenuOpen(false);setSection('proyectos')}} className="hover:text-pink-400 transition py-1">Proyectos</a>
           {/*  <a href="#mapa" onClick={()=>{setMenuOpen(false);setSection('mapa')}} className="hover:text-pink-400 transition py-1">Mapa</a> */}
            <a href="#denuncia" onClick={()=>{setMenuOpen(false);setSection('denuncia')}} className="hover:text-pink-400 transition py-1">Denuncia</a>
            {/* <a href="#eventos" onClick={()=>{setMenuOpen(false);setSection('eventos')}} className="hover:text-pink-400 transition py-1">Eventos</a>
            <a href="#recursos" onClick={()=>{setMenuOpen(false);setSection('recursos')}} className="hover:text-pink-400 transition py-1">Recursos</a> */}
          </div>
        )}
      </MotionDiv>

      {/* Contenido principal animado */}
      <main className={`relative flex items-center justify-center px-2 sm:px-4 md:px-8 pt-2 sm:pt-4 md:pt-8 pb-0 w-full mx-auto overflow-hidden transition-all duration-500 ease-in-out ${
        isMenuExpanded 
          ? 'h-[80vh] sm:h-[78vh] md:h-[80vh]' 
          : 'h-[92vh] sm:h-[90vh] md:h-[95vh]'
      }`}>
        <AnimatePresence mode="wait">
          {section === 'inicio' && (
            <MotionDiv
              key="inicio"
              className="w-full h-full top-0 left-0 flex flex-col lg:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }}
              exit={{ y: "-100%", opacity: 0, transition: { duration: 0.5, ease: "easeIn" } }}
            >
              {/* Imagen grande, proporcionada */}
              <div className="w-full lg:w-[40%] xl:w-[40%] flex items-end h-[40%] sm:h-[45%] md:h-[50%] lg:h-full overflow-hidden">
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
              <div className="w-full lg:w-[55%] xl:w-[50%] flex flex-col items-center text-center justify-center h-[60%] sm:h-[55%] md:h-[50%] lg:h-full px-2 sm:px-4">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-extrabold text-white drop-shadow-lg leading-none mb-1 sm:mb-2">
                  Las Juanas <br />
                  <span className="text-pink-400">colectiva feminista</span>
                </h1>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl 2xl:text-4xl
                 text-white/80 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto mb-2 sm:mb-4 leading-relaxed">
                  Investigamos, visibilizamos y hacemos incidencia política frente a violencias basadas en género.
                </p>
                {/* Ícono animado */}
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
          )}
          {section === 'nosotras' && (
            <MotionDiv
              key="nosotras"
              className="w-full h-full top-0 left-0 flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 relative px-2 sm:px-4"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }}
              exit={{ y: "-100%", opacity: 0, transition: { duration: 0.5, ease: "easeIn" } }}
            >
              <NosotrasContent />
            </MotionDiv>
          )}
          {section === 'proyectos' && (
            <MotionDiv
              key="proyectos"
              className="w-full h-full flex flex-col
               items-center justify-center gap-4 sm:gap-6
                md:gap-8 mb-4 sm:mb-6 relative px-2 sm:px-4"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }}
              exit={{ y: "-100%", opacity: 0, transition: { duration: 0.5, ease: "easeIn" } }}
            >
              <ProyectosSection />
            </MotionDiv>
          )}
          {section === 'mapa' && (
            <MotionDiv
              key="mapa"
              className="w-full h-full flex items-center justify-center px-2 sm:px-4"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }}
              exit={{ y: "-100%", opacity: 0, transition: { duration: 0.5, ease: "easeIn" } }}
            >
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold text-white/60 uppercase tracking-wider">
                  Pendiente
                </h2>
              </div>
            </MotionDiv>
          )}
          {section === 'denuncia' && (
            <MotionDiv
              key="denuncia"
              className="w-full h-full flex items-center justify-center px-2 sm:px-4"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }}
              exit={{ y: "-100%", opacity: 0, transition: { duration: 0.5, ease: "easeIn" } }}
            >
              <DenunciaSection />
            </MotionDiv>
          )}
          {section === 'eventos' && (
            <EventosSection />
          )}
          {section === 'recursos' && (
            <RecursosSection />
          )}
        </AnimatePresence>
      </main>
      </div>
    </div>
  );
}

function NosotrasSlider() {
  const images = ["/nosotras/1.jpg", "/nosotras/2.jpg", "/nosotras/3.jpg", "/nosotras/6.jpg", "/nosotras/5.jpg"];
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [index, images.length]);

  // Determina la dirección (siempre izquierda)
  const direction = 1;

  return (
    <div className="relative w-full lg:w-1/2 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[340px] xl:h-[420px] flex items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl">
      <AnimatePresence custom={direction} mode="wait">
        <MotionDiv
          key={images[prevIndex] + '-out'}
          className="absolute w-full h-full flex items-center justify-center rounded-xl sm:rounded-2xl"
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: '-100%', opacity: 1 }}
          exit={{ x: '-100%', opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <Image src={images[prevIndex]} alt={`Nosotras ${prevIndex+1}`} fill style={{objectFit:'cover'}} className="rounded-xl sm:rounded-2xl" />
        </MotionDiv>
        <MotionDiv
          key={images[index] + '-in'}
          className="absolute w-full h-full flex items-center justify-center rounded-xl sm:rounded-2xl"
          initial={{ x: '100%', opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <Image src={images[index]} alt={`Nosotras ${index+1}`} fill style={{objectFit:'cover'}} className="rounded-xl sm:rounded-2xl" />
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
            style={{ objectFit: 'cover', }}
                className="rounded-xl sm:rounded-2xl"
              />
          {/* Overlay negro para reducir brillo */}
          <div className="absolute inset-0 bg-black/40 rounded-xl sm:rounded-2xl"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-full px-2 sm:px-4 py-4 sm:py-6 z-10">
            {/* Efecto de sombra de texto más intenso */}
            <div className="max-w-4xl mx-auto">
              <p className="font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-2 sm:mb-4 text-white text-center leading-relaxed" 
                 style={{
                   textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6), 0 0 12px rgba(0,0,0,0.4)'
                 }}>
                <span className="text-pink-400" style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.7)'
                }}>Somos Las Juanas,</span>  una colectiva feminista de Neiva que nace desde la rabia, la memoria y el amor por nuestras hermanas. Nos organizamos para resistir, cuestionar y transformar las violencias estructurales que atraviesan nuestros cuerpos y territorios. Creemos en la palabra como herramienta política, en la sororidad como tejido de cuidado, y en la acción como camino hacia la justicia. Visibilizamos lo que históricamente ha sido silenciado: las voces, historias y luchas de las mujeres y disidencias. A través de la investigación, la pedagogía popular, el arte y la movilización social, buscamos construir una ciudad más justa, segura y equitativa para todas. Porque nuestras vidas importan, porque no estamos solas, porque el feminismo también florece en el sur.
                </p>
                <a
                  href="https://instagram.com/lasjuanasur"
                  target="_blank"
                  rel="noopener noreferrer"
                className="inline-block mt-1 sm:mt-2 text-pink-200 hover:text-pink-400 underline transition text-center text-xs sm:text-sm"
                style={{
                  textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
                }}
                >
                  @LASJUANASUR
                </a>
            </div>
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
  const [selectedPrincipio, setSelectedPrincipio] = useState<number | null>(null);

  const principios = [
    {
      id: 1,
      titulo: 'Identidad política',
      subtemas: [
        {
          titulo: 'Lo personal es político',
          descripcion: 'Nuestras experiencias cotidianas están atravesadas por estructuras de poder. Lo íntimo y lo público se entrelazan, y desde allí construimos conciencia y acción.'
        },
        {
          titulo: 'Feminismo crítico y comunitario',
          descripcion: 'Nuestro posicionamiento se enraíza en prácticas colectivas, anticapitalistas, anticoloniales y antipatriarcales, desde y para los territorios.'
        }
      ]
    },
    {
      id: 2,
      titulo: 'Diversidad y justicia social',
      subtemas: [
        {
          titulo: 'Diversidad e inclusión',
          descripcion: 'Afirmamos el derecho a existir y participar desde múltiples identidades, cuerpos, saberes y trayectorias. No hay un solo modo de ser mujer o de habitar los feminismos.'
        },
        {
          titulo: 'Igualdad',
          descripcion: 'Promovemos relaciones horizontales y justas, desafiando las jerarquías impuestas por género, clase, etnia, edad u orientación sexual.'
        }
      ]
    },
    {
      id: 3,
      titulo: 'Cuidado como práctica política',
      subtemas: [
        {
          titulo: 'Cuidado colectivo',
          descripcion: 'Sostenemos redes de apoyo que protejan la vida, reconociendo que cuidar es una responsabilidad política y transformadora.'
        },
        {
          titulo: 'Autocuidado',
          descripcion: 'Valoramos la atención a nuestras necesidades físicas, emocionales y espirituales como parte de la sostenibilidad de nuestras luchas.'
        },
        {
          titulo: 'Corresponsabilidad',
          descripcion: 'Compartimos tareas, tiempos y afectos para construir organizaciones más justas, íntimas y protectoras.'
        }
      ]
    },
    {
      id: 4,
      titulo: 'Organización comunitaria y acción colectiva',
      subtemas: [
        {
          titulo: 'Solidaridad',
          descripcion: 'Nos movemos desde el reconocimiento mutuo, acompañando las luchas desde una ética del apoyo y la reciprocidad y unión.'
        },
        {
          titulo: 'Cooperación',
          descripcion: 'Trabajamos juntas, sumando saberes y fuerzas, para generar cambios reales desde lo común, porque la lucha se hace en colectivo.'
        },
        {
          titulo: 'Articulación',
          descripcion: 'Nos vinculamos con otras colectivas, redes y movimientos para fortalecer nuestras voces y resistencias compartidas.'
        }
      ]
    },
    {
      id: 5,
      titulo: 'Prácticas éticas y políticas',
      subtemas: [
        {
          titulo: 'Democracia',
          descripcion: 'Construimos nuestros procesos de manera participativa, deliberativa y crítica, reconociendo los saberes y experiencias propias.'
        },
        {
          titulo: 'Sin fines lucrativos',
          descripcion: 'Nuestro accionar no busca enriquecimiento económico, sino transformación social. Los recursos que gestionamos son herramientas para la justicia, no fines en sí mismos.'
        }
      ]
    }
  ];

  return (
    <div className="w-full rounded-xl p-6 sm:p-8 ">
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-pink-400 mb-6 sm:mb-8 text-center uppercase tracking-wide">Nuestros principios</h3>
      
      {/* Lista de principios como rectángulos horizontales */}
      <div className="space-y-3 sm:space-y-4">
        {principios.map((principio) => (
          <div key={principio.id} className="w-full">
            {/* Botón del principio */}
        <button
              onClick={() => setSelectedPrincipio(selectedPrincipio === principio.id ? null : principio.id)}
              className={`w-full bg-pink-500 hover:bg-pink-600 rounded-lg p-4 sm:p-6 cursor-pointer transition-all duration-300 flex items-center justify-between ${
                selectedPrincipio === principio.id ? 'ring-2 ring-yellow-400' : ''
              }`}
            >
              <h4 className="text-white font-bold text-sm sm:text-base md:text-lg text-left">{principio.titulo}</h4>
              <div className="text-white text-xl sm:text-2xl">
                {selectedPrincipio === principio.id ? '−' : '+'}
              </div>
        </button>
            
            {/* Contenido expandible */}
            <AnimatePresence>
              {selectedPrincipio === principio.id && (
                <MotionDiv
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="bg-black/60 rounded-b-lg p-4 sm:p-6 mt-1 border-t border-pink-400/20">
                    <div className="space-y-4">
                      {principio.subtemas.map((subtema, index) => (
                        <div key={index} className="border-l-4 border-pink-400 pl-4">
                          <h5 className="font-bold text-pink-300 text-sm sm:text-base mb-2">{subtema.titulo}</h5>
                          <p className="text-white text-xs sm:text-sm leading-relaxed">{subtema.descripcion}</p>
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

// Sección Nuestro Equipo (estructura base)
function NuestroEquipo() {
  const equipo = [
    {
      id: 1,
      nombre: 'Nórida Andrade',
      imagen: '/nosotras/equipo/3.jpeg',
      descripcion: 'Comunicadora, periodista lesbiana y feminista. Especializada en contenido audiovisual y fotográfico para la incidencia política de género.'
    },
    {
      id: 2,
      nombre: 'Karen Flórez',
      imagen: '/nosotras/equipo/1.jpeg',
      descripcion: 'Psicóloga, feminista e investigadora con enfoque crítico y comunitario desde las epistemologías del sur.'
    },
    {
      id: 3,
      nombre: 'Andrea Gaspar',
      imagen: '/nosotras/equipo/5.jpg',
      descripcion: 'Politóloga y feminista Surcolombiana. Quien le apuesta a la construcción de una vida digna para las mujeres.'
    },
    {
      id: 4,
      nombre: 'Dayana Parra',
      imagen: '/nosotras/equipo/4.jpeg',
      descripcion: 'Psicóloga e Ilustradora feminista sentipensante con énfasis en investigación participativa y acompañamiento psicosocial.'
    },
    {
      id: 5,
      nombre: 'Yulieth Díaz',
      imagen: '/nosotras/equipo/2.jpeg',
      descripcion: 'Politóloga, educadora rural y feminista; fiel creyente de que la educación es el motor de transformación de los pueblos.'
    }
  ];

  return (
    <div className="relative flex flex-col items-center justify-center ">
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-pink-400 mb-1 sm:mb-2 text-center uppercase tracking-wide">Nuestro equipo</h3>
        <p className="text-white text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed px-2 sm:px-4">
          &ldquo;Somos hijas enraizadas del sur. Con una apuesta que configura redes e investigación. Nuestra labor parte del feminismo crítico y comunitario, orientado a la acción colectiva y a la transformación de estructuras que limitan la vida en libertad y dignidad.&rdquo;
        </p>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full max-w-6xl">
        {equipo.map((persona) => (
          <div key={persona.id} className="flex flex-col items-center group">
            {/* Contenedor de la carta */}
            <div className="relative w-24 h-28 sm:w-28 sm:h-32 md:w-32 md:h-36 lg:w-36 lg:h-40 xl:w-40 xl:h-44 2xl:w-44 2xl:h-48 mb-3 sm:mb-4 perspective-1000">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Frente de la carta - Imagen */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={persona.imagen}
                      alt={persona.nombre}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-xl sm:rounded-2xl"
                    />
          </div>
                </div>
                
                {/* Reverso de la carta - Descripción */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="w-full h-full bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 flex items-center justify-center shadow-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center p-1">
                      <p className="text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base font-medium text-center leading-tight overflow-hidden">
                        {persona.descripcion}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Nombre debajo de la carta */}
            <span className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-bold text-center uppercase leading-tight px-2 max-w-[160px] sm:max-w-[180px] md:max-w-[200px]">
              {persona.nombre.split(':').map((part, index) => (
                <span key={index}>
                  {index === 0 ? (
                    <span className="text-white-500 font-extrabold">{part}</span>
                  ) : (
                    <span className="text-white">{part}</span>
                  )}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProyectosSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState<number>(0);
  useEffect(() => {
    setActiveImage(0);
  }, [selectedProject]);
  
  // Devuelve las imágenes del proyecto incluyendo el logo como imagen descargable/visible
  const getProjectImages = (idx: number) => {
    const base = proyectos[idx]?.assets?.images || [];
    const extra = proyectos[idx]?.logoImg ? [proyectos[idx].logoImg as string] : [];
    return [...base, ...extra];
  };
  const getProjectVideos = (idx: number) => {
    return proyectos[idx]?.assets?.videos || [];
  }
  const getProjectMedia = (idx: number) => {
    const imgs = getProjectImages(idx).map(src => ({ type: 'image' as const, src }));
    const vids = getProjectVideos(idx).map(src => ({ type: 'video' as const, src }));
    return [...imgs, ...vids];
  }
  
  const proyectos = [
    {
      titulo: 'Rumbeando sin violencias',
      desc: 'Las VBG en contexto de rumba, son consideradas microviolencias que se desenvuelven en lugares de ocio y consumo. Las Juanas creó una propuesta de incidencia pública, autoprotección, identificación y prevención de las VBG en contextos de rumba para la construcción de espacios seguros.',
      img: '/proyectos/rsv.png',
      logoImg: '/proyectos/LOGO RUMBIANDO.png',
      descripcionCompleta: 'Las VBG en contexto de rumba, son consideradas microviolencias que se desenvuelven en lugares de ocio y consumo. Las Juanas creó una propuesta de incidencia pública, autoprotección, identificación y prevención de las VBG en contextos de rumba para la construcción de espacios seguros.',
      assets: {
        images: [
          '/proyectos/gráficas y elementos de RSV/0e6352cd-11d4-499a-88a9-4f0267a148b6.jpg',
          '/proyectos/gráficas y elementos de RSV/6eb95637-f974-476e-b4c8-37181212b8c2.jpg',
          '/proyectos/gráficas y elementos de RSV/90a7589b-a1c8-4bfb-96d9-11dbf6383285.jpg',
          '/proyectos/gráficas y elementos de RSV/formato 2.jpg',
          '/proyectos/gráficas y elementos de RSV/Poster_RSV.png'
        ],
        pdfs: [
          '/proyectos/gráficas y elementos de RSV/Ellas perrean, tu ofreces rumba segura (1).pdf',
          '/proyectos/gráficas y elementos de RSV/GUÍA DE PREVENCIÓN Y ACTUACIÓN DE VBG EN AMBIENTES DE RUMBA - RSV.pdf',
          '/proyectos/gráficas y elementos de RSV/Sin perreo no hay revolución (1).pdf'
        ]
      },
      redesSociales: {
        instagram: 'https://instagram.com/lasjuanasur',
        facebook: 'https://facebook.com/lasjuanasur',
        twitter: 'https://twitter.com/lasjuanasur'
      },
      estadisticas: [
        { label: 'Participantes', valor: '150+' },
        { label: 'Talleres realizados', valor: '25' },
        { label: 'Comunidades impactadas', valor: '8' }
      ]
    },
    {
      titulo: "Pa' la calle sin acoso",
      desc: 'Pa’ la Calle sin Acoso es una investigación realizada por Las Juanas Colectiva Feminista en 2024 en Neiva, que busca diagnosticar el acoso callejero hacia mujeres y disidencias sexuales en espacios públicos y semipúblicos.',
      img: '/proyectos/PROYECTO PA_ LA CALLE SIN ACOSO.jpg',
      logoImg: '/proyectos/LOGO PA LA CALLE.png',
      descripcionCompleta: 'Pa’ la Calle sin Acoso es una investigación realizada por Las Juanas Colectiva Feminista en 2024 en Neiva, que busca diagnosticar el acoso callejero hacia mujeres y disidencias sexuales en espacios públicos y semipúblicos.',
      assets: { images: [], pdfs: [], videos: [] },
      redesSociales: {
        instagram: 'https://instagram.com/lasjuanasur',
        facebook: 'https://facebook.com/lasjuanasur',
        twitter: 'https://twitter.com/lasjuanasur'
      },
      estadisticas: [
        { label: 'Casos documentados', valor: '200+' },
        { label: 'Zonas mapeadas', valor: '12' },
        { label: 'Denuncias procesadas', valor: '45' }
      ]
    },
    {
      titulo: 'Escuela femipolítica',
      desc: 'La escuela es una apuesta de formación con enfoque de género de la Colectiva Las Juanas. Pensada para brindar herramientas a mujeres y diversidad sexual en su participación en escenarios políticos y decisorios de la ciudad de Neiva.',
      img: '/proyectos/PROYECTO ESCUELA FEMIPOLÍTICA.jpg',
      logoImg: '/proyectos/LOGO ESCUELA FEMIPOLÍTICA.png',
      descripcionCompleta: 'La escuela es una apuesta de formación con enfoque de género de la Colectiva Las Juanas. Pensada para brindar herramientas a mujeres y diversidad sexual en su participación en escenarios políticos y decisorios de la ciudad de Neiva.',
      assets: {
        images: [],
        videos: [
          '/proyectos/gráficas y elementos de EFP/1.Escenarios de participación política.mp4',
          '/proyectos/gráficas y elementos de EFP/2. Audiovisual y fotografía móvil.mp4',
          '/proyectos/gráficas y elementos de EFP/3. Comunicación feminista.mp4',
          '/proyectos/gráficas y elementos de EFP/4. Escritura.mp4',
          '/proyectos/gráficas y elementos de EFP/5. Oralidad.mp4',
          '/proyectos/gráficas y elementos de EFP/6. Gestión de proyectos.mp4',
          '/proyectos/gráficas y elementos de EFP/Final EFP.mp4'
        ],
        pdfs: [
          '/proyectos/gráficas y elementos de EFP/Desde-la-U-edicion-66 ARTICULO LAS JUANAS.pdf'
        ]
      },
      redesSociales: {
        instagram: 'https://instagram.com/lasjuanasur',
        facebook: 'https://facebook.com/lasjuanasur',
        twitter: 'https://twitter.com/lasjuanasur'
      },
      estadisticas: [
        { label: 'Estudiantes', valor: '80+' },
        { label: 'Módulos completados', valor: '15' },
        { label: 'Graduadas', valor: '65' }
      ]
    },
  ];
  
  return (
    <div className="w-screen h-full flex flex-col gap-0 justify-stretch items-stretch px-0">
      {proyectos.map((p, i) => (
        <div 
          key={i} 
          className="relative w-screen flex-1 basis-1/3 overflow-hidden cursor-pointer group"
          onClick={() => setSelectedProject(i)}
        >
          <Image src={p.img} alt={p.titulo} fill style={{ objectFit: 'cover' }} className="absolute inset-0 w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-105" />
          {/* Overlay: oscurece y crea gradiente de izquierda a derecha */}
          <div className="absolute inset-0 bg-black/50 transition-opacity duration-500 ease-out group-hover:opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent transition-opacity duration-500 ease-out group-hover:from-black/70 group-hover:via-black/40" />

          {/* Contenido */}
          <div className="relative z-10 w-full h-full flex items-stretch">
            {/* Texto a la izquierda */}
            <div className="flex-1 flex flex-col justify-center px-3 sm:px-6 transform transition-transform duration-500 ease-out group-hover:translate-x-1">
              <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow mb-1 sm:mb-2">{p.titulo}</h4>
              <p className="text-white/90 text-[11px] sm:text-sm md:text-base leading-snug line-clamp-2 max-w-[60ch]">{p.desc}</p>
            </div>

            {/* Logo a la derecha */}
            <div className="hidden sm:flex items-center justify-center w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/5 pr-3 sm:pr-6">
              {p.logoImg ? (
                <div className="relative w-28 h-10 sm:w-36 sm:h-12 md:w-44 md:h-14 lg:w-48 lg:h-16 xl:w-56 xl:h-70 transform transition-transform duration-500 ease-out group-hover:translate-y-[-2px] group-hover:scale-105">
                  <Image src={p.logoImg} alt={`${p.titulo} logo`} fill style={{ objectFit: 'contain' }} />
              </div>
              ) : null}
            </div>
          </div>
        </div>
      ))}
      
      {/* Popup Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-black/30 backdrop-blur-md border border-pink-400/30 rounded-xl sm:rounded-2xl w-full max-w-xs sm:max-w-2xl md:max-w-5xl lg:max-w-7xl max-h-[90vh] sm:max-h-[80vh] overflow-y-auto relative">
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
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-pink-400">{proyectos[selectedProject].titulo}</h2>
                    <p className="text-white/90 text-sm sm:text-base md:text-lg mt-1">{proyectos[selectedProject].descripcionCompleta}</p>
                  </div>
                  </div>
                  
                {/* Contenido: Carrusel a la izquierda y Documentos a la derecha */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  <div className="lg:col-span-8 space-y-6">
                    {getProjectMedia(selectedProject).length ? (
                      <>
                        <h3 className="text-white/90 font-bold">Galería</h3>
                        <div className="relative w-full h-[56vh] sm:h-[58vh] md:h-[60vh] lg:h-[62vh] bg-black rounded-lg overflow-hidden ring-1 ring-white/10">
                          <MotionDiv key={activeImage} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3}} className="absolute inset-0 flex items-center justify-center">
                            {getProjectMedia(selectedProject)[activeImage].type === 'image' ? (
                              <Image src={getProjectMedia(selectedProject)[activeImage].src} alt={`Media ${activeImage+1}`} fill style={{objectFit:'contain'}} />
                            ) : (
                              <video controls className="w-full h-full" style={{objectFit:'contain'}}>
                                <source src={getProjectMedia(selectedProject)[activeImage].src} type="video/mp4" />
                              </video>
                            )}
                          </MotionDiv>
                          <button onClick={() => setActiveImage((prev)=> (prev-1+getProjectMedia(selectedProject).length)%getProjectMedia(selectedProject).length)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-9 h-9 flex items-center justify-center">‹</button>
                          <button onClick={() => setActiveImage((prev)=> (prev+1)%getProjectMedia(selectedProject).length)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-9 h-9 flex items-center justify-center">›</button>
                          {/* Botón Descargar media actual */}
                          <a href={getProjectMedia(selectedProject)[activeImage].src} download aria-label="Descargar" className="absolute right-2 top-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full p-2 shadow flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 3v12m0 0l4-4m-4 4l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M5 21h14a2 2 0 0 0 2-2v-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </a>
                        </div>
                        <div className="flex gap-2 overflow-x-auto pb-1">
                          {getProjectMedia(selectedProject).map((m, idx) => (
                            <button key={idx} onClick={()=>setActiveImage(idx)} className={`relative flex-none w-24 h-16 rounded-md overflow-hidden ring-2 ${activeImage===idx? 'ring-pink-400' : 'ring-white/10'}`}>
                              {m.type === 'image' ? (
                                <Image src={m.src} alt={`Miniatura ${idx+1}`} fill style={{objectFit:'cover'}} />
                              ) : (
                                <video muted playsInline className="w-full h-full" style={{objectFit:'cover'}}>
                                  <source src={m.src} type="video/mp4" />
                                </video>
                              )}
                              {m.type === 'video' && (
                                <span className="absolute bottom-1 right-1 bg-black/60 text-white text-[10px] px-1 rounded">Video</span>
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
                        <h3 className="text-white font-bold mb-3">Documentos</h3>
                        <div className="flex flex-col gap-2">
                          {proyectos[selectedProject].assets.pdfs.map((pdf, idx) => (
                            <div key={idx} className="flex items-center justify-between gap-3 bg-black/30 rounded-lg p-3 ring-1 ring-white/10">
                              <div className="flex items-center gap-3 min-w-0">
                                <Image src="/file.svg" alt="pdf" width={24} height={24} />
                                <span className="text-white text-sm truncate">{pdf.split('/').pop()}</span>
                  </div>
                              <div className="flex gap-2 flex-shrink-0">
                                <a href={pdf} target="_blank" rel="noopener noreferrer" className="bg-pink-500 hover:bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded">Ver</a>
                                <a href={pdf} download className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-2 py-1 rounded">Descargar</a>
                </div>
                    </div>
                          ))}
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
          <div className="relative w-full max-w-2xl h-28 sm:h-32 md:h-36 lg:h-40 rounded-xl overflow-hidden ring-1 ring-white/10 bg-black">
            <Image src="/denuncia/CABEZOTE DENUNCIA.png" alt="Denuncia el acoso callejero" fill style={{objectFit:'contain'}} />
          </div>
          
          {/* Descripción */}
          <div className="bg-black/40 rounded-xl p-4 sm:p-6 ring-1 ring-white/10">
            <p className="text-white text-sm sm:text-base leading-relaxed">
              Este formulario hace parte del Observatorio de Acoso Callejero Huila, un proyecto de investigación e incidencia política que busca rastrear las experiencias de acoso callejero que viven las mujeres a diario en el departamento. Al responder, nos ayudas a reunir datos de gran importancia que servirán para seguir exigir acciones de justicia y seguridad, construir entornos más seguros y defender nuestro derecho a transitar por el espacio público libres de violencias y sin miedo.
              <br/><br/>
              Debes completar el formulario por cada hecho de acoso que desees denunciar. Denuncia las veces que desees.
              <br/><br/>
              <span className="text-pink-300 font-bold">¡Recuerda!</span> Tu testimonio es anónimo 💜
              <br/>
              <span className="text-pink-300 font-bold">Cuéntanos, para que nadie más tenga que callar 🗣️</span>
            </p>
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScy2So9nnWxB0xj0J9HruU6uTqY4SFJFDYeqvlI56SEtrUr4g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-pink-500 hover:bg-pink-600 text-white font-extrabold px-6 py-3 rounded-lg uppercase tracking-wider shadow-lg transition-transform transform hover:scale-105"
            >
              Denunciar ahora
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
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
      titulo: 'Taller de Autodefensa Digital',
      descripcion: 'Aprende a proteger tu privacidad y seguridad en línea con herramientas feministas. Cupos limitados.',
      fecha: '2024-08-10',
      fuente: 'Las Juanas',
      img: '/1.jpg',
      descripcionCompleta: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      imagenes: ['/1.jpg', '/2.jpg'],
      enlaces: [
        { label: 'Ver en Instagram', url: 'https://instagram.com/lasjuanasur' },
        { label: 'Descargar afiche', url: '#' }
      ]
    },
    {
      titulo: 'Cine Foro: Mujeres y Territorio',
      descripcion: 'Proyección de documental y conversatorio sobre luchas territoriales de mujeres en el sur.',
      fecha: '2024-09-02',
      fuente: 'Red Feminista',
      img: '/2.jpg',
      descripcionCompleta: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod nisi.`,
      imagenes: ['/2.jpg', '/3.jpg'],
      enlaces: [
        { label: 'Evento en Facebook', url: 'https://facebook.com/lasjuanasur' }
      ]
    },
    {
      titulo: 'Festival de Arte Feminista',
      descripcion: 'Exposición colectiva, música y talleres para celebrar la creatividad y resistencia feminista.',
      fecha: '2024-10-15',
      fuente: 'Colectiva Sur',
      img: '/3.jpg',
      descripcionCompleta: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod nisi.`,
      imagenes: ['/3.jpg', '/4.jpg'],
      enlaces: [
        { label: 'Más info', url: '#' }
      ]
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 py-4 sm:py-6 md:py-8 gap-4 sm:gap-6 md:gap-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-pink-400 mb-3 sm:mb-4 md:mb-6 text-center uppercase tracking-wider">Eventos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-6xl">
        {eventos.map((evento, i) => (
          <div
            key={i}
            className="bg-white/10 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden flex flex-col cursor-pointer border-2 border-pink-400 hover:scale-105 transition-transform"
            onClick={() => setSelectedEvento(i)}
          >
            <div className="relative w-full h-32 sm:h-40 md:h-48">
              <Image src={evento.img} alt={evento.titulo} fill style={{objectFit:'cover'}} className="w-full h-full object-cover" />
            </div>
            <div className="p-3 sm:p-4 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-pink-400 text-white px-2 py-1 rounded-full font-bold uppercase">{evento.fuente}</span>
                <span className="text-xs text-white/70 ml-auto">{new Date(evento.fecha).toLocaleDateString()}</span>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-1 line-clamp-2">{evento.titulo}</h3>
              <p className="text-white/80 text-xs sm:text-sm line-clamp-3 mb-2">{evento.descripcion}</p>
              <div className="mt-auto flex gap-2">
                <span className="text-pink-300 text-xs font-bold">Leer más</span>
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
            >✕</button>
            <div className="p-3 sm:p-4 md:p-6 lg:p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-pink-400 mb-2">{eventos[selectedEvento].titulo}</h2>
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                <div className="flex-1 space-y-3 sm:space-y-4">
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-2 leading-relaxed">{eventos[selectedEvento].descripcionCompleta}</p>
                  <div className="flex gap-2 flex-wrap">
                    {eventos[selectedEvento].enlaces.map((enlace, idx) => (
                      <a key={idx} href={enlace.url} target="_blank" rel="noopener noreferrer" className="bg-pink-400 hover:bg-pink-500 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-bold transition-colors">
                        {enlace.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex-1 space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    {eventos[selectedEvento].imagenes.map((img, idx) => (
                      <div key={idx} className="relative h-20 sm:h-24 md:h-28 rounded-md sm:rounded-lg overflow-hidden">
                        <Image src={img} alt={`Imagen evento ${idx+1}`} fill style={{objectFit:'cover'}} className="rounded-md sm:rounded-lg" />
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 mt-2">{new Date(eventos[selectedEvento].fecha).toLocaleDateString()} | {eventos[selectedEvento].fuente}</div>
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
      titulo: 'FOTOGRAFÍAS',
      img: '/1.jpg',
    },
    {
      titulo: 'GRÁFICOS',
      img: '/2.jpg',
    },
    {
      titulo: 'BOLETINES',
      img: '/3.jpg',
    },
  ];
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 py-4 sm:py-6 md:py-8">
      <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 sm:gap-6 md:gap-8 w-full max-w-5xl">
        {recursos.map((r, i) => (
          <div key={i} className="flex-1 flex flex-col items-center">
            <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-2 sm:border-3 md:border-4 border-black bg-black">
              <Image src={r.img} alt={r.titulo} fill style={{objectFit:'cover', filter: i===0 ? 'grayscale(1) contrast(1.2)' : undefined}} className="w-full h-full object-cover" />
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
