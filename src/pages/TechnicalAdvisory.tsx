import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Brain, Shield, Rocket, Users2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechnicalAdvisory = () => {
  const services = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Technical Strategy & Architecture",
      description: "Design scalable data architectures and technical roadmaps aligned with business objectives."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Technology Assessment & Selection",
      description: "Evaluate and recommend the right technology stack for your data infrastructure needs."
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Implementation Guidance",
      description: "Provide hands-on technical leadership during critical implementation phases."
    },
    {
      icon: <Users2 className="h-6 w-6" />,
      title: "Team Building & Mentoring",
      description: "Help build high-performing data teams and mentor technical talent."
    }
  ];

  const expertise = [
    "Data Architecture", "Cloud Strategy", "Technology Selection", "Team Leadership",
    "Code Reviews", "Performance Optimization", "Security & Compliance", "DevOps for Data",
    "ML Engineering", "Data Governance", "Technical Due Diligence", "Vendor Evaluation"
  ];

  const engagements = [
    {
      title: "Strategic Advisory",
      description: "Ongoing strategic guidance for data and technology decisions",
      duration: "3-12 months"
    },
    {
      title: "Technical Due Diligence",
      description: "Assessment of technical capabilities for M&A or investment decisions",
      duration: "2-4 weeks"
    },
    {
      title: "Architecture Review",
      description: "Comprehensive review of existing systems and improvement recommendations",
      duration: "4-8 weeks"
    },
    {
      title: "Interim Technical Leadership",
      description: "Temporary technical leadership during transitions or critical projects",
      duration: "3-9 months"
    }
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
              Technical Advisory
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Strategic technical guidance for complex data challenges. Whether you need architectural 
              expertise, technology strategy, or interim technical leadership, I provide the senior-level 
              guidance to navigate critical technical decisions and accelerate your data initiatives.
            </p>
            
            <Button size="lg" asChild>
              <Link to="/#connect">Schedule Advisory Call</Link>
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Advisory Services</h2>
            
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

        {/* Expertise Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Areas of Expertise</h2>
            <p className="text-muted-foreground mb-8">
              Deep technical knowledge across the modern data ecosystem
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {expertise.map((area, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                  {area}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Engagement Types</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {engagements.map((engagement, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{engagement.title}</CardTitle>
                    <div className="text-sm text-muted-foreground">
                      ⏱️ Typical duration: {engagement.duration}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {engagement.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Technical Advisory?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Accelerate Decision Making</h3>
                  <p className="text-muted-foreground">
                    Leverage years of experience to avoid common pitfalls and make informed technical decisions faster.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Risk Mitigation</h3>
                  <p className="text-muted-foreground">
                    Identify potential issues early and implement proven strategies to minimize technical and business risks.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Strategic Perspective</h3>
                  <p className="text-muted-foreground">
                    Get an external perspective on your technical challenges from someone who has solved similar problems.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Cost Optimization</h3>
                  <p className="text-muted-foreground">
                    Optimize your technology investments and avoid expensive mistakes through strategic technical guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Advisory Process</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Assessment</h3>
                  <p className="text-muted-foreground">
                    Deep dive into your current technical landscape, challenges, and strategic objectives.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Strategic Planning</h3>
                  <p className="text-muted-foreground">
                    Develop recommendations and roadmaps aligned with your business goals and technical constraints.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Implementation Support</h3>
                  <p className="text-muted-foreground">
                    Provide ongoing guidance and course corrections as you execute the technical strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need Strategic Technical Guidance?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your technical challenges and explore how strategic advisory can accelerate your success.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/#connect">Book Discovery Call</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TechnicalAdvisory;