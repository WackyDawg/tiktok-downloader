import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Loader2, ExternalLink, Check, AlertCircle } from 'lucide-react';
import { VideoData } from '../types';
import { useDownloadHistory } from '../hooks/useDownloadHistory';

const mockVideoFetch = async (url: string): Promise<VideoData | null> => {
  // This is a mock function. In a real app, you would call your backend API
  // to fetch the actual video data from TikTok
  if (!url.includes('tiktok.com')) {
    return null;
  }
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const randomId = Math.random().toString(36).substring(2, 15);
  return {
    id: randomId,
    url: url,
    thumbnail: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'TikTok Video #' + randomId,
    author: '@tiktokuser',
    downloadUrl: '#', // In a real app, this would be the actual download URL
    format: 'mp4',
    date: new Date().toISOString()
  };
};

const DownloaderForm: React.FC = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const { addToHistory } = useDownloadHistory();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      setError('Please enter a TikTok URL');
      return;
    }
    
    if (!url.includes('tiktok.com')) {
      setError('Please enter a valid TikTok URL');
      return;
    }
    
    setError(null);
    setIsLoading(true);
    
    try {
      const data = await mockVideoFetch(url);
      
      if (!data) {
        setError('Failed to fetch video. Please check the URL and try again.');
        setVideoData(null);
      } else {
        setVideoData(data);
        
        // Add to download history
        addToHistory({
          id: data.id,
          url: data.url,
          date: data.date,
          thumbnail: data.thumbnail,
          title: data.title
        });
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      setVideoData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    // In a real app, this would trigger the actual download
    setIsDownloaded(true);
    setTimeout(() => setIsDownloaded(false), 3000);
  };

  return (
    <div className="relative">
      <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-2xl border border-white/10">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-grow">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste TikTok video URL here..."
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-[#00F2EA] transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center ${
                isLoading
                  ? 'bg-gray-700 cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#FF0050] to-[#FF00A0] hover:opacity-90'
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin mr-2" />
                  Processing...
                </>
              ) : (
                'Download'
              )}
            </button>
          </div>
        </form>
        
        {error && (
          <motion.div 
            className="mt-4 text-red-400 flex items-center space-x-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <AlertCircle size={16} />
            <span>{error}</span>
          </motion.div>
        )}
        
        {videoData && !error && (
          <motion.div 
            className="mt-6 bg-white/5 rounded-lg p-4 border border-white/10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/3">
                <div className="aspect-[9/16] rounded-lg overflow-hidden bg-gray-800">
                  <img 
                    src={videoData.thumbnail} 
                    alt={videoData.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">{videoData.title}</h3>
                <p className="text-gray-400 mb-4">By {videoData.author}</p>
                
                <div className="space-y-3">
                  <DownloadOption 
                    label="MP4 - HD Quality"
                    fileSize="12.5 MB"
                    onClick={handleDownload}
                    isDownloaded={isDownloaded}
                  />
                  <DownloadOption 
                    label="MP4 - SD Quality"
                    fileSize="6.2 MB"
                    onClick={handleDownload}
                    isDownloaded={isDownloaded}
                  />
                  <DownloadOption 
                    label="MP3 - Audio Only"
                    fileSize="3.1 MB"
                    onClick={handleDownload}
                    isDownloaded={isDownloaded}
                  />
                </div>
                
                <div className="mt-4 text-xs text-gray-500">
                  By downloading, you agree to our <a href="/terms" className="text-[#00F2EA] hover:underline">Terms of Service</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

interface DownloadOptionProps {
  label: string;
  fileSize: string;
  onClick: () => void;
  isDownloaded: boolean;
}

const DownloadOption: React.FC<DownloadOptionProps> = ({ 
  label, 
  fileSize, 
  onClick,
  isDownloaded
}) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
      <div>
        <div className="text-white font-medium">{label}</div>
        <div className="text-sm text-gray-400">{fileSize}</div>
      </div>
      <button
        onClick={onClick}
        className={`h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 ${
          isDownloaded
            ? 'bg-green-500 text-white'
            : 'bg-[#FF0050] text-white hover:bg-[#FF00A0]'
        }`}
      >
        {isDownloaded ? <Check size={18} /> : <Download size={18} />}
      </button>
    </div>
  );
};

export default DownloaderForm;