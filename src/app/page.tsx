'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return ( 
    <div className="relative min-h-screen bg-gradient-to-br from-black via-fuchsia-900 to-purple-900 overflow-hidden">
      {/* Header principal: Título y menú */}
      <header className="flex flex-col items-center w-full pt-10 pb-6 z-20 relative">
        <div className="text-[2.8rem] md:text-[5rem] font-bold tracking-widest text-pink-400 select-none drop-shadow-lg font-espa text-center leading-none mb-2" style={{letterSpacing: '0.18em'}}>
          LAS JUANAS
        </div>
        <nav className="mt-2 w-full flex justify-center">
          <div className="hidden md:flex gap-0 items-center text-white font-extrabold text-base md:text-lg">
            <a href="#home" className="px-4 py-1 hover:text-pink-400 transition border-r-4 border-pink-400 first:border-l-4 first:rounded-l last:rounded-r last:border-r-0 border-solid">Nosotras</a>
            <a href="#about" className="px-4 py-1 hover:text-pink-400 transition border-r-4 border-pink-400 last:border-r-0 border-solid">Proyectos</a>
            <a href="#price" className="px-4 py-1 hover:text-pink-400 transition border-r-4 border-pink-400 last:border-r-0 border-solid">Mapa</a>
            <a href="#login" className="px-4 py-1 hover:text-pink-400 transition border-r-4 border-pink-400 last:border-r-0 border-solid">Denuncia</a>
            <a href="#login" className="px-4 py-1 hover:text-pink-400 transition border-r-4 border-pink-400 last:border-r-0 border-solid">Eventos</a>
            <a href="#about2" className="px-4 py-1 hover:text-pink-400 transition border-solid">Recursos</a>
          </div>
          {/* Botón menú móvil */}
          <button className="md:hidden flex flex-col gap-1 z-30 ml-4" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
            <span className="w-8 h-1 bg-yellow-400 rounded"></span>
            <span className="w-8 h-1 bg-yellow-400 rounded"></span>
            <span className="w-8 h-1 bg-yellow-400 rounded"></span>
          </button>
        </nav>
        {/* Menú móvil */}
        {menuOpen && (
          <div className="absolute top-[7.5rem] left-1/2 -translate-x-1/2 bg-black/90 rounded-lg shadow-lg flex flex-col gap-4 p-6 text-white font-extrabold text-lg md:hidden animate-fade-in z-20">
            <a href="#home" onClick={()=>setMenuOpen(false)} className="hover:text-pink-400 transition">Nosotras</a>
            <a href="#about" onClick={()=>setMenuOpen(false)} className="hover:text-pink-400 transition">Proyectos</a>
            <a href="#price" onClick={()=>setMenuOpen(false)} className="hover:text-pink-400 transition">Mapa</a>
            <a href="#login" onClick={()=>setMenuOpen(false)} className="hover:text-pink-400 transition">Denuncia</a>
            <a href="#login" onClick={()=>setMenuOpen(false)} className="hover:text-pink-400 transition">Eventos</a>
            <a href="#about2" onClick={()=>setMenuOpen(false)} className="hover:text-pink-400 transition">Recursos</a>
          </div>
        )}
      </header>

      {/* Contenido principal: imagen y texto */}
      <main className="flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-8 md:py-16 gap-10 md:gap-20 w-full max-w-[1400px] mx-auto">
        {/* Imagen grande, proporcionada */}
        <div className="w-full md:w-[45%] flex justify-center items-center mb-8 md:mb-0">
          <div className="relative w-[320px] h-[420px] md:w-[100%] md:h-[520px] max-w-[500px] max-h-[600px]">
            <Image src="/mujerjuans.png" alt="Ilustración" fill style={{objectFit:'contain'}} priority />
          </div>
        </div>
        {/* Texto principal a la derecha */}
        <div className="w-full md:w-[45%] flex flex-col items-center text-center justify-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg leading-tight mb-4">
            Las Juanas <br />
            <span className="text-pink-400">colectiva feminista</span>
          </h1>
          <p className="mt-2 md:mt-6 text-base md:text-xl text-white/80 max-w-md mx-auto mb-8">
            Investigamos, visibilizamos y hacemos incidencia política frente a violencias basadas en género.
          </p>
          {/* Ícono de fuego provisional */}
          <div className="mt-2 md:mt-8 flex items-center justify-center">
            <span className="text-4xl md:text-5xl animate-bounce">🔥</span>
          </div>
        </div>
      </main>
    </div>
  );
}
