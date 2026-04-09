import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Septic Repair Winchester TN | Marberry Construction',
  description:
    'Septic repair in Winchester TN and Franklin County. Diagnosis and repair. Call 256-679-8665.',
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
    'Winchester TN', 'Franklin County TN', 'Estill Springs TN',
    'Decherd TN', 'Cowan TN', 'Huntland TN',
    'Belvidere TN', 'Tullahoma TN',
  ],
};

const communities = [
  'Winchester', 'Estill Springs', 'Decherd', 'Cowan',
  'Huntland', 'Belvidere', 'Fayetteville', 'Tullahoma',
];

const warningSigns = [
  'Slow drains throughout the house',
  'Sewage smell inside or near the drain field',
  'Wet or soggy spots in the yard',
  'Gurgling sounds in pipes or toilets',
  'Sewage backup in tubs or sinks',
  'Lush green grass over the drain field area',
];

const faqItems = [
  {
    question: 'Do you repair septic systems in Winchester TN?',
    answer:
      'Yes. We serve Winchester and Franklin County for septic diagnosis and repair.',
  },
  {
    question: 'How much does septic repair cost in Franklin County?',
    answer:
      'Component repairs run $500 to $3,000. Full replacement runs $6,000 to $15,000.',
  },
  {
    question: 'How quickly can you come out to Winchester?',
    answer:
      'We can typically schedule within 2 to 3 business days for Franklin County properties.',
  },
  {
    question: 'Can my drain field be restored?',
    answer:
      'In some cases yes. We assess before recommending replacement. Some fields can be restored with aeration or bio-treatment. We tell you honestly what the system needs.',
  },
];

export default function SepticRepairWinchesterPage() {
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
              SEPTIC REPAIR - WINCHESTER, TN
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Septic Repair<br />in Winchester TN
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Septic system diagnosis, repair, and restoration for homes in Winchester and Franklin County.
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
            Septic Repair Contractor in Franklin County Tennessee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/septic/septic10.jpeg"
                alt="Septic repair Franklin County Tennessee"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Franklin County has a significant number of homes with septic systems installed in the 1970s, 1980s, and 1990s that are now at or past the end of their design life. Systems that were properly sized and maintained can last 30 to 40 years. Systems installed on marginal soil, undersized for the home they serve, or neglected over the years often show signs of failure well before that. If your home was built before 2000 and you have never had a full system assessment, it is worth having the system evaluated before a failure forces the issue.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Soil conditions in the Winchester area affect how long septic systems last. The mix of limestone-based and clay-heavy soils in Franklin County means drain field performance varies significantly from lot to lot. Properties with good drainage can maintain functional systems well past their design life. Properties where clay dominates the drain field zone can see premature saturation and failure, particularly during wet seasons when the soil&apos;s absorption capacity is already at its limit.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            A failing septic system does not resolve on its own. Left unaddressed, a cracked tank, a saturated drain field, or a failed distribution box will continue to worsen until sewage surfaces on the property or backs up into the home. The cost of addressing a system early when a targeted repair is still an option is always lower than the cost of managing a full system failure after the fact.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Marberry Construction diagnoses before recommending. We look at the full system before telling you what it needs. If a repair will solve the problem, we tell you that and give you a written estimate for the repair. If the system is at end of life and replacement is the right call, we explain exactly why so you can make an informed decision. We do not push replacement on systems that still have viable repair options.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Signs Your Septic System Needs Attention in Winchester
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Most septic systems give clear signals weeks or months before the situation becomes a crisis. Homeowners often attribute these warning signs to other causes or delay acting because the problem seems manageable. By the time the situation is undeniable, the repair scope is typically larger and more expensive than it would have been if addressed at the first sign.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            If you are seeing any of the following signs at your Winchester or Franklin County property, call us to schedule a site evaluation. We assess the system thoroughly and give you a clear picture of what is happening before recommending any work.
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
            &quot;A failing septic system in Franklin County does not fix itself. Early diagnosis saves thousands compared to emergency replacement.&quot;
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Septic Repair Costs in Winchester TN
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Septic repairs in the Winchester area typically run $500 to $3,000 for component-level fixes. That includes replacing damaged baffles, repairing a cracked distribution box, fixing a crushed lateral line, or addressing a specific mechanical failure in an aerobic system. These are targeted repairs that solve a defined problem in an otherwise functional system.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Full system replacement in Franklin County typically runs $6,000 to $15,000 for a conventional system. Systems requiring an alternative design due to soil conditions will run higher. We provide written estimates after the site assessment. Site visits in Franklin County are free, and you will not be quoted from square footage tables without someone looking at your actual system first.
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
              Serving Winchester and Surrounding Communities
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
