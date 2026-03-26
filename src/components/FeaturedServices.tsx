import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Wrench, DoorOpen, Zap, Droplets, LayoutGrid, ArrowRight } from 'lucide-react';

const featuredServices = [
  {
    title: "Metalurgia y Soldadura",
    icon: <Wrench className="h-8 w-8" />,
    desc: "Soldaduras MIG/TIG, estructuras metálicas, cortinas de seguridad y cierres perimetrales.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Automatización y Portones",
    icon: <DoorOpen className="h-8 w-8" />,
    desc: "Fabricación y automatización de portones, barreras y puertas automáticas.",
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Obras Civiles",
    icon: <LayoutGrid className="h-8 w-8" />,
    desc: "Reparación de techumbres, muros, pisos cerámicos, vinílicos y revestimiento epóxico.",
    color: "bg-slate-50 text-slate-600"
  },
  {
    title: "Instalaciones y Gasfitería",
    icon: <Zap className="h-8 w-8" />,
    desc: "Electricidad certificada, gasfitería en PPR/PVC/Cobre y mantención de termos.",
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    title: "Mantención Comercial",
    icon: <LayoutGrid className="h-8 w-8" />,
    desc: "Reparación de cajas, mantención de check-out y servicios industriales integrales.",
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Servicios de Terreno",
    icon: <Droplets className="h-8 w-8" />,
    desc: "Poda, desmalezado, retiro de escombros en botaderos autorizados y destapes.",
    color: "bg-green-50 text-green-600"
  }
];

export default function FeaturedServices() {
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
            Servicios Principales
          </motion.h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all group bg-white"
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.desc}</p>
              <Link 
                to="/servicios" 
                className="text-orange-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Saber más <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/servicios"
            className="inline-flex items-center justify-center bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg"
          >
            Ver todos los servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
