import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ConsultationTypes = ({ selectedType, onTypeSelect }) => {
  const consultationTypes = [
    {
      id: 'virtual',
      name: 'Virtual Discovery Call',
      duration: '30-45 minutes',
      description: 'Perfect for initial conversations and getting acquainted. We\'ll discuss your vision, timeline, and answer all your questions from the comfort of your home.',
      icon: 'Video',
      features: [
        'Screen sharing for portfolio review',
        'Style preference discussion',
        'Package overview',
        'Q&A session'
      ],
      ideal: 'Couples in different locations or preferring initial virtual meeting'
    },
    {
      id: 'studio',
      name: 'In-Person Studio Visit',
      duration: '60-90 minutes',
      description: 'Experience our creative space firsthand. View printed portfolios, meet the team, and get a feel for our artistic approach in our beautifully designed studio.',
      icon: 'Camera',
      features: [
        'Portfolio viewing experience',
        'Meet your potential photographer',
        'Studio tour and equipment showcase',
        'Sample album review'
      ],
      ideal: 'Couples who love tactile experiences and want to see work in print'
    },
    {
      id: 'location',
      name: 'Location Meeting',
      duration: '45-75 minutes',
      description: 'Meet at your venue or a meaningful location. Perfect for destination celebrations or when you want to discuss specific location possibilities.',
      icon: 'MapPin',
      features: [
        'Venue walkthrough and planning',
        'Lighting assessment',
        'Timeline discussion on-site',
        'Location-specific recommendations'
      ],
      ideal: 'Destination weddings or venue-specific planning needs'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container-fluid">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-headline text-foreground mb-4">
              Choose Your Consultation Style
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Every couple is unique, and so is every consultation. Select the format that feels most comfortable for you.
            </p>
          </div>

          {/* Consultation Type Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {consultationTypes?.map((type) => (
              <div
                key={type?.id}
                onClick={() => onTypeSelect(type?.id)}
                className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedType === type?.id
                    ? 'border-primary bg-primary/5 shadow-elevated'
                    : 'border-border bg-card hover:border-primary/30 hover:shadow-soft'
                }`}
              >
                {/* Selection Indicator */}
                {selectedType === type?.id && (
                  <div className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} color="white" />
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${
                  selectedType === type?.id ? 'bg-primary' : 'bg-muted'
                }`}>
                  <Icon 
                    name={type?.icon} 
                    size={28} 
                    color={selectedType === type?.id ? 'white' : 'var(--color-muted-foreground)'} 
                  />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {type?.name}
                </h3>
                
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Icon name="Clock" size={16} className="mr-2" />
                  <span>{type?.duration}</span>
                </div>

                <p className="text-body text-muted-foreground mb-4">
                  {type?.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {type?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-foreground">
                      <Icon name="Check" size={14} className="mr-2 text-accent" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal For */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium">Ideal for:</span> {type?.ideal}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm">
              <Icon name="Info" size={16} />
              <span>All consultations are complimentary and commitment-free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationTypes;