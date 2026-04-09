import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Custom Home Builder Ardmore TN | Marberry Construction',
  description:
    'Custom home builder in Ardmore TN. Build on your lot on the Tennessee-Alabama border. Licensed contractor. Call 256-679-8665.',
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

const buildIncludes = [
  'Custom floor plans for your specific lot',
  'Permit management in Lincoln County TN or Limestone County AL depending on your property location',
  'Site preparation and foundation work',
  'Full build from framing through finish',
  'Metal or shingle roofing',
  'Workmanship warranty',
];

const faqItems = [
  {
    question: 'Do you build in Ardmore TN?',
    answer:
      'Yes. Ardmore is one of our core service areas. We build on both the Tennessee and Alabama sides of the state line.',
  },
  {
    question: 'Which county permits apply in Ardmore?',
    answer:
      'Ardmore straddles Lincoln County TN and Limestone County AL. We handle permits on both sides depending on where your property sits.',
  },
  {
    question: 'How far is Marberry from Ardmore?',
    answer:
      'We are based in Fayetteville TN, about 20 miles from Ardmore. We work in this area regularly.',
  },
  {
    question: 'Is Ardmore a good place to build a custom home?',
    answer:
      'Yes. Land is more affordable than Madison County and you are still within commuting distance of Huntsville. It is a strong value play for custom home buyers.',
  },
];

export default function CustomHomeBuilderArdmorePage() {
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
            backgroundImage: 'url(/images/hero-custom.jpeg)',
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
              CUSTOM HOME BUILDER - ARDMORE, TN
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Custom Home Builder<br />in Ardmore TN
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Building custom homes on your lot in Ardmore and along the Tennessee-Alabama border.
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
            Custom Home Construction in Ardmore Tennessee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/custom-homes/home8.jpeg"
                alt="Custom home built in Ardmore TN by Marberry Construction"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Ardmore sits directly on the Tennessee-Alabama state line, giving it a unique position in the region. The community straddles Lincoln County, Tennessee and Limestone County, Alabama, which means residents on one side of town are in a different state from neighbors a few streets away. For Marberry Construction, this is home territory. We are based 20 miles north in Fayetteville, TN and have been working in and around Ardmore for years on both sides of the line.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                The Ardmore area has become increasingly attractive for families who want to live within commuting distance of Huntsville without paying Madison County land prices. Limestone County and Lincoln County land is more affordable, and the drive into Huntsville is manageable for workers at Redstone Arsenal, Cummings Research Park, and the broader Huntsville employment corridor. That combination of proximity and affordability has driven demand for custom home sites in this area.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Most families building near Ardmore want land. Acreage lots in Lincoln County and Limestone County are available at prices that would not buy a quarter-acre subdivision lot inside Huntsville city limits. That land value, combined with a custom floor plan and everything new, gives Ardmore-area buyers something that production builders in the Huntsville metro simply cannot offer at any price point.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Brandon Marberry oversees every build personally from the first site visit through the final walkthrough. You will not be handed off to a project manager you have never met. Marberry Construction is a family business and we work that way on every project, regardless of location.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Building on Your Lot Near Ardmore TN
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Building near Ardmore requires working with the permit process in either Lincoln County, Tennessee or Limestone County, Alabama, depending on which side of the state line your property sits. We are experienced with both systems. For Tennessee-side properties, new construction goes through the Lincoln County Building Department and any rural lot without sewer access requires a septic permit through the Lincoln County Health Department. For Alabama-side properties, the process runs through the Limestone County Building Department and the Alabama Department of Public Health for septic.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            We identify which permit process applies to your lot at the start of the project and manage the entire submission. You do not need to figure out which side of the line you are on or which agency has jurisdiction. That clarity at the outset prevents schedule problems and confusion once construction is underway.
          </p>
          <h3 className="font-semibold text-navy text-lg mb-4">What we handle on every build:</h3>
          <ul className="space-y-3">
            {buildIncludes.map((item) => (
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
            &quot;Ardmore is where Tennessee meets Alabama. We build on both sides and know both permit systems.&quot;
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Custom Home Costs in the Ardmore TN Area
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Custom homes in the Ardmore area typically run $175 to $275 per square foot depending on finish level, lot conditions, and design complexity. Total project budgets typically range from $300,000 to $1,100,000 not including land. Most clients in this area are in the $350,000 to $600,000 range for a full custom build. We provide a detailed line-item estimate before any work begins.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Land near Ardmore remains significantly more affordable than comparable acreage in Madison County, Alabama. For families who need Huntsville proximity but cannot justify Madison County land prices, the Ardmore area makes a strong financial case. A custom build here delivers acreage, a home built specifically for the way you live, and total project costs that are competitive with production homes in Huntsville subdivisions that give you none of those things.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Serving Ardmore and Surrounding Communities
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            We serve the full Ardmore community and the surrounding areas on both sides of the state line. That includes Elkmont and Tanner to the south in Limestone County, Athens further into Alabama, and the rural areas of Lincoln County to the north. Hazel Green, across the line in Madison County, is also part of our regular service area.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Marberry Construction&apos;s dual-state licensure and experience on both sides of the TN-AL border is a genuine advantage for Ardmore-area clients. We have pulled permits in both Lincoln County and Limestone County and know how the processes differ. When your property is in a border community, working with a contractor who knows both systems saves time and prevents the permit delays that contractors unfamiliar with the area routinely encounter.
          </p>
        </div>
      </section>

      {/* Communities */}
      <section className="py-24 bg-white">
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
      <section className="py-24 bg-warmwhite">
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
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-slate-600 text-base">
            <Link href="/custom-home-builder" className="text-skyblue font-semibold hover:underline">
              Learn more about our custom home construction services
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
