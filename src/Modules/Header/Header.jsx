import ProfilePix from "./profilePix.jsx";
import Name from "./name.jsx";
import JobTitle from "./jobTitle.jsx";
import ContactInfo from "./contactInfo.jsx";
import "./header.css";

export default function Header() {
  return (
    <header>
      <ProfilePix />
      <div className="text-content">
        <Name />
        <JobTitle />
        <ContactInfo />
      </div>
    </header>
  );
}
