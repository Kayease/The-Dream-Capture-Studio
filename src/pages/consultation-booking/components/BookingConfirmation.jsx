import React from "react";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

const BookingConfirmation = ({
  selectedType,
  selectedDate,
  selectedTime,
  formData,
  onConfirmBooking,
  onEdit,
}) => {
  const consultationTypeNames = {
    virtual: "Virtual Discovery Call",
    studio: "In-Person Studio Visit",
    location: "Location Meeting",
  };

  const consultationDurations = {
    virtual: "30-45 minutes",
    studio: "60-90 minutes",
    location: "45-75 minutes",
  };

  const formatDate = (date) => {
    return date?.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getConsultationDetails = () => {
    switch (selectedType) {
      case "virtual":
        return {
          location: "Video Call (Zoom link will be provided)",
          preparation: [
            "Stable internet connection",
            "Quiet, well-lit space",
            "Any inspiration images ready to share",
            "List of questions or concerns",
          ],
        };
      case "studio":
        return {
          location: "The Dream Capture Studio - 123 Creative Avenue, Downtown",
          preparation: [
            "Comfortable attire for studio visit",
            "Any inspiration materials",
            "Questions about our process",
            "Partner is welcome to join",
          ],
        };
      case "location":
        return {
          location: formData?.location || "Location to be confirmed",
          preparation: [
            "Meet at agreed location",
            "Weather-appropriate clothing",
            "Venue access arrangements",
            "Timeline and logistics questions",
          ],
        };
      default:
        return { location: "", preparation: [] };
    }
  };

  const details = getConsultationDetails();

  return (
    <section className="py-16 bg-background">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Calendar" size={32} color="var(--color-accent)" />
            </div>
            <h2 className="text-headline text-foreground mb-4">
              Confirm Your Consultation
            </h2>
            <p className="text-body text-muted-foreground">
              Please review your consultation details before confirming your
              booking.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Consultation Details */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                Consultation Details
              </h3>

              <div className="space-y-4">
                {/* Type */}
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Camera"
                    size={20}
                    className="text-primary mt-0.5"
                  />
                  <div>
                    <p className="font-medium text-foreground">
                      {consultationTypeNames?.[selectedType]}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Duration: {consultationDurations?.[selectedType]}
                    </p>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Calendar"
                    size={20}
                    className="text-primary mt-0.5"
                  />
                  <div>
                    <p className="font-medium text-foreground">
                      {formatDate(selectedDate)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {selectedTime} (Your local time)
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-3">
                  <Icon
                    name="MapPin"
                    size={20}
                    className="text-primary mt-0.5"
                  />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">
                      {details?.location}
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="flex items-start space-x-3">
                  <Icon name="User" size={20} className="text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">
                      {formData?.name}
                      {formData?.partnerName && ` & ${formData?.partnerName}`}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {formData?.email}
                    </p>
                    {formData?.phone && (
                      <p className="text-sm text-muted-foreground">
                        {formData?.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Celebration Type */}
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Heart"
                    size={20}
                    className="text-primary mt-0.5"
                  />
                  <div>
                    <p className="font-medium text-foreground">
                      Celebration Type
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {formData?.celebrationType} • {formData?.timeline}
                    </p>
                  </div>
                </div>
              </div>

              {/* Edit Button */}
              <button
                onClick={onEdit}
                className="mt-6 flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-200"
              >
                <Icon name="Edit" size={16} />
                <span className="text-sm font-medium">Edit Details</span>
              </button>
            </div>

            {/* Preparation Guide */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                Preparation Guide
              </h3>

              <div className="space-y-6">
                {/* What to Prepare */}
                <div>
                  <h4 className="font-medium text-foreground mb-3">
                    What to Prepare:
                  </h4>
                  <ul className="space-y-2">
                    {details?.preparation?.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-2 text-sm text-muted-foreground"
                      >
                        <Icon
                          name="Check"
                          size={14}
                          className="text-accent mt-0.5 flex-shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What to Expect */}
                <div>
                  <h4 className="font-medium text-foreground mb-3">
                    What to Expect:
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <Icon
                        name="Check"
                        size={14}
                        className="text-accent mt-0.5 flex-shrink-0"
                      />
                      <span>Warm, friendly conversation about your vision</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon
                        name="Check"
                        size={14}
                        className="text-accent mt-0.5 flex-shrink-0"
                      />
                      <span>Portfolio review and style discussion</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon
                        name="Check"
                        size={14}
                        className="text-accent mt-0.5 flex-shrink-0"
                      />
                      <span>Package options and investment overview</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon
                        name="Check"
                        size={14}
                        className="text-accent mt-0.5 flex-shrink-0"
                      />
                      <span>Timeline planning and next steps</span>
                    </li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">
                    Need to Reschedule?
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Life happens! You can reschedule up to 24 hours before your
                    consultation.
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <a
                      href="mailto:hello@thedreamcapturestudio.com"
                      className="flex items-center space-x-1 text-primary hover:text-primary/80"
                    >
                      <Icon name="Mail" size={14} />
                      <span>Email us</span>
                    </a>
                    <a
                      href="tel:+1234567890"
                      className="flex items-center space-x-1 text-primary hover:text-primary/80"
                    >
                      <Icon name="Phone" size={14} />
                      <span>Call us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Confirmation Actions */}
          <div className="mt-12 text-center">
            <div className="bg-card rounded-xl border border-border p-8">
              <div className="max-w-2xl mx-auto">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  Ready to Confirm Your Consultation?
                </h3>
                <p className="text-body text-muted-foreground mb-6">
                  By confirming, you'll receive a calendar invite, preparation
                  guide, and access to our client portal with additional
                  resources to help you prepare for our conversation.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <Button
                    variant="outline"
                    onClick={onEdit}
                    iconName="ArrowLeft"
                    iconPosition="left"
                  >
                    Go Back & Edit
                  </Button>

                  <Button
                    variant="default"
                    onClick={onConfirmBooking}
                    iconName="Calendar"
                    iconPosition="left"
                    className="shadow-soft hover:shadow-elevated"
                  >
                    Confirm Consultation
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground mt-4">
                  No payment required • Completely complimentary • No commitment
                  necessary
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingConfirmation;
