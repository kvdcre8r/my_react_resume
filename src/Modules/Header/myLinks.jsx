import "./myLinks.css";

// MY LINKS COMPONENT

export default function MyLinks() {
  return (
    <div className="my-links">
      <div className="my-links-icons">
        <a
          href="https://kevin-vandonkelaar-personal-website.github.io/kvdcre8r/"
          className="fa-solid fa-globe tooltip"
        >
          <span className="tooltiptext links">
            My Personal
            <br />
            Website
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/kevinvandonkelaar"
          className="fa fa-linkedin tooltip"
        >
          <span className="tooltiptext links">
            My LinkedIn
            <br />
            Profile
          </span>
        </a>
        <a href="https://github.com/kvdcre8r" className="fa fa-github tooltip">
          <span className="tooltiptext links">
            My GitHub
            <br />
            Profile
          </span>
        </a>
      </div>
      <div className="my-links-text">
        <a href="https://kevin-vandonkelaar-personal-website.github.io/kvdcre8r/">
          Personal Site
        </a>
        <a href="https://www.linkedin.com/in/kevinvandonkelaar">Linkedin</a>
        <a href="https://github.com/kvdcre8r">GitHub</a>
      </div>
    </div>
  );
}
