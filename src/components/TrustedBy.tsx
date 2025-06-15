
import React from 'react';

export const TrustedBy = () => {
  const trustedByData = [
    {
      name: 'Kinaxis',
      label: 'Senior Staff Engineer – Data Platform',
      link: 'https://www.kinaxis.com/',
      logo: '/logos/kinaxis.svg'
    },
    {
      name: 'The Home Depot',
      label: 'Data Engineer – Retail Analytics Ops',
      link: 'https://www.homedepot.ca/',
      logo: '/logos/home-depot.svg'
    },
    {
      name: 'Uplimit',
      label: 'Instructor, Data Infra and Cost Optimization',
      link: 'https://www.uplimit.com/',
      logo: '/logos/uplimit.svg'
    },
    {
      name: 'University of Toronto',
      label: 'B.A.Sc. Industrial Engineering',
      link: 'https://www.engineering.utoronto.ca/',
      logo: '/logos/uoft.svg'
    },
    {
      name: 'Georgia Tech',
      label: 'M.S. in Analytics (In Progress or Completed)',
      link: 'https://www.gatech.edu/',
      logo: '/logos/gatech.svg'
    },
    {
      name: 'ADPList',
      label: 'Top 100 Mentor in Data Engineering',
      link: 'https://adplist.org/',
      logo: '/logos/adplist.svg'
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-sm font-medium text-gray-500 mb-2">
            Trusted by industry leaders and learning communities
          </h2>
          <p className="text-xs text-gray-400">
            Where I've worked, taught, and mentored
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {trustedByData.map((company, index) => (
            <a
              key={index}
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              title={`${company.name} – ${company.label}`}
              className="group transition-all duration-300"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-10 w-auto opacity-80 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  // Fallback to placeholder if logo doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.svg';
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
