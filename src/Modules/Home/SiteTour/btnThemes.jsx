import { Link } from "react-router-dom";

// THEMES BUTTON COMPONENT
// see SiteTour.css for styling

export default function BtnThemes() {
  return (
    <div className="btn-themes">
      <Link to="/themes/:id">
        <i className="fa-solid fa-wand-magic-sparkles"></i>
      </Link>
    </div>
  );
}
