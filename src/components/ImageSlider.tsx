import React, { useState, useRef } from "react";
import "../styles/global.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Types
interface ImageSliderProps {
  videoSources?: string[];
  swipeThreshold?: number;
  iconColor?: string;
  iconSize?: number;
  showSwipeHint?: boolean;
}

// Defaults
const DEFAULT_VIDEO_SOURCES = [
  "/videos/paxdesign.mp4",
  "/videos/patio.mp4",
  "/videos/paxsys1.mp4",
  "/videos/bathroom.mp4",
  "/videos/office.mp4",
];

const DEFAULT_SWIPE_THRESHOLD = 50;
const DEFAULT_ICON_COLOR = "#008080";
const DEFAULT_ICON_SIZE = 40;

const ImageSlider: React.FC<ImageSliderProps> = ({
  videoSources = DEFAULT_VIDEO_SOURCES,
  swipeThreshold = DEFAULT_SWIPE_THRESHOLD,
  iconColor = DEFAULT_ICON_COLOR,
  iconSize = DEFAULT_ICON_SIZE,
  showSwipeHint = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === videoSources.length - 1 ? 0 : prev + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? videoSources.length - 1 : prev - 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLVideoElement>) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLVideoElement>) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current !== null &&
      touchEndX.current !== null &&
      Math.abs(touchStartX.current - touchEndX.current) > swipeThreshold
    ) {
      touchStartX.current > touchEndX.current ? goToNext() : goToPrev();
    }

    // Reset refs
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="video-slider-section">
      <div className="video-slider-wrapper">
        {/* Desktop-only buttons */}
        <button className="nav-button left" onClick={goToPrev}>
          <ChevronLeftIcon style={{ fontSize: iconSize, color: iconColor }} />
        </button>

        <video
          className="slider-video"
          key={videoSources[currentIndex]}
          src={videoSources[currentIndex]}
          autoPlay
          muted
          loop
          playsInline
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />

        <button className="nav-button right" onClick={goToNext}>
          <ChevronRightIcon style={{ fontSize: iconSize, color: iconColor }} />
        </button>
      </div>

      {/* 👇 Optional mobile-only hint */}
      {showSwipeHint && (
        <p className="swipe-hint-text">👆 Swipe left to see more videos</p>
      )}
    </section>
  );
};

export default ImageSlider;
