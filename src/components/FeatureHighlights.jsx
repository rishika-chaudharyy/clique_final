import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/FeatureHighlights.css";
import bg4 from "../assets/bg4.jpg";

const FeatureHighlights = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="feature-section">
      <div className="feature-container">
        {/* Left Floating Image */}
        <div className="feature-left" data-aos="fade-right">
          <div className="floating-img-wrapper">
            <img
              src={bg4}
              alt="Clique IT & Analytics Club"
              className="feature-img"
            />
          </div>

          <div className="curvy-path">
            <div className="ball ball1"></div>
            <div className="ball ball2"></div>
          </div>
        </div>

        {/* Right Feature Cards */}
        <div className="feature-right" data-aos="fade-left">
          <div className="feature-card card1">
            <div className="emoji">💻</div>
            <h3>Hands-on Workshops</h3>
            <p>
              Learn emerging technologies through practical workshops on web
              development, AI, cybersecurity, cloud computing, and data
              analytics.
            </p>
          </div>

          <div className="feature-card card2">
            <div className="emoji">🚀</div>
            <h3>Hackathons & Projects</h3>
            <p>
              Collaborate with passionate peers, solve real-world challenges,
              build innovative solutions, and showcase your technical skills.
            </p>
          </div>

          <div className="feature-card card3">
            <div className="emoji">📊</div>
            <h3>Industry Exposure</h3>
            <p>
              Connect with industry experts through guest lectures, networking
              sessions, competitions, and mentorship opportunities that prepare
              you for the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
