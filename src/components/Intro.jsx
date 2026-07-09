import React, { useEffect, useRef, useState } from "react";
import "../styles/Intro.css";

const Intro = ({ onComplete }) => {
  const [slideOut, setSlideOut] = useState(false);
  const canvasRef = useRef(null);
  const snowflakes = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideOut(true);
      setTimeout(() => onComplete(), 1200);
    }, 3000);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const count = 100;
    snowflakes.current = Array.from({ length: count }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 4 + 1,
      d: Math.random() * count,
    }));

    let angle = 0;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      ctx.beginPath();
      snowflakes.current.forEach((flake) => {
        ctx.moveTo(flake.x, flake.y);
        ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2, true);
      });
      ctx.fill();
      update();
    }

    function update() {
      angle += 0.01;
      snowflakes.current.forEach((flake) => {
        flake.y += Math.cos(angle + flake.d) + 1 + flake.r / 2;
        flake.x += Math.sin(angle) * 2;

        if (flake.y > canvas.height) {
          flake.y = 0;
          flake.x = Math.random() * canvas.width;
        }
      });
    }

    function animate() {
      draw();
      requestAnimationFrame(animate);
    }

    animate();

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`intro-container ${slideOut ? "slide-left" : ""}`}>
      <canvas ref={canvasRef} className="snow-canvas" />
      <div className="intro-content">
        <img src="/logo.png" alt="Logo" className="intro-logo" />
        <h1>Clique</h1>
      </div>
    </div>
  );
};

export default Intro;
