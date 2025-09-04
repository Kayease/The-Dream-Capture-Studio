import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ReferralStories = () => {
  const referralChains = [
    {
      id: 1,
      originalClient: {
        name: "Jessica & Ryan",
        event: "Wedding 2022",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=200&fit=crop"
      },
      referrals: [
        {
          name: "Sarah & Mike",
          relationship: "Best Friends",
          event: "Engagement 2023",
          image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=300&h=200&fit=crop"
        },
        {
          name: "The Chen Family",
          relationship: "Neighbors",
          event: "Maternity 2023",
          image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=300&h=200&fit=crop"
        },
        {
          name: "Emma & David",
          relationship: "College Friends",
          event: "Wedding 2024",
          image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&h=200&fit=crop"
        }
      ],
      testimonial: `"After seeing Jessica & Ryan's stunning wedding photos, we knew we had to book The Dream Capture Studio for our own celebration. The referral was the best gift they could have given us!"`,
      totalReferrals: 8
    },
    {
      id: 2,
      originalClient: {
        name: "The Martinez Family",
        event: "Family Portrait 2021",
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=300&h=200&fit=crop"
      },
      referrals: [
        {
          name: "Lisa & Carlos",
          relationship: "Sister & Brother-in-law",
          event: "Maternity 2022",
          image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=300&h=200&fit=crop"
        },
        {
          name: "The Rodriguez Family",
          relationship: "Extended Family",
          event: "Anniversary 2023",
          image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=300&h=200&fit=crop"
        }
      ],
      testimonial: `"Three years and five family sessions later, we've become like family with The Dream Capture Studio. Every milestone deserves their artistic touch!"`,
      totalReferrals: 12
    }
  ];

  const repeatClients = [
    {
      name: "Amanda & Josh",
      timeline: [
        { event: "Engagement", date: "Spring 2022", icon: "Heart" },
        { event: "Wedding", date: "Fall 2022", icon: "Crown" },
        { event: "Maternity", date: "Summer 2023", icon: "Baby" },
        { event: "Newborn", date: "Fall 2023", icon: "Star" },
        { event: "1st Birthday", date: "Fall 2024", icon: "Gift" }
      ],
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
      testimonial: "They've documented every major milestone in our journey. We can't imagine trusting anyone else with our precious memories."
    },
    {
      name: "The Thompson Family",
      timeline: [
        { event: "Wedding", date: "Summer 2021", icon: "Crown" },
        { event: "Maternity", date: "Spring 2022", icon: "Baby" },
        { event: "Family Portrait", date: "Fall 2023", icon: "Users" },
        { event: "Anniversary", date: "Summer 2024", icon: "Heart" }
      ],
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop",
      testimonial: "Three years of beautiful memories captured. They know our family so well now, every session feels like hanging out with old friends."
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-secondary/10">
      <div className="container-fluid">
        <div className="text-center mb-12">
          <h2 className="text-headline text-foreground mb-4">
            The Power of <span className="text-primary">Referrals</span>
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Our best marketing is the love our clients share. See how one beautiful experience creates a ripple effect of trust and joy.
          </p>
        </div>

        {/* Referral Chains */}
        <div className="space-y-16 mb-20">
          {referralChains?.map((chain) => (
            <div key={chain?.id} className="bg-card rounded-2xl p-8 lg:p-12 border border-border shadow-soft">
              <div className="text-center mb-8">
                <h3 className="text-title text-foreground mb-2">
                  Started with {chain?.originalClient?.name}
                </h3>
                <p className="text-body text-muted-foreground">
                  {chain?.totalReferrals} referrals and counting...
                </p>
              </div>

              {/* Chain Visualization */}
              <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 mb-8">
                {/* Original Client */}
                <div className="text-center">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-muted mb-4 mx-auto border-4 border-primary">
                      <Image
                        src={chain?.originalClient?.image}
                        alt={chain?.originalClient?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="Crown" size={16} className="text-primary-foreground" />
                    </div>
                  </div>
                  <h4 className="text-sm font-medium text-foreground">{chain?.originalClient?.name}</h4>
                  <p className="text-xs text-muted-foreground">{chain?.originalClient?.event}</p>
                </div>

                {/* Arrow */}
                <div className="hidden lg:block">
                  <Icon name="ArrowRight" size={24} className="text-muted-foreground" />
                </div>
                <div className="lg:hidden">
                  <Icon name="ArrowDown" size={24} className="text-muted-foreground" />
                </div>

                {/* Referrals */}
                <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
                  {chain?.referrals?.slice(0, 3)?.map((referral, index) => (
                    <div key={index} className="text-center">
                      <div className="w-20 h-20 rounded-full overflow-hidden bg-muted mb-3 mx-auto border-2 border-accent">
                        <Image
                          src={referral?.image}
                          alt={referral?.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h5 className="text-xs font-medium text-foreground">{referral?.name}</h5>
                      <p className="text-xs text-muted-foreground">{referral?.relationship}</p>
                      <p className="text-xs text-accent">{referral?.event}</p>
                    </div>
                  ))}
                  
                  {chain?.totalReferrals > 3 && (
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full bg-muted border-2 border-dashed border-muted-foreground flex items-center justify-center mb-3 mx-auto">
                        <span className="text-sm font-medium text-muted-foreground">
                          +{chain?.totalReferrals - 3}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">More referrals</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-secondary/20 rounded-xl p-6 border border-secondary/30">
                <div className="flex items-start space-x-4">
                  <Icon name="Quote" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <p className="text-body text-foreground italic">{chain?.testimonial}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Repeat Clients */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-title text-foreground mb-4">
              Clients Who Keep Coming Back
            </h3>
            <p className="text-body text-muted-foreground max-w-xl mx-auto">
              The ultimate compliment - couples who trust us with every milestone in their journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {repeatClients?.map((client, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden border border-border shadow-soft">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={client?.image}
                    alt={client?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h4 className="text-title text-foreground font-medium mb-4">{client?.name}</h4>
                  
                  {/* Timeline */}
                  <div className="space-y-3 mb-6">
                    {client?.timeline?.map((milestone, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name={milestone?.icon} size={16} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-foreground">{milestone?.event}</span>
                            <span className="text-xs text-muted-foreground">{milestone?.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-foreground italic">"{client?.testimonial}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12">
          <h3 className="text-title text-foreground mb-4">
            Ready to Start Your Story?
          </h3>
          <p className="text-body text-muted-foreground mb-6 max-w-xl mx-auto">
            Join our family of satisfied clients and become part of our referral network. 
            Your friends will thank you for the recommendation!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="default" iconName="Calendar" iconPosition="left">
              Book Your Consultation
            </Button>
            <Button variant="outline" iconName="Users" iconPosition="left">
              Refer a Friend
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralStories;