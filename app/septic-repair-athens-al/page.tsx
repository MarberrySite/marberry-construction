import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Septic Repair Athens AL | Marberry Construction',
  description:
    'Septic repair in Athens AL and Limestone County. Diagnosis and repair. Call 256-679-8665.',
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
    'Athens AL', 'Limestone County AL', 'Tanner AL',
    'Elkmont AL', 'Lester AL', 'Mooresville AL',
    'Ardmore AL', 'Huntsville AL',
  ],
};

const communities = [
  'Athens', 'Tanner', 'Elkmont', 'Lester',
  'Mooresville', 'Ardmore', 'Huntsville', 'Fayetteville TN',
];

const warningSigns = [
  'Slow drains throughout the house',
  'Sewage smell inside or outside near drain field',
  'Wet or soggy spots in the yard',
  'Gurgling sounds in pipes or toilets',
  'Sewage backup in tubs or sinks',
  'Unusually green grass over the drain field',
];

const faqItems = [
  {
    question: 'Do you repair septic systems in Athens AL?',
    answer:
      'Yes. We serve Athens and Limestone County for septic diagnosis and repair.',
  },
  {
    question: 'How much does repair cost in Limestone County?',
    answer:
      'Component repairs run $500 to $3,000. Full replacement runs $6,000 to $15,000.',
  },
  {
    question: 'How quickly can you come out to Athens?',
    answer:
      'We can typically schedule within 2 to 3 business days for Limestone County properties.',
  },
  {
    question: 'Can clay soil drain fields be restored in Athens?',
    answer:
      'Sometimes yes. We assess before recommending replacement. Some clay-impacted fields can be restored with aeration treatment. We tell you honestly what the system needs.',
  },
];

export default function SepticRepairAthensPage() {
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
              SEPTIC REPAIR - ATHENS, AL
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Septic Repair<br />in Athens AL
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Septic system diagnosis, repair, and restoration for homes in Athens and Limestone County Alabama.
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

      {/* Section 1 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-10">
            Septic Repair in Athens AL and Limestone County
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/septic/septic19.jpeg"
                alt="Septic repair Athens AL Limestone County Alabama"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Many older homes in Limestone County have septic systems installed in the 1980s and 1990s that are now at or approaching end of design life. Properties developed during those decades throughout the Athens area, Tanner, Elkmont, and the rural stretches between communities have aging systems that merit evaluation. Systems on clay-heavy soils that were marginally sized at installation are often showing stress well before the 30-year mark.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                The Athens area growth bringing new residential development to Limestone County also means newer systems on rural lots, some of which were installed in a hurry during peak growth periods. Systems sized and installed correctly will function well for decades. Systems that were rushed through permitting or installed without adequate soil assessment on clay-heavy lots often begin showing problems within the first 10 to 15 years.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Alabama clay soils are tough on drain fields over time. The Alabama red clay that characterizes much of Limestone County drains slowly under the best conditions. Over years of use, drain fields in clay-heavy soil accumulate biomat buildup that further reduces absorption capacity. Wet seasons push saturated clay soils past their capacity entirely, causing wastewater to surface in the yard or back up toward the house. Understanding how your soil affects system performance is the first step to diagnosing what is actually happening.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Marberry Construction diagnoses before recommending. We evaluate the full system before telling you what it needs. If a component repair will solve the problem, we tell you that and give you a written estimate for the repair. If the system is at end of life and replacement is the right answer, we explain exactly why so you can make an informed decision. We do not pressure replacement on systems that still have viable repair options.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Common Septic Problems in the Athens AL Area
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Septic failures in the Athens area follow predictable patterns. Clay soil drain field saturation is the most common cause of failure in Limestone County. Aging concrete tank components, failed distribution boxes, and cracked inlet or outlet baffles are the most common mechanical failures. Both categories give warning signs before the situation becomes a full emergency.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            If you are seeing any of the following signs at your Athens or Limestone County property, schedule a site assessment. The sooner you call, the more repair options remain available. Site assessments are free and we provide a written diagnosis before recommending any work.
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

      {/* Pull Quote */}
      <section className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-playfair text-2xl md:text-3xl font-bold text-white leading-relaxed italic">
            "We diagnose before we recommend in Athens and Limestone County. You get an honest assessment before any work begins."
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Septic Repair Costs in Athens AL
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Septic repairs in the Athens area typically run $500 to $3,000 for component-level fixes. That covers replacing inlet or outlet baffles, repairing a cracked distribution box, fixing a damaged lateral line, or addressing a specific mechanical failure. These are targeted repairs that resolve a defined problem in a system that is otherwise structurally viable.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Full system replacement in Limestone County typically runs $6,000 to $15,000 for a conventional system. Alternative systems required on clay-heavy lots run higher. Site visits throughout Limestone County are free and we provide written estimates before any work begins. You will have a clear picture of what your system needs and what it will cost before you commit to anything.
          </p>
        </div>
      </section>

      {/* Communities */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-skyblue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Where We Work
          </p>
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Serving These Communities
          </h2>
          <div className="bg-navy/5 border border-navy/10 rounded-xl p-8 mt-8 text-left">
            <h3 className="font-playfair text-2xl font-bold text-navy mb-4">
              Serving Athens and Surrounding Communities
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
