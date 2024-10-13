import ContactInfo from "../Header/contactInfo.jsx";
import JobTitle from "../Header/jobTitle.jsx";
import MyLinks from "../Header/myLinks.jsx";
import Name from "../Header/name.jsx";
import ProfilePix from "../Header/profilePix.jsx";
import ResEducation from "../Resume/resEducation.jsx";
import ResExperience from "../Resume/resExperience.jsx";
import ResProjects from "../Resume/resProjects.jsx";
import ResSkills from "../Resume/resSkills.jsx";
import ResSummary from "../Resume/resSummary.jsx";
import "./mainframe.css";

// MAINFRAME THEME MODULE

export function Mainframe() {
  return (
    <main className="mainframe">
      <div className="header">
        <ProfilePix />
        <div className="text-content">
          <div className="my-title">
            <Name />
            <JobTitle />
          </div>
          <div className="contact-links">
            <ContactInfo />
            <MyLinks />
          </div>
        </div>
      </div>
      <div className="mainframe-resume">
        <ResSummary />
        <ResSkills />
        <ResProjects />
        <ResEducation />
        <ResExperience />
      </div>
    </main>
  );
}
