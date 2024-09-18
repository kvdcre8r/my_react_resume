import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import { Home } from "./Modules/Home/Home.jsx";
import { Classic } from "./Modules/Classic/classic.jsx";
import { Stylized } from "./Modules/Stylized/stylized.jsx";
import "./App.css";

function App() {
  return (
    <div id="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Classic" element={<Classic />} />
        <Route path="/Stylized" element={<Stylized />} />
      </Routes>
    </div>
  );
}

export default App;
