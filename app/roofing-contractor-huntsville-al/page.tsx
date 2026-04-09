import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Roofing Contractor Near Huntsville AL | Marberry Construction',
  description:
    'Metal roofing contractor serving Huntsville AL and Madison County. Installation and replacement. Call 256-679-8665.',
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
  'Harvest', 'Meridianville', 'Madison City', 'Athens',
  'Toney', 'New Market', 'Hazel Green', 'Ardmore',
];

const metalAdvantages = [
  'Lasts 40 to 70 years vs 15 to 20 for shingles',
  'Rated for hurricane-grade winds common in Alabama storms',
  'Hail resistant — important in Northern Alabama',
  'Lower insurance premiums in many Alabama counties',
  'Energy efficient, reflects summer heat',
  'Increases resale value',
];

const faqItems = [
  {
    question: 'Do you do roofing work near Huntsville AL?',
    answer:
      'Yes. We serve Madison County, Limestone County, and the Huntsville metro including Harvest, Madison city, Meridianville, and Athens.',
  },
  {
    question: 'How much does a metal roof cost near Huntsville?',
    answer:
      'Most residential metal roof projects run $12,000 to $35,000 installed depending on roof size and complexity.',
  },
  {
    question: 'How long does roof installation take?',
    answer: 'Most residential roofs are complete in 2 to 5 days.',
  },
  {
    question: 'Do you offer free roofing estimates in Madison County?',
    answer:
      'Yes. We provide free on-site estimates throughout Madison County and surrounding areas.',
  },
];

export default function RoofingContractorHuntsvillePage() {
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
              ROOFING CONTRACTOR - HUNTSVILLE, AL
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Metal Roofing Contractor<br />Near Huntsville AL
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Metal roof installation and replacement for homes in Madison County and Northern Alabama.
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
            Roofing Services in Huntsville AL and Madison County
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/hero-roofing.jpeg"
                alt="Metal roofing installation near Huntsville AL"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Marberry Construction serves the Huntsville area from our base in Fayetteville, Tennessee, roughly 35 miles to the north. We install and replace metal roofing on residential homes throughout Madison County, Limestone County, and the Huntsville metro. Metal roofing is our specialty because it is the best long-term choice for this climate.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Alabama&apos;s climate is hard on roofing. Huntsville and Madison County see hot, humid summers, severe spring thunderstorms, occasional hail, and winter ice storms that stress asphalt shingles in ways most homeowners do not appreciate until their roof is failing at year 12 or 15. Metal roofing handles all of it without the cracking, lifting, and granule loss that shingles develop over time.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Metal roofing has grown significantly in popularity throughout the Huntsville area over the past decade. Homeowners who have watched neighbors replace shingle roofs twice in 25 years are making the switch. The higher upfront cost of metal is offset over time by lower maintenance, better storm performance, and reduced insurance premiums in many Alabama counties.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            We serve communities throughout the Huntsville metro including Harvest, Madison city, Meridianville, Athens, Toney, New Market, and Hazel Green. If your shingle roof is aging out or if you have had repeated leak or storm damage issues, a metal replacement is worth a serious look. We give honest assessments and free on-site estimates throughout our service area.
          </p>
        </div>
      </section>

      {/* Section 2 — Checklist */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Why Metal Roofing is the Right Choice Near Huntsville
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Shingle roofing in the Huntsville area typically lasts 15 to 20 years before it needs replacement. In that same time frame, a metal roof installed correctly will not need replacement at all. The Tennessee Valley climate, with its combination of intense summer UV, freeze-thaw cycles in winter, and severe storm seasons in spring and fall, accelerates wear on asphalt shingles faster than the manufacturer&apos;s rated lifespan suggests. Metal simply does not have those failure modes.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            We install standing seam and corrugated metal roofing on residential homes throughout the Huntsville area. Standing seam is the premium option with concealed fasteners and a clean profile suited for lower-pitch roofs. Corrugated is well-suited for higher-pitch applications and is a cost-effective, durable choice. Both profiles outperform shingles in every category that matters in Northern Alabama.
          </p>
          <h3 className="font-semibold text-navy text-lg mb-4">Why metal outperforms shingles near Huntsville:</h3>
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
            &quot;A metal roof installed correctly will outlast the house it is on. That is what we install near Huntsville.&quot;
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Roof Replacement Costs in the Huntsville AL Area
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Corrugated metal roofing in the Huntsville area typically runs $8 to $14 per square foot installed. Standing seam runs $14 to $22 per square foot depending on the profile and gauge of the metal. Both prices include tear-off of the existing roof, disposal, new underlayment, materials, and labor. Pitch, access complexity, and roof configuration all affect the final number.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Most homeowners in Madison County replacing a shingle roof with metal spend between $12,000 and $35,000 for the complete project. A single-story home with a straightforward roof line comes in on the lower end of that range. A larger home with steep pitch, multiple valleys, or dormers comes in higher. We provide itemized written estimates throughout Madison County at no charge so you know exactly what you are committing to before any work begins.
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
