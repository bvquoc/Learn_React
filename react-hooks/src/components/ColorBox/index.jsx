import React, { useState } from "react";
import "./styles.scss";

function ColorBox() {
  const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"];
  const [color, setColor] = useState(
    () => localStorage.getItem("color-box") || COLOR_LIST[0]
  );

  function handleOnClick() {
    const SZ = COLOR_LIST.length;
    let newColor = color;
    while (newColor === color) {
      const idx = Math.floor(Math.random() * SZ);
      newColor = COLOR_LIST[idx];
    }
    localStorage.setItem("color-box", newColor);
    setColor(newColor);
  }

  return (
    <div
      className="color-box"
      style={{
        backgroundColor: color,
      }}
      onClick={handleOnClick}
    ></div>
  );
}

export default ColorBox;
