import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const MobileConsultationCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show CTA after scrolling past hero section
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quickActions = [
    {
      icon: "Phone",
      label: "Call Now",
      action: "tel:+1-555-CAPTURE",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: "MessageCircle",
      label: "WhatsApp",
      action: "https://wa.me/15555555555",
      color: "bg-green-600 hover:bg-green-700"
    },
    {
      icon: "Mail",
      label: "Email",
      action: "mailto:hello@thedreamcapturestudio.com",
      color: "bg-blue-500 hover:bg-blue-600"
    }
  ];

  return (
    <>
      {/* Mobile Sticky CTA - Only visible on mobile */}
      <div className={`fixed bottom-4 left-4 right-4 z-50 lg:hidden transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}>
        <div className="bg-white rounded-2xl shadow-dramatic border border-border p-4">
          {/* Main CTA */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-title text-foreground mb-1">Ready to Book?</h3>
              <p className="text-caption text-muted-foreground">
                Free consultation • No commitment
              </p>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center ml-3"
              aria-label="Toggle quick actions"
            >
              <Icon 
                name={isExpanded ? "X" : "MoreHorizontal"} 
                size={20} 
                className="transition-transform duration-300"
              />
            </button>
          </div>

          {/* Primary CTA Button */}
          <Link to="/consultation-booking" className="block mb-3">
            <Button 
              variant="default" 
              fullWidth
              iconName="Calendar" 
              iconPosition="left"
              className="shadow-soft"
            >
              Book Free Consultation
            </Button>
          </Link>

          {/* Quick Actions - Expandable */}
          <div className={`transition-all duration-300 overflow-hidden ${
            isExpanded ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="flex items-center justify-between space-x-2 pt-2 border-t border-border">
              {quickActions?.map((action) => (
                <a
                  key={action?.label}
                  href={action?.action}
                  className={`flex-1 ${action?.color} text-white rounded-lg p-3 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105`}
                  target={action?.action?.startsWith('http') ? '_blank' : undefined}
                  rel={action?.action?.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <Icon name={action?.icon} size={16} className="mb-1" />
                  <span className="text-xs font-medium">{action?.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-4 mt-3 pt-3 border-t border-border">
            <div className="flex items-center space-x-1 text-caption text-muted-foreground">
              <Icon name="Star" size={14} className="text-yellow-400 fill-current" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-1 text-caption text-muted-foreground">
              <Icon name="Users" size={14} />
              <span>500+ Happy Couples</span>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop Floating CTA */}
     
    </>
  );
};

export default MobileConsultationCTA;