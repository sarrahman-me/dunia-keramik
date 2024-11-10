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
        className="cursor-pointer bg-gradient-to-br from-green-500 via-green-600 to-green-500 text-white space-x-2 flex items-center rounded-full md:p-2 md:px-4 p-2"
      >
        <RiWhatsappFill className="text-white text-3xl" />
        <p className="text-sm hidden md:block">Chat</p>
      </div>
    </div>
  );
}
