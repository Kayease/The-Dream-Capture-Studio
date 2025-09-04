import React, { useState } from 'react';
import { INDIAN_MARKET_CONFIG } from '../config/indianMarket';
import Icon from './AppIcon';

const WhatsAppFloat = () => {
  const { contact } = INDIAN_MARKET_CONFIG;
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in THE DREAM CAPTURE STUDIO's photography services."
    );
    const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      className="whatsapp-float cursor-pointer flex items-center justify-center transition-all duration-300 relative group"
      onClick={handleWhatsAppClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title="Contact on WhatsApp"
    >
      <Icon name="MessageCircle" size={30} color="white" />
      
      {/* Enhanced Tooltip */}
      <div className={`absolute right-16 bg-deep-teal text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg transition-all duration-300 ${
        isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
      }`}>
        Chat with us on WhatsApp!
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-deep-teal border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
      </div>
      
      {/* Enhanced Pulse Effect */}
      <div className={`absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75 ${
        isHovered ? 'scale-150' : 'scale-100'
      } transition-transform duration-300`}></div>
      
      {/* Enhanced Glow Effect */}
      <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-600 opacity-0 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-300 blur-md`}></div>
    </div>
  );
};

export default WhatsAppFloat;