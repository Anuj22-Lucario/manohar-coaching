import { UserCheck, Lightbulb, ClipboardCheck, Users } from 'lucide-react';

const features = [
  {
    icon: UserCheck,
    title: 'Experienced & Patient Faculty',
    description:
      'Learn from qualified teachers with years of experience who take the time to ensure every student truly understands the concepts.',
  },
  {
    icon: Lightbulb,
    title: 'Simplified & Practical Teaching',
    description:
      'Complex topics broken down into simple, relatable explanations with real-world examples that make learning intuitive and enjoyable.',
  },
  {
    icon: ClipboardCheck,
    title: 'Weekly Tests & Progress Reports',
    description:
      'Regular test series aligned with board exam patterns, plus detailed progress reports shared with parents to track improvement.',
  },
  {
    icon: Users,
    title: 'Small Batches & 1-on-1 Doubt Resolution',
    description:
      'Limited students per batch ensures personal attention. Dedicated doubt-clearing sessions so no question goes unanswered.',
  },
];

export default function Highlights() {
  return (
    <section id="why-us" className="relative bg-slate-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Built for Student Success
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Everything we do is focused on one goal — helping students achieve
            their best possible academic results.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-indigo-500/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />
              </div>

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/10 ring-1 ring-indigo-500/20 transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="h-6 w-6 text-indigo-400" strokeWidth={2} />
              </div>

              <h3 className="mb-2.5 text-base font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
