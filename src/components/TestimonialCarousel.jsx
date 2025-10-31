import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    text: 'The best coffee shop in town! The atmosphere is cozy and the coffee is absolutely delicious. I come here every morning.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    rating: 5,
    text: 'Brew Haven Café has become my go-to spot. The staff is friendly and the pastries are fresh. Highly recommend!',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    rating: 5,
    text: 'I love how they source locally and support the community. Great coffee, great values, great place!',
  },
  {
    id: 4,
    name: 'David Thompson',
    rating: 5,
    text: 'Perfect place to work or catch up with friends. The Wi-Fi is great and the coffee keeps me going all day.',
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
    <section className="py-16 md:py-24 bg-beige/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brown mb-4">
            What Our Customers Say
          </h2>
          <p className="text-brown/70">Real reviews from real coffee lovers</p>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                ))}
              </div>
              <p className="text-brown/80 text-lg md:text-xl mb-6 italic">
                "{currentTestimonial.text}"
              </p>
              <p className="text-brown font-semibold">
                — {currentTestimonial.name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-brown w-8'
                  : 'bg-brown/30 hover:bg-brown/50'
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

