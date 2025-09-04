import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustSignals = () => {
  const platforms = [
    {
      name: "Google Reviews",
      rating: 4.9,
      reviews: 127,
      icon: "Star",
      color: "text-warning"
    },
    {
      name: "WeddingWire",
      rating: 4.8,
      reviews: 89,
      icon: "Heart",
      color: "text-red-500"
    },
    {
      name: "The Knot",
      rating: 4.9,
      reviews: 156,
      icon: "Award",
      color: "text-purple-500"
    },
    {
      name: "Facebook",
      rating: 4.7,
      reviews: 203,
      icon: "ThumbsUp",
      color: "text-blue-500"
    }
  ];

  const certifications = [
    {
      name: "Professional Photographers of America",
      abbr: "PPA",
      icon: "Camera",
      description: "Certified Professional Photographer"
    },
    {
      name: "Wedding & Portrait Photographers International",
      abbr: "WPPI",
      icon: "Users",
      description: "Master Photographer Certification"
    },
    {
      name: "International Association of Wedding Photographers",
      abbr: "IAWP",
      icon: "Globe",
      description: "Excellence in Wedding Photography"
    },
    {
      name: "Better Business Bureau",
      abbr: "BBB",
      icon: "Shield",
      description: "A+ Rating & Accreditation"
    }
  ];

  const guarantees = [
    {
      title: "100% Satisfaction Guarantee",
      description: "If you're not completely happy, we'll make it right",
      icon: "CheckCircle"
    },
    {
      title: "Fully Insured & Bonded",
      description: "Comprehensive liability and equipment insurance",
      icon: "Shield"
    },
    {
      title: "Backup Equipment",
      description: "Multiple camera bodies and backup systems",
      icon: "HardDrive"
    },
    {
      title: "Timely Delivery",
      description: "Gallery delivered within 4-6 weeks guaranteed",
      icon: "Clock"
    }
  ];

  return (
    <section className="p-16 lg:p-20 bg-background">
      <div className="container-fluid">
        <div className="text-center mb-12">
          <h2 className="text-headline text-foreground mb-4">
            Trusted by <span className="text-primary">500+ Couples</span>
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence is reflected in our reviews, certifications, and guarantees.
          </p>
        </div>

        {/* Review Platforms */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {platforms?.map((platform, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border border-border shadow-soft text-center hover:shadow-elevated transition-all duration-300">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4`}>
                <Icon name={platform?.icon} size={24} className={platform?.color} />
              </div>
              <h3 className="text-title text-foreground font-medium mb-2">{platform?.name}</h3>
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[...Array(5)]?.map((_, i) => (
                  <Icon 
                    key={i} 
                    name="Star" 
                    size={14} 
                    className={i < Math.floor(platform?.rating) ? "text-warning fill-current" : "text-muted-foreground"} 
                  />
                ))}
                <span className="text-sm font-medium text-foreground ml-2">{platform?.rating}</span>
              </div>
              <p className="text-sm text-muted-foreground">{platform?.reviews} reviews</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16 p-16 lg:p-20">
          <h3 className="text-title text-foreground text-center mb-8">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <div key={index} className="bg-secondary/10 rounded-xl p-6 border border-secondary/20 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon name={cert?.icon} size={28} className="text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{cert?.abbr}</div>
                <h4 className="text-sm font-medium text-foreground mb-2">{cert?.name}</h4>
                <p className="text-xs text-muted-foreground">{cert?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div className="bg-muted/30 rounded-2xl p-8 lg:p-12">
          <h3 className="text-title text-foreground text-center mb-8">Our Promise to You</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {guarantees?.map((guarantee, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name={guarantee?.icon} size={24} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-title text-foreground font-medium mb-2">{guarantee?.title}</h4>
                  <p className="text-body text-muted-foreground">{guarantee?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-body text-muted-foreground">Happy Couples</p>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">4.9</div>
            <p className="text-body text-muted-foreground">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">98%</div>
            <p className="text-body text-muted-foreground">Referral Rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">5</div>
            <p className="text-body text-muted-foreground">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;