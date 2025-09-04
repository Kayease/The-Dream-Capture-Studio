import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ResourceGrid = ({ activeCategory }) => {
  const resources = [
    {
      id: 1,
      title: "Complete Wedding Photography Timeline",
      category: "planning",
      type: "PDF Guide",
      description: "A comprehensive 12-month planning timeline with detailed checklists for every stage of your wedding photography journey.",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=300&fit=crop",
      downloadCount: 1247,
      readTime: "15 min read",
      featured: true,
      tags: ["Wedding", "Timeline", "Checklist"]
    },
    {
      id: 2,
      title: "Engagement Session Styling Guide",
      category: "styling",
      type: "Style Guide",
      description: "Expert tips on wardrobe selection, color coordination, and accessories for stunning engagement photos.",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=300&fit=crop",
      downloadCount: 892,
      readTime: "8 min read",
      featured: false,
      tags: ["Engagement", "Styling", "Wardrobe"]
    },
    {
      id: 3,
      title: "Golden Hour Location Scout",
      category: "locations",
      type: "Location Guide",
      description: "Discover the best outdoor locations for golden hour photography with detailed timing and positioning tips.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop",
      downloadCount: 654,
      readTime: "12 min read",
      featured: true,
      tags: ["Golden Hour", "Outdoor", "Locations"]
    },
    {
      id: 4,
      title: "Posing Guide for Couples",
      category: "photography",
      type: "Photo Tutorial",
      description: "Natural posing techniques that create authentic, romantic moments between couples during photo sessions.",
      image: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=400&h=300&fit=crop",
      downloadCount: 1156,
      readTime: "10 min read",
      featured: false,
      tags: ["Posing", "Couples", "Romance"]
    },
    {
      id: 5,
      title: "Maternity Session Preparation",
      category: "planning",
      type: "Preparation Guide",
      description: "Everything expectant mothers need to know to prepare for a beautiful and comfortable maternity photo session.",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=300&fit=crop",
      downloadCount: 743,
      readTime: "7 min read",
      featured: false,
      tags: ["Maternity", "Preparation", "Comfort"]
    },
    {
      id: 6,
      title: "Seasonal Color Palettes",
      category: "styling",
      type: "Color Guide",
      description: "Curated color combinations that photograph beautifully in different seasons and lighting conditions.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      downloadCount: 567,
      readTime: "6 min read",
      featured: true,
      tags: ["Colors", "Seasons", "Styling"]
    },
    {
      id: 7,
      title: "Indoor Venue Lighting Guide",
      category: "locations",
      type: "Technical Guide",
      description: "Understanding natural light in indoor venues and how to work with different lighting conditions.",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop",
      downloadCount: 432,
      readTime: "11 min read",
      featured: false,
      tags: ["Indoor", "Lighting", "Venues"]
    },
    {
      id: 8,
      title: "Family Portrait Coordination",
      category: "photography",
      type: "Family Guide",
      description: "Tips for coordinating large family groups, managing children, and creating harmonious family portraits.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop",
      downloadCount: 821,
      readTime: "9 min read",
      featured: false,
      tags: ["Family", "Groups", "Children"]
    },
    {
      id: 9,
      title: "Wedding Day Emergency Kit",
      category: "planning",
      type: "Checklist",
      description: "Essential items every bride should have on hand for last-minute touch-ups and unexpected situations.",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=400&h=300&fit=crop",
      downloadCount: 1089,
      readTime: "5 min read",
      featured: false,
      tags: ["Wedding", "Emergency", "Preparation"]
    }
  ];

  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources?.filter(resource => resource?.category === activeCategory);

  const featuredResources = filteredResources?.filter(resource => resource?.featured);
  const regularResources = filteredResources?.filter(resource => !resource?.featured);

  return (
    <section className="py-16 bg-background px-0 sm:px-16">
      <div className="container-fluid">
        {featuredResources?.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Icon name="Star" size={24} className="text-accent mr-3" />
              <h2 className="text-title text-foreground">Featured Resources</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredResources?.map((resource) => (
                <div key={resource?.id} className="card-elevated p-6 group hover:scale-[1.02] transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                        <Image
                          src={resource?.image}
                          alt={resource?.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded">
                            {resource?.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3">
                      <h3 className="text-title text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {resource?.title}
                      </h3>
                      
                      <p className="text-body text-muted-foreground mb-4">
                        {resource?.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource?.tags?.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-caption">
                          <span className="flex items-center gap-1">
                            <Icon name="Clock" size={14} />
                            {resource?.readTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Download" size={14} />
                            {resource?.downloadCount?.toLocaleString()}
                          </span>
                        </div>
                        
                        <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularResources?.map((resource) => (
            <div key={resource?.id} className="card group hover:shadow-elevated transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg aspect-[4/3]">
                <Image
                  src={resource?.image}
                  alt={resource?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded">
                    {resource?.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-title text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {resource?.title}
                </h3>
                
                <p className="text-body text-muted-foreground mb-4">
                  {resource?.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource?.tags?.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-caption">
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {resource?.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Download" size={14} />
                      {resource?.downloadCount?.toLocaleString()}
                    </span>
                  </div>
                  
                  <Button variant="ghost" size="sm" iconName="Download" iconPosition="left">
                    Get
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredResources?.length === 0 && (
          <div className="text-center py-16">
            <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-title text-foreground mb-2">No resources found</h3>
            <p className="text-body text-muted-foreground">
              Try selecting a different category or check back later for new content.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResourceGrid;