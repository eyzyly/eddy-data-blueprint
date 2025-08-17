
import React from 'react';
import { ContactForm } from './ContactForm';

export const Contact = () => {
  return (
    <section id="connect" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Ready to discuss your next project? I'd love to hear from you.
          </p>
        </div>
        
        <ContactForm />
      </div>
    </section>
  );
};
