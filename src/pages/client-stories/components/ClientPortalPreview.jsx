import React, { useState } from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ClientPortalPreview = () => {
  const [activeTab, setActiveTab] = useState("gallery");

  const portalFeatures = [
    {
      id: "gallery",
      name: "Private Gallery",
      icon: "Image",
      description: "Secure access to all your photos",
    },
    {
      id: "sharing",
      name: "Easy Sharing",
      icon: "Share2",
      description: "Share with family and friends",
    },
    {
      id: "ordering",
      name: "Print Ordering",
      icon: "ShoppingCart",
      description: "Order prints and albums directly",
    },
    {
      id: "favorites",
      name: "Favorites",
      icon: "Heart",
      description: "Mark your favorite photos",
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=200&fit=crop",
  ];

  const clientTestimonials = [
    {
      name: "Sarah & Michael",
      text: "The client portal made sharing our photos with family so easy! Grandparents could access everything instantly.",
      feature: "Easy sharing with family",
    },
    {
      name: "Emma & James",
      text: "Loved being able to mark our favorites and order prints directly. The whole process was seamless.",
      feature: "Integrated print ordering",
    },
    {
      name: "Lisa & David",
      text: "Having lifetime access to our photos gives us such peace of mind. We can download them anytime!",
      feature: "Lifetime gallery access",
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "gallery":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-title text-foreground font-medium">
                  Sarah & Michael's Wedding
                </h4>
                <p className="text-sm text-muted-foreground">
                  September 15, 2024 • 347 photos
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" iconName="Download">
                  Download All
                </Button>
                <Button variant="outline" size="sm" iconName="Share2">
                  Share Gallery
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {galleryImages?.map((image, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] rounded-lg overflow-hidden bg-muted relative group cursor-pointer"
                >
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                      <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                        <Icon name="Heart" size={16} className="text-primary" />
                      </button>
                      <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                        <Icon
                          name="Download"
                          size={16}
                          className="text-primary"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "sharing":
        return (
          <div className="space-y-6">
            <div className="bg-muted/50 rounded-lg p-6">
              <h4 className="text-title text-foreground font-medium mb-4">
                Share Your Gallery
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-background rounded-lg border border-border">
                  <Icon name="Link" size={20} className="text-primary" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">
                      Gallery Link
                    </p>
                    <p className="text-xs text-muted-foreground">
                      https://gallery.capturestudio.pro/sarah-michael-2024
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" iconName="Copy">
                    Copy
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center space-x-2 p-3 bg-background rounded-lg border border-border hover:border-primary/20 transition-colors">
                    <Icon name="Mail" size={18} className="text-blue-500" />
                    <span className="text-sm text-foreground">Email</span>
                  </button>
                  <button className="flex items-center space-x-2 p-3 bg-background rounded-lg border border-border hover:border-primary/20 transition-colors">
                    <Icon
                      name="MessageCircle"
                      size={18}
                      className="text-green-500"
                    />
                    <span className="text-sm text-foreground">WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h5 className="text-sm font-medium text-foreground">
                Recent Activity
              </h5>
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-sm">
                  <Icon
                    name="Eye"
                    size={16}
                    className="text-muted-foreground"
                  />
                  <span className="text-muted-foreground">
                    Mom viewed the gallery • 2 hours ago
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Icon
                    name="Download"
                    size={16}
                    className="text-muted-foreground"
                  />
                  <span className="text-muted-foreground">
                    Dad downloaded 15 photos • 1 day ago
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Icon
                    name="Heart"
                    size={16}
                    className="text-muted-foreground"
                  />
                  <span className="text-muted-foreground">
                    Sister favorited 8 photos • 2 days ago
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      case "ordering":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <Icon
                  name="Image"
                  size={32}
                  className="text-primary mx-auto mb-3"
                />
                <h5 className="text-sm font-medium text-foreground mb-2">
                  Prints
                </h5>
                <p className="text-xs text-muted-foreground mb-3">
                  Professional quality prints
                </p>
                <Button variant="outline" size="sm">
                  Order Prints
                </Button>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <Icon
                  name="Book"
                  size={32}
                  className="text-primary mx-auto mb-3"
                />
                <h5 className="text-sm font-medium text-foreground mb-2">
                  Albums
                </h5>
                <p className="text-xs text-muted-foreground mb-3">
                  Custom wedding albums
                </p>
                <Button variant="outline" size="sm">
                  Create Album
                </Button>
              </div>
            </div>

            <div className="bg-background rounded-lg p-4 border border-border">
              <h5 className="text-sm font-medium text-foreground mb-3">
                Recent Orders
              </h5>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                      <Icon name="Image" size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        8x10 Prints (12 photos)
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Ordered Sep 20, 2024
                      </p>
                    </div>
                  </div>
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                    Shipped
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                      <Icon name="Book" size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Wedding Album (50 pages)
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Ordered Sep 18, 2024
                      </p>
                    </div>
                  </div>
                  <span className="text-xs bg-warning/10 text-warning px-2 py-1 rounded-full">
                    Processing
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      case "favorites":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-title text-foreground font-medium">
                  Your Favorites
                </h4>
                <p className="text-sm text-muted-foreground">
                  23 photos marked as favorites
                </p>
              </div>
              <Button variant="outline" size="sm" iconName="Download">
                Download Favorites
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {galleryImages?.slice(0, 6)?.map((image, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] rounded-lg overflow-hidden bg-muted relative"
                >
                  <Image
                    src={image}
                    alt={`Favorite image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <Icon
                        name="Heart"
                        size={12}
                        className="text-white fill-current"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <h5 className="text-sm font-medium text-foreground mb-2">
                Create Collection
              </h5>
              <p className="text-xs text-muted-foreground mb-3">
                Group your favorites into custom collections
              </p>
              <Button variant="ghost" size="sm" iconName="Plus">
                New Collection
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-muted/20">
      <div className="container-fluid">
        <div className="text-center mb-12">
          <h2 className="text-headline text-foreground mb-4">
            Your Personal <span className="text-primary">Photo Portal</span>
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Experience doesn't end with delivery. Our client portal provides
            lifetime access to your photos with powerful sharing and ordering
            tools.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Portal Preview */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl border border-border shadow-soft overflow-hidden">
                {/* Portal Header */}
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 border-b border-border">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <Icon
                        name="Camera"
                        size={16}
                        className="text-primary-foreground"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-foreground">
                        The Dream Capture Studio
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Client Portal
                      </p>
                    </div>
                  </div>
                </div>

                {/* Portal Navigation */}
                <div className="border-b border-border">
                  <div className="flex">
                    {portalFeatures?.map((feature) => (
                      <button
                        key={feature?.id}
                        onClick={() => setActiveTab(feature?.id)}
                        className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 text-sm font-medium transition-colors ${
                          activeTab === feature?.id
                            ? "bg-primary/10 text-primary border-b-2 border-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                      >
                        <Icon name={feature?.icon} size={16} />
                        <span className="hidden sm:inline">
                          {feature?.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Portal Content */}
                <div className="p-6">{renderTabContent()}</div>
              </div>
            </div>

            {/* Features & Testimonials */}
            <div className="space-y-6">
              {/* Features */}
              <div className="bg-card rounded-xl p-6 border border-border shadow-soft">
                <h3 className="text-title text-foreground font-medium mb-4">
                  Portal Features
                </h3>
                <div className="space-y-4">
                  {portalFeatures?.map((feature) => (
                    <div
                      key={feature?.id}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon
                          name={feature?.icon}
                          size={16}
                          className="text-primary"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-foreground">
                          {feature?.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {feature?.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Testimonials */}
              <div className="space-y-4">
                {clientTestimonials?.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-4 border border-border shadow-soft"
                  >
                    <div className="flex items-start space-x-3">
                      <Icon
                        name="Quote"
                        size={16}
                        className="text-primary flex-shrink-0 mt-1"
                      />
                      <div>
                        <p className="text-sm text-foreground mb-2">
                          "{testimonial?.text}"
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-medium text-foreground">
                            {testimonial?.name}
                          </p>
                          <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                            {testimonial?.feature}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientPortalPreview;
