// src/components/HeroGallery.tsx
import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "../styles/global.css";

const quotes = [
  "Luxury is a mindset.",
  "Luxury is a feeling.",
  "Elevated design for everyday life.",
  "Timeless. Personal. Beautiful.",
];

const images = [
  {
    img: "/images/gallery1.jpg",
    title: "Design 1",
  },
  {
    img: "/images/gallery2.jpg",
    title: "Design 2",
  },
  {
    img: "/images/gallery3.jpg",
    title: "Design 3",
  },
  {
    img: "/images/gallery4.jpg",
    title: "Design 4",
  },
];

const HeroGallery: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-gallery-section">
      <div className="hero-gallery-container">
        <div className="hero-text-block">
          <h1 className="animated-quote">{quotes[currentQuote]}</h1>
          <p className="sub-text">
            Experience curated interiors that reflect who you are.
          </p>
        </div>

        <div className="hero-image-list">
          <ImageList variant="standard" cols={2} gap={8}>
            {images.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
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
