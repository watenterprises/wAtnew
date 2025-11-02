import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "Gaurav Kumar",
    date: "September 2025",
    rating: 5,
    review:
      "Our experience with wAt was excellent. Their marketing strategies brought significant visibility and customer traction, reinforcing why we chose them.",
    avatar: "https://ui-avatars.com/api/?name=Gaurav+Kumar&background=19a1ff&color=fff",
  },
  {
    name: "Shuvam Mohanty",
    date: "September 2025",
    rating: 5,
    review:
      "wAt took charge of our product launch with a well-rounded marketing plan that included influencer partnerships, content strategy, and digital campaigns.",
    avatar: "https://ui-avatars.com/api/?name=Shuvam+Mohanty&background=19a1ff&color=fff",
  },
  {
    name: "Saikiran",
    date: "September 2025",
    rating: 5,
    review:
      "We trusted wAt to handle all our social media accounts, and they delivered stellar results. Their mix of organic posts and paid ads boosted our reach impressively.",
    avatar: "https://ui-avatars.com/api/?name=Saikiran&background=19a1ff&color=fff",
  },
];

const StarIcon = ({ filled }) => (
  <svg width="18" height="18" fill={filled ? "#FFC107" : "none"} viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill={filled ? "#FFC107" : "none"} stroke="#FFC107" strokeWidth="1.5"/>
  </svg>
);

const ChevronLeft = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path d="M15 18l-6-6 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path d="M9 18l6-6-6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function TestimonialSection() {
  const carouselRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".fade-up"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true
        },
      }
    );
  }, []);

  const scroll = (direction) => {
    const { current } = carouselRef;
    if (current) {
      const scrollAmount = direction === "left" ? -360 : 360;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const reviewLink = "https://g.page/r/YOUR_GOOGLE_REVIEW_LINK";

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#000",
        width: "100vw",
        padding: "70px 24px 80px",
        margin: 0,
        overflow: "hidden"
      }}
    >
      <div style={{
        maxWidth: 1180,
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        gap: 48,
        alignItems: "flex-start",
        position: "relative"
      }}>
        {/* Left Section - Brand Card */}
        <div className="fade-up" style={{
          background: "linear-gradient(125deg, rgba(38,38,42,0.28) 54%, rgba(18,18,22,0.42) 100%)",
          borderRadius: "1.8rem",
          padding: "38px 32px",
          border: "1.6px solid rgba(255,255,255,0.06)",
          boxShadow: "0 8px 44px rgba(0,0,0,0.24), 0 0.5px 10px 0 rgba(100,100,100,0.08) inset",
          backdropFilter: "blur(16px) saturate(110%)",
          WebkitBackdropFilter: "blur(16px) saturate(110%)",
          width: "100%",
          maxWidth: 320,
          minWidth: 280,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start"
        }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{
              background: "linear-gradient(135deg, #19a1ff 0%, #1e88e5 100%)",
              borderRadius: "50%",
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "1.5rem",
              color: "#fff",
              fontFamily: "Inter, sans-serif"
            }}>
              w
            </div>
            <h2 style={{
              fontFamily: "Inter, Segoe UI, Arial, sans-serif",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#fff"
            }}>
              wAt
            </h2>
          </div>

          {/* Star Rating */}
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 8 }}>
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} filled={i < 4.5} />
            ))}
          </div>

          <p style={{
            color: "#b8b8b8",
            fontSize: "0.98rem",
            marginBottom: 24,
            fontFamily: "Inter, sans-serif"
          }}>
            4.8 • 110 Google reviews
          </p>

          {/* CTA Button */}
          <a
            href={reviewLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(90deg, #19a1ff 30%, #216dd7 100%)",
              color: "#fff",
              fontFamily: "Inter, Segoe UI, Arial, sans-serif",
              fontSize: "1.04rem",
              fontWeight: 600,
              padding: "12px 28px",
              borderRadius: "14px",
              textDecoration: "none",
              display: "inline-block",
              boxShadow: "0 6px 18px rgba(25,161,255,0.28)",
              transition: "transform 0.2s, box-shadow 0.2s"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 8px 24px rgba(25,161,255,0.38)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 6px 18px rgba(25,161,255,0.28)";
            }}
          >
            Write a review
          </a>
        </div>

        {/* Right Section - Reviews Carousel */}
        <div className="fade-up" style={{ flex: 1, position: "relative", overflow: "hidden" }}>
          <div
            ref={carouselRef}
            style={{
              display: "flex",
              gap: 24,
              overflowX: "scroll",
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
          >
            {reviews.map((r, index) => (
              <div
                key={index}
                style={{
                  background: "linear-gradient(125deg, rgba(38,38,42,0.24) 54%, rgba(18,18,22,0.38) 100%)",
                  borderRadius: "1.6rem",
                  padding: "28px 26px",
                  minWidth: 340,
                  maxWidth: 340,
                  border: "1.5px solid rgba(255,255,255,0.06)",
                  boxShadow: "0 6px 36px rgba(0,0,0,0.20), 0 0.5px 8px 0 rgba(100,100,100,0.08) inset",
                  backdropFilter: "blur(14px) saturate(110%)",
                  WebkitBackdropFilter: "blur(14px) saturate(110%)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "default"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 10px 48px rgba(0,0,0,0.28), 0 0.5px 8px 0 rgba(100,100,100,0.08) inset";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 6px 36px rgba(0,0,0,0.20), 0 0.5px 8px 0 rgba(100,100,100,0.08) inset";
                }}
              >
                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <img
                      src={r.avatar}
                      alt={r.name}
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        border: "2px solid rgba(255,255,255,0.12)"
                      }}
                    />
                    <div>
                      <h4 style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "1.08rem",
                        fontWeight: 600,
                        color: "#f2f2f2",
                        marginBottom: 2
                      }}>
                        {r.name}
                      </h4>
                      <p style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.88rem",
                        color: "#999"
                      }}>
                        {r.date}
                      </p>
                    </div>
                  </div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                    alt="Google"
                    style={{ width: 20, height: 20, opacity: 0.7 }}
                  />
                </div>

                {/* Stars */}
                <div style={{ display: "flex", gap: 3 }}>
                  {[...Array(r.rating)].map((_, i) => (
                    <StarIcon key={i} filled={true} />
                  ))}
                </div>

                {/* Review Text */}
                <p style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1.02rem",
                  color: "#d0d0d0",
                  lineHeight: 1.65,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical"
                }}>
                  {r.review}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            style={{
              position: "absolute",
              left: -16,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(25,161,255,0.12)",
              border: "1.4px solid rgba(25,161,255,0.2)",
              borderRadius: "50%",
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)"
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(25,161,255,0.2)";
              e.target.style.transform = "translateY(-50%) scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(25,161,255,0.12)";
              e.target.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() => scroll("right")}
            style={{
              position: "absolute",
              right: -16,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(25,161,255,0.12)",
              border: "1.4px solid rgba(25,161,255,0.2)",
              borderRadius: "50%",
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)"
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(25,161,255,0.2)";
              e.target.style.transform = "translateY(-50%) scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(25,161,255,0.12)";
              e.target.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
