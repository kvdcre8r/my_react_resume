import { Routes, Route } from "react-router-dom";
import Nav from "./Modules/Nav/Nav.jsx";
import { Home } from "./Modules/Home/Home.jsx";
import { Professional } from "./Modules/ThemeProfessional/professional.jsx";
import { Mainframe } from "./Modules/ThemeMainframe/mainframe.jsx";
import { Superhero } from "./Modules/ThemeSuperhero/superhero.jsx";
import "./App.css";

// APP ROUTES

function App() {
  return (
    <div id="container">
      <Nav />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/Professional" element={<Professional />} />
        <Route path="/Mainframe" element={<Mainframe />} />
        <Route path="/Superhero" element={<Superhero />} />
      </Routes>
    </div>
  );
}

export default App;
