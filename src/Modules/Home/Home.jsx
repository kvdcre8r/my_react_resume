import Header from "../../components/Resume/header.jsx";
import "./home.css";

export function Home() {
  return (
    <main className="home">
      <div id="home-content">
        <Header />
        <section>
          <div id="intro">
            <h2>
              <u>Welcome to My Live Resume!</u>
            </h2>
            <h2 id="desc">
              <em>
                An interactive experience showcasing the skills, talents, and
                creativity of an aspiring web developer.
              </em>
            </h2>
          </div>
          <div id="features">
            <h2>Features</h2>
            <article>
              <ul>
                <li>Interactive User Interface</li>
                <li></li>
                <li></li>
              </ul>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
