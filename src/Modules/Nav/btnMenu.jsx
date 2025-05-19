import { Link } from "react-router-dom";

// THEME MENU COMPONENT
// see nav.css for styling

export default function btnMenu() {
  return (
    <div>
      <div className="dropdown">
        <div className="dropbtn-container">
          <button className="dropbtn">
            <i className="fa-solid fa-wand-magic-sparkles">
              <span>Themes</span>
            </i>
          </button>
          <div className="dropdown-content">
            <Link to="/technical" id="btn-technical">
              <strong>T e c h n i c a l</strong>
            </Link>
            <Link to="/mainframe" id="btn-mainframe">
              MAINFRAME
            </Link>
            <Link to="/superhero" id="btn-superhero">
              <strong>S u p e r h e r o</strong>
            </Link>
            <Link to="/custom" id="btn-custom">
              Customizable
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
