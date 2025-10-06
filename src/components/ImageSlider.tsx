import { useState } from "react";
import "../styles/global.css";

// MUI Icons
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const videoSources = [
  "/videos/paxdesign.mp4",
  "/videos/patio.mp4",
  "/videos/paxsys1.mp4",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videoSources.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videoSources.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="video-slider-section">
      <div className="video-slider-wrapper">
        <button className="nav-button left" onClick={goToPrev}>
          <ChevronLeftIcon style={{ fontSize: 40, color: "#008080" }} />
        </button>

        <video
          className="slider-video"
          key={videoSources[currentIndex]} // forces reload when switching
          src={videoSources[currentIndex]}
          autoPlay
          muted
          loop
          playsInline
        />

        <button className="nav-button right" onClick={goToNext}>
          <ChevronRightIcon style={{ fontSize: 40, color: "#008080" }} />
        </button>
      </div>
    </section>
  );
};

export default ImageSlider;
