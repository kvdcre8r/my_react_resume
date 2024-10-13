import ProfilePix from "./profilePix.jsx";
import Name from "./name.jsx";
import JobTitle from "./jobTitle.jsx";
import ContactInfo from "./contactInfo.jsx";
import MyLinks from "./myLinks.jsx";

// HEADER COMPONENTS MODULE
// see each theme module's CSS file for styling

export default function Header() {
  return (
    <header>
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
    </header>
  );
}
