import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsBar = ({ totalCollections, totalImages, totalViews, favorites }) => {
  const stats = [
    {
      icon: 'FolderOpen',
      label: 'Collections',
      value: totalCollections,
      color: 'text-primary'
    },
    {
      icon: 'Image',
      label: 'Photos',
      value: totalImages,
      color: 'text-deep-teal'
    },
    {
      icon: 'Eye',
      label: 'Total Views',
      value: totalViews?.toLocaleString(),
      color: 'text-success'
    },
    {
      icon: 'Heart',
      label: 'Favorites',
      value: favorites?.length,
      color: 'text-red-500'
    }
  ];

  return (
    <div className="bg-background border-b border-border">
      <div className="container-fluid py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-3 ${stat?.color}`}>
                <Icon name={stat?.icon} size={24} />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {stat?.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat?.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;