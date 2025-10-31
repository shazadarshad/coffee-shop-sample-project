import { motion } from 'framer-motion';
import { useState } from 'react';

const ProductCard = ({ product, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -12, scale: 1.02 }}
      className="card group overflow-hidden"
    >
      <div className="relative h-56 md:h-64 overflow-hidden bg-beige/20">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-beige/40 to-brown/20 animate-pulse" />
        )}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 md:p-8">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl md:text-2xl font-bold text-brown group-hover:text-dark-green transition-colors duration-300">
            {product.name}
          </h3>
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="text-2xl md:text-3xl font-extrabold text-dark-green whitespace-nowrap ml-4"
          >
            ${product.price}
          </motion.span>
        </div>
        <p className="text-brown/70 text-sm md:text-base leading-relaxed">{product.description}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
