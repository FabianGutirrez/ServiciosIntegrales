import React from 'react';
import Hero from '../components/Hero';
import FeaturedServices from '../components/FeaturedServices';
import Benefits from '../components/Benefits';
import PortfolioPreview from '../components/PortfolioPreview';
import Experience from '../components/Experience';
import Clients from '../components/Clients';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <Benefits />
      <PortfolioPreview />
      <Experience />
      <Clients />
      <FinalCTA />
    </>
  );
}
