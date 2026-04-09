import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Septic Repair Taft TN | Marberry Construction',
  description:
    'Septic repair in Taft TN and southern Lincoln County. Diagnosis and repair. Call 256-679-8665.',
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
    'Taft TN', 'Lincoln County TN', 'Fayetteville TN',
    'Ardmore TN', 'Flintville TN', 'Hazel Green AL',
    'Elkmont AL', 'Athens AL',
  ],
};

const communities = [
  'Taft', 'Fayetteville', 'Ardmore', 'Flintville',
  'Hazel Green', 'Elkmont', 'Athens AL', 'Huntsville AL',
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
    question: 'Do you repair septic systems in Taft TN?',
    answer:
      'Yes. Taft is in Lincoln County which is our home base for septic work. We serve the Taft area regularly.',
  },
  {
    question: 'How quickly can you come to Taft?',
    answer:
      'We are based in Fayetteville, less than 15 miles away. We can typically schedule within 1 to 2 business days for Taft area properties.',
  },
  {
    question: 'How much does septic repair cost near Taft TN?',
    answer:
      'Component repairs run $500 to $3,000. Full replacement runs $5,000 to $15,000 depending on system type and lot conditions.',
  },
  {
    question: 'Can a failing drain field near Taft be restored?',
    answer:
      'Sometimes yes. We assess before recommending replacement. Some drain fields can be restored with aeration or lateral repair. We tell you honestly what the system needs.',
  },
];

export default function SepticRepairTaftPage() {
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
              SEPTIC REPAIR - TAFT, TN
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Septic Repair<br />in Taft TN
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Septic system diagnosis, repair, and restoration for homes in Taft and southern Lincoln County Tennessee.
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
            Septic Repair in Taft TN and Southern Lincoln County
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/septic/septic21.jpeg"
                alt="Septic repair Taft TN southern Lincoln County"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Marberry Construction repairs and replaces septic systems throughout southern Lincoln County, including Taft and the surrounding communities. We are based in Fayetteville, less than 15 miles from Taft, which means we are not traveling in from a distant market when your system needs attention. For homeowners dealing with a failing or underperforming system, that proximity matters. Southern Lincoln County is home territory and septic work in the Taft area is part of our regular workload.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Many of the septic systems in southern Lincoln County near Taft were installed in the late 1980s through the 2000s as the rural residential market in this part of the county grew. Systems installed during that period are now 20 to 35 years old. Properly maintained systems in good soil conditions can reach that age with life remaining. Systems installed on marginal soils, undersized for the household, or without adequate maintenance begin showing stress well before the end of their design life.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Soil conditions near Taft vary considerably by property. Higher ground in the southern Lincoln County terrain tends toward better-draining soils. Lower elevations and properties with heavier clay content have historically had more drain field issues over time. We know the terrain in this area and we bring that context to every diagnosis. Understanding the soil conditions on a specific lot is part of accurately diagnosing why a system is failing and whether repair or replacement is the right answer.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            We assess the full system before recommending anything. If a targeted repair will resolve the problem, we tell you that and provide a written estimate for the repair work. If the system has reached end of life and replacement is the right call, we explain exactly why. We do not default to replacement recommendations when a repair can solve the problem. Homeowners in the Taft area deserve an honest assessment, not a sales pitch for the most expensive solution available.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Common Septic Problems Near Taft Tennessee
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Septic failures in the Taft area follow predictable patterns. Drain field saturation from clay-heavy soils is one of the most common causes of failure in southern Lincoln County. Aging concrete tank components, failed distribution boxes, and cracked inlet or outlet baffles are the most common mechanical failures. Both categories give warning signs before the situation becomes a full emergency.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Wet seasons in southern Lincoln County push even well-designed systems to capacity. Properties that have had their drain fields marginal for years may show no visible issues during dry summer months but back up or surface during heavy spring rain. If your system is only failing seasonally, that is still a failure that needs to be addressed before it becomes a year-round problem or causes environmental damage on your property.
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
            &quot;Taft is 15 minutes from our Fayetteville base. When you call, we can be there fast.&quot;
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Septic Repair Costs Near Taft TN
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Septic repairs in the Taft and southern Lincoln County area typically run $500 to $3,000 for component-level work. That covers replacing inlet or outlet baffles, repairing a cracked distribution box, fixing a damaged lateral line, or addressing a specific mechanical failure in a system that is otherwise structurally viable.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Full system replacement in Lincoln County typically runs $5,000 to $15,000 depending on system type and lot conditions. Alternative systems required on some southern Lincoln County properties due to soil conditions run toward the higher end of that range. Site visits throughout Taft and southern Lincoln County are free and we provide written estimates before any work begins. You will know exactly what the system needs and what it will cost before you commit to anything.
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
              Serving Taft and Surrounding Communities
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
