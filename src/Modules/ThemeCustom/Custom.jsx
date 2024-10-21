// UNDER CONSTRUCTION

import React from "react";
import Container from "./Container.style";
import CustomHeader from "./Header.style";
import MainStyle from "./MainContent.style";
import FontSizeSelector from "./FontSize.selector";

function Custom() {
  return (
    <Container>
      <CustomHeader />
      <MainStyle>
        <FontSizeSelector />
      </MainStyle>
    </Container>
  );
}

export default Custom;

// available imported fonts:
// - "courgette"
// - "spyagency"
// - "open-sans"
// - "champion"
// - "josefin-sans"
