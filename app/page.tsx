'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion"; // Agrega AnimatePresence
import QRCode from "react-qr-code";
import { FaTiktok, FaWhatsapp, FaInstagram, FaTimes, FaBirthdayCake, FaBabyCarriage, FaBars } from "react-icons/fa"; // Agrega FaTimes para la "X" de cerrar

// 2. Asigna el tipo Variants a tus objetos
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" // Ahora TS reconocerá esto correctamente
    } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: { 
    transition: { 
      staggerChildren: 0.3 
    } 
  }
};

export default function Home() {
  // ESTADO PARA EL MODAL
  const [selectedId, setSelectedId] = useState<string | null>(null);
// NUEVO: Estado para el menú móvil
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // LISTA DE IMÁGENES (Para no repetir código)
  const items = [
    { id: '1', src: '/images/1.webp', alt: 'Decoración de cumpleaños temática 1' },
    { id: '2', src: '/images/2.webp', alt: 'Decoración de cumpleaños temática 2' },
    { id: '3', src: '/images/3.webp', alt: 'Decoración de cumpleaños temática 3' },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-700 overflow-hidden">
      
      {/* 1. NAVBAR (Más elegante con borde dorado sutil) */}
{/* 1. NAVBAR */}
{/* 1. NAVBAR (Responsive con Menú Móvil) */}
      <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-pink-100">
        <div className="flex justify-between items-center p-6">
          {/* LOGO */}
          <motion.h1 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="text-2xl font-bold text-pink-600 tracking-wide cursor-pointer"
          >
            <Link href="/">Sisters Events</Link>
          </motion.h1>

          {/* MENÚ DE ESCRITORIO (Se oculta en móvil) */}
          <ul className="hidden md:flex gap-8 font-medium text-sm uppercase tracking-wider text-gray-500 items-center">
            <li><Link href="#galeria" className="hover:text-pink-500 transition-colors">Galería</Link></li>
            <li><Link href="#contacto" className="hover:text-pink-500 transition-colors">Contacto</Link></li>
            <li>
              <Link 
                href="/trabaja-con-nosotros" 
                className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full hover:bg-pink-600 hover:text-white transition-all border border-pink-200"
              >
                Únete al Equipo
              </Link>
            </li>
          </ul>

          {/* BOTÓN HAMBURGUESA (Solo visible en móvil) */}
          <button 
            className="md:hidden text-gray-600 hover:text-pink-600 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* MENÚ MÓVIL DESPLEGABLE */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <ul className="flex flex-col p-6 gap-6 font-medium text-center text-gray-600">
                <motion.li whileTap={{ scale: 0.95 }}>
                  <Link 
                    href="#galeria" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg hover:text-pink-600"
                  >
                    Galería
                  </Link>
                </motion.li>
                <motion.li whileTap={{ scale: 0.95 }}>
                  <Link 
                    href="#contacto" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg hover:text-pink-600"
                  >
                    Contacto
                  </Link>
                </motion.li>
                <motion.li whileTap={{ scale: 0.95 }}>
                  <Link 
                    href="/trabaja-con-nosotros" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-block bg-pink-600 text-white px-6 py-3 rounded-full shadow-md w-full"
                  >
                    Únete al Equipo
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. HERO SECTION (Con Banner/Logo y Animaciones) */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-pink-50 to-white overflow-hidden">
        {/* Elementos decorativos de fondo (Círculos borrosos) */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
          {/* Texto del Hero */}
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp} //error en variants
          >
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-800 leading-tight">
              Creamos <span className="text-pink-600">Momentos</span> Inolvidables
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              Especialistas en decoraciones exclusivas y elegantes para cumpleaños en Lima. Tu visión, nuestra pasión.
            </p>
            <motion.a 
              href="https://wa.me/51935744138" 
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-pink-500/30 transition-all"
            >
              ¡Cotiza tu Fiesta Aquí!
            </motion.a>
          </motion.div>

          {/* Imagen del Banner/Logo */}
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px]">
              {/* IMPORTANTE: Asegúrate de que la imagen esté en public/images/logo-banner.png */}
              <Image
                src="/images/logo-banner2.webp" 
                alt="Sisters Events Banner Coleccionando Momentos" 
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>
      {/* 3. SECCIÓN DE GALERÍA (Interactiva) */}
      <section id="galeria" className="py-24 px-6 bg-white">
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
        >
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Trabajos Mas Recientes</h3>
            <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full"></div>
            <p className="text-gray-500 mt-6 max-w-xl mx-auto">
              Más de 10,000 seguidores en TikTok respaldan la calidad y el detalle de nuestros eventos.
            </p>
        </motion.div>
        
        {/* Grid de Imágenes */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {items.map((item) => (
            <motion.div 
              key={item.id}
              variants={fadeInUp} 
              layoutId={item.id} // Esto permite la animación suave al abrir
              onClick={() => setSelectedId(item.id)} // Al hacer clic, guardamos el ID
              className="group relative h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer bg-gray-100"
            >
              <Image 
                src={item.src} 
                alt={item.alt} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Capa oscura al pasar el mouse con icono de 'ver más' */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">Ver foto</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* EL MODAL (LIGHTBOX) - Esto va fuera del grid pero dentro de la section */}
        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)} // Cierra al hacer clic afuera
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            >
              {/* Botón de cerrar */}
              <button className="absolute top-5 right-5 text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition z-50">
                <FaTimes size={24} />
              </button>

              {/* Imagen Grande */}
              <motion.div
                layoutId={selectedId} // Conecta con la imagen pequeña
                className="relative w-full max-w-4xl max-h-[90vh] aspect-square md:aspect-video rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()} // Evita cerrar si clickeas la imagen
              >
                 {items.map((item) => item.id === selectedId && (
                   <Image
                     key={item.id}
                     src={item.src}
                     alt={item.alt}
                     fill
                     className="object-contain" // object-contain para que se vea completa sin recortar
                     priority
                   />
                 ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

            {/* 3.5. SECCIÓN VIDEO: CÓMO TRABAJAMOS */}
      <section className="py-20 bg-pink-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Columna Texto */}
            <motion.div 
              className="flex-1 space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-1 bg-pink-500 rounded-full"></div>
                <span className="text-pink-600 font-bold uppercase tracking-widest text-sm">Backstage</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
                NUESTRO <span className="text-pink-600">COMIENZO</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Todo empezó con una idea, muchas ganas y cero límites.
Sister Events nació desde abajo, con trabajo duro, creatividad y el sueño de crear experiencias únicas. Hoy, miramos atrás con orgullo y seguimos creciendo gracias a la confianza de cada cliente que creyó en nosotras.
              </p>
              
              <ul className="space-y-4 mt-4">
                {[
                  "Empezamos con poco, pero con una gran visión.",
                  "Crecimos paso a paso, aprendiendo en cada evento.",
                  "Hoy somos una marca que transforma espacios en recuerdos inolvidables."
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Columna Video (Estilo TikTok Vertical) */}
            <motion.div 
              className="flex-1 flex justify-center relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Elemento decorativo detrás del video */}
              <div className="absolute inset-0 bg-pink-200 rounded-3xl transform rotate-3 scale-105 blur-sm -z-10"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white max-w-[300px] md:max-w-[350px]">
                <video 
                  controls 
                  preload="metadata"
                  className="w-full h-auto bg-black"
                  // Si quieres que se reproduzca solo (sin audio inicial) descomenta estas lineas:
                  // autoPlay 
                  // muted 
                  // loop 
                >
                  <source src="/videos/video.mp4" type="video/mp4" />
                  Tu navegador no soporta videos.
                </video>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
                 {/* 3.6. SECCIÓN VIDEO: CÓMO TRABAJAMOS */}
      <section className="py-20 bg-pink-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            {/* Columna Texto */}
            <motion.div 
              className="flex-1 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-1 bg-pink-500 rounded-full"></div>
                <span className="text-pink-600 font-bold uppercase tracking-widest text-sm">Backstage</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
                ¿CÓMO <span className="text-pink-600">TRABAJAMOS?</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Cada evento es único. Nos encargamos de todo el proceso: desde el inflado de globos orgánicos hasta la instalación de paneles y luces neón.
              </p>
              
              <ul className="space-y-4 mt-4">
                {[
                  "Diseños personalizados 100% a tu gusto.",
                  "Puntualidad garantizada en la instalación.",
                  "Materiales de alta gama y acabados premium."
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Columna Video (Estilo TikTok Vertical) */}
            <motion.div 
              className="flex-1 flex justify-center relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Elemento decorativo detrás del video */}
              <div className="absolute inset-0 bg-pink-200 rounded-3xl transform rotate-3 scale-105 blur-sm -z-10"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white max-w-[300px] md:max-w-[350px]">
                <video 
                  controls 
                  preload="metadata"
                  className="w-full h-auto bg-black"
                  // Si quieres que se reproduzca solo (sin audio inicial) descomenta estas lineas:
                  // autoPlay 
                  // muted 
                  // loop 
                >
                  <source src="/videos/video2.mp4" type="video/mp4" />
                  Tu navegador no soporta videos.
                </video>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      {/* 2.8. SECCIÓN TIPOS DE EVENTO */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp} 
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
              Organizamos todo tipo de <span className="text-pink-600">Evento</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Diseñamos cada detalle para que tu celebración sea única e irrepetible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* TARJETA 1: CUMPLEAÑOS */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group bg-gradient-to-br from-pink-50 to-white p-10 rounded-3xl shadow-lg border border-pink-100 hover:shadow-2xl hover:shadow-pink-100 transition-all duration-300 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform"></div>
              
              <div className="inline-flex items-center justify-center w-24 h-24 bg-pink-500 text-white rounded-full mb-6 shadow-lg shadow-pink-300 group-hover:rotate-12 transition-transform duration-300">
                <FaBirthdayCake size={40} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Fiestas de Cumpleaños</h3>
              <p className="text-gray-600 leading-relaxed">
                Desde el primer añito hasta los 50. Creamos temáticas soñadas con arcos orgánicos, paneles de fondo y mobiliario de tendencia.
              </p>
            </motion.div>

            {/* TARJETA 2: BABY SHOWER */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group bg-gradient-to-br from-blue-50 to-white p-10 rounded-3xl shadow-lg border border-blue-100 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 text-center relative overflow-hidden"
            >
              {/* Decoración de fondo azulada/celeste para diferenciar */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform"></div>
              
              <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-400 text-white rounded-full mb-6 shadow-lg shadow-blue-300 group-hover:-rotate-12 transition-transform duration-300">
                <FaBabyCarriage size={40} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Baby Showers</h3>
              <p className="text-gray-600 leading-relaxed">
                La bienvenida perfecta para tu bebé. Decoraciones tiernas y elegantes en tonos pastel, revelación de sexo y mesas dulces.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

{/* 3.9. SECCIÓN TEMÁTICAS FAVORITAS (Brick Wall - 25 Íconos Reales) */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-2 text-center">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12"
          >
            Eventos con tus temáticas favoritas ✨
          </motion.h2>

          {/* Contenedor del Muro */}
          <div className="flex flex-col gap-4 items-center">
            
            {/* Filas 8 - 9 - 8 */}
            {[8, 9, 8].map((count, rowIndex) => {
              // Calculamos en qué número de imagen empieza esta fila
              let rowStartIndex = 0;
              if (rowIndex === 1) rowStartIndex = 8;  // La segunda fila empieza después de las primeras 8
              if (rowIndex === 2) rowStartIndex = 17; // La tercera fila empieza después de 8 + 9

              return (
                <motion.div 
                  key={rowIndex}
                  className="flex flex-wrap justify-center gap-3 md:gap-4"
                  initial={{ x: rowIndex % 2 === 0 ? -100 : 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: rowIndex * 0.2 }}
                >
                  {Array.from({ length: count }).map((_, i) => {
                    // Calculamos el número final de la imagen (del 1 al 25)
                    const imageNumber = rowStartIndex + i + 1;
                    
                    return (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.3, zIndex: 20, rotate: Math.random() * 6 - 3 }}
                        className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-lg overflow-hidden shadow-md cursor-pointer border-2 border-transparent hover:border-pink-400 transition-all"
                      >
                        {/* Usamos el nombre exacto de tus archivos */}
                        <Image
                          src={`/images/icon-${imageNumber}.webp`} 
                          alt={`Detalle temática ${imageNumber}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        {/* Filtro rosado más intenso al pasar el mouse */}
                        <div className="absolute inset-0 bg-gradient-to-t from-pink-600/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>
      {/* 3.10. SECCIÓN CTA FINAL (Gris) */}
      <section className="py-16 bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-8"
          >
            ¿Listo para celebrar a lo grande?
          </motion.h3>
          
          <motion.a 
            href="https://wa.me/51935744138" // Enlace temporal a WhatsApp
            target="_blank"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(219, 39, 119, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-pink-600 text-white px-12 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-pink-700 transition-all tracking-wide"
          >
            ¡CONTÁCTANOS!
          </motion.a>
        </div>
      </section>
      {/* 4. FOOTER PROFESIONAL */}
{/* 4. FOOTER PROFESIONAL */}
      <footer id="contacto" className="bg-gray-900 text-gray-300 py-16 relative overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {/* Columna 1: Marca (Igual que antes) */}
            <div className="space-y-4">
                <h4 className="text-3xl font-bold text-pink-500">Sisters Events</h4>
                <p className="leading-relaxed text-sm">Coleccionando momentos inolvidables en Lima, Perú.</p>
            </div>

             {/* Columna 2: Enlaces Rápidos */}
{/* Columna 2: Enlaces Rápidos */}
             <div className="space-y-4">
                <h5 className="text-lg font-bold text-white">Enlaces Rápidos</h5>
                <ul className="space-y-2 text-sm">
                    <li><Link href="/" className="hover:text-pink-400 transition">Inicio</Link></li>
                    <li><Link href="#galeria" className="hover:text-pink-400 transition">Galería</Link></li>
                    <li>
                      <Link href="/trabaja-con-nosotros" className="hover:text-pink-400 transition flex items-center gap-2">
                         Trabaja con Nosotros <span className="text-xs bg-pink-600 text-white px-1 rounded">Nuevo</span>
                      </Link>
                    </li>
                    <li><a href="https://wa.me/51935744138" target="_blank" className="hover:text-pink-400 transition">Cotizar</a></li>
                </ul>
            </div>

             {/* Columna 3: Social y Contacto */}
             <div className="space-y-4">
                <h5 className="text-lg font-bold text-white">Síguenos y Contáctanos</h5>
                <div className="flex space-x-4">
                    <a href="https://www.tiktok.com/@sisters.events1" target="_blank" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 hover:text-white transition-all">
                        <FaTiktok size={20} />
                    </a>
                    <a href="https://www.instagram.com/sisters.events27/" target="_blank" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 hover:text-white transition-all">
                        <FaInstagram size={20} />
                    </a>
                     <a href="https://wa.me/51935744138" target="_blank" className="bg-gray-800 p-3 rounded-full hover:bg-green-500 hover:text-white transition-all">
                        <FaWhatsapp size={20} />
                    </a>
                </div>
                <p className="text-sm mt-4">Lima, Perú 🇵🇪</p>
            </div>

            {/* ---> NUEVA COLUMNA 4: CÓDIGO QR <--- */}
            <div className="flex flex-col items-start">
                <h5 className="text-lg font-bold text-white mb-4">¡Escanea y comparte!</h5>
                
                {/* Contenedor Blanco (Necesario para contraste) */}
                <div className="bg-white p-3 rounded-xl shadow-lg">
                    <QRCode 
                        value="https://sistersevents.vercel.app/" 
                        size={100} // Tamaño en pixeles
                        fgColor="#000000" // Color del código (Negro)
                        bgColor="#ffffff" // Color de fondo (Blanco)
                    />
                </div>
                <p className="text-xs text-gray-500 mt-2">Llévanos en tu celular</p>
            </div>

        </div>
        {/* Copyright (Igual que antes) */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Sisters Events. Todos los derechos reservados.
        </div>
      </footer>

      {/* 5. BOTÓN FLOTANTE DE WHATSAPP (Animado) */}
      <motion.a
        href="https://wa.me/51935744138"
        target="_blank"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center"
        aria-label="Chatear por WhatsApp"
      >
        <FaWhatsapp size={32} />
      </motion.a>
    </main>
  );
}