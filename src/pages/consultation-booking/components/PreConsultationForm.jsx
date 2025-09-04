import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const PreConsultationForm = ({ formData, onFormChange }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const celebrationTypes = [
    { value: 'wedding', label: 'Wedding' },
    { value: 'engagement', label: 'Engagement' },
    { value: 'prewedding', label: 'Pre-wedding' },
    { value: 'maternity', label: 'Maternity' },
    { value: 'baby', label: 'Baby/Newborn' },
    { value: 'family', label: 'Family Portrait' },
    { value: 'fashion', label: 'Fashion/Editorial' },
    { value: 'other', label: 'Other' }
  ];

  const budgetRanges = [
    { value: 'under-2k', label: 'Under $2,000' },
    { value: '2k-5k', label: '$2,000 - $5,000' },
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-15k', label: '$10,000 - $15,000' },
    { value: '15k-plus', label: '$15,000+' },
    { value: 'flexible', label: 'Flexible/Discuss' }
  ];

  const stylePreferences = [
    { value: 'romantic', label: 'Romantic & Dreamy' },
    { value: 'modern', label: 'Modern & Clean' },
    { value: 'vintage', label: 'Vintage & Timeless' },
    { value: 'editorial', label: 'Editorial & Fashion' },
    { value: 'documentary', label: 'Documentary & Candid' },
    { value: 'artistic', label: 'Artistic & Creative' }
  ];

  const timelineOptions = [
    { value: '1-3months', label: '1-3 months' },
    { value: '3-6months', label: '3-6 months' },
    { value: '6-12months', label: '6-12 months' },
    { value: '12months-plus', label: '12+ months' },
    { value: 'flexible', label: 'Flexible' }
  ];

  const handleInputChange = (field, value) => {
    onFormChange({
      ...formData,
      [field]: value
    });
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
          Tell Us About Your Celebration
        </h3>
        <p className="text-muted-foreground">
          Help us understand your special moment so we can prepare personalized recommendations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Your Name"
          type="text"
          placeholder="Enter your full name"
          value={formData?.name || ''}
          onChange={(e) => handleInputChange('name', e?.target?.value)}
          required
        />

        <Input
          label="Partner's Name"
          type="text"
          placeholder="Enter partner's name"
          value={formData?.partnerName || ''}
          onChange={(e) => handleInputChange('partnerName', e?.target?.value)}
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="your.email@example.com"
          value={formData?.email || ''}
          onChange={(e) => handleInputChange('email', e?.target?.value)}
          required
        />

        <Input
          label="Phone Number"
          type="tel"
          placeholder="(555) 123-4567"
          value={formData?.phone || ''}
          onChange={(e) => handleInputChange('phone', e?.target?.value)}
        />

        <Select
          label="Celebration Type"
          placeholder="Select celebration type"
          options={celebrationTypes}
          value={formData?.celebrationType || ''}
          onChange={(value) => handleInputChange('celebrationType', value)}
          required
        />

        <Select
          label="Timeline"
          placeholder="When is your celebration?"
          options={timelineOptions}
          value={formData?.timeline || ''}
          onChange={(value) => handleInputChange('timeline', value)}
          required
        />
      </div>

      <Input
        label="Celebration Location"
        type="text"
        placeholder="City, State or Venue Name"
        description="This helps us understand travel requirements and local expertise"
        value={formData?.location || ''}
        onChange={(e) => handleInputChange('location', e?.target?.value)}
      />
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
          Your Style & Vision
        </h3>
        <p className="text-muted-foreground">
          Understanding your aesthetic preferences helps us match you with the perfect team member.
        </p>
      </div>

      <Select
        label="Photography Style Preference"
        placeholder="Select your preferred style"
        options={stylePreferences}
        value={formData?.stylePreference || ''}
        onChange={(value) => handleInputChange('stylePreference', value)}
        description="Don't worry if you're unsure - we'll explore this together!"
      />

      <Select
        label="Investment Range"
        placeholder="Select your budget range"
        options={budgetRanges}
        value={formData?.budget || ''}
        onChange={(value) => handleInputChange('budget', value)}
        description="This helps us recommend the most suitable packages"
      />

      <div className="space-y-4">
        <label className="block text-sm font-medium text-foreground">
          What's most important to you? (Select all that apply)
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            'High-quality prints and albums',
            'Digital gallery for sharing',
            'Quick turnaround time',
            'Multiple photographers',
            'Engagement session included',
            'Full day coverage',
            'Artistic editing style',
            'Natural, candid moments'
          ]?.map((priority) => (
            <Checkbox
              key={priority}
              label={priority}
              checked={formData?.priorities?.includes(priority) || false}
              onChange={(e) => {
                const currentPriorities = formData?.priorities || [];
                const newPriorities = e?.target?.checked
                  ? [...currentPriorities, priority]
                  : currentPriorities?.filter(p => p !== priority);
                handleInputChange('priorities', newPriorities);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
          Questions & Additional Details
        </h3>
        <p className="text-muted-foreground">
          Share any specific questions or details that will help us prepare for our conversation.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Specific Questions or Concerns
          </label>
          <textarea
            className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
            rows={4}
            placeholder="What would you like to know about our process, packages, or approach? Any specific concerns we should address?"
            value={formData?.questions || ''}
            onChange={(e) => handleInputChange('questions', e?.target?.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            How did you hear about us?
          </label>
          <Select
            placeholder="Select source"
            options={[
              { value: 'google', label: 'Google Search' },
              { value: 'instagram', label: 'Instagram' },
              { value: 'referral', label: 'Friend/Family Referral' },
              { value: 'vendor', label: 'Vendor Recommendation' },
              { value: 'website', label: 'Wedding Website/Blog' },
              { value: 'other', label: 'Other' }
            ]}
            value={formData?.source || ''}
            onChange={(value) => handleInputChange('source', value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Additional Details
          </label>
          <textarea
            className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
            rows={3}
            placeholder="Any other details about your celebration, special requirements, or things you'd like us to know?"
            value={formData?.additionalDetails || ''}
            onChange={(e) => handleInputChange('additionalDetails', e?.target?.value)}
          />
        </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="Info" size={20} className="text-accent mt-0.5" />
            <div>
              <h4 className="font-medium text-foreground mb-1">What to Expect Next</h4>
              <p className="text-sm text-muted-foreground">
                After booking, you'll receive a confirmation email with consultation details, preparation guide, 
                and a link to our client portal where you can view our full portfolio and planning resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-background">
      <div className="container-fluid">
        <div className="max-w-3xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-center space-x-4 mb-4">
              {[1, 2, 3]?.map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300
                    ${currentStep >= step 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                    }
                  `}>
                    {currentStep > step ? (
                      <Icon name="Check" size={16} />
                    ) : (
                      step
                    )}
                  </div>
                  {step < 3 && (
                    <div className={`
                      w-16 h-1 mx-2 rounded-full transition-all duration-300
                      ${currentStep > step ? 'bg-primary' : 'bg-muted'}
                    `} />
                  )}
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Step {currentStep} of {totalSteps}
            </p>
          </div>

          {/* Form Content */}
          <div className="bg-card rounded-xl border border-border p-8">
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`
                  flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200
                  ${currentStep === 1 
                    ? 'opacity-50 cursor-not-allowed text-muted-foreground' 
                    : 'text-foreground hover:bg-muted'
                  }
                `}
              >
                <Icon name="ChevronLeft" size={16} />
                <span>Previous</span>
              </button>

              <div className="text-sm text-muted-foreground">
                {currentStep} of {totalSteps}
              </div>

              <button
                onClick={nextStep}
                disabled={currentStep === totalSteps}
                className={`
                  flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200
                  ${currentStep === totalSteps 
                    ? 'opacity-50 cursor-not-allowed text-muted-foreground' 
                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }
                `}
              >
                <span>Next</span>
                <Icon name="ChevronRight" size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreConsultationForm;