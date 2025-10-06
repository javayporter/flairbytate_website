// src/components/TravelInfo.tsx
import "../styles/global.css";
declare const Calendly: any;

const TravelInfo = () => {
  return (
    <section className="travel-section">
      <h2 className="travel-heading">Bringing Luxe Living to You</h2>
      <div className="travel-content">
        <div className="travel-text">
          <h3>Travel Fees</h3>
          <p>
            While most of my services are based in Georgia, I am happy to travel
            for out-of-state projects. Please note that additional travel fees
            will apply for clients located outside the local Georgia area.
          </p>

          <h4>How it works:</h4>
          <ul>
            <li>
              Fees cover transportation, lodging (if needed), and travel time.
            </li>
            <li>
              Costs vary depending on the project and location and will be
              discussed before booking.
            </li>
          </ul>
        </div>

        <div className="travel-locations">
          <h4>Estimated Travel Fees:</h4>
          <ul>
            <li>
              <strong>New York / New Jersey:</strong> $500–$800
            </li>
            <li>
              <strong>Washington, D.C.:</strong> $400–$600
            </li>
            <li>
              <strong>Florida:</strong> $300–$600
            </li>
            <li>
              <strong>Other locations:</strong> Reach out for a custom quote.
            </li>
          </ul>
          <p>All fees will be finalized and agreed upon before booking.</p>
        </div>
      </div>

      <div className="travel-button-wrapper">
        <button
          className="travel-button"
          onClick={() =>
            Calendly.initPopupWidget({
              url: "https://calendly.com/designs-flairbytate/30min-1",
            })
          }
        >
          Book Now
        </button>
      </div>
    </section>
  );
};

export default TravelInfo;
