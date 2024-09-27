import { Routes, Route } from "react-router-dom";
import SiteTourNav from "./siteTourNav.jsx";
import { TourHome } from "./tourHome.jsx";
import { SlideThemes } from "./slideThemes.jsx";
import { SlideSettings } from "./slideSettings.jsx";
import "./indexSiteTour.css";

export function SiteTour() {
  return (
    <section className="site-tour">
      <i className="fa fa-home">
        <span>Site Tour</span>
      </i>
      <article className="site-tour-content">
        <SiteTourNav />
        <Routes>
          <Route path="/" element={<TourHome />} />
          <Route path="/themes/:id" element={<SlideThemes />} />
          <Route path="/settings/:id" element={<SlideSettings />} />
        </Routes>
      </article>
    </section>
  );
}
