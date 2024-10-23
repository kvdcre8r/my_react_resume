import styled from "styled-components";

const HeaderStyle = styled.header`
  background-color: #30599b;
  padding: 20px;
  text-align: center;
  font-family: courgette;
  color: white;
  margin: 10px;
  border: 2px solid white;
  border-radius: 3px;
`;

function CustomHeader() {
  return (
    <HeaderStyle>
      <h1>My Customizable Resume</h1>
    </HeaderStyle>
  );
}

export default CustomHeader;
