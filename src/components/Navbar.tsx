import React, { useState, useEffect } from 'react';
import { Menu, X, Hammer } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Portafolio', href: '/portafolio' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <img 
              src="/logos/logo.png" 
              alt="FG Servicios Integrales Logo" 
              className="h-36 w-auto object-contain transition-transform group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://picsum.photos/seed/fg-logo/300/150";
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium transition-colors hover:text-orange-500 ${scrolled || !isHome ? 'text-slate-600' : 'text-white'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contacto"
              className="bg-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-700 transition-colors"
            >
              Cotizar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled || !isHome ? 'text-slate-900' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full left-0 top-full py-4 px-4 space-y-4 border-t border-slate-100">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block text-slate-600 font-medium hover:text-orange-500 py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contacto"
            className="block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-center"
            onClick={() => setIsOpen(false)}
          >
            Cotizar Ahora
          </Link>
        </div>
      )}
    </nav>
  );
}
