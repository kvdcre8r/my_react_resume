// import { Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import TechSkills from "./TechSkills.jsx";
import TechProjects from "./TechProjects.jsx";
import TechEducation from "./TechEducation.jsx";
import Experience from "./Experience.jsx";
import "./App.css";

function App() {
  return (
    <div id="container">
      <Header />
      <TechSkills />
      <TechProjects />
      <TechEducation />
      <Experience />
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
    </div>
  );

}

export default App;
