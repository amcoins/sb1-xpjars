import React from 'react';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-600 text-white p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2024 Flujo Financiero para el Retiro. Todos los derechos reservados.</p>
        <div className="flex items-center space-x-2">
          <Mail size={20} />
          <span>info@flujofinanciero.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;