import { MapPin, Phone, Clock, GraduationCap, MessageCircle, Navigation, Instagram, Facebook, Youtube } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/917985210352?text=' +
  encodeURIComponent("Hi, I'd like to enquire about courses at Manohar Coaching Classes.");

const MAPS_DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=' +
  encodeURIComponent('Manohar Coaching Classes, Telibagh, Lucknow 226002');

const MAPS_EMBED_URL =
  'https://www.google.com/maps?q=' +
  encodeURIComponent('591 IYA/554, Baldev Vihar, Telibagh, Lucknow 226002') +
  '&output=embed';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: '591 IYA/554, near Durga Mandir Road, Baldev Vihar, Telibagh, Lucknow — 226002',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 79852 10352',
    href: 'tel:+917985210352',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Open Daily till 8:00 PM',
  },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-slate-900 pt-20">
      {/* Top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Contact + Map */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: contact info */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-lg shadow-indigo-500/30">
                <GraduationCap className="h-6 w-6 text-white" strokeWidth={2.2} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Manohar Coaching Classes
                </h3>
                <p className="text-sm text-indigo-400">Telibagh, Lucknow</p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
              A trusted coaching institute dedicated to helping students in
              Telibagh achieve academic excellence through personalized
              teaching and consistent support.
            </p>

            <div className="mt-8 space-y-5">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <info.icon className="h-5 w-5 text-indigo-400" />
                  </div>
                  <div className="pt-1">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="mt-0.5 block text-sm font-medium text-slate-200 transition-colors hover:text-indigo-400"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="mt-0.5 text-sm font-medium text-slate-200">
                        {info.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40 hover:brightness-110"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-white/25 hover:bg-white/10"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </div>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-indigo-500/30 hover:text-indigo-400"
                >
                  <social.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Google Map */}
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Manohar Coaching Classes Location"
              src={MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ minHeight: '400px', border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Manohar Coaching Classes. All rights reserved.
            </p>
            <p className="text-xs text-slate-500">
              Made with dedication for students in Telibagh, Lucknow
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
