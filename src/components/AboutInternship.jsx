import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "../styles/AboutInternship.css";
import bg3 from "../assets/bg3.jpg";
import bg from "../assets/bg.jpg";

const AboutInternship = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="about-internship-section" id="about">
      <div className="about-container" data-aos="fade-left">
        <div
          className="circle-visual"
          style={{
            backgroundImage: `url(${bg3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="floating-image-wrapper">
            <img
              alt="Clique IT & Analytics Club"
              src={bg}
              className="floating-img"
            />
          </div>
        </div>

        <div className="about-content">
          <h2 className="about-title">Where Technology Meets Innovation</h2>

          <p className="about-desc">
            <strong>Clique – The IT & Analytics Club</strong> is a community of
            passionate innovators, developers, analysts, and problem-solvers. We
            create opportunities for students to explore emerging technologies
            through <strong>technical workshops</strong>,
            <strong> hackathons</strong>, <strong>coding competitions</strong>,
            <strong> AI & Data Analytics sessions</strong>, industry talks, and
            collaborative projects.
            <br />
            <br />
            Whether you're just starting your tech journey or looking to sharpen
            your expertise, Clique provides the perfect platform to learn,
            collaborate, innovate, and grow alongside like-minded peers.
          </p>

          <Link to="/about" className="know-more-btn">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutInternship;
