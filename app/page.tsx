'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { FaTiktok, FaWhatsapp, FaInstagram } from "react-icons/fa"; // Importamos íconos
import { Variants } from "framer-motion"; // 1. Importa el tipo Variants

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
  return (
    <main className="min-h-screen bg-white text-gray-700 overflow-hidden">
      
      {/* 1. NAVBAR (Más elegante con borde dorado sutil) */}
      <nav className="flex justify-between items-center p-6 bg-white/95 backdrop-blur-sm sticky top-0 z-40 border-b border-pink-100">
        <motion.h1 
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="text-2xl font-bold text-pink-600 tracking-wide"
        >
          Sisters Events
        </motion.h1>
        <ul className="flex gap-8 font-medium text-sm uppercase tracking-wider text-gray-500">
          <li><a href="#galeria" className="hover:text-pink-500 transition-colors">Galería</a></li>
          <li><a href="#contacto" className="hover:text-pink-500 transition-colors">Contacto</a></li>
        </ul>
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
                src="/images/logo-banner.png" 
                alt="Sisters Events Banner Coleccionando Momentos" 
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SECCIÓN DE GALERÍA (Animada) */}
      <section id="galeria" className="py-24 px-6 bg-white">
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
        >
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Nuestro Trabajo Reciente</h3>
            <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full"></div>
            <p className="text-gray-500 mt-6 max-w-xl mx-auto">Más de 10,000 seguidores en TikTok respaldan la calidad y el detalle de nuestros eventos.</p>
        </motion.div>
        
        {/* Grid con efecto stagger (uno tras otro) */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Placeholder 1 */}
          <motion.div variants={fadeInUp} className="group relative h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-gray-100">
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center text-gray-400 font-medium">
              [<Image src="/images/logo-banner.png" alt="Decoración cumpleaños" fill className="object-cover group-hover:scale-110 transition-transform duration-500"/>]
            </div>
             {/* CUANDO TENGAS LAS FOTOS, DESCOMENTA ESTO Y BORRA EL DIV DE ARRIBA:
             <Image src="/images/tu-foto-1.webp" alt="Decoración cumpleaños" fill className="object-cover group-hover:scale-110 transition-transform duration-500"/> */}
          </motion.div>
           {/* Placeholder 2 */}
           <motion.div variants={fadeInUp} className="group relative h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-gray-100">
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center text-gray-400 font-medium">
              [<Image src="/images/logo-banner.png" alt="Decoración cumpleaños" fill className="object-cover group-hover:scale-110 transition-transform duration-500"/>]
            </div>
          </motion.div>
           {/* Placeholder 3 */}
           <motion.div variants={fadeInUp} className="group relative h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-gray-100">
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center text-gray-400 font-medium">
              [F<Image src="/images/logo-banner.png" alt="Decoración cumpleaños" fill className="object-cover group-hover:scale-110 transition-transform duration-500"/>]
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. FOOTER PROFESIONAL */}
      <footer id="contacto" className="bg-gray-900 text-gray-300 py-16 relative overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {/* Columna 1: Marca */}
            <div className="space-y-4">
                <h4 className="text-3xl font-bold text-pink-500">Sisters Events</h4>
                <p className="leading-relaxed text-sm">Coleccionando momentos inolvidables en Lima, Perú. Especialistas en decoración de eventos premium.</p>
            </div>
             {/* Columna 2: Enlaces Rápidos */}
             <div className="space-y-4">
                <h5 className="text-lg font-bold text-white">Enlaces Rápidos</h5>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-pink-400 transition">Inicio</a></li>
                    <li><a href="#galeria" className="hover:text-pink-400 transition">Galería</a></li>
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
        </div>
        {/* Barra final de Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Sisters Events. Todos los derechos reservados. Desarrollado con ❤️.
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