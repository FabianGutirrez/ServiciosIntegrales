import React from 'react';
import PageHeader from '../components/PageHeader';
import Projects from '../components/Projects';

export default function PortfolioPage() {
  return (
    <>
      <PageHeader 
        title="Portafolio de Proyectos" 
        subtitle="Una muestra de nuestro compromiso con la calidad y la excelencia técnica en cada obra realizada."
      />
      <Projects />
    </>
  );
}
