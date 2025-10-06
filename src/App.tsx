import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import ServiceCard from "./components/ServiceCard";
import ContactSection from "./components/ContactSection";
import ImageSlider from "./components/ImageSlider";
import { services } from "./data/services";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="container" style={{ marginTop: "1.75rem" }}>
        <Jumbotron />
        <section id="home">
          <ImageSlider />
        </section>
        <section id="services" style={{ padding: "2rem" }}>
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </section>
        <ContactSection />
      </main>
    </>
  );
};

export default App;
