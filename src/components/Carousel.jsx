import React, { useState } from "react";
import "../components/Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="carousel-container">
      <button className="prev-btn" onClick={handlePrev}>
        <ArrowBackIosIcon />
      </button>
      <div className="image-container">
        <img
          className="carousel-image"
          src={images[currentImageIndex].img}
          alt={images[currentImageIndex].title}
        />
        <div className="image-text title">
          <h2>{images[currentImageIndex].title}</h2>
        </div>
        <div className="image-text subtitle">
          <p>{images[currentImageIndex].subtitle}</p>
        </div>
      </div>
      <button className="next-btn" onClick={handleNext}>
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};

export default Carousel;
