import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, BookOpen, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Training = () => {
  const programs = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Data Engineering Fundamentals",
      description: "Comprehensive training on data pipelines, ETL processes, and modern data stack technologies.",
      duration: "3-5 days",
      audience: "Data professionals, Software engineers"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Analytics Leadership Workshop",
      description: "Strategic training for executives and managers on building data-driven organizations.",
      duration: "2 days",
      audience: "C-suite, VPs, Directors"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "SQL & Analytics Bootcamp",
      description: "Hands-on training for business analysts and data professionals on advanced SQL and analytics.",
      duration: "4 days",
      audience: "Analysts, Business users"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Custom Team Training",
      description: "Tailored training programs designed specifically for your team's needs and technology stack.",
      duration: "Flexible",
      audience: "Your team"
    }
  ];

  const topics = [
    "Data Engineering", "SQL & Analytics", "Cloud Platforms", "Business Intelligence",
    "Data Governance", "Machine Learning", "Python for Data", "Data Visualization",
    "Agile Analytics", "Data Strategy", "Modern Data Stack", "Leadership in Data"
  ];

  const formats = [
    {
      title: "On-site Workshops",
      description: "Intensive, hands-on sessions at your location"
    },
    {
      title: "Virtual Training",
      description: "Interactive online sessions with global reach"
    },
    {
      title: "Hybrid Programs",
      description: "Combination of virtual and in-person delivery"
    },
    {
      title: "Mentoring & Coaching",
      description: "One-on-one guidance for individuals and teams"
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
              Training & Workshops
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Empower your team with cutting-edge data skills. I offer comprehensive training programs 
              that blend theory with hands-on practice, helping organizations build internal data capabilities 
              and drive transformation from within.
            </p>
            
            <Button size="lg" asChild>
              <Link to="/#connect">Explore Training Options</Link>
            </Button>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Training Programs</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {program.icon}
                      </div>
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                    </div>
                    <div className="flex gap-2 text-sm text-muted-foreground">
                      <span>📅 {program.duration}</span>
                      <span>•</span>
                      <span>👥 {program.audience}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {program.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Topics Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Training Topics</h2>
            <p className="text-muted-foreground mb-8">
              Comprehensive curriculum covering the full spectrum of modern data practices
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {topics.map((topic, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Formats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Training Formats</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {formats.map((format, index) => (
                <Card key={index} className="text-center h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{format.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{format.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose My Training?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Real-World Experience</h3>
                <p className="text-muted-foreground">
                  Training content is based on actual industry challenges and solutions from years of hands-on experience.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Practical Learning</h3>
                <p className="text-muted-foreground">
                  Every session includes hands-on exercises and real datasets to ensure practical skill development.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Customized Content</h3>
                <p className="text-muted-foreground">
                  Training programs are tailored to your specific technology stack, use cases, and skill levels.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  Continued guidance and mentoring beyond the training sessions to ensure successful implementation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Upskill Your Team?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's design a training program that perfectly fits your team's needs and accelerates your data journey.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/#connect">Discuss Training Needs</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Training;