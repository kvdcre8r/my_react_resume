import { Link } from "react-router-dom";

// DYNAMIC FEATURES BUTTON COMPONENT
// see SiteTour.css for styling

export default function BtnDynamics() {
  return (
    <div className="btn-dynamics">
      <Link to="/dynamics/:id">
        <i className="fa-solid fa-star"></i>
      </Link>
    </div>
  );
}
