import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, ExternalLink, Filter } from 'lucide-react';

const categories = ['Todos', 'Metalurgia', 'Automatización', 'Construcción', 'Industrial'];

const projects = [
  {
    id: 1,
    title: 'Estructura Galpón Industrial',
    category: 'Metalurgia',
    description: 'Diseño y montaje de estructura metálica de alta resistencia para centro logístico.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Automatización Portón Corredera',
    category: 'Automatización',
    description: 'Instalación de motor de alto tráfico con sistema de apertura remota por smartphone.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'Remodelación Oficinas Corporativas',
    category: 'Construcción',
    description: 'Terminaciones finas y tabiquería para oficinas de planta libre.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    title: 'Mantención Puente Grúa',
    category: 'Industrial',
    description: 'Servicio técnico preventivo y correctivo para equipos de levante industrial.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5,
    title: 'Escalera de Emergencia Certificada',
    category: 'Metalurgia',
    description: 'Fabricación de escalera de evacuación bajo normativa vigente de seguridad.',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 6,
    title: 'Cierre Perimetral Automatizado',
    category: 'Automatización',
    description: 'Sistema de seguridad perimetral con portones batientes sincronizados.',
    image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('Todos');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === cat 
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-200' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button 
                      onClick={() => setSelectedImage(project.image)}
                      className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors"
                    >
                      <Maximize2 className="h-6 w-6" />
                    </button>
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white">
                      <ExternalLink className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-orange-600 text-xs font-bold uppercase tracking-widest mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[100] bg-slate-900/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            >
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={selectedImage}
                className="max-w-full max-h-full rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-500 mb-8">¿Tienes un proyecto similar en mente?</p>
          <a 
            href="/contacto" 
            className="inline-flex items-center gap-2 text-orange-600 font-bold hover:gap-4 transition-all text-lg"
          >
            Iniciemos tu proyecto hoy <Maximize2 className="h-5 w-5 rotate-45" />
          </a>
        </div>
      </div>
    </section>
  );
}
