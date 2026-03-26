import React from 'react';
import { motion } from 'motion/react';

const projects = [
  {
    title: "Estructuras Metálicas Industriales",
    category: "Industria",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Automatización de Accesos",
    category: "Residencial",
    image: "https://images.unsplash.com/photo-1508333706533-1ab43ecb1606?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Mantención de Techumbres",
    category: "Empresas",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Experience() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold text-slate-900 mb-4"
          >
            Trabajos y Experiencia
          </motion.h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Más de 500 proyectos realizados con éxito en retail, empresas y hogares de toda la V region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/5] shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 transition-opacity group-hover:opacity-100"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                <h3 className="text-white text-2xl font-bold font-display leading-tight">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
