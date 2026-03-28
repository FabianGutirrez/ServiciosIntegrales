import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, ExternalLink, Filter } from 'lucide-react';

const categories = ['Todos', 'Metalurgia', 'Automatización', 'Construcción', 'Industrial', 'Climatización'];

const projects = [
    {
    id: 1,
    title: 'Montaje de Panel Eléctrico',
    category: 'Industrial',
    description: 'Instalación y cableado de tableros eléctricos de control para procesos industriales.',
    image: '/images/panel electrico.jpeg',
  },

    {
    id: 2,
    title: 'Instalación de Concertina de Seguridad',
    category: 'Metalurgia',
    description: 'Instalación de concertina de acero galvanizado para refuerzo de seguridad perimetral.',
    image: '/images/concertina.jpeg',
  },

    {
    id: 3,
    title: 'Mantención Motor Extractor de Aire',
    category: 'Industrial',
    description: 'Servicio técnico y limpieza de motores extractores de aire industriales en techumbres.',
    image: '/images/motor-estractor.jpeg',
  },

    {
    id: 4,
    title: 'Instalación Bolardos de Seguridad',
    category: 'Metalurgia',
    description: 'Montaje de bolardos de alta resistencia fijos y desmontables para protección de perímetros.',
    image: '/images/bolardos.png',
  },

    {
    id: 5,
    title: 'Reparación Puerta Frigorífica',
    category: 'Industrial',
    description: 'Ajuste, reparación de herrajes y sistemas de cierre en cámaras de frío industriales.',
    image: '/images/puertacamara.png',
  },

    {
    id: 6,
    title: 'Instalación de Cortinas de Lamas',
    category: 'Industrial',
    description: 'Montaje de cortinas de lamas PVC para control de temperatura y polvo en accesos industriales.',
    image: '/images/lamas3.png',
  },

    {
    id: 7,
    title: 'Reparación Lineal de Cajas',
    category: 'Industrial',
    description: 'Mantenimiento y reparación de muebles de cajas en supermercados para optimizar la atención.',
    image: '/images/cajas.png',
  },

    {
    id: 8,
    title: 'Cerradura Gabinetes Eléctricos',
    category: 'Industrial',
    description: 'Instalación y reparación de sistemas de cierre en tableros eléctricos industriales para control de acceso.',
    image: '/images/purtaspanel.png',
  },

    {
    id: 9,
    title: 'Automatización Portón Corredera',
    category: 'Automatización',
    description: 'Instalación de motor de alto tráfico con sistema de apertura remota.',
    image: '/images/porton1.jpeg',
  },

    {
    id: 10,
    title: 'Reparación de Motor para Portón',
    category: 'Automatización',
    description: 'Mantenimiento y cambio de motores para portones automáticos de alto tráfico.',
    image: '/images/porton.jpeg',
  },

    {
    id: 11,
    title: 'Instalación de Central de Cortina',
    category: 'Automatización',
    description: 'Configuración y montaje de central electrónica para el control de cortinas metálicas.',
    image: '/images/centalmotorcortina.png',
  },

    {
    id: 12,
    title: 'Automatización de Portón Batiente',
    category: 'Automatización',
    description: 'Instalación de brazos hidráulicos para la automatización de portones de dos hojas.',
    image: '/images/brazos.png',
  },

    {
    id: 13,
    title: 'Reparación Mamparas de Acceso',
    category: 'Automatización',
    description: 'Mantenimiento y reparación integral de puertas automáticas y mamparas de vidrio.',
    image: '/images/reparacion.png',
  },

    {
    id: 14,
    title: 'Cierre Perimetral Automatizado',
    category: 'Automatización',
    description: 'Sistema de seguridad perimetral con portones batientes sincronizados.',
    image: '/images/cierre.png',
  },

    {
    id: 15,
    title: 'Reparación de Cortina Metálica',
    category: 'Automatizacion',
    description: 'Servicio de reparación y ajuste de cortinas metálicas de seguridad para locales comerciales.',
    image: '/images/cortinametalica.jpeg',
  },

    {
    id: 16,
    title: 'Limpieza Técnica Aire Acondicionado',
    category: 'Climatización',
    description: 'Mantenimiento profundo y desinfección de unidades internas para optimizar calidad de aire.',
    image: '/images/aire.png',
  },
  {
    id: 17,
    title: 'Mantención Unidad Condensadora Industrial',
    category: 'Climatización',
    description: 'Limpieza y revisión de sistemas de enfriamiento industrial de gran escala.',
    image: '/images/condensadora.png',
  },

  {
    id: 18,
    title: 'Servicio Técnico LG Smart Inverter',
    category: 'Climatización',
    description: 'Mantenimiento preventivo de equipos de alta eficiencia energética.',
    image: '/images/inverter.png',
  },

    {
    id: 19,
    title: 'Reparación Termo Eléctrico',
    category: 'Climatizacion',
    description: 'Servicio técnico especializado en termos eléctricos industriales de gran capacidad.',
    image: '/images/termo.png',
  },

    {
    id: 20,
    title: 'Revestimiento Epóxico Industrial',
    category: 'Construcción',
    description: 'Aplicación de pintura epóxica en pisos para máxima durabilidad y limpieza en áreas de procesos.',
    image: '/images/piso-epoxico.png',
  },

    {
    id: 21,
    title: 'Revestimiento Epóxico Industrial',
    category: 'Construcción',
    description: 'Aplicación de pintura epóxica en pisos para máxima durabilidad y limpieza en áreas de procesos.',
    image: '/images/piso1.png',
  },

    {
    id: 22,
    title: 'Revestimiento Epóxico Industrial',
    category: 'Construcción',
    description: 'Aplicación de pintura epóxica en pisos para máxima durabilidad y limpieza en áreas de procesos.',
    image: '/images/piso.png',
  },

    {
    id: 23,
    title: 'Escalera Estructural Industrial',
    category: 'Metalurgia',
    description: 'Fabricación y montaje de escalera metálica con peldaños antideslizantes y barandas de seguridad.',
    image: '/images/escalera estructural.jpeg',
  },

    {
    id: 15,
    title: 'Reparación  e instalacion de Cortina Metálica',
    category: 'Automatizacion',
    description: 'Servicio de reparación, instalacion y ajuste de cortinas metálicas de seguridad para locales comerciales.',
    image: '/images/metalica.png',
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
