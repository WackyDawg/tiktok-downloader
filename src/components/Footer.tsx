import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Twitter, Instagram, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/80 text-white pt-12 pb-6 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Logo />
              <span className="font-bold text-xl">TTGrab</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Download your favorite TikTok videos easily and quickly with our free online tool.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Twitter size={20} />} href="https://twitter.com/JNwadinobi26328" />
              {/* <SocialIcon icon={<Instagram size={20} />} href="https://instagram.com" /> */}
              <SocialIcon icon={<Facebook size={20} />} href="https://www.facebook.com/jules.nwadinobi/" />
              <SocialIcon icon={<Mail size={20} />} href="mailto:contact@tikdown.com" />
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/contact" label="Contact Us" />
              <FooterLink to="/faqs" label="FAQs" />
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <FooterLink to="/privacy" label="Privacy Policy" />
              {/* <FooterLink to="/terms" label="Terms of Service" />
              <FooterLink to="/disclaimer" label="Disclaimer" /> */}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500"
              />
              <button 
                type="submit"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-white font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; 2023-{new Date().getFullYear()} TTGrab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, href }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300"
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  to: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, label }) => {
  return (
    <li>
      <Link 
        to={to} 
        className="text-gray-400 hover:text-white transition-colors duration-200"
      >
        {label}
      </Link>
    </li>
  );
};

export default Footer;