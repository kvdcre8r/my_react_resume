// import { Routes, Route } from "react-router-dom";

export function HomeLeft() {
  return (
    <section id="home-left">
      <h2 id="greeting">Welcome to my Live Resume!</h2>
      <article>
        <h2 id="desc">
          I am thrilled to present to you my interactive resume webpage,
          meticulously crafted to highlight my journey and skills as an aspiring
          web developer. This platform is designed to provide you with an
          engaging and comprehensive view of my professional background,
          creativity, and technical expertise. I hope you find this experience
          both informative and enjoyable as you explore my work.
        </h2>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Classic" element={<Classic />} />
          <Route path="/Stylized" element={<Stylized />} />
          <Route path="/Superhero" element={<Superhero />} />
        </Routes> */}
      </article>
      <article>
        <h2>Resume Options:</h2>
      </article>
    </section>
  );
}
