import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "Mathrushree Architect",
    date: "October 2025",
    rating: 5,
    review:
      "WAT created our brand identity from scratch — logo, website, and digital marketing strategy. Their consulting helped us successfully run ads and grow our online presence.",
    avatar: "https://ui-avatars.com/api/?name=Mathrushree+Architect&background=19a1ff&color=fff",
  },
  {
    name: "Kumar Building Solutions",
    date: "October 2025",
    rating: 5,
    review:
      "They built our website and online product catalogue with integrated e-forms. WAT handled digital marketing, design, and created a strong online store presence for us.",
    avatar: "https://ui-avatars.com/api/?name=Kumar+Building+Solutions&background=19a1ff&color=fff",
  },
  {
    name: "Vibewoods",
    date: "September 2025",
    rating: 5,
    review:
      "We worked with WAT for a full rebrand — they redesigned our logo, built our brand kit, handled digital marketing, product design, videography, and content creation. Excellent work!",
    avatar: "https://ui-avatars.com/api/?name=Vibewoods&background=19a1ff&color=fff",
  },
  {
    name: "JH Group",
    date: "September 2025",
    rating: 5,
    review:
      "WAT created our website and detailed project catalogue. They built our digital presence and helped clients easily explore our construction and design services online.",
    avatar: "https://ui-avatars.com/api/?name=JH+Group&background=19a1ff&color=fff",
  },
  {
    name: "Janani Fitness Centre",
    date: "August 2025",
    rating: 5,
    review:
      "We collaborated with WAT to create admission and billing software, invoicing tools, and a website. They also guided us on digital marketing and management strategies.",
    avatar: "https://ui-avatars.com/api/?name=Janani+Fitness+Centre&background=19a1ff&color=fff",
  },
  {
    name: "A5 Motors",
    date: "August 2025",
    rating: 5,
    review:
      "WAT designed our database and billing software, built our website, and advised us on digital marketing. Their expertise streamlined our operations and boosted reach.",
    avatar: "https://ui-avatars.com/api/?name=A5+Motors&background=19a1ff&color=fff",
  },
  {
    name: "NV Fit Hub",
    date: "July 2025",
    rating: 5,
    review:
      "Our website by WAT helped people enquire, learn about our services, and join online. They also supported our event promotions and overall digital presence.",
    avatar: "https://ui-avatars.com/api/?name=NV+Fit+Hub&background=19a1ff&color=fff",
  },
  {
    name: "B4tutorial",
    date: "June 2025",
    rating: 5,
    review:
      "WAT developed our website and helped us build an online presence that attracts more students. Their marketing insights improved our visibility and credibility.",
    avatar: "https://ui-avatars.com/api/?name=B4tutorial&background=19a1ff&color=fff",
  },
  {
    name: "Beats School of Dance and Art",
    date: "June 2025",
    rating: 5,
    review:
      "WAT redesigned our logo, handled video editing, and created stunning graphics that perfectly represent our dance and art culture.",
    avatar:
      "https://ui-avatars.com/api/?name=Beats+School+of+Dance+and+Art&background=19a1ff&color=fff",
  },
  {
    name: "KDM Constructions",
    date: "May 2025",
    rating: 5,
    review:
      "We collaborated with WAT for rebranding, a new website, logo design, and digital marketing. Their content creation gave us a strong identity online.",
    avatar: "https://ui-avatars.com/api/?name=KDM+Constructions&background=19a1ff&color=fff",
  },
  {
    name: "Monocraft",
    date: "April 2025",
    rating: 5,
    review:
      "WAT designed our logo, website, and handled digital marketing with a strong focus on creative branding and consultation. Their designs stand out.",
    avatar: "https://ui-avatars.com/api/?name=Monocraft&background=19a1ff&color=fff",
  },
  {
    name: "Blahk",
    date: "March 2025",
    rating: 5,
    review:
      "From digital marketing to website creation, photography, and content planning — WAT managed everything seamlessly and professionally.",
    avatar: "https://ui-avatars.com/api/?name=Blahk&background=19a1ff&color=fff",
  },
  {
    name: "Impirials",
    date: "March 2025",
    rating: 5,
    review:
      "WAT designed our website and handled our digital marketing campaigns effectively. Great results and quick support throughout the process.",
    avatar: "https://ui-avatars.com/api/?name=Impirials&background=19a1ff&color=fff",
  },
];

const StarIcon = ({ filled }) => (
  <svg width="18" height="18" fill={filled ? "#FFC107" : "none"} viewBox="0 0 24 24">
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      fill={filled ? "#FFC107" : "none"}
      stroke="#FFC107"
      strokeWidth="1.5"
    />
  </svg>
);

const ChevronLeft = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path d="M15 18l-6-6 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path d="M9 18l6-6-6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
          once: true,
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

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#000",
        width: "100vw",
        padding: "70px 24px 80px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 48,
          alignItems: "center",
        }}
      >
        <h2
          className="fade-up"
          style={{
            fontSize: "2rem",
            color: "#fff",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
          }}
        >
          Client Reviews
        </h2>

        {/* Google-style Write a Review Button */}
        <a
          href="https://www.google.com/search?sca_esv=448ad7832978426a&rlz=1C1ONGR_enIN1016IN1016&sxsrf=AE3TifNouAaniwzhZ6gCrrVsgBVjHPM5FA:1762579568137&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E5IOa8w20KW1fIZ1kvTPBGq2JNJZoJJE2uAjsTFJVJLB_UsdF5QJuVsBvFyBHthPfc7W2ae53HcQ1oiLDcfR8BXN9BSmG9g9agNJQPcaRTSK-zh4ErFiqMnZYR4QyvFfi7xbDfEK_JYcdazMY0sCkmD4bzr8uObjh_HHW5ZDwj_etAJSOg%3D%3D&q=wAt+Enterprises+%E2%80%93+A+Global+Web,+App+%26+Digital+Solutions+Company+Reviews&sa=X&ved=2ahUKEwj_gbDI6OGQAxUbSGwGHV9UGXgQ0bkNegQILRAE&biw=1536&bih=826&dpr=1.25#"
          target="_blank"
          rel="noopener noreferrer"
          className="fade-up"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: "linear-gradient(90deg, #4285F4, #34A853, #FBBC05, #EA4335)",
            color: "#fff",
            fontSize: "1rem",
            fontWeight: 600,
            padding: "12px 22px",
            borderRadius: "10px",
            textDecoration: "none",
            transition: "transform 0.3s ease, opacity 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
        >
          <img
            src="https://www.gstatic.com/images/branding/product/1x/gsa_64dp.png"
            alt="Google"
            style={{ width: 20, height: 20, borderRadius: "4px" }}
          />
          Write a Review
        </a>

        <div className="fade-up" style={{ width: "100%", position: "relative" }}>
          <div
            ref={carouselRef}
            style={{
              display: "flex",
              gap: 24,
              overflowX: "scroll",
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
            }}
          >
            {reviews.map((r, index) => (
              <div
                key={index}
                style={{
                  background:
                    "linear-gradient(125deg, rgba(38,38,42,0.24) 54%, rgba(18,18,22,0.38) 100%)",
                  borderRadius: "1.6rem",
                  padding: "28px 26px",
                  minWidth: 300,
                  border: "1.5px solid rgba(255,255,255,0.06)",
                  boxShadow: "0 6px 36px rgba(0,0,0,0.20)",
                  backdropFilter: "blur(14px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <img
                    src={r.avatar}
                    alt={r.name}
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      border: "2px solid rgba(255,255,255,0.12)",
                    }}
                  />
                  <div>
                    <h4 style={{ color: "#f2f2f2", fontSize: "1.1rem", fontWeight: 600 }}>{r.name}</h4>
                    <p style={{ color: "#999", fontSize: "0.88rem" }}>{r.date}</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 3 }}>
                  {[...Array(r.rating)].map((_, i) => (
                    <StarIcon key={i} filled={true} />
                  ))}
                </div>

                <p style={{ color: "#d0d0d0", lineHeight: 1.65, fontSize: "1rem" }}>{r.review}</p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            style={{
              position: "absolute",
              left: 0,
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
            }}
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() => scroll("right")}
            style={{
              position: "absolute",
              right: 0,
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
            }}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
