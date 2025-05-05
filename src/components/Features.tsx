import React from 'react';
import { motion } from 'framer-motion';
import { Download, Shield, Zap, Smartphone, Award, Video } from 'lucide-react';

const features = [
  {
    icon: <Download className="text-[#FF0050]" size={24} />,
    title: 'Easy Download',
    description: 'Just paste the TikTok URL and click download. No registration required.'
  },
  {
    icon: <Shield className="text-[#00F2EA]" size={24} />,
    title: 'Safe & Secure',
    description: 'Your data is never stored or shared. We prioritize your privacy.'
  },
  {
    icon: <Zap className="text-[#FF00A0]" size={24} />,
    title: 'Fast Processing',
    description: 'Our servers process your request instantly for quick downloads.'
  },
  {
    icon: <Smartphone className="text-[#FF0050]" size={24} />,
    title: 'Mobile Friendly',
    description: 'Works perfectly on all devices including smartphones and tablets.'
  },
  {
    icon: <Award className="text-[#00F2EA]" size={24} />,
    title: 'High Quality',
    description: 'Download videos in the highest available quality without watermark.'
  },
  {
    icon: <Video className="text-[#FF00A0]" size={24} />,
    title: 'Multiple Formats',
    description: 'Choose between different formats including MP4 and MP3 audio.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-24 w-64 h-64 rounded-full bg-[#FF0050]/20 blur-3xl" />
        <div className="absolute bottom-1/4 -left-24 w-64 h-64 rounded-full bg-[#00F2EA]/20 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF0050] via-[#FF00A0] to-[#00F2EA]">TTGrab</span>?
          </h2>
          <p className="text-gray-300 text-lg">
            Our TikTok downloader offers a seamless experience with powerful features that make downloading videos quick and easy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;