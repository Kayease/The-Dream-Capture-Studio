import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";

const PhilosophySection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const philosophyPoints = [
    {
      icon: "Heart",
      title: "Memory Architecture",
      description:
        "We don't just take photos; we architect memories that become treasured family heirlooms, designed to evoke the same emotions decades from now.",
    },
    {
      icon: "Eye",
      title: "Timeless Intimacy",
      description:
        "Our approach captures genuine connections in ways that feel both cinematic and deeply personal, focusing on authentic moments over posed perfection.",
    },
    {
      icon: "Palette",
      title: "Artistic Excellence",
      description:
        "Every frame is crafted with technical mastery and artistic vision, ensuring your story is told with the sophistication it deserves.",
    },
  ];

  const behindScenesImages = [
    {
      src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop&auto=format&q=80",
      alt: "Behind the scenes - Setting up romantic shoot",
      width: 400,
      height: 300,
    },
    {
      src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop&auto=format&q=80",
      alt: "Behind the scenes - Wedding preparation",
      width: 400,
      height: 300,
    },
    {
      src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop&auto=format&q=80",
      alt: "Behind the scenes - Family session",
      width: 400,
      height: 300,
    },
  ];

  return (
    <section className="relative section-padding bg-secondary/30 overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-deep-teal/20" />
      </div>
      <div className="container-fluid relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 text-deep-teal font-medium">
                <Icon name="Sparkles" size={20} />
                <span>Our Philosophy</span>
              </div>

              <h2 className="text-headline">
                Where Every Moment Contains
                <span className="block text-primary">Infinite Stories</span>
              </h2>

              <p className="text-subtitle text-muted-foreground leading-relaxed">
                We exist at the intersection of artistic vision and emotional
                intelligence, where technical mastery meets heartfelt
                storytelling. This isn't just photography—it's memory
                architecture.
              </p>
            </div>

            {/* Philosophy Points */}
            <div className="space-y-6">
              {philosophyPoints?.map((point, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon
                      name={point?.icon}
                      size={24}
                      className="text-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-title group-hover:text-primary transition-colors duration-300">
                      {point?.title}
                    </h3>
                    <p className="text-body text-muted-foreground leading-relaxed">
                      {point?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link to="/client-stories">
                <button className="btn-primary flex m-auto">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  <span>Read Our Stories</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative">
              <div className="aspect-cinematic rounded-2xl overflow-hidden shadow-dramatic">
                <Image
                  src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop&auto=format&q=80"
                  alt="The Dream Capture Studio philosophy - Artistic wedding photography"
                  className="w-full h-full object-cover"
                  width={800}
                  height={600}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating Quote */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-elevated max-w-sm">
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Quote"
                    size={24}
                    className="text-deep-teal flex-shrink-0 mt-1"
                  />
                  <div>
                    <p className="text-body font-medium text-foreground mb-2">
                      "Every love story deserves to be told beautifully"
                    </p>
                    <p className="text-caption text-muted-foreground">
                      — Studio Philosophy
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Behind the Scenes Gallery */}
            <div className="absolute -top-8 -right-8 hidden lg:block">
              <div className="grid grid-cols-2 gap-3 w-48">
                {behindScenesImages?.slice(0, 2)?.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-lg overflow-hidden shadow-soft"
                  >
                    <Image
                      src={image?.src}
                      alt={image?.alt}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      width={image?.width}
                      height={image?.height}
                      sizes="(max-width: 1024px) 25vw, 12vw"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-3">
                <div className="aspect-portrait rounded-lg overflow-hidden shadow-soft w-24 mx-auto">
                  <Image
                    src={behindScenesImages?.[2]?.src}
                    alt={behindScenesImages?.[2]?.alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    width={behindScenesImages?.[2]?.width}
                    height={behindScenesImages?.[2]?.height}
                    sizes="(max-width: 1024px) 25vw, 12vw"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-20 h-20 bg-deep-teal/20 rounded-full blur-xl" />
            <div className="absolute bottom-12 right-12 w-16 h-16 bg-primary/20 rounded-full blur-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
