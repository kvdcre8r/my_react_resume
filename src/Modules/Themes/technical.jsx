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

// Technical THEME STYLING (layout at bottom of file)

export const TechnicalStyle = styled.div`
  font-family: josefin-sans;
  font-size: 0.8rem;
  border: 0.2em solid #2f42c2;
  border-radius: 0.5em;
  background: linear-gradient(
    to left,
    rgb(152, 152, 152),
    rgb(225, 225, 225),
    rgb(152, 152, 152)
  );

  header {
    padding: 2em 2em 0em 2em;
    display: flex;
    flex-direction: column;
    align-items: center;

    #profile-pic {
      border: 0.1em solid #2f42c2;
      border-radius: 50%;
      width: 18em;
      height: max-content;
      background-color: #6d6d6d;
      margin-bottom: 1em;
    }

    #coder-profile-pic,
    #comic-profile-pic {
      display: none;
    }

    .text-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #2f42c2;
      text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
      text-align: center;

      .my-title {
        display: flex;
        flex-direction: column;
        align-items: center;

        .name {
          font-size: 1.8em;

          #name-super {
            display: none;
          }
        }

        .job-title {
          font-size: 1.5em;
          padding: 2px;
          color: rgb(255, 89, 0);
        }
      }

      .contact-links {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1em 0em;

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
            color: rgb(255, 89, 0);
          }
        }
      }
    }
  }

  .technical-resume {
    padding: 2em;

    .res-summary {
      color: rgb(255, 89, 0);
      background-color: #dedede;
      text-shadow: none;
      border: 0.1em solid #2f42c2;
      border-radius: 2em;
      line-height: 1.7em;
      padding: 2em;
      margin-bottom: 3em;
      text-align: center;
    }

    section {
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        color: black;
        text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
        font-size: 1.7em;
        padding-bottom: 0.5em;
      }

      article {
        color: rgb(255, 89, 0);
        background-color: #dedede;
        text-shadow: none;
        border: 0.1em solid #2f42c2;
        border-radius: 2em;
        padding: 2em;
        margin-bottom: 2em;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #2f42c2;
        text-shadow: none;
        text-align: center;

        h3 {
          color: rgb(255, 89, 0);
          font-size: 1.6em;
          padding-bottom: 0.2em;
          a {
            color: rgb(255, 89, 0);
            padding-left: 1em;
          }
        }

        p {
          font-size: 1.5em;
          font-weight: 600;
          padding-bottom: 0.3em;
        }

        ul {
          padding-bottom: 1em;
          display: flex;
          flex-direction: column;
          align-items: center;
          li {
            list-style: none;
            padding-bottom: 0.3em;
            position: relative;
            right: 1em;
            font-size: 1.5em;
          }
        }
      }
    }
  }

  /* responsive behavior */

  @media screen and (max-width: 620px) {
    header {
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

    .technical-resume {
      font-size: 0.8em;
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

      #profile-pic {
        width: 15em;
      }

      .text-content {
        font-size: 0.75em;
      }
    }
  }
`;

// Technical THEME LAYOUT

function Technical() {
  return (
    <TechnicalStyle>
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
      <div className="technical-resume">
        <ResSummary />
        <ResSkills />
        <ResProjects />
        <ResEducation />
        <ResExperience />
      </div>
    </TechnicalStyle>
  );
}

export default Technical;
