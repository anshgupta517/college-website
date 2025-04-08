import { useState, useEffect } from "react";
import "../styles/Tour.css";

import Atm from "../assets/campus/atm.png";
import Auditorium from "../assets/campus/auditorium.png";
import Library from "../assets/campus/library.png";
import Sports from "../assets/campus/sports.png";
import Open from "../assets/campus/open.png";

const PictureCarousel = () => {
  const pictures = [
    { src: Atm, caption: "ATM" },
    { src: Auditorium, caption: "Auditorium" },
    { src: Library, caption: "Library" },
    { src: Sports, caption: "Sports Facilities" },
    { src: Open, caption: "Open Auditorium" },
  ];
  const [currentPicture, setCurrentPicture] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPicture((prev) => (prev + 1) % pictures.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [pictures.length]);

  return (
    <div className="picture-carousel-window">
      <div className="window-header">
        <div className="window-controls">
          <span className="control close"></span>
          <span className="control minimize"></span>
          <span className="control maximize"></span>
        </div>
        <div className="window-title">Campus Tour</div>
      </div>
      <div className="window-content">
        <img
          src={pictures[currentPicture].src}
          alt={pictures[currentPicture].caption}
          className="carousel-image"
        />
        <div className="picture-caption">
          {pictures[currentPicture].caption}
        </div>
      </div>
    </div>
  );
};

export default PictureCarousel;
