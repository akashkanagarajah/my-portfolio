import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add form submission logic
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactLinks = [
    {
      name: 'Email',
      href: 'mailto:akashkanagarajah@gmail.com',
      icon: '📧',
      label: 'akashkanagarajah@gmail.com'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/akash-k-617498178/',
      icon: '💼',
      label: 'Connect on LinkedIn'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/akashkanagarajah',
      icon: '🐙',
      label: 'View my projects'
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's collaborate or just say hi! I'm always open to discussing new opportunities, 
            interesting projects, or just having a good conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Links */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Connect With Me</h3>
            <div className="space-y-4">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                >
                  <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors">
                      {link.name}
                    </h4>
                    <p className="text-sm text-gray-600">{link.label}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-emerald-700 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16" data-aos="fade-up">
          <p className="text-gray-600 mb-4">
            I typically respond within 24 hours during weekdays.
          </p>
          <p className="text-sm text-gray-500">
            Looking forward to hearing from you! 👋
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
