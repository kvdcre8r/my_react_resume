import { Routes, Route } from "react-router-dom";
import NavSiteTour from "./navSiteTour.jsx";
import { SlideTourGuide } from "./slideTourGuide.jsx";
import { SlideCustomization } from "./slideCustomization.jsx";
import { SlideThemes } from "./slideThemes.jsx";
import { SlideSettings } from "./slideSettings.jsx";
import "./SiteTour.css";

// SITE TOUR ROUTES

export function SiteTour() {
  return (
    <section className="site-tour">
      <article>
        <i className="fa-solid fa-route">
          <span>Site Tour</span>
        </i>
        <div className="site-tour-content">
          <NavSiteTour />
          <Routes>
            <Route path="/" element={<SlideTourGuide />} />
            <Route path="/customization/:id" element={<SlideCustomization />} />
            <Route path="/themes/:id" element={<SlideThemes />} />
            <Route path="/settings/:id" element={<SlideSettings />} />
          </Routes>
        </div>
      </article>
    </section>
  );
}
