
import React from 'react';
import { Button } from '@/components/ui/button';

export const Contact = () => {
  return (
    <section id="connect" className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Let's connect
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
            Email
          </Button>
        </div>
      </div>
    </section>
  );
};
