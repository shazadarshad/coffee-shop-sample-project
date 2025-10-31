import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    text: 'The best coffee shop in town! The atmosphere is cozy and the coffee is absolutely delicious. I come here every morning.',
    role: 'Regular Customer',
  },
  {
    id: 2,
    name: 'Michael Chen',
    rating: 5,
    text: 'Brew Haven Café has become my go-to spot. The staff is friendly and the pastries are fresh. Highly recommend!',
    role: 'Coffee Enthusiast',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    rating: 5,
    text: 'I love how they source locally and support the community. Great coffee, great values, great place!',
    role: 'Local Resident',
  },
  {
    id: 4,
    name: 'David Thompson',
    rating: 5,
    text: 'Perfect place to work or catch up with friends. The Wi-Fi is great and the coffee keeps me going all day.',
    role: 'Remote Worker',
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding bg-gradient-to-br from-beige/40 via-cream to-beige/20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-10 left-10 w-64 h-64 bg-brown/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-10 right-10 w-80 h-80 bg-dark-green/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-sm md:text-base font-bold text-dark-green uppercase tracking-widest">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brown mb-4">
            What Our Customers Say
          </h2>
          <p className="text-brown/70 text-lg md:text-xl max-w-2xl mx-auto">
            Real reviews from real coffee lovers who visit our café
          </p>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="card p-10 md:p-14 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="flex justify-center mb-6 space-x-1"
              >
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}
                  >
                    <FaStar className="text-yellow-400 w-6 h-6 md:w-7 md:h-7" />
                  </motion.div>
                ))}
              </motion.div>
              
              <blockquote className="text-brown/90 text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed italic font-light">
                "{currentTestimonial.text}"
              </blockquote>
              
              <div>
                <p className="text-brown font-bold text-lg md:text-xl mb-1">
                  {currentTestimonial.name}
                </p>
                <p className="text-brown/60 text-sm md:text-base">
                  {currentTestimonial.role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-10">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-brown w-12 shadow-lg'
                  : 'bg-brown/30 hover:bg-brown/50 w-3'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
