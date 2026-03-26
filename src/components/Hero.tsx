import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
          alt="Construcción y Soldadura"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Servicios Integrales de <span className="text-orange-500">Construcción - Electricidad, Obras civiles</span>
          </h1>
          <p className="text-xl text-slate-200 mb-10 leading-relaxed">
            Especialistas en estructuras metálicas, portones automáticos, instalaciones y reparaciones.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition-all group"
            >
              Cotizar ahora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/56994605684"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
            >
              <MessageCircle className="mr-2 h-5 w-5 text-green-400" />
              WhatsApp directo
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-orange-600/10 blur-3xl rounded-full -mb-20 -mr-20"></div>
    </section>
  );
}
