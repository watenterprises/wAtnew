import React from "react";

export default function ContactPage() {
  return (
    <section style={{ 
      minHeight: "100vh", 
      backgroundColor: "#000", 
      color: "#eee", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      padding: "80px 20px"
    }}>
      <div style={{ 
        maxWidth: 720, 
        width: "100%", 
        background: "rgba(255, 255, 255, 0.12)", 
        borderRadius: "2.6rem",
        padding: "48px 40px",
        boxShadow: "inset 0 0 40px 0 rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(24px)", 
        WebkitBackdropFilter: "blur(24px)",
        border: "1.6px solid rgba(255, 255, 255, 0.09)"
      }}>
        <h1 style={{ 
          fontFamily: "Inter, Segoe UI, Arial", 
          fontWeight: 600,
          fontSize: "3rem", 
          marginBottom: 22, 
          color: "#fff",
          userSelect: "none"
        }}>
          Get in Touch
        </h1>
        <p style={{ 
          fontFamily: "Inter, Segoe UI, Arial",
          fontSize: "1.2rem",
          fontWeight: 400,
          color: "#ccc",
          marginBottom: 40,
          userSelect: "none"
        }}>
          We’d love to hear from you. Whether you have a question or want to start a project, just fill out the form below.
        </p>
        
        <form style={{ display: "flex", flexDirection: "column", gap: "22px" }} onSubmit={e => e.preventDefault()}>
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            required 
            style={inputStyles} 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            required 
            style={inputStyles} 
          />
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone (optional)" 
            style={inputStyles} 
          />
          <textarea 
            name="message" 
            placeholder="Your message" 
            rows={5} 
            required 
            style={{ 
              ...inputStyles, 
              resize: "vertical"
            }}
          />
          <button type="submit" style={buttonStyles}>Send Message</button>
        </form>
        
      </div>
    </section>
  );
}

const inputStyles = {
  backgroundColor: "rgba(255,255,255,0.1)",
  border: "1.5px solid rgba(255,255,255,0.2)",
  borderRadius: "22px",
  padding: "14px 22px",
  fontSize: "1rem",
  fontFamily: "Inter, Segoe UI, Arial",
  color: "#eee",
  outline: "none",
  transition: "border-color 0.3s ease",
  userSelect: "text"
};

const buttonStyles = {
  background: "linear-gradient(90deg, #19a1ff 30%, #216dd7 100%)",
  color: "#fff",
  fontFamily: "Inter, Segoe UI, Arial",
  fontSize: "1.1rem",
  fontWeight: 600,
  borderRadius: "27px",
  padding: "14px 40px",
  border: "none",
  cursor: "pointer",
  userSelect: "none",
  boxShadow: "0 6px 18px rgba(25,107,223,0.43)",
  transition: "background 0.3s ease",
};

