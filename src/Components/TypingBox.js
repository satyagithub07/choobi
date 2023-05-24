import React, { useState, useEffect } from "react";

const TypingBox = ({ currentKey, onKeyPress }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleKeyPress = (event) => {
    const { key } = event;
    onKeyPress(key);
    setInput((prevInput) => prevInput + key);
  };

  return (
    <div>
      <div>Current Key: {currentKey}</div>
      <textarea value={input} onChange={() => {}} />
    </div>
  );
};

export default TypingBox;
