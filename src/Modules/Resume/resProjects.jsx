// RESUME PROJECTS COMPONENT
// see each theme module's CSS file for styling

export default function ResProjects() {
  return (
    <section className="res-projects">
      <h2>Technical Projects</h2>
      <article>
        <h3>
          PRESTO RESUME BUILDER | Current Project |
          <a href="https://kvdeveloper-resume-builder.netlify.app">
            Website Link
          </a>
          <a href="https://github.com/kvdcre8r/my-resume-builder">
            Github Repo
          </a>
        </h3>
        <ul>
          <li>
            Resume builder application that allows users to create and customize
            their own resumes
          </li>
          <li>
            Receives user input and dynamically generates a resume based on the
            information provided
          </li>
          <li>
            Features the ability to save the user’s finished resume design in
            PDF format
          </li>
        </ul>
        <h3>
          MY LIVE RESUME | Oct '24 |
          <a href="https://kevin-vandonkelaar-live-resume.netlify.app/">
            Website Link
          </a>
          <a href="https://www.github.com/kvdcre8r/my_react_resume">
            Github Repo
          </a>
        </h3>
        <ul>
          <li>
            Interactive resume webpage constructed with HTML, CSS, JavaScript,
            and React
          </li>
          <li>
            Features dynamic content, responsive behavior, modular components,
            reusable code, and more
          </li>
        </ul>{" "}
        <h3>
          THE SUPER-DEVELOPER | Sept '23 |
          <a href="https://kevin-vandonkelaar-personal-website.github.io/kvdcre8r/">
            Website Link
          </a>
          <a href="https://www.github.com/Kevin-VanDonkelaar-Personal-Website/kvdcre8r">
            Github Repo
          </a>
        </h3>
        <ul>
          <li>
            Personal brand website featuring themed sections presenting bio,
            portfolio, and contact information
          </li>
          <li>
            Unique superhero design produces easy-to-follow, functional, and
            engaging user experience
          </li>
          <li>
            Implements various CSS techniques including flexbox, floating
            backgrounds, and responsive behaviors
          </li>
        </ul>
      </article>
    </section>
  );
}
