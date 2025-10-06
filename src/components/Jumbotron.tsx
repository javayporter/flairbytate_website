import React from "react";

const Jumbotron: React.FC = () => {
  return (
    <section className="jumbotron" id="about">
      <img
        src="src/assets/DSC_4432.JPG"
        alt="Founder"
        className="jumbotron-image"
      />
      <div className="jumbotron-text">
        <h2>About Us</h2>
        <p>
          I believe everyone deserves a taste of luxury, no matter their budget.
          What started as designing my own home as a single mom of two has grown
          into a passion for curating spaces that uplift, inspire, and reflect
          each person’s unique lifestyle. With creativity, resourcefulness, and
          a love for beauty, I help clients turn houses into homes that feel
          both comfortable and luxe.
        </p>
      </div>
    </section>
  );
};

export default Jumbotron;
