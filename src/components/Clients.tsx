import React from 'react';
import { motion } from 'motion/react';

const clients = [
  {
    name: "Sopraval",
    logo: "/images/sopraval.png",
    className: "h-24 w-56" // Increased size for horizontal logos
  },
  {
    name: "Walmart Chile",
    logo: "/images/walmartch.png",
    className: "h-24 w-56"
  },
  {
    name: "Express de Lider",
    logo: "/images/express-lider.png",
    className: "h-24 w-56"
  },
  {
    name: "Lider",
    logo: "/images/lider.png",
    className: "h-24 w-56"
  },
  {
    name: "SuperBodega aCuenta",
    logo: "/images/acuenta.png",
    className: "h-20 w-48"
  },
  {
    name: "Agrosuper",
    logo: "/images/agrosuper.png",
    className: "h-20 w-48"
  },
  {
    name: "Doggis",
    logo: "/images/doggis.png",
    className: "h-20 w-48"
  }
];

export default function Clients() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold text-slate-500 mb-4"
          >
            Nuestros Clientes
          </motion.h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full opacity-20"></div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-64 h-32 flex items-center justify-center bg-slate-50/50 rounded-xl p-4 transition-all duration-300 border border-transparent hover:border-orange-100 hover:bg-white hover:shadow-lg"
            >
              <img
                src={client.logo}
                alt={client.name}
                className={`${client.className} object-contain`}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
