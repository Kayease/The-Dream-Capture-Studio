import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import FilterBar from "./components/FilterBar";
import FeaturedCollections from "./components/FeaturedCollections";
import GalleryGrid from "./components/GalleryGrid";
import Lightbox from "./components/Lightbox";
import StatsBar from "./components/StatsBar";

import Button from "../../components/ui/Button";

const PortfolioHub = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState("masonry");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [favorites, setFavorites] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentCollection, setCurrentCollection] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock data for portfolio collections
  const mockCollections = [
    {
      id: "prewedding-1",
      title: "Sarah & Michael - Enchanted Forest",
      category: "prewedding",
      description: `A romantic prewedding session captured in the mystical beauty of Redwood National Park. Sarah and Michael's love story unfolds among towering ancient trees, creating an ethereal atmosphere that perfectly complements their intimate connection.`,
      date: "December 2024",
      location: "Redwood National Park, CA",
      photographer: "Elena Rodriguez",
      style: "Cinematic Romance",
      views: 2847,
      likes: 156,
      featured: true,
      award: "Best Prewedding 2024",
      coverImage:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop",
          alt: "Couple embracing among redwood trees",
          title: "Forest Embrace",
          caption:
            "The towering redwoods create a natural cathedral for their love",
          views: 342,
          camera: "Canon EOS R5",
          lens: "85mm f/1.4",
          settings: "f/2.8, 1/200s, ISO 400",
        },
        {
          url: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&h=800&fit=crop",
          alt: "Couple walking hand in hand through forest path",
          title: "Journey Together",
          caption: "Every step forward is a step into their shared future",
          views: 298,
          camera: "Canon EOS R5",
          lens: "35mm f/1.8",
          settings: "f/2.2, 1/160s, ISO 320",
        },
        {
          url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&h=800&fit=crop",
          alt: "Intimate moment with soft lighting",
          title: "Golden Hour Magic",
          caption: "When the light filters through the canopy, magic happens",
          views: 445,
          camera: "Canon EOS R5",
          lens: "50mm f/1.2",
          settings: "f/1.8, 1/250s, ISO 200",
        },
        {
          url: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=1200&h=800&fit=crop",
          alt: "Couple silhouette against forest backdrop",
          title: "Silhouette Stories",
          caption: "Sometimes the most powerful images are the simplest",
          views: 387,
          camera: "Canon EOS R5",
          lens: "85mm f/1.4",
          settings: "f/4.0, 1/320s, ISO 100",
        },
      ],
    },
    {
      id: "wedding-1",
      title: "Emma & James - Vineyard Celebration",
      category: "wedding",
      description: `A spectacular vineyard wedding that perfectly captured the essence of rustic elegance. Emma and James celebrated their union surrounded by rolling hills and endless rows of grapevines, creating memories that will last a lifetime.`,
      date: "November 2024",
      location: "Napa Valley, CA",
      photographer: "Marcus Chen",
      style: "Documentary",
      views: 4521,
      likes: 289,
      featured: true,
      award: "Wedding of the Year",
      coverImage:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=800&fit=crop",
          alt: "Bride and groom in vineyard setting",
          title: "Vineyard Vows",
          caption: "Surrounded by nature's bounty, they promised forever",
          views: 567,
          camera: "Sony A7R IV",
          lens: "24-70mm f/2.8",
          settings: "f/3.2, 1/200s, ISO 250",
        },
        {
          url: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=1200&h=800&fit=crop",
          alt: "Wedding ceremony in outdoor setting",
          title: "Sacred Moment",
          caption: "The moment two hearts became one under the open sky",
          views: 623,
          camera: "Sony A7R IV",
          lens: "70-200mm f/2.8",
          settings: "f/2.8, 1/250s, ISO 320",
        },
        {
          url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=800&fit=crop",
          alt: "Wedding reception celebration",
          title: "Celebration Dance",
          caption: "Joy fills the air as family and friends celebrate love",
          views: 445,
          camera: "Sony A7R IV",
          lens: "35mm f/1.4",
          settings: "f/2.0, 1/160s, ISO 800",
        },
      ],
    },
    {
      id: "baby-1",
      title: "Little Oliver - First Moments",
      category: "baby",
      description: `Capturing the precious first days of baby Oliver's life with gentle, heartwarming portraits that showcase the pure innocence and wonder of new life. Every tiny detail tells a story of love and new beginnings.`,
      date: "January 2025",
      location: "Home Studio, San Francisco",
      photographer: "Isabella Martinez",
      style: "Lifestyle",
      views: 1834,
      likes: 234,
      featured: false,
      coverImage:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=800&fit=crop",
          alt: "Newborn baby sleeping peacefully",
          title: "Peaceful Dreams",
          caption: "In the quietest moments, the greatest love is felt",
          views: 234,
          camera: "Canon EOS R6",
          lens: "85mm f/1.8",
          settings: "f/2.8, 1/125s, ISO 400",
        },
        {
          url: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1200&h=800&fit=crop",
          alt: "Baby with parents hands",
          title: "Protected Love",
          caption: "Safe in the hands that will guide him through life",
          views: 198,
          camera: "Canon EOS R6",
          lens: "100mm f/2.8 Macro",
          settings: "f/3.5, 1/100s, ISO 320",
        },
      ],
    },
    {
      id: "maternity-1",
      title: "Grace - Expecting Joy",
      category: "maternity",
      description: `An elegant maternity session celebrating Grace's journey into motherhood. These empowering portraits capture the beauty, strength, and anticipation of bringing new life into the world.`,
      date: "December 2024",
      location: "Golden Gate Park, SF",
      photographer: "David Kim",
      style: "Editorial",
      views: 2156,
      likes: 178,
      featured: true,
      coverImage:
        "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=800&h=600&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=1200&h=800&fit=crop",
          alt: "Elegant maternity portrait in natural setting",
          title: "Radiant Expectation",
          caption: "The glow of motherhood illuminates her beauty",
          views: 345,
          camera: "Nikon Z9",
          lens: "85mm f/1.4",
          settings: "f/2.0, 1/200s, ISO 200",
        },
        {
          url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop",
          alt: "Artistic maternity silhouette",
          title: "Life Within",
          caption: "The miracle of life captured in silhouette",
          views: 289,
          camera: "Nikon Z9",
          lens: "50mm f/1.8",
          settings: "f/2.8, 1/160s, ISO 100",
        },
      ],
    },
    {
      id: "fashion-1",
      title: "Urban Elegance - Fashion Editorial",
      category: "fashion",
      description: `A sophisticated fashion editorial showcasing contemporary urban style against the backdrop of San Francisco's architectural beauty. This series explores the intersection of fashion, art, and city life.`,
      date: "October 2024",
      location: "Downtown San Francisco",
      photographer: "Sophia Williams",
      style: "Editorial",
      views: 3245,
      likes: 412,
      featured: false,
      coverImage:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=800&fit=crop",
          alt: "Fashion model in urban setting",
          title: "City Sophistication",
          caption: "Where fashion meets the urban landscape",
          views: 456,
          camera: "Fujifilm GFX 100S",
          lens: "63mm f/2.8",
          settings: "f/4.0, 1/250s, ISO 160",
        },
        {
          url: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=800&fit=crop",
          alt: "Artistic fashion portrait",
          title: "Architectural Lines",
          caption: "Fashion and architecture in perfect harmony",
          views: 378,
          camera: "Fujifilm GFX 100S",
          lens: "110mm f/2.0",
          settings: "f/2.8, 1/320s, ISO 100",
        },
      ],
    },
    {
      id: "signature-1",
      title: "Timeless Moments - Signature Collection",
      category: "signature",
      description: `Our most celebrated works that define the The Dream Capture Studio aesthetic. These award-winning images represent the pinnacle of our artistic vision and technical excellence.`,
      date: "Various Dates",
      location: "Multiple Locations",
      photographer: "Studio Team",
      style: "Signature",
      views: 5678,
      likes: 567,
      featured: true,
      award: "Portfolio of the Year",
      coverImage:
        "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=800&h=600&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=1200&h=800&fit=crop",
          alt: "Award-winning portrait",
          title: "Timeless Beauty",
          caption: "A moment frozen in time, forever beautiful",
          views: 789,
          camera: "Various",
          lens: "Various",
          settings: "Various",
        },
        {
          url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop",
          alt: "Artistic composition",
          title: "Artistic Vision",
          caption: "Where technical skill meets creative vision",
          views: 654,
          camera: "Various",
          lens: "Various",
          settings: "Various",
        },
      ],
    },
  ];

  // Filter collections based on active filter and search term
  const filteredCollections = mockCollections?.filter((collection) => {
    const matchesFilter =
      activeFilter === "all" || collection?.category === activeFilter;
    const matchesSearch =
      collection?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      collection?.description
        ?.toLowerCase()
        ?.includes(searchTerm?.toLowerCase()) ||
      collection?.location?.toLowerCase()?.includes(searchTerm?.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Sort collections
  const sortedCollections = [...filteredCollections]?.sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b?.views - a?.views;
      case "alphabetical":
        return a?.title?.localeCompare(b?.title);
      case "recent":
      default:
        return new Date(b.date) - new Date(a.date);
    }
  });

  // Calculate stats
  const totalCollections = mockCollections?.length;
  const totalImages = mockCollections?.reduce(
    (sum, collection) => sum + collection?.images?.length,
    0
  );
  const totalViews = mockCollections?.reduce(
    (sum, collection) => sum + collection?.views,
    0
  );

  // Handle favorites
  const toggleFavorite = (imageKey) => {
    setFavorites((prev) =>
      prev?.includes(imageKey)
        ? prev?.filter((fav) => fav !== imageKey)
        : [...prev, imageKey]
    );
  };

  // Handle lightbox
  const openLightbox = (collection, imageIndex) => {
    setCurrentCollection(collection);
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentCollection(null);
    setCurrentImageIndex(0);
  };

  const navigateLightbox = (newIndex) => {
    setCurrentImageIndex(newIndex);
  };

  const handleCollectionClick = (collection) => {
    openLightbox(collection, 0);
  };

  // Load favorites from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem("portfolio-favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem("portfolio-favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <>
      <Helmet>
        <title>
          Portfolio Hub - The Dream Capture Studio | Professional Photography
          Gallery
        </title>
        <meta
          name="description"
          content="Explore our comprehensive portfolio showcasing prewedding chronicles, wedding celebrations, baby milestones, maternity journeys, fashion narratives, and signature collections. Award-winning photography that tells your story."
        />
        <meta
          name="keywords"
          content="photography portfolio, wedding photography, prewedding photos, baby photography, maternity portraits, fashion photography, professional photographer"
        />
        <meta
          property="og:title"
          content="Portfolio Hub - The Dream Capture Studio"
        />
        <meta
          property="og:description"
          content="Discover our award-winning photography collections featuring diverse storytelling capabilities and artistic excellence."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/portfolio-hub" />
      </Helmet>
      <Header />
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/5 via-background to-deep-teal/5 pt-10 pb-14">
        <div className="container-fluid">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-display text-foreground mb-5">Portfolio Hub</h1>
            <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover our comprehensive gallery ecosystem showcasing diverse
              storytelling capabilities, from intimate prewedding sessions to
              grand celebrations, each captured with artistic excellence and
              emotional depth.
            </p>
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {totalCollections}+
                </div>
                <div className="text-sm text-muted-foreground">Collections</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-deep-teal mb-1">
                  {totalImages}+
                </div>
                <div className="text-sm text-muted-foreground">Photos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success mb-1">
                  {Math.floor(totalViews / 1000)}K+
                </div>
                <div className="text-sm text-muted-foreground">Views</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {favorites?.length}
                </div>
                <div className="text-sm text-muted-foreground">Favorites</div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="shadow-soft hover:shadow-elevated"
              >
                Book your dream shoot
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white"
              >
                Download Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Collections */}
      <FeaturedCollections
        collections={mockCollections}
        onCollectionClick={handleCollectionClick}
      />
      {/* Stats Bar */}
      <StatsBar
        totalCollections={totalCollections}
        totalImages={totalImages}
        totalViews={totalViews}
        favorites={favorites}
      />
      {/* Filter Bar */}
      <FilterBar
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      {/* Gallery Grid */}
      <GalleryGrid
        collections={sortedCollections}
        viewMode={viewMode}
        onImageClick={openLightbox}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
      />
      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        collection={currentCollection}
        currentIndex={currentImageIndex}
        onNavigate={navigateLightbox}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
      />
      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary/10 via-deep-teal/5 to-primary/10 py-14">
        <div className="container-fluid text-center">
          <h2 className="text-headline text-foreground mb-3">
            Ready to Create Your Own Story?
          </h2>
          <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate to capture your precious moments with the same
            artistry and passion showcased in our portfolio. Every story
            deserves to be told beautifully.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="default"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              className="shadow-soft hover:shadow-elevated"
            >
              Start Your Journey
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              className="border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white"
            >
              Call Us Today
            </Button>
          </div>
        </div>
      </div>
      {/* Footer Spacer */}
      <div className="h-16"></div>
    </>
  );
};

export default PortfolioHub;
