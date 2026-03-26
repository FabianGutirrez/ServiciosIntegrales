import React from 'react';
import PageHeader from '../components/PageHeader';
import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title="Nuestros Servicios" 
        subtitle="Ofrecemos soluciones integrales con los más altos estándares de calidad y seguridad para su hogar o empresa."
      />
      <Services />
    </>
  );
}
