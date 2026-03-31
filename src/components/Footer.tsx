import React from 'react';
import { Hammer, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6 group">
              <img 
                src="/logos/logob.png" 
                alt="FG Servicios Integrales Logo" 
                className="h-32 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://picsum.photos/seed/fg-logo/300/150";
                }}
              />
            </div>
            <p className="text-lg max-w-md mb-8">
              Líderes en servicios de construcción, soldadura y mantención industrial en Chile. Calidad, compromiso y rapidez en cada obra.
            </p>
            
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                <span className="text-orange-500">Tel:</span> +56 9 9460 5684
              </p>
              <p className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                <span className="text-orange-500">Email:</span> fg.serviciosintegrales@hotmail.es
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-orange-500 transition-colors">Inicio</Link></li>
              <li><Link to="/servicios" className="hover:text-orange-500 transition-colors">Servicios</Link></li>
              <li><Link to="/portafolio" className="hover:text-orange-500 transition-colors">Portafolio</Link></li>
              <li><Link to="/nosotros" className="hover:text-orange-500 transition-colors">Nosotros</Link></li>
              <li><Link to="/contacto" className="hover:text-orange-500 transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Servicios</h4>
            <ul className="space-y-4">
              <li><Link to="/servicios" className="hover:text-orange-500 transition-colors">Soldaduras MIG/TIG</Link></li>
              <li><Link to="/servicios" className="hover:text-orange-500 transition-colors">Portones Automáticos</Link></li>
              <li><Link to="/servicios" className="hover:text-orange-500 transition-colors">Instalaciones Eléctricas</Link></li>
              <li><Link to="/servicios" className="hover:text-orange-500 transition-colors">Mantención Industrial</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 text-center text-sm">
          <p>© {new Date().getFullYear()} FG Servicios Integrales EIRL. Todos los derechos reservados.</p>
         
        </div>
      </div>
    </footer>
  );
}
