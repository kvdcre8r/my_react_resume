import profilePic from "../../assets/profilePic.png";
import comicProfilePic from "../../assets/comicProfilePic.png";
import coderProfilePic from "../../assets/coderProfilePic.jpg";

export default function Header() {
  return (
    <header>
      <img id="profile-pic" src={profilePic} alt="my profile pic" />
      <img id="comic-profile-pic" src={comicProfilePic} alt="my comic profile pic" />
      <img id="coder-profile-pic" src={coderProfilePic} alt="my coder profile pic" />
      <div id="text-content">
        <span id="name">
          <h1>Kevin VanDonkelaar</h1>
          <h2>Web Developer</h2>
        </span>
        <span id="subscript">
          <p>
            (864) 640-9241 | kvdcre8r@gmail.com | St. Louis, MO |
            linkedin.com/in/kevinvandonkelaar
            <br />
            kevin-vandonkelaar-personal-website.github.io/kvdcre8r |
            github.com/kvdcre8r
          </p>
        </span>
      </div>
    </header>
  );
}
