import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Custom Home Builder Giles County TN | Marberry Construction',
  description:
    'Custom home builder in Giles County TN. Build on your lot in Pulaski and surrounding areas. Licensed contractor. Call 256-679-8665.',
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

const buildIncludes = [
  'Custom floor plans designed around your lot',
  'Full permit management through Giles County',
  'Site preparation and foundation engineering',
  'Framing, roofing, electrical, plumbing in-house',
  'Metal or shingle roofing included',
  'Workmanship warranty on every home',
];

const faqItems = [
  {
    question: 'Do you build custom homes in Giles County TN?',
    answer:
      'Yes. Giles County is a regular part of our service area. We are based in Fayetteville TN, about 20 miles from Pulaski.',
  },
  {
    question: 'How long does a custom build take in Giles County?',
    answer:
      'From permit approval to move-in, most builds take 8 to 14 months. We provide a detailed schedule at the start of every project.',
  },
  {
    question: 'What does a custom home cost in Giles County?',
    answer:
      'Most builds run $175 to $275 per square foot. Total project costs typically range from $300,000 to $1,100,000 depending on size and finishes.',
  },
  {
    question: 'Do you handle Giles County building permits?',
    answer:
      'Yes. We manage the full permit process through the Giles County building department on every project.',
  },
];

export default function CustomHomeBuilderGilesCountyPage() {
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
              CUSTOM HOME BUILDER - GILES COUNTY, TN
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Custom Home Builder<br />in Giles County TN
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Building custom homes on your lot throughout Giles County and the Pulaski Tennessee area.
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
            Custom Home Construction in Giles County Tennessee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/custom-homes/home9.jpeg"
                alt="Custom home built in Giles County TN by Marberry Construction"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Marberry Construction serves Giles County from our base in Fayetteville, Tennessee, about 20 miles to the east. That proximity makes Giles County a natural part of our service area, and we work throughout the county regularly. We know the Giles County building department, the soil conditions common to the area, and the terrain that shapes every build in this part of Middle Tennessee.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Pulaski is the Giles County seat, surrounded by some of the most attractive rolling farmland in Tennessee. The county has a character that appeals to families looking for genuine country living without giving up access to larger regional markets. With Interstate 65 running through the eastern edge of the county, Giles County is within commuting range of Columbia, Lawrenceburg, and for motivated commuters, the Nashville metro to the north. That accessibility combined with land prices that remain very affordable makes Giles County a compelling place to build.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Giles County offers large acreage lots at prices that have not yet caught up with the growth pressures affecting counties closer to Nashville and Huntsville. Families who want 5 to 20 acres and a custom home designed for the way they actually live can build here for a total project cost that would buy a subdivision lot in Williamson County or Madison County. That value proposition is real, and it is why we have seen growing interest in Giles County builds over the past several years.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Marberry builds on your lot. No developer model, no preset floor plans, no subdivision requirements. We start with your land and your vision. Brandon Marberry oversees every build personally from the first site visit through the final walkthrough. There are no project managers or corporate layers between you and the person responsible for your home.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Building on Your Lot in Giles County Tennessee
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            New home construction in Giles County goes through the Giles County Building Department. The process requires a building permit, construction drawings, and for rural lots without sewer access a separate septic permit through the Giles County Health Department. Most rural properties in Giles County are not connected to municipal sewer, which means the septic system is part of nearly every build we do in the county. We handle both permits and manage the full submission process on your behalf.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Soil conditions in Giles County vary by location. Properties on higher ground across the county&apos;s rolling terrain often have good drainage characteristics. Lower elevations and areas with heavier clay content require more careful attention to foundation design and drain field sizing. We walk every lot before finalizing a build plan to make sure the design accounts for the conditions on your specific property.
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
            &quot;Giles County has the land, the space, and the value. We bring the expertise to build your custom home on it.&quot;
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Custom Home Costs in Giles County TN
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Custom homes in the Giles County area typically run $175 to $275 per square foot depending on finish level, lot conditions, and design complexity. Total project budgets typically range from $300,000 to $1,100,000 not including land. Most clients in this area are in the $350,000 to $600,000 range for a full custom build. We provide a detailed line-item estimate before any work begins so there are no surprises during the project.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Giles County land prices are among the most affordable in the region for large acreage lots. A 10-acre tract in the Pulaski area can be purchased for a fraction of what comparable land costs near Nashville or in Madison County, Alabama. Building in Giles County delivers custom home quality and genuine acreage at a total cost that is simply not achievable in markets closer to major employment centers. For families who can work remotely or who commute selectively, the value is substantial.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Serving Pulaski and Giles County Communities
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            We build throughout Giles County and are familiar with the specific conditions and permit requirements in each part of the area. Our clients in Giles County include families building in Pulaski, Elkton, Minor Hill, Lynnville, Prospect, and the rural areas between those communities. Each has its own soil character and access conditions, and we account for those at the start of every project rather than discovering them mid-build.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Giles County neighbors Lincoln County to the east, which is our home base. That adjacency means we are not a company driving long distances to serve an unfamiliar market. We know the terrain, the county offices, and the contractors and suppliers in this region. Clients building in Giles County get the same direct, personally managed approach that our Lincoln County clients have always received.
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
