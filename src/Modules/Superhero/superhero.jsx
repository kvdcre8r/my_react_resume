import Header from "../../components/Header/header.jsx";
import TechSkills from "../../components/Resume/techSkills.jsx";
import TechProjects from "../../components/Resume/techProjects.jsx";
import TechEducation from "../../components/Resume/techEducation.jsx";
import Experience from "../../components/Resume/experience.jsx";
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
