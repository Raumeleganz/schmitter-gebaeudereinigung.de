"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/leistungen", label: "Leistungen" },
    { href: "/einsatzgebiete", label: "Einsatzgebiete" },
    { href: "/ueber-uns", label: "Über uns" },
    { href: "/kontakt", label: "Kontakt" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50' 
        : 'bg-white/98 backdrop-blur-md shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - Premium Design */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative w-14 h-14 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-2xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-500 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div>
              <div className="text-2xl font-black tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                ABED
              </div>
              <div className="text-xs font-semibold text-gray-500 tracking-wider uppercase">
                Gebäudereinigung
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Ultra Premium */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative px-5 py-2 text-base font-semibold text-gray-700 hover:text-blue-600 transition-all duration-300"
              >
                <span className="relative z-10">{link.label}</span>
                
                {/* Elegant underline */}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </a>
            ))}
          </div>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center space-x-4">
            
            {/* Ultra Premium CTA Button */}
            <a
              href="/kontakt"
              className="hidden sm:inline-flex items-center gap-2 relative group overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">Jetzt anfragen</span>
              <svg 
                className="w-4 h-4 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700 rounded-xl"></div>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5 flex flex-col justify-center">
                <span className={`absolute w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                }`}></span>
                <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Premium Design */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: 'fadeInUp 0.3s ease-out forwards'
                  }}
                >
                  {link.label}
                </a>
              ))}
              
              <div className="pt-4 px-4">
                <a
                  href="/kontakt"
                  onClick={() => setMobileMenuOpen(false)}
                  className="relative group overflow-hidden inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-xl font-bold shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300"
                >
                  <span className="relative z-10">Jetzt anfragen</span>
                  <svg className="w-4 h-4 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700 rounded-xl"></div>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}
