"use client";
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";

const WhatsappWidget = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);

      setShowScroll(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollPercent / 100) * circumference;

  return (
    <>
      <div
        className={`scrollTopBtn ${showScroll ? "show" : ""}`}
        onClick={scrollToTop}
      >
        <svg className="progressRing" width="44" height="44">
          <circle
            className="progressBg"
            cx="22"
            cy="22"
            r={radius}
          />
          <circle
            className="progressBar"
            cx="22"
            cy="22"
            r={radius}
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: offset,
            }}
          />
        </svg>

        <MdKeyboardArrowUp />
      </div>

      <a
        href="https://wa.me/+917012584203"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsappWidget"
      >
        <FaWhatsapp />
      </a>
    </>
  );
};

export default WhatsappWidget;
