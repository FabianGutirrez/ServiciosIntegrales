import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MessageCircle, FileText } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-8"
          >
            ¿Necesitas una solución rápida y profesional?
          </motion.h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            No pierdas más tiempo. Nuestro equipo está listo para brindarte la mejor asesoría y ejecución para tu proyecto.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-orange-700 transition-all shadow-xl shadow-orange-900/20"
            >
              <FileText className="mr-3 h-6 w-6" />
              Solicitar cotización
            </Link>
            <a
              href="https://wa.me/56994605684"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-green-700 transition-all shadow-xl shadow-green-900/20"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/10 blur-3xl rounded-full -mr-1/4 -mt-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-600/10 blur-3xl rounded-full -ml-1/4 -mb-1/4"></div>
    </section>
  );
}
