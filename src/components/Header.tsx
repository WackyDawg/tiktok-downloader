import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Logo />
            <span className="font-bold text-xl text-white">TTGrab</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" label="Home" />
            <NavLink to="/about" label="About" />
            <NavLink to="/contact" label="Contact" />
            <NavLink to="/faqs" label="FAQs" />
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink to="/" label="Home" mobile />
            <NavLink to="/about" label="About" mobile />
            <NavLink to="/contact" label="Contact" mobile />
            <NavLink to="/faqs" label="FAQs" mobile />
          </div>
        </nav>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  mobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, mobile }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`${
        mobile ? 'block py-2' : ''
      } font-medium transition-all duration-200 relative ${
        isActive 
          ? 'text-white' 
          : 'text-gray-300 hover:text-white'
      } group`}
    >
      {label}
      <span 
        className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
          isActive ? 'scale-x-100' : ''
        }`}
      />
    </Link>
  );
};

export default Header;