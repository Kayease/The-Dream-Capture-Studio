import React from 'react';
import Icon from '../../../components/AppIcon';

const StoryFilters = ({ activeFilter, onFilterChange }) => {
  const filters = [
    { id: 'all', label: 'All Stories', icon: 'Grid3x3', count: 48 },
    { id: 'wedding', label: 'Weddings', icon: 'Heart', count: 32 },
    { id: 'prewedding', label: 'Pre-Wedding', icon: 'Camera', count: 12 },
    { id: 'maternity', label: 'Maternity', icon: 'Baby', count: 8 },
    { id: 'family', label: 'Family', icon: 'Users', count: 15 },
    { id: 'fashion', label: 'Fashion', icon: 'Sparkles', count: 6 }
  ];

  const seasons = [
    { id: 'spring', label: 'Spring', icon: 'Flower' },
    { id: 'summer', label: 'Summer', icon: 'Sun' },
    { id: 'autumn', label: 'Autumn', icon: 'Leaf' },
    { id: 'winter', label: 'Winter', icon: 'Snowflake' }
  ];

  return (
    <section className="bg-muted/30 py-8 border-b border-border">
      <div className="container-fluid">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {filters?.map((filter) => (
              <button
                key={filter?.id}
                onClick={() => onFilterChange(filter?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter?.id
                    ? 'bg-primary text-primary-foreground shadow-soft'
                    : 'bg-background text-foreground hover:bg-muted border border-border hover:border-primary/20'
                }`}
              >
                <Icon name={filter?.icon} size={16} />
                <span>{filter?.label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeFilter === filter?.id
                    ? 'bg-primary-foreground/20 text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {filter?.count}
                </span>
              </button>
            ))}
          </div>

          {/* Season Filters */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground font-medium">Season:</span>
            <div className="flex space-x-1">
              {seasons?.map((season) => (
                <button
                  key={season?.id}
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  title={season?.label}
                >
                  <Icon name={season?.icon} size={16} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryFilters;