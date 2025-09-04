import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FilmTestimonials = ({ testimonials }) => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-headline text-foreground mb-4">
          What Our Clients Say About Our Films
        </h2>
        <p className="text-body text-muted-foreground max-w-2xl mx-auto">
          Hear from couples who experienced the magic of our cinematic storytelling
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials?.map((testimonial) => (
          <div
            key={testimonial?.id}
            className="bg-card rounded-lg p-6 border border-border shadow-soft hover:shadow-elevated transition-all duration-300"
          >
            {/* Quote */}
            <div className="mb-6">
              <Icon name="Quote" size={24} className="text-accent mb-3" />
              <blockquote className="text-body text-foreground leading-relaxed">
                "{testimonial?.quote}"
              </blockquote>
            </div>

            {/* Client Info */}
            <div className="flex items-center space-x-4">
              <Image
                src={testimonial?.clientImage}
                alt={testimonial?.clientName}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-medium text-foreground">
                  {testimonial?.clientName}
                </h4>
                <p className="text-caption text-muted-foreground">
                  {testimonial?.eventType} • {testimonial?.location}
                </p>
              </div>
            </div>

            {/* Film Reference */}
            {testimonial?.filmTitle && (
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-caption text-muted-foreground">
                  <Icon name="Film" size={14} />
                  <span>Featured in: {testimonial?.filmTitle}</span>
                </div>
              </div>
            )}

            {/* Rating */}
            <div className="flex items-center mt-4">
              {[...Array(5)]?.map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={16}
                  className={`${
                    i < testimonial?.rating
                      ? 'text-yellow-400 fill-current' :'text-gray-300'
                  }`}
                />
              ))}
              <span className="ml-2 text-caption text-muted-foreground">
                {testimonial?.rating}/5
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilmTestimonials;