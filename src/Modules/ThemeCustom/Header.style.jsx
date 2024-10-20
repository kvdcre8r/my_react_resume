import styled from "styled-components";

const HeaderStyle = styled.header`
  background-color: lightsalmon;
  padding: 20px;
  text-align: center;
  font-family: courgette;
  color: darkcyan;
`;

function Header() {
  return (
    <HeaderStyle>
      <h1>My Customizable Resume</h1>
    </HeaderStyle>
  );
}

export default Header;
