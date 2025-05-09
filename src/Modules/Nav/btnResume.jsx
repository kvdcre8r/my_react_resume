import { Link } from "react-router-dom";

// HOME BUTTON COMPONENT
// see nav.css for styling

export default function btnHome() {
  return (
    <div className="btn-professional">
      <Link to="/professional">
        <i className="fa-solid fa-file"><span>Resume</span></i>
      </Link>
    </div>
  );
}