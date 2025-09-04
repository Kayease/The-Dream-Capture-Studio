import React, { useState, useEffect } from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael Chen",
      event: "Wedding Photography",
      date: "September 2024",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=400&fit=crop",
      testimonial: `The Dream Capture Studio didn't just photograph our wedding—they captured our souls. Every image tells the story of our love with such artistry and emotion. When we look at our photos, we're transported back to that magical day. The team's professionalism and artistic vision exceeded every expectation.`,
      videoThumbnail:
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
      location: "Napa Valley, CA",
    },
    {
      id: 2,
      name: "Jennifer & David Rodriguez",
      event: "Prewedding & Wedding",
      date: "August 2024",
      rating: 5,
      image:
        "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?w=400&h=400&fit=crop",
      testimonial: `From our engagement session to our wedding day, The Dream Capture Studio created magic. Their ability to make us feel comfortable while capturing our most intimate moments is unparalleled. The photos are breathtaking works of art that we'll treasure forever. Worth every penny and more.`,
      videoThumbnail:
        "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?w=600&h=400&fit=crop",
      location: "Big Sur, CA",
    },
    {
      id: 4,
      name: "Lisa & Robert Kim",
      event: "Fashion & Portrait Session",
      date: "June 2024",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=400&fit=crop",
      testimonial: `Working with The Dream Capture Studio for our anniversary portraits was incredible. They transformed our vision into stunning reality, creating images that are both fashion-forward and deeply personal. The attention to detail and creative direction was phenomenal.`,
      videoThumbnail:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      location: "Los Angeles, CA",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials?.length) % testimonials?.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }
      />
    ));
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-fluid">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-accent font-medium mb-4">
            <Icon name="MessageCircle" size={20} />
            <span>Client Stories</span>
          </div>
          <h2 className="text-headline mb-4">What Our Clients Say</h2>
          <p className="text-subtitle text-muted-foreground max-w-2xl mx-auto">
            Real stories from real couples who trusted us to capture their most
            precious moments.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video/Image Side */}
            <div className="relative">
              <div className="aspect-cinematic rounded-2xl overflow-hidden shadow-dramatic">
                <Image
                  src={testimonials?.[currentTestimonial]?.videoThumbnail}
                  alt={`${testimonials?.[currentTestimonial]?.name} wedding photos`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group">
                    <Icon
                      name="Play"
                      size={32}
                      className="text-white ml-1 group-hover:scale-110 transition-transform duration-300"
                    />
                  </button>
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="flex items-center space-x-2 text-white text-sm">
                    <Icon name="MapPin" size={14} />
                    <span>{testimonials?.[currentTestimonial]?.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-8">
              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-soft">
                  <Image
                    src={testimonials?.[currentTestimonial]?.image}
                    alt={testimonials?.[currentTestimonial]?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-title">
                    {testimonials?.[currentTestimonial]?.name}
                  </h3>
                  <p className="text-caption text-muted-foreground">
                    {testimonials?.[currentTestimonial]?.event} •{" "}
                    {testimonials?.[currentTestimonial]?.date}
                  </p>
                  <div className="flex items-center space-x-1 mt-1">
                    {renderStars(testimonials?.[currentTestimonial]?.rating)}
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="relative">
                <Icon
                  name="Quote"
                  size={40}
                  className="text-accent/20 absolute -top-4 -left-2"
                />
                <blockquote className="text-body text-foreground leading-relaxed pl-8">
                  {testimonials?.[currentTestimonial]?.testimonial}
                </blockquote>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {testimonials?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? "bg-primary w-8"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-muted hover:bg-muted-foreground/10 flex items-center justify-center transition-colors duration-300"
                    aria-label="Previous testimonial"
                  >
                    <Icon name="ChevronLeft" size={20} />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-muted hover:bg-muted-foreground/10 flex items-center justify-center transition-colors duration-300"
                    aria-label="Next testimonial"
                  >
                    <Icon name="ChevronRight" size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
