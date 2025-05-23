import styled from "styled-components";
import Header from "../Header/Header.jsx";
import ResumeContent from "../Resume/Resume.jsx";

export const CustomStyle = styled.div`

  header {
    padding: 2.5em;
    padding-bottom: 0em;
    border-bottom: none;

    #profile-pic,
    #comic-profile-pic,
    #coder-profile-pic {
      display: none;
    }

    .text-content {
      .my-title {
        display: block;
        align-items: baseline;

        .name {
          font-size: 1.5em;
          flex-grow: 1;

          #name-super {
            display: none;
          }
        }
      }

      .my-links-text {
        font-size: 1.1em;
        display: flex;

        a {
          font-size: 1.2em;
          color: inherit;
          padding-right: 0.6em;
        }
      }
      .my-links-icons {
        display: none;
      }
    }
  }

  .resume-content {
    padding: 1rem 2.5rem;

    .res-summary {
      h2 {
        font-size: 1.2em;
        border-bottom: none;
      }
    }
    .special {
      display: none;
    }

    section {
      margin-top: 0.75em;

      h2 {
        border-bottom: 0.1em solid;
      }

      article {
        padding: 1em;
        margin-top: 0.5em;

        a {
          padding-left: 0.5em;
          color: inherit;
        }

        h3 {
          font-size: 1.1em;
          padding-bottom: 0.15em;
        }

        ul {
          padding-top: 0.5em;
          padding-bottom: 1em;
        }

        p,
        ul {
          font-size: 1.1em;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 0.9em;
  }

  @media screen and (max-width: 400px) {
    header,
    .resume-content {
      padding: 1.5em;
    }
    #name-standard {
      font-size: 1.7em;
    }
  }
`;
 
// custom resume component

function CustomResume() {
  return (
    <CustomStyle>
      <Header />
      <ResumeContent />
    </CustomStyle>
  );
}

export default CustomResume;
