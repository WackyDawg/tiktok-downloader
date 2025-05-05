import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is TTGrab completely free to use?',
    answer: 'Yes, TTGrab is completely free to use. We don\'t charge any fees for downloading TikTok videos, and there are no hidden costs or premium features behind a paywall.'
  },
  {
    question: 'Is it legal to download TikTok videos?',
    answer: 'Downloading TikTok videos for personal use is generally acceptable. However, redistributing or using downloaded content commercially without permission may violate copyright laws and TikTok\'s terms of service. Always respect content creators and their rights.'
  },
  {
    question: 'Why can\'t I download some TikTok videos?',
    answer: 'Some videos might be protected by privacy settings or copyright restrictions. If a video is private or the creator has restricted downloads, our tool won\'t be able to process it. Additionally, TikTok occasionally updates its platform, which might temporarily affect our service.'
  },
  {
    question: 'What formats can I download TikTok videos in?',
    answer: 'We offer downloads in MP4 format at different quality levels (HD and SD) as well as MP3 for audio-only downloads. This gives you flexibility depending on your needs and storage constraints.'
  },
  {
    question: 'Do you store the downloaded videos on your servers?',
    answer: 'No, we don\'t store any videos on our servers. The download process happens in real-time, and once you\'ve downloaded your video, no data is retained on our end. This ensures your privacy and saves our server resources.'
  },
  {
    question: 'Can I download TikTok videos on my mobile device?',
    answer: 'Yes, TTGrab works perfectly on mobile devices. Our website is fully responsive and optimized for smartphones and tablets. You can download videos directly to your device\'s storage.'
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="py-4 w-full flex justify-between items-center text-left"
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <ChevronDown 
          size={20} 
          className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-gray-400">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-20 relative" id="faq">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-1/3 -right-24 w-64 h-64 rounded-full bg-[#FF0050]/20 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 text-lg">
            Have questions about using TTGrab? Find answers to the most common questions below.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-gray-400 mb-4">
            Still have questions? We're here to help!
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center text-[#00F2EA] hover:text-white transition-colors"
          >
            Contact our support team
            <ChevronDown size={16} className="ml-1 rotate-270" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;