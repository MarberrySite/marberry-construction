import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Roofing Contractor Giles County TN | Marberry Construction',
  description:
    'Metal roofing contractor in Giles County TN and Pulaski. Installation and replacement. Call 256-679-8665.',
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
    'Giles County TN', 'Pulaski TN', 'Elkton TN',
    'Minor Hill TN', 'Lynnville TN', 'Prospect TN',
    'Cornersville TN', 'Lawrenceburg TN',
  ],
};

const communities = [
  'Pulaski', 'Elkton', 'Minor Hill', 'Lynnville',
  'Prospect', 'Cornersville', 'Fayetteville', 'Lawrenceburg',
];

const metalAdvantages = [
  'Lasts 40 to 70 years vs 15 to 20 for shingles',
  'Lower insurance premiums in Giles County',
  'Handles Tennessee ice dams and summer heat',
  'Energy efficient — reflects heat, lowers cooling bills',
  'No granule loss, lifting, or cracking',
  'Increases home resale value',
];

const faqItems = [
  {
    question: 'Do you do roofing in Giles County TN?',
    answer:
      'Yes. Giles County and Pulaski are regular parts of our service area.',
  },
  {
    question: 'How much does metal roofing cost in Giles County?',
    answer:
      'Most projects run $12,000 to $35,000 depending on roof size and complexity.',
  },
  {
    question: 'How long does installation take?',
    answer: 'Most residential roofs complete in 2 to 5 days.',
  },
  {
    question: 'Do you replace shingle roofs with metal in Pulaski TN?',
    answer:
      'Yes. Shingle to metal replacement is one of our most common projects in the Giles County area.',
  },
];

export default function RoofingContractorGilesCountyPage() {
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
              ROOFING CONTRACTOR - GILES COUNTY, TN
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Metal Roofing Contractor<br />in Giles County TN
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Metal roof installation and replacement for homes throughout Giles County and the Pulaski Tennessee area.
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
            Roofing Contractor Serving Giles County and Pulaski TN
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/hero-roofing.jpeg"
                alt="Metal roofing installation Giles County TN Pulaski"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Marberry Construction installs and replaces metal roofing throughout Giles County from our Fayetteville, Tennessee base about 20 miles to the east. Metal roofing is our specialty, and Giles County homeowners with aging shingle roofs are making the right call when they choose to switch. A correctly installed metal roof on a Giles County home will be the last roof that home ever needs.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Tennessee climate is hard on roofing. Giles County sees hot, humid summers with intense UV that degrades asphalt binder, cold winters with ice events that work under lifted tabs, and spring and fall storm seasons with hail and high winds. Asphalt shingles in this climate typically begin showing visible degradation by year 10 to 12 and need replacement by year 15 to 20. Metal does not have those failure modes. It handles ice, heat, wind, and UV without the cracking, granule loss, and tab lifting that end shingle roof life.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Giles County has a significant number of homes with shingle roofs that are approaching or past the point where replacement is the right decision. Many of these homeowners replaced shingles once already and are ready to make a different choice the second time. Metal roofing&apos;s higher upfront cost is offset over time by zero maintenance, better storm performance, and lower insurance premiums. Over a 40-year horizon, the homeowner who chose metal replaces their roof zero times.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            We install standing seam and corrugated metal roofing on residential homes throughout Giles County and Pulaski. Standing seam has concealed fasteners and a clean profile well-suited to lower-pitch roofs. Corrugated is extremely durable, cost-effective, and works well on steeper pitches common to older Giles County homes. Both options outperform shingles by a wide margin in this climate.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Why Giles County Homeowners Choose Metal Roofing
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            The case for metal roofing in Giles County is straightforward once you run the numbers. A shingle roof in Middle Tennessee lasts 15 to 20 years. Over a 40-year period, the homeowner replaces it twice, pays for multiple rounds of repair work between replacements, and deals with the disruption and cost each time. A metal roof installed correctly during that same 40-year period requires none of that. The higher upfront cost of metal is recovered well within the first replacement cycle, and the second replacement cycle never happens.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Insurance premium savings add to the math. Many Tennessee carriers offer discounts for metal roofing because of its impact resistance and wind ratings. Those savings accumulate year over year. Combined with reduced cooling costs from heat reflection and the resale premium that a quality metal roof carries in the Giles County market, the total value equation for metal is clear.
          </p>
          <h3 className="font-semibold text-navy text-lg mb-4">Why metal outperforms shingles in Giles County:</h3>
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
            &quot;Giles County homeowners who switch to metal never go back to shingles. The math is clear over a 40-year horizon.&quot;
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Roof Replacement Costs in Giles County TN
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Corrugated metal roofing in the Giles County area typically runs $8 to $14 per square foot installed. Standing seam runs $14 to $22 per square foot depending on the profile and gauge. Both prices include tear-off of the existing roof, disposal, new underlayment, materials, and labor. Pitch, access complexity, and roof configuration all affect the final number.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Most homeowners in Giles County replacing a shingle roof with metal spend between $12,000 and $35,000 for the complete project. A straightforward single-story home comes in toward the lower end. A larger home with steep pitch, multiple valleys, or dormers comes in toward the higher end. We provide itemized written estimates throughout Giles County and the Pulaski area at no charge so you know exactly what you are committing to before any work begins.
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
