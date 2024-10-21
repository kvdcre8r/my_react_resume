import React, { useState, useRef } from "react";
import ResumeContent from "./ResumeContent";

const TargetComponent = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <ResumeContent />
    </div>
  );
});

const FontSizeSelector = () => {
  const [selectedValue, setSelectedValue] = useState("");
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

  const handleChange = (event) => {
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

  return (
    <div>
      <h3>Font Size:</h3>
      <select value={selectedValue} onChange={handleChange}>
        <option value="">Select an option</option>
        <option value="option1">small</option>
        <option value="option2">medium</option>
        <option value="option3">large</option>
      </select>
      <TargetComponent ref={targetRef} />
    </div>
  );
};

export default FontSizeSelector;
