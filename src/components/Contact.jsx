
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  // ---- CHANGED: removed TypeScript type from parameter
  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  // CHANGED: removed TS type annotation here too
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-wider">
            CONTACT
          </h2>
          <p className="text-xl text-gray-300 tracking-wide">
            Let's create something beautiful together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-light text-white mb-8 tracking-wide">
              GET IN TOUCH
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-medium mb-2">Email</h4>
                <p className="text-gray-300">hello@photographer.com</p>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-2">Phone</h4>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-2">Location</h4>
                <p className="text-gray-300">New York, NY</p>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-accent transition-colors duration-300">
                    Instagram
                  </a>
                  <a href="#" className="text-gray-300 hover:text-accent transition-colors duration-300">
                    Facebook
                  </a>
                  <a href="#" className="text-gray-300 hover:text-accent transition-colors duration-300">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full p-4 bg-black/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors duration-300"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full p-4 bg-black/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors duration-300"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Your Message"
                  required
                  className="w-full p-4 bg-black/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-accent text-black font-medium tracking-wide hover:bg-accent/90 transition-colors duration-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
