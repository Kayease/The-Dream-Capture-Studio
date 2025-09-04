import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const HeroSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const heroVideos = [
    {
      id: 1,
      title: "Prewedding Romance",
      thumbnail:
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1920&h=1080&fit=crop",
      description: "Intimate moments captured in golden hour",
    },
    {
      id: 2,
      title: "Wedding Joy",
      thumbnail:
        "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?w=1920&h=1080&fit=crop",
      description: "Celebration of eternal love",
    },
    {
      id: 3,
      title: "Family Tenderness",
      thumbnail:
        "https://images.pixabay.com/photo/2016/11/29/04/19/family-1867271_1280.jpg?w=1920&h=1080&fit=crop",
      description: "Precious family connections",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % heroVideos?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsVideoLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Video Background */}
      <div className="absolute inset-0">
        {heroVideos?.map((video, index) => (
          <div
            key={video?.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentVideoIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={video?.thumbnail}
              alt={video?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/70" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container-fluid text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Main Heading - Enhanced with gradient text */}
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-display font-bold leading-tight">
                THE DREAM CAPTURE
                <span className="block bg-gradient-to-r from-secondary to-warm-amber bg-clip-text text-transparent">
                  STUDIO
                </span>
              </h1>
              <p className="text-subtitle font-medium opacity-90">
                Making Dreams Reality
              </p>
            </div>

            {/* Tagline */}
            <div className="space-y-6 animate-slide-up">
              <p className="text-body max-w-2xl mx-auto opacity-80 leading-relaxed">
                Every love story deserves to be told beautifully. We create
                timeless memories that become family heirlooms, capturing the
                essence of Indian traditions with modern cinematic elegance.
              </p>

              {/* CTA Buttons - Enhanced styling */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/portfolio-hub">
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Camera"
                    iconPosition="left"
                    className="bg-white/10 border-white text-white hover:bg-white/20 hover:text-white backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  >
                    View Our Stories
                  </Button>
                </Link>
                <Link to="/consultation-booking">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Calendar"
                    iconPosition="left"
                    className="bg-primary hover:bg-primary/90 shadow-elevated transition-all duration-300 hover:scale-105"
                  >
                    Book your dream shoot
                  </Button>
                </Link>
              </div>
            </div>

            {/* Video Indicators - Enhanced styling */}
            <div className="flex items-center justify-center space-x-2 mt-8">
              {heroVideos?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideoIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentVideoIndex
                      ? "bg-deep-teal w-8 shadow-lg shadow-deep-teal/50"
                      : "bg-white/50 hover:bg-white/70 hover:scale-110"
                  }`}
                  aria-label={`View video ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements for Engagement */}
      <div className="absolute top-20 left-10 hidden lg:block">
        <div className="w-4 h-4 bg-secondary rounded-full animate-pulse-gentle opacity-60"></div>
      </div>
      <div className="absolute top-40 right-20 hidden lg:block">
        <div className="w-3 h-3 bg-deep-teal rounded-full animate-pulse-gentle opacity-60"></div>
      </div>
      <div className="absolute bottom-40 left-20 hidden lg:block">
        <div className="w-2 h-2 bg-warm-amber rounded-full animate-pulse-gentle opacity-60"></div>
      </div>
    </section>
  );
};

export default HeroSection;
