import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import HeroSection from "./components/HeroSection";
import CategoryPreview from "./components/CategoryPreview";
import PhilosophySection from "./components/PhilosophySection";
import TestimonialCarousel from "./components/TestimonialCarousel";
import InstagramFeed from "./components/InstagramFeed";
import MobileConsultationCTA from "./components/MobileConsultationCTA";
import IndianMarketFeatures from "../../components/IndianMarketFeatures";
import WhatsAppFloat from "../../components/WhatsAppFloat";

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>
          The Dream Capture StudioSTUDIO - India's Premier Wedding & Portrait
          Photography | Capturing Dreams Across India
        </title>
        <meta
          name="description"
          content="The Dream Capture StudioSTUDIO - India's most trusted wedding and portrait photography studio. Specializing in Indian weddings, pre-wedding shoots, maternity, and family portraits. Serving Delhi, Mumbai, Bangalore, and across India."
        />
        <meta
          name="keywords"
          content="wedding photography India, Indian wedding photographer, pre-wedding shoots India, portrait photography Delhi, wedding photographer Mumbai, Indian wedding photography, destination wedding photographer India, maternity photography India, family portraits India, professional photographer India"
        />
        <meta
          property="og:title"
          content="The Dream Capture StudioSTUDIO - India's Premier Wedding Photography"
        />
        <meta
          property="og:description"
          content="Capturing dreams, creating memories. India's most trusted wedding and portrait photography studio."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thedreamcapturestudio.com" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://thedreamcapturestudio.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "THE DREAM CAPTURE STUDIO",
            description:
              "India's premier wedding and portrait photography studio",
            url: "https://thedreamcapturestudio.com",
            telephone: "+91-XXXXXXXXXX",
            address: {
              "@type": "PostalAddress",
              addressCountry: "IN",
              addressLocality: "India",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "28.6139",
              longitude: "77.2090",
            },
            openingHours: "Mo-Su 09:00-21:00",
            priceRange: "₹₹₹",
            servesCuisine: "Photography Services",
            serviceArea: "India",
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main>
          {/* Hero Section - Cinematic video montage with dual CTAs */}
          <HeroSection />

          {/* Category Preview - Interactive grid with hover previews */}
          <CategoryPreview />

          {/* Philosophy Section - Parallax scrolling with core message */}
          <PhilosophySection />

          {/* Testimonial Carousel - Video testimonials with client photos */}
          <TestimonialCarousel />

          {/* Indian Market Features - Packages and Cultural Elements */}
          <IndianMarketFeatures />

          {/* Instagram Feed - Live social proof */}
          <InstagramFeed />
        </main>

        {/* Mobile Consultation CTA - Sticky booking interface */}
        <MobileConsultationCTA />

        {/* WhatsApp Float for Indian Market */}
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default Homepage;
