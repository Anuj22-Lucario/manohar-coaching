import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Parent of Class 10 Student',
    rating: 5,
    text: 'Sir teaches very well and makes every topic easy to understand. My son\u2019s confidence has improved so much since joining here. The regular tests keep him on track.',
    initial: 'A',
  },
  {
    name: 'Class 12 Commerce Student',
    rating: 5,
    text: 'Patient while clearing doubts and motivates students to do better. The accounts classes here are the best in Telibagh. Highly recommend to everyone.',
    initial: 'S',
  },
  {
    name: 'Parent of Class 12 Student',
    rating: 5,
    text: 'Small batch size means my daughter gets proper attention. The progress reports are detailed and help us understand where she needs to improve.',
    initial: 'R',
  },
  {
    name: 'Class 10 Board Student',
    rating: 5,
    text: 'The teaching method is very practical. Science and Maths feel so much easier now. Sir never moves on until everyone has understood the topic completely.',
    initial: 'P',
  },
  {
    name: 'Commerce Graduate',
    rating: 5,
    text: 'Best decision was joining here for Commerce. The faculty explains economics and accountancy with real examples that stick with you. Scored above 90% in boards.',
    initial: 'M',
  },
  {
    name: 'Parent of Board Exam Student',
    rating: 5,
    text: 'The weekly test series is exactly what my child needed. It prepared him well for the actual board exam pressure. Thank you Manohar Sir for the dedication.',
    initial: 'K',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-slate-950 py-20 sm:py-28">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-20 right-1/4 h-80 w-80 rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-xs font-semibold text-yellow-300 sm:text-sm">
              5.0 · 297+ Google Reviews
            </span>
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            What Parents & Students Say
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Real feedback from the families who trusted us with their academic
            journey.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/20 hover:bg-white/[0.07]"
            >
              <Quote className="mb-4 h-8 w-8 text-indigo-500/30" />

              <div className="mb-3 flex gap-0.5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-sm leading-relaxed text-slate-300">
                "{review.text}"
              </p>

              <div className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 text-sm font-bold text-white">
                  {review.initial}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {review.name}
                  </div>
                  <div className="text-xs text-slate-500">Verified Google Review</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
