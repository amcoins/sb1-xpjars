import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-navy-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <DollarSign size={32} />
          <span className="text-xl font-bold">Flujo Financiero para el Retiro</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-green-300">Inicio</Link></li>
            <li><Link to="/planificacion-retiro" className="hover:text-green-300">Planificación</Link></li>
            <li><Link to="/simulador-retiro" className="hover:text-green-300">Simulador</Link></li>
            <li><Link to="/recursos-consejos" className="hover:text-green-300">Recursos</Link></li>
            <li><Link to="/sobre-nosotros" className="hover:text-green-300">Sobre Nosotros</Link></li>
            <li><Link to="/contacto" className="hover:text-green-300">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;