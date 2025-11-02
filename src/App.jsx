import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import { gsap } from "gsap";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./components/Features";
import CaseStudies from "./pages/CaseStudies";
import ProjectDetail from "./pages/ProjectDetail";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./components/ServicesPage";
import AboutUsPage from "./components/AboutUsPage";

function App() {
  const [loading, setLoading] = useState(true);
  const mainRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading && mainRef.current) {
      gsap.fromTo(
        mainRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, [loading]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {loading ? (
        <Loader />
      ) : (
        <div ref={mainRef}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<CaseStudies />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutUsPage />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
