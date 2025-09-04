import React from 'react';
import Icon from '../../../components/AppIcon';

const ConsultationHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted to-secondary/20 py-16 md:py-20 lg:py-24">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Shield" size={16} />
            <span>No Pressure • Collaborative Planning • Genuine Connection</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-display text-foreground mb-6">
            Let's Create Something
            <span className="text-primary block">Beautiful Together</span>
          </h1>

          {/* Subheading */}
          <p className="text-subtitle text-muted-foreground max-w-2xl mx-auto mb-8">
            Your consultation is the first step in crafting a photography experience as unique as your love story. 
            We'll explore your vision, discuss possibilities, and ensure we're the perfect match for your celebration.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Icon name="Heart" size={24} color="var(--color-primary)" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Personal Connection</h3>
              <p className="text-sm text-muted-foreground">Get to know us and let us understand your unique story</p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Icon name="Palette" size={24} color="var(--color-primary)" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Style Exploration</h3>
              <p className="text-sm text-muted-foreground">Discover your aesthetic preferences and creative possibilities</p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Icon name="MapPin" size={24} color="var(--color-primary)" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Perfect Planning</h3>
              <p className="text-sm text-muted-foreground">Discuss timeline, locations, and all the beautiful details</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
    </section>
  );
};

export default ConsultationHero;