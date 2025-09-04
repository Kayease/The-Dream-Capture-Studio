import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GalleryGrid = ({ 
  collections, 
  viewMode, 
  onImageClick, 
  favorites, 
  onToggleFavorite 
}) => {
  const [imageHeights, setImageHeights] = useState({});

  useEffect(() => {
    // Ensure deterministic layout by clearing any previously generated heights
    if (viewMode !== 'masonry') {
      setImageHeights({});
    }
  }, [viewMode]);

  const getGridClasses = () => {
    // Use a unified grid for both modes to keep cards equal sized
    return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5';
  };

  const getImageClasses = () => {
    // Consistent card aspect for all images
    return 'aspect-[4/3]';
  };

  return (
    <div className="container-fluid py-8">
      {collections?.map((collection) => (
        <div key={collection?.id} className="mb-12">
          {/* Collection Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-title text-foreground">{collection?.title}</h2>
              <div className="flex items-center gap-2 text-caption">
                <Icon name="Calendar" size={14} />
                <span>{collection?.date}</span>
                <Icon name="MapPin" size={14} className="ml-2" />
                <span>{collection?.location}</span>
              </div>
            </div>
            <p className="text-body text-muted-foreground mb-4">{collection?.description}</p>
            
            {/* Collection Stats */}
            <div className="flex items-center gap-6 text-caption">
              <div className="flex items-center gap-1">
                <Icon name="Image" size={14} />
                <span>{collection?.images?.length} Photos</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="Eye" size={14} />
                <span>{collection?.views} Views</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="Heart" size={14} />
                <span>{collection?.likes} Likes</span>
              </div>
            </div>
          </div>

          {/* Images Grid */}
          <div className={getGridClasses()}>
            {collection?.images?.map((image, index) => {
              const imageKey = `${collection?.id}-${index}`;
              const isFavorite = favorites?.includes(imageKey);
              
              return (
                <div
                  key={index}
                  className={`${getImageClasses()} relative group cursor-pointer overflow-hidden rounded-lg bg-muted shadow-soft hover:shadow-elevated transition-shadow duration-300`}
                  onClick={() => onImageClick(collection, index)}
                >
                  <Image
                    src={image?.url}
                    alt={image?.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={800}
                    height={600}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium mb-1">{image?.title}</p>
                      <p className="text-white/80 text-xs">{image?.caption}</p>
                    </div>
                  </div>
                  {/* Favorite Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e?.stopPropagation();
                      onToggleFavorite(imageKey);
                    }}
                    className={`absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isFavorite ? 'text-red-500' : 'text-white'
                    } hover:bg-white/20`}
                  >
                    <Icon 
                      name={isFavorite ? "Heart" : "Heart"} 
                      size={16} 
                      className={isFavorite ? 'fill-current' : ''}
                    />
                  </Button>
                  {/* View Count */}
                  <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-1 text-white text-xs">
                      <Icon name="Eye" size={12} />
                      <span>{image?.views}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Collection Footer */}
          <div className="mt-6 pt-4 border-t border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Icon name="Camera" size={16} color="white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{collection?.photographer}</p>
                    <p className="text-xs text-muted-foreground">{collection?.style}</p>
                  </div>
                </div>
                
                {collection?.featured && (
                  <div className="flex items-center gap-1 bg-deep-teal/10 text-deep-teal px-2 py-1 rounded-full text-xs font-medium">
                    <Icon name="Award" size={12} />
                    <span>Featured</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" iconName="Share2" iconPosition="left" className="border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white">
                  Share
                </Button>
                <Button variant="default" size="sm" iconName="ExternalLink" iconPosition="left">
                  View Full Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;