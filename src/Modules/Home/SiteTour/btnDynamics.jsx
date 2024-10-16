import { Link } from "react-router-dom";
import "./navSiteTour.css";

// DYNAMIC FEATURES BUTTON COMPONENT

export default function BtnDynamics() {
  return (
    <div className="btn-dynamics">
      <Link to="/dynamics/:id">
        <i className="fa-solid fa-star tooltip">
          <span className="tooltiptext">Dynamic<br />Features</span>
        </i>
      </Link>
    </div>
  );
}
