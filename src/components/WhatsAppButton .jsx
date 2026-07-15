// components/WhatsAppButton.jsx

"use client";

import { MessageCircleCheck } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "+13073818900"; 
  const message = "Hello, I want to know more.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`}
      target="_blank"
      rel="noopener noreferrer"
       aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600"
    >
      <MessageCircleCheck className="h-8 w-8" />
    </a>
  );
};

export default WhatsAppButton;