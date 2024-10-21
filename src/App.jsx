import { Routes, Route } from "react-router-dom";
import Nav from "./Modules/Nav/Nav.jsx";
import { Home } from "./Modules/Home/Home.jsx";
import Professional from "./Modules/Themes/professional.jsx";
import Mainframe from "./Modules/Themes/mainframe.jsx";
import Superhero from "./Modules/Themes/superhero.jsx";
import Custom from "./Modules/ThemeCustom/Custom.jsx";
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
        <Route path="/Custom" element={<Custom />} />
      </Routes>
    </div>
  );
}

export default App;
