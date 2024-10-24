import { Routes, Route } from "react-router-dom";
import NavSiteTour from "./navSiteTour.jsx";
import { SlideTourGuide } from "./slideTourGuide.jsx";
import { SlideCustomization } from "./slideCustomization.jsx";
import { SlideThemes } from "./slideThemes.jsx";
import { SlideSettings } from "./slideSettings.jsx";
import { SlideDynamics } from "./slideDynamics.jsx";
import "./SiteTour.css";

// SITE TOUR ROUTES

export function SiteTour() {
  return (
    <section className="site-tour">
      <article>
        <div className="site-tour-content">
          <NavSiteTour />
          <div className="site-tour-routes">
            <Routes>
              <Route path="/" element={<SlideTourGuide />} />
              <Route path="/themes/:id" element={<SlideThemes />} />
              <Route path="/dynamics/:id" element={<SlideDynamics />} />
              <Route
                path="/customization/:id"
                element={<SlideCustomization />}
              />
              <Route path="/settings/:id" element={<SlideSettings />} />
            </Routes>
          </div>
        </div>
      </article>
    </section>
  );
}
