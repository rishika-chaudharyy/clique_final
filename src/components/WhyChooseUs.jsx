import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/WhyChooseUs.css";

const features = [
  {
    title: "Learn Beyond the Classroom",
    desc: "Participate in technical workshops, coding sessions, and hands-on learning experiences that complement your academic journey.",
    icon: "💡",
  },
  {
    title: "Collaborate & Innovate",
    desc: "Work alongside passionate developers, designers, and analysts on hackathons, real-world projects, and innovative challenges.",
    icon: "🤝",
  },
  {
    title: "Grow Your Network",
    desc: "Connect with industry professionals, alumni, and like-minded peers through expert talks, networking events, and leadership opportunities.",
    icon: "🚀",
  },
];

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="why-section" id="why-us">
      <div className="why-header" data-aos="fade-down">
        <h2>
          Why Join <span>Clique?</span>
        </h2>
        <p>
          Discover, innovate, and grow with a community driven by technology and
          analytics.
        </p>
      </div>

      <div className="why-cards">
        {features.map((item, i) => (
          <div
            key={i}
            className="why-card"
            data-aos="zoom-in-up"
            data-aos-delay={i * 200}
          >
            <div className="icon-bubble">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="shine-effect" />
    </section>
  );
};

export default WhyChooseUs;
