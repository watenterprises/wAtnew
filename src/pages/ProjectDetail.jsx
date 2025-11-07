import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const contentRef = useRef(null);
  const heroRef = useRef(null);
  const highlightsRef = useRef([]);
  const sectionsRef = useRef([]);

  // ✅ Fetch the project from Firestore
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const docRef = doc(db, "projects", projectId);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
          setProject(snapshot.data());
        } else {
          navigate("/projects");
        }
      } catch (err) {
        console.error("❌ Firestore error:", err);
        navigate("/projects");
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [projectId, navigate]);

  // ✅ Animate after project loads
  useEffect(() => {
    if (!project) return;

    // Hero animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );
    }

    // Highlights animation
    if (highlightsRef.current.length > 0) {
      gsap.fromTo(
        highlightsRef.current,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: highlightsRef.current[0],
            start: "top 80%",
          },
        }
      );
    }

    // Section animations
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
            },
          }
        );
      }
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [project]);

  if (loading)
    return (
      <div className="text-white text-center mt-20 text-lg font-light">
        Loading project details...
      </div>
    );

  if (!project) return null;

  return (
    <div
      ref={contentRef}
      style={{ background: "#000", minHeight: "100vh", paddingBottom: "80px" }}
    >
      {/* ✅ Hero Section */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          width: "100vw",
          height: "clamp(400px, 60vh, 600px)",
          overflow: "hidden",
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.6)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "0 20px",
          }}
        >
          <h1
            style={{
              fontFamily: "Inter, Segoe UI, Arial, sans-serif",
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              fontWeight: 600,
              color: "#fff",
              marginBottom: "clamp(15px, 3vw, 25px)",
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </h1>
          <p
            style={{
              fontFamily: "Inter, Segoe UI, Arial, sans-serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              color: "#e0e0e0",
              maxWidth: "800px",
              lineHeight: 1.6,
            }}
          >
            {project.subtitle}
          </p>
        </div>
      </section>

      {/* ✅ Tags */}
      <div
        style={{
          maxWidth: "min(1200px, 90vw)",
          margin: "clamp(30px, 5vw, 50px) auto",
          display: "flex",
          gap: "clamp(10px, 2vw, 15px)",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "0 20px",
        }}
      >
        {project.tags?.map((tag) => (
          <span
            key={tag}
            style={{
              background: "rgba(255,255,255,0.08)",
              borderRadius: "40px",
              fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)",
              color: "#dadada",
              fontWeight: 500,
              fontFamily: "Inter, Segoe UI, Arial, sans-serif",
              padding: "clamp(8px, 1.5vw, 12px) clamp(18px, 3vw, 28px)",
              border: "1.5px solid rgba(255,255,255,0.12)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* ✅ Highlights */}
      <div
        style={{
          maxWidth: "min(1100px, 90vw)",
          margin: "clamp(40px, 6vw, 70px) auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "clamp(20px, 3vw, 35px)",
          padding: "0 20px",
        }}
      >
        {project.highlights?.map((highlight, idx) => (
          <div
            key={idx}
            ref={(el) => (highlightsRef.current[idx] = el)}
            style={{
              background:
                "linear-gradient(135deg, rgba(39,39,41,0.3) 0%, rgba(18,18,20,0.5) 100%)",
              borderRadius: "clamp(1rem, 2vw, 1.5rem)",
              padding: "clamp(25px, 4vw, 40px)",
              textAlign: "center",
              border: "1.5px solid rgba(255,255,255,0.05)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 12px 40px rgba(0,0,0,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                fontFamily: "Inter, Segoe UI, Arial, sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "clamp(8px, 1.5vw, 12px)",
              }}
            >
              {highlight.value}
            </div>
            <div
              style={{
                fontFamily: "Inter, Segoe UI, Arial, sans-serif",
                fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
                color: "#b9b9b9",
                fontWeight: 500,
              }}
            >
              {highlight.label}
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Main Content Sections */}
      <div
        style={{
          maxWidth: "min(900px, 90vw)",
          margin: "0 auto",
          padding: "clamp(30px, 5vw, 50px) 20px",
        }}
      >
        {[
          { title: "Project Overview", text: project.summary },
          { title: "The Challenge", text: project.problem },
          { title: "Our Approach", text: project.approach },
          { title: "The Results", text: project.result },
        ].map((section, idx) => (
          <div
            key={idx}
            ref={(el) => (sectionsRef.current[idx] = el)}
            style={{ marginBottom: "clamp(40px, 6vw, 60px)" }}
          >
            <h2
              style={{
                fontFamily: "Inter, Segoe UI, Arial, sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontWeight: 600,
                color: "#f4f4f4",
                marginBottom: "clamp(15px, 2.5vw, 20px)",
                borderLeft: "4px solid rgba(255,255,255,0.7)",
                paddingLeft: "clamp(12px, 2vw, 18px)",
              }}
            >
              {section.title}
            </h2>
            <p
              style={{
                fontFamily: "Inter, Segoe UI, Arial, sans-serif",
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                lineHeight: 1.7,
                color: "#c5c5c5",
              }}
            >
              {section.text}
            </p>
          </div>
        ))}

        {/* ✅ Back Button */}
        <div
          style={{ textAlign: "center", marginTop: "clamp(50px, 8vw, 80px)" }}
        >
          <Link
            to="/projects"
            style={{
              display: "inline-block",
              fontFamily: "Inter, Segoe UI, Arial, sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.1rem)",
              fontWeight: 600,
              color: "#fff",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
              padding: "clamp(12px, 2vw, 16px) clamp(30px, 5vw, 45px)",
              borderRadius: "50px",
              border: "1.5px solid rgba(255,255,255,0.2)",
              textDecoration: "none",
              transition: "all 0.3s ease",
              backdropFilter: "blur(10px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
