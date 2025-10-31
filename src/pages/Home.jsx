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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Freshly Brewed Happiness
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the perfect blend of tradition and flavor at Brew Haven Café
          </p>
          <Link to="/menu">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
            >
              Explore Menu
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brown mb-4">
              Featured Products
            </h2>
            <p className="text-brown/70 text-lg max-w-2xl mx-auto">
              Discover our signature drinks crafted with love and the finest ingredients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link to="/menu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                View Full Menu
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

