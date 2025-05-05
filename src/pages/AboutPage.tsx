import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Shield, Globe, Users, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Us - TTGrab TikTok Downloader"
        description="Learn about TTGrab, our mission, and what makes our TikTok video downloader different from others."
        canonicalUrl="/about"
      />
      
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#FF0050]/20 blur-3xl" />
          <div className="absolute bottom-1/3 -right-24 w-64 h-64 rounded-full bg-[#00F2EA]/20 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FF0050] via-[#FF00A0] to-[#00F2EA]">
              About TTGrab
            </h1>
            <p className="text-lg text-gray-300">
              Learn about who we are, our mission, and why we created the best TikTok video downloader.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  TTGrab was born out of a simple need: to provide a reliable, safe, and easy way for people to download and save their favorite TikTok videos without watermarks.
                </p>
                <p>
                  Founded in 2023 by a team of developers who were frustrated with existing tools that were either unreliable, filled with ads, or compromised user privacy, we set out to create something better.
                </p>
                <p>
                  Our mission is to build the most user-friendly and efficient TikTok downloader while maintaining the highest standards of privacy and security. We believe that users should be able to enjoy content offline without sacrificing their personal data or dealing with intrusive advertising.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img 
                src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team working together" 
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield size={24} className="text-[#FF0050]" />,
                title: 'Privacy First',
                description: 'We never store your personal data or the videos you download. Your privacy is our priority.'
              },
              {
                icon: <Users size={24} className="text-[#FF00A0]" />,
                title: 'User Friendly',
                description: 'We strive to create the simplest, most intuitive experience for all users.'
              },
              {
                icon: <Globe size={24} className="text-[#00F2EA]" />,
                title: 'Accessibility',
                description: 'Our service is available globally and optimized for all devices and connection speeds.'
              },
              {
                icon: <Heart size={24} className="text-[#FF0050]" />,
                title: 'Respect for Creators',
                description: 'We encourage users to respect content creators\' rights and use downloads for personal use only.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Team
            </motion.h2>
            <motion.p 
              className="text-gray-300 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              TTGrab is powered by a small team of passionate developers, designers, and content creators who are dedicated to providing the best TikTok download experience.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Alex Johnson',
                  role: 'Founder & Lead Developer',
                  image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
                },
                {
                  name: 'Sophia Chen',
                  role: 'UX/UI Designer',
                  image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
                },
                {
                  name: 'Marcus Williams',
                  role: 'Backend Developer',
                  image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="aspect-square">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                    <p className="text-[#00F2EA]">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Join Millions of Happy Users
            </motion.h2>
            <motion.p 
              className="text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our TikTok downloader is trusted by millions of users worldwide. Experience the difference today.
            </motion.p>
            
            <motion.a 
              href="/"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#FF0050] to-[#FF00A0] text-white font-medium hover:opacity-90 transition-opacity"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try TTGrab Now
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;