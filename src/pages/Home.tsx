import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Calculator } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-navy-600 mb-4">Planifica tu retiro hoy para asegurar tu futuro mañana</h1>
        <p className="text-xl text-gray-600 mb-6">Descubre cómo optimizar tus ingresos durante la jubilación con nuestras herramientas y recursos.</p>
        <Link to="/simulador-retiro" className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300">
          Empieza ahora con nuestro simulador de retiro
        </Link>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <TrendingUp className="text-green-500 w-12 h-12 mb-4" />
          <h2 className="text-2xl font-bold text-navy-600 mb-2">Planificación Estratégica</h2>
          <p className="text-gray-600">Aprende a crear una estrategia financiera sólida para tu retiro y maximiza tus ahorros.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Calculator className="text-green-500 w-12 h-12 mb-4" />
          <h2 className="text-2xl font-bold text-navy-600 mb-2">Simulador Interactivo</h2>
          <p className="text-gray-600">Utiliza nuestra herramienta de simulación para proyectar tus ingresos durante la jubilación.</p>
        </div>
      </section>

      <section className="bg-navy-100 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold text-navy-600 mb-4">Calculadora Rápida de Retiro</h2>
        <p className="text-gray-600 mb-4">Obtén una estimación rápida de tus ingresos esperados durante el retiro.</p>
        {/* Aquí iría el componente de la calculadora rápida */}
        <div className="bg-white p-4 rounded-md">
          <p className="text-center text-gray-500">Componente de Calculadora Rápida</p>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold text-navy-600 mb-4">Mantente Informado</h2>
        <p className="text-xl text-gray-600 mb-6">Suscríbete a nuestro boletín para recibir las últimas novedades y consejos sobre planificación financiera.</p>
        <form className="max-w-md mx-auto">
          <div className="flex">
            <input type="email" placeholder="Tu correo electrónico" className="flex-grow px-4 py-2 rounded-l-lg border-t border-b border-l text-gray-800 border-gray-200 bg-white" />
            <button type="submit" className="px-4 py-2 rounded-r-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition duration-300">Suscribirse</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Home;