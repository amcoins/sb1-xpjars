import React from 'react';
import { BookOpen, Video, FileText } from 'lucide-react';

const RecursosConsejos: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-navy-600 mb-8">Recursos y Consejos</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-navy-600 mb-4">Artículos Educativos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <BookOpen className="text-green-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-navy-600 mb-2">Diversificación de Portafolio</h3>
            <p className="text-gray-600 mb-4">Aprende cómo distribuir tus inversiones para maximizar rendimientos y minimizar riesgos.</p>
            <a href="#" className="text-green-500 hover:text-green-600">Leer más →</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <BookOpen className="text-green-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-navy-600 mb-2">Seguros de Vida y Retiro</h3>
            <p className="text-gray-600 mb-4">Descubre cómo los seguros pueden proteger tu futuro financiero y el de tu familia.</p>
            <a href="#" className="text-green-500 hover:text-green-600">Leer más →</a>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-navy-600 mb-4">Videos Explicativos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Video className="text-green-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-navy-600 mb-2">Estrategias Fiscales para el Retiro</h3>
            <p className="text-gray-600 mb-4">Optimiza tu carga fiscal durante la jubilación con estos consejos expertos.</p>
            <a href="#" className="text-green-500 hover:text-green-600">Ver video →</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Video className="text-green-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-navy-600 mb-2">Planificación de Gastos Post-Jubilación</h3>
            <p className="text-gray-600 mb-4">Aprende a presupuestar eficazmente para tu vida después del retiro.</p>
            <a href="#" className="text-green-500 hover:text-green-600">Ver video →</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Video className="text-green-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-navy-600 mb-2">Inversiones a Largo Plazo</h3>
            <p className="text-gray-600 mb-4">Descubre las mejores estrategias para invertir con miras al futuro.</p>
            <a href="#" className="text-green-500 hover:text-green-600">Ver video →</a>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-navy-600 mb-4">Seminarios Web en Vivo</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-navy-600 mb-4">Próximos Seminarios</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <FileText className="text-green-500 w-6 h-6 mr-2 flex-shrink-0" />
              <div>
                <p className="font-semibold">Maximizando tus Ahorros para el Retiro</p>
                <p className="text-gray-600">Fecha: 15 de Julio, 2024 - 19:00 hrs</p>
              </div>
            </li>
            <li className="flex items-start">
              <FileText className="text-green-500 w-6 h-6 mr-2 flex-shrink-0" />
              <div>
                <p className="font-semibold">Estrategias de Inversión Post-Pandemia</p>
                <p className="text-gray-600">Fecha: 22 de Julio, 2024 - 18:30 hrs</p>
              </div>
            </li>
            <li className="flex items-start">
              <FileText className="text-green-500 w-6 h-6 mr-2 flex-shrink-0" />
              <div>
                <p className="font-semibold">Planificación de Herencia y Sucesión</p>
                <p className="text-gray-600">Fecha: 5 de Agosto, 2024 - 20:00 hrs</p>
              </div>
            </li>
          </ul>
          <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">Registrarse para Seminarios</button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-navy-600 mb-4">Blog</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-navy-600 mb-2">5 Errores Comunes en la Planificación del Retiro</h3>
            <p className="text-gray-600 mb-4">Descubre los errores más frecuentes que la gente comete al planificar su jubilación y cómo evitarlos.</p>
            <a href="#" className="text-green-500 hover:text-green-600">Leer artículo completo →</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-navy-600 mb-2">Cómo Ajustar tu Plan de Retiro en Tiempos de Inflación</h3>
            <p className="text-gray-600 mb-4">Estrategias para proteger tus ahorros y mantener tu poder adquisitivo durante periodos inflacionarios.</p>
            <a href="#" className="text-green-500 hover:text-green-600">Leer artículo completo →</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecursosConsejos;