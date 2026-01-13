import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { Logo } from './Logo';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Logo className="w-10 h-10" />
              <span className="text-xl font-bold text-white">
                PerCon<span className="text-cyan-400">Solutions</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering businesses and homes with cutting-edge cloud, AI, and IT infrastructure solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors">Cloud Migration</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors">AI Training</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors">IT Education</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-400">
                <MapPin className="w-5 h-5 text-cyan-500 mt-1" />
                <span>Denver,Colorado <br/>Remote and Local Support</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Mail className="w-5 h-5 text-cyan-500" />
                <a href="mailto:info@perconsolutions.com" className="hover:text-white transition-colors">info@perconsolutions.com</a>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Phone className="w-5 h-5 text-cyan-500" />
                <span>+1 (720) 821-5226</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Stay Connected</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-all"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-all"
              >
                <Github size={20} />
              </a>
            </div>
            <button className="w-full px-4 py-2 bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-md transition-all text-sm font-medium">
              Schedule Consultation
            </button>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} PerCon Solutions. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
             {/* Decorative element */}
             <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-cyan-900"></div>
                <div className="w-2 h-2 rounded-full bg-cyan-700"></div>
                <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};