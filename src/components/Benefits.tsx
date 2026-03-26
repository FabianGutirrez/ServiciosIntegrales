import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Clock, Users } from 'lucide-react';

const benefits = [
  { icon: <Clock className="h-8 w-8" />, title: "Atención rápida", desc: "Respondemos a tus requerimientos en el menor tiempo posible." },
  { icon: <Award className="h-8 w-8" />, title: "Trabajos garantizados", desc: "Garantizamos la calidad y durabilidad de cada proyecto realizado." },
  { icon: <Users className="h-8 w-8" />, title: "Experiencia comprobada", desc: "Años de trayectoria en el rubro de construcción y mantención." },
  { icon: <CheckCircle2 className="h-8 w-8" />, title: "Soluciones a medida", desc: "Adaptamos nuestros servicios a las necesidades específicas de cada cliente." },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold text-slate-900 mb-4"
          >
            ¿Por qué elegirnos?
          </motion.h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Nos diferenciamos por nuestro compromiso con la excelencia y la satisfacción total de nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center"
            >
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                {benefit.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-500 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
