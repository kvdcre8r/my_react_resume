import styled from "styled-components";
import Professional from "../Themes/professional";

export const ResumeContentStyle = styled.div`
  background-color: beige;
  border: 1px solid darkcyan;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
/* alternate styling */
  font-size: 0.7em;
  font-family: monospace;
  .resume-content {
    padding-left: 1.5rem;
  }
`;



function ResumeContent() {
  return (
      <ResumeContentStyle>
        <Professional />
      </ResumeContentStyle>
  );
}

export default ResumeContent;
