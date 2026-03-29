import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  DoorOpen, 
  Zap, 
  Building2, 
  LayoutGrid, 
  ShieldCheck, 
  Droplets,
  Truck,
  Scissors
} from 'lucide-react';

const services = [
  {
    title: "Metalurgia y Soldadura",
    icon: <Wrench className="h-8 w-8" />,
    items: [
      "Soldaduras en estructuras metálicas (Mig-Tig) Acero carbono, Inoxidable y Aluminio",
      "Fabricación de estructuras metálicas",
      "Cortinas Metálicas de Seguridad: Fabricación y Mantención",
      "Cierres perimetrales de seguridad (Rejas, Malla Acma, Panderetas, Consertinas)",
      "Bolardos de Seguridad (Fijos y Desmontables)"
    ],
    color: "bg-blue-50 text-blue-600",
    description: "Expertos en metalurgia para proyectos industriales y residenciales en todo Chile. Realizamos soldaduras de alta precisión y montajes estructurales."
  },
  {
    title: "Automatización y Portones",
    icon: <DoorOpen className="h-8 w-8" />,
    items: [
      "Fabricación de Portones (Corredera y Batiente)",
      "Puertas Automáticas: Reparación, Fabricación y Repuestos",
      "Automatización de Portones, Accesos y Barreras Automáticas",
      "Cortinas Metalicas Automaticas y Manuales",
      "Reparacion y Venta de Repuestos"
    ],
    color: "bg-orange-50 text-orange-600",
    description: "Líderes en automatización de portones eléctricos. Brindamos seguridad y comodidad con tecnología de punta para su hogar o condominio."
  },
  {
    title: "Obras Civiles y Reparaciones",
    icon: <Building2 className="h-8 w-8" />,
    items: [
      "Reparación estructural de tabiques, muros y cielos",
      "Reparación cubierta de techumbre",
      "Reparación de filtraciones en cubierta, tabiques y muros",
      "Reparación de pisos (Cerámicos y Vinílicos)",
      "Revestimiento epóxico (Pisos de sala de procesos y Cámaras Frigoríficas)",
      "Pintura en general"
    ],
    color: "bg-slate-50 text-slate-600",
    description: "Ejecutamos obras civiles menores y remodelaciones con acabados de alta calidad. Reparamos filtraciones y renovamos sus espacios."
  },
  {
    title: "Gasfitería e Instalaciones Eléctricas",
    icon: <Zap className="h-8 w-8" />,
    items: [
      "Gasfitería profesional (PPR, PVC, COBRE)",
      "Instalaciones eléctricas certificadas",
      "Termos eléctricos: Reparación y Mantención",
      "Destape de ductos de desagües con varilla",
      "Destape de tuberias con Hidrojet",
    ],
    color: "bg-yellow-50 text-yellow-600",
    description: "Servicios de emergencia en gasfitería y electricidad. Contamos con técnicos expertos para soluciones rápidas y garantizadas."
  },
  {
    title: "Mantención Industrial y Comercial",
    icon: <LayoutGrid className="h-8 w-8" />,
    items: [
      "Reparaciones lineales de cajas",
      "Mantención de check-out",
      "Mantención industrial integral",
      "Instalación de lamas de pvc"
    ],
    color: "bg-indigo-50 text-indigo-600",
    description: "Aliados estratégicos para la mantención de su negocio. Aseguramos la continuidad operacional de sus instalaciones comerciales."
  },
  {
    title: "Servicios de Terreno",
    icon: <Truck className="h-8 w-8" />,
    items: [
      "Poda, corte de pasto y desmalezado",
      "Retiro de escombros (Botadero Autorizado)"
    ],
    color: "bg-green-50 text-green-600"
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Nuestros Servicios
          </motion.h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales con los más altos estándares de calidad y seguridad para su hogar o empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
              <h3 className="font-display text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <ul className="space-y-2 mb-8">
                {service.items.map((item, i) => (
                  <li key={i} className="text-slate-600 flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                to={`/contacto?servicio=${encodeURIComponent(service.title)}`}
                className="text-orange-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Cotizar este servicio <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-slate-900 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="font-display text-3xl font-bold text-white mb-6">¿Necesitas una solución rápida y profesional?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contacto" 
                className="bg-orange-600 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-700 transition-colors"
              >
                Solicitar cotización
              </Link>
              <a href="https://wa.me/56994605684" className="bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                <MessageCircle className="h-5 w-5" /> Contactar por WhatsApp
              </a>
            </div>
          </div>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 blur-3xl rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full -ml-32 -mb-32"></div>
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

function MessageCircle({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}
