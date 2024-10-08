import ResSummary from "./resSummary.jsx";
import ResSkills from "./resSkills.jsx";
import ResProjects from "./resProjects.jsx";
import ResEducation from "./resEducation.jsx";
import ResExperience from "./resExperience.jsx";

export default function ResumeContent() {
  return (
    <main className="resume-content">
      <div id="main-content">
        <ResSummary />
        <ResSkills />
        <ResProjects />
        <ResEducation />
        <ResExperience />
      </div>
    </main>
  );
}