import React, { useState, useRef } from "react";
import styled from "styled-components";
import ResumeContent from "./ResumeContent";

const TargetComponent = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <ResumeContent />
    </div>
  );
});

const SelectorStyle = styled.div`
  color: lightcyan;
  padding: 10px;
`;

const Selectors = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [bgColor, setBgColor] = useState(""); // State for the new dropdown
  const targetRef = useRef(null);

  const actionOne = () => {
    if (targetRef.current) {
      targetRef.current.style.fontSize = "12px";
    }
  };

  const actionTwo = () => {
    if (targetRef.current) {
      targetRef.current.style.fontSize = "16px";
    }
  };

  const actionThree = () => {
    if (targetRef.current) {
      targetRef.current.style.fontSize = "24px";
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
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      
      <TargetComponent ref={targetRef} />
    </SelectorStyle>
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
