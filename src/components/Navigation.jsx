
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // FIX: Remove TypeScript type annotation
  const scrollToSection = (sectionId) => {
    if (!isHomePage) {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-light tracking-wider text-white hover:text-accent transition-colors">
            PHOTOGRAPHER
          </Link>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-accent transition-colors duration-300 tracking-wide"
            >
              HOME
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:text-accent transition-colors duration-300 tracking-wide"
            >
              GALLERY
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-accent transition-colors duration-300 tracking-wide"
            >
              ABOUT
            </button>
            <Link 
              to="/blog"
              className="text-white hover:text-accent transition-colors duration-300 tracking-wide"
            >
              BLOG
            </Link>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-accent transition-colors duration-300 tracking-wide"
            >
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
