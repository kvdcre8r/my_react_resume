import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Stylized">My Interactive Resume</Link>
      <Link to="/Classic" className="navlink">
        Traditional Resume
      </Link>
    </nav>
  );
}
