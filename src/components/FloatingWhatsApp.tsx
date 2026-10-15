import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/917985210352?text=' +
  encodeURIComponent("Hi, I'd like to enquire about courses at Manohar Coaching Classes.");

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-xl shadow-green-500/30 transition-all hover:scale-110 hover:shadow-green-500/50 sm:bottom-6 sm:right-6"
    >
      {/* Pulse ring */}
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400/40 opacity-75" />

      <MessageCircle className="relative h-6 w-6 text-white" />
    </a>
  );
}
