import React from "react";
import styled from "styled-components";
import { Sidebar } from "./Sidebar.style";
import { MainContent } from "./MainContent.style";

export const MainStyle = styled.div`
  display: flex;
  border-top: 2px solid darkcyan;
  border-bottom: 2px solid darkcyan;
  h2 {
    color: darkcyan;
  }
`;

function MainLayout() {
  return (
      <MainStyle>
        <MainContent>
          <h2>Main Title</h2>
          <p>content</p>
        </MainContent>
        <Sidebar>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
          </ul>
        </Sidebar>
      </MainStyle>
  );
}

export default MainLayout;
