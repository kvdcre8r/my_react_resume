import BtnTourHome from "./btnTourHome";
import BtnCustomization from "./btnCustomization";
import BtnSettings from "./btnSettings";
import BtnThemes from "./btnThemes";

// SITE TOUR NAV component module
// see SiteTour.css for styling

export default function NavSiteTour() {
  return (
    <section className="nav-site-tour">
      <BtnTourHome />
      <BtnThemes />
      <BtnCustomization />
      <BtnSettings />
    </section>
  );
}
