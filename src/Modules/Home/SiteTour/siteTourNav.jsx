import BtnTourHome from "./btnTourHome";
import BtnSettings from "./btnSettings";
import BtnThemes from "./btnThemes";

export default function SiteTourNav() {
  return (
    <section className="site-tour-nav">
      <BtnTourHome />
      <BtnThemes />
      <BtnSettings />
    </section>
  );
}
