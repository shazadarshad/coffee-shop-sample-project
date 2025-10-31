import { motion } from 'framer-motion';
import { FaLeaf, FaHandsHelping, FaHeart } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: FaLeaf,
      title: 'Locally Sourced',
      description:
        'We work directly with local farms and suppliers to bring you the freshest ingredients.',
      color: 'from-green-500/20 to-dark-green/20',
    },
    {
      icon: FaHandsHelping,
      title: 'Handcrafted',
      description:
        'Every cup is carefully prepared by our skilled baristas who take pride in their craft.',
      color: 'from-brown/20 to-beige/20',
    },
    {
      icon: FaHeart,
      title: 'Community Focused',
      description:
        'We believe in building connections and supporting our local community.',
      color: 'from-red-500/20 to-pink-500/20',
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-cream to-beige/20">
      {/* Hero Image Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 gradient-overlay"></div>
        </div>
        
        {/* Parallax effect */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=1080&fit=crop)',
          }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="text-6xl md:text-8xl mb-6"
            >
              ☕
            </motion.div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white drop-shadow-2xl mb-4">
              About Brew Haven Café
            </h1>
          </div>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto container-padding">
          <motion.div {...fadeInUp} className="mb-12">
            <div className="inline-block mb-6">
              <span className="text-sm md:text-base font-bold text-dark-green uppercase tracking-widest">
                Our Journey
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brown mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-brown/80 text-lg md:text-xl leading-relaxed">
              <motion.p
                {...fadeInUp}
                className="text-xl md:text-2xl"
              >
                Brew Haven Café was born from a passion for exceptional coffee
                and a dream to create a warm, welcoming space where community
                thrives.
              </motion.p>
              <p>
                Founded in 2020, we've been serving our neighborhood
                with carefully crafted beverages and fresh bakery items. What started as a small local coffee shop has grown into a
                beloved gathering place where friends meet, ideas flow, and
                memories are made.
              </p>
              <p>
                Every cup we serve tells a story of
                dedication, quality, and care. We believe that great coffee is more than just a drink—it's an
                experience. From the moment you walk through our doors, we want
                you to feel at home.
              </p>
              <p>
                Our friendly baristas are here to welcome
                you, our comfortable seating invites you to stay, and our
                commitment to quality ensures every visit is memorable. We're not just serving coffee—we're building a community, one cup at a time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-br from-beige/40 via-cream to-beige/20 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-20 left-20 w-96 h-96 bg-brown/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-dark-green/5 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6">
              <span className="text-sm md:text-base font-bold text-dark-green uppercase tracking-widest">
                Our Principles
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brown mb-6">
              Our Values
            </h2>
            <p className="text-brown/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do, every day
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`card p-10 md:p-12 text-center bg-gradient-to-br ${value.color} relative overflow-hidden group`}
                >
                  <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="flex justify-center mb-6">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="bg-white rounded-full p-6 shadow-lg"
                      >
                        <Icon className="text-5xl text-brown" />
                      </motion.div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-brown mb-4">
                      {value.title}
                    </h3>
                    <p className="text-brown/70 text-base md:text-lg leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
