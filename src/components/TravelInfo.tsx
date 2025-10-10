import React from "react";
import "../styles/global.css";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

interface TravelLocation {
  name: string;
  priceRange: string;
}

interface TravelInfoProps {
  heading?: string;
  descriptionTitle?: string;
  description?: string;
  howItWorks?: string[];
  travelLocations?: TravelLocation[];
  extraNote?: string;
  calendlyUrl?: string;
  buttonText?: string;
}

const defaultHowItWorks = [
  "Fees cover transportation, lodging (if needed), and travel time.",
  "Costs vary depending on the project and location and will be discussed before booking.",
];

const defaultLocations: TravelLocation[] = [
  { name: "New York / New Jersey", priceRange: "$350–$600" },
  { name: "Washington, D.C.", priceRange: "$250–$500" },
  { name: "Florida", priceRange: "$200–$400" },
  { name: "Other locations", priceRange: "Reach out for a custom quote." },
];

// Header variables
const headers = {
  main: "Bringing Luxe Living to You",
  descriptionTitle: "Travel Fees",
  howItWorksTitle: "How it works:",
  estimatedFeesTitle: "Estimated Travel Fees:",
};

const TravelInfo: React.FC<TravelInfoProps> = ({
  heading = headers.main,
  descriptionTitle = headers.descriptionTitle,
  description = `While most of my services are based in Georgia, I am happy to travel
  for out-of-state projects. Please note that additional travel fees
  will apply for clients located outside the local Georgia area.`,
  howItWorks = defaultHowItWorks,
  travelLocations = defaultLocations,
  extraNote = "All fees will be finalized and agreed upon before booking.",
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
    <section className="travel-section">
      <h2 className="travel-heading">{heading}</h2>

      <div className="travel-content">
        <div className="travel-text">
          <h3>{descriptionTitle}</h3>
          <p>{description}</p>

          <h4>{headers.howItWorksTitle}</h4>
          <ul>
            {howItWorks.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="travel-locations">
          <h4>{headers.estimatedFeesTitle}</h4>
          <ul>
            {travelLocations.map(({ name, priceRange }) => (
              <li key={name}>
                <strong>{name}:</strong> {priceRange}
              </li>
            ))}
          </ul>
          <p>{extraNote}</p>
        </div>
      </div>

      <div className="travel-button-wrapper">
        <button className="travel-button" onClick={handleBookNow}>
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default TravelInfo;
