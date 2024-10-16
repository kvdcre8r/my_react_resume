import { Link } from "react-router-dom";
import "./navSiteTour.css";

// THEMES BUTTON COMPONENT

export default function BtnThemes() {
  return (
    <div className="btn-themes">
      <Link to="/themes/:id">
        <i className="fa-solid fa-wand-magic-sparkles tooltip">
          <span className="tooltiptext">Themes</span>
        </i>
      </Link>
    </div>
  );
}
