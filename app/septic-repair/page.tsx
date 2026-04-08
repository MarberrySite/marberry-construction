import type { Metadata } from 'next';
import { TriangleAlert } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Septic Repair in Fayetteville TN | Marberry Construction',
  description:
    'Septic system repair and drain field restoration in Fayetteville TN and surrounding counties. Call 256-679-8665.',
};

const schema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'GeneralContractor'],
  name: 'Marberry Construction LLC',
  telephone: '256-679-8665',
  email: 'marberryconstructionllc@gmail.com',
  url: 'https://marberryconstructionllc.com',
  license: 'TN #77673',
  areaServed: [
    'Fayetteville TN', 'Ardmore TN', 'Huntsville AL',
    'Madison County AL', 'Athens AL', 'Taft TN',
    'Giles County TN', 'Winchester TN',
  ],
};

const serviceAreas = [
  'Huntsville AL', 'Madison County AL', 'Athens AL',
  'Fayetteville TN', 'Ardmore TN', 'Taft TN',
  'Giles County TN', 'Winchester TN',
];

const warningSigns = [
  'Slow drains throughout the house',
  'Sewage smell inside or outside',
  'Wet or soggy spots in the yard',
  'Gurgling sounds in pipes',
  'Sewage backup in toilets or tubs',
  'Unusually green or lush grass over drain field',
];

const repairServices = [
  {
    title: 'Tank Pumping and Inspection',
    body: 'Routine pumping and full inspection to assess system health and identify issues early.',
  },
  {
    title: 'Drain Field Restoration',
    body: 'Aeration, bio-treatment, and repair work to restore failing drain fields where possible.',
  },
  {
    title: 'Baffle and Inlet Repair',
    body: 'Replacement of damaged baffles, inlet pipes, and outlet components.',
  },
  {
    title: 'Full System Replacement',
    body: 'When repair is not viable, we handle complete system removal and replacement.',
  },
];

const faqItems = [
  {
    question: 'How do I know if my septic is failing?',
    answer:
      'The most common signs are slow drains, sewage odors, soggy ground near the drain field, or sewage backup inside.',
  },
  {
    question: 'Can a failed drain field be repaired?',
    answer:
      'Sometimes yes. Aeration and bio-treatment can restore some drain fields. Others require replacement. We diagnose before recommending.',
  },
  {
    question: 'How quickly can you respond?',
    answer:
      'We serve the Fayetteville TN area and can typically schedule within 2 to 3 business days.',
  },
  {
    question: 'Do you service Alabama too?',
    answer:
      'Yes. We serve Madison County AL, Athens AL, and Huntsville AL in addition to our Tennessee service area.',
  },
];

export default function SepticRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-navy">
        <div
          className="absolute top-0 right-0 bottom-0 w-[50%]"
          style={{
            backgroundImage: 'url(/images/hero-septic-repair.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: '30% center',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, #1B2A4A 50%, transparent 50%)' }}
        />
        <div className="relative z-10 max-w-xl md:max-w-[50%] mx-4 md:mx-8 lg:mx-14 py-20">
          <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            SEPTIC REPAIR
          </p>
          <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
            Septic Problems<br />Solved Fast.
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-10">
            Repair, diagnosis, and restoration for failing septic systems across Southern Tennessee
            and Northern Alabama.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start mb-10">
            <a
              href="/contact"
              className="bg-gold text-navy font-semibold px-8 py-4 text-sm uppercase tracking-wide hover:bg-yellow-500 transition rounded-sm"
            >
              Get a Quote
            </a>
          </div>
          <div className="flex flex-wrap justify-start gap-8 text-white/50 text-sm">
            <span>TN Licensed #77673</span>
            <span>Insured &amp; Bonded</span>
            <span>Serving 8 Counties</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Septic Repair Services in Fayetteville TN and Surrounding Areas
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            A failing septic system is not something you can ignore. Left unaddressed, a failed drain field or cracked tank can contaminate groundwater, create health hazards on your property, and result in county violations. Marberry Construction diagnoses and repairs septic systems throughout Lincoln County, Giles County, Franklin County, and into Madison County and Limestone County in Alabama.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Septic systems in this region typically last 20 to 40 years with proper maintenance. Systems that were installed in the 1980s and 1990s are reaching the end of their design life. Heavy clay soils in parts of Lincoln County and Giles County can accelerate drain field failure, especially in systems that were undersized for the home or that have been stressed by high water usage or non-biodegradable materials being flushed.
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            Not every failing system needs a full replacement. In some cases, a clogged inlet baffle, a cracked distribution box, or a compacted drain field can be repaired or restored at a fraction of the cost of a new system. We always diagnose before we recommend. If a repair will solve the problem, we tell you that. If the system needs replacement, we tell you that too, along with a clear explanation of why.
          </p>
        </div>
      </section>

      {/* Section 1 — Warning Signs */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-skyblue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Know the Signs
          </p>
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Signs Your Septic Needs Repair
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            {warningSigns.map((sign) => (
              <div key={sign} className="flex items-start gap-3 bg-warmwhite rounded-lg p-4">
                <TriangleAlert className="text-gold flex-shrink-0 mt-0.5" size={20} />
                <span className="text-navy text-sm font-medium">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Repair Services */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-skyblue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            What We Fix
          </p>
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Repair Services We Provide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {repairServices.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 border border-slate-100"
              >
                <p className="font-semibold text-navy mb-2">{service.title}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair vs Replace */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            When to Repair vs. Replace Your Septic System
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            The decision to repair or replace comes down to the age of the system, the extent of the damage, and the soil conditions in your drain field. A system under 20 years old with a specific, isolated problem like a broken baffle or a single crushed line is usually a good candidate for repair. A system over 30 years old with widespread drain field failure, a cracked or collapsed tank, or repeated backup issues is typically more cost-effective to replace.
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            Septic repairs in our area typically run $500 to $3,000 for component-level fixes. A full system replacement runs $6,000 to $15,000 depending on lot conditions and system type. We give you a clear written estimate before any work begins so you can make an informed decision about repair versus replacement.
          </p>
        </div>
      </section>

      {/* Section 3 — Service Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-skyblue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Where We Work
          </p>
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Our Service Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="bg-navy/5 border border-navy/20 rounded-full px-6 py-2.5 text-navy text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — FAQ */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-skyblue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            FAQ
          </p>
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Common Questions
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA Banner */}
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
