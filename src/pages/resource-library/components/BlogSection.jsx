import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Wedding Venues in the City: A Photographer\'s Perspective",
      excerpt: "Discover the most photogenic wedding venues with insider tips on lighting, timing, and the best spots for stunning portraits.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
      author: "Sarah Mitchell",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Venues",
      tags: ["Wedding", "Venues", "Photography Tips"]
    },
    {
      id: 2,
      title: "2025 Wedding Photography Trends: What\'s Hot This Year",
      excerpt: "From candid storytelling to bold color palettes, explore the photography trends that are defining weddings in 2025.",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=300&fit=crop",
      author: "Michael Chen",
      date: "January 8, 2025",
      readTime: "6 min read",
      category: "Trends",
      tags: ["Trends", "2025", "Wedding Photography"]
    },
    {
      id: 3,
      title: "Planning Your Engagement Session: A Complete Guide",
      excerpt: "Everything couples need to know about planning the perfect engagement session, from location selection to wardrobe tips.",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=300&fit=crop",
      author: "Emma Rodriguez",
      date: "January 22, 2025",
      readTime: "12 min read",
      category: "Planning",
      tags: ["Engagement", "Planning", "Couples"]
    }
  ];

  return (
    <section className="py-16 bg-muted/30 px-0 sm:px-16">
      <div className="container-fluid">
        <div className="text-center mb-12">
          <h2 className="text-headline text-foreground mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest photography trends, venue spotlights, and planning advice from our expert team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blogPosts?.map((post, index) => (
            <article key={post?.id} className={`card group hover:shadow-elevated transition-all duration-300 ${
              index === 0 ? 'lg:col-span-2 lg:row-span-1' : ''
            }`}>
              <div className={`relative overflow-hidden rounded-t-lg ${
                index === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'
              }`}>
                <Image
                  src={post?.image}
                  alt={post?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded">
                    {post?.category}
                  </span>
                </div>
              </div>
              
              <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                <div className="flex items-center gap-4 text-caption mb-4">
                  <span className="flex items-center gap-1">
                    <Icon name="User" size={14} />
                    {post?.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Calendar" size={14} />
                    {post?.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    {post?.readTime}
                  </span>
                </div>
                
                <h3 className={`font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 ${
                  index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                }`}>
                  {post?.title}
                </h3>
                
                <p className={`text-muted-foreground mb-4 ${
                  index === 0 ? 'text-lg' : 'text-base'
                }`}>
                  {post?.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {post?.tags?.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="ghost" iconName="ArrowRight" iconPosition="right">
                  Read More
                </Button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" iconName="BookOpen" iconPosition="left">
            View All Blog Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;