import ContactInfo from "../Header/contactInfo.jsx";
import NameSuper from "../Header/nameSuper.jsx";
import MyLinksText from "../Header/myLinksText.jsx";
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
        <NameSuper />
      <div className="superhero-content">
        <div className="profile-summary">
          <ProfilePix />
          <ResSummary />
        </div>
        <ContactInfo />
        <MyLinksText />

        <ResSkills />
        <ResProjects />
        <ResEducation />
        <ResExperience />
      </div>
    </main>
  );
}
