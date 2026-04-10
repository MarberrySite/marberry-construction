import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Septic Repair Fayetteville TN | Marberry Construction',
  description:
    'Septic repair and drain field restoration in Fayetteville TN and Lincoln County. Licensed contractor. Call 256-679-8665.',
};

const schema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'GeneralContractor'],
  name: 'Marberry Construction LLC',
  telephone: '256-679-8665',
  email: 'brandon@marberryconstructionllc.com',
  url: 'https://marberryconstructionllc.com',
  license: 'TN #77673',
  areaServed: [
    'Fayetteville TN', 'Ardmore TN', 'Huntsville AL',
    'Madison County AL', 'Athens AL', 'Taft TN',
    'Giles County TN', 'Winchester TN',
  ],
};


const communities = [
  'Fayetteville', 'Flintville', 'Petersburg', 'Kelso',
  'Elora', 'Taft', 'Ardmore', 'Hazel Green',
];

const warningSigns = [
  'Slow drains throughout the house',
  'Sewage smell inside or near the drain field',
  'Soggy or wet spots in the yard',
  'Gurgling sounds in pipes or toilets',
  'Sewage backup in tubs or sinks',
  'Unusually lush green grass over the drain field',
];

const faqItems = [
  {
    question: 'Do you do septic repair in Fayetteville TN?',
    answer:
      'Yes. Fayetteville and Lincoln County is our primary service area. We diagnose and repair failing septic systems throughout the county.',
  },
  {
    question: 'How do I know if my septic is failing in Lincoln County?',
    answer:
      'The most common signs are slow drains throughout the house, sewage odors inside or outside, soggy or unusually green grass over the drain field, or sewage backup in toilets and tubs.',
  },
  {
    question: 'Can you repair a failing drain field without full replacement?',
    answer:
      'Sometimes yes. Aeration and bio-treatment can restore some drain fields. Others require partial or full replacement. We always diagnose before we recommend, and we tell you honestly what the system needs.',
  },
  {
    question: 'How quickly can you respond in Lincoln County?',
    answer:
      'We are based in Fayetteville and can typically schedule a site visit within 2 to 3 business days. For urgent situations, call us directly at 256-679-8665.',
  },
];

export default function SepticRepairFayettevillePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-navy">
        <div
          className="hidden md:block absolute top-0 right-0 bottom-0 w-[50%]"
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
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-24 w-full">
          <div className="max-w-[45%]">
          <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            SEPTIC REPAIR - FAYETTEVILLE, TN
          </p>
          <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
            Septic Repair in Fayetteville TN
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-10">
            Diagnosis, repair, and drain field restoration for failing septic systems in Fayetteville and throughout Lincoln County, Tennessee.
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
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center gap-2">
              <CheckCircle size={32} className="text-gold" />
              <p className="font-playfair text-2xl font-bold text-navy">280+</p>
              <p className="text-slate-500 text-sm">Projects Completed</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Shield size={32} className="text-gold" />
              <p className="font-playfair text-2xl font-bold text-navy">Licensed</p>
              <p className="text-slate-500 text-sm">TN &amp; AL</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Phone size={32} className="text-gold" />
              <p className="font-playfair text-2xl font-bold text-navy">24 Hour</p>
              <p className="text-slate-500 text-sm">Response Time</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Star size={32} className="text-gold" />
              <p className="font-playfair text-2xl font-bold text-navy">Local</p>
              <p className="text-slate-500 text-sm">Family Business</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 — text + warning signs checklist */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Septic Repair Contractor Serving Fayetteville and Lincoln County
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Marberry Construction diagnoses and repairs septic systems throughout Fayetteville and Lincoln County, Tennessee. A failing septic system is not something that improves on its own. Left unaddressed, a cracked tank, a failed drain field, or a damaged distribution box will get worse and can result in groundwater contamination, health department violations, and sewage surfacing on your property. We respond quickly, diagnose accurately, and recommend only what your system actually needs.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Lincoln County has a significant number of septic systems installed in the 1970s, 1980s, and 1990s that are now at or past the end of their design life. Systems that were properly sized and maintained can last 30 to 40 years. Systems that were undersized for the home, that have received poor maintenance, or that were installed in heavy clay soils without adequate drain field area often show signs of failure earlier. If your home was built before 2000 and you have never had a full system evaluation, it is worth having the system looked at before a problem forces the issue.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Clay-heavy soils are common in parts of Lincoln County, particularly in lower elevations and areas with poor natural drainage. Clay soils can cause drain fields to become saturated and lose absorption capacity over time, even in systems that were correctly sized at installation. When the drain field is saturated, wastewater has nowhere to go and begins backing up into the house or surfacing in the yard.
          </p>
          <h3 className="font-semibold text-navy text-lg mb-4">Warning signs your septic needs attention:</h3>
          <ul className="space-y-3">
            {warningSigns.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-skyblue mt-1 shrink-0" />
                <span className="text-slate-600 text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 2 — Inline Photo + Text */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-10">
            Repair vs. Replacement for Lincoln County Septic Systems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/septic/septic7.jpeg"
                alt="Septic repair and diagnosis Fayetteville TN"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Not every failing septic system needs full replacement. The right answer depends on the age of the system, the nature of the problem, and the soil conditions in your drain field. A system under 20 years old with a specific, isolated issue like a broken inlet baffle, a cracked distribution box, or a single crushed lateral line is usually a good candidate for repair.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                A system that is 30 or more years old with widespread drain field failure, a collapsed or severely cracked concrete tank, or a pattern of repeated backups and slow drains is typically more cost-effective to replace. Continuing to repair a system that is at end of life creates ongoing cost without solving the underlying problem. We give you an honest read on where your system stands.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Septic repairs in the Fayetteville area typically run $500 to $3,000 for component-level fixes. A full system replacement in Lincoln County runs $6,000 to $15,000 depending on the size of the system required and the site conditions. We provide written estimates before any work begins so you know exactly what you are committing to.
          </p>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-playfair text-2xl md:text-3xl font-bold text-white leading-relaxed italic">
            &quot;We diagnose before we recommend. If a repair will solve it, we tell you that.&quot;
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            What to Expect When You Call for Septic Repair in Lincoln County
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            When you call us about a septic problem in Fayetteville or Lincoln County, we schedule a site visit to assess the system. We look at the tank condition, the distribution box, the inlet and outlet baffles, and the drain field area. We ask about the history of the system, how long the symptoms have been present, and any prior repairs. Most of the time, a thorough site visit gives us a clear picture of what is causing the problem and what the repair options are.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            After the assessment, we give you a written diagnosis and written estimate before any work begins. We explain what we found, what we recommend, and why. You will not be pressured into a full replacement if a repair will solve the problem. And if the system genuinely needs replacement, we will explain exactly why so you can make an informed decision.
          </p>
        </div>
      </section>

      {/* Communities + Service Areas */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-skyblue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Where We Work
          </p>
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Our Service Areas
          </h2>
          <div className="bg-navy/5 border border-navy/10 rounded-xl p-8 mt-8 text-left">
            <h3 className="font-playfair text-2xl font-bold text-navy mb-4">
              Serving Fayetteville and Surrounding Communities
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {communities.map((c) => (
                <div key={c} className="bg-white border border-navy/10 rounded-lg p-3 text-center">
                  <span className="text-navy text-sm font-medium">{c}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
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

      {/* Internal Link */}
      <section className="py-12 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-slate-600 text-base">
            <Link href="/septic-repair" className="text-skyblue font-semibold hover:underline">
              Learn more about our septic repair services
            </Link>
          </p>
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
