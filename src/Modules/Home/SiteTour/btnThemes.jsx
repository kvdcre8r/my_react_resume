import { Link } from "react-router-dom";

export default function BtnThemes() {
  return (
    <div className="btn-themes">
      <Link to="/themes/:id">
        <i className="fa-solid fa-wand-magic-sparkles"><span>Themes</span></i>
      </Link>
    </div>
  );
}