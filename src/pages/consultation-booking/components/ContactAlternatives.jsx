import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactAlternatives = () => {
  const contactMethods = [
    {
      icon: 'Phone',
      title: 'Call Us Directly',
      description: 'Prefer to talk right away? Give us a call and we\'ll answer any questions you have.',
      action: 'Call Now',
      contact: '+1 (555) 123-4567',
      availability: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM',
      color: 'bg-green-500'
    },
    {
      icon: 'Mail',
      title: 'Send Us an Email',
      description: 'Drop us a line with your questions or celebration details. We respond within 24 hours.',
      action: 'Email Us',
      contact: 'hello@thedreamcapturestudio.com',
      availability: 'Response within 24 hours',
      color: 'bg-blue-500'
    },
    {
      icon: 'MessageSquare',
      title: 'Text Message',
      description: 'Quick question? Send us a text and we\'ll get back to you as soon as possible.',
      action: 'Text Us',
      contact: '+1 (555) 123-4567',
      availability: 'Response within 4 hours',
      color: 'bg-purple-500'
    }
  ];

  const socialLinks = [
    {
      platform: 'Instagram',
      icon: 'Instagram',
      handle: '@thedreamcapturestudio',
      description: 'See our latest work and behind-the-scenes content',
      url: 'https://instagram.com/capturestudiopro'
    },
    {
      platform: 'Facebook',
      icon: 'Facebook',
      handle: 'The Dream Capture Studio',
      description: 'Connect with us and see client testimonials',
      url: 'https://facebook.com/capturestudiopro'
    },
    {
      platform: 'Pinterest',
      icon: 'Heart',
      handle: 'The Dream Capture Studio',
      description: 'Browse inspiration boards and style guides',
      url: 'https://pinterest.com/capturestudiopro'
    }
  ];

  const faqs = [
    {
      question: 'How long does a consultation take?',
      answer: 'Virtual calls typically last 30-45 minutes, while in-person consultations range from 60-90 minutes. We never rush - we take the time needed to understand your vision completely.'
    },
    {
      question: 'Is there any cost for the consultation?',
      answer: 'Absolutely not! All consultations are completely complimentary with no strings attached. We believe in building genuine connections before any business decisions.'
    },
    {
      question: 'What if we\'re not ready to book immediately?',
      answer: 'That\'s perfectly fine! There\'s no pressure to book during or after the consultation. We\'re here to provide information and help you make the best decision for your celebration.'
    },
    {
      question: 'Can we reschedule if something comes up?',
      answer: 'Of course! Life happens, and we understand. You can reschedule up to 24 hours before your consultation time without any issues.'
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container-fluid">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-headline text-foreground mb-4">
              Prefer a Different Way to Connect?
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              We understand everyone has different communication preferences. 
              Choose the method that feels most comfortable for you.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods?.map((method, index) => (
              <div key={index} className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-elevated transition-all duration-300">
                <div className={`w-16 h-16 ${method?.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={method?.icon} size={28} color="white" />
                </div>
                
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {method?.title}
                </h3>
                
                <p className="text-body text-muted-foreground mb-4">
                  {method?.description}
                </p>
                
                <div className="mb-4">
                  <p className="font-medium text-foreground">{method?.contact}</p>
                  <p className="text-sm text-muted-foreground">{method?.availability}</p>
                </div>
                
                <Button
                  variant="outline"
                  className="w-full"
                  iconName={method?.icon}
                  iconPosition="left"
                >
                  {method?.action}
                </Button>
              </div>
            ))}
          </div>

          {/* Social Media & FAQ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Social Media */}
            <div className="bg-card rounded-xl border border-border p-8">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Follow Our Journey
              </h3>
              <p className="text-body text-muted-foreground mb-6">
                Get inspired by our latest work and see real celebrations we've captured.
              </p>
              
              <div className="space-y-4">
                {socialLinks?.map((social, index) => (
                  <a
                    key={index}
                    href={social?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted transition-colors duration-200"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name={social?.icon} size={20} color="var(--color-primary)" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{social?.handle}</p>
                      <p className="text-sm text-muted-foreground">{social?.description}</p>
                    </div>
                    <Icon name="ExternalLink" size={16} className="text-muted-foreground ml-auto" />
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-card rounded-xl border border-border p-8">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Quick Answers
              </h3>
              
              <div className="space-y-6">
                {faqs?.map((faq, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-foreground mb-2">
                      {faq?.question}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {faq?.answer}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Have more questions? We'd love to answer them during your consultation!
                </p>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="mt-12 bg-accent/10 rounded-xl p-6 text-center">
            <Icon name="Clock" size={32} className="mx-auto text-accent mb-3" />
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
              Need Immediate Assistance?
            </h3>
            <p className="text-body text-muted-foreground mb-4">
              For urgent inquiries or last-minute consultation needs, call our priority line.
            </p>
            <Button
              variant="default"
              iconName="Phone"
              iconPosition="left"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Priority Line: +1 (555) 999-0000
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAlternatives;