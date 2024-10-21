import styled from "styled-components";
import Resume from "../Resume/Resume";
import Header from "../Header/Header";
import { ProfessionalStyle } from "../Themes/professional";

const ResumeContentStyle = styled.div`
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

const ResumeBackground = styled.div`
  background-color: white;
  width: 85%;
`;

const HeaderAlt = styled.div`
  font-family: monospace;
  `;

function ResumeContent() {
  return (
    <ResumeBackground>
      <ResumeContentStyle>
        <ProfessionalStyle>
          <HeaderAlt>
            <Header />
          </HeaderAlt>
          <Resume />
        </ProfessionalStyle>
      </ResumeContentStyle>
    </ResumeBackground>
  );
}

export default ResumeContent;
