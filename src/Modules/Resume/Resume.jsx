import TechSkills from "./resSkills.jsx";
import TechProjects from "./resProjects.jsx";
import TechEducation from "./resEducation.jsx";
import Experience from "./resExperience.jsx";

export default function ResumeContent() {
  return (
    <main className="resume-content">
      <div id="main-content">
        <TechSkills />
        <TechProjects />
        <TechEducation />
        <Experience />
      </div>
    </main>
  );
}