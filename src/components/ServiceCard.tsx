import React from "react";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  calendlyUrl?: string;
  buttonText?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  calendlyUrl = "https://calendly.com/designs-flairbytate/30min-1",
  buttonText = "Book Now",
}) => {
  const handleBookNow = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: calendlyUrl });
    } else {
      console.warn("Calendly is not loaded.");
    }
  };

  return (
    <div className="service-card">
      <div className="service-text">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="service-button" onClick={handleBookNow}>
          {buttonText}
        </button>
      </div>

      <div className="service-image-wrapper">
        <img src={image} alt={title} className="service-image" />
      </div>
    </div>
  );
};

export default ServiceCard;
