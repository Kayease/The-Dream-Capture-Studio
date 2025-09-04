import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import StoryHero from './components/StoryHero';
import StoryFilters from './components/StoryFilters';
import FeaturedStory from './components/FeaturedStory';
import TestimonialGrid from './components/TestimonialGrid';
import TrustSignals from './components/TrustSignals';
import ReferralStories from './components/ReferralStories';
import ClientPortalPreview from './components/ClientPortalPreview';

const ClientStories = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <StoryHero />
        <StoryFilters 
          activeFilter={activeFilter} 
          onFilterChange={handleFilterChange} 
        />
        <FeaturedStory />
        <TestimonialGrid activeFilter={activeFilter} />
        <TrustSignals />
        <ReferralStories />
        <ClientPortalPreview />
      </main>
    </div>
  );
};

export default ClientStories;