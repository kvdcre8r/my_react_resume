import styled from "styled-components";
import ContactInfo from "../Header/contactInfo.jsx";
import JobTitle from "../Header/jobTitle.jsx";
import MyLinks from "../Header/myLinks.jsx";
import Name from "../Header/name.jsx";
import ProfilePix from "../Header/profilePix.jsx";
import ResEducation from "../Resume/resEducation.jsx";
import ResExperience from "../Resume/resExperience.jsx";
import ResProjects from "../Resume/resProjects.jsx";
import ResSkills from "../Resume/resSkills.jsx";
import ResSummary from "../Resume/resSummary.jsx";

// MAINFRAME THEME STYLING (layout at bottom of file)

export const MainframeStyle = styled.div`
  font-family: monospace;
  font-size: 0.8rem;
  border: 0.2em solid greenyellow;
  border-radius: 0.5em;
  background: linear-gradient(
    0.5turn,
    rgb(9, 9, 9),
    rgb(42, 42, 42),
    rgb(9, 9, 9)
  );

  header {
    padding: 2em 2em 0em 2em;
    display: flex;

    #coder-profile-pic {
      width: 8em;
      height: max-content;
    }

    #profile-pic,
    #comic-profile-pic {
      display: none;
    }

    .text-content {
      padding-left: 1em;

      .my-title {
        font-family: spyagency;
        color: black;
        text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;

        .name {
          font-size: 1.8em;

          #name-super {
            display: none;
          }
        }

        .job-title {
          font-size: 1.5em;
          padding: 2px;
        }
      }

      .contact-links {
        font-family: monospace;
        color: greenyellow;
        text-shadow: none;
        padding: 1em;

        .contact-info {
          font-size: 1.5em;
        }

        .my-links-icons {
          display: none;
        }

        .my-links-text {
          font-size: 1.2em;
          padding: 1em 0em;
          display: flex;

          a {
            font-size: 1.4em;
            color: inherit;
            padding-right: 0.6em;
          }

          a:hover {
            color: white;
          }
        }
      }
    }
  }

  .mainframe-resume {
    padding: 2em;

    .res-summary {
      font-family: monospace;
      color: rgb(255, 89, 0);
      text-shadow: none;
      border-top: 2px dotted white;
      border-bottom: 2px dotted white;
      padding: 1em 0em;
      margin-bottom: 3em;
    }

    .res-skills {
      padding-bottom: 1em;
    }

    section {
      padding-left: 1em;

      h2 {
        font-family: spyagency;
        color: black;
        text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
        font-size: 1.7em;
        padding-bottom: 0.5em;
      }

      article {
        font-family: monospace;
        color: greenyellow;
        text-shadow: none;
        padding-bottom: 1em;

        h3 {
          color: rgb(255, 89, 0);
          font-size: 1.6em;
          padding-bottom: 0em;

          a {
            color: rgb(255, 89, 0);
            padding-left: 1em;
          }
        }

        p {
          padding-bottom: 0.1em;
          font-size: 1.5em;
          color: white;
          padding-left: 1em;
        }

        li {
          padding-bottom: 0.1em;
          font-size: 1.5em;
        }
      }
    }
  }

  /* responsive behavior */

  @media screen and (max-width: 620px) {
    header {
      display: block;

      #coder-profile-pic {
        width: 12em;
        height: max-content;
        padding: 1em;
      }
      .text-content {
        .contact-links {
          padding: 1em 0em;
        }
      }
    }
  }

  @media screen and (max-width: 520px) {
    font-size: 0.8em;
    padding: 0.3em;

    header {
      padding: 1em;

      .text-content {
        .my-title {
          font-size: 0.7em;
        }
      }
    }
  }

  @media screen and (max-width: 380px) {
    header {
      .text-content {
        font-size: 0.75em;
      }
    }
  }
`;

// MAINFRAME THEME LAYOUT

function Mainframe() {
  return (
    <MainframeStyle>
      <header>
        <ProfilePix />
        <div className="text-content">
          <div className="my-title">
            <Name />
            <JobTitle />
          </div>
          <div className="contact-links">
            <ContactInfo />
            <MyLinks />
          </div>
        </div>
      </header>
      <div className="mainframe-resume">
        <ResSummary />
        <ResSkills />
        <ResProjects />
        <ResEducation />
        <ResExperience />
      </div>
    </MainframeStyle>
  );
}

export default Mainframe;
