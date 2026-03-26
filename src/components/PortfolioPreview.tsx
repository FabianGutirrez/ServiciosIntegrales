import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PortfolioPreview() {
  const previewProjects = [
    {
      title: 'Galpón Logístico',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Portón Automatizado',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Mantención Industrial',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-bold text-slate-900 mb-4">Nuestros Proyectos Destacados</h2>
            <p className="text-lg text-slate-600">
              Conozca algunos de nuestros trabajos más recientes y la calidad técnica que aplicamos en cada desafío.
            </p>
          </div>
          <Link 
            to="/portafolio" 
            className="group flex items-center gap-2 text-orange-600 font-bold text-lg hover:gap-4 transition-all"
          >
            Ver Portafolio Completo <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-lg"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-8">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
                    <ImageIcon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-xl">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
