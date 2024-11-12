"use client";
import { RiWhatsappFill } from "react-icons/ri";

export default function WhatsappIcon() {
  const handlePesan = () => {
    const message = `Halo Admin dunia keramik`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=+6282157758174&text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="fixed right-3 md:right-5 bottom-20 md:bottom-5 z-50">
      <div
        onClick={handlePesan}
        className="cursor-pointer bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center rounded-full md:px-4 px-3 py-2 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl animate-pulse space-x-2"
      >
        <RiWhatsappFill className="text-white text-3xl animate-bounce" />
        <p className="text-sm font-semibold hidden md:block">Chat</p>
      </div>
    </div>
  );
}
