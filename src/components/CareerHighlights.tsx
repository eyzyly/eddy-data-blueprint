
import React from 'react';
import { Button } from '@/components/ui/button';

export const CareerHighlights = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-4">
            Career Highlights
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            From Analyst to Senior Staff Engineer: Practitioner to Builder 
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            I design cost-efficient data platforms and empower data teams to scale them effectively
            through training and mentorship.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
            <div className="text-gray-600">Teams</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$1M+</div>
            <div className="text-gray-600">Optimizations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Mentored</div>
          </div>
        </div>
      </div>
    </section>
  );
};
