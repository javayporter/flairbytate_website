import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import ServiceCard from "./components/ServiceCard";
import ContactSection from "./components/ContactSection";
import ImageSlider from "./components/ImageSlider";
import TravelInfo from "./components/TravelInfo";
import HeroGallery from "./components/HeroGallery";
import SocialSidebar from "./components/SocialSidebar";

// import BrandPillars from "./components/BrandPillars";
import { services } from "./data/services";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <main className="container" style={{ marginTop: "1.75rem" }}>
        {/* <BrandPillars /> */}
        <HeroGallery />
        <Jumbotron />
        <section id="home">
          <ImageSlider />
        </section>
        <section id="services" style={{ padding: "2rem" }}>
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </section>
        <TravelInfo />
        <ContactSection />
      </main>
    </>
  );
};

export default App;
