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
    { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: FaFacebook, url: 'https://facebook.com', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter', color: 'hover:text-sky-500' },
  ];

  return (
    <footer className="bg-gradient-to-b from-dark-green to-dark-green/95 text-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brown/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cream/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 text-cream">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-cream/80 hover:text-cream transition-all duration-300 inline-block hover:translate-x-2 group"
                  >
                    <span className="group-hover:underline">{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 text-cream">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-cream/80 ${social.color} transition-all duration-300`}
                    whileHover={{ scale: 1.2, y: -4, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-7 h-7" />
                  </motion.a>
                );
              })}
            </div>
            <p className="text-cream/60 text-sm mt-6 leading-relaxed">
              Join our community and stay updated with our latest offerings and events.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-cream">Visit Us</h3>
            <div className="space-y-3 text-cream/80">
              <p className="flex items-start">
                <span className="font-semibold mr-2">📍</span>
                <span>123 Coffee Street<br />City, State 12345</span>
              </p>
              <p className="flex items-center">
                <span className="font-semibold mr-2">🕒</span>
                <span>Open Daily: 7AM - 8PM</span>
              </p>
              <p className="flex items-center">
                <span className="font-semibold mr-2">📞</span>
                <span>(555) 123-4567</span>
              </p>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-cream/70 text-sm">
              © {new Date().getFullYear()} Brew Haven Café. All rights reserved.
            </p>
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="text-cream/60 text-sm font-medium"
            >
              Made with ☕ by <span className="text-cream font-bold">Shazad Arshad</span>
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
