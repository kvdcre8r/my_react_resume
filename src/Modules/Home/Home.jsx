import Header from "../Header/Header.jsx";
import { SiteIntro } from "./siteIntro.jsx";
import { SiteTour } from "./SiteTour/SiteTour.jsx";
import { SiteFeatures } from "./siteFeatures.jsx";
import "./home.css";

export function Home() {
  return (
    <main className="home">
      <Header />
      <div className="home-content">
        <div className="home-left">
          <SiteIntro />
          <SiteTour />
        </div>
        <div className="home-right">
          <SiteFeatures />
        </div>
      </div>
    </main>
  );
}
