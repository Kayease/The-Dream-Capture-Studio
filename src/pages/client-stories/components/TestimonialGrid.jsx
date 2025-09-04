import React, { useState } from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const TestimonialGrid = ({ activeFilter }) => {
  const [expandedTestimonial, setExpandedTestimonial] = useState(null);

  const testimonials = [
    {
      id: 1,
      couple: "Emma & James",
      type: "wedding",
      season: "spring",
      location: "Napa Valley",
      date: "April 2024",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
      shortTestimonial:
        "Absolutely magical experience! They captured every emotion perfectly.",
      fullTestimonial: `From our first meeting, we knew The Dream Capture Studio was special. They took the time to understand our vision and made us feel so comfortable throughout the entire process.\n\nOur wedding day was a dream come true, and they captured every single precious moment. The photos are absolutely stunning - we cry happy tears every time we look through them.\n\nThree months later, we're still receiving compliments from family and friends about how beautiful our photos are. Worth every penny!`,
      highlights: [
        "Vineyard ceremony",
        "Golden hour portraits",
        "Family traditions",
        "Candid moments",
      ],
      socialProof: {
        platform: "Google Reviews",
        verified: true,
      },
    },
    {
      id: 2,
      couple: "Priya & Arjun",
      type: "wedding",
      season: "winter",
      location: "Mumbai, India",
      date: "December 2023",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=300&fit=crop",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      shortTestimonial:
        "They understood our cultural traditions and captured them beautifully.",
      fullTestimonial: `Planning a traditional Indian wedding with modern touches was challenging, but The Dream Capture Studio made it seamless. They researched our customs and traditions beforehand, which meant so much to our families.\n\nThe way they captured the intricate details of our ceremonies, the vibrant colors, and the emotional moments was incredible. They worked tirelessly for three days and delivered a gallery that tells our complete love story.\n\nOur parents, who were initially skeptical about hiring photographers from abroad, are now their biggest fans!`,
      highlights: [
        "3-day celebration",
        "Cultural ceremonies",
        "Traditional attire",
        "Family portraits",
      ],
      socialProof: {
        platform: "WeddingWire",
        verified: true,
      },
    },
    {
      id: 3,
      couple: "Lisa & David",
      type: "prewedding",
      season: "autumn",
      location: "Central Park, NYC",
      date: "October 2024",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
      shortTestimonial:
        "Made us feel like models! The autumn colors were captured perfectly.",
      fullTestimonial: `We were nervous about our engagement shoot, but the team made us feel so comfortable and natural. They guided us through poses while capturing genuine moments of laughter and love.\n\nThe autumn setting in Central Park was magical, and they knew exactly how to use the golden light and colorful leaves. We received so many compliments when we shared the photos!\n\nNow we can't wait for them to photograph our wedding next spring.`,
      highlights: [
        "Autumn foliage",
        "Golden hour",
        "Candid laughter",
        "Romantic poses",
      ],
      socialProof: {
        platform: "The Knot",
        verified: true,
      },
    },
    {
      id: 4,
      couple: "Maria & Carlos",
      type: "maternity",
      season: "summer",
      location: "Malibu Beach",
      date: "July 2024",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=300&fit=crop",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
      shortTestimonial:
        "Captured this special time in our lives so beautifully and elegantly.",
      fullTestimonial: `Being 8 months pregnant, I was worried about feeling uncomfortable during the shoot. The team was incredibly patient and made sure I felt beautiful and confident throughout.\n\nThe beach setting was perfect, and they captured the most stunning silhouettes against the sunset. These photos will be treasured forever as we welcome our first child.\n\nWe're already planning to book them for newborn photos!`,
      highlights: [
        "Beach sunset",
        "Elegant silhouettes",
        "Intimate moments",
        "Maternity glow",
      ],
      socialProof: {
        platform: "Facebook",
        verified: true,
      },
    },
    {
      id: 5,
      couple: "The Johnson Family",
      type: "family",
      season: "spring",
      location: "Botanical Gardens",
      date: "May 2024",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      shortTestimonial:
        "Amazing with kids! Got natural smiles from our toddler twins.",
      fullTestimonial: `Photographing a family with 2-year-old twins seemed impossible, but this team worked magic! They were so patient and creative, turning the session into a fun game for the kids.\n\nThe photos capture our family's personality perfectly - the chaos, the love, the laughter. We finally have beautiful family photos we're proud to display in our home.\n\nThey've become our go-to photographers for all family milestones.`,
      highlights: [
        "Twin toddlers",
        "Natural interactions",
        "Spring blooms",
        "Family dynamics",
      ],
      socialProof: {
        platform: "Google Reviews",
        verified: true,
      },
    },
    {
      id: 6,
      couple: "Sophia & Alexander",
      type: "fashion",
      season: "winter",
      location: "Downtown Loft",
      date: "January 2024",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      shortTestimonial:
        "Editorial quality photos that exceeded all our expectations.",
      fullTestimonial: `As a fashion blogger, I needed photos that would stand out on social media and in my portfolio. The Dream Capture Studio delivered beyond my wildest dreams.\n\nTheir understanding of lighting, composition, and styling created images that look like they belong in Vogue. The urban loft setting was perfect for the edgy, sophisticated look I wanted.\n\nThese photos have elevated my brand and opened doors to new opportunities.`,
      highlights: [
        "Editorial styling",
        "Urban setting",
        "Professional lighting",
        "Brand elevation",
      ],
      socialProof: {
        platform: "Instagram",
        verified: true,
      },
    },
  ];

  const filteredTestimonials =
    activeFilter === "all"
      ? testimonials
      : testimonials?.filter((t) => t?.type === activeFilter);

  const toggleExpanded = (id) => {
    setExpandedTestimonial(expandedTestimonial === id ? null : id);
  };

  return (
    <section className="p-16 lg:p-20 bg-muted/20 ">
      <div className="container-fluid">
        <div className="text-center mb-12">
          <h2 className="text-headline text-foreground mb-4">
            Real Stories, Real <span className="text-primary">Emotions</span>
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Every couple has a unique story. Here's how we've helped bring their
            visions to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials?.map((testimonial) => (
            <div
              key={testimonial?.id}
              className="bg-card rounded-xl overflow-hidden border border-border shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={testimonial?.image}
                  alt={`${testimonial?.couple} photography`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-muted">
                      <Image
                        src={testimonial?.avatar}
                        alt={testimonial?.couple}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-title text-foreground font-medium">
                        {testimonial?.couple}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial?.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial?.rating)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={14}
                        className="text-warning fill-current"
                      />
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mb-4">
                  <p className="text-body text-foreground leading-relaxed">
                    "
                    {expandedTestimonial === testimonial?.id
                      ? testimonial?.fullTestimonial
                      : testimonial?.shortTestimonial}
                    "
                  </p>

                  {testimonial?.fullTestimonial !==
                    testimonial?.shortTestimonial && (
                    <button
                      onClick={() => toggleExpanded(testimonial?.id)}
                      className="text-primary text-sm font-medium mt-2 hover:underline"
                    >
                      {expandedTestimonial === testimonial?.id
                        ? "Read Less"
                        : "Read More"}
                    </button>
                  )}
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {testimonial?.highlights
                      ?.slice(0, 3)
                      ?.map((highlight, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 bg-secondary/30 text-secondary-foreground rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    {testimonial?.highlights?.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full">
                        +{testimonial?.highlights?.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" size={14} className="text-accent" />
                    <span className="text-xs text-muted-foreground">
                      Verified on {testimonial?.socialProof?.platform}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {testimonial?.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTestimonials?.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="Search"
              size={48}
              className="text-muted-foreground mx-auto mb-4"
            />
            <h3 className="text-title text-foreground mb-2">
              No Stories Found
            </h3>
            <p className="text-body text-muted-foreground">
              Try adjusting your filters to see more client stories.
            </p>
          </div>
        )}

        <div className="text-center mt-12">
          <Button variant="outline" iconName="Plus" iconPosition="left">
            Load More Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialGrid;
