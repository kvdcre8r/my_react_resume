import ProfilePix from "../Header/profilePix.jsx";
import Name from "../Header/name.jsx";
import JobTitle from "../Header/jobTitle.jsx";
import ContactInfo from "../Header/contactInfo.jsx";
import MyLinks from "../Header/myLinks.jsx";
import { SiteIntro } from "./siteIntro.jsx";
import { SiteTour } from "./SiteTour/SiteTour.jsx";
import { SiteFeatures } from "./siteFeatures.jsx";
import "./home.css";

export function Home() {
  return (
    <main className="home">
      <header>
        <ProfilePix />
        <div className="text-content">
          <div className="brand">
            <Name />
            <ContactInfo />
          </div>
          <div className="career">
            <JobTitle />
            <MyLinks />
          </div>
        </div>
      </header>
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
