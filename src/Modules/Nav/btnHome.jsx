import { Link } from "react-router-dom";

// HOME BUTTON COMPONENT
// see nav.css for styling

export default function btnHome() {
  return (
    <div className="btn-home">
      <Link to="/">
        <i className="fa fa-home"><span>kvdcre8r</span></i>
      </Link>
    </div>
  );
}
