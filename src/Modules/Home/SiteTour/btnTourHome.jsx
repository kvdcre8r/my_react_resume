import { NavLink } from "react-router-dom";

// TOUR HOME BUTTON COMPONENT
// see SiteTour.css for styling

export default function BtnTourHome() {
  return (
    <div className="btn-tour-home">
      <NavLink to="/">
        <i className="fa-solid fa-street-view"></i>
      </NavLink>
    </div>
  );
}
