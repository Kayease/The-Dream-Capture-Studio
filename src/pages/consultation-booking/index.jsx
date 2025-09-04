import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ConsultationHero from './components/ConsultationHero';
import ConsultationTypes from './components/ConsultationTypes';
import BookingCalendar from './components/BookingCalendar';
import PreConsultationForm from './components/PreConsultationForm';
import ConsultationTestimonials from './components/ConsultationTestimonials';
import BookingConfirmation from './components/BookingConfirmation';
import ContactAlternatives from './components/ContactAlternatives';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const ConsultationBooking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedType, setSelectedType] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({});
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  const totalSteps = 4;

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    if (currentStep === 1) {
      setCurrentStep(2);
    }
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    if (selectedDate && currentStep === 2) {
      setCurrentStep(3);
    }
  };

  const handleFormChange = (data) => {
    setFormData(data);
  };

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleConfirmBooking = () => {
    // In a real application, this would make an API call to book the consultation
    setIsBookingConfirmed(true);
    
    // Mock booking confirmation
    setTimeout(() => {
      alert(`Consultation confirmed!\n\nType: ${selectedType}\nDate: ${selectedDate?.toDateString()}\nTime: ${selectedTime}\n\nYou'll receive a confirmation email shortly with all the details.`);
    }, 500);
  };

  const handleEdit = () => {
    setCurrentStep(1);
    setIsBookingConfirmed(false);
  };

  const canProceedToNext = () => {
    switch (currentStep) {
      case 1:
        return selectedType !== '';
      case 2:
        return selectedDate && selectedTime;
      case 3:
        return formData?.name && formData?.email && formData?.celebrationType;
      default:
        return false;
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return 'Choose Consultation Type';
      case 2:
        return 'Select Date & Time';
      case 3:
        return 'Share Your Details';
      case 4:
        return 'Confirm Booking';
      default:
        return 'Book Consultation';
    }
  };

  if (isBookingConfirmed) {
    return (
      <>
        <Helmet>
          <title>Consultation Confirmed - The Dream Capture Studio</title>
          <meta name="description" content="Your consultation has been confirmed. We're excited to meet you and discuss your photography needs." />
        </Helmet>
        
        <div className="min-h-screen bg-background">
          <Header />
          
          {/* Success Message */}
          <section className="py-20 bg-gradient-to-br from-background via-muted to-secondary/20">
            <div className="container-fluid">
              <div className="max-w-2xl mx-auto text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Check" size={40} color="white" />
                </div>
                
                <h1 className="text-display text-foreground mb-4">
                  Consultation Confirmed!
                </h1>
                
                <p className="text-subtitle text-muted-foreground mb-8">
                  Thank you for booking with The Dream Capture Studio. We're excited to meet you and discuss how we can capture your special moments beautifully.
                </p>
                
                <div className="bg-card rounded-xl border border-border p-6 mb-8">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    What Happens Next?
                  </h3>
                  
                  <div className="space-y-3 text-left">
                    <div className="flex items-start space-x-3">
                      <Icon name="Mail" size={20} className="text-accent mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Confirmation Email</p>
                        <p className="text-sm text-muted-foreground">You'll receive a detailed confirmation email within 5 minutes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Icon name="Calendar" size={20} className="text-accent mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Calendar Invite</p>
                        <p className="text-sm text-muted-foreground">Add the consultation to your calendar with all the details</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Icon name="FileText" size={20} className="text-accent mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Preparation Guide</p>
                        <p className="text-sm text-muted-foreground">Access to our consultation prep guide and portfolio</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <Button
                    variant="outline"
                    onClick={() => window.location.href = '/portfolio-hub'}
                    iconName="Camera"
                    iconPosition="left"
                  >
                    View Our Portfolio
                  </Button>
                  
                  <Button
                    variant="default"
                    onClick={() => window.location.href = '/homepage'}
                    iconName="Home"
                    iconPosition="left"
                  >
                    Back to Home
                  </Button>
                </div>
              </div>
            </div>
          </section>
          
          <ContactAlternatives />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Book Your Consultation - The Dream Capture Studio</title>
        <meta name="description" content="Schedule your complimentary consultation with The Dream Capture Studio. Choose from virtual, in-person, or location meetings to discuss your photography needs." />
        <meta name="keywords" content="photography consultation, wedding photographer consultation, engagement photography, maternity photography, booking" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <ConsultationHero />
        
        {/* Progress Indicator */}
        {currentStep <= 4 && (
          <section className="py-8 bg-background border-b border-border">
            <div className="container-fluid">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">
                    {getStepTitle()}
                  </h2>
                  <span className="text-sm text-muted-foreground">
                    Step {currentStep} of {totalSteps}
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Step Content */}
        {currentStep === 1 && (
          <ConsultationTypes 
            selectedType={selectedType} 
            onTypeSelect={handleTypeSelect} 
          />
        )}
        
        {currentStep === 2 && (
          <BookingCalendar 
            selectedDate={selectedDate}
            onDateSelect={handleDateSelect}
            selectedTime={selectedTime}
            onTimeSelect={handleTimeSelect}
          />
        )}
        
        {currentStep === 3 && (
          <PreConsultationForm 
            formData={formData}
            onFormChange={handleFormChange}
          />
        )}
        
        {currentStep === 4 && (
          <BookingConfirmation
            selectedType={selectedType}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            formData={formData}
            onConfirmBooking={handleConfirmBooking}
            onEdit={handleEdit}
          />
        )}
        
        {/* Navigation Controls */}
        {currentStep <= 4 && currentStep !== 4 && (
          <section className="py-8 bg-muted/30">
            <div className="container-fluid">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    onClick={handlePrevStep}
                    disabled={currentStep === 1}
                    iconName="ArrowLeft"
                    iconPosition="left"
                  >
                    Previous
                  </Button>
                  
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4]?.map((step) => (
                      <div
                        key={step}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          step <= currentStep ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <Button
                    variant="default"
                    onClick={handleNextStep}
                    disabled={!canProceedToNext()}
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    {currentStep === 3 ? 'Review Booking' : 'Continue'}
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}
        
        <ConsultationTestimonials />
        <ContactAlternatives />
        
        {/* Footer */}
        <footer className="bg-foreground text-background py-12">
          <div className="container-fluid">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Camera" size={20} color="white" />
                </div>
                <span className="font-heading text-xl font-bold">The Dream Capture Studio</span>
              </div>
              <p className="text-sm opacity-80 mb-4">
                Creating timeless memories through artistic photography
              </p>
              <p className="text-xs opacity-60">
                © {new Date()?.getFullYear()} The Dream Capture Studio. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ConsultationBooking;