import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BarChart, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Analytics = () => {
  const services = [
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Business Intelligence Strategy",
      description: "Develop comprehensive BI strategies aligned with your business objectives and create actionable dashboards."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "KPI & Metrics Framework",
      description: "Define and implement key performance indicators that drive meaningful business decisions."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Advanced Analytics",
      description: "Leverage statistical analysis, predictive modeling, and machine learning for deeper insights."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Data Storytelling",
      description: "Transform complex data into compelling narratives that drive executive decision-making."
    }
  ];

  const tools = [
    "Tableau", "Power BI", "Looker", "Python", "R", "SQL", 
    "Google Analytics", "Mixpanel", "Amplitude", "dbt", "Jupyter", "Excel"
  ];

  const industries = [
    "E-commerce", "SaaS", "Financial Services", "Healthcare", 
    "Manufacturing", "Retail", "Technology", "Education"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Analytics Consulting
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Turn your data into strategic advantage. I help organizations unlock the full potential 
              of their data through advanced analytics, business intelligence, and data-driven insights 
              that drive measurable business outcomes.
            </p>
            
            <Button size="lg" asChild>
              <Link to="/#connect">Start Your Analytics Journey</Link>
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Consulting Services</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Industries */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Tools */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6">Analytics Tools & Platforms</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {tools.map((tool, index) => (
                    <Badge key={index} variant="outline" className="px-3 py-2">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Industries */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6">Industry Experience</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {industries.map((industry, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-2">
                      {industry}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">My Approach</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Discovery & Assessment</h3>
                  <p className="text-muted-foreground">
                    Understand your business goals, current data landscape, and analytics maturity to identify opportunities.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Strategy Development</h3>
                  <p className="text-muted-foreground">
                    Create a comprehensive analytics roadmap with clear priorities, timelines, and success metrics.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Implementation & Optimization</h3>
                  <p className="text-muted-foreground">
                    Execute the strategy with iterative improvements and continuous optimization based on results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Unlock Your Data's Potential?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's work together to turn your data into actionable insights that drive real business value.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/#connect">Book a Strategy Session</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Analytics;