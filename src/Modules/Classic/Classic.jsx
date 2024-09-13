import Header from "../../components/Header.jsx";
import TechSkills from "../../components/TechSkills.jsx";
import TechProjects from "../../components/TechProjects.jsx";
import TechEducation from "../../components/TechEducation.jsx";
import Experience from "../../components/Experience.jsx";
import "./classic.css";

export function Classic() {
  return (
    <main className="classic">
      <Header />
      <div id="main-content">
        <TechProjects />
        <TechSkills />
        <TechEducation />
        <Experience />
      </div>
    </main>
  );
}
