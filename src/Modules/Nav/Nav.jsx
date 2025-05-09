import BtnHome from "./btnHome.jsx";
import BtnMenu from "./btnMenu.jsx";
import BtnResume from "./btnResume.jsx";
import "./nav.css";

// NAVBAR LAYOUT

export default function Nav() {
  return (
    <nav>
      <div className="navbar">
        <BtnHome />
        <BtnResume />
        <BtnMenu />
      </div>
    </nav>
  );
}
