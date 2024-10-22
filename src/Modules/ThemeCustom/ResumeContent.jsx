import styled from "styled-components";
import Professional from "../Themes/professional";

export const ResumeContentStyle = styled.div`
  border: 1px solid darkcyan;
  border-radius: 3px;
  padding: 20px;
  margin-top: 10px;
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
