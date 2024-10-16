import { Link } from "react-router-dom";
import "./navSiteTour.css";

// SETTINGS BUTTON COMPONENT

export default function BtnSettings() {
  return (
    <div className="btn-settings">
      <Link to="/settings/:id">
        <i className="fa-solid fa-gear tooltip">
          <span className="tooltiptext">Settings</span>
        </i>
      </Link>
    </div>
  );
}
