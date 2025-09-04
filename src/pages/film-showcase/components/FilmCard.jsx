import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FilmCard = ({ film, onPlay, size = 'default' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    small: 'aspect-video',
    default: 'aspect-video',
    large: 'aspect-[16/10]'
  };

  return (
    <div 
      className={`group relative ${sizeClasses?.[size]} rounded-lg overflow-hidden bg-muted cursor-pointer transition-all duration-300 hover:shadow-elevated`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onPlay(film)}
    >
      {/* Thumbnail */}
      <Image
        src={film?.thumbnail}
        alt={film?.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-60'
      }`} />
      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'scale-110 bg-white/30' : 'scale-100'
        }`}>
          <Icon name="Play" size={24} color="white" className="ml-1" />
        </div>
      </div>
      {/* Film Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className={`transition-transform duration-300 ${
          isHovered ? 'translate-y-0' : 'translate-y-2'
        }`}>
          <h3 className="text-white font-heading font-semibold text-lg mb-1 line-clamp-2">
            {film?.title}
          </h3>
          <div className="flex items-center justify-between">
            <div className="text-white/80 text-sm">
              <span>{film?.category}</span>
              <span className="mx-2">•</span>
              <span>{film?.duration}</span>
            </div>
            {film?.isNew && (
              <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                New
              </span>
            )}
          </div>
        </div>

        {/* Additional Info on Hover */}
        <div className={`mt-3 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-white/70 text-sm line-clamp-2 mb-3">
            {film?.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="text-white/60 text-xs">
              <Icon name="MapPin" size={12} className="inline mr-1" />
              {film?.location}
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-white hover:bg-white/20"
                onClick={(e) => {
                  e?.stopPropagation();
                  // Handle share
                }}
              >
                <Icon name="Share" size={16} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-white hover:bg-white/20"
                onClick={(e) => {
                  e?.stopPropagation();
                  // Handle favorite
                }}
              >
                <Icon name="Heart" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Category Badge */}
      <div className="absolute top-3 left-3">
        <span className="bg-black/50 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
          {film?.category}
        </span>
      </div>
      {/* Duration Badge */}
      <div className="absolute top-3 right-3">
        <span className="bg-black/50 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
          {film?.duration}
        </span>
      </div>
    </div>
  );
};

export default FilmCard;