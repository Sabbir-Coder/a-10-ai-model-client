import { Link } from 'react-router';
import { 
  Facebook,    
  Instagram, 
  Mail 
} from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";

import { MdOutlineModelTraining } from "react-icons/md";



const Footer = () => {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-linear-to-r from-[#113686] to-[#3072ff] py-8 px-4  rounded-lg mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <div className="flex items-center space-x-2 text-white">
         <MdOutlineModelTraining size={25}/>
      <span className="text-xl font-bold text-blue-300 dark:text-gray-200">AI Models</span>
    </div>
          <ul className="space-y-2 mt-4">
            <li><Link to="/all-models" className="text-gray-300 dark:text-gray-200 hover:text-blue-400">All Models</Link></li>
            <li><Link to="/add-model" className="text-gray-300 dark:text-gray-200 hover:text-blue-400">Add Model</Link></li>
            <li><Link to="/profile" className="text-gray-300 dark:text-gray-200 hover:text-blue-400">Profile</Link></li>
            <li><Link to="/auth/login" className="text-gray-300 dark:text-gray-200 hover:text-blue-400">Login</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-200">Resources</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-300 dark:text-gray-200 hover:text-blue-400">Learning Blog</Link></li>
            <li><Link to="/" className="text-gray-300 dark:text-gray-200 hover:text-blue-400">Guides</Link></li>
            <li><Link to="/" className="text-gray-300 dark:text-gray-200 hover:text-blue-400">Poly Tips</Link></li>
            <li><Link to="/resources" className="text-gray-300 dark:text-gray-200 hover:text-blue-400">Resources</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-200">Community</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-300 dark:text-gray-200 hover:text-blue-400">Discussion Forums</Link></li>
            <li><Link to="/" className="text-gray-300 dark:text-gray-200 hover:text-blue-400">Study Groups</Link></li>
            <li><Link to="/" className="text-gray-300 dark:text-gray-200 hover:text-blue-400">Events & Workshops</Link></li>
            <li><Link to="/" className="text-gray-300 dark:text-gray-200 hover:text-blue-400">Leaderboard</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-200">Connect With Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 dark:text-gray-200 hover:text-blue-400">
              <Facebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 dark:text-gray-200 hover:text-blue-400">
              <FaXTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 dark:text-gray-200 hover:text-blue-400">
              <Instagram  size={24} />
            </a>
          
          </div>
          <div>
            <a 
              href="mailto:support@aimodel.com" 
              className="flex items-center text-gray-300 dark:text-gray-200 hover:text-blue-400"
            >
              <Mail size={18} className="mr-2" /> support@aimodel.com
            </a>
          </div>
        </div>
      </div>


      <div className="border-t lg:mb-0 md:mb-0 mb-20 border-[#3072FF] mt-8 pt-4 text-center">
        <p className="text-sm text-gray-300 dark:text-gray-200">
          © {currentYear} AI Model Learn. All Rights Reserved.
          <span className="ml-4">
            <Link to="/" className="hover:text-blue-400 mr-3">Privacy Policy</Link>
            <Link to="/" className="hover:text-blue-400">Terms of Service</Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;