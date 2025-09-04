import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ResourceCategories = ({ onCategoryChange, activeCategory }) => {
  const categories = [
    {
      id: 'all',
      name: 'All Resources',
      icon: 'Grid3X3',
      count: 24,
      description: 'Complete collection of guides and tips'
    },
    {
      id: 'planning',
      name: 'Planning Guides',
      icon: 'Calendar',
      count: 8,
      description: 'Timeline templates and checklists'
    },
    {
      id: 'styling',
      name: 'Styling Tips',
      icon: 'Palette',
      count: 6,
      description: 'Wardrobe and color coordination'
    },
    {
      id: 'locations',
      name: 'Location Guides',
      icon: 'MapPin',
      count: 5,
      description: 'Venue insights and recommendations'
    },
    {
      id: 'photography',
      name: 'Photography Tips',
      icon: 'Camera',
      count: 5,
      description: 'Posing and preparation advice'
    }
  ];

  return (
    <section className="py-16 bg-muted/30 px-0 sm:px-16">
      <div className="container-fluid">
        <div className="text-center mb-12">
          <h2 className="text-headline text-foreground mb-4">
            Explore by Category
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you need with our organized resource categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories?.map((category) => (
            <div
              key={category?.id}
              onClick={() => onCategoryChange(category?.id)}
              className={`p-6 rounded-lg border cursor-pointer transition-all duration-300 hover:shadow-elevated ${
                activeCategory === category?.id
                  ? 'bg-primary text-primary-foreground border-primary shadow-soft'
                  : 'bg-card text-card-foreground border-border hover:border-primary/30'
              }`}
            >
              <div className="text-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  activeCategory === category?.id
                    ? 'bg-primary-foreground/20'
                    : 'bg-primary/10'
                }`}>
                  <Icon 
                    name={category?.icon} 
                    size={24} 
                    className={activeCategory === category?.id ? 'text-primary-foreground' : 'text-primary'} 
                  />
                </div>
                
                <h3 className="font-heading text-lg font-semibold mb-2">
                  {category?.name}
                </h3>
                
                <p className={`text-sm mb-3 ${
                  activeCategory === category?.id ? 'text-primary-foreground/80' : 'text-muted-foreground'
                }`}>
                  {category?.description}
                </p>
                
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  activeCategory === category?.id
                    ? 'bg-primary-foreground/20 text-primary-foreground'
                    : 'bg-accent/10 text-accent'
                }`}>
                  {category?.count} resources
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceCategories;