import React from "react";

declare const Calendly: any;

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="service-card">
      <div className="service-text">
        <h3>{title}</h3>
        <p>{description}</p>
        <button
          className="service-button"
          onClick={() =>
            Calendly.initPopupWidget({
              url: "https://calendly.com/designs-flairbytate/30min-1",
            })
          }
        >
          Book Now
        </button>
      </div>
      <div className="service-image-wrapper">
        <img src={image} alt={title} className="service-image" />
      </div>
    </div>
  );
};

export default ServiceCard;
