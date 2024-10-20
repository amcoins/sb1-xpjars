import React, { useState } from 'react';
import { LineChart, DollarSign, Settings } from 'lucide-react';

const SimuladorRetiro: React.FC = () => {
  const [edad, setEdad] = useState(30);
  const [ingresoActual, setIngresoActual] = useState(50000);
  const [ahorros, setAhorros] = useState(100000);
  const [edadJubilacion, setEdadJubilacion] = useState(65);
  const [inflacion, setInflacion] = useState(2);
  const [rendimientoInversion, setRendimientoInversion] = useState(7);

  const calcularProyeccion = () => {
    // Aquí iría la lógica real de cálculo
    return Array.from({ length: edadJubilacion - edad + 1 }, (_, i) => ({
      edad: edad + i,
      ahorros: ahorros * Math.pow(1 + rendimientoInversion / 100, i),
    }));
  };

  const proyeccion = calcularProyeccion();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-navy-600 mb-8">Simulador de Retiro</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-navy-600 mb-4">Ingresa tus datos</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="edad" className="block text-gray-700">Edad actual</label>
              <input
                type="number"
                id="edad"
                value={edad}
                onChange={(e) => setEdad(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="ingresoActual" className="block text-gray-700">Ingreso anual actual</label>
              <input
                type="number"
                id="ingresoActual"
                value={ingresoActual}
                onChange={(e) => setIngresoActual(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="ahorros" className="block text-gray-700">Ahorros actuales</label>
              <input
                type="number"
                id="ahorros"
                value={ahorros}
                onChange={(e) => setAhorros(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="edadJubilacion" className="block text-gray-700">Edad de jubilación deseada</label>
              <input
                type="number"
                id="edadJubilacion"
                value={edadJubilacion}
                onChange={(e) => setEdadJubilacion(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              />
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-navy-600 mb-4">Ajustes avanzados</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="inflacion" className="block text-gray-700">Inflación estimada (%)</label>
              <input
                type="number"
                id="inflacion"
                value={inflacion}
                onChange={(e) => setInflacion(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="rendimientoInversion" className="block text-gray-700">Rendimiento de inversión estimado (%)</label>
              <input
                type="number"
                id="rendimientoInversion"
                value={rendimientoInversion}
                onChange={(e) => setRendimientoInversion(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              />
            </div>
          </div>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy-600 mb-4">Proyección de flujo de dinero</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <LineChart className="text-green-500 w-16 h-16 mb-4 mx-auto" />
          <p className="text-center text-gray-600 mb-4">Gráfico de proyección del flujo de dinero a lo largo del tiempo</p>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-100 font-semibold text-gray-700 border-b">Edad</th>
                <th className="py-2 px-4 bg-gray-100 font-semibold text-gray-700 border-b">Ahorros Proyectados</th>
              </tr>
            </thead>
            <tbody>
              {proyeccion.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="py-2 px-4 border-b">{item.edad}</td>
                  <td className="py-2 px-4 border-b">${item.ahorros.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy-600 mb-4">Recomendaciones</h2>
        <div className="bg-green-100 p-6 rounded-lg">
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Considera aumentar tus ahorros mensuales para alcanzar tus metas de retiro.</li>
            <li>Diversifica tus inversiones para optimizar el rendimiento y reducir el riesgo.</li>
            <li>Revisa y ajusta tu plan de retiro regularmente para mantenerte en el camino correcto.</li>
            <li>Consulta con un asesor financiero para obtener consejos personalizados.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SimuladorRetiro;