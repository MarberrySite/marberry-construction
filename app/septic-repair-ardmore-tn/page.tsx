import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Septic Repair Ardmore TN | Marberry Construction',
  description:
    'Septic repair in Ardmore TN on both sides of the TN-AL border. Diagnosis and repair. Call 256-679-8665.',
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
    'Ardmore TN', 'Ardmore AL', 'Elkmont AL',
    'Tanner AL', 'Fayetteville TN', 'Athens AL',
    'Hazel Green AL', 'Limestone County AL',
  ],
};

const communities = [
  'Ardmore TN', 'Ardmore AL', 'Elkmont', 'Tanner',
  'Fayetteville', 'Athens AL', 'Hazel Green', 'Limestone County',
];

const warningSigns = [
  'Slow drains throughout the house',
  'Sewage smell inside or near the drain field',
  'Soggy spots in the yard',
  'Gurgling sounds in pipes',
  'Sewage backup in tubs or sinks',
  'Lush green grass over drain field',
];

const faqItems = [
  {
    question: 'Do you repair septic in Ardmore TN?',
    answer:
      'Yes. We serve Ardmore and surrounding communities on both sides of the state line.',
  },
  {
    question: 'How much does repair cost in Ardmore?',
    answer:
      'Component repairs run $500 to $3,000. Replacement runs $6,000 to $15,000.',
  },
  {
    question: 'How quickly can you come out?',
    answer:
      'We can typically schedule within 1 to 2 business days for the Ardmore area. It is close to our Fayetteville TN base.',
  },
  {
    question: 'Do you work on the Alabama side of Ardmore?',
    answer:
      'Yes. We are licensed in Alabama and work on both sides of the Ardmore community.',
  },
];

export default function SepticRepairArdmorePage() {
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
              SEPTIC REPAIR - ARDMORE, TN
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Septic Repair<br />in Ardmore TN
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Septic system diagnosis and repair for homes in Ardmore on both sides of the Tennessee-Alabama border.
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
            Septic Repair in Ardmore TN and Limestone County AL
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/septic/septic13.jpeg"
                alt="Septic repair Ardmore TN Tennessee Alabama border"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Many homes in the Ardmore area were built several decades ago, and the septic systems installed alongside them are now aging toward or past the end of their design life. The border region&apos;s mix of soil types means performance varies widely from property to property. Systems installed on well-draining lots can function for 30 to 40 years with proper maintenance. Systems on clay-heavy ground or that were undersized from the start often show failure signs much earlier.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Marberry Construction serves both sides of the Ardmore community for septic repair and replacement. We are based 20 miles north in Fayetteville and can reach most Ardmore properties within one to two business days for a site assessment. We diagnose the system before making any recommendation, and we are direct about what we find. If a repair will solve the problem, we say so. If replacement is the right call, we explain why.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            The border position of Ardmore creates one practical complication for septic repair work: replacement permits on the Tennessee side run through Lincoln County and the state TDEC process, while Alabama-side replacements require Limestone County Health Department approval under Alabama Department of Public Health standards. Both systems have different timelines and requirements. We handle both and have done so on properties throughout the area. You do not need to sort out which state&apos;s process applies to your property.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            A failing septic system does not improve on its own. Catching it early when a targeted repair is still viable is always less expensive than allowing the situation to worsen to the point where full replacement is the only option. If you have noticed any of the typical warning signs at your Ardmore property, call us to schedule a site visit.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Common Septic Problems in the Ardmore Area
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Septic system failure in the Ardmore area follows the same patterns seen throughout the Tennessee Valley. Aging tank components, drain field saturation from clay-heavy soils, and systems that were originally undersized for the home they serve are the most common causes. The good news is that most failing systems give warning signs well before the situation becomes an emergency.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            If you are seeing any of the following at your Ardmore property, schedule a site assessment. Early action keeps repair options open and costs lower.
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
            &quot;Early diagnosis in Ardmore saves thousands. We tell you what is wrong before recommending what to do about it.&quot;
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Septic Repair Costs in Ardmore TN
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Component-level repairs in the Ardmore area typically run $500 to $3,000. That covers replacing baffles, repairing a distribution box, fixing a crushed lateral line, or addressing a specific mechanical issue in an aerobic system. Full replacement runs $6,000 to $15,000 for a conventional system and higher for alternative designs required by soil conditions.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Site assessments in the Ardmore area are free. We come out, evaluate the system, and give you a written diagnosis and written estimate before any work begins. You will not be given a phone estimate or a generic number before anyone has looked at your system.
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
              Serving Ardmore and Surrounding Communities
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
