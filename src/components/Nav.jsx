import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/">My Interactive Resume</Link>
      <Link to="/Simple" className="navlink">
        Traditional Resume
      </Link>
    </nav>
  );
}
