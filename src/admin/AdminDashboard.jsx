import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import AdminNavbar from "./AdminNavbar";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Smooth intro animation
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: "power2.out" }
    );
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: "power2.out" }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-black flex flex-col items-center justify-center text-white relative"
      style={{
        background: "linear-gradient(180deg, #000, #0a0a0a)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <AdminNavbar />

      <div className="text-center px-6">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 shadow-lg"
          style={{
            background: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-white/90 font-medium text-sm">
            Admin Access — Authorized Only
          </span>
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl font-light leading-tight mb-6"
        >
          Manage Your <span className="text-[#0072b0]">Projects</span> Easily
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 max-w-lg mx-auto mb-10">
          Add, edit, or remove your company’s projects instantly from the admin
          panel. Keep your website content up-to-date with ease.
        </p>

        {/* Button */}
        <div ref={buttonRef}>
          <button
            onClick={() => navigate("/admin/projects")}
            className="px-8 py-4 rounded-xl font-semibold text-white shadow-xl hover:scale-105 transition-all duration-200"
            style={{
              background: "#0072b0",
              fontSize: "1.1rem",
            }}
          >
            🚀 Go to Projects Panel
          </button>
        </div>
      </div>

      {/* Footer Text */}
      <div className="absolute bottom-6 text-gray-500 text-sm">
        wAt Admin Panel © {new Date().getFullYear()}
      </div>
    </div>
  );
}
