import ResSummary from "./resSummary.jsx";
import ResSkills from "./resSkills.jsx";
import ResProjects from "./resProjects.jsx";
import ResEducation from "./resEducation.jsx";
import ResExperience from "./resExperience.jsx";

// RESUME COMPONENTS MODULE
// see each theme module's CSS file for styling

export default function ResumeContent() {
  return (
    <main className="resume-content">
        <ResSummary />
      <div id="main-content">
        <ResSkills />
        <ResProjects />
        <ResEducation />
        <ResExperience />
      </div>
    </main>
  );
}