import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const menuItems = [
    // Coffee
    {
      id: 1,
      name: 'Espresso',
      price: '3.99',
      description: 'Rich and bold single shot espresso.',
      image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&h=500&fit=crop',
      category: 'coffee',
    },
    {
      id: 2,
      name: 'Americano',
      price: '4.49',
      description: 'Espresso with hot water for a smooth taste.',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&h=500&fit=crop',
      category: 'coffee',
    },
    {
      id: 3,
      name: 'Cappuccino',
      price: '5.49',
      description: 'Espresso with steamed milk and foam.',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&h=500&fit=crop',
      category: 'coffee',
    },
    {
      id: 4,
      name: 'Latte',
      price: '5.99',
      description: 'Smooth espresso with steamed milk.',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&h=500&fit=crop',
      category: 'coffee',
    },
    {
      id: 5,
      name: 'Mocha',
      price: '6.49',
      description: 'Espresso with chocolate and steamed milk.',
      image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=500&h=500&fit=crop',
      category: 'coffee',
    },
    {
      id: 6,
      name: 'Flat White',
      price: '5.99',
      description: 'Double espresso with microfoam milk.',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=500&fit=crop',
      category: 'coffee',
    },
    // Bakery
    {
      id: 7,
      name: 'Croissant',
      price: '4.99',
      description: 'Buttery and flaky, baked fresh daily.',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&h=500&fit=crop',
      category: 'bakery',
    },
    {
      id: 8,
      name: 'Blueberry Muffin',
      price: '4.49',
      description: 'Moist muffin packed with fresh blueberries.',
      image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=500&h=500&fit=crop',
      category: 'bakery',
    },
    {
      id: 9,
      name: 'Chocolate Chip Cookie',
      price: '3.99',
      description: 'Classic cookie with premium chocolate chips.',
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&h=500&fit=crop',
      category: 'bakery',
    },
    {
      id: 10,
      name: 'Almond Croissant',
      price: '5.49',
      description: 'Flaky croissant filled with almond paste.',
      image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=500&h=500&fit=crop',
      category: 'bakery',
    },
    {
      id: 11,
      name: 'Scone',
      price: '4.99',
      description: 'Traditional British scone with jam and cream.',
      image: 'https://images.unsplash.com/photo-1612929633736-8c8c00f561b7?w=500&h=500&fit=crop',
      category: 'bakery',
    },
    // Specials
    {
      id: 12,
      name: 'Caramel Macchiato',
      price: '6.99',
      description: 'Our signature special with caramel drizzle.',
      image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=500&h=500&fit=crop',
      category: 'specials',
    },
    {
      id: 13,
      name: 'Iced Matcha Latte',
      price: '6.49',
      description: 'Refreshing matcha with your choice of milk.',
      image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=500&h=500&fit=crop',
      category: 'specials',
    },
    {
      id: 14,
      name: 'Pumpkin Spice Latte',
      price: '6.99',
      description: 'Seasonal favorite with warm spices.',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&h=500&fit=crop',
      category: 'specials',
    },
  ];

  const filters = [
    { id: 'all', label: 'All', icon: '☕' },
    { id: 'coffee', label: 'Coffee', icon: '☕' },
    { id: 'bakery', label: 'Bakery', icon: '🥐' },
    { id: 'specials', label: 'Specials', icon: '⭐' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-cream to-beige/20">
      {/* Hero Header */}
      <section className="section-padding bg-gradient-to-br from-brown/5 via-cream to-dark-green/5 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-10 left-10 w-64 h-64 bg-brown/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute bottom-10 right-10 w-80 h-80 bg-dark-green/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="inline-block mb-6 text-6xl"
            >
              ☕
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-brown mb-6">
              Our Menu
            </h1>
            <p className="text-brown/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Discover our carefully curated selection of coffee and bakery items,
              each crafted with passion and premium ingredients
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 shadow-lg ${
                  activeFilter === filter.id
                    ? 'bg-brown text-cream shadow-2xl shadow-brown/30 scale-105'
                    : 'bg-white text-brown hover:bg-beige shadow-md hover:shadow-lg'
                }`}
              >
                <span className="mr-2 text-xl">{filter.icon}</span>
                {filter.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Menu Grid Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProductCard product={item} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-brown/70 text-xl md:text-2xl font-medium">
                No items found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Menu;
