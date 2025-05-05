import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import DownloadHistory from '../components/DownloadHistory';
import FAQ from '../components/FAQ';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="TTGrab - Download TikTok Videos Without Watermark Free"
        description="Free online tool to download TikTok videos without watermark in HD quality. Fast, secure, and no registration required."
        keywords="tiktok downloader, download tiktok, tiktok without watermark, save tiktok videos"
        canonicalUrl="/"
      />
      
      <Hero />
      <Features />
      <HowItWorks />
      <DownloadHistory />
      <FAQ />
    </>
  );
};

export default HomePage;