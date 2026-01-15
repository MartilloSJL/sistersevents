'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function TrabajaPage() {
  // Estado para guardar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    distrito: ''
  });

  // Estado para saber si se está enviando o si hubo error
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Manejar cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejar el envío
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
        setFormData({ nombre: '', email: '', telefono: '', distrito: '' }); // Limpiar form
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-pink-50 flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row"
      >
        
        {/* Lado Izquierdo: Imagen / Mensaje Amigable */}
        <div className="bg-pink-600 p-10 md:w-2/5 text-white flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-pink-500 rounded-full -translate-x-10 -translate-y-10 opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-700 rounded-full translate-x-10 translate-y-10 opacity-50"></div>
          
          <h2 className="text-3xl font-bold mb-6 relative z-10">Únete a la Familia</h2>
          <p className="mb-6 relative z-10 text-pink-100">
            En Sisters Events no solo decoramos, creamos recuerdos. Si tienes pasión por los detalles y te encanta trabajar en equipo, ¡queremos conocerte!
          </p>
          <div className="text-sm font-medium bg-pink-700/30 p-4 rounded-xl backdrop-blur-sm border border-pink-400/30">
            ✨ No necesitas experiencia previa, solo mucha actitud.
          </div>
        </div>

        {/* Lado Derecho: El Formulario */}
        <div className="p-10 md:w-3/5">
          {status === 'success' ? (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="h-full flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-4xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-gray-800">¡Gracias por escribirnos!</h3>
              <p className="text-gray-500">Hemos recibido tus datos. Si tu perfil encaja con lo que buscamos, te llamaremos pronto.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-6 text-pink-600 font-bold hover:underline"
              >
                Enviar otra postulación
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Déjanos tus datos</h3>
              
              {/* Input Nombre */}
              <div className="relative">
                <FaUser className="absolute top-4 left-4 text-gray-400" />
                <input 
                  type="text" 
                  name="nombre"
                  required
                  placeholder="Tu nombre completo"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                />
              </div>

              {/* Input Email */}
              <div className="relative">
                <FaEnvelope className="absolute top-4 left-4 text-gray-400" />
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="Tu correo electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                />
              </div>

              {/* Input Teléfono */}
              <div className="relative">
                <FaPhone className="absolute top-4 left-4 text-gray-400" />
                <input 
                  type="tel" 
                  name="telefono"
                  required
                  placeholder="Número de celular"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                />
              </div>

              {/* Input Distrito */}
              <div className="relative">
                <FaMapMarkerAlt className="absolute top-4 left-4 text-gray-400" />
                <input 
                  type="text" 
                  name="distrito"
                  required
                  placeholder="¿En qué distrito vives?"
                  value={formData.distrito}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                />
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-pink-600 text-white font-bold py-4 rounded-xl hover:bg-pink-700 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-pink-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
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
                <p className="text-red-500 text-center text-sm">Hubo un error al enviar. Por favor intenta de nuevo.</p>
              )}
            </form>
          )}
        </div>
      </motion.div>
    </main>
  );
}