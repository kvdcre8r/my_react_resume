import { Link } from "react-router-dom";
import "./navSiteTour.css";

// CUSTOMIZATION BUTTON COMPONENT

export default function BtnCustomization() {
  return (
    <div className="btn-customization">
      <Link to="/customization/:id">
        <i className="fa-solid fa-sliders tooltip">
          <span className="tooltiptext">Customization</span>
        </i>
      </Link>
    </div>
  );
}
