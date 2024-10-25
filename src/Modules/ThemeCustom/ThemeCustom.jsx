import React, { useState, useRef } from "react";
import styled from "styled-components";
import CustomResume from "./CustomResume";
import Container from "./Container.style";
import CustomHeader from "./Header.style";

// Styled Components
const MainStyle = styled.div`
  font-family: monospace;
  margin: 10px;
  background-color: lightyellow;
  color: black;
  display: flex;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const SelectorStyle = styled.div`
  font-family: open-sans;
  color: lightcyan;
  background-color: #30599b;
  padding: 10px;
  select {
    color: rgb(62, 92, 126);
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px;
    margin: 5px 0;
    &:focus {
      outline: none;
      border-color: #30599b;
    }
  }
`;

const Option = styled.option``;

const SmallOption = styled(Option)`
  font-size: 8px;
`;

const MediumOption = styled(Option)`
  font-size: 12px;
`;

const LargeOption = styled(Option)`
  font-size: 16px;
`;

const PinkOption = styled(Option)`
  color: black;
  background-color: pink;
`;

const GoldOption = styled(Option)`
  color: black;
  background-color: gold;
`;

const CyanOption = styled(Option)`
  color: black;
  background-color: cyan;
`;

const NavyOption = styled(Option)`
  color: white;
  background-color: navy;
`;

const PurpleOption = styled(Option)`
  color: white;
  background-color: purple;
`;

const GreenOption = styled(Option)`
  color: white;
  background-color: darkgreen;
`;

const BlackOption = styled(Option)`
  color: white;
  background-color: black;
`;

const WhiteOption = styled(Option)`
  color: black;
  background-color: white;
`;

const SpyAgencyOption = styled(Option)`
  font-family: "spyagency";
  font-size: 0.8em;
`;

const ChampionOption = styled(Option)`
  font-family: "champion";
`;

const MonospaceOption = styled(Option)`
  font-family: monospace;
`;

const OpenSansOption = styled(Option)`
  font-family: "open-sans";
`;

const CourgetteOption = styled(Option)`
  font-family: "courgette";
`;

const JosefinSansOption = styled(Option)`
  font-family: "josefin-sans";
`;

// Components
const TargetComponent = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <CustomResume {...props} />
    </div>
  );
});

const Selectors = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [fontColor, setFontColor] = useState("");
  const [fontFamily, setFontFamily] = useState("");
  const targetRef = useRef(null);

  const actionOne = () => {
    if (targetRef.current) {
      targetRef.current.style.fontSize = "8px";
    }
  };

  const actionTwo = () => {
    if (targetRef.current) {
      targetRef.current.style.fontSize = "12px";
    }
  };

  const actionThree = () => {
    if (targetRef.current) {
      targetRef.current.style.fontSize = "16px";
    }
  };

  const handleFontSizeChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    switch (value) {
      case "option1":
        actionOne();
        break;
      case "option2":
        actionTwo();
        break;
      case "option3":
        actionThree();
        break;
      default:
        break;
    }
  };

  const changeColor = (color) => {
    if (targetRef.current) {
      targetRef.current.style.backgroundColor = color;
    }
  };

  const handleBgColorChange = (event) => {
    const color = event.target.value;
    setBgColor(color);
    changeColor(color);
  };

  const changeMyFontColor = (color) => {
    if (targetRef.current) {
      targetRef.current.style.color = color;
    }
  };

  const handleFontColorChange = (event) => {
    const color = event.target.value;
    setFontColor(color);
    changeMyFontColor(color);
  };

  const handleFontFamilyChange = (event) => {
    const font = event.target.value;
    setFontFamily(font);
    if (targetRef.current) {
      targetRef.current.style.fontFamily = font;
    }
  };

  return (
    <MainStyle>
      <SelectorStyle>
        <h3>Font:</h3>
        <select value={fontFamily} onChange={handleFontFamilyChange}>
          <option value="">Select a font</option>
          <SpyAgencyOption value="spyagency">Spy Agency</SpyAgencyOption>
          <ChampionOption value="champion">Champion</ChampionOption>
          <MonospaceOption value="monospace">Monospace</MonospaceOption>
          <OpenSansOption value="open-sans">Open Sans</OpenSansOption>
          <CourgetteOption value="courgette">Courgette</CourgetteOption>
          <JosefinSansOption value="josefin-sans">
            Josefin Sans
          </JosefinSansOption>
        </select>

        <h3>Font Size:</h3>
        <select value={selectedValue} onChange={handleFontSizeChange}>
          <option value="">Select a size</option>
          <SmallOption value="option1">small</SmallOption>
          <MediumOption value="option2">medium</MediumOption>
          <LargeOption value="option3">large</LargeOption>
        </select>

        <h3>Text Color:</h3>
        <select value={fontColor} onChange={handleFontColorChange}>
          <option value="">Select a color</option>
          <PinkOption value="Pink">Pink</PinkOption>
          <GoldOption value="gold">Gold</GoldOption>
          <CyanOption value="cyan">Cyan</CyanOption>
          <NavyOption value="navy">Navy</NavyOption>
          <PurpleOption value="purple">Purple</PurpleOption>
          <GreenOption value="darkgreen">Green</GreenOption>
          <BlackOption value="black">Black</BlackOption>
          <WhiteOption value="white">White</WhiteOption>
        </select>

        <h3>Background Color:</h3>
        <select value={bgColor} onChange={handleBgColorChange}>
          <option value="">Select a color</option>
          <PinkOption value="Pink">Pink</PinkOption>
          <GoldOption value="gold">Gold</GoldOption>
          <CyanOption value="cyan">Cyan</CyanOption>
          <NavyOption value="navy">Navy</NavyOption>
          <PurpleOption value="purple">Purple</PurpleOption>
          <GreenOption value="darkgreen">Green</GreenOption>
          <BlackOption value="black">Black</BlackOption>
          <WhiteOption value="white">White</WhiteOption>
        </select>
      </SelectorStyle>
      <TargetComponent ref={targetRef} />
    </MainStyle>
  );
};

function Custom() {
  return (
    <Container>
      <CustomHeader />
      <Selectors />
    </Container>
  );
}

export default Custom;
