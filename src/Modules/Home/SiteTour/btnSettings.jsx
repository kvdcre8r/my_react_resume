import { Link } from "react-router-dom";

// SETTINGS BUTTON COMPONENT

export default function BtnSettings() {
  return (
    <div className="btn-settings">
      <Link to="/settings/:id">
        <i className="fa-solid fa-gear"><span>Settings</span></i>
      </Link>
    </div>
  );
}
