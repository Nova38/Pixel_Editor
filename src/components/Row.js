import React from "react";
import "../styles/row.scss";
import Pixel from "./Pixel";

export default function Row(props) {
  const { width, selectedColor, row_num } = props;

  let pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(
      <Pixel
        key={i}
        row_num={row_num}
        col_num={i}
        selectedColor={selectedColor}
      />
    );
  }

  return (
    <div className="row" id={row_num}>
      {pixels}
    </div>
  );
}
