import Header from "../../components/Header/Header.jsx";
import { SiteIntro } from "./siteIntro.jsx";
import { ResumeOptions } from "./resumeOptions.jsx";
import { SiteFeatures } from "./siteFeatures.jsx";
import "./home.css";

export function Home() {
  return (
    <main className="home">
      <Header />
      <div className="home-content">
        <div className="home-left">
          <SiteIntro />
          <ResumeOptions />
        </div>
        <div className="home-right">
          <SiteFeatures />
        </div>
      </div>
    </main>
  );
}
