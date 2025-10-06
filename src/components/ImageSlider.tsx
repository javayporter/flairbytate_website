import { useState } from "react";
import "../styles/global.css"; // assuming all your CSS is in here

// import sliderVid from "/Users/javayporter/react_flairbytate/public/videos/paxsys1.mp4";
// import sliderVid1 from "/Users/javayporter/react_flairbytate/public/videos/paxsys2.mp4";

const videoSources = ["public/videos/paxsys1.mp4", "public/videos/paxsys2.mp4"];

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
          &#8592;
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
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default ImageSlider;
