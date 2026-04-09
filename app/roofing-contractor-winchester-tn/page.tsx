import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Roofing Contractor Winchester TN | Marberry Construction',
  description:
    'Metal roofing contractor in Winchester TN and Franklin County. Installation and replacement. Call 256-679-8665.',
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

const metalAdvantages = [
  'Lasts 40 to 70 years in Tennessee climate',
  'Lower insurance premiums in Franklin County',
  'Handles Tennessee ice dams and summer heat',
  'Energy efficient — reflects heat, lowers cooling bills',
  'No granule loss, no lifting, no cracking',
  'Increases home resale value',
];

const faqItems = [
  {
    question: 'Do you do roofing in Winchester TN?',
    answer:
      'Yes. Winchester and Franklin County is part of our regular service area.',
  },
  {
    question: 'How much does metal roofing cost in Franklin County?',
    answer:
      'Most projects run $12,000 to $35,000 depending on roof size and complexity.',
  },
  {
    question: 'How long does installation take?',
    answer: 'Most residential roofs complete in 2 to 5 days.',
  },
  {
    question: 'Do you replace shingle roofs with metal in Winchester?',
    answer:
      'Yes. Shingle to metal replacement is one of our most common projects in the Franklin County area.',
  },
];

export default function RoofingContractorWinchesterPage() {
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
            backgroundImage: 'url(/images/hero-roofing.jpeg)',
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
              ROOFING CONTRACTOR - WINCHESTER, TN
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Metal Roofing Contractor<br />in Winchester TN
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Metal roof installation and replacement for homes in Winchester and throughout Franklin County.
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
            Roofing Contractor Serving Winchester and Franklin County
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/hero-roofing.jpeg"
                alt="Metal roofing installation Winchester TN"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Marberry Construction installs and replaces metal roofing throughout Franklin County from our Fayetteville, Tennessee base, about 25 miles from Winchester. Metal roofing is our specialty, and Franklin County homeowners replacing aging shingle roofs are making the right call by making the switch. A metal roof installed correctly on a Winchester-area home will be the last roof that home ever needs.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Tennessee weather puts real stress on roofing. Franklin County sits in a zone where summer UV and heat cycles combine with winter ice storms, freeze-thaw damage, and severe spring thunderstorm seasons. Asphalt shingles handle the first several years reasonably well but begin to degrade visibly by year 10 to 12 in this climate. Granule loss, lifting tabs, and cracking around penetrations are the first signs. Active leaks and structural damage follow. Metal simply does not have those failure modes.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Winchester and the surrounding Franklin County communities have a mix of older homes with original shingle roofs that are well past their useful life and newer homes where owners are making proactive decisions about roofing before a failure forces the issue. Both are the right time to look at metal. We give free on-site estimates throughout Franklin County so you know exactly what the project will cost before committing.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            We install standing seam and corrugated metal roofing on residential homes. Standing seam is the premium option with concealed fasteners and a clean profile that works well on lower-pitch roofs. Corrugated is well-suited for steeper pitches and is a cost-effective, extremely durable choice. Both outperform shingles in every category that matters for Franklin County homeowners.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Why Winchester Homeowners Choose Metal Roofing
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            The decision to replace a shingle roof with metal comes down to long-term math. A shingle roof in Franklin County typically lasts 15 to 20 years before it needs replacement. In that same time, a correctly installed metal roof will not need replacement at all. Over a 40-year period, the homeowner who chose metal replaces their roof zero times. The homeowner who chose shingles replaces it twice, plus pays for multiple repair cycles along the way.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            In addition to the longevity advantage, metal roofing in Tennessee qualifies for lower insurance premiums with many carriers because of its impact and wind resistance ratings. Energy savings from reduced heat absorption add up over the Tennessee summer season. And the resale premium on a home with a quality metal roof is real in the Franklin County market, where buyers increasingly understand what they are looking at.
          </p>
          <h3 className="font-semibold text-navy text-lg mb-4">Why metal outperforms shingles near Winchester:</h3>
          <ul className="space-y-3">
            {metalAdvantages.map((item) => (
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
            &quot;Metal roofing costs more upfront. Over 40 years it costs far less. That is the math Winchester homeowners are running.&quot;
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Roof Replacement Costs in Winchester TN
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Corrugated metal roofing in the Winchester area typically runs $8 to $14 per square foot installed. Standing seam runs $14 to $22 per square foot depending on the profile and gauge. Both prices include tear-off of the existing roof, disposal, new underlayment, materials, and labor. Pitch, access complexity, and roof configuration all affect the final number.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Most homeowners in Franklin County replacing a shingle roof with metal spend between $12,000 and $35,000 for the complete project. A straightforward single-story home comes in on the lower end. A larger home with steep pitch, multiple valleys, or dormers comes in toward the higher end. We provide itemized written estimates throughout Franklin County at no charge so you know exactly what you are committing to before any work begins.
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
            <Link href="/roofing-contractor" className="text-skyblue font-semibold hover:underline">
              Learn more about our roofing services
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
