import React, { useEffect, useState } from "react";
import carouselBackground from "../Images/carouselBackground.jpg";
import "./InitialCarousel.css";

const InitialCarousel = (props) => {
  return (
    <div
      className="initial-carousel"
      style={{
        ...(props.display === false && {
          display: "none",
          height: 0,
          width: "0",
        }),
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
        }}
      >
        {/* Here We Will Add Whatever you want */}
      </div>
    </div>
  );
};

export default InitialCarousel;
