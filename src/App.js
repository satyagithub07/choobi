import React, { useState, useEffect } from "react";
import TypingBox from "./Components/TypingBox";
import Keyboard from "./Components/Keyboard";
import Stats from "./Components/Stats";
import "./App.css";

const App = () => {
  const [currentKey, setCurrentKey] = useState("");
  const [nextKeys, setNextKeys] = useState("");
  const [keyCount, setKeyCount] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  useEffect(() => {
    generateNextKeys();
  }, []);

  const generateNextKeys = () => {
    // Logic to generate the next keys the user needs to type
    const keys = "asdfjkl;";
    const nextKey = keys[Math.floor(Math.random() * keys.length)];
    setCurrentKey(nextKey);
    setNextKeys(keys);
  };

  const handleKeyPress = (key) => {
    setKeyCount((prevCount) => prevCount + 1);
    checkAccuracy(key);
  };

  const checkAccuracy = (key) => {
    if (key !== currentKey) {
      setAccuracy((prevAccuracy) =>
        ((prevAccuracy * (keyCount - 1)) / keyCount).toFixed(2)
      );
    }
  };

  return (
    <div>
      <TypingBox currentKey={currentKey} onKeyPress={handleKeyPress} />
      <Keyboard nextKeys={nextKeys} />
      <Stats keyCount={keyCount} accuracy={accuracy} />
    </div>
  );
};

export default App;
