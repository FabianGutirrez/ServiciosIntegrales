import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, FileText } from 'lucide-react';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Estructuras y Soldaduras',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  useEffect(() => {
    const serviceParam = searchParams.get('servicio');
    if (serviceParam) {
      setFormData(prev => ({ ...prev, service: serviceParam }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setResponseMsg(data.message);
        setFormData({ name: '', phone: '', service: 'Estructuras y Soldaduras', message: '' });
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      setStatus('error');
      setResponseMsg('Hubo un problema al enviar tu mensaje. Por favor intenta de nuevo.');
    }
  };

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Solicitud de <span className="text-orange-600">Cotización</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Complete el siguiente formulario para recibir una propuesta técnica detallada. Nos comprometemos a responder en menos de 24 horas hábiles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-slate-50 p-8 rounded-3xl space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Teléfono Directo</h4>
                  <p className="text-slate-600">+56 9 9460 5684</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Correo Electrónico</h4>
                  <a 
                    href="mailto:fg.serviciosintegrales@hotmail.es?subject=Solicitud de Cotización"
                    className="text-slate-600 hover:text-orange-600 transition-colors break-all"
                  >
                    fg.serviciosintegrales@hotmail.es
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Cobertura</h4>
                  <p className="text-slate-600">Servicio a nivel nacional</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-3xl border border-green-100">
              <h4 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                <MessageCircle className="h-5 w-5" /> Atención Inmediata
              </h4>
              <p className="text-green-800 text-sm mb-6">
                Si requiere asistencia urgente o una consulta rápida, puede contactarnos vía WhatsApp.
              </p>
              <a
                href="https://wa.me/56994605684"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-4 rounded-2xl font-bold hover:bg-green-700 transition-all shadow-md"
              >
                WhatsApp Corporativo
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-slate-50 border border-slate-200 p-12 rounded-3xl text-center space-y-6"
              >
                <div className="w-20 h-20 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Solicitud Recibida</h3>
                <p className="text-slate-600 text-lg">
                  Gracias por su interés. Hemos recibido su solicitud de cotización y un especialista se pondrá en contacto con usted a la brevedad.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all"
                >
                  Enviar otra solicitud
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-slate-100 p-8 md:p-12 rounded-3xl shadow-xl space-y-6">
                <div className="flex items-center gap-3 mb-4 text-slate-400">
                  <FileText className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-wider">Formulario de Requerimientos</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Nombre o Empresa</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej: Constructora ABC / Juan Pérez"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Teléfono de Contacto</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ej: +56 9 1234 5678"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Servicio de Interés</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all appearance-none bg-white"
                  >
                    <option>Metalurgia y Soldadura</option>
                    <option>Portones y Automatización</option>
                    <option>Construcción y Terminaciones</option>
                    <option>Instalaciones Eléctricas/Gas</option>
                    <option>Mantención Industrial</option>
                    <option>Obras Civiles</option>
                    <option>Otro requerimiento</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Descripción del Proyecto</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Por favor, detalle las medidas, materiales o ubicación del proyecto para una mejor evaluación..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm font-medium">{responseMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-orange-200"
                >
                  {status === 'loading' ? (
                    <span className="animate-pulse">Procesando solicitud...</span>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Enviar Solicitud de Cotización
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-slate-400 mt-4">
                  Al enviar este formulario, usted acepta ser contactado para fines de cotización y asesoría técnica.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
