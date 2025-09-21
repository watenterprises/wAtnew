import React from "react";

// Example data (replace with your own project info)
const project = {
  title: "GreenTech Solutions",
  subtitle: "Increased customer engagement by 30% and streamlined digital presence.",
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  tags: ["Web Design", "Figma", "Responsive"],
  highlights: [
    { label: "Conversion Up", value: "+30%" },
    { label: "Time to Launch", value: "5 Weeks" },
    { label: "Bounce Rate", value: "-21%" }
  ],
  summary: `GreenTech Solutions partnered with us for a full digital overhaul—turning an outdated website into a high-converting, modern platform.`,
  problem: `GreenTech Solutions had a static website with poor engagement and outdated branding. Users dropped off before reaching conversion points, and mobile usability was lacking.`,
  approach: `We conducted a UX audit, redesigned all key pages in Figma with a mobile-first approach, and introduced clear CTAs. The build leveraged a custom CMS for rapid content updates and responsive layouts.`,
  result: `Engagement rose dramatically: bounce rates fell, conversions increased by 30%, and site update time dropped from days to minutes. The new platform remains visually fresh, fast, and scalable.`
};

export default function ProjectDetailSection() {
  return (
    <section style={{
      background: "#000",
      width: "100vw",
      minHeight: "100vh",
      padding: "0",
      margin: 0
    }}>
      <article style={{ maxWidth: 1050, margin: "0 auto", padding: "36px 0 42px" }}>
        {/* Project hero */}
        <figure style={{
          width: "100%",
          aspectRatio: "3/1",
          minHeight: 286,
          borderRadius: "2.1rem",
          overflow: "hidden",
          background: "#181a1e",
          margin: 0,
          marginBottom: 38,
          boxShadow: "0 10px 58px rgba(10,10,10,.22)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative"
        }}>
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              minHeight: 238
            }}
            loading="lazy"
          />
        </figure>
        {/* Title and subtitle */}
        <div style={{ textAlign: "center", marginBottom: 15 }}>
          <h1 style={{
            fontFamily: "Inter,Segoe UI,Arial,sans-serif",
            fontWeight: 600,
            fontSize: "3.2rem",
            color: "#ededed",
            marginBottom: 6,
            letterSpacing: "-0.01em"
          }}>
            {project.title}
          </h1>
          <div style={{
            color: "#b8b8b9",
            fontWeight: 400,
            fontSize: "1.21rem",
            lineHeight: 1.46,
            marginBottom: 3,
            fontFamily: "Inter,Segoe UI,Arial,sans-serif"
          }}>
            {project.subtitle}
          </div>
        </div>
        {/* Info glass card */}
        <div style={{
          margin: "0 auto 28px auto",
          padding: "35px 42px 26px 42px",
          borderRadius: "1.48rem",
          background: "linear-gradient(120deg,rgba(36,36,40,0.30) 63%,rgba(22,22,33,0.38) 100%)",
          border: "1.18px solid rgba(255,255,255,0.06)",
          boxShadow: "0 4px 30px rgba(10,12,16,0.12), 0 0.5px 7px 0 rgba(255,255,255,0.07) inset",
          backdropFilter: "blur(16px) saturate(113%)",
          WebkitBackdropFilter: "blur(16px) saturate(113%)",
          maxWidth: 690,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 26
        }}>
          {/* Tags */}
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "flex-start"
          }}>
            <div style={{fontSize: "1.08rem", color: "#f8f8f8", fontWeight: 600, marginBottom: 10}}>Tags</div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {project.tags.map((tag) => (
                <span key={tag} style={{
                  background: "rgba(255,255,255,0.07)",
                  borderRadius: "15px",
                  fontSize: "1.02rem",
                  color: "#dadada",
                  fontWeight: 500,
                  padding: "7px 17px",
                  border: "1.1px solid rgba(255,255,255,0.10)"
                }}>{tag}</span>
              ))}
            </div>
          </div>
          {/* Highlights */}
          <div style={{
            display: "flex",
            gap: "40px",
            alignItems: "center"
          }}>
            {project.highlights.map(h => (
              <div key={h.label} style={{textAlign: "center"}}>
                <div style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "1.48rem",
                  letterSpacing: "-0.01em"
                }}>{h.value}</div>
                <div style={{
                  color: "#c7c7c7",
                  fontWeight: 400,
                  fontSize: "1.03rem",
                  marginTop: 2,
                  opacity: 0.86
                }}>{h.label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Summary paragraph */}
        <div style={{
          margin: "0 auto 38px auto",
          color: "#b2b2b2",
          fontSize: "1.23rem",
          maxWidth: 690,
          lineHeight: 1.64,
          textAlign: "center",
          fontFamily: "Inter,Segoe UI,Arial,sans-serif"
        }}>
          {project.summary}
        </div>
        {/* Problem / Approach / Solution */}
        <div style={{
          maxWidth: 840, margin: "30px auto 0", display: "grid", gap: 34
        }}>
          <SectionBlock
            label="Problem"
            text={project.problem}
            color="#f18c75"
          />
          <SectionBlock
            label="Approach"
            text={project.approach}
            color="#41d59d"
          />
          <SectionBlock
            label="Results"
            text={project.result}
            color="#1eacf7"
          />
        </div>
      </article>
    </section>
  );
}

function SectionBlock({ label, text, color }) {
  return (
    <section style={{
      background: "rgba(255,255,255,0.07)",
      borderRadius: "1.1rem",
      borderLeft: `5px solid ${color}`,
      boxShadow: "0 0.5px 8px rgba(40,46,60,0.08) inset",
      padding: "23px 34px",
      display: "flex",
      flexDirection: "column",
      gap: 5
    }}>
      <span style={{
        color, fontSize: "1.13rem", fontWeight: 600, letterSpacing: "0.01em", marginBottom: 4
      }}>{label}</span>
      <span style={{
        color: "#e0e0e0", fontFamily: "Inter,Segoe UI,Arial,sans-serif", fontWeight: 400, fontSize: "1.07rem",
      }}>{text}</span>
    </section>
  );
}
