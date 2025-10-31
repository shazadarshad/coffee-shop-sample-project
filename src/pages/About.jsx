import { motion } from 'framer-motion';
import { FaLeaf, FaHandsHelping, FaHeart } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: FaLeaf,
      title: 'Locally Sourced',
      description:
        'We work directly with local farms and suppliers to bring you the freshest ingredients.',
    },
    {
      icon: FaHandsHelping,
      title: 'Handcrafted',
      description:
        'Every cup is carefully prepared by our skilled baristas who take pride in their craft.',
    },
    {
      icon: FaHeart,
      title: 'Community Focused',
      description:
        'We believe in building connections and supporting our local community.',
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Image Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            About Brew Haven Café
          </h1>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brown mb-6 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-brown/80 space-y-4">
              <p>
                Brew Haven Café was born from a passion for exceptional coffee
                and a dream to create a warm, welcoming space where community
                thrives. Founded in 2020, we've been serving our neighborhood
                with carefully crafted beverages and fresh bakery items.
              </p>
              <p>
                What started as a small local coffee shop has grown into a
                beloved gathering place where friends meet, ideas flow, and
                memories are made. Every cup we serve tells a story of
                dedication, quality, and care.
              </p>
              <p>
                We believe that great coffee is more than just a drink—it's an
                experience. From the moment you walk through our doors, we want
                you to feel at home. Our friendly baristas are here to welcome
                you, our comfortable seating invites you to stay, and our
                commitment to quality ensures every visit is memorable.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-beige/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brown mb-4">
              Our Values
            </h2>
            <p className="text-brown/70 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="bg-brown/10 rounded-full p-4"
                    >
                      <Icon className="text-4xl text-brown" />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold text-brown mb-3">
                    {value.title}
                  </h3>
                  <p className="text-brown/70">{value.description}</p>
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

