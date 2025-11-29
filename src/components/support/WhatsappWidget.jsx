// "use client";
// import React, { useEffect, useState } from "react";
// import { FaWhatsapp } from "react-icons/fa";
// import { MdKeyboardArrowUp } from "react-icons/md";

// const WhatsappWidget = () => {
//   const [showScroll, setShowScroll] = useState(false);
//   const [scrollPercent, setScrollPercent] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const docHeight =
//         document.documentElement.scrollHeight -
//         document.documentElement.clientHeight;

//       const scrolled = (scrollTop / docHeight) * 100;
//       setScrollPercent(scrolled);

//       setShowScroll(scrollTop > 200);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   const radius = 18;
//   const circumference = 2 * Math.PI * radius;
//   const offset = circumference - (scrollPercent / 100) * circumference;

//   return (
//     <>
//       <div
//         className={`scrollTopBtn ${showScroll ? "show" : ""}`}
//         onClick={scrollToTop}
//       >
//         <svg className="progressRing" width="44" height="44">
//           <circle
//             className="progressBg"
//             cx="22"
//             cy="22"
//             r={radius}
//           />
//           <circle
//             className="progressBar"
//             cx="22"
//             cy="22"
//             r={radius}
//             style={{
//               strokeDasharray: circumference,
//               strokeDashoffset: offset,
//             }}
//           />
//         </svg>

//         <MdKeyboardArrowUp />
//       </div>

//       <a
//         href="https://wa.me/+917012584203"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="whatsappWidget"
//       >
//         <FaWhatsapp />
//       </a>
//     </>
//   );
// };

// export default WhatsappWidget;


"use client";
import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaTimes } from "react-icons/fa"; // Imported FaPhoneAlt and FaTimes
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
const WhatsappWidget = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu

  // Scroll Progress Logic
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollPercent / 100) * circumference;

  return (
    <>
      {/* Scroll To Top Button */}
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

      {/* Floating Widget Container */}
      <div className="floatingWidgetContainer">
        
        {/* Expanded Options (Call & WhatsApp) */}
        <div className={`widgetOptions ${isOpen ? "open" : ""}`}>
          
          {/* Call Option */}
          <a href="tel:+917012584203" className="actionBtn">
            <span className="icon">
              <FaPhoneAlt />
            </span>
            <span className="text">Call Now</span>
          </a>

          {/* WhatsApp Option */}
          <a
            href="https://wa.me/+917012584203"
            target="_blank"
            rel="noopener noreferrer"
            className="actionBtn"
          >
            <span className="icon">
              <FaWhatsapp />
            </span>
            <span className="text">WhatsApp Me</span>
          </a>
        </div>

        {/* Main Toggle Button */}
        <div className={`whatsappMainBtn ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
          {isOpen ? <IoCloseSharp  /> : <FaWhatsapp />}
        </div>
      </div>
    </>
  );
};

export default WhatsappWidget;