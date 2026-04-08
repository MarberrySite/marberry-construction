import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Roofing Contractor Ardmore TN | Marberry Construction',
  description:
    'Metal roofing contractor in Ardmore TN. Installation and replacement on both sides of the TN-AL state line. Call 256-679-8665.',
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
    'Ardmore TN', 'Ardmore AL', 'Elkmont AL',
    'Tanner AL', 'Fayetteville TN', 'Athens AL',
    'Hazel Green AL', 'Limestone County AL',
  ],
};

const communities = [
  'Ardmore TN', 'Ardmore AL', 'Elkmont', 'Tanner',
  'Fayetteville', 'Athens AL', 'Hazel Green', 'Limestone County',
];

const metalAdvantages = [
  '40 to 70 year lifespan',
  'Wind and hail rated for Southern storm seasons',
  'Lower insurance premiums',
  'Energy efficient in hot Alabama-Tennessee summers',
  'No maintenance issues common with shingles',
  'Increases property value',
];

const faqItems = [
  {
    question: 'Do you do roofing in Ardmore TN?',
    answer:
      'Yes. We serve Ardmore and surrounding communities on both sides of the state line.',
  },
  {
    question: 'How much does a metal roof cost in Ardmore?',
    answer:
      'Most projects run $12,000 to $35,000 depending on roof size and material selection.',
  },
  {
    question: 'How long does installation take?',
    answer: 'Most residential roofs complete in 2 to 5 days.',
  },
  {
    question: 'Do you serve both the TN and AL sides of Ardmore?',
    answer:
      'Yes. We are licensed in both Tennessee and Alabama and serve the full Ardmore community.',
  },
];

export default function RoofingContractorArdmorePage() {
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
              ROOFING CONTRACTOR - ARDMORE, TN
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Metal Roofing Contractor<br />in Ardmore TN
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Metal roof installation and replacement for homes in Ardmore and along the Tennessee-Alabama border.
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
            Roofing Services in Ardmore TN and Surrounding Area
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/hero-roofing.jpeg"
                alt="Metal roofing Ardmore TN and Tennessee Alabama border"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Marberry Construction serves the Ardmore area from our Fayetteville, Tennessee base, about 20 miles to the north. That proximity means we are one of the closest roofing contractors operating in the area with a full metal roofing specialty. We install and replace metal roofing on residential homes throughout the Ardmore community on both sides of the state line.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Metal roofing is the right choice for homes in this climate. The border region between Tennessee and Alabama sees the same combination of summer heat, severe spring storms, hail events, and winter ice that affects roofing performance throughout the Tennessee Valley. Asphalt shingles in this climate typically last 15 to 20 years before they need replacement. A metal roof installed correctly will not need replacement at all. That is the practical case for metal, and it is why homeowners throughout the Ardmore area are making the switch.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            We give free on-site estimates throughout the Ardmore area. For homeowners whose shingle roof is aging out or who have experienced repeated storm damage, we provide an honest assessment and a detailed written estimate so you know exactly what the project will cost before committing.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Why Ardmore Homeowners Choose Metal Roofing
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Homeowners who have replaced a shingle roof once are often ready to move to metal the second time. The experience of dealing with leaks, storm damage, and the cost and disruption of replacement makes the case for metal in a way that no sales pitch ever does. A metal roof costs more at installation and costs nothing for the next 40 to 70 years. That is the core value proposition, and Ardmore homeowners who understand their climate understand why it makes sense.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            We install standing seam and corrugated metal roofing depending on the application. Standing seam is the premium option with concealed fasteners and a clean, modern profile. Corrugated is a highly durable, cost-effective choice for steeper-pitch applications. Both options significantly outperform shingles in the conditions common to the Ardmore area.
          </p>
          <h3 className="font-semibold text-navy text-lg mb-4">Why metal outperforms shingles in Ardmore:</h3>
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
            "One roof for the life of your home. That is what metal roofing delivers in the Ardmore area."
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Roofing Costs in Ardmore TN
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Corrugated metal roofing in the Ardmore area typically runs $8 to $14 per square foot installed. Standing seam runs $14 to $22 per square foot depending on the profile and gauge. Both prices include tear-off, disposal, new underlayment, materials, and labor. Pitch, access, and roof configuration all affect the final number.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Most homeowners in the Ardmore area replacing a shingle roof with metal spend between $12,000 and $35,000 for the complete project. We provide itemized written estimates at no charge so you know exactly what you are committing to before any work begins.
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
