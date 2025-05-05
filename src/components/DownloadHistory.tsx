import React from 'react';
import { Trash2 } from 'lucide-react';
import { useDownloadHistory } from '../hooks/useDownloadHistory';

const DownloadHistory: React.FC = () => {
  const { history, clearHistory } = useDownloadHistory();
  
  if (history.length === 0) {
    return null;
  }
  
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white">Recent Downloads</h2>
          <button
            onClick={clearHistory}
            className="text-gray-400 hover:text-white flex items-center space-x-1 text-sm"
          >
            <Trash2 size={16} />
            <span>Clear History</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {history.map((item) => (
            <div 
              key={item.id} 
              className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="aspect-[9/16] bg-gray-800 relative">
                {item.thumbnail ? (
                  <img 
                    src={item.thumbnail} 
                    alt={item.title || 'Downloaded video'} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-500">No thumbnail</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <button className="bg-[#FF0050] hover:bg-[#FF00A0] text-white rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300">
                    Download Again
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium mb-1 truncate">
                  {item.title || 'TikTok Video'}
                </h3>
                <p className="text-gray-400 text-sm">
                  {new Date(item.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadHistory;