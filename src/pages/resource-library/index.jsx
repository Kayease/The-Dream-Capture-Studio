import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import ResourceHero from "./components/ResourceHero";
import ResourceCategories from "./components/ResourceCategories";
import ResourceGrid from "./components/ResourceGrid";
import BlogSection from "./components/BlogSection";
import QuickAccessSection from "./components/QuickAccessSection";

const ResourceLibrary = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    // Smooth scroll to resource grid
    const resourceGrid = document.getElementById("resource-grid");
    if (resourceGrid) {
      resourceGrid?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Resource Library - Photography Guides & Tips | The Dream Capture
          Studio
        </title>
        <meta
          name="description"
          content="Access expert photography guides, styling tips, planning resources, and location insights. Free downloadable resources to help you prepare for your perfect photo session."
        />
        <meta
          name="keywords"
          content="photography guides, wedding planning, styling tips, photo session preparation, photography resources"
        />
        <meta
          property="og:title"
          content="Resource Library - Photography Guides & Tips | The Dream Capture Studio"
        />
        <meta
          property="og:description"
          content="Expert photography guides, styling tips, and planning resources to help you prepare for your perfect photo session."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/resource-library" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        <main>
          <ResourceHero />

          <ResourceCategories
            onCategoryChange={handleCategoryChange}
            activeCategory={activeCategory}
          />

          <div id="resource-grid">
            <ResourceGrid activeCategory={activeCategory} />
          </div>

          <BlogSection />


          <QuickAccessSection />
        </main>

        <footer className="bg-foreground text-background py-8">
          <div className="container-fluid">
            <div className="text-center">
              <p className="text-sm">
                © {new Date()?.getFullYear()} The Dream Capture Studio. All
                rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ResourceLibrary;
