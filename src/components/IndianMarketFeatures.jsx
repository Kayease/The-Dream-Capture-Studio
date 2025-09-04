import React from "react";
import { INDIAN_MARKET_CONFIG } from "../config/indianMarket";
import Button from "./ui/Button";
import Icon from "./AppIcon";

const IndianMarketFeatures = () => {
  const { packages, serviceCities, culturalElements, contact } =
    INDIAN_MARKET_CONFIG;

  return (
    <section className="py-16 bg-gradient-to-br from-off-white via-white to-secondary/20 max-w-6xl mx-auto">
      <div className="container mx-auto px-4">
        {/* Indian Wedding Packages */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4 relative">
            Indian Wedding Packages
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-deep-teal to-warm-amber rounded-full"></div>
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto font-body">
            Traditional Indian weddings deserve traditional excellence. Choose
            from our specially crafted packages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {Object.entries(packages).map(([key, pkg], index) => (
            <div
              key={key}
              className="bg-white rounded-lg shadow-soft p-6 border-l-4 border-primary hover:shadow-elevated transition-all duration-300 hover:scale-105 transform cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <h3 className="text-xl font-heading font-semibold text-primary mb-2 capitalize group-hover:text-deep-teal transition-colors duration-300">
                  {key}
                </h3>
                <p className="text-2xl font-bold text-secondary mb-2">
                  {pkg.price}
                </p>
                <p className="text-foreground/70 mb-4 font-body">
                  {pkg.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white transition-all duration-300 group-hover:scale-105"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Service Cities */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4 relative">
            Our Services Across India
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-warm-amber to-deep-teal rounded-full"></div>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {serviceCities.slice(0, 10).map((city, index) => (
              <span
                key={city}
                className="bg-deep-teal/10 text-deep-teal px-4 py-2 rounded-full text-sm font-medium font-body hover:bg-deep-teal hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Cultural Elements */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-warm-amber/20 transition-all duration-300 group-hover:scale-110">
              <Icon
                name="Palette"
                size={32}
                className="text-secondary group-hover:text-warm-amber transition-colors duration-300"
              />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2 text-primary group-hover:text-deep-teal transition-colors duration-300">
              Traditional Colors
            </h3>
            <p className="text-foreground/70 font-body">
              {culturalElements.colors.join(", ")} - Colors that celebrate
              Indian heritage
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-deep-teal/20 transition-all duration-300 group-hover:scale-110">
              <Icon
                name="Heart"
                size={32}
                className="text-primary group-hover:text-deep-teal transition-colors duration-300"
              />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2 text-primary group-hover:text-deep-teal transition-colors duration-300">
              Sacred Traditions
            </h3>
            <p className="text-foreground/70 font-body">
              Capturing every ritual from Mehendi to Vidaai with cultural
              sensitivity
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-warm-amber/20 transition-all duration-300 group-hover:scale-110">
              <Icon
                name="Camera"
                size={32}
                className="text-secondary group-hover:text-warm-amber transition-colors duration-300"
              />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2 text-primary group-hover:text-deep-teal transition-colors duration-300">
              Regional Expertise
            </h3>
            <p className="text-foreground/70 font-body">
              Understanding diverse Indian wedding customs across all regions
            </p>
          </div>
        </div>

        {/* Contact CTA - Enhanced */}
        <div className="bg-gradient-to-r from-primary via-rich-burgundy to-deep-teal rounded-lg p-8 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Ready to Capture Your Dream Wedding?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Let's create memories that will last a lifetime
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-primary hover:bg-gray-50 border-white hover:scale-105 transition-all duration-300"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Call Now: {contact.phone}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-secondary text-foreground hover:bg-secondary/90 border-secondary hover:scale-105 transition-all duration-300"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                WhatsApp: {contact.whatsapp}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndianMarketFeatures;
