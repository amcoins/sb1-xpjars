import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PlanificacionRetiro from './pages/PlanificacionRetiro';
import SimuladorRetiro from './pages/SimuladorRetiro';
import RecursosConsejos from './pages/RecursosConsejos';
import SobreNosotros from './pages/SobreNosotros';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-beige-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planificacion-retiro" element={<PlanificacionRetiro />} />
            <Route path="/simulador-retiro" element={<SimuladorRetiro />} />
            <Route path="/recursos-consejos" element={<RecursosConsejos />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;