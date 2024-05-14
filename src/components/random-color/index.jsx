// hex # followed by 6 random numbers ex: #459220
// RGB (0-256,0-256,0-256) ex: rgb(25,45,50)

import { useEffect, useState } from "react";
import "./style.css";
import { Buttons } from "@testing-library/user-event/dist/cjs/system/pointer/buttons.js";
export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${b},${g})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleCreateRandomRgbColor();
    } else {
      handleCreateRandomHexColor();
    }
  }, [typeOfColor]);

  return (
    // <div style={{
    //     width: '100vw',
    //     height: '100vh',
    //     background: color,
    // }}>
    <div className="container" style={{ "--background-color": color }}>
      <div className="buttons">
        <button onClick={() => setTypeOfColor("hex")}>Create HEX color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB color</button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
        {/* <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                fontSize: '60px',
                marginTop: '50px',
                flexDirection : 'column',
                gap: '20px'
            }}> */}
        <div className="display">
          <h3>{typeOfColor === "rgb" ? "RGB Color" : "Hex Color"}</h3>
          <h1>{color}</h1>
        </div>
      </div>
    </div>
  );
}
