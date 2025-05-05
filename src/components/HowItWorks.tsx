import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Copy Video URL',
    description: 'Open TikTok and copy the URL of the video you want to download.',
    color: 'from-[#FF0050] to-[#FF00A0]'
  },
  {
    number: '02',
    title: 'Paste URL',
    description: 'Paste the URL in the download box at the top of our page.',
    color: 'from-[#FF00A0] to-[#00F2EA]'
  },
  {
    number: '03',
    title: 'Download Video',
    description: 'Click the download button and select your preferred format and quality.',
    color: 'from-[#00F2EA] to-[#FF0050]'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            How It Works
          </h2>
          <p className="text-gray-300 text-lg">
            Downloading TikTok videos without watermark is quick and easy with our simple 3-step process.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-gradient-to-r from-[#FF0050] via-[#00F2EA] to-[#FF0050] hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-xl mb-6`}>
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{step.title}</h3>
                  <p className="text-gray-400 text-center">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <motion.button
            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#FF0050] to-[#FF00A0] text-white font-medium hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try It Now
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;