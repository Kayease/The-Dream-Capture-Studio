import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ConsultationTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael Chen",
      celebrationType: "Wedding",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=400&fit=crop&crop=faces",
      quote: `The consultation was everything we hoped for and more. They took time to understand our vision, showed us exactly how they'd capture our story, and made us feel so comfortable. We knew immediately they were the right choice.`,
      highlight: "Made us feel so comfortable",
      rating: 5
    },
    {
      id: 2,
      name: "Jessica Rodriguez",
      celebrationType: "Maternity",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9c9b8d4?w=400&h=400&fit=crop&crop=faces",
      quote: `I was nervous about the consultation, but they were so warm and professional. They explained their process beautifully and showed me exactly the style I was dreaming of. The virtual call was perfect for my schedule.`,
      highlight: "Explained their process beautifully",
      rating: 5
    },
    {
      id: 3,
      name: "David & Emma Thompson",
      celebrationType: "Engagement",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
      quote: `The studio visit was incredible! Seeing their work in print and meeting the team in person sealed the deal. They answered every question and made the whole process feel effortless and exciting.`,
      highlight: "Made the whole process feel effortless",
      rating: 5
    }
  ];

  const consultationBenefits = [
    {
      icon: "Users",
      title: "Personal Connection",
      description: "Meet your potential photographer and ensure personality alignment"
    },
    {
      icon: "Eye",
      title: "Vision Alignment",
      description: "Discuss your aesthetic preferences and creative possibilities"
    },
    {
      icon: "Calendar",
      title: "Timeline Planning",
      description: "Create a detailed schedule that works perfectly for your celebration"
    },
    {
      icon: "MapPin",
      title: "Location Insights",
      description: "Get expert advice on venues, lighting, and photo opportunities"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container-fluid">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-headline text-foreground mb-4">
              What Couples Say About Their Consultation Experience
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Our consultation process is designed to be comfortable, informative, and inspiring. 
              Here's what couples have shared about their experience.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {testimonials?.map((testimonial) => (
              <div key={testimonial?.id} className="bg-card rounded-xl border border-border p-6 shadow-soft">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-body text-foreground mb-6 leading-relaxed">
                  "{testimonial?.quote}"
                </blockquote>

                {/* Highlight */}
                <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  {testimonial?.highlight}
                </div>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <Image
                    src={testimonial?.image}
                    alt={testimonial?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-foreground">{testimonial?.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial?.celebrationType}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Consultation Benefits */}
          <div className="bg-card rounded-xl border border-border p-8">
            <h3 className="font-heading text-2xl font-semibold text-foreground text-center mb-8">
              Why Our Consultation Process Works
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {consultationBenefits?.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit?.icon} size={28} color="var(--color-primary)" />
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {benefit?.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {benefit?.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust Statement */}
            <div className="mt-8 pt-8 border-t border-border text-center">
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Shield" size={16} />
                <span>100% No-Pressure Guarantee • Complimentary Consultation • No Commitment Required</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationTestimonials;