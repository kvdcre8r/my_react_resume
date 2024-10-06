import ContactInfo from "../Header/contactInfo.jsx";
import Name from "../Header/name.jsx";
import MyLinks from "../Header/myLinks.jsx";
import ProfilePix from "../Header/profilePix.jsx";
import ResSummary from "../Resume/resSummary.jsx";
import ResSkills from "../Resume/resSkills.jsx";
import ResProjects from "../Resume/resProjects.jsx";
import ResEducation from "../Resume/resEducation.jsx";
import ResExperience from "../Resume/resExperience.jsx";
import "./superhero.css";

export function Superhero() {
  return (
    <main className="superhero">
      <div className="header">
        <Name />
      </div>
      <div className="superhero-resume">
        <div className="profile-summary">
          <div className="profile-links">
            <ProfilePix />
          </div>
          <div className="contacts-summary">
            <div className="contact-links">
              <ContactInfo />
              <MyLinks />
            </div>
            <ResSummary />
          </div>
        </div>
        <ResSkills />
        <ResProjects />
        <ResEducation />
        <ResExperience />
      </div>
    </main>
  );
}
