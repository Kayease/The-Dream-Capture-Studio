import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';
import FeaturedFilm from './components/FeaturedFilm';

import FilmGallery from './components/FilmGallery';
import FilmTestimonials from './components/FilmTestimonials';
import TechnicalSpecs from './components/TechnicalSpecs';
import FilmBooking from './components/FilmBooking';

const FilmShowcase = () => {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock data for films
  const featuredFilm = {
    id: 'featured-1',
    title: 'Sarah & Michael - A Love Story',
    category: 'Romantic Trailers',
    duration: '3:42',
    location: 'Napa Valley, CA',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=450&fit=crop',
    videoUrl: '/assets/videos/featured-film.mp4',
    description: `A breathtaking journey through Sarah and Michael's engagement story, captured against the stunning backdrop of Napa Valley's golden hour. This cinematic piece weaves together intimate moments, natural laughter, and the raw emotion of two souls finding their forever in each other.`,
    isNew: true,
    addedDate: 'December 2024'
  };

  const films = [
    {
      id: 1,
      title: 'Emma & James - Wedding Celebration',
      category: 'Celebration Films',
      duration: '8:15',
      location: 'Sonoma Coast, CA',
      thumbnail: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=450&fit=crop',
      videoUrl: '/assets/videos/wedding-celebration.mp4',
      description: `A complete wedding day story capturing every precious moment from the morning preparations to the final dance. This comprehensive film showcases the joy, tears, and celebration of Emma and James's perfect day by the ocean.`,isNew: false,addedDate: 'November 2024'
    },
    {
      id: 2,
      title: 'Behind the Lens - Wedding Day Process',category: 'Behind-the-Scenes',duration: '4:28',location: 'Various Locations',thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=450&fit=crop',description: `An exclusive look into our wedding day process, showcasing the dedication, artistry, and technical expertise that goes into creating your perfect wedding film. See how we work seamlessly to capture your story.`,isNew: true,addedDate: 'December 2024'
    },
    {
      id: 3,
      title: 'Golden Hour Magic',category: 'Signature Moments',duration: '2:18',location: 'Big Sur, CA',thumbnail: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&h=450&fit=crop',description: `A stunning artistic vignette showcasing the magic of golden hour photography and cinematography. This piece demonstrates our ability to capture ethereal, dreamlike moments that feel like poetry in motion.`,isNew: false,addedDate: 'October 2024'
    },
    {
      id: 4,
      title: 'Lisa & David - Engagement Story',category: 'Romantic Trailers',duration: '3:05',location: 'San Francisco, CA',thumbnail: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=450&fit=crop',description: `An urban love story set against the iconic backdrop of San Francisco. This engagement film captures the playful energy and deep connection between Lisa and David as they explore the city where they fell in love.`,isNew: false,addedDate: 'September 2024'
    },
    {
      id: 5,
      title: 'The Art of Wedding Cinematography',category: 'Behind-the-Scenes',duration: '5:42',location: 'Studio & Locations',thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=450&fit=crop',description: `A deep dive into our cinematographic approach, equipment, and artistic vision. This educational piece showcases the technical mastery and creative process behind our award-winning wedding films.`,isNew: true,addedDate: 'December 2024'
    },
    {
      id: 6,
      title: 'Rachel & Tom - Vineyard Romance',category: 'Celebration Films',duration: '7:33',location: 'Paso Robles, CA',thumbnail: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=450&fit=crop',description: `A romantic vineyard wedding celebration showcasing the rustic elegance and natural beauty of wine country. This film captures the intimate moments and joyful celebration of Rachel and Tom's special day.`,
      isNew: false,
      addedDate: 'August 2024'
    }
  ];

  // Mock testimonials
  const testimonials = [
    {
      id: 1,
      quote: `The wedding film exceeded every expectation we had. Watching it brings us right back to that perfect day, and we've shared it with family and friends countless times. The cinematic quality is absolutely stunning.`,clientName: 'Sarah & Michael',eventType: 'Wedding',location: 'Napa Valley',clientImage: 'https://randomuser.me/api/portraits/women/32.jpg',filmTitle: 'Sarah & Michael - A Love Story',
      rating: 5
    },
    {
      id: 2,
      quote: `Our engagement film became the highlight of our wedding website. The way they captured our story and the emotion between us was incredible. It's like having a movie of our love story.`,
      clientName: 'Lisa & David',
      eventType: 'Engagement',
      location: 'San Francisco',
      clientImage: 'https://randomuser.me/api/portraits/women/28.jpg',
      filmTitle: 'Lisa & David - Engagement Story',
      rating: 5
    },
    {
      id: 3,
      quote: `The behind-the-scenes footage they provided was such a wonderful bonus. Seeing how much care and artistry goes into their work made us appreciate our final film even more. True professionals.`,
      clientName: 'Emma & James',
      eventType: 'Wedding',
      location: 'Sonoma Coast',
      clientImage: 'https://randomuser.me/api/portraits/women/35.jpg',
      filmTitle: 'Emma & James - Wedding Celebration',
      rating: 5
    }
  ];

  // Mock technical specs
  const technicalSpecs = {
    equipment: [
      {
        name: 'Cinema Cameras',
        category: 'Primary Equipment',
        icon: 'Camera',
        description: 'Professional cinema cameras for stunning 4K footage with exceptional dynamic range and color science.',
        features: [
          'Sony FX6 & FX3 Cinema Line',
          '4K 120fps slow motion capability',
          'Full-frame sensor for shallow depth',
          'Professional color grading workflow'
        ]
      },
      {
        name: 'Stabilization Systems',
        category: 'Movement & Stability',
        icon: 'Zap',
        description: 'Advanced stabilization for smooth, cinematic movement that enhances storytelling.',
        features: [
          'DJI Ronin 4D gimbal system',
          'Steadicam for flowing shots',
          'Slider and jib systems',
          'Drone cinematography certified'
        ]
      },
      {
        name: 'Audio Recording',
        category: 'Sound Capture',
        icon: 'Mic',
        description: 'Professional audio equipment ensuring crystal clear sound for your special moments.',
        features: [
          'Wireless lavalier microphones',
          'Boom microphones for ceremonies',
          'Multi-track recording capability',
          'Professional audio mixing'
        ]
      }
    ],
    process: {
      preProduction: [
        {
          title: 'Creative Consultation',
          description: 'We discuss your vision, style preferences, and key moments to capture.'
        },
        {
          title: 'Location Scouting',
          description: 'We visit your venue to plan shots and identify the best lighting conditions.'
        },
        {
          title: 'Timeline Planning',
          description: 'Detailed schedule coordination with your wedding planner and photographer.'
        },
        {
          title: 'Equipment Preparation',
          description: 'All gear is tested, charged, and prepared with backup systems ready.'
        }
      ],
      postProduction: [
        {
          title: 'Footage Review',
          description: 'Careful selection of the best moments from hours of captured content.'
        },
        {
          title: 'Color Grading',
          description: 'Professional color correction and grading for cinematic look and feel.'
        },
        {
          title: 'Audio Mixing',
          description: 'Crystal clear audio mixing with music and natural sound balance.'
        },
        {
          title: 'Final Delivery',
          description: 'Multiple formats delivered for web sharing and high-quality archival.'
        }
      ]
    },
    delivery: [
      {
        name: 'Digital Gallery',
        icon: 'Monitor',
        description: 'Private online gallery with easy sharing and download options.',
        features: [
          'Password-protected access',
          'Multiple resolution downloads',
          'Social media optimized versions',
          'Lifetime access guarantee'
        ],
        timeline: '4-6 weeks'
      },
      {
        name: 'Physical Media',
        icon: 'Package',
        description: 'Beautiful packaging with USB drives and optional Blu-ray discs.',
        features: [
          'Custom branded USB drives',
          'Elegant presentation box',
          'Blu-ray disc option',
          'Backup copies included'
        ],
        timeline: '6-8 weeks'
      },
      {
        name: 'Streaming Ready',
        icon: 'Wifi',
        description: 'Optimized files for seamless streaming and social media sharing.',
        features: [
          'Instagram Stories format',
          'Facebook optimized versions',
          'YouTube ready uploads',
          'Mobile-friendly formats'
        ],
        timeline: '2-3 weeks'
      }
    ]
  };

  // Mock film packages
  const filmPackages = [
    {
      id: 'highlight',
      name: 'Highlight Film',
      price: 2500,
      duration: '3-4 minutes',
      icon: 'Film',
      isPopular: false,
      features: [
        'Cinematic highlight reel',
        'Professional color grading',
        'Licensed music soundtrack',
        'Multiple delivery formats',
        'Online gallery access'
      ],
      addOns: [
        {
          id: 'raw-footage',
          name: 'Raw Footage Access',
          description: 'Complete unedited footage from your day',
          price: 500
        },
        {
          id: 'extra-copies',
          name: 'Additional USB Copies',
          description: '3 additional branded USB drives',
          price: 150
        }
      ]
    },
    {
      id: 'documentary',
      name: 'Documentary Film',
      price: 4500,
      duration: '8-12 minutes',
      icon: 'Video',
      isPopular: true,
      features: [
        'Full ceremony coverage',
        'Reception highlights',
        'Interview segments',
        'Multiple camera angles',
        'Professional audio mixing',
        'Blu-ray disc included'
      ],
      addOns: [
        {
          id: 'drone-footage',
          name: 'Aerial Drone Footage',
          description: 'Stunning aerial shots of your venue',
          price: 800
        },
        {
          id: 'same-day-edit',
          name: 'Same Day Edit',
          description: 'Preview film shown at reception',
          price: 1200
        }
      ]
    },
    {
      id: 'cinematic',
      name: 'Cinematic Feature',
      price: 7500,
      duration: '15-20 minutes',
      icon: 'Award',
      isPopular: false,
      features: [
        'Feature-length documentary',
        'Multiple story chapters',
        'Professional interviews',
        'Behind-the-scenes footage',
        'Custom motion graphics',
        'Premium packaging',
        'Director\'s commentary'
      ],
      addOns: [
        {
          id: 'engagement-film',
          name: 'Engagement Film',
          description: 'Separate engagement story film',
          price: 1500
        },
        {
          id: 'family-interviews',
          name: 'Family Interview Segments',
          description: 'Extended family and friend interviews',
          price: 800
        }
      ]
    }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handlePlayFilm = (film) => {
    setSelectedFilm(film);
  };

  const handleCloseFilm = () => {
    setSelectedFilm(null);
  };

  const handleBookConsultation = (bookingData) => {
    console.log('Booking consultation:', bookingData);
    // Handle booking logic here
    alert('Thank you! We\'ll contact you within 24 hours to schedule your consultation.');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading cinematic experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section with Featured Film */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={featuredFilm?.thumbnail}
            alt={featuredFilm?.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8">
              <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
                Featured Film
              </span>
              <h1 className="text-display mb-6">
                Cinematic Storytelling
              </h1>
              <p className="text-subtitle mb-8 max-w-2xl mx-auto">
                Where love stories become timeless films. Experience the magic of professional cinematography that captures not just moments, but emotions that last forever.
              </p>
            </div>

            {/* Featured Film Play Button */}
            <div className="mb-8">
              <Button
                variant="default"
                size="lg"
                onClick={() => handlePlayFilm(featuredFilm)}
                className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 px-8 py-4"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="Play" size={20} className="ml-1" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Watch Featured Film</div>
                    <div className="text-sm opacity-80">{featuredFilm?.title}</div>
                  </div>
                </div>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} />
                <span>Award-Winning Cinematography</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} />
                <span>500+ Happy Couples</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={16} />
                <span>5.0 Average Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <Icon name="ChevronDown" size={24} />
        </div>
      </section>
      {/* Film Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container-fluid">
          <FilmGallery films={films} onPlayFilm={handlePlayFilm} />
        </div>
      </section>
      {/* Technical Excellence Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-fluid">
          <TechnicalSpecs specs={technicalSpecs} />
        </div>
      </section>
      {/* Client Testimonials Section */}
      <section className="section-padding bg-background">
        <div className="container-fluid">
          <FilmTestimonials testimonials={testimonials} />
        </div>
      </section>
      {/* Film Booking Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-fluid">
          <FilmBooking packages={filmPackages} onBookConsultation={handleBookConsultation} />
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <h2 className="text-headline mb-6">
            Ready to Create Your Cinematic Story?
          </h2>
          <p className="text-subtitle mb-8 opacity-90">
            Let's discuss how we can capture your love story with the artistry and emotion it deserves. Every great film starts with a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/consultation-booking">
              <Button
                variant="secondary"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/portfolio-hub">
              <Button
                variant="outline"
                size="lg"
                iconName="Camera"
                iconPosition="left"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                View Photography
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Camera" size={24} color="white" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold">The Dream Capture Studio</h3>
                  <p className="text-sm opacity-70">Cinematic Storytelling</p>
                </div>
              </div>
              <p className="text-sm opacity-80 mb-4 max-w-md">
                Creating timeless films that capture the essence of your most precious moments. Where artistry meets authenticity.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link to="/film-showcase" className="hover:text-primary transition-colors">Wedding Films</Link></li>
                <li><Link to="/portfolio-hub" className="hover:text-primary transition-colors">Photography</Link></li>
                <li><Link to="/consultation-booking" className="hover:text-primary transition-colors">Consultations</Link></li>
                <li><Link to="/resource-library" className="hover:text-primary transition-colors">Resources</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>hello@thedreamcapturestudio.com</li>
                <li>(555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-60">
            <p>&copy; {new Date()?.getFullYear()} The Dream Capture Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* Featured Film Modal */}
      {selectedFilm && (
        <FeaturedFilm film={selectedFilm} onClose={handleCloseFilm} />
      )}
    </div>
  );
};

export default FilmShowcase;