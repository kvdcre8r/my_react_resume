import ProfilePix from "./profilePix.jsx";
import Name from "./name.jsx";
import JobTitle from "./jobTitle.jsx";
import ContactInfo from "./contactInfo.jsx";
import MyLinks from "./myLinks.jsx";

export default function Header() {
  return (
    <header>
      <ProfilePix />
      <div className="text-content">
        <div className="my-title">
          <Name />
          <JobTitle />
        </div>
        <ContactInfo />
        <MyLinks />
      </div>
    </header>
  );
}
