"use client";

import { MessageCircle } from "lucide-react";

type WhatsAppButtonProps = {
  phone: string;
  message?: string;
  label?: string;
};

export default function WhatsAppButton({
  phone,
  message = "Hello, I would like to make an enquiry.",
  label = "Chat with us on WhatsApp",
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_35px_rgba(0,0,0,0.24)] sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <MessageCircle
        size={27}
        strokeWidth={2}
        aria-hidden="true"
      />

      <span className="sr-only">{label}</span>
    </a>
  );
}