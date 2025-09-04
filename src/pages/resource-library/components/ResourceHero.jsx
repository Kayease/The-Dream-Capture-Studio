import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ResourceHero = ({ onNewsletterClick }) => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-28">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5"></div>

      <div className="container-fluid relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Icon name="BookOpen" size={32} className="text-primary" />
            </div>
          </div>

          <h1 className="text-display text-foreground mb-6">
            Your Photography
            <span className="text-primary block">Resource Library</span>
          </h1>

          <p className="text-subtitle text-muted-foreground mb-8 max-w-2xl mx-auto">
            Expert guides, styling tips, and planning resources to help you
            prepare for your perfect photography session. From wardrobe
            selection to timeline planning, we've got you covered.
          </p>

          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="default" 
              iconName="Download" 
              iconPosition="left"
              className="shadow-soft hover:shadow-elevated"
            >
              Download Planning Guide
            </Button>
            
            <Button 
              variant="outline" 
              iconName="Mail" 
              iconPosition="left"
              onClick={onNewsletterClick}
            >
              Subscribe for Tips
            </Button>
          </div> */}

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Calendar" size={24} className="text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                Planning Guides
              </h3>
              <p className="text-caption">
                Comprehensive timelines and checklists
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Palette" size={24} className="text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                Styling Tips
              </h3>
              <p className="text-caption">
                Wardrobe and color coordination advice
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/60 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name="MapPin"
                  size={24}
                  className="text-secondary-foreground"
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                Location Insights
              </h3>
              <p className="text-caption">
                Venue guides and seasonal recommendations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceHero;
