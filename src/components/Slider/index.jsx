import React, { useState } from "react";
import { data } from "./data";
import "./slider.scss";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {data.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <div className="title">{obj.title}</div>

            <div className="subtitle">{obj.subTitle}</div>
          </div>
        );
      })}

      <div className="container-dots">
        {data.map((_, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
