import ProfilePix from "./profilePix.jsx";
import Name from "./name.jsx";
import ContactInfo from "./contactInfo.jsx";
import "./header.css";

export default function Header() {
  return (
    <header>
      <ProfilePix />
      <div id="text-content">
        <Name />
        <ContactInfo />
      </div>
    </header>
  );
}
