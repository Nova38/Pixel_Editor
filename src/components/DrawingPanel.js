import React, { useRef } from "react";
import "../styles/drawingPanel.scss";
import Row from "./Row";

export default function DrawingPanel(props) {
  const { width, height, selectedColor } = props;

  const panelRef = useRef();

  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(
      <Row key={i} row_num={i} width={width} selectedColor={selectedColor} />
    );
  }
  function logMe(params) {
    console.log(panelRef.current.childNodes);
    panelRef.current.childNodes.forEach((row) => {
      console.log(row);

      row.childNodes.forEach((pixel) => {
        console.log(pixel.style.backgroundColor);
      });
    });
  }
  return (
    <div id="drawingPanel">
      <div id="pixels" ref={panelRef}>
        {rows}
      </div>
      <button onClick={() => logMe()} className="button">
        Export as PNG
      </button>
    </div>
  );
}
