import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Mail
} from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F0716] border-t border-white/5 py-12 px-6 mt-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Logo />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Empowering the next generation of AI innovation. Manage, share, and discover cutting-edge neural models with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-white font-display">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="text-gray-400 hover:text-purple-400 transition-colors text-sm font-medium">Home</Link></li>
            <li><Link to="/all-models" className="text-gray-400 hover:text-purple-400 transition-colors text-sm font-medium">All Models</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors text-sm font-medium">Contact Support</Link></li>
            <li><Link to="/dashboard" className="text-gray-400 hover:text-purple-400 transition-colors text-sm font-medium">Dashboard</Link></li>
          </ul>
        </div>

        {/* Connect Section */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-white font-display">Connect With Us</h3>
          <div className="flex space-x-4 mb-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white transition-all">
              <FaXTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-all">
              <Instagram size={20} />
            </a>
          </div>
          <div>
            <a
              href="mailto:support@aimodel.com"
              className="flex items-center text-gray-400 hover:text-purple-400 transition-colors text-sm font-medium"
            >
              <Mail size={18} className="mr-2" /> support@aimodel.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-xs text-gray-500">
          © {currentYear} AI Model Manager. All Rights Reserved.
        </p>
        <div className="flex space-x-6">
          <Link to="#" className="text-xs text-gray-500 hover:text-purple-400 transition-colors">Privacy Policy</Link>
          <Link to="#" className="text-xs text-gray-500 hover:text-purple-400 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;