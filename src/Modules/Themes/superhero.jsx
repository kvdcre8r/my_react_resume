import styled from "styled-components";
import backgroundImage from "../../assets/spiderweb_background.jpg";
import ContactInfo from "../Header/contactInfo.jsx";
import Name from "../Header/name.jsx";
import MyLinks from "../Header/myLinks.jsx";
import ProfilePix from "../Header/profilePix.jsx";
import ResSummary from "../Resume/resSummary.jsx";
import ResSkills from "../Resume/resSkills.jsx";
import ResProjects from "../Resume/resProjects.jsx";
import ResEducation from "../Resume/resEducation.jsx";
import ResExperience from "../Resume/resExperience.jsx";

// SUPERHERO THEME STYLING (layout at bottom of file)

export const SuperheroStyle = styled.div`
  color: white;
  font-family: josefin-sans;
  border: 2px solid rgb(255, 38, 38);
  background-color: rgba(0, 0, 0, 0);
  border-radius: 5px;
  padding: 1rem 2rem;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-position-y: top;

  header {
    margin: 1em 0em;
    padding: 1em;
    background-color: darkblue;
    border: 2px solid rgb(255, 38, 38);
    border-radius: 5px;

    #name-super {
      text-align: center;
      color: darkblue;
      text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
      font-family: champion;
      font-size: 1.6em;
    }

    #name-standard {
      display: none;
    }
  }

  .superhero-resume {
    background-color: rgb(255, 38, 38);
    border-radius: 5px;
    border: 1px solid rgb(255, 38, 38);
    margin-top: 1em;
    font-size: 1.2em;

    .profile-summary {
      display: flex;
      background-color: darkblue;
      border: 2px solid rgb(255, 38, 38);
      border-radius: 5px;
      color: white;
      text-shadow: none;
      padding: 1em;

      .profile-links {
        .profile-pix {
          #profile-pic,
          #coder-profile-pic {
            display: none;
          }

          #comic-profile-pic {
            width: 9em;
            height: auto;
            padding: 0.5em;
            border: 1px dashed white;
            border-radius: 5px;
          }
        }
      }

      .contacts-summary {
        padding: 0.5em 1em;

        .contact-links {
          display: flex;
          align-items: baseline;

          .contact-info {
            padding-bottom: 1em;
          }

          .my-links {
            .my-links-icons {
              padding-left: 0.5em;
              white-space: nowrap;

              a {
                font-size: 1.5em;
              }

              a:hover {
                color: rgb(255, 38, 38);
              }

              .tooltip .tooltiptext {
                color: white;
                border: 0.1em solid rgb(255, 38, 38);
                background-color: darkblue;
                bottom: 100%;
                margin-bottom: 0.5em;
              }

              .tooltip .tooltiptext::after {
                border-color: rgb(255, 38, 38) transparent transparent
                  transparent;
              }
            }

            .my-links-text {
              display: none;
            }
          }
        }
      }

      .res-summary {
        font-size: 0.8em;
        border-top: 1px dashed white;
        padding: 1em 0em;
      }
    }

    .projects-skills {
      display: flex;

      .res-projects {
        width: 75%;
      }

      .res-skills {
        width: 25%;

        p {
          padding: 1.5em 0em;
        }
      }
    }

    .education-experience {
      display: flex;

      .res-experience {
        width: 70%;
      }

      .res-education {
        width: 30%;
      }
    }

    section {
      background-color: darkblue;
      border: 2px solid rgb(255, 38, 38);
      border-radius: 5px;
      color: white;
      text-shadow: none;
      padding: 1em;

      a {
        padding-left: 0.5em;
        color: inherit;
      }

      h2 {
        font-family: champion;
        color: darkblue;
        text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
        font-size: 2.1em;
        padding-bottom: 0.5em;
      }

      h3 {
        font-size: 1.1em;
        padding-bottom: 0.3em;
      }

      ul {
        padding-top: 0.5em;
        padding-bottom: 2em;
      }

      p,
      li {
        font-size: 1em;
      }
    }
  }

  /* responsive behavior */

  @media screen and (max-width: 800px) {
    font-size: 0.85em;
    padding: 0.5em 1em;

    .superhero-resume {
      .projects-skills {
        display: block;

        .res-projects,
        .res-skills {
          width: 100%;
        }

        .res-skills {
          p {
            padding: 0.5em 0em;
          }
        }
      }

      .education-experience {
        display: block;

        .res-experience,
        .res-education {
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .superhero-resume {
      .profile-summary {
        display: block;

        .profile-links {
          .profile-pix {
            #comic-profile-pic {
              width: 12em;
              height: auto;
            }
          }
        }

        .contacts-summary {
          padding: 0.5em 0em;

          .contact-links {
            display: block;

            .my-links {
              .my-links-icons {
                padding: 0em 0em 1em 0em;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 350px) {
    font-size: 0.75em;

    header {
      #name-super {
        font-size: 1.1em;
      }
    }
  }
`;

// SUPERHERO THEME LAYOUT

function Superhero() {
  return (
    <SuperheroStyle>
      <header>
        <Name />
      </header>
      <div className="superhero-resume">
        <div className="profile-summary">
          <div className="profile-links">
            <ProfilePix />
          </div>
          <div className="contacts-summary">
            <div className="contact-links">
              <ContactInfo />
              <MyLinks />
            </div>
            <ResSummary />
          </div>
        </div>
        <div className="projects-skills">
          <ResSkills />
          <ResProjects />
        </div>
        <div className="education-experience">
          <ResExperience />
          <ResEducation />
        </div>
      </div>
    </SuperheroStyle>
  );
}

export default Superhero;
