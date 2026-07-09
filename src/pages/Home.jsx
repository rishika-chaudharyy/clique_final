import React from "react";
import "../styles/Home.css";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import LogosSection from "../components/LogoSection";
import AboutInternship from "../components/AboutInternship";
import FeatureHighlights from "../components/FeatureHighlights";
import WhoWeAre from "../components/WhoWeAre";
import StatsSection from "../components/StatsSection";
import WhyChooseUs from "../components/WhyChooseUs";

import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import ChatbotAssistant from "../components/ChatbotAssistant"; // Assuming you have a chatbot component
import ScrollToTopButton from "../components/ScrollToTopButton";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <HeroSection />
      <LogosSection />
      <AboutInternship />
      <FeatureHighlights />
      <WhoWeAre />
      <StatsSection />
      <WhyChooseUs />

      <ContactUs />
      <Footer />
      <ChatbotAssistant />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
