import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/WhoWeAre.css";
import back1 from "../assets/back1.jpg";
import back2 from "../assets/back2.jpg";
import back3 from "../assets/back3.jpg";

const boxes = [
  {
    title: "Our Mission",
    emoji: "🚀",
    content:
      "To inspire students to embrace technology, analytics, and innovation by creating opportunities for learning, collaboration, and hands-on problem-solving through impactful events and projects.",
    bgImage: back1,
  },
  {
    title: "Our Vision",
    emoji: "💡",
    content:
      "To build a thriving community of future-ready technologists and data-driven leaders who innovate, collaborate, and create meaningful solutions for tomorrow's challenges.",
    bgImage: back2,
  },
  {
    title: "Who We Are",
    emoji: "💻",
    content:
      "Clique is the official IT & Analytics Club dedicated to fostering technical excellence through hackathons, coding competitions, AI & Data Analytics workshops, industry sessions, collaborative projects, and a culture of continuous learning.",
    bgImage: back3,
  },
];

const WhoWeAre = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="who-we-are-section" id="who-we-are">
      <h2 className="who-title" data-aos="fade-up">
        About Clique
      </h2>

      <div className="who-container">
        {boxes.map((box, index) => (
          <div
            className="who-box"
            key={index}
            style={{ backgroundImage: `url(${box.bgImage})` }}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <div className="who-content">
              <div className="emoji">{box.emoji}</div>
              <h3>{box.title}</h3>
              <p>{box.content}</p>
            </div>

            <div className="bg-overlay" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoWeAre;
