import React from 'react';
import { motion } from 'framer-motion';
import DownloaderForm from './DownloaderForm';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#FF0050]/20 blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-[#00F2EA]/20 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 w-64 h-64 rounded-full bg-[#FF00A0]/20 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FF0050] via-[#FF00A0] to-[#00F2EA]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Download TikTok Videos Without Watermark
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Free online tool to download high-quality TikTok videos without watermark. 
            Just paste the video URL and download instantly!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <DownloaderForm />
          </motion.div>
        </div>
        
        <motion.div 
          className="flex justify-center mt-16 space-x-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div>
            <div className="text-3xl font-bold text-white mb-2">10M+</div>
            <div className="text-gray-400">Videos Downloaded</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">100K+</div>
            <div className="text-gray-400">Daily Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-gray-400">User Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;