import Header from "../../components/header.jsx";
import "./home.css";

export function Home() {
  return (
    <main className="home">
      <div id="main-content">
        <Header />
        <section>
          <article>
            <h2>
              Welcome to the Live Resume of Web Developer Kevin VanDonkelaar! An
              interactive experience designed to showcase the talents and
              creativity of this aspiring Super-Devloper!
            </h2>
          </article>
        </section>
      </div>
    </main>
  );
}
