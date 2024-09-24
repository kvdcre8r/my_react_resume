import ProfilePix from "./profilePix.jsx";
import "./header.css";

export default function Header() {
  return (
    <header>
      <ProfilePix />
      <div id="text-content">
        <div id="name">
          <h1>Kevin VanDonkelaar</h1>
          <h2>Web Developer</h2>
        </div>
        <div id="subscript">
          (864) 640-9241 | kvdcre8r@gmail.com | St. Louis, MO |
          <br />
          <a
            href="https://www.linkedin.com/in/kevinvandonkelaar"
            className="fa fa-linkedin"
          ></a>
          <a href="https://github.com/kvdcre8r" className="fa fa-github"></a>
          <a href="https://kevin-vandonkelaar-personal-website.github.io/kvdcre8r/">
            kevin-vandonkelaar-personal-website.github.io/kvdcre8r
          </a>
        </div>
      </div>
    </header>
  );
}
