import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Send } from 'lucide-react';
import { Logo } from './Logo';
import { sendEmailViaWeb3Forms } from '../src/emailService';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Send email to you (business owner)
      await sendEmailViaWeb3Forms(formData);
      
      // Success! Show confirmation to user
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Form Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In <span className="text-cyan-400">Touch</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Ready to transform your technology infrastructure? Send us a message and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              {submitted && (
                <div className="mb-6 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 text-center">
                  ✓ Thank you for your message! We've received your request and will be in touch within 24 hours.
                </div>
              )}
              
              {error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-center">
                  {error}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-slate-800">Select a service...</option>
                  <option value="cloud" className="bg-slate-800">Cloud Migration</option>
                  <option value="ai" className="bg-slate-800">AI Training & Consulting</option>
                  <option value="it-education" className="bg-slate-800">IT Education</option>
                  <option value="residential" className="bg-slate-800">Residential IT Support</option>
                  <option value="small-business" className="bg-slate-800">Small Business Solutions</option>
                  <option value="other" className="bg-slate-800">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project or how we can help..."
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

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