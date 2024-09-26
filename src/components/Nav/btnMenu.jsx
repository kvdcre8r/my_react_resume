import { Link } from "react-router-dom";

export default function btnMenu() {
  return (
    <div>
      <div className="dropdown">
        <button className="dropbtn">
          <i className="fa-solid fa-wand-magic-sparkles">
            <span>Themes</span>
          </i>
        </button>
        <div className="dropdown-content">
          <Link to="/classic" id="btn-professional">
            <strong>Professional</strong>
          </Link>
          <Link to="/stylized" id="btn-mainframe">MAINFRAME</Link>
          <Link to="/superhero" id="btn-superhero">
            <strong>S u p e r h e r o</strong>
          </Link>
        </div>
      </div>
    </div>
  );
}
