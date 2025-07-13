import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const TalksAndCommunity = () => {
  const talks = [
    {
      type: 'Talk',
      organization: 'MDS Fest 3.0',
      organizationUrl: 'https://mdsfest.com/',
      date: '2025-05-06',
      title: 'Data Meets Finops: Leveraging Analytics to Optimize Cloud Costs',
      description: 'Learn how to build effective FinOps teams, define appropriate metrics, and apply real-world strategies from Kinaxis—from VM rightsizing to cost optimization.',
      action: 'Watch',
      url: 'https://www.youtube.com/live/44qcGqOXtN0?si=ET9HAJxZJDpwgB2p'
    },
    {
      type: 'Talk',
      organization: 'Data Talks Club',
      organizationUrl: 'https://datatalks.club/',
      date: '2025-02-24',
      title: 'From Supply Chain to Digital Warehousing and FinOps',
      description: 'Sharing my journey into data engineering, FinOps, and optimizing costs across physical and digital infrastructure.',
      action: 'Watch',
      url: 'https://www.youtube.com/watch?v=7ePp6wuxM5s'
    }
  ];

  // Shared style for ADPList iframe containers
  const iframeContainerStyle: React.CSSProperties = {
    height: 496,
    boxShadow: 'rgba(142, 151, 158, 0.15) 0px 4px 19px 0px',
    borderRadius: 16,
    overflow: 'hidden',
    width: '100%',
    maxWidth: 650,
  };

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
            <Card key={talk.url} className="hover:shadow-lg transition-shadow duration-200 h-full flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex gap-2">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      talk.type === 'Talk' 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'bg-green-100 text-green-600'
                    }`}>
                      {talk.type}
                    </span>
                    {talk.organization && (
                      talk.organizationUrl ? (
                        <a
                          href={talk.organizationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-700 hover:underline"
                        >
                          {talk.organization}
                        </a>
                      ) : (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-700">
                          {talk.organization}
                        </span>
                      )
                    )}
                    {talk.date && (
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-700">
                        {talk.date}
                      </span>
                    )}
                  </div>
                </div>
                <CardTitle className="text-xl pb-2 min-h-[56px]">{talk.title}</CardTitle>
                <CardDescription>{talk.description}</CardDescription>
              </CardHeader>
              <div className="flex-1" />
              <CardContent className="pt-0 pb-4 px-6 flex items-end">
                {talk.action === 'Watch' && talk.url ? (
                  <Button asChild variant="outline" size="sm" className="mt-auto">
                    <a href={talk.url} target="_blank" rel="noopener noreferrer">
                      {talk.action}
                    </a>
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" className="mt-auto">
                    {talk.action}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        {/* ADPList iframes: Bookings and Mentor Reviews */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mt-16">
          <section
            style={iframeContainerStyle}
          >
            <iframe
              src="https://adplist.org/widgets/booking?src=eddy-zulkifly"
              title="ADPList Booking"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </section>
          <section
            style={{ ...iframeContainerStyle, padding: 16 }}
          >
            <iframe
              src="https://adplist.org/widgets/reviews?src=eddy-zulkifly"
              title="Reviews"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </section>
        </div>
      </div>
    </section>
  );
};
