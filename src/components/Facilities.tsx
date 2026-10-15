import { Monitor, ClipboardCheck, MessageSquare, FileBarChart, Sparkles } from 'lucide-react';

const facilities = [
  {
    icon: Monitor,
    title: 'Smart Digital Classrooms',
    description:
      'Modern, tech-enabled classrooms with digital teaching aids that make complex concepts visual, interactive, and easy to grasp.',
  },
  {
    icon: ClipboardCheck,
    title: 'Weekly Mock Test Series',
    description:
      'Regular mock tests designed around actual board exam patterns, helping students build exam temperament and time management skills.',
  },
  {
    icon: MessageSquare,
    title: 'Individual Doubt Resolution',
    description:
      'Dedicated 1-on-1 doubt-clearing sessions where no question is too small. Every student gets the personal attention they deserve.',
  },
  {
    icon: FileBarChart,
    title: 'Regular Performance Reports',
    description:
      'Detailed progress reports shared with parents after every test, keeping them informed about attendance, scores, and improvement areas.',
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="relative bg-slate-950 py-20 sm:py-28">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 right-1/4 h-80 w-80 rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-indigo-400">
            <Sparkles className="h-3.5 w-3.5" />
            Special Coaching Facilities
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Everything Students Need to Excel
          </h2>
          <p className="mt-4 text-base text-slate-400">
            From smart classrooms to personalized doubt resolution, our
            facilities are designed to give every student the best possible
            learning experience.
          </p>
        </div>

        {/* Facilities grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-indigo-500/10"
            >
              {/* Glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />
              </div>

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/10 ring-1 ring-indigo-500/20 transition-transform duration-300 group-hover:scale-110">
                <facility.icon className="h-6 w-6 text-indigo-400" strokeWidth={2} />
              </div>

              <h3 className="mb-2.5 text-base font-semibold text-white">
                {facility.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
