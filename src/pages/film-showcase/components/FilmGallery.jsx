import React, { useState } from 'react';
import FilmCard from './FilmCard';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FilmGallery = ({ films, onPlayFilm }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // grid, list

  const categories = ['All', 'Romantic Trailers', 'Celebration Films', 'Behind-the-Scenes', 'Signature Moments'];

  const filteredFilms = activeCategory === 'All' 
    ? films 
    : films?.filter(film => film?.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <h2 className="text-headline text-foreground mb-2">
            Film Collection
          </h2>
          <p className="text-body text-muted-foreground">
            Discover our cinematic storytelling through {films?.length} carefully crafted films
          </p>
        </div>

        {/* View Controls */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-muted rounded-lg p-1">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              iconName="Grid3X3"
              className="px-3"
            >
              Grid
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
              iconName="List"
              className="px-3"
            >
              List
            </Button>
          </div>
        </div>
      </div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories?.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveCategory(category)}
            className="transition-all duration-300"
          >
            {category}
            {category !== 'All' && (
              <span className="ml-2 bg-primary-foreground/20 text-primary-foreground px-1.5 py-0.5 rounded-full text-xs">
                {films?.filter(film => film?.category === category)?.length}
              </span>
            )}
          </Button>
        ))}
      </div>
      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-caption">
          Showing {filteredFilms?.length} of {films?.length} films
        </p>
        <div className="flex items-center space-x-2 text-caption">
          <Icon name="Filter" size={16} />
          <span>Filtered by: {activeCategory}</span>
        </div>
      </div>
      {/* Films Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFilms?.map((film) => (
            <FilmCard
              key={film?.id}
              film={film}
              onPlay={onPlayFilm}
              size="default"
            />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredFilms?.map((film) => (
            <div
              key={film?.id}
              className="flex flex-col md:flex-row gap-4 p-4 bg-card rounded-lg border border-border hover:shadow-soft transition-all duration-300 cursor-pointer"
              onClick={() => onPlayFilm(film)}
            >
              <div className="md:w-64 flex-shrink-0">
                <FilmCard film={film} onPlay={onPlayFilm} size="small" />
              </div>
              <div className="flex-1 space-y-3">
                <div>
                  <h3 className="text-title text-foreground mb-2">
                    {film?.title}
                  </h3>
                  <p className="text-body text-muted-foreground line-clamp-3">
                    {film?.description}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-caption">
                  <div className="flex items-center space-x-1">
                    <Icon name="Play" size={14} />
                    <span>{film?.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="MapPin" size={14} />
                    <span>{film?.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Tag" size={14} />
                    <span>{film?.category}</span>
                  </div>
                  {film?.isNew && (
                    <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                      New
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div className="text-caption text-muted-foreground">
                    Added {film?.addedDate}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" iconName="Share">
                      Share
                    </Button>
                    <Button variant="ghost" size="sm" iconName="Heart">
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Empty State */}
      {filteredFilms?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Film" size={48} className="mx-auto text-muted-foreground mb-4" />
          <h3 className="text-title text-foreground mb-2">
            No films found
          </h3>
          <p className="text-body text-muted-foreground mb-6">
            No films match your current filter. Try selecting a different category.
          </p>
          <Button
            variant="outline"
            onClick={() => setActiveCategory('All')}
          >
            Show All Films
          </Button>
        </div>
      )}
    </div>
  );
};

export default FilmGallery;