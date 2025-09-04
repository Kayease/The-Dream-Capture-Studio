import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TechnicalSpecs = ({ specs }) => {
  const [activeTab, setActiveTab] = useState('equipment');

  const tabs = [
    { id: 'equipment', label: 'Equipment', icon: 'Camera' },
    { id: 'process', label: 'Process', icon: 'Settings' },
    { id: 'delivery', label: 'Delivery', icon: 'Package' }
  ];

  const renderEquipment = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {specs?.equipment?.map((item, index) => (
        <div
          key={index}
          className="bg-card rounded-lg p-6 border border-border hover:shadow-soft transition-all duration-300"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name={item?.icon} size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{item?.name}</h3>
              <p className="text-caption text-muted-foreground">{item?.category}</p>
            </div>
          </div>
          <p className="text-body text-muted-foreground mb-4">
            {item?.description}
          </p>
          <div className="space-y-2">
            {item?.features?.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-accent" />
                <span className="text-caption text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderProcess = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-title text-foreground mb-4">Pre-Production</h3>
          <div className="space-y-4">
            {specs?.process?.preProduction?.map((step, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">{step?.title}</h4>
                  <p className="text-caption text-muted-foreground">{step?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-title text-foreground mb-4">Post-Production</h3>
          <div className="space-y-4">
            {specs?.process?.postProduction?.map((step, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-semibold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">{step?.title}</h4>
                  <p className="text-caption text-muted-foreground">{step?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderDelivery = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {specs?.delivery?.map((option, index) => (
        <div
          key={index}
          className="bg-card rounded-lg p-6 border border-border hover:shadow-soft transition-all duration-300"
        >
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name={option?.icon} size={24} color="white" />
            </div>
            <h3 className="text-title text-foreground mb-2">{option?.name}</h3>
            <p className="text-body text-muted-foreground">{option?.description}</p>
          </div>
          <div className="space-y-3">
            {option?.features?.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-accent" />
                <span className="text-caption text-foreground">{feature}</span>
              </div>
            ))}
          </div>
          {option?.timeline && (
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center space-x-2 text-caption text-muted-foreground">
                <Icon name="Clock" size={14} />
                <span>Delivery: {option?.timeline}</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-headline text-foreground mb-4">
          Technical Excellence
        </h2>
        <p className="text-body text-muted-foreground max-w-2xl mx-auto">
          Behind every beautiful film is cutting-edge technology and meticulous craftsmanship
        </p>
      </div>
      {/* Tabs */}
      <div className="flex justify-center">
        <div className="flex items-center bg-muted rounded-lg p-1">
          {tabs?.map((tab) => (
            <Button
              key={tab?.id}
              variant={activeTab === tab?.id ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab(tab?.id)}
              iconName={tab?.icon}
              iconPosition="left"
              className="px-4"
            >
              {tab?.label}
            </Button>
          ))}
        </div>
      </div>
      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === 'equipment' && renderEquipment()}
        {activeTab === 'process' && renderProcess()}
        {activeTab === 'delivery' && renderDelivery()}
      </div>
    </div>
  );
};

export default TechnicalSpecs;