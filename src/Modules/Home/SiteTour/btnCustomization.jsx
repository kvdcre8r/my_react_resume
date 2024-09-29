import { Link } from "react-router-dom";

export default function BtnCustomization() {
  return (
    <div className="btn-customization">
      <Link to="/customization/:id">
        <i className="fa-solid fa-sliders"><span>Customization</span></i>
      </Link>
    </div>
  );
}
