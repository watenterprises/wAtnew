import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  const menuItems = [{ name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" }, // <-- goes to Casestudies.jsx
    { name: "About Us", path: "/about" },
  ];

  return (
    <div className="w-full px-4 pt-8">
      <nav
        ref={navRef}
        className="rounded-3xl shadow-2xl"
        style={{
          background: "rgba(15, 15, 15, 0.8)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          width: "100%",
          maxWidth: "75rem",
          margin: "0 auto",
        }}
      >
        <div className="flex items-center justify-between px-8" style={{ minHeight: "80px", paddingTop: "1.25rem", paddingBottom: "1.25rem" }}>
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="wAt Logo" className="h-6 w-auto object-contain" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white/90 hover:text-white transition-colors duration-200 font-medium text-lg"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
<div className="hidden md:block">
  <Link to="/contact">
    <button
      className="px-6 py-3 rounded-xl font-semibold text-white shadow-lg hover:scale-105 transition-all duration-200"
      style={{
        background: "#0072b0",
        fontFamily: "Inter, sans-serif",
      }}
    >
      Contact us
    </button>
  </Link>
</div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-200 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-200 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-200 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 px-8 py-6">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link key={item.name} to={item.path} className="text-white/90 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}
              <button
                className="text-white font-semibold px-6 py-3 rounded-xl mt-4 w-full"
                style={{ background: "#0072b0" }}
              >
                Contact us
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
