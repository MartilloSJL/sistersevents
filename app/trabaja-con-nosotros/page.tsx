'use client';

import { useState } from 'react';
import Image from 'next/image'; // Importamos Image
import { motion } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function TrabajaPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    distrito: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/trabaja', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nombre: '', email: '', telefono: '', distrito: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    // Agregamos 'relative' para poder poner la imagen de fondo detrás de todo
    <main className="min-h-screen relative flex items-center justify-center p-6 overflow-hidden">
      
      {/* --- FONDO DE PANTALLA --- */}
      <Image 
        src="/images/hero-bg.webp" 
        alt="Fondo decorativo elegante" 
        fill
        className="object-cover -z-20" // Se va al fondo
        priority
      />
      
      {/* --- OVERLAY OSCURO (Para que resalte el formulario) --- */}
      <div className="absolute inset-0 bg-black/40 -z-10 backdrop-blur-[2px]"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row relative z-10"
      >
        
        {/* Lado Izquierdo: Imagen / Mensaje */}
        <div className="bg-gradient-to-br from-pink-600 to-purple-700 p-10 md:w-2/5 text-white flex flex-col justify-center relative overflow-hidden">
          {/* Círculos decorativos sutiles */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-10 -translate-y-10 opacity-10"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-10 translate-y-10 opacity-10"></div>
          
          <h2 className="text-3xl font-bold mb-6 relative z-10">Únete al Equipo ✨</h2>
          <p className="mb-6 relative z-10 text-pink-100 leading-relaxed">
            Buscamos personas apasionadas por los detalles. En Sisters Events, cada fiesta es una obra de arte y tú puedes ser parte de ella.
          </p>
          <div className="text-sm font-medium bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
            💼 Estamos contratando asistentes de decoración y logística.
          </div>
        </div>

        {/* Lado Derecho: Formulario */}
        <div className="p-8 md:p-12 md:w-3/5 bg-white">
          {status === 'success' ? (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="h-full flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-4xl mb-4 shadow-sm">🎉</div>
              <h3 className="text-2xl font-bold text-gray-800">¡Postulación Recibida!</h3>
              <p className="text-gray-500">Gracias por tu interés. Revisaremos tus datos y te contactaremos si encajas con el perfil.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-6 text-pink-600 font-bold hover:underline"
              >
                Enviar otra postulación
              </button>
            </motion.div>
          ) : (
<form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-2xl font-bold text-gray-800 mb-1">Déjanos tus datos</h3>
              <p className="text-sm text-gray-400 mb-6">Completa el formulario y te llamaremos.</p>
              
              <div className="space-y-4">
                {/* Input Nombre */}
                <div className="relative group">
                  <FaUser className="absolute top-4 left-4 text-gray-400 group-focus-within:text-pink-500 transition-colors" />
                  <input 
                    type="text" 
                    name="nombre"
                    required
                    placeholder="Tu nombre completo"
                    value={formData.nombre}
                    onChange={handleChange}
                    // AQUI ESTÁ EL CAMBIO: placeholder-gray-500 y text-gray-800
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 placeholder-gray-500 text-gray-800 focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 outline-none transition-all"
                  />
                </div>

                {/* Input Email */}
                <div className="relative group">
                  <FaEnvelope className="absolute top-4 left-4 text-gray-400 group-focus-within:text-pink-500 transition-colors" />
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="Tu correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 placeholder-gray-500 text-gray-800 focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 outline-none transition-all"
                  />
                </div>

                {/* Input Teléfono */}
                <div className="relative group">
                  <FaPhone className="absolute top-4 left-4 text-gray-400 group-focus-within:text-pink-500 transition-colors" />
                  <input 
                    type="tel" 
                    name="telefono"
                    required
                    placeholder="Número de celular"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 placeholder-gray-500 text-gray-800 focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 outline-none transition-all"
                  />
                </div>

                {/* Input Distrito */}
                <div className="relative group">
                  <FaMapMarkerAlt className="absolute top-4 left-4 text-gray-400 group-focus-within:text-pink-500 transition-colors" />
                  <input 
                    type="text" 
                    name="distrito"
                    required
                    placeholder="¿En qué distrito vives?"
                    value={formData.distrito}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 placeholder-gray-500 text-gray-800 focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 outline-none transition-all"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-pink-600 to-pink-500 text-white font-bold py-4 rounded-xl hover:from-pink-700 hover:to-pink-600 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-4"
              >
                {status === 'loading' ? (
                  <span>Enviando...</span>
                ) : (
                  <>
                    Enviar Postulación <FaPaperPlane />
                  </>
                )}
              </button>

              {status === 'error' && (
                <p className="text-red-500 text-center text-sm font-medium bg-red-50 p-2 rounded-lg">Hubo un error al enviar. Por favor intenta de nuevo.</p>
              )}
            </form>
          )}
        </div>
      </motion.div>
    </main>
  );
}