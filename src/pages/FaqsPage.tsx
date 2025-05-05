import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';

const FaqsPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Frequently Asked Questions - TTGrab TikTok Downloader"
        description="Find answers to the most common questions about using TTGrab to download TikTok videos without watermark."
        canonicalUrl="/faqs"
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
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-300">
              Find answers to the most common questions about using TTGrab.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8">General Questions</h2>
              
              <div className="space-y-6">
                <FAQItem 
                  question="What is TTGrab?"
                  answer="TTGrab is a free online tool that allows you to download TikTok videos without watermark in high quality. Our service is designed to be fast, secure, and easy to use, requiring no registration or software installation."
                />
                
                <FAQItem 
                  question="How do I download TikTok videos with TTGrab?"
                  answer="It's simple! Just copy the URL of the TikTok video you want to download, paste it into the input field on our homepage, and click the download button. Our system will process the video and provide you with download options in different formats and qualities."
                />
                
                <FAQItem 
                  question="Is TTGrab completely free to use?"
                  answer="Yes, TTGrab is completely free to use. We don't charge any fees for downloading TikTok videos, and there are no hidden costs or premium features behind a paywall."
                />
                
                <FAQItem 
                  question="Do I need to create an account to use TTGrab?"
                  answer="No, you don't need to create an account or register to use TTGrab. Our service is designed to be hassle-free and accessible to everyone without requiring any personal information."
                />
              </div>
            </motion.div>
          </div>
          
          <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 mt-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8">Technical Questions</h2>
              
              <div className="space-y-6">
                <FAQItem 
                  question="What formats can I download TikTok videos in?"
                  answer="We offer downloads in MP4 format at different quality levels (HD and SD) as well as MP3 for audio-only downloads. This gives you flexibility depending on your needs and storage constraints."
                />
                
                <FAQItem 
                  question="Why can't I download some TikTok videos?"
                  answer="Some videos might be protected by privacy settings or copyright restrictions. If a video is private or the creator has restricted downloads, our tool won't be able to process it. Additionally, TikTok occasionally updates its platform, which might temporarily affect our service."
                />
                
                <FAQItem 
                  question="Is there a limit to how many videos I can download?"
                  answer="We don't impose strict limits on the number of downloads, but we do have fair usage policies in place to ensure the service remains available to everyone. If you're experiencing any issues with multiple downloads, please contact our support team."
                />
                
                <FAQItem 
                  question="Can I download TikTok videos on my mobile device?"
                  answer="Yes, TTGrab works perfectly on mobile devices. Our website is fully responsive and optimized for smartphones and tablets. You can download videos directly to your device's storage."
                />
              </div>
            </motion.div>
          </div>
          
          <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 mt-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8">Privacy & Legal Questions</h2>
              
              <div className="space-y-6">
                <FAQItem 
                  question="Is it legal to download TikTok videos?"
                  answer="Downloading TikTok videos for personal use is generally acceptable. However, redistributing or using downloaded content commercially without permission may violate copyright laws and TikTok's terms of service. Always respect content creators and their rights."
                />
                
                <FAQItem 
                  question="Do you store the downloaded videos on your servers?"
                  answer="No, we don't store any videos on our servers. The download process happens in real-time, and once you've downloaded your video, no data is retained on our end. This ensures your privacy and saves our server resources."
                />
                
                <FAQItem 
                  question="Does TTGrab collect my personal information?"
                  answer="We collect minimal information necessary to provide our service, such as your IP address and basic browser information. We do not collect personally identifiable information unless you voluntarily provide it (e.g., when contacting support). Please refer to our Privacy Policy for more details."
                />
                
                <FAQItem 
                  question="Can content creators see if I download their videos?"
                  answer="No, content creators cannot see when you download their videos using our service. The download process is completely private and doesn't interact with the creator's TikTok analytics."
                />
              </div>
            </motion.div>
          </div>
          
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Still have questions?</h2>
              <p className="text-gray-300 mb-8">
                If you couldn't find the answer to your question in our FAQs, please don't hesitate to reach out to our support team.
              </p>
              <a 
                href="/contact" 
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#FF0050] to-[#FF00A0] text-white font-medium hover:opacity-90 transition-opacity"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="border-b border-white/10 last:border-b-0 pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none"
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <span className={`text-gray-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <div className={`mt-2 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="text-gray-400">{answer}</p>
      </div>
    </div>
  );
};

export default FaqsPage;