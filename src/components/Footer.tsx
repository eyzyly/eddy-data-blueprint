
import React from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const footerSections = [
    {
      title: 'Navigate',
      links: ['Overview', 'Bio', 'Guidance', 'Articles', 'Talks', 'Reach']
    },
    {
      title: 'Expertise',
      links: ['Skills', 'Insights', 'Planning', 'Teamwork', 'Results']
    },
    {
      title: 'Community',
      links: ['Links', 'Updates', 'Sessions', 'Forum', 'Badges', 'Help', 'Network']
    }
  ];

  const socialLinks = [
    { name: 'Email', href: 'mailto:eddy@example.com', icon: Mail },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/eddyzulkifly/' },
    { name: 'GitHub', href: 'https://github.com/eyzyly' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Eddy Personal Site</h3>
            <p className="text-gray-400 mb-6">
              Driving business growth through data strategy and technical leadership.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Subscribe for updates</h4>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Enter email"
                  className="px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm flex-1"
                />
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="col-span-1">
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © 2024 Eddy Personal Site. All rights reserved.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {social.icon && <social.icon className="h-5 w-5" />}
                {!social.icon && <span className="text-sm">{social.name}</span>}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
