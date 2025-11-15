"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappWidget = () => {
  return (
    <a
      href="https://wa.me/+917012584203"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsappWidget"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsappWidget;
