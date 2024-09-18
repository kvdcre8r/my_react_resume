import { Link } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Classic">My Classic Resume</Link>
      <Link to="/Stylized">My Stylized Resume</Link>
      {/* <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div> */}
    </nav>
  );
}
