import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import { Link } from "react-router-dom";

const QuickAccessSection = () => {
  const quickLinks = [
    {
      title: "Book Your Dream Shoot",
      description:
        "Schedule a personalized consultation to discuss your photography needs",
      icon: "Calendar",
      color: "primary",
      link: "/consultation-booking",
      action: "Book Now",
    },
    {
      title: "View Portfolio",
      description:
        "Explore our complete collection of wedding and portrait photography",
      icon: "Camera",
      color: "accent",
      link: "/portfolio-hub",
      action: "Browse Gallery",
    },
    {
      title: "Watch Films",
      description:
        "Experience our cinematic approach through beautiful wedding films",
      icon: "Film",
      color: "secondary",
      link: "/film-showcase",
      action: "Watch Now",
    },
    {
      title: "Client Stories",
      description:
        "Read testimonials and see real wedding experiences from our couples",
      icon: "Heart",
      color: "primary",
      link: "/client-stories",
      action: "Read Stories",
    },
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/10",
          icon: "text-primary",
          button: "btn-primary",
        };
      case "accent":
        return {
          bg: "bg-accent/10",
          icon: "text-accent",
          button: "btn-accent",
        };
      case "secondary":
        return {
          bg: "bg-secondary/60",
          icon: "text-secondary-foreground",
          button: "btn-secondary",
        };
      default:
        return {
          bg: "bg-primary/10",
          icon: "text-primary",
          button: "btn-primary",
        };
    }
  };

  return (
    <section className="py-16 bg-background px-0 sm:px-16">
      <div className="container-fluid">
        <div className="text-center mb-12">
          <h2 className="text-headline text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Explore more of what The Dream Capture Studio has to offer and take
            the next step in your photography journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks?.map((link, index) => {
            const colors = getColorClasses(link?.color);

            return (
              <div
                key={index}
                className="card group hover:shadow-elevated transition-all duration-300"
              >
                <div className="p-6 text-center">
                  <div
                    className={`w-16 h-16 ${colors?.bg} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon
                      name={link?.icon}
                      size={28}
                      className={colors?.icon}
                    />
                  </div>

                  <h3 className="text-title text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {link?.title}
                  </h3>

                  <p className="text-body text-muted-foreground mb-6">
                    {link?.description}
                  </p>

                  <Link to={link?.link}>
                    <Button
                      variant={link?.color === "accent" ? "default" : "outline"}
                      fullWidth
                      iconName="ArrowRight"
                      iconPosition="right"
                      className="group-hover:shadow-soft transition-shadow duration-300"
                    >
                      {link?.action}
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-lg p-8">
            <Icon
              name="Sparkles"
              size={32}
              className="text-accent mx-auto mb-4"
            />
            <h3 className="text-title text-foreground mb-4">
              Need Something Specific?
            </h3>
            <p className="text-body text-muted-foreground mb-6 max-w-2xl mx-auto">
              Can't find the resource you're looking for? We're always creating
              new content based on our clients' needs.
            </p>
            <Button
              variant="outline"
              iconName="MessageCircle"
              iconPosition="left"
            >
              Request a Resource
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAccessSection;
