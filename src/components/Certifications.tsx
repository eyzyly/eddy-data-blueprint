
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const Certifications = () => {
  const certifications = [
    {
      title: 'Google Cloud Professional',
      description: 'Data Engineer/Cloud Architect',
      logo: 'GCP',
      color: 'bg-blue-500'
    },
    {
      title: 'FinOps Certified Practitioner',
      description: 'Cloud Cost Optimization',
      logo: 'Linux',
      color: 'bg-blue-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Professional Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Maintaining industry-leading certifications to stay current with best practices and emerging technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 ${cert.color} rounded-lg flex items-center justify-center text-white font-bold`}>
                    {cert.logo}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
