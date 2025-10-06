import React from "react";
import Slider from "react-slick";

const images = [
  "/assets/slider1.jpg",
  "/assets/slider2.jpg",
  "/assets/slider3.jpg",
];

const ImageSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className="slider-section">
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx}>
            <img src={src} alt={`Slide ${idx + 1}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ImageSlider;
