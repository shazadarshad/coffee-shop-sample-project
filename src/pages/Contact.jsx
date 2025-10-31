import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const businessHours = [
    { day: 'Monday - Friday', hours: '7:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 9:00 PM' },
    { day: 'Sunday', hours: '8:00 AM - 7:00 PM' },
  ];

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      content: (
        <>
          123 Coffee Street
          <br />
          City, State 12345
        </>
      ),
      color: 'from-blue-500/20 to-blue-600/20',
    },
    {
      icon: FaClock,
      title: 'Business Hours',
      content: (
        <div className="space-y-2">
          {businessHours.map((schedule) => (
            <div
              key={schedule.day}
              className="flex justify-between text-brown/70"
            >
              <span>{schedule.day}</span>
              <span className="font-medium">{schedule.hours}</span>
            </div>
          ))}
        </div>
      ),
      color: 'from-brown/20 to-beige/20',
    },
    {
      icon: FaPhone,
      title: 'Contact Methods',
      content: (
        <div className="space-y-3">
          <div>
            <p className="text-sm text-brown/70 mb-1">Phone</p>
            <p className="text-brown font-semibold">(555) 123-4567</p>
          </div>
          <div>
            <p className="text-sm text-brown/70 mb-1">Email</p>
            <p className="text-brown font-semibold">info@brewhavencafe.com</p>
          </div>
        </div>
      ),
      color: 'from-dark-green/20 to-green-500/20',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-cream to-beige/20">
      <section className="section-padding relative overflow-hidden">
        {/* Decorative background */}
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
            className="absolute top-20 left-20 w-96 h-96 bg-brown/5 rounded-full blur-3xl"
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
            className="absolute bottom-20 right-20 w-96 h-96 bg-dark-green/5 rounded-full blur-3xl"
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
              ✉️
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-brown mb-6">
              Get In Touch
            </h1>
            <p className="text-brown/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              Your feedback helps us serve you better.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <motion.div {...fadeInUp}>
              <div className="card p-8 md:p-10">
                <div className="flex items-center mb-8">
                  <div className="bg-brown/10 rounded-full p-4 mr-4">
                    <FaPaperPlane className="text-2xl text-brown" />
                  </div>
                  <h2 className="text-3xl font-bold text-brown">
                    Send us a Message
                  </h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-brown mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 ${
                        formErrors.name
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                          : 'border-beige focus:border-brown focus:ring-brown'
                      } focus:outline-none focus:ring-2 bg-cream/50 text-brown placeholder-brown/40`}
                      placeholder="Your name"
                      aria-required="true"
                      aria-invalid={!!formErrors.name}
                      aria-describedby={formErrors.name ? 'name-error' : undefined}
                    />
                    {formErrors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        id="name-error"
                        className="mt-2 text-sm text-red-600 font-medium"
                        role="alert"
                      >
                        {formErrors.name}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-brown mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 ${
                        formErrors.email
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                          : 'border-beige focus:border-brown focus:ring-brown'
                      } focus:outline-none focus:ring-2 bg-cream/50 text-brown placeholder-brown/40`}
                      placeholder="your.email@example.com"
                      aria-required="true"
                      aria-invalid={!!formErrors.email}
                      aria-describedby={formErrors.email ? 'email-error' : undefined}
                    />
                    {formErrors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        id="email-error"
                        className="mt-2 text-sm text-red-600 font-medium"
                        role="alert"
                      >
                        {formErrors.email}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold text-brown mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={7}
                      className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 resize-none ${
                        formErrors.message
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                          : 'border-beige focus:border-brown focus:ring-brown'
                      } focus:outline-none focus:ring-2 bg-cream/50 text-brown placeholder-brown/40`}
                      placeholder="Your message..."
                      aria-required="true"
                      aria-invalid={!!formErrors.message}
                      aria-describedby={formErrors.message ? 'message-error' : undefined}
                    />
                    {formErrors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        id="message-error"
                        className="mt-2 text-sm text-red-600 font-medium"
                        role="alert"
                      >
                        {formErrors.message}
                      </motion.p>
                    )}
                  </div>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 text-green-700 rounded-xl font-medium text-center"
                      role="alert"
                    >
                      ✓ Thank you! Your message has been sent successfully.
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={isSubmitting ? {} : { scale: 1.02, y: -2 }}
                    whileTap={isSubmitting ? {} : { scale: 0.98 }}
                    className="w-full btn-primary text-lg py-5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`card p-8 bg-gradient-to-br ${info.color} group`}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="bg-white rounded-full p-4 shadow-lg group-hover:shadow-xl transition-shadow"
                      >
                        <Icon className="text-2xl text-brown" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-brown mb-3">
                          {info.title}
                        </h3>
                        <div className="text-brown/80 leading-relaxed">
                          {info.content}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Google Map */}
          <motion.div
            {...fadeInUp}
            className="card overflow-hidden p-0"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184131861772!2d-73.98811768459398!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Brew Haven Café Location"
              className="w-full"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
