'use client'
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [section, setSection] = useState<'inicio' | 'nosotras' | 'proyectos' | 'mapa' | 'denuncia' | 'eventos' | 'recursos'>("inicio");
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const scrollAccumulator = useRef(0); // Contador de scroll acumulado

  // Scroll handler para cambiar de sección
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollTimeout.current) return; // Evita scroll rápido
      
      // Acumular el scroll
      scrollAccumulator.current += e.deltaY;
      
      // Umbral para cambiar sección (ajustable)
      const threshold = 220;
      
      if (Math.abs(scrollAccumulator.current) >= threshold) {
        if (scrollAccumulator.current > 0) {
          // Scroll hacia abajo acumulado
          if (section === "inicio") {
            setSection("nosotras");
          } else if (section === "nosotras") {
            setSection("proyectos");
          } else if (section === "proyectos") {
            setSection("mapa");
          } else if (section === "mapa") {
            setSection("denuncia");
          } else if (section === "denuncia") {
            setSection("eventos");
          } else if (section === "eventos") {
            setSection("recursos");
          }
        } else {
          // Scroll hacia arriba acumulado
          if (section === "recursos") {
            setSection("eventos");
          } else if (section === "eventos") {
            setSection("denuncia");
          } else if (section === "denuncia") {
            setSection("mapa");
          } else if (section === "mapa") {
            setSection("proyectos");
          } else if (section === "proyectos") {
            setSection("nosotras");
          } else if (section === "nosotras") {
            setSection("inicio");
          }
        }
        
        // Resetear el acumulador
        scrollAccumulator.current = 0;
        
        // Bloquear scroll por un tiempo más largo para evitar saltos
        scrollTimeout.current = setTimeout(() => {
          scrollTimeout.current = null;
        }, 900);
      }
    };
    
    window.addEventListener("wheel", handleWheel, { passive: true });
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
             onClick={()=>setSection('inicio')} 
             className={`px-10 py-2 hover:text-pink-400 transition border-r-4 border-pink-400  first:rounded-l last:rounded-r last:border-r-0 border-solid${section==='inicio'?' text-pink-400':''}`}>
              <span className={`${section==='inicio' ? 'animate-bounce-slow' : ''}`}>INICIO</span>
            </a>
            <a href="#nosotras"
              onClick={()=>setSection('nosotras')} className={`px-10 py-2 hover:text-pink-400 transition border-r-4 border-pink-400 last:border-r-0 border-solid${section==='nosotras'?' text-pink-400':''}`}>
              <span className={`${section==='nosotras' ? 'animate-bounce-slow' : ''}`}>NOSOTRAS</span>
            </a>
            <a href="#proyectos" onClick={()=>setSection('proyectos')} className={`px-10 py-2 hover:text-pink-400 transition border-r-4 border-pink-400 last:border-r-0 border-solid${section==='proyectos'?' text-pink-400':''}`}>
              <span className={`${section==='proyectos' ? 'animate-bounce-slow' : ''}`}>PROYECTOS</span>
            </a>
            <a href="#mapa" onClick={()=>setSection('mapa')} className={`px-10 py-2 hover:text-pink-400 transition border-r-4 border-pink-400 last:border-r-0 border-solid${section==='mapa'?' text-pink-400':''}`}>
              <span className={`${section==='mapa' ? 'animate-bounce-slow' : ''}`}>MAPA</span>
            </a>
            <a href="#denuncia" onClick={()=>setSection('denuncia')} className={`px-10 py-2 hover:text-pink-400 transition border-r-4 border-pink-400 last:border-r-0 border-solid${section==='denuncia'?' text-pink-400':''}`}>
              <span className={`${section==='denuncia' ? 'animate-bounce-slow' : ''}`}>DENUNCIA</span>
            </a>
            <a href="#eventos" onClick={()=>setSection('eventos')} className={`px-10 py-2 hover:text-pink-400 transition border-r-4 border-pink-400 last:border-r-0 border-solid${section==='eventos'?' text-pink-400':''}`}>
              <span className={`${section==='eventos' ? 'animate-bounce-slow' : ''}`}>EVENTOS</span>
            </a>
            <a href="#recursos" onClick={()=>setSection('recursos')} className={`px-10 py-2 hover:text-pink-400 transition border-solid${section==='recursos'?' text-pink-400':''}`}>
              <span className={`${section==='recursos' ? 'animate-bounce-slow' : ''}`}>RECURSOS</span>
            </a>
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
            <a href="#proyectos" onClick={()=>setMenuOpen(false)} className="hover:text-pink-400 transition">Proyectos</a>
            <a href="#mapa" onClick={()=>{setMenuOpen(false);setSection('mapa')}} className="hover:text-pink-400 transition">Mapa</a>
            <a href="#denuncia" onClick={()=>{setMenuOpen(false);setSection('denuncia')}} className="hover:text-pink-400 transition">Denuncia</a>
            <a href="#eventos" onClick={()=>{setMenuOpen(false);setSection('eventos')}} className="hover:text-pink-400 transition">Eventos</a>
            <a href="#recursos" onClick={()=>{setMenuOpen(false);setSection('recursos')}} className="hover:text-pink-400 transition">Recursos</a>
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
              className="w-full h-full top-0 left-0 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-6 relative"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
            >
              <NosotrasContent />
            </motion.div>
          )}
          {section === 'proyectos' && (
            <motion.div
              key="proyectos"
              className="w-full h-full flex flex-col items-center justify-center gap-6 md:gap-8 mb-6 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ProyectosSection />
            </motion.div>
          )}
          {section === 'mapa' && (
            <motion.div
              key="mapa"
              className="w-full h-full flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center">
                <h2 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white/60 uppercase tracking-wider">
                  Pendiente
                </h2>
              </div>
            </motion.div>
          )}
          {section === 'denuncia' && (
            <motion.div
              key="denuncia"
              className="w-full h-full flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center">
                <h2 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white/60 uppercase tracking-wider">
                  Pendiente
                </h2>
              </div>
            </motion.div>
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
  );
}

function NosotrasSlider() {
  const images = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];
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
    <div className="relative w-full md:w-1/2 h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden rounded-2xl">
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={images[prevIndex] + '-out'}
          className="absolute w-full h-full flex items-center justify-center rounded-2xl"
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: '-100%', opacity: 1 }}
          exit={{ x: '-100%', opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <Image src={images[prevIndex]} alt={`Nosotras ${prevIndex+1}`} fill style={{objectFit:'cover'}} className="rounded-2xl" />
        </motion.div>
        <motion.div
          key={images[index] + '-in'}
          className="absolute w-full h-full flex items-center justify-center rounded-2xl"
          initial={{ x: '100%', opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <Image src={images[index]} alt={`Nosotras ${index+1}`} fill style={{objectFit:'cover'}} className="rounded-2xl" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function NosotrasContent() {
  const [showEquipo, setShowEquipo] = useState(false);
  return (
    <div className="w-full h-full flex flex-col items-center justify-between relative">
      <AnimatePresence mode="wait">
        {!showEquipo && (
          <motion.div
            key="desc-nosotras"
            className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Columna izquierda: imagen visible con opacidad, texto centrado */}
            <div className="relative w-full md:w-1/2 h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden rounded-2xl">
              <Image
                src="/6.jpg"
                alt="Fondo nosotras"
                fill
                style={{ objectFit: 'cover', opacity: 0.5 }}
                className="rounded-2xl"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-full px-4 py-6 z-10">
                <p className="font-bold text-lg md:text-xl mb-4 text-white drop-shadow-lg text-center">
                  <span className=" text-pink-400">Somos Las Juanas,</span> una colectiva feminista de Neiva que nace desde la rabia, la memoria y el amor por nuestras hermanas. Nos organizamos para resistir, cuestionar y transformar las violencias estructurales que atraviesan nuestros cuerpos y territorios. Creemos en la palabra como herramienta política, en la sororidad como tejido de cuidado, y en la acción como camino hacia la justicia. Visibilizamos lo que históricamente ha sido silenciado: las voces, historias y luchas de las mujeres y disidencias. A través de la investigación, la pedagogía popular, el arte y la movilización social, buscamos construir una ciudad más justa, segura y equitativa para todas. Porque nuestras vidas importan, porque no estamos solas, porque el feminismo también florece en el sur.
                </p>
                <a
                  href="https://instagram.com/lasjuanasur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-pink-200 hover:text-pink-400 underline transition drop-shadow-lg text-center"
                >
                  @LASJUANASUR
                </a>
              </div>
            </div>
            {/* Columna derecha: slider de imágenes */}
            <NosotrasSlider />
          </motion.div>
        )}
        {showEquipo && (
          <motion.div
            key="equipo-nosotras"
            className="w-full h-full flex flex-col items-center justify-center gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <NuestroEquipo />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Botón de transición: chevron SVG blanco con cursor-pointer y animación */}
      {!showEquipo ? (
        <button
          onClick={() => setShowEquipo(true)}
          className="absolute left-1/2 -translate-x-1/2 bottom-4 z-20 bg-transparent border-none outline-none cursor-pointer"
          aria-label="Ver nuestro equipo"
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce-slow">
            <polyline points="12,18 24,30 36,18" />
          </svg>
        </button>
      ) : (
        <button
          onClick={() => setShowEquipo(false)}
          className="absolute left-1/2 -translate-x-1/2 top-4 z-20 bg-transparent border-none outline-none cursor-pointer"
          aria-label="Volver a descripción"
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce-slow">
            <polyline points="12,30 24,18 36,30" />
          </svg>
        </button>
      )}
    </div>
  );
}

// Sección Nuestro Equipo (estructura base)
function NuestroEquipo() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center pt-4 pb-4 px-2 md:px-8">
      <h3 className="text-2xl md:text-3xl font-extrabold text-pink-400 mb-2 text-center uppercase tracking-wide">Nuestro equipo</h3>
      <p className="text-white text-center max-w-2xl mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 w-full max-w-4xl">
        {[1,2,3,4].map((i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-24 h-28 md:w-32 md:h-36 bg-pink-700 rounded-2xl mb-2"></div>
            <span className="text-xs md:text-sm text-white font-bold text-center uppercase">{i === 1 ? 'Comunicadora Social' : i === 2 ? 'Psicóloga Diseñadora Creativa' : i === 3 ? 'Docente Politóloga Investigadora' : 'Psicóloga Investigadora'}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProyectosSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const proyectos = [
    {
      titulo: 'Rumbeando sin violencias',
      desc: 'Proyecto de investigación sobre el acoso callejero en la ciudad de Neiva entre andanzas de las kaskaras organizando un colectivo de acción y talleres durante dos años del 8 al 9 de dsd.',
      img: '/1.jpg',
      logo: <span className="text-2xl md:text-3xl font-extrabold text-white italic">Rumbeando<br/>sin Violencias</span>,
      descripcionCompleta: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      imagenes: ['/1.jpg', '/2.jpg', '/3.jpg'],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
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
      desc: 'Proyecto de investigación sobre el acoso callejero en la ciudad de Neiva entre andanzas de las kaskaras organizando un colectivo de acción y talleres durante dos años del 8 al 9 de dsd.',
      img: '/1.jpg',
      logo: <span className="text-2xl md:text-3xl font-extrabold text-pink-300 italic">Pa' la calle<br/>sin acoso</span>,
      descripcionCompleta: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      imagenes: ['/4.jpg', '/5.jpg', '/6.jpg'],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
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
      desc: 'Proyecto de investigación sobre el acoso callejero en la ciudad de Neiva entre andanzas de las kaskaras organizando un colectivo de acción y talleres durante dos años del 8 al 9 de dsd.',
      img: '/1.jpg',
      logo: <span className="text-2xl md:text-3xl font-extrabold text-pink-400 italic">Escuela<br/>femiPOLÍTICA</span>,
      descripcionCompleta: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      imagenes: ['/1.jpg', '/2.jpg', '/3.jpg'],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
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
    <div className="w-full h-full flex flex-col gap-6 md:gap-8 justify-center items-center px-2 md:px-8">
      {proyectos.map((p, i) => (
        <div 
          key={i} 
          className="relative w-full max-w-5xl h-[180px] md:h-[200px] flex flex-col md:flex-row items-stretch rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-105"
          onClick={() => setSelectedProject(i)}
        >
          <Image src={p.img} alt={p.titulo} fill style={{objectFit:'cover', opacity:0.7}} className="absolute inset-0 w-full h-full" />
          <div className="relative z-10 flex flex-col md:flex-row w-full h-full">
            <div className="flex-1 flex flex-col justify-center px-6 py-4">
              <h4 className="text-xl md:text-2xl font-extrabold text-white mb-2">{p.titulo}</h4>
              <p className="text-white text-sm md:text-base max-w-xl">{p.desc}</p>
            </div>
            <div className="flex items-center justify-center md:w-1/3 px-4 py-2 md:py-0">
              {p.logo}
            </div>
          </div>
        </div>
      ))}
      
      {/* Popup Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-6xl max-h-[90vh] overflow-y-auto relative">
            {/* Botón cerrar */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
            >
              ✕
            </button>
            
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Columna izquierda - Información */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
                      {proyectos[selectedProject].titulo}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {proyectos[selectedProject].descripcionCompleta}
                    </p>
                  </div>
                  
                  {/* Estadísticas */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Estadísticas del Proyecto</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {proyectos[selectedProject].estadisticas.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl font-bold text-pink-500">{stat.valor}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Redes sociales */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Síguenos</h3>
                    <div className="flex gap-4">
                      <a href={proyectos[selectedProject].redesSociales.instagram} target="_blank" rel="noopener noreferrer" className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-colors">
                        Instagram
                      </a>
                      <a href={proyectos[selectedProject].redesSociales.facebook} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                        Facebook
                      </a>
                      <a href={proyectos[selectedProject].redesSociales.twitter} target="_blank" rel="noopener noreferrer" className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors">
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Columna derecha - Multimedia */}
                <div className="space-y-6">
                  {/* Video */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Video del Proyecto</h3>
                    <div className="relative w-full h-64 rounded-xl overflow-hidden">
                      <iframe
                        src={proyectos[selectedProject].videoUrl}
                        title="Video del proyecto"
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  
                  {/* Galería de imágenes */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Galería de Imágenes</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {proyectos[selectedProject].imagenes.map((img, index) => (
                        <div key={index} className="relative h-32 rounded-lg overflow-hidden">
                          <Image
                            src={img}
                            alt={`Imagen ${index + 1}`}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="rounded-lg"
                          />
                        </div>
                      ))}
                    </div>
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
    <div className="w-full h-full flex flex-col items-center justify-center px-2 md:px-8 py-8 gap-8">
      <h2 className="text-3xl md:text-5xl font-extrabold text-pink-400 mb-6 text-center uppercase tracking-wider">Eventos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {eventos.map((evento, i) => (
          <div
            key={i}
            className="bg-white/10 rounded-2xl shadow-lg overflow-hidden flex flex-col cursor-pointer border-2 border-pink-400 hover:scale-105 transition-transform"
            onClick={() => setSelectedEvento(i)}
          >
            <div className="relative w-full h-48">
              <Image src={evento.img} alt={evento.titulo} fill style={{objectFit:'cover'}} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-pink-400 text-white px-2 py-1 rounded-full font-bold uppercase">{evento.fuente}</span>
                <span className="text-xs text-white/70 ml-auto">{new Date(evento.fecha).toLocaleDateString()}</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-1 line-clamp-2">{evento.titulo}</h3>
              <p className="text-white/80 text-sm line-clamp-3 mb-2">{evento.descripcion}</p>
              <div className="mt-auto flex gap-2">
                <span className="text-pink-300 text-xs font-bold">Leer más</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Popup Modal */}
      {selectedEvento !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedEvento(null)}
              className="absolute top-4 right-4 z-10 bg-pink-400 hover:bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors text-2xl"
            >✕</button>
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-pink-400 mb-2">{eventos[selectedEvento].titulo}</h2>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-4">
                  <p className="text-gray-700 text-lg mb-2">{eventos[selectedEvento].descripcionCompleta}</p>
                  <div className="flex gap-2 flex-wrap">
                    {eventos[selectedEvento].enlaces.map((enlace, idx) => (
                      <a key={idx} href={enlace.url} target="_blank" rel="noopener noreferrer" className="bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                        {enlace.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    {eventos[selectedEvento].imagenes.map((img, idx) => (
                      <div key={idx} className="relative h-28 rounded-lg overflow-hidden">
                        <Image src={img} alt={`Imagen evento ${idx+1}`} fill style={{objectFit:'cover'}} className="rounded-lg" />
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
    <div className="w-full h-full flex flex-col items-center justify-center px-2 md:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 w-full max-w-5xl">
        {recursos.map((r, i) => (
          <div key={i} className="flex-1 flex flex-col items-center">
            <div className="relative w-full h-80 md:h-[28rem] rounded-3xl overflow-hidden shadow-lg border-4 border-black bg-black">
              <Image src={r.img} alt={r.titulo} fill style={{objectFit:'cover', filter: i===0 ? 'grayscale(1) contrast(1.2)' : undefined}} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="bg-yellow-300 text-black font-extrabold px-6 py-2 rounded-full text-lg shadow-lg uppercase tracking-wide">
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
