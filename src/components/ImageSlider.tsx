// //
// import { useState, useRef } from "react";
// import "../styles/global.css";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// const videoSources = [
//   "/videos/paxdesign.mp4",
//   "/videos/patio.mp4",
//   "/videos/paxsys1.mp4",
//   "/videos/bathroom.mp4",
//   "/videos/office.mp4",
// ];

// const SWIPE_THRESHOLD = 50; // pixels to trigger a swipe

// const ImageSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const touchStartX = useRef<number | null>(null);
//   const touchEndX = useRef<number | null>(null);

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === videoSources.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const goToPrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? videoSources.length - 1 : prevIndex - 1
//     );
//   };

//   const handleTouchStart = (e: React.TouchEvent<HTMLVideoElement>) => {
//     touchStartX.current = e.targetTouches[0].clientX;
//   };

//   const handleTouchMove = (e: React.TouchEvent<HTMLVideoElement>) => {
//     touchEndX.current = e.targetTouches[0].clientX;
//   };

//   const handleTouchEnd = () => {
//     if (
//       touchStartX.current !== null &&
//       touchEndX.current !== null &&
//       Math.abs(touchStartX.current - touchEndX.current) > SWIPE_THRESHOLD
//     ) {
//       if (touchStartX.current > touchEndX.current) {
//         goToNext(); // Swipe left → next
//       } else {
//         goToPrev(); // Swipe right → previous
//       }
//     }

//     // reset refs
//     touchStartX.current = null;
//     touchEndX.current = null;
//   };

//   return (
//     <section className="video-slider-section">
//       <div className="video-slider-wrapper">
//         {/* Desktop-only buttons */}
//         <button className="nav-button left">
//           <ChevronLeftIcon
//             style={{ fontSize: 40, color: "#008080" }}
//             onClick={goToPrev}
//           />
//         </button>

//         <video
//           className="slider-video"
//           key={videoSources[currentIndex]}
//           src={videoSources[currentIndex]}
//           autoPlay
//           muted
//           loop
//           playsInline
//           onTouchStart={handleTouchStart}
//           onTouchMove={handleTouchMove}
//           onTouchEnd={handleTouchEnd}
//         />

//         <button className="nav-button right">
//           <ChevronRightIcon
//             style={{ fontSize: 40, color: "#008080" }}
//             onClick={goToNext}
//           />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default ImageSlider;

import { useState, useEffect, useRef } from "react";
import "../styles/global.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const videoSources = [
  "/videos/paxdesign.mp4",
  "/videos/patio.mp4",
  "/videos/paxsys1.mp4",
  "/videos/bathroom.mp4",
  "/videos/office.mp4",
];

const SWIPE_THRESHOLD = 50;

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goToNext = () =>
    setCurrentIndex((i) => (i === videoSources.length - 1 ? 0 : i + 1));

  const goToPrev = () =>
    setCurrentIndex((i) => (i === 0 ? videoSources.length - 1 : i - 1));

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
      Math.abs(touchStartX.current - touchEndX.current) > SWIPE_THRESHOLD
    ) {
      if (touchStartX.current > touchEndX.current) goToNext();
      else goToPrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Auto-hide the swipe hint after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowSwipeHint(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="video-slider-section">
      <div className="video-slider-wrapper">
        <button className="nav-button left" onClick={goToPrev}>
          <ChevronLeftIcon style={{ fontSize: 40, color: "#008080" }} />
        </button>

        <div className="video-container">
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

          {showSwipeHint && (
            <div className="swipe-hint">
              <span>👆 Swipe to see more</span>
            </div>
          )}
        </div>

        <button className="nav-button right" onClick={goToNext}>
          <ChevronRightIcon style={{ fontSize: 40, color: "#008080" }} />
        </button>
      </div>
    </section>
  );
};

export default ImageSlider;
