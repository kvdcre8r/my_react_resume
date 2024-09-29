import Header from "../Header/Header.jsx";
import TechSkills from "../Resume/resSkills.jsx";
import TechProjects from "../Resume/resProjects.jsx";
import TechEducation from "../Resume/resEducation.jsx";
import Experience from "../Resume/resExperience.jsx";
import "./superhero.css";

export function Superhero() {
  return (
    <main className="superhero">
      <Header />
      <div id="superhero-content">
        <TechSkills />
        <TechProjects />
        <TechEducation />
        <Experience />
      </div>
    </main>
  );
}
