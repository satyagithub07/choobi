import React from "react";
const Stats = ({ keyCount, accuracy }) => {
  return (
    <div>
      <div>Keys Pressed: {keyCount}</div>
      <div>Accuracy: {accuracy}%</div>
    </div>
  );
};

export default Stats;
