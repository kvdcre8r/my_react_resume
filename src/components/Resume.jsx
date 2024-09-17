import Header from "../components/Header.jsx";
import TechSkills from "../components/TechSkills.jsx";
import TechProjects from "../components/TechProjects.jsx";
import TechEducation from "../components/TechEducation.jsx";
import Experience from "../components/Experience.jsx";
import "../App.css"

export default function ResumeContent() {
  return (
    <main className="resume-content">
      <Header />
      <div id="main-content">
        <TechSkills />
        <TechProjects />
        <TechEducation />
        <Experience />
      </div>
    </main>
  );
}