import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Mail, MessageSquare, MapPin, Send, Loader2 } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real application, you would send the form data to your backend
    try {
      // Simulate successful submission
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      <SEO 
        title="Contact Us - TTGrab TikTok Downloader"
        description="Contact the TTGrab team for support, feedback, or business inquiries. We're here to help with any questions about our TikTok video downloader."
        canonicalUrl="/contact"
      />
      
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#FF00A0]/20 blur-3xl" />
          <div className="absolute bottom-1/3 -left-24 w-64 h-64 rounded-full bg-[#00F2EA]/20 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FF0050] via-[#FF00A0] to-[#00F2EA]">
              Contact Us
            </h1>
            <p className="text-lg text-gray-300">
              Have questions, feedback, or need assistance? We're here to help! Get in touch with our team.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <motion.h2
                  className="text-2xl font-bold text-white mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Get In Touch
                </motion.h2>
                
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-[#FF0050]/20 flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-[#FF0050]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Email Us</h3>
                      <p className="text-gray-400 mb-2">We'll respond within 24 hours</p>
                      <a href="mailto:support@tikdown.com" className="text-[#00F2EA] hover:underline">
                        support@tikdown.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-[#FF00A0]/20 flex items-center justify-center flex-shrink-0">
                      <MessageSquare size={20} className="text-[#FF00A0]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Live Chat</h3>
                      <p className="text-gray-400 mb-2">Chat with our support team</p>
                      <a href="#" className="text-[#00F2EA] hover:underline">
                        Start a conversation
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-[#00F2EA]/20 flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-[#00F2EA]" />
                    </div>
                    {/* <div>
                      <h3 className="text-lg font-medium text-white mb-1">Office</h3>
                      <p className="text-gray-400">
                        420 Tech Street<br />
                        San Francisco, CA 94103<br />
                        United States
                      </p>
                    </div> */}
                  </div>
                </motion.div>
                
                <motion.div
                  className="mt-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h3 className="text-lg font-medium text-white mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#FF0050] hover:to-[#FF00A0] transition-all duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#FF00A0] hover:to-[#00F2EA] transition-all duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#00F2EA] hover:to-[#FF0050] transition-all duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                
                {isSubmitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[#00F2EA] to-[#FF0050] rounded-full flex items-center justify-center mb-6">
                      <Check size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400 mb-6">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-400 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-500 border border-white/20 focus:outline-none focus:border-[#00F2EA] transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-400 mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-500 border border-white/20 focus:outline-none focus:border-[#00F2EA] transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-gray-400 mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:border-[#00F2EA] transition-colors"
                      >
                        <option value="" disabled>Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Feature Request">Feature Request</option>
                        <option value="Bug Report">Bug Report</option>
                        <option value="Business Inquiry">Business Inquiry</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-400 mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-500 border border-white/20 focus:outline-none focus:border-[#00F2EA] transition-colors resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    {error && (
                      <div className="mb-6 text-[#FF0050]">{error}</div>
                    )}
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center ${
                        isSubmitting
                          ? 'bg-gray-700 cursor-not-allowed'
                          : 'bg-gradient-to-r from-[#FF0050] to-[#FF00A0] hover:opacity-90'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-2xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: 'How quickly will I receive a response?',
                answer: 'We strive to respond to all inquiries within 24 hours during business days. For urgent matters, please indicate this in your message subject.'
              },
              {
                question: 'Is there a phone number I can call for support?',
                answer: 'We currently only offer support via email and our contact form. This allows us to track and resolve your issues more efficiently.'
              },
              {
                question: 'I found a bug, how should I report it?',
                answer: 'Please use the contact form with the subject "Bug Report" and provide as much detail as possible about the issue, including screenshots if applicable.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="mb-4 bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-medium text-white mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// Missing component definition
const Check = ({ size, className }: { size: number, className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default ContactPage;