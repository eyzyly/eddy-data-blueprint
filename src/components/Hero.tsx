
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const Hero = () => {
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
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                Hire Me
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <Avatar className="w-64 h-64 lg:w-80 lg:h-80">
              <AvatarImage src="/eddy-headshot.jpg" alt="Eddy Zulkifly" />
              <AvatarFallback>EZ</AvatarFallback>
            </Avatar>
            <h2 className="text-4xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Hi! I'm {" "}
              <span className="text-blue-600">Eddy</span>
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
