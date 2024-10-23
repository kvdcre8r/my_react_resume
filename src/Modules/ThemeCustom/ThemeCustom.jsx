import React, { useState, useRef } from "react";
import styled from "styled-components";
import CustomResume from "./CustomResume";

const TargetComponent = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <CustomResume />
    </div>
  );
});

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
  }
`;

const Selectors = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [bgColor, setBgColor] = useState(""); // State for the new dropdown
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

  const changeColor = (color) => {
    if (targetRef.current) {
      targetRef.current.style.backgroundColor = color;
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

  const handleBgColorChange = (event) => {
    const color = event.target.value;
    setBgColor(color);
    changeColor(color);
  };

  return (
    <MainStyle>
      <SelectorStyle>
        <h3>Font Size:</h3>
        <select value={selectedValue} onChange={handleFontSizeChange}>
          <option value="">Select a size</option>
          <option value="option1">small</option>
          <option value="option2">medium</option>
          <option value="option3">large</option>
        </select>

        <h3>Background Color:</h3>
        <select value={bgColor} onChange={handleBgColorChange}>
          <option value="">Select a color</option>
          <option value="Pink">Pink</option>
          <option value="gold">Gold</option>
          <option value="cyan">Cyan</option>
        </select>
      </SelectorStyle>
      <TargetComponent ref={targetRef} />
    </MainStyle>
  );
};

function ThemeCustom() {
  return (
    <div>
      <Selectors />
    </div>
  );
}

export default ThemeCustom;
