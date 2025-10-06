// src/components/BrandPillars.tsx
import "../styles/global.css";

const pillars = ["LOVE", "LIFESTYLE", "LUXURY"];

const BrandPillars = () => {
  return (
    <section className="brand-pillars-section">
      <div className="brand-pillars-container">
        {pillars.map((word) => (
          <div key={word} className="brand-pillars-card">
            <h2>{word}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandPillars;
