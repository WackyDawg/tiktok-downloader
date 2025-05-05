import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy - TTGrab TikTok Downloader"
        description="Our privacy policy explains how we handle your data when using the TTGrab TikTok video downloader. Learn about our commitment to your privacy."
        canonicalUrl="/privacy"
      />
      
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#00F2EA]/20 blur-3xl" />
          <div className="absolute bottom-1/3 -right-24 w-64 h-64 rounded-full bg-[#FF0050]/20 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FF0050] via-[#FF00A0] to-[#00F2EA]">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-300">
              Last updated: June 1, 2023
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="prose prose-lg prose-invert"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                At TTGrab, we take your privacy very seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our TikTok video downloader service.
              </p>
              
              <p>
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
              
              <h2>Information We Collect</h2>
              
              <p>
                We collect information that you provide directly to us when using our service:
              </p>
              
              <ul>
                <li>TikTok video URLs that you submit for download</li>
                <li>Browser and device information</li>
                <li>IP address and location data</li>
                <li>Usage data such as pages visited and time spent on the site</li>
                <li>Contact information if you reach out to us</li>
              </ul>
              
              <h2>How We Use Your Information</h2>
              
              <p>We may use the information we collect for various purposes, including to:</p>
              
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process and fulfill your video download requests</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our website</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Protect the rights and property of TTGrab and others</li>
              </ul>
              
              <h2>Storage of Information</h2>
              
              <p>
                We do not store the videos you download or the content of those videos on our servers. The video download process happens in real-time, and no video content is retained on our servers after the download is complete.
              </p>
              
              <p>
                We may temporarily cache video URLs and metadata to improve service performance, but this information is periodically purged from our systems.
              </p>
              
              <h2>Cookies and Tracking Technologies</h2>
              
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
              </p>
              
              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
              </p>
              
              <h2>Third-Party Services</h2>
              
              <p>
                We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, perform service-related services, or assist us in analyzing how our service is used.
              </p>
              
              <p>
                These third parties have access to your information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
              
              <h2>Security</h2>
              
              <p>
                We value your trust in providing us your information, thus we strive to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
              </p>
              
              <h2>Children's Privacy</h2>
              
              <p>
                Our service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take necessary actions.
              </p>
              
              <h2>Changes to This Privacy Policy</h2>
              
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date at the top of this page.
              </p>
              
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
              
              <h2>Contact Us</h2>
              
              <p>
                If you have any questions about this Privacy Policy, please <a href="/contact" className="text-[#00F2EA] hover:underline">contact us</a>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;