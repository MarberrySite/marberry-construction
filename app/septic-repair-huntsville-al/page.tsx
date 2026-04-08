import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Septic Repair Near Huntsville AL | Marberry Construction',
  description:
    'Septic repair and drain field restoration near Huntsville AL and Madison County. Licensed contractor. Call 256-679-8665.',
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
    'Huntsville AL', 'Madison County AL', 'Madison City AL',
    'Harvest AL', 'Meridianville AL', 'Toney AL',
    'New Market AL', 'Athens AL',
  ],
};

const communities = [
  'Harvest', 'Meridianville', 'Toney', 'New Market',
  'Madison City', 'Hazel Green', 'Athens', 'Ardmore',
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
    question: 'Do you do septic repair near Huntsville AL?',
    answer:
      'Yes. We serve Madison County and surrounding areas including Harvest, Meridianville, Toney, New Market, and Athens. We are based 35 miles north in Fayetteville, TN and work regularly throughout the Huntsville metro.',
  },
  {
    question: 'How do I know if my septic is failing in Madison County?',
    answer:
      'The most common signs are slow drains throughout the house, sewage odors inside or outside, soggy or unusually green grass over the drain field, or sewage backup in toilets and tubs.',
  },
  {
    question: 'Can you repair a failing drain field without full replacement?',
    answer:
      'Sometimes yes. Aeration and bio-treatment can restore some drain fields. Others require partial or full replacement. We always diagnose before we recommend, and we tell you honestly what the system needs.',
  },
  {
    question: 'How quickly can you respond near Huntsville?',
    answer:
      'We can typically schedule a site visit within 2 to 3 business days. For urgent situations, call us directly at 256-679-8665.',
  },
];

export default function SepticRepairHuntsvillePage() {
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
              SEPTIC REPAIR - HUNTSVILLE, AL
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Septic Repair<br />Near Huntsville AL
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Diagnosis, repair, and drain field restoration for failing septic systems in Madison County and Northern Alabama.
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

      {/* Section 1 — Inline Photo + Text */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-10">
            Septic Repair Contractor Serving Madison County Alabama
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/septic/septic8.jpeg"
                alt="Septic repair and diagnosis near Huntsville Alabama"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Madison County has a substantial number of septic systems installed in the 1980s and 1990s that are now at or approaching the end of their design life. Properties developed during that period throughout communities like Harvest, Meridianville, and New Market often have older conventional systems that were correctly installed at the time but are now showing the signs that come with age, heavy use, or poor soil conditions.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                A failing septic system is not something that resolves on its own. Left unaddressed, a cracked tank, a saturated drain field, or a collapsed distribution box will continue to worsen. The result is eventually sewage surfacing on your property, backup inside the home, and potential health department involvement. Catching the problem early and addressing it correctly is always less expensive than managing the consequences of a complete system failure.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Huntsville's growth has pushed residential development into rural Madison County at a rapid pace. A lot of that development happened quickly, and some of the septic systems installed during peak growth periods were undersized for the homes they serve or installed on lots with marginal soil conditions. Both situations accelerate the timeline to failure. We see systems in communities around Huntsville that are failing at year 15 or 20 because the system was never correctly sized for the household load it has been handling.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Red clay soils common throughout Madison County are hard on drain fields over time. Clay drains slowly, and a drain field that is working at the edge of its absorption capacity in good conditions can fail quickly during wet seasons or after years of cumulative saturation. When the drain field loses the ability to accept wastewater, the system backs up and sewage surfaces. Understanding soil conditions is as important to diagnosing a repair as understanding the mechanical state of the tank and distribution system.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            We diagnose before we recommend. There is no reason to replace a system that can be repaired, and there is no value in repairing a system that is genuinely at end of life. After a thorough site assessment, we give you an honest read on where your system stands and what it actually needs. That approach has built the reputation we have in this area, and it is how we intend to keep doing business.
          </p>
        </div>
      </section>

      {/* Section 2 — Warning Signs Checklist */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Signs Your Septic System Needs Attention in Madison County
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Septic systems rarely fail suddenly and without warning. Most systems give clear signals weeks or months before the problem becomes a crisis. The issue is that homeowners often attribute those signals to other causes or delay acting because the problem seems manageable. By the time the situation is undeniable, the repair scope and cost are typically larger than they would have been if addressed earlier.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            If you are seeing any of the following signs at your home in Madison County or the Huntsville area, call us for a site evaluation. We can usually schedule a visit within two to three business days and will give you a clear assessment of what you are dealing with.
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
            "We diagnose before we recommend. If a repair will solve it, we tell you that. If it needs replacement, we tell you that too."
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Septic Repair Costs Near Huntsville AL
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Septic repairs in the Madison County area typically run $500 to $3,000 for component-level fixes. That includes replacing inlet or outlet baffles, repairing or replacing a cracked distribution box, fixing a crushed lateral line, or addressing a specific mechanical failure in an aerobic system. These are targeted repairs that address a defined problem in an otherwise functional system.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Full system replacement in Madison County runs $6,000 to $15,000 for a conventional system. Alternative and aerobic systems, which are sometimes required on clay-heavy lots, run higher. The specific cost depends on the system size required for the home, the soil conditions on the lot, and whether any site work or access issues add complexity to the installation. We provide written estimates after the site assessment so you know what you are looking at before any work begins.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Site assessments in Madison County are free. We come out, evaluate the system, and give you a written diagnosis and written estimate before you commit to anything. There is no pressure, and if your system does not need work, we tell you that too.
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
              Serving Huntsville and Surrounding Communities
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
