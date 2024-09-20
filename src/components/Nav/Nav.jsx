import { Link } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  return (
    <nav>
      <div className="navbar">
        <Link to="/">Home</Link>
        <div className="dropdown">
          <button className="dropbtn">
            <p>
              Themes <i className="fa fa-caret-down"></i>
            </p>
          </button>
          <div className="dropdown-content">
            <Link to="/classic"><strong>Professional</strong></Link>
            <Link to="/stylized">MAINFRAME</Link>
            <Link to="/superhero"><strong>S u p e r h e r o</strong></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
