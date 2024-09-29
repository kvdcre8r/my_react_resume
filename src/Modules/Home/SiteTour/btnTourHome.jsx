import { NavLink } from "react-router-dom";

export default function BtnTourHome() {
  return (
    <div className="btn-tour-home">
      <NavLink to="/" exact>
        <i className="fa-solid fa-street-view"><span>Tour Guide</span></i>
      </NavLink>
    </div>
  );
}
