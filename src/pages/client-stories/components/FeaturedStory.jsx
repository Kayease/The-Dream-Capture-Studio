import React, { useState } from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const FeaturedStory = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const featuredStory = {
    id: 1,
    couple: "Sarah & Michael",
    location: "Mumbai, India",
    date: "September 15, 2024",
    type: "Destination Wedding",
    coverImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    videoThumbnail:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop",
    rating: 5,
    testimonial: `Working with The Dream Capture Studio was beyond our wildest dreams. From our first consultation to receiving our final gallery, every moment was handled with such care and artistry. They didn't just photograph our wedding - they captured the essence of our love story.\n\nThe way they made us feel comfortable during our pre-wedding shoot in the vineyards was incredible. When our wedding day arrived, they were like guardian angels, capturing every precious moment while being completely unobtrusive.\n\nOur families still can't stop talking about the beautiful photos. These aren't just pictures - they're heirlooms we'll treasure forever.`,
    highlights: [
      "3-day destination wedding coverage",
      "Pre-wedding vineyard session",
      "500+ edited photos delivered",
      "Cinematic highlight film",
      "Custom wedding album design",
      "Family portrait sessions",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop",
    ],
  };

  return (
    <section className="p-16 lg:p-20 bg-background  ">
      <div className="container-fluid">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
              <Icon name="Crown" size={18} className="text-accent" />
              <span className="text-sm font-medium text-accent">
                Featured Story
              </span>
            </div>
          </div>
          <h2 className="text-headline text-foreground mb-4">
            A Love Story in <span className="text-primary">Mumbai</span>
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Discover how Sarah & Michael's dream destination wedding became a
            masterpiece of storytelling
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Story Content */}
          <div className="space-y-8">
            {/* Couple Info */}
            <div className="bg-card rounded-xl p-6 border border-border shadow-soft">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-title text-foreground font-heading">
                    {featuredStory?.couple}
                  </h3>
                  <p className="text-body text-muted-foreground">
                    {featuredStory?.location}
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(featuredStory?.rating)]?.map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className="text-warning fill-current"
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={16} className="text-primary" />
                  <span className="text-muted-foreground">
                    {featuredStory?.date}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} className="text-primary" />
                  <span className="text-muted-foreground">
                    {featuredStory?.type}
                  </span>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-secondary/20 rounded-xl p-6 border border-secondary/30">
              <div className="flex items-start space-x-4">
                <Icon
                  name="Quote"
                  size={24}
                  className="text-primary flex-shrink-0 mt-1"
                />
                <div>
                  <p className="text-body text-foreground leading-relaxed whitespace-pre-line">
                    {featuredStory?.testimonial}
                  </p>
                  <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-border">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-primary-foreground">
                        SM
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {featuredStory?.couple}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Verified Client
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h4 className="text-title text-foreground mb-4">
                What Was Included
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {featuredStory?.highlights?.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-accent flex-shrink-0"
                    />
                    <span className="text-body text-muted-foreground">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              iconName="ExternalLink"
              iconPosition="right"
              className="w-full sm:w-auto"
            >
              View Full Gallery
            </Button>
          </div>

          {/* Visual Content */}
          <div className="space-y-6">
            {/* Main Image/Video */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted">
              {!isVideoPlaying ? (
                <>
                  <Image
                    src={featuredStory?.videoThumbnail}
                    alt="Sarah & Michael Wedding Video"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg hover:scale-110"
                    >
                      <Icon
                        name="Play"
                        size={24}
                        className="text-primary ml-1"
                      />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-sm font-medium">
                        Watch Their Story
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="w-full h-full bg-black flex items-center justify-center">
                  <div className="text-center text-white">
                    <Icon
                      name="Play"
                      size={48}
                      className="mx-auto mb-4 opacity-50"
                    />
                    <p className="text-sm opacity-75">Video would play here</p>
                    <button
                      onClick={() => setIsVideoPlaying(false)}
                      className="mt-2 text-xs underline opacity-75 hover:opacity-100"
                    >
                      Close Video
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Gallery Preview */}
            <div className="grid grid-cols-2 gap-3">
              {featuredStory?.gallery?.map((image, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] rounded-lg overflow-hidden bg-muted"
                >
                  <Image
                    src={image}
                    alt={`Sarah & Michael Wedding ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                variant="ghost"
                iconName="Plus"
                iconPosition="left"
                className="text-primary"
              >
                View 496 More Photos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStory;
