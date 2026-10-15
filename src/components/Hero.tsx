import { Star, MessageCircle, BookOpen, MapPin, Users, TrendingUp } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/917985210352?text=' +
  encodeURIComponent("Hi, I'd like to enquire about courses at Manohar Coaching Classes.");

const stats = [
  { icon: Users, value: '500+', label: 'Students Taught' },
  { icon: TrendingUp, value: '95%', label: 'Score Above 75%' },
  { icon: Star, value: '5.0', label: 'Google Rating' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 pt-24 pb-16"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-blue-500/15 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left: Content */}
        <div className="text-center lg:text-left">
          {/* Trust badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-yellow-300 sm:text-sm">
              5.0 Rating · 297+ Google Reviews
            </span>
          </div>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Transforming Academic
            <br className="hidden sm:block" /> Potential into{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Top Results
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg lg:mx-0 mx-auto">
            Leading coaching institute in Telibagh, Lucknow for Class 10th,
            12th & Commerce batches. Personalized attention, expert faculty,
            and a proven track record of academic excellence.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-500/30 transition-all hover:shadow-indigo-500/50 hover:brightness-110 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
              Enquire on WhatsApp
            </a>
            <a
              href="#courses"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10 sm:w-auto"
            >
              <BookOpen className="h-5 w-5" />
              View Batches
            </a>
          </div>

          {/* Location pin */}
          <div className="mt-6 flex items-center justify-center gap-1.5 text-sm text-slate-500 lg:justify-start">
            <MapPin className="h-4 w-4 text-indigo-400" />
            <span>Telibagh, Lucknow · Open till 8:00 PM</span>
          </div>
        </div>

        {/* Right: Stats card */}
        <div className="relative hidden lg:block">
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
            {/* Glow */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-indigo-500/20 to-transparent" />

            <div className="relative">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/20">
                  <TrendingUp className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Our Track Record</h3>
                  <p className="text-sm text-slate-400">Results that speak for themselves</p>
                </div>
              </div>

              <div className="space-y-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between rounded-2xl border border-white/5 bg-slate-900/50 p-4 transition-colors hover:border-indigo-500/20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                        <stat.icon className="h-5 w-5 text-indigo-400" />
                      </div>
                      <span className="text-sm font-medium text-slate-300">
                        {stat.label}
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-blue-500/10 p-4 text-center">
                <p className="text-sm font-medium text-slate-300">
                  Admissions Open for 2026-27 Batch
                </p>
                <p className="mt-1 text-xs text-indigo-400">Limited seats · Small batches</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile stats */}
        <div className="grid grid-cols-3 gap-3 lg:hidden">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm"
            >
              <stat.icon className="mx-auto mb-2 h-5 w-5 text-indigo-400" />
              <div className="text-xl font-bold text-white">{stat.value}</div>
              <div className="mt-0.5 text-[10px] text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
