import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "08033706081";
const whatsappLink = `https://wa.me/234${whatsappNumber.slice(1)}`;

const WhatsAppFloatingButton = () => (
  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-[9999] bg-[#25D366] rounded-full shadow-lg p-3 flex items-center justify-center hover:bg-[#128C7E] transition-colors"
    aria-label="Chat on WhatsApp"
  >
    <FaWhatsapp className="w-[40px] h-[40px] text-white" />
  </a>
);

export default WhatsAppFloatingButton;
