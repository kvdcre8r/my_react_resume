import profilePic from "../../assets/profilePic.png";
import comicProfilePic from "../../assets/comicProfilePic.png";
import coderProfilePic from "../../assets/coderProfilePic.jpg";

export default function ProfilePix() {
  return (
    <div className="profile-pix">
      <img id="profile-pic" src={profilePic} alt="my profile pic" />
      <img
        id="comic-profile-pic"
        src={comicProfilePic}
        alt="my comic profile pic"
      />
      <img
        id="coder-profile-pic"
        src={coderProfilePic}
        alt="my coder profile pic"
      />
    </div>
  );
}