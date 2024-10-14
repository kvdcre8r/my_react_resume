import { Link } from "react-router-dom";

// SETTINGS BUTTON COMPONENT
// see SiteTour.css for styling

export default function BtnSettings() {
  return (
    <div className="btn-settings">
      <Link to="/settings/:id">
        <i className="fa-solid fa-gear"></i>
      </Link>
    </div>
  );
}
