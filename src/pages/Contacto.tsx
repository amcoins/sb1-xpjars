import React, { useState } from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const Contacto: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado', { nombre, email, mensaje });
    // Resetear el formulario
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-navy-600 mb-8">Contacto</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-semibold text-navy-600 mb-4">Ponte en contacto con nosotros</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-gray-700">Nombre</label>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-gray-700">Mensaje</label>
              <textarea
                id="mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              ></textarea>
            </div>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
              Enviar Mensaje
            </button>
          </form>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-navy-600 mb-4">Información de Contacto</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="text-green-500 w-6 h-6 mr-2" />
              <p className="text-gray-600">info@flujofinanciero.com</p>
            </div>
            <div className="flex items-center">
              <Phone className="text-green-500 w-6 h-6 mr-2" />
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center">
              <MessageSquare className="text-green-500 w-6 h-6 mr-2" />
              <p className="text-gray-600">Chat en vivo disponible de Lunes a Viernes, 9am - 5pm</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-navy-600 mb-2">Horario de Atención</h3>
            <p className="text-gray-600">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Sábados: 10:00 AM - 2:00 PM</p>
            <p className="text-gray-600">Domingos: Cerrado</p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-navy-600 mb-2">Ubicación</h3>
            <p className="text-gray-600">Calle Financiera 123</p>
            <p className="text-gray-600">Ciudad Económica, CP 12345</p>
            <p className="text-gray-600">País de las Oportunidades</p>
          </div>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy-600 mb-4">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-navy-600">¿Cómo puedo agendar una consulta personalizada?</h3>
            <p className="text-gray-600">Puede agendar una consulta personalizada llamando a nuestro número de teléfono o enviando un correo electrónico. Uno de nuestros asesores se pondrá en contacto con usted para programar una cita.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-navy-600">¿Ofrecen servicios de asesoría en línea?</h3>
            <p className="text-gray-600">Sí, ofrecemos servicios de asesoría en línea a través de videoconferencias. Puede elegir esta opción al momento de agendar su cita.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-navy-600">¿Cuál es el costo de sus servicios?</h3>
            <p className="text-gray-600">Nuestros costos varían dependiendo del tipo de servicio y la complejidad de su situación financiera. Le recomendamos contactarnos para obtener una cotización personalizada.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;