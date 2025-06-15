
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// Declare Calendly on window object
declare global {
  interface Window {
    Calendly: any;
  }
}

export const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [calendlyLoaded, setCalendlyLoaded] = React.useState(false);
  const [calendlyError, setCalendlyError] = React.useState(false);

  // Function to wait for Calendly script to load
  const waitForCalendly = () => {
    return new Promise((resolve) => {
      const checkCalendly = () => {
        console.log('Checking for Calendly...', !!window.Calendly);
        if (window.Calendly) {
          resolve(true);
        } else {
          setTimeout(checkCalendly, 100);
        }
      };
      checkCalendly();
    });
  };

  useEffect(() => {
    if (isDialogOpen) {
      console.log('Dialog opened, initializing Calendly...');
      
      const initializeCalendly = async () => {
        try {
          // Wait for Calendly to be available
          await waitForCalendly();
          
          // Wait a bit more for DOM to be ready
          setTimeout(() => {
            const widgetElement = document.querySelector('.calendly-inline-widget');
            console.log('Widget element found:', !!widgetElement);
            
            if (widgetElement && window.Calendly) {
              console.log('Initializing Calendly widget...');
              window.Calendly.initInlineWidget({
                url: 'https://calendly.com/eddyarief/30min',
                parentElement: widgetElement,
                prefill: {},
                utm: {}
              });
              setCalendlyLoaded(true);
            } else {
              console.error('Calendly widget element not found or Calendly not loaded');
              setCalendlyError(true);
            }
          }, 200);
          
        } catch (error) {
          console.error('Error initializing Calendly:', error);
          setCalendlyError(true);
        }
      };

      initializeCalendly();
    }
  }, [isDialogOpen]);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left lg:text-left">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Drive business value with scalable{" "}
              <span className="text-blue-600">Data Architecture</span> and{" "}
              <span className="text-blue-600">FinOps</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl">
            Building trusted data platforms with cloud cost visibility
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3"
                asChild
              >
                <a 
                  href="https://github.com/eyzyly" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                <Github/>
                  GitHub
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3"
                asChild
              >
                <a 
                  href="https://www.linkedin.com/in/eddyzulkifly/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin/>
                  LinkedIn
                </a>
              </Button>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                    Schedule a call
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>Schedule a Meeting</DialogTitle>
                  </DialogHeader>
                  {calendlyError ? (
                    <div className="text-center py-8">
                      <p className="text-gray-600 mb-4">Having trouble loading the calendar? No problem!</p>
                      <Button asChild>
                        <a 
                          href="https://calendly.com/eddyarief/30min" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          Open Calendly in New Tab
                        </a>
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div 
                        className="calendly-inline-widget" 
                        data-url="https://calendly.com/eddyarief/30min" 
                        style={{minWidth: '320px', height: '700px'}}
                      ></div>
                      {!calendlyLoaded && (
                        <div className="text-center text-gray-500 text-sm mt-2">
                          Loading calendar...
                        </div>
                      )}
                    </>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <Avatar className="w-64 h-64 lg:w-80 lg:h-80">
              <AvatarImage src="/eddy-headshot.jpg" alt="Eddy Zulkifly" />
              <AvatarFallback>EZ</AvatarFallback>
            </Avatar>
            <h2 className="text-4xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Hi! I'm {" "}
              <span className="text-blue-600">Eddy Z</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ArrowDown className="h-6 w-6 text-gray-400 animate-bounce" />
      </div>
    </section>
  );
};
