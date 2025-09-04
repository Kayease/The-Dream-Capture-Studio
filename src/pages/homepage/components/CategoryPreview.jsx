import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CategoryPreview = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 1,
      title: "Prewedding Chronicles",
      subtitle: "Romantic storytelling focus",
      description: "Intimate moments before the big day, captured with artistic vision and emotional depth.",
      mainImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
      hoverImages: [
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=300&h=200&fit=crop"
      ],
      icon: "Heart",
      color: "from-pink-500/20 to-red-500/20"
    },
    {
      id: 2,
      title: "Wedding Celebrations",
      subtitle: "Comprehensive day documentation",
      description: "Complete wedding day coverage from preparation to celebration, every precious moment preserved.",
      mainImage: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?w=600&h=400&fit=crop",
      hoverImages: [
        "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?w=300&h=200&fit=crop",
        "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?w=300&h=200&fit=crop",
        "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?w=300&h=200&fit=crop"
      ],
      icon: "Crown",
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      id: 3,
      title: "Baby Milestones",
      subtitle: "Gentle, heartwarming captures",
      description: "Tender moments of new life, growth, and family joy captured with patience and love.",
      mainImage: "https://images.pixabay.com/photo/2016/11/29/04/19/family-1867271_1280.jpg?w=600&h=400&fit=crop",
      hoverImages: [
        "https://images.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg?w=300&h=200&fit=crop",
        "https://images.pixabay.com/photo/2016/11/29/04/19/family-1867271_1280.jpg?w=300&h=200&fit=crop",
        "https://images.pixabay.com/photo/2017/01/18/08/25/family-1989088_1280.jpg?w=300&h=200&fit=crop"
      ],
      icon: "Baby",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 4,
      title: "Maternity Journeys",
      subtitle: "Elegant, empowering portraits",
      description: "Celebrating the beauty of motherhood with sophisticated and empowering portrait sessions.",
      mainImage: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=400&fit=crop",
      hoverImages: [
        "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop"
      ],
      icon: "Flower",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 5,
      title: "Fashion Narratives",
      subtitle: "Editorial sophistication",
      description: "High-fashion editorial shoots that blend artistic vision with contemporary style and elegance.",
      mainImage: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?w=600&h=400&fit=crop",
      hoverImages: [
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?w=300&h=200&fit=crop",
        "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=300&h=200&fit=crop",
        "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?w=300&h=200&fit=crop"
      ],
      icon: "Sparkles",
      color: "from-indigo-500/20 to-purple-500/20"
    },
    {
      id: 6,
      title: "Signature Collections",
      subtitle: "Award-winning highlights",
      description: "Our most celebrated work, showcasing the pinnacle of artistic achievement and technical excellence.",
      mainImage: "https://images.pixabay.com/photo/2016/03/27/07/32/portrait-1282456_1280.jpg?w=600&h=400&fit=crop",
      hoverImages: [
        "https://images.pixabay.com/photo/2016/03/27/07/32/portrait-1282456_1280.jpg?w=300&h=200&fit=crop",
        "https://images.pixabay.com/photo/2017/08/01/11/48/woman-2564660_1280.jpg?w=300&h=200&fit=crop",
        "https://images.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg?w=300&h=200&fit=crop"
      ],
      icon: "Award",
      color: "from-amber-500/20 to-yellow-500/20"
    }
  ];

  return (
    <section className="section-padding bg-background max-w-7xl mx-auto">
      <div className="container-fluid max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-headline mb-4">Our Specialty Areas</h2>
          <p className="text-subtitle text-muted-foreground max-w-2xl mx-auto">
            Discover our diverse portfolio of photography services, each crafted with artistic excellence and emotional depth.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories?.map((category) => (
            <Link
              key={category?.id}
              to="/portfolio-hub"
              className="group block"
              onMouseEnter={() => setHoveredCategory(category?.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="card-elevated overflow-hidden h-full transition-all duration-500 group-hover:scale-105">
                {/* Main Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={category?.mainImage}
                    alt={category?.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${category?.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Icon name={category?.icon} size={20} color="white" />
                    </div>
                  </div>

                  {/* Hover Gallery Preview */}
                  {hoveredCategory === category?.id && (
                    <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-4">
                      <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
                        {category?.hoverImages?.map((image, index) => (
                          <div key={index} className="aspect-square overflow-hidden rounded-md">
                            <Image
                              src={image}
                              alt={`${category?.title} preview ${index + 1}`}
                              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-title group-hover:text-primary transition-colors duration-300">
                        {category?.title}
                      </h3>
                      <p className="text-caption text-accent font-medium">
                        {category?.subtitle}
                      </p>
                    </div>
                    <Icon 
                      name="ArrowRight" 
                      size={20} 
                      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" 
                    />
                  </div>
                  
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {category?.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link to="/portfolio-hub">
            <button className="btn-primary flex m-auto">
              <Icon name="Camera" size={20} className="mr-2" />
              <span>Explore Complete Portfolio</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryPreview;