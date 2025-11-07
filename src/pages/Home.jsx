import React, { useEffect, useState } from 'react';
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
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const docRef = doc(db, "siteContent", "homepage");
  //     const snapshot = await getDoc(docRef);
  //     if (snapshot.exists()) setText(snapshot.data().text);
  //   };
  //   fetchData();
  // }, []);
  useEffect(() => {
  let isMounted = true;
  async function test() {
    try {
      const querySnapshot = await getDocs(collection(db, "test"));
      if (isMounted) console.log("Firestore connected ✅", querySnapshot.size);
    } catch (error) {
      if (error.name !== "AbortError") console.error("Firestore error ❌", error);
    }
  }
  test();
  return () => { isMounted = false; }; // cleanup to avoid abort errors
}, []);
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
