import React from "react";
import CountUp from "react-countup";
import "../styles/StatsSection.css";

const stats = [
  {
    label: "Club Members",
    value: 500,
    suffix: "+",
    color: "#4b5ccc",
  },
  {
    label: "Events Organized",
    value: 45,
    suffix: "+",
    color: "#27ae60",
  },
  {
    label: "Industry Partners",
    value: 20,
    suffix: "+",
    color: "#f39c12",
  },
  {
    label: "Workshops & Hackathons",
    value: 35,
    suffix: "+",
    color: "#e74c3c",
  },
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div
            className="stat-box"
            key={index}
            style={{ borderLeft: `5px solid ${stat.color}` }}
          >
            <h2 className="stat-number">
              <CountUp
                start={0}
                end={stat.value}
                duration={2.5}
                suffix={stat.suffix}
                enableScrollSpy
                scrollSpyOnce
              />
            </h2>

            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
