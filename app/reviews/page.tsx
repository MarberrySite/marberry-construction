import type { Metadata } from 'next';
import { Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reviews | Marberry Construction LLC Fayetteville TN',
  description:
    'Read reviews from Marberry Construction clients in Fayetteville TN and surrounding areas. Licensed contractor. Call 256-679-8665.',
};

const reviews = [
  {
    quote:
      'Brandon and his crew built our custom home in Lincoln County and we could not be happier. He was on site every single day and kept us informed every step of the way. The quality of the work speaks for itself.',
    name: 'James T.',
    location: 'Lincoln County TN',
  },
  {
    quote:
      'We had Marberry put a metal roof on our house in Fayetteville and the whole job was done in three days. Clean, professional, and the roof looks great. Would not hesitate to call them again.',
    name: 'Sarah M.',
    location: 'Fayetteville TN',
  },
  {
    quote:
      'They installed our septic system for our new build in Madison County. Pulled all the permits, handled everything, and were done ahead of schedule. Highly recommend.',
    name: 'David R.',
    location: 'Madison County AL',
  },
  {
    quote:
      'We added a garage and a bedroom to our home in Giles County. Marberry matched our existing exterior perfectly. You cannot tell where the old house ends and the addition begins.',
    name: 'Mike and Linda K.',
    location: 'Giles County TN',
  },
  {
    quote:
      'Called them about a failing septic system on a Friday. They were on site Monday morning. Diagnosed the problem, gave us a fair estimate, and had it fixed within the week.',
    name: 'Robert H.',
    location: 'Ardmore TN',
  },
  {
    quote:
      'Brandon built our dream home on our land near Huntsville. We had a specific vision and he executed it exactly. The attention to detail was impressive.',
    name: 'Ashley and Tom W.',
    location: 'Madison County AL',
  },
  {
    quote:
      'Our old shingle roof was leaking after a storm. Marberry replaced it with a standing seam metal roof. Best decision we ever made for the house.',
    name: 'Carol B.',
    location: 'Winchester TN',
  },
  {
    quote:
      'They handled our septic installation for a new construction build in Limestone County. Knew the Alabama permit process inside and out. Zero headaches.',
    name: 'Greg P.',
    location: 'Limestone County AL',
  },
  {
    quote:
      'We have used Marberry for two projects now — a room addition and a roof replacement. Same quality both times. That kind of consistency is hard to find in a contractor.',
    name: 'Patricia S.',
    location: 'Franklin County TN',
  },
  {
    quote:
      'Honest, skilled, and showed up when they said they would. In this industry that alone sets them apart. Our custom home in Lincoln County turned out better than we imagined.',
    name: 'Kevin and Dana F.',
    location: 'Lincoln County TN',
  },
];

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-navy">
        <div
          className="hidden md:block absolute top-0 right-0 bottom-0 w-[50%]"
          style={{
            backgroundImage: 'url(/images/hero.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: '30% center',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, #1B2A4A 50%, transparent 50%)' }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-24 w-full">
          <div className="max-w-[45%]">
            <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              WHAT OUR CLIENTS SAY
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Reviews and Testimonials
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Marberry Construction has served families across Southern Tennessee and Northern Alabama for years.
            </p>
            <div className="flex flex-wrap justify-start gap-8 text-white/50 text-sm">
              <span>TN Licensed #77673</span>
              <span>Insured &amp; Bonded</span>
              <span>Serving 8 Counties</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          {/* Star rating summary */}
          <div className="text-center mb-16">
            <p className="font-playfair text-6xl font-bold text-navy">5.0</p>
            <div className="flex justify-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={32} style={{ color: '#C9A84C', fill: '#C9A84C' }} />
              ))}
            </div>
            <p className="text-slate-500 mt-2">Based on Google Reviews</p>
            <a
              href="https://maps.google.com/maps?cid=7412957895984849123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-navy text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-navy/90 transition"
            >
              Read Our Google Reviews
            </a>
          </div>

          {/* Reviews grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} style={{ color: '#C9A84C', fill: '#C9A84C' }} />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <p className="font-semibold text-navy text-sm">{r.name}</p>
                <p className="text-slate-400 text-xs mt-0.5">{r.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a review */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-4">
            Leave Us a Review
          </h2>
          <p className="text-slate-600 mb-8">
            If Marberry Construction worked on your home, we would appreciate hearing about your experience.
          </p>
          <a
            href="https://maps.google.com/maps?cid=7412957895984849123"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-navy font-semibold px-10 py-4 text-sm uppercase tracking-wide rounded-sm hover:bg-yellow-500 transition inline-block"
          >
            LEAVE A GOOGLE REVIEW
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-center py-24 px-6">
        <h2 className="font-playfair text-4xl font-bold text-white mb-4">Ready to Start?</h2>
        <p className="text-white/60 text-lg mb-10">
          Call 256-679-8665 or request a free quote. We respond within 24 hours.
        </p>
        <a
          href="/contact"
          className="inline-block bg-gold text-navy font-semibold px-10 py-4 text-sm uppercase tracking-wide hover:bg-yellow-500 transition rounded-sm"
        >
          GET A FREE QUOTE
        </a>
      </section>
    </>
  );
}
