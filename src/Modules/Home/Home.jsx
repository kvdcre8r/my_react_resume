import Header from "../../components/Header/Header.jsx";
import { HomeLeft } from "./homeLeft.jsx";
import { HomeRight } from "./homeRight.jsx";
import "./home.css";

export function Home() {
  return (
    <main className="home">
      <Header />
      <div id="home-content">
          <HomeLeft />
          <HomeRight />
      </div>
    </main>
  );
}
