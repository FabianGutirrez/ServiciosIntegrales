import React from 'react';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contáctanos" 
        subtitle="Estamos listos para ayudarte con tu próximo proyecto. Escríbenos o llámanos directamente."
      />
      <Contact />
    </>
  );
}
