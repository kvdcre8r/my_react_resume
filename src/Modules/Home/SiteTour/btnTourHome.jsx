import { Link } from "react-router-dom";

export default function BtnTourHome() {
  return (
    <div className="btn-tour-home">
      <Link to="/">
        <i className="fa-solid fa-magnifying-glass"><span>Tour Guide</span></i>
      </Link>
    </div>
  );
}
