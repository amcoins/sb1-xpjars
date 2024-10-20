import React from 'react';
import { PieChart, DollarSign, TrendingUp } from 'lucide-react';

const PlanificacionRetiro: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-navy-600 mb-8">Planificación de Retiro</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-navy-600 mb-4">Estrategia Financiera para el Retiro</h2>
        <p className="text-gray-600 mb-4">Crear una estrategia financiera sólida es fundamental para asegurar un retiro cómodo y sin preocupaciones. Aquí te presentamos los pasos clave para desarrollar tu plan:</p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Evalúa tu situación financiera actual</li>
          <li>Establece metas claras para tu retiro</li>
          <li>Diversifica tus inversiones</li>
          <li>Maximiza tus contribuciones a cuentas de retiro</li>
          <li>Considera la inflación y los gastos médicos futuros</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-navy-600 mb-4">Flujos de Ingresos durante la Jubilación</h2>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <PieChart className="text-green-500 w-16 h-16 mb-4 mx-auto" />
          <p className="text-gray-600 text-center">Gráfico visual de flujos de ingresos (pensiones, inversiones, ahorros, etc.)</p>
        </div>
        <p className="text-gray-600">Es importante entender y planificar las diferentes fuentes de ingresos que tendrás durante tu jubilación:</p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Pensiones estatales y privadas</li>
          <li>Rendimientos de inversiones</li>
          <li>Ahorros personales</li>
          <li>Posibles ingresos por trabajo a tiempo parcial</li>
          <li>Rentas de propiedades u otros activos</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-navy-600 mb-4">Optimización de Retiros y Ahorro en Impuestos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <DollarSign className="text-green-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-navy-600 mb-2">Estrategias de Retiro</h3>
            <p className="text-gray-600">Aprende cuándo y cómo retirar dinero de diferentes cuentas para minimizar impuestos y maximizar tus ahorros.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <TrendingUp className="text-green-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-navy-600 mb-2">Planificación Fiscal</h3>
            <p className="text-gray-600">Descubre estrategias para reducir tu carga fiscal durante la jubilación y mantener más dinero en tu bolsillo.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-navy-600 mb-4">Recursos Adicionales</h2>
        <p className="text-gray-600 mb-4">Para profundizar en tu planificación de retiro, te recomendamos:</p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Consultar con un asesor financiero profesional</li>
          <li>Utilizar nuestro simulador de retiro para proyectar diferentes escenarios</li>
          <li>Asistir a nuestros seminarios web sobre planificación financiera</li>
          <li>Leer nuestros artículos detallados sobre estrategias de inversión a largo plazo</li>
        </ul>
      </section>
    </div>
  );
};

export default PlanificacionRetiro;