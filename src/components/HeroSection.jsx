import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HeroSection.css";
import leftImage from "../assets/left.jpg";
import rightImage from "../assets/right.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/programs"); // Change this route if needed
  };

  return (
    <div className="hero-container">
      <div className="hero-images">
        {/* Left Section */}
        <div className="image-left">
          <img src={leftImage} alt="Clique IT & Analytics Club" />

          <div className="hero-overlay floating">
            <h1>
              Think <span>Data</span>. Build <span>Technology</span>. Create{" "}
              <span>Impact</span>.
            </h1>

            <p>
              Welcome to <strong>Clique – The IT & Analytics Club</strong>,
              where technology meets innovation and ideas transform into
              impactful solutions.
              <br />
              <br />
              Explore coding, artificial intelligence, data analytics,
              hackathons, technical workshops, industry expert sessions, and
              collaborative projects designed to prepare the next generation of
              innovators.
              <br />
              <br />
              <strong>Code. Analyze. Innovate.</strong>
            </p>

            <button className="explore-btn" onClick={handleExploreClick}>
              Explore Clique
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="image-right">
          <img src={rightImage} alt="Clique Activities" />

          {/* Animated Curve 1 */}
          <div className="curvy-line-overlay">
            <svg
              width="100%"
              height="100"
              viewBox="0 0 1000 100"
              xmlns="http://www.w3.org/2000/svg"
              className="curvy-svg"
            >
              <path
                id="curvePath1"
                d="M0,50 C150,0 350,100 500,50 C650,0 850,100 1000,50"
                fill="transparent"
                stroke="#ccc"
                strokeWidth="4"
              />

              <circle r="8" fill="#ff5e57">
                <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#curvePath1" />
                </animateMotion>
              </circle>

              <circle r="8" fill="#00c2ff">
                <animateMotion
                  dur="6s"
                  repeatCount="indefinite"
                  begin="3s"
                  rotate="auto"
                >
                  <mpath href="#curvePath1" />
                </animateMotion>
              </circle>
            </svg>
          </div>

          {/* Animated Curve 2 */}
          <div className="curvy-line-overlay second-line">
            <svg
              width="100%"
              height="100"
              viewBox="0 0 1000 100"
              xmlns="http://www.w3.org/2000/svg"
              className="curvy-svg"
            >
              <path
                id="curvePath2"
                d="M0,50 C200,100 300,0 500,50 C700,100 800,0 1000,50"
                fill="transparent"
                stroke="#ccc"
                strokeWidth="4"
              />

              <circle r="8" fill="#42f563">
                <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#curvePath2" />
                </animateMotion>
              </circle>

              <circle r="8" fill="#f5da42">
                <animateMotion
                  dur="7s"
                  repeatCount="indefinite"
                  begin="3.5s"
                  rotate="auto"
                >
                  <mpath href="#curvePath2" />
                </animateMotion>
              </circle>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
