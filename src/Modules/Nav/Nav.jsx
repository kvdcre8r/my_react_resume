import BtnHome from "./btnHome.jsx";
import BtnMenu from "./btnMenu.jsx";
import "./nav.css";

export default function Nav() {
  return (
    <nav>
      <div className="navbar">
        <BtnHome />
        <BtnMenu />
      </div>
    </nav>
  );
}
