import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Septic Repair Giles County TN | Marberry Construction',
  description:
    'Septic repair in Giles County TN and Pulaski. Diagnosis and repair. Call 256-679-8665.',
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
    'Giles County TN', 'Pulaski TN', 'Elkton TN',
    'Minor Hill TN', 'Lynnville TN', 'Prospect TN',
    'Cornersville TN', 'Lawrenceburg TN',
  ],
};

const communities = [
  'Pulaski', 'Elkton', 'Minor Hill', 'Lynnville',
  'Prospect', 'Cornersville', 'Fayetteville', 'Lawrenceburg',
];

const warningSigns = [
  'Slow drains throughout the house',
  'Sewage smell inside or near the drain field',
  'Wet or soggy spots in the yard',
  'Gurgling sounds in pipes or toilets',
  'Sewage backup in tubs or sinks',
  'Unusually lush green grass over the drain field',
];

const faqItems = [
  {
    question: 'Do you repair septic systems in Giles County TN?',
    answer:
      'Yes. We serve Pulaski and all of Giles County for septic diagnosis and repair.',
  },
  {
    question: 'How much does septic repair cost in Giles County?',
    answer:
      'Component repairs run $500 to $3,000. Full replacement runs $6,000 to $15,000.',
  },
  {
    question: 'How quickly can you come out to Pulaski?',
    answer:
      'We can typically schedule within 2 to 3 business days for Giles County properties.',
  },
  {
    question: 'Can my drain field be restored in Giles County?',
    answer:
      'In some cases yes. Clay soil drain fields can sometimes be restored with aeration treatment. We assess before recommending replacement and tell you honestly what the system needs.',
  },
];

export default function SepticRepairGilesCountyPage() {
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
              SEPTIC REPAIR - GILES COUNTY, TN
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Septic Repair<br />in Giles County TN
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Septic system diagnosis, repair, and restoration for homes throughout Giles County and Pulaski Tennessee.
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
            Septic Repair Contractor in Giles County Tennessee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/septic/septic15.jpeg"
                alt="Septic repair Giles County Tennessee Pulaski"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Giles County has a significant number of homes with septic systems installed in the 1980s and 1990s that are now at or approaching the end of their design life. Systems that were properly maintained on well-draining soils can function for 30 to 40 years. Systems installed on heavier clay soils, undersized for the home they serve, or that have gone without maintenance often begin showing failure signs much sooner.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Clay-heavy soils are present in portions of Giles County, particularly at lower elevations and in areas with limited natural drainage. Clay soils absorb wastewater slowly, and a drain field that is functioning at capacity during dry conditions can fail quickly during wet Tennessee springs when the soil's absorption capacity drops to near zero. When the drain field saturates and cannot accept more wastewater, the system backs up toward the house.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Marberry Construction diagnoses and repairs septic systems throughout Pulaski and Giles County. We are based in Fayetteville, about 20 miles east, and can typically schedule a site visit within two to three business days for Giles County properties. We assess the full system before making any recommendation. If a repair will solve the problem, we tell you that. If the system is at end of life and replacement is the right call, we explain exactly why.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            A failing septic system does not improve on its own. The longer a failing system runs without intervention, the more the problem compounds. A cracked distribution box left unaddressed eventually collapses entirely. A partially failed drain field that is not addressed continues saturating until full replacement is the only option. Catching the problem early keeps repair costs lower and replacement off the table for longer.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Signs Your Septic Needs Repair in Giles County
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Most septic systems give clear warning signs before failure becomes a crisis. Homeowners often attribute early symptoms to other causes or put off calling because the situation seems manageable. By the time the situation cannot be ignored, the repair scope is typically larger and more expensive than it would have been at the first sign.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            If you are noticing any of the following signs at your Giles County property, schedule a site assessment before the problem worsens. Site assessments are free and we give you a written diagnosis before recommending any work.
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
            "Most Giles County septic failures give warning signs before they become emergencies. Do not ignore them."
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Septic Repair Costs in Giles County TN
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Septic repairs in the Giles County area typically run $500 to $3,000 for component-level fixes. That covers replacing damaged inlet or outlet baffles, repairing or replacing a distribution box, fixing a crushed lateral line, or addressing a specific mechanical issue. These are targeted repairs that resolve a defined problem in a system that is otherwise structurally sound.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Full system replacement in Giles County typically runs $6,000 to $15,000 for a conventional system. Alternative systems required on clay-heavy lots run higher. Site visits throughout Giles County are free and we provide written estimates before any work begins. You will have a clear picture of what your system needs and what it will cost before you commit to anything.
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
              Serving Pulaski and Surrounding Communities
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
