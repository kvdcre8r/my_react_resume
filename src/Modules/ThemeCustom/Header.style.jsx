import styled from "styled-components";

const HeaderStyle = styled.header`
  background-color: #d2eaea;
  padding: 20px;
  text-align: center;
  font-family: courgette;
  color: #30599b;
  margin: 10px;
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
