import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Clock, Users } from 'lucide-react';

export default function About() {
  const values = [
    { icon: <Award className="h-6 w-6" />, title: "Calidad", desc: "Excelencia en cada detalle de nuestro trabajo." },
    { icon: <CheckCircle2 className="h-6 w-6" />, title: "Compromiso", desc: "Dedicación total a los proyectos de nuestros clientes." },
    { icon: <Clock className="h-6 w-6" />, title: "Puntualidad", desc: "Respetamos los plazos acordados rigurosamente." },
    { icon: <Users className="h-6 w-6" />, title: "Responsabilidad", desc: "Ética y profesionalismo en toda nuestra gestión." },
  ];

  return (
    <section id="nosotros" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Sobre <span className="text-orange-600">Nosotros</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Somos una empresa dedicada a entregar soluciones integrales en construcción, mantención y servicios industriales. Nos especializamos en trabajos de alta calidad, adaptándonos a las necesidades de cada cliente, ya sea para el hogar, comercio o grandes industrias.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Con años de experiencia en el mercado chileno, hemos consolidado un equipo de profesionales expertos en diversas áreas, desde la soldadura de precisión hasta la automatización avanzada de accesos.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="text-4xl font-bold text-orange-600 mb-2">+500</div>
                <div className="text-slate-500 font-medium">Proyectos Realizados</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-slate-500 font-medium">Clientes Satisfechos</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-500">{value.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
