import React from "react";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Features from "../components/Features";
import WhyChooseUs from "../components/WhyChooseUs";
import ProjectShowcaseSection from "../components/ProjectShowcaseSection";
import { StatsGlassRow } from "../components/StatsGlassRow";
import TestimonialSection from "../components/TestimonialSection";
import Caret from "../components/Caret";
import CTAGlassBox from "../components/CTAGlassBox";
import WebsiteFooter from "../components/WebsiteFooter";

const Home = () => {
  return (
    <div>
      <Hero />
      <Portfolio />
      <Features />
      <WhyChooseUs />
      <ProjectShowcaseSection />
      <StatsGlassRow />
      <TestimonialSection />
      <Caret />
      <CTAGlassBox />
      <WebsiteFooter />
    </div>
  );
};

export default Home;
