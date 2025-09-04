import React from 'react';
import Icon from '../../../components/AppIcon';

const StoryHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-20 lg:py-28">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5"></div>
      
      <div className="container-fluid relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
              <Icon name="Heart" size={20} className="text-accent" />
              <span className="text-sm font-medium text-accent">Real Stories</span>
            </div>
          </div>
          
          <h1 className="text-display text-foreground mb-6">
            Love Stories That
            <span className="block text-primary font-heading">Inspire Trust</span>
          </h1>
          
          <p className="text-subtitle text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover authentic experiences from couples who trusted us with their most precious moments. 
            Every story is a testament to our commitment to excellence and lasting relationships.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="Star" size={16} className="text-warning fill-current" />
              <span className="font-medium">4.9/5 Average Rating</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-muted-foreground/30 rounded-full"></div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="Users" size={16} className="text-primary" />
              <span className="font-medium">500+ Happy Couples</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-muted-foreground/30 rounded-full"></div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="Award" size={16} className="text-accent" />
              <span className="font-medium">Award Winning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryHero;