import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Database, Cloud, Code, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const DataEngineering = () => {
  const offerings = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Pipeline Development",
      description: "Build scalable ETL/ELT pipelines using modern tools like Apache Airflow, dbt, and cloud-native solutions."
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Data Architecture",
      description: "Design and implement cloud-first data architectures on AWS, GCP, and Azure with best practices."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Data Quality & Governance",
      description: "Implement robust data quality frameworks and governance policies to ensure reliable data."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-time Processing",
      description: "Build streaming data pipelines using Apache Kafka, Apache Spark, and modern streaming platforms."
    }
  ];

  const technologies = [
    "Apache Airflow", "dbt", "Apache Spark", "Apache Kafka", "Snowflake", 
    "BigQuery", "Redshift", "Python", "SQL", "Docker", "Kubernetes", "Terraform"
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
              Data Engineering Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your data infrastructure with scalable, reliable, and modern data engineering solutions. 
              From pipeline development to cloud architecture, I help organizations build robust data foundations 
              that power their analytics and machine learning initiatives.
            </p>
            
            <Button size="lg" asChild>
              <Link to="/#connect">Get Started</Link>
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What I Offer</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {offerings.map((offering, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {offering.icon}
                      </div>
                      <CardTitle className="text-xl">{offering.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {offering.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Technologies & Tools</h2>
            <p className="text-muted-foreground mb-8">
              I work with industry-leading technologies to deliver robust data solutions
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Data Infrastructure?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how I can help you build scalable, reliable data engineering solutions 
              that drive your business forward.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/#connect">Schedule a Consultation</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DataEngineering;