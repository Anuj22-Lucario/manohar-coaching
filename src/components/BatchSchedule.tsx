import { Sun, Sunset, Clock, Users, GraduationCap, BookOpen, Briefcase, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = (batch: string) =>
  'https://wa.me/917985210352?text=' +
  encodeURIComponent(`Hi, I'd like to join the ${batch} at Manohar Coaching Classes.`);

type Batch = {
  id: string;
  label: string;
  time: string;
  icon: typeof Sun;
  iconColor: string;
  iconBg: string;
  forWhom: string;
  subjects: string[];
  days: string;
  seatsLeft: number;
};

const batches: Batch[] = [
  {
    id: 'morning',
    label: 'Morning Batch',
    time: '7:00 AM — 10:00 AM',
    icon: Sun,
    iconColor: 'text-amber-400',
    iconBg: 'from-amber-500/20 to-amber-600/10',
    forWhom: 'Board Students (Class 10th & 12th)',
    subjects: ['Physics', 'Chemistry', 'Maths', 'Biology', 'Science', 'SST'],
    days: 'Mon — Sat',
    seatsLeft: 4,
  },
  {
    id: 'evening',
    label: 'Evening Batch',
    time: '4:00 PM — 7:00 PM',
    icon: Sunset,
    iconColor: 'text-indigo-400',
    iconBg: 'from-indigo-500/20 to-indigo-600/10',
    forWhom: 'Foundation & Commerce Students',
    subjects: ['Accountancy', 'Business Studies', 'Economics', 'Maths', 'Science'],
    days: 'Mon — Sat',
    seatsLeft: 6,
  },
];

export default function BatchSchedule() {
  return (
    <section id="courses" className="relative bg-slate-900 py-20 sm:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
            Batch Schedule & Timings
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Find Your Perfect Time Slot
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Two convenient batch timings designed around students' school
            schedules. Small batches ensure every student gets personal
            attention.
          </p>
        </div>

        {/* Batch cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {batches.map((batch) => (
            <div
              key={batch.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/50 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              {/* Top glow line */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="p-8 lg:p-10">
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${batch.iconBg} ring-1 ring-white/10 transition-transform group-hover:scale-105`}>
                      <batch.icon className={`h-7 w-7 ${batch.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{batch.label}</h3>
                      <p className="text-sm text-slate-400">{batch.forWhom}</p>
                    </div>
                  </div>
                </div>

                {/* Time */}
                <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-5 py-4">
                  <Clock className="h-5 w-5 text-indigo-400" />
                  <div className="flex flex-1 items-center justify-between">
                    <span className="text-sm font-medium text-slate-300">Timings</span>
                    <span className="text-lg font-bold text-white">{batch.time}</span>
                  </div>
                </div>

                {/* Info grid */}
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      <Users className="h-3.5 w-3.5" />
                      Days
                    </div>
                    <div className="mt-1.5 text-sm font-semibold text-white">{batch.days}</div>
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      <Users className="h-3.5 w-3.5" />
                      Seats Left
                    </div>
                    <div className="mt-1.5 flex items-center gap-2">
                      <span className="text-sm font-semibold text-white">{batch.seatsLeft}</span>
                      <span className="rounded-full bg-amber-400/15 px-2 py-0.5 text-[10px] font-semibold text-amber-300">
                        Filling Fast
                      </span>
                    </div>
                  </div>
                </div>

                {/* Subjects */}
                <div className="mt-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Subjects Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {batch.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={WHATSAPP_URL(batch.label)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40 hover:brightness-110"
                >
                  <MessageCircle className="h-4 w-4" />
                  Join This Batch
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
          <Clock className="h-4 w-4 text-indigo-400" />
          <span>Special Sunday doubt-clearing sessions for all batch students</span>
        </div>
      </div>
    </section>
  );
}
