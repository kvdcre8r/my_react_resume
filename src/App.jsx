import { Routes, Route } from "react-router-dom";
import Nav from "./Nav.jsx";
import { Home } from "./Modules/Home/Home.jsx";
import { Stylized } from "./Modules/Stylized/stylized.jsx";
import { Classic } from "./Modules/Classic/classic.jsx";
import "./App.css";

function App() {
  return (
    <div id="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Stylized" element={<Stylized />} />
        <Route path="/Classic" element={<Classic />} />
      </Routes>
    </div>
  );
}

export default App;
