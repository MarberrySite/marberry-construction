import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Roofing Contractor Taft TN | Marberry Construction',
  description:
    'Metal roofing contractor in Taft TN and southern Lincoln County. Installation and replacement. Call 256-679-8665.',
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

const metalAdvantages = [
  '40 to 70 year lifespan vs 15 to 20 for shingles',
  'Lower insurance premiums in Lincoln County',
  'Handles Tennessee ice dams and summer heat',
  'Energy efficient, reflects heat, lowers cooling bills',
  'No granule loss, lifting, or cracking over time',
  'Increases home resale value',
];

const faqItems = [
  {
    question: 'Do you do roofing in Taft TN?',
    answer:
      'Yes. Taft is in Lincoln County which is our primary service area.',
  },
  {
    question: 'How much does metal roofing cost near Taft?',
    answer:
      'Most projects run $12,000 to $35,000 depending on roof size and complexity.',
  },
  {
    question: 'How long does installation take?',
    answer: 'Most residential roofs complete in 2 to 5 days.',
  },
  {
    question: 'Do you replace shingle roofs with metal near Taft?',
    answer:
      'Yes. Shingle to metal replacement is one of our most common projects in Lincoln County.',
  },
];

export default function RoofingContractorTaftPage() {
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
              ROOFING CONTRACTOR - TAFT, TN
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Metal Roofing Contractor<br />in Taft TN
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Metal roof installation and replacement for homes in Taft and throughout southern Lincoln County Tennessee.
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
            Roofing Services in Taft TN and Southern Lincoln County
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/hero-roofing.jpeg"
                alt="Metal roofing Taft TN southern Lincoln County"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Marberry Construction installs metal roofing throughout Lincoln County from our Fayetteville base, less than 15 miles from Taft. Southern Lincoln County is home territory for us, and roofing projects in the Taft area are part of our regular workload. Metal roofing is our specialty and the right long-term choice for homes in this climate regardless of which side of the state line they sit on.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Tennessee weather is hard on roofing in ways that compound over years. Southern Lincoln County sees the same combination of hot, humid summers that degrade asphalt binder, winter ice events that get under lifted shingle tabs, and severe spring and fall storm seasons with wind and hail that characterize the rest of the Tennessee Valley. Homes in the Taft area with shingle roofs 15 years or older are at or approaching the point where replacement is the right call. Choosing metal at that point avoids the replacement cycle entirely for the next 40 to 70 years.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Most homes in the Taft area with shingle roofs that have been in place for more than a decade are showing the early signs of degradation, whether the homeowner is aware of it or not. Granule accumulation in gutters, visible lifting at tabs, minor soft spots in the sheathing behind penetrations, and fading color are all indicators that the roof's effective life is shortening. Metal replacement at that stage prevents the leak cycles and repair costs that occupy the last 5 to 8 years of a shingle roof's life.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            We give free on-site estimates throughout southern Lincoln County and the Taft area. We assess the current roof condition, give an honest read on its remaining useful life, and provide a detailed written estimate for metal replacement so you know exactly what the project will cost before committing.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Why Taft Area Homeowners Choose Metal Roofing
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            The case for metal roofing in the Taft area is the same as it is throughout the rest of Lincoln County and the Tennessee Valley. A shingle roof installed today will need replacement in 15 to 20 years. The homeowner who installs metal today replaces it zero times in the next 40 to 70 years. Over that horizon, the higher upfront cost of metal is recovered entirely within the first replacement cycle that the metal roof avoids, with additional savings from lower maintenance costs and insurance premium reductions stacking year over year.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            We install standing seam and corrugated metal roofing depending on the application and the homeowner's preference. Standing seam has concealed fasteners and a clean, modern profile that works well on lower-pitch roofs. Corrugated is extremely durable, cost-effective, and well-suited for the steeper roof pitches common on older homes throughout the southern Lincoln County area.
          </p>
          <h3 className="font-semibold text-navy text-lg mb-4">Why metal outperforms shingles near Taft:</h3>
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
            "A metal roof on a Taft area home will outlast the mortgage. That is the investment homeowners are making."
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Roof Replacement Costs Near Taft TN
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Corrugated metal roofing in the Taft and southern Lincoln County area typically runs $8 to $14 per square foot installed. Standing seam runs $14 to $22 per square foot depending on the profile and gauge. Both prices include tear-off of the existing roof, disposal, new underlayment, materials, and labor. Pitch, access, and roof complexity all affect the final number.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Most homeowners in southern Lincoln County replacing a shingle roof with metal spend between $12,000 and $35,000 for the complete project. We provide itemized written estimates throughout Taft and Lincoln County at no charge so you know exactly what you are committing to before any work begins.
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
