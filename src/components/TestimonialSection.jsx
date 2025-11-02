import React, { useRef, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "Gaurav Kumar",
    date: "2025-09-17",
    rating: 5,
    review:
      "Our experience with WAT was excellent. Their marketing strategies brought significant visibility and customer traction, reinforcing why we chose them.",
    avatar: "https://ui-avatars.com/api/?name=Gaurav+Kumar&background=ff7043&color=fff",
  },
  {
    name: "Shuvam Mohanty",
    date: "2025-09-17",
    rating: 5,
    review:
      "WAT took charge of our product launch with a well-rounded marketing plan that included influencer partnerships, content strategy, and digital campaigns.",
    avatar: "https://ui-avatars.com/api/?name=Shuvam+Mohanty&background=00bcd4&color=fff",
  },
  {
    name: "Saikiran",
    date: "2025-09-17",
    rating: 5,
    review:
      "We trusted WAT to handle all our social media accounts, and they delivered stellar results. Their mix of organic posts and paid ads boosted our reach impressively.",
    avatar: "https://ui-avatars.com/api/?name=Saikiran&background=8bc34a&color=fff",
  },
];

export default function TestimonialSection() {
  const carouselRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".fade-up"),
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const scroll = (direction) => {
    const { current } = carouselRef;
    if (current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const reviewLink = "https://your-review-link.com"; // replace with your actual link

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-14 px-5 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8 items-start relative fade-up">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start w-full md:w-[30%]">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-yellow-300 text-black text-2xl font-extrabold rounded-full w-12 h-12 flex items-center justify-center">
              w
            </div>
            <h2 className="text-xl font-semibold">WAT</h2>
          </div>

          <div className="flex items-center gap-1 mb-1">
            {[...Array(4)].map((_, i) => (
              <Star key={i} fill="#FFC107" stroke="#FFC107" size={18} />
            ))}
            <Star fill="#FFC107" stroke="#FFC107" size={18} className="opacity-70" />
          </div>

          <p className="text-gray-400 text-sm mb-3">110 Google reviews</p>

          <button
            onClick={() => window.open(reviewLink, "_blank")}
            className="bg-white text-black font-medium px-5 py-2 rounded-md hover:scale-105 hover:bg-gray-200 transition-transform duration-300"
          >
            Write a review
          </button>
        </div>

        {/* Right Section - Reviews */}
        <div className="w-full md:w-[70%] relative fade-up">
          <div
            ref={carouselRef}
            className="flex gap-5 overflow-hidden scroll-smooth"
          >
            {reviews.map((r, index) => (
              <div
                key={index}
                className="bg-[#181818] rounded-xl p-5 min-w-[280px] md:min-w-[330px] flex flex-col gap-3 hover:scale-[1.02] hover:bg-[#1f1f1f] transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={r.avatar}
                      alt={r.name}
                      className="w-9 h-9 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-base">{r.name}</h4>
                      <p className="text-gray-400 text-xs">{r.date}</p>
                    </div>
                  </div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                    alt="Google"
                    className="w-4 h-4"
                  />
                </div>

                <div className="flex">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} fill="#FFC107" stroke="#FFC107" size={16} />
                  ))}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                  {r.review}
                </p>
                <a
                  href="#"
                  className="text-green-400 text-xs mt-1 hover:underline hover:text-green-300"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-[#1e1e1e] hover:bg-[#2a2a2a] rounded-full p-2 transition duration-300"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-[#1e1e1e] hover:bg-[#2a2a2a] rounded-full p-2 transition duration-300"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
