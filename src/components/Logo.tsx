import React from 'react';
import { Music } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="relative h-8 w-8 rounded-full bg-gradient-to-br from-[#FF0050] via-[#FF00A0] to-[#00F2EA] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <Music size={18} className="text-white z-10" />
    </div>
  );
};

export default Logo;