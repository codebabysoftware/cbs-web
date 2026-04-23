// src/components/common/FloatingContactButtons.jsx

import { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

const FloatingContactButtons = () => {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      // hide while scrolling down
      if (current > lastScroll && current > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, [lastScroll]);

  return (
    <div
      className={`fixed bottom-4 right-3 sm:bottom-5 sm:right-4 md:bottom-6 md:right-6 z-[999] transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >

      <div className="flex flex-col gap-3">

        {/* ======================================
            WHATSAPP
        ====================================== */}
        <a
          href="https://wa.me/918073369741?text=Hi%20Codebaby%20Software,%20I%20want%20more%20details."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-500 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 animate-[pulseWhatsapp_3s_infinite]"
        >
          <FaWhatsapp className="text-xl sm:text-2xl md:text-3xl" />

          {/* Tooltip Desktop */}
          <span className="hidden md:block absolute right-20 whitespace-nowrap bg-slate-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>

        {/* ======================================
            CALL
        ====================================== */}
        <a
          href="tel:+918073369741"
          aria-label="Call Now"
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-blue-600 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 animate-[pulseCall_3.4s_infinite]"
        >
          <FaPhoneAlt className="text-lg sm:text-xl md:text-2xl" />

          {/* Tooltip Desktop */}
          <span className="hidden md:block absolute right-20 whitespace-nowrap bg-slate-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition pointer-events-none">
            Call Now
          </span>
        </a>

      </div>

      {/* ======================================
          CSS
      ====================================== */}
      <style>
        {`
          @keyframes pulseWhatsapp {
            0% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(34,197,94,0.40);
            }

            70% {
              transform: scale(1.04);
              box-shadow: 0 0 0 14px rgba(34,197,94,0);
            }

            100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(34,197,94,0);
            }
          }

          @keyframes pulseCall {
            0% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(37,99,235,0.35);
            }

            70% {
              transform: scale(1.04);
              box-shadow: 0 0 0 14px rgba(37,99,235,0);
            }

            100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(37,99,235,0);
            }
          }
        `}
      </style>

    </div>
  );
};

export default FloatingContactButtons;