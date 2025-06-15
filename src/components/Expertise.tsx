
import React from 'react';

export const Expertise = () => {
  const expertiseAreas = [
    {
      title: 'Data Engineering',
      description: 'Building robust, scalable data pipelines and infrastructure that handle petabyte-scale data processing.',
      highlights: ['ETL/ELT Pipelines','Analytics Engineering','Cloud Architecture']
    },
    {
      title: 'Data Ops',
      description: 'Building automated data systems/process that reduce developer toil while maintaining data quality.',
      highlights: ['Github Actions', 'CI/CD']
    },
    {
      title: 'FinOps',
      description: 'Cloud Cost Optimization',
      highlights: ['FOCUS', 'Tagging', 'Workload Optimization']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Engineering solutions that turn{' '}
            <span className="text-blue-600">data into business value</span>
          </h2>
        </div>

        {/* Expertise Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="text-center p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{area.title}</h3>
              <p className="text-gray-600 mb-6">{area.description}</p>
              <ul className="space-y-2">
                {area.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-sm text-blue-600 font-medium">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
