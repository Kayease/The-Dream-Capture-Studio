import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilmBooking = ({ packages, onBookConsultation }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [addOns, setAddOns] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    message: ''
  });

  const handleAddOnChange = (addOnId, checked) => {
    if (checked) {
      setAddOns([...addOns, addOnId]);
    } else {
      setAddOns(addOns?.filter(id => id !== addOnId));
    }
  };

  const calculateTotal = () => {
    if (!selectedPackage) return 0;
    
    const packagePrice = selectedPackage?.price;
    const addOnTotal = addOns?.reduce((total, addOnId) => {
      const addOn = selectedPackage?.addOns?.find(a => a?.id === addOnId);
      return total + (addOn ? addOn?.price : 0);
    }, 0);
    
    return packagePrice + addOnTotal;
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    const bookingData = {
      ...formData,
      selectedPackage: selectedPackage?.id,
      addOns,
      total: calculateTotal()
    };
    onBookConsultation(bookingData);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-headline text-foreground mb-4">
          Add Film Services
        </h2>
        <p className="text-body text-muted-foreground max-w-2xl mx-auto">
          Enhance your photography package with cinematic storytelling
        </p>
      </div>
      {/* Package Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages?.map((pkg) => (
          <div
            key={pkg?.id}
            className={`relative bg-card rounded-lg p-6 border-2 cursor-pointer transition-all duration-300 ${
              selectedPackage?.id === pkg?.id
                ? 'border-primary shadow-elevated'
                : 'border-border hover:border-primary/50 hover:shadow-soft'
            }`}
            onClick={() => setSelectedPackage(pkg)}
          >
            {/* Popular Badge */}
            {pkg?.isPopular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </span>
              </div>
            )}

            {/* Package Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={pkg?.icon} size={24} color="white" />
              </div>
              <h3 className="text-title text-foreground mb-2">{pkg?.name}</h3>
              <div className="text-3xl font-bold text-primary mb-2">
                ${pkg?.price?.toLocaleString()}
              </div>
              <p className="text-caption text-muted-foreground">{pkg?.duration}</p>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-6">
              {pkg?.features?.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-accent" />
                  <span className="text-caption text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Selection Indicator */}
            <div className="absolute top-4 right-4">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selectedPackage?.id === pkg?.id
                  ? 'border-primary bg-primary' :'border-border'
              }`}>
                {selectedPackage?.id === pkg?.id && (
                  <Icon name="Check" size={14} color="white" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Add-ons */}
      {selectedPackage && selectedPackage?.addOns && (
        <div className="bg-muted/50 rounded-lg p-6">
          <h3 className="text-title text-foreground mb-4">
            Enhance Your Package
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedPackage?.addOns?.map((addOn) => (
              <div
                key={addOn?.id}
                className="flex items-center justify-between p-4 bg-card rounded-lg border border-border"
              >
                <div className="flex items-center space-x-3">
                  <Checkbox
                    checked={addOns?.includes(addOn?.id)}
                    onChange={(e) => handleAddOnChange(addOn?.id, e?.target?.checked)}
                  />
                  <div>
                    <h4 className="font-medium text-foreground">{addOn?.name}</h4>
                    <p className="text-caption text-muted-foreground">{addOn?.description}</p>
                  </div>
                </div>
                <div className="text-primary font-semibold">
                  +${addOn?.price?.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Booking Form */}
      {selectedPackage && (
        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-title text-foreground mb-6">
            Book Your Consultation
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                type="text"
                placeholder="Enter your name"
                value={formData?.name}
                onChange={(e) => setFormData({...formData, name: e?.target?.value})}
                required
              />
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                value={formData?.email}
                onChange={(e) => setFormData({...formData, email: e?.target?.value})}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Phone Number"
                type="tel"
                placeholder="Enter your phone"
                value={formData?.phone}
                onChange={(e) => setFormData({...formData, phone: e?.target?.value})}
                required
              />
              <Input
                label="Event Date"
                type="date"
                value={formData?.eventDate}
                onChange={(e) => setFormData({...formData, eventDate: e?.target?.value})}
                required
              />
            </div>

            <Input
              label="Event Type"
              type="text"
              placeholder="Wedding, Engagement, etc."
              value={formData?.eventType}
              onChange={(e) => setFormData({...formData, eventType: e?.target?.value})}
              required
            />

            <Input
              label="Message"
              type="text"
              placeholder="Tell us about your vision..."
              value={formData?.message}
              onChange={(e) => setFormData({...formData, message: e?.target?.value})}
            />

            {/* Total */}
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="text-title text-foreground">Total Investment</span>
                <span className="text-2xl font-bold text-primary">
                  ${calculateTotal()?.toLocaleString()}
                </span>
              </div>
              <p className="text-caption text-muted-foreground mt-1">
                Consultation fee will be deducted from final package price
              </p>
            </div>

            <Button
              type="submit"
              variant="default"
              size="lg"
              fullWidth
              iconName="Calendar"
              iconPosition="left"
            >
              Book Your Dream Shoot - $150
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FilmBooking;