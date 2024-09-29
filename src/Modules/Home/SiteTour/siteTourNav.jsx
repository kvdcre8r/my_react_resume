import BtnTourHome from "./btnTourHome";
import BtnCustomization from "./btnCustomization";
import BtnSettings from "./btnSettings";
import BtnThemes from "./btnThemes";

export default function SiteTourNav() {
  return (
    <section className="site-tour-nav">
      <BtnTourHome />
      <BtnCustomization />
      <BtnThemes />
      <BtnSettings />
    </section>
  );
}
