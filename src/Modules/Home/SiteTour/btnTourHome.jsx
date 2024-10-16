import { NavLink } from "react-router-dom";
import "./navSiteTour.css";

// TOUR HOME BUTTON COMPONENT

export default function BtnTourHome() {
  return (
    <div className="btn-tour-home">
      <NavLink to="/">
        <i className="fa-solid fa-street-view tooltip">
          <span className="tooltiptext">Tour Guide</span>
        </i>
      </NavLink>
    </div>
  );
}
