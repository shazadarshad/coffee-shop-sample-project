import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from 'react-icons/fa';

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
    // Clear error for this field when user starts typing
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

    // Simulate form submission
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

  return (
    <div className="min-h-screen bg-cream">
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-brown mb-4">
              Get In Touch
            </h1>
            <p className="text-brown/70 text-lg max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Contact Form */}
            <motion.div {...fadeInUp}>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-brown mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-brown mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 ${
                        formErrors.name
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                          : 'border-beige focus:border-brown focus:ring-brown'
                      } focus:outline-none focus:ring-2 bg-cream text-brown`}
                      placeholder="Your name"
                      aria-required="true"
                      aria-invalid={!!formErrors.name}
                      aria-describedby={formErrors.name ? 'name-error' : undefined}
                    />
                    {formErrors.name && (
                      <p
                        id="name-error"
                        className="mt-1 text-sm text-red-600"
                        role="alert"
                      >
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-brown mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 ${
                        formErrors.email
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                          : 'border-beige focus:border-brown focus:ring-brown'
                      } focus:outline-none focus:ring-2 bg-cream text-brown`}
                      placeholder="your.email@example.com"
                      aria-required="true"
                      aria-invalid={!!formErrors.email}
                      aria-describedby={formErrors.email ? 'email-error' : undefined}
                    />
                    {formErrors.email && (
                      <p
                        id="email-error"
                        className="mt-1 text-sm text-red-600"
                        role="alert"
                      >
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-brown mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 resize-none ${
                        formErrors.message
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                          : 'border-beige focus:border-brown focus:ring-brown'
                      } focus:outline-none focus:ring-2 bg-cream text-brown`}
                      placeholder="Your message..."
                      aria-required="true"
                      aria-invalid={!!formErrors.message}
                      aria-describedby={formErrors.message ? 'message-error' : undefined}
                    />
                    {formErrors.message && (
                      <p
                        id="message-error"
                        className="mt-1 text-sm text-red-600"
                        role="alert"
                      >
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
                      role="alert"
                    >
                      Thank you! Your message has been sent successfully.
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div {...fadeInUp} className="space-y-8">
              {/* Address */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-brown/10 rounded-full p-3">
                    <FaMapMarkerAlt className="text-2xl text-brown" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brown mb-2">
                      Address
                    </h3>
                    <p className="text-brown/70">
                      123 Coffee Street
                      <br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-brown/10 rounded-full p-3">
                    <FaClock className="text-2xl text-brown" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brown mb-4">
                      Business Hours
                    </h3>
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
                  </div>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-brown/10 rounded-full p-3">
                      <FaPhone className="text-xl text-brown" />
                    </div>
                    <div>
                      <p className="text-sm text-brown/70">Phone</p>
                      <p className="text-brown font-medium">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-brown/10 rounded-full p-3">
                      <FaEnvelope className="text-xl text-brown" />
                    </div>
                    <div>
                      <p className="text-sm text-brown/70">Email</p>
                      <p className="text-brown font-medium">
                        info@brewhavencafe.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Google Map */}
          <motion.div
            {...fadeInUp}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184131861772!2d-73.98811768459398!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
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

