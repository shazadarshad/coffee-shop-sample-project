import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
    { icon: FaFacebook, url: 'https://facebook.com', label: 'Facebook' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="bg-dark-green text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-cream/80 hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/80 hover:text-cream transition-colors duration-300"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Visit Us</h3>
            <p className="text-cream/80 mb-2">123 Coffee Street</p>
            <p className="text-cream/80 mb-2">City, State 12345</p>
            <p className="text-cream/80">Open Daily: 7AM - 8PM</p>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-8 text-center">
          <p className="text-cream/80 text-sm">
            © {new Date().getFullYear()} Brew Haven Café. All rights reserved.
          </p>
          <p className="text-cream/60 text-sm mt-2">
            Made by Shazad Arshad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

