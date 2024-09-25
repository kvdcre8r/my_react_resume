import { Link } from "react-router-dom";

export default function btnMenu() {
  return (
    <div className="dropdown">
      <button className="dropbtn">
        <i className="fa fa-bars"></i>
      </button>
      <div className="dropdown-content">
        <Link to="/classic">
          <strong>Professional</strong>
        </Link>
        <Link to="/stylized">MAINFRAME</Link>
        <Link to="/superhero">
          <strong>S u p e r h e r o</strong>
        </Link>
      </div>
    </div>
  );
}
