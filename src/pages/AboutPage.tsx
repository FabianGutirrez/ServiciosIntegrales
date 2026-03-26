import React from 'react';
import PageHeader from '../components/PageHeader';
import About from '../components/About';

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="Sobre Nosotros" 
        subtitle="Somos una empresa dedicada a entregar soluciones integrales en construcción, mantención y servicios industriales."
      />
      <About />
    </>
  );
}
