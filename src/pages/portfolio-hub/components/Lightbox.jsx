import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Lightbox = ({ 
  isOpen, 
  onClose, 
  collection, 
  currentIndex, 
  onNavigate,
  favorites,
  onToggleFavorite 
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isOpen) return;
      
      switch (e?.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          handlePrevious();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case ' ':
          e?.preventDefault();
          setIsZoomed(!isZoomed);
          break;
        case 'i':
          setShowInfo(!showInfo);
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isZoomed, showInfo]);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
      setIsZoomed(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < collection?.images?.length - 1) {
      onNavigate(currentIndex + 1);
      setIsZoomed(false);
    }
  };

  const handleShare = async () => {
    const currentImage = collection?.images?.[currentIndex];
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentImage?.title,
          text: currentImage?.caption,
          url: window.location?.href
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard?.writeText(window.location?.href);
    }
  };

  if (!isOpen || !collection) return null;

  const currentImage = collection?.images?.[currentIndex];
  const imageKey = `${collection?.id}-${currentIndex}`;
  const isFavorite = favorites?.includes(imageKey);

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent p-4 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h3 className="text-white font-medium">{collection?.title}</h3>
            <span className="text-white/60 text-sm">
              {currentIndex + 1} of {collection?.images?.length}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowInfo(!showInfo)}
              className="text-white hover:bg-white/20"
            >
              <Icon name="Info" size={20} />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onToggleFavorite(imageKey)}
              className={`${isFavorite ? 'text-red-500' : 'text-white'} hover:bg-white/20`}
            >
              <Icon 
                name="Heart" 
                size={20} 
                className={isFavorite ? 'fill-current' : ''}
              />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={handleShare}
              className="text-white hover:bg-white/20"
            >
              <Icon name="Share2" size={20} />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/20"
            >
              <Icon name="X" size={20} />
            </Button>
          </div>
        </div>
      </div>
      {/* Navigation Buttons */}
      {currentIndex > 0 && (
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 z-10 w-12 h-12"
        >
          <Icon name="ChevronLeft" size={24} />
        </Button>
      )}
      {currentIndex < collection?.images?.length - 1 && (
        <Button
          variant="ghost"
          size="icon"
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 z-10 w-12 h-12"
        >
          <Icon name="ChevronRight" size={24} />
        </Button>
      )}
      {/* Main Image */}
      <div 
        className={`relative max-w-full max-h-full transition-transform duration-300 ${
          isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
        }`}
        onClick={() => setIsZoomed(!isZoomed)}
      >
        <Image
          src={currentImage?.url}
          alt={currentImage?.alt}
          className="max-w-full max-h-[90vh] object-contain"
        />
      </div>
      {/* Image Info Panel */}
      {showInfo && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <div className="max-w-2xl">
            <h4 className="text-white text-lg font-medium mb-2">{currentImage?.title}</h4>
            <p className="text-white/80 mb-4">{currentImage?.caption}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-white/60">Camera:</span>
                <p className="text-white">{currentImage?.camera || 'Canon EOS R5'}</p>
              </div>
              <div>
                <span className="text-white/60">Lens:</span>
                <p className="text-white">{currentImage?.lens || '85mm f/1.4'}</p>
              </div>
              <div>
                <span className="text-white/60">Settings:</span>
                <p className="text-white">{currentImage?.settings || 'f/2.8, 1/200s, ISO 400'}</p>
              </div>
              <div>
                <span className="text-white/60">Views:</span>
                <p className="text-white">{currentImage?.views}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Thumbnail Strip */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4">
        {collection?.images?.map((image, index) => (
          <div
            key={index}
            onClick={() => onNavigate(index)}
            className={`flex-shrink-0 w-16 h-16 rounded cursor-pointer overflow-hidden border-2 transition-all duration-300 ${
              index === currentIndex 
                ? 'border-deep-teal scale-110' :'border-white/30 hover:border-white/60'
            }`}
          >
            <Image
              src={image?.url}
              alt={image?.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lightbox;