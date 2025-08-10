
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { CareerHighlights } from '@/components/CareerHighlights';
import { TalksAndCommunity } from '@/components/TalksAndCommunity';
import { Expertise } from '@/components/Expertise';
import { Certifications } from '@/components/Certifications';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <CareerHighlights />
      <TalksAndCommunity />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
