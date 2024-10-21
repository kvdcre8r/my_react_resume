// UNDER CONSTRUCTION

import React from "react";
import Container from "./Container.style";
import CustomHeader from "./Header.style";
import MainStyle from "./MainContent.style";
import ResumeContent from "./ResumeContent";
import Sidebar from "./Sidebar";

function Custom() {
  return (
    <Container>
      <CustomHeader />
      <MainStyle>
        <Sidebar />
        <ResumeContent />
      </MainStyle>
    </Container>
  );
}

export default Custom;

// available imported fonts:
// - "courgette"
// - "spy-agency"
// - "open-sans"
// - "champion"
// - "josefin-sans"
