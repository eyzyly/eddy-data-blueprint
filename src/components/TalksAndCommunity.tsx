
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const TalksAndCommunity = () => {
  const talks = [
    {
      type: 'Talk',
      title: 'Enabling analytics at scale',
      readTime: '12 min read',
      description: 'How to build data infrastructure that grows with your business',
      action: 'Watch'
    },
    {
      type: 'Community',
      title: 'Mentoring for data professionals',
      readTime: '8 min read',
      description: 'Building the next generation of data leaders through mentorship',
      action: 'Learn'
    },
    {
      type: 'Talk',
      title: 'Communicating insights with impact',
      readTime: '10 min read',
      description: 'Turning complex data into compelling business narratives',
      action: 'Details'
    },
    {
      type: 'Community',
      title: 'Fostering inclusive analytics groups',
      readTime: '7 min read',
      description: 'Creating diverse and welcoming data science communities',
      action: 'Learn'
    }
  ];

  return (
    <section id="community" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-4">
            Talks and Community
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Sharing knowledge and building community
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {talks.map((talk, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    talk.type === 'Talk' 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'bg-green-100 text-green-600'
                  }`}>
                    {talk.type}
                  </span>
                  <span className="text-sm text-gray-500">{talk.readTime}</span>
                </div>
                <CardTitle className="text-xl">{talk.title}</CardTitle>
                <CardDescription>{talk.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">
                  {talk.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
