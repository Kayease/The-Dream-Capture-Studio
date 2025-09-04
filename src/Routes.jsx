import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ConsultationBooking from './pages/consultation-booking';
import FilmShowcase from './pages/film-showcase';
import PortfolioHub from './pages/portfolio-hub';
import ResourceLibrary from './pages/resource-library';
import ClientStories from './pages/client-stories';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/consultation-booking" element={<ConsultationBooking />} />
        <Route path="/film-showcase" element={<FilmShowcase />} />
        <Route path="/portfolio-hub" element={<PortfolioHub />} />
        <Route path="/resource-library" element={<ResourceLibrary />} />
        <Route path="/client-stories" element={<ClientStories />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
