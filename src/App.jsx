import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import { Home } from "./Modules/Home/Home.jsx";
import { Classic } from "./Modules/Classic/Classic.jsx";
import "./App.css";

function App() {
  return (
    <div id="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Classic" element={<Classic />} />
      </Routes>
    </div>
  );
}

export default App;
