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
            <Link to="/classic">Classic</Link>
            <Link to="/stylized">Stylized</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
