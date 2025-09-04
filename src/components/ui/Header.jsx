import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import Icon from '../AppIcon';

const Header = ({ isCollapsed = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Portfolio', path: '/portfolio-hub', icon: 'Camera' },
    { name: 'Film', path: '/film-showcase', icon: 'Film' },
    { name: 'Stories', path: '/client-stories', icon: 'Heart' },
    { name: 'Resources', path: '/resource-library', icon: 'BookOpen' }
  ];

  const secondaryItems = [
    { name: 'Consultation', path: '/consultation-booking', icon: 'Calendar' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const Logo = () => (
    <Link to="/homepage" className="flex items-center space-x-3 group" onClick={closeMobileMenu}>
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-deep-teal rounded-lg flex items-center justify-center shadow-soft group-hover:shadow-elevated transition-all duration-300 group-hover:scale-105">
          <Icon name="Camera" size={24} color="white" strokeWidth={2.5} />
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-warm-amber rounded-full opacity-80 animate-pulse-gentle"></div>
      </div>
      <div className="flex flex-col">
        <span className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          THE DREAM CAPTURE
        </span>
        <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">
          STUDIO
        </span>
      </div>
    </Link>
  );

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md shadow-elevated border-b border-border' 
            : 'bg-background/80 backdrop-blur-sm'
        }`}
      >
        <div className="container-fluid">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                    isActivePath(item?.path)
                      ? 'bg-deep-teal/10 text-deep-teal border border-deep-teal/20 shadow-soft' :'text-foreground hover:text-deep-teal hover:bg-muted hover:scale-105'
                  }`}
                >
                  <Icon name={item?.icon} size={16} />
                  <span>{item?.name}</span>
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link to="/consultation-booking">
                <Button 
                  variant="default" 
                  iconName="Calendar" 
                  iconPosition="left"
                  className="shadow-soft hover:shadow-elevated transition-all duration-300 hover:scale-105"
                >
                  Book Your Dream Shoot
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="relative"
                aria-label="Toggle mobile menu"
              >
                <Icon 
                  name={isMobileMenuOpen ? "X" : "Menu"} 
                  size={24} 
                  className="transition-transform duration-300"
                />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-screen opacity-100' :'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="bg-background/98 backdrop-blur-md border-t border-border">
            <div className="container-fluid py-4">
              <nav className="space-y-2">
                {navigationItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    onClick={closeMobileMenu}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      isActivePath(item?.path)
                        ? 'bg-deep-teal/10 text-deep-teal border border-deep-teal/20 shadow-soft' :'text-foreground hover:text-deep-teal hover:bg-muted hover:scale-105'
                    }`}
                  >
                    <Icon name={item?.icon} size={20} />
                    <span>{item?.name}</span>
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-border mt-4">
                  {secondaryItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      onClick={closeMobileMenu}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                    >
                      <Icon name={item?.icon} size={20} />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}
      {/* Header Spacer */}
      <div className="h-16 lg:h-18" />
    </>
  );
};

export default Header;