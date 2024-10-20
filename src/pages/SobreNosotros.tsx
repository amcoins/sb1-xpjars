import React from 'react';
import { Users, Award, ThumbsUp } from 'lucide-react';

const SobreNosotros: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-navy-600 mb-8">Sobre Nosotros</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-navy-600 mb-4">Nuestra Misión</h2>
        <p className="text-gray-600 mb-4">
          En Flujo Financiero para el Retiro, nuestra misión es empoderar a las personas para que tomen el control de su futuro financiero. 
          Creemos que cada individuo merece una jubilación segura y próspera, y nos dedicamos a proporcionar las herramientas, 
          el conocimiento y el apoyo necesarios para hacer realidad esa visión.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-navy-600 mb-4">Nuestro Equipo</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="María González" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-navy-600">María González</h3>
            <p className="text-gray-600">Asesora Financiera Senior</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Carlos Rodríguez" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-navy-600">Carlos Rodríguez</h3>
            <p className="text-gray-600">Especialista en Planificación de Retiro</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Ana Martínez" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-navy-600">Ana Martínez</h3>
            <p className="text-gray-600">Analista de Inversiones</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-navy-600 mb-4">Nuestros Valores</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="text-green-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-navy-600 mb-2">Enfoque en el Cliente</h3>
            <p className="text-gray-600">Ponemos las necesidades de nuestros clientes en el centro de todo lo que hacemos.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Award className="text-green-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-navy-600 mb-2">Excelencia</h3>
            <p className="text-gray-600">Nos esforzamos por ofrecer el más alto nivel de servicio y asesoramiento.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ThumbsUp className="text-green-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-navy-600 mb-2">Integridad</h3>
            <p className="text-gray-600">Actuamos con honestidad y transparencia en todas nuestras interacciones.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-navy-600 mb-4">Testimonios</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">"Gracias a Flujo Financiero para el Retiro, ahora tengo un plan claro para mi jubilación. Su asesoramiento ha sido invaluable."</p>
            <p className="font-semibold">- Laura Sánchez</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">"Los recursos y herramientas que ofrecen son excepcionales. Me siento mucho más seguro sobre mi futuro financiero."</p>
            <p className="font-semibold">- Miguel Ángel Pérez</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreNosotros;