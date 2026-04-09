import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Septic Repair Madison County AL | Marberry Construction',
  description:
    'Septic repair in Madison County AL. Diagnosis and repair for Harvest, Meridianville, New Market, Toney, and surrounding areas. Call 256-679-8665.',
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
    'Madison County AL', 'Harvest AL', 'Meridianville AL',
    'New Market AL', 'Toney AL', 'Hazel Green AL',
    'Gurley AL', 'Huntsville AL', 'Ardmore TN',
  ],
};

const communities = [
  'Harvest', 'Meridianville', 'New Market', 'Toney',
  'Hazel Green', 'Gurley', 'Huntsville', 'Ardmore',
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
    question: 'Do you repair septic systems in rural Madison County AL?',
    answer:
      'Yes. We serve unincorporated Madison County including Harvest, Meridianville, New Market, Toney, Hazel Green, and Gurley.',
  },
  {
    question: 'How much does septic repair cost in Madison County?',
    answer:
      'Component repairs run $500 to $3,000. Full replacement runs $6,000 to $18,000 depending on system type and lot conditions.',
  },
  {
    question: 'How quickly can you come out to Madison County?',
    answer:
      'We can typically schedule within 2 to 3 business days for rural Madison County properties.',
  },
  {
    question: 'Is clay soil drain field failure common in Madison County?',
    answer:
      'Yes. Madison County red clay drain fields are among the most common repair calls we receive in northern Alabama. We assess every system before recommending repair or replacement.',
  },
];

export default function SepticRepairMadisonCountyPage() {
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
              SEPTIC REPAIR - MADISON COUNTY, AL
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Septic Repair<br />in Madison County AL
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Septic system diagnosis, repair, and restoration for homes throughout rural Madison County Alabama.
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
            Septic Repair Throughout Unincorporated Madison County Alabama
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/septic/septic23.jpeg"
                alt="Septic repair Madison County Alabama"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Marberry Construction repairs and replaces septic systems throughout rural Madison County. We are based just across the Tennessee state line in Fayetteville and serve the communities of Harvest, Meridianville, New Market, Toney, Hazel Green, and Gurley as part of our regular northern Alabama workload. Our Alabama license covers all the work we do on this side of the state line and we are familiar with the ADPH requirements that apply to septic repair and replacement in Alabama.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Many of the septic systems serving rural homes across unincorporated Madison County were installed during the residential growth periods of the 1990s and early 2000s. Systems from those eras are now 20 to 30 years old. Some are holding up well. Others, particularly those installed on clay-heavy lots without adequate soil assessment or with marginal drain field sizing, have been showing stress for years and are approaching the point where repair options are running out.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Madison County red clay is the single biggest factor in drain field failures across this area. Alabama&apos;s red clay drains slowly under the best conditions. Over years of use, drain fields in clay-dominant soil accumulate biomat buildup that further reduces already limited absorption capacity. Wet seasons push clay soils to saturation, causing wastewater to surface or back up toward the house. Properties that have been in this condition for years without diagnosis have fewer repair options than properties where problems are caught early.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            We diagnose before recommending. Every site assessment includes a full system evaluation before we tell you what it needs. If a targeted repair will resolve the problem, we provide a written estimate for that repair. If the system is at end of life and replacement is the right answer, we explain exactly why. We do not recommend replacement on systems that still have viable repair options.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Common Septic Problems in Madison County Alabama
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Drain field failure from clay soil saturation is the most common septic problem in rural Madison County. It is also one of the most misdiagnosed. Homeowners who call a pump service and have their tank pumped regularly but still experience backups and slow drains are often dealing with a drain field problem, not a tank problem. Pumping the tank does not restore a saturated drain field. Accurate diagnosis of which part of the system is failing is what determines whether repair or replacement is the right path.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Mechanical failures are equally common on older systems throughout the area. Cracked concrete distribution boxes, failed inlet and outlet baffles, and damaged lateral lines are all repairable when caught before they compound into larger system failures. If you are seeing any of the following warning signs, schedule a site assessment. The earlier the diagnosis, the more options remain available.
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
            &quot;Madison County red clay is hard on drain fields. We know what to look for and we fix it right.&quot;
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Septic Repair Costs in Madison County AL
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Component-level septic repairs in rural Madison County typically run $500 to $3,000. That covers replacing baffles, repairing a cracked distribution box, fixing damaged lateral lines, or addressing other targeted mechanical failures in systems that are otherwise structurally sound.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Full system replacement in Madison County typically runs $6,000 to $18,000 depending on system type and lot conditions. Alternative systems required on clay-heavy lots with limited natural drainage run toward the higher end of that range. Site visits throughout unincorporated Madison County are free and we provide written estimates before any work begins. You will have a clear picture of what your system needs and what it will cost before committing to anything.
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
              Serving Madison County and Surrounding Communities
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
