import BtnTourHome from "./btnTourHome";
import BtnCustomization from "./btnCustomization";
import BtnSettings from "./btnSettings";
import BtnThemes from "./btnThemes";

export default function NavSiteTour() {
  return (
    <section className="nav-site-tour">
      <BtnTourHome />
      <BtnCustomization />
      <BtnThemes />
      <BtnSettings />
    </section>
  );
}
