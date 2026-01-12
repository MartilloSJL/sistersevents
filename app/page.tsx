import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* 1. NAVBAR SENCILLO */}
      <nav className="flex justify-between items-center p-6 shadow-sm bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-pink-600">Sisters Events</h1>
        <ul className="flex gap-6 font-medium">
          <li><a href="#galeria" className="hover:text-pink-500">Galería</a></li>
          <li><a href="#contacto" className="hover:text-pink-500">Contacto</a></li>
        </ul>
      </nav>

      {/* 2. HERO SECTION (BIENVENIDA) */}
      <section className="text-center py-20 bg-pink-50">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          Coleccionando Momentos ✨
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Decoraciones exclusivas para cumpleaños y eventos en Lima.
        </p>
        <a 
          href="https://wa.me/51935744138" 
          target="_blank"
          className="bg-pink-600 text-white px-8 py-4 rounded-full font-bold hover:bg-pink-700 transition"
        >
          ¡Cotiza tu evento por WhatsApp!
        </a>
      </section>

      {/* 3. SECCIÓN DE GALERÍA (Marcador de posición) */}
      <section id="galeria" className="p-10">
        <h3 className="text-3xl font-bold text-center mb-10">Nuestro Trabajo</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Aquí irán las fotos que saquemos de su TikTok */}
          <div className="h-64 bg-gray-200 rounded-xl flex items-center justify-center italic text-gray-400">
            [Espacio para foto de globos]
          </div>
          <div className="h-64 bg-gray-200 rounded-xl flex items-center justify-center italic text-gray-400">
            [Espacio para foto de temática infantil]
          </div>
          <div className="h-64 bg-gray-200 rounded-xl flex items-center justify-center italic text-gray-400">
            [Espacio para foto de evento 15 años]
          </div>
        </div>
      </section>

      {/* 4. BOTÓN FLOTANTE DE WHATSAPP (Estilo Perú) */}
      <a
        href="https://wa.me/51935744138"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50"
      >
        <span className="font-bold">Chat WhatsApp</span>
      </a>
    </main>
  );
}
