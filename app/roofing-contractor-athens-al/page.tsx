import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Roofing Contractor Athens AL | Marberry Construction',
  description:
    'Metal roofing contractor in Athens AL and Limestone County. Installation and replacement. Call 256-679-8665.',
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
    'Athens AL', 'Limestone County AL', 'Tanner AL',
    'Elkmont AL', 'Lester AL', 'Mooresville AL',
    'Ardmore AL', 'Huntsville AL',
  ],
};

const communities = [
  'Athens', 'Tanner', 'Elkmont', 'Lester',
  'Mooresville', 'Ardmore', 'Huntsville', 'Fayetteville TN',
];

const metalAdvantages = [
  '40 to 70 year lifespan vs 15 to 20 for shingles',
  'Rated for hurricane-grade winds common in Alabama',
  'Hail resistant — important in Northern Alabama',
  'Lower insurance premiums in Limestone County',
  'Energy efficient in hot Alabama summers',
  'Increases resale value',
];

const faqItems = [
  {
    question: 'Do you do roofing in Athens AL?',
    answer:
      'Yes. Athens and Limestone County is part of our Alabama service area.',
  },
  {
    question: 'How much does metal roofing cost in Athens?',
    answer:
      'Most projects run $12,000 to $35,000 depending on roof size and complexity.',
  },
  {
    question: 'How long does installation take?',
    answer: 'Most residential roofs complete in 2 to 5 days.',
  },
  {
    question: 'Do you offer free estimates in Limestone County?',
    answer:
      'Yes. We provide free on-site estimates throughout Athens and Limestone County.',
  },
];

export default function RoofingContractorAthensPage() {
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
              ROOFING CONTRACTOR - ATHENS, AL
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Metal Roofing Contractor<br />in Athens AL
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Metal roof installation and replacement for homes in Athens and throughout Limestone County Alabama.
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
            Roofing Services in Athens AL and Limestone County
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/hero-roofing.jpeg"
                alt="Metal roofing installation Athens AL Limestone County"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Marberry Construction serves Athens and Limestone County from our Fayetteville, Tennessee base about 30 miles to the north. We install and replace metal roofing on residential homes throughout Limestone County and have worked in the Athens area on both roofing and construction projects. Metal roofing is our specialty, and Northern Alabama&apos;s climate makes the case for metal better than any sales pitch we could give.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Alabama&apos;s climate is demanding on roofing in ways that compound over time. Athens and Limestone County see intense summer UV that breaks down asphalt binder, hot and humid conditions that accelerate granule loss, severe spring thunderstorm seasons with hail and high winds, and occasional winter ice events that get under lifted shingle tabs and accelerate failure. Metal roofing is not affected by any of these conditions in the way that asphalt shingles are. A metal roof in Athens handles the full Alabama weather range without degrading.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Metal roofing has grown significantly in popularity throughout Northern Alabama over the past decade. Homeowners in the Athens area who have watched neighbors cycle through shingle roofs at 15 to 20-year intervals are making the switch. The math is straightforward: metal costs more at installation and nothing for the next 40 to 70 years. Shingles cost less at installation and require replacement twice or more in the same timeframe, plus maintenance cycles in between.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            We install standing seam and corrugated metal roofing on residential homes throughout Limestone County. Standing seam is the premium option with concealed fasteners and a clean profile suited for lower-pitch roofs. Corrugated is a highly durable, cost-effective choice for steeper pitch applications and older home profiles. Both options significantly outperform shingles in every performance category that matters in Alabama&apos;s climate.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Why Athens Homeowners Choose Metal Roofing
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Northern Alabama sits in a region that receives severe weather events with notable regularity. Spring storm systems moving through the Tennessee Valley bring hail, high winds, and the occasional tornado-adjacent event. These storms are the primary cause of premature shingle roof failure throughout the Athens area. Hail impacts crack asphalt shingles and break surface granules loose. High winds lift tabs and create leak pathways that homeowners often do not find until water is already inside the structure.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Metal roofing is rated for the impact and wind loads that these storm events generate. A properly installed metal roof will not fail from hail damage that would destroy asphalt shingles. Insurance carriers in Alabama recognize this and frequently offer meaningful premium reductions for metal roofing. Those annual savings accumulate over decades and further improve the long-term cost picture for metal.
          </p>
          <h3 className="font-semibold text-navy text-lg mb-4">Why metal outperforms shingles in Athens AL:</h3>
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
            &quot;Athens is in the path of serious Alabama weather. Metal roofing handles it. Shingles eventually do not.&quot;
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Roof Replacement Costs in Athens AL
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Corrugated metal roofing in the Athens area typically runs $8 to $14 per square foot installed. Standing seam runs $14 to $22 per square foot depending on the profile and gauge. Both prices include tear-off of the existing roof, disposal, new underlayment, materials, and labor. Pitch, access complexity, and roof configuration all affect the final number.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Most homeowners in Limestone County replacing a shingle roof with metal spend between $12,000 and $35,000 for the complete project. A straightforward single-story home comes in toward the lower end. A larger home with steep pitch, multiple valleys, or dormers comes in toward the higher end. We provide itemized written estimates throughout Athens and Limestone County at no charge so you know exactly what you are committing to before any work begins.
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
              Serving Athens and Surrounding Communities
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
