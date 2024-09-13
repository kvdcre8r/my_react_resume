import Header from "../../components/Header.jsx";
import TechSkills from "../../components/TechSkills.jsx";
import TechProjects from "../../components/TechProjects.jsx";
import TechEducation from "../../components/TechEducation.jsx";
import Experience from "../../components/Experience.jsx";
import "./home.css";

export function Home() {
  return (
    <main className="home">
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