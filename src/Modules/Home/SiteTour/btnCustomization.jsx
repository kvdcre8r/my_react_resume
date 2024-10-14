import { Link } from "react-router-dom";

// CUSTOMIZATION BUTTON COMPONENT
// see SiteTour.css for styling

export default function BtnCustomization() {
  return (
    <div className="btn-customization">
      <Link to="/customization/:id">
        <i className="fa-solid fa-sliders"></i>
      </Link>
    </div>
  );
}
