import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import TestimonialCarousel from '../components/TestimonialCarousel';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Espresso Blend',
      price: '4.99',
      description: 'Rich and bold espresso with notes of dark chocolate and caramel.',
      image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&h=500&fit=crop',
      category: 'coffee',
    },
    {
      id: 2,
      name: 'Cappuccino Classic',
      price: '5.49',
      description: 'Perfectly balanced with steamed milk and a beautiful foam layer.',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&h=500&fit=crop',
      category: 'coffee',
    },
    {
      id: 3,
      name: 'Iced Latte',
      price: '5.99',
      description: 'Smooth and refreshing with a hint of vanilla.',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&h=500&fit=crop',
      category: 'coffee',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-16 md:-mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 gradient-overlay"></div>
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&h=1080&fit=crop)',
            }}
          />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-20 left-10 w-32 h-32 bg-brown/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute bottom-20 right-10 w-40 h-40 bg-dark-green/10 rounded-full blur-3xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 drop-shadow-2xl leading-tight">
              Freshly Brewed
              <br />
              <span className="text-gradient bg-gradient-to-r from-cream via-beige to-cream bg-clip-text text-transparent">
                Happiness
              </span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-10 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-lg"
          >
            Experience the perfect blend of tradition and flavor at Brew Haven Café
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/menu">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-10 py-5 text-lg font-bold shadow-2xl"
              >
                Explore Menu →
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding bg-gradient-to-b from-cream via-cream to-beige/20">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="text-sm md:text-base font-bold text-dark-green uppercase tracking-widest">
                Our Signature
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brown mb-6">
              Featured Products
            </h2>
            <p className="text-brown/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Discover our signature drinks crafted with love and the finest ingredients,
              each cup tells a story of passion and perfection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Link to="/menu">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-10 py-5"
              >
                View Full Menu →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <TestimonialCarousel />
    </>
  );
};

export default Home;
