import Header from "./header.jsx";
import TechSkills from "./techSkills.jsx";
import TechProjects from "./techProjects.jsx";
import TechEducation from "./techEducation.jsx";
import Experience from "./experience.jsx";

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