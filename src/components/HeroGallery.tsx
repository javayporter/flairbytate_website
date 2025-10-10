import React, { useEffect, useState, useMemo } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "../styles/global.css";

// Types
interface ImageItem {
  img: string;
  title: string;
}

interface HeroGalleryProps {
  quotes?: string[];
  images?: ImageItem[];
  subText?: string;
  quoteIntervalMs?: number;
}

// Default data (same content as before)
const DEFAULT_QUOTES = [
  "Luxury is a mindset.",
  "Luxury is a feeling.",
  "Elevated design for everyday life.",
  "Timeless. Personal. Beautiful.",
];

const DEFAULT_IMAGES: ImageItem[] = [
  { img: "/images/gallery1.jpg", title: "Design 1" },
  { img: "/images/gallery2.jpg", title: "Design 2" },
  { img: "/images/gallery3.jpg", title: "Design 3" },
  { img: "/images/gallery4.jpg", title: "Design 4" },
];

const DEFAULT_SUBTEXT =
  "Experience curated interiors that reflect who you are.";
const DEFAULT_QUOTE_INTERVAL = 5000;

const HeroGallery: React.FC<HeroGalleryProps> = ({
  quotes = DEFAULT_QUOTES,
  images = DEFAULT_IMAGES,
  subText = DEFAULT_SUBTEXT,
  quoteIntervalMs = DEFAULT_QUOTE_INTERVAL,
}) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Rotate quotes on interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, quoteIntervalMs);

    return () => clearInterval(intervalId);
  }, [quotes.length, quoteIntervalMs]);

  // Only recompute current quote when index changes
  const currentQuote = useMemo(
    () => quotes[currentQuoteIndex],
    [quotes, currentQuoteIndex]
  );

  return (
    <section className="hero-gallery-section">
      <div className="hero-gallery-container">
        <div className="hero-text-block">
          <h1 className="animated-quote">{currentQuote}</h1>
          <p className="sub-text">{subText}</p>
        </div>

        <div className="hero-image-list">
          <ImageList variant="standard" cols={2} gap={8}>
            {images.map(({ img, title }) => (
              <ImageListItem key={img}>
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  className="hero-gallery-image"
                  style={{ borderRadius: "8px", objectFit: "cover" }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </section>
  );
};

export default HeroGallery;
