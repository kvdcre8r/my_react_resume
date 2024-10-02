import ContactInfo from "../Header/contactInfo.jsx";
import JobTitle from "../Header/jobTitle.jsx";
import Name from "../Header/name.jsx";
import ProfilePix from "../Header/profilePix.jsx";
import ResumeContent from "../Resume/Resume.jsx";
import "./mainframe.css";

export function Mainframe() {
  return (
    <main className="mainframe">
      <div className="header">
        <ProfilePix />
        <Name />
        <JobTitle />
        <ContactInfo />
      </div>
      <ResumeContent />
    </main>
  );
}
