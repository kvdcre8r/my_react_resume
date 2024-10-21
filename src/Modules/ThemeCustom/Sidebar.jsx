import styled from "styled-components";

const SidebarStyle = styled.aside`
  width: 15%;
  background-color: #a7a25e;
  padding: 20px 10px 0px 10px;
  border-right: 2px solid darkcyan;
  color: white;
`;

// need to use checkboxes to allow users to customize the resume

function Sidebar() {
  return (
    <SidebarStyle>
      <h3>Options</h3>
    </SidebarStyle>
  );
}

export default Sidebar;
