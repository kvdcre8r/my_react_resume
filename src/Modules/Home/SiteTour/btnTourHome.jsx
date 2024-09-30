import { NavLink } from "react-router-dom";

export default function BtnTourHome() {
  return (
    <div className="btn-tour-home">
      <NavLink to="/">
        <i className="fa-solid fa-street-view"><span>TourGuide</span></i>
      </NavLink>
    </div>
  );
}
