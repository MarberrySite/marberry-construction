import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Custom Home Builder Madison County AL | Marberry Construction',
  description:
    'Custom home builder in unincorporated Madison County AL. Build on your lot in Harvest, Meridianville, New Market, and surrounding areas. Licensed contractor. Call 256-679-8665.',
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
    'Madison County AL', 'Harvest AL', 'Meridianville AL',
    'New Market AL', 'Toney AL', 'Hazel Green AL',
    'Gurley AL', 'Huntsville AL', 'Ardmore TN',
  ],
};

const communities = [
  'Harvest', 'Meridianville', 'New Market', 'Toney',
  'Hazel Green', 'Gurley', 'Huntsville', 'Ardmore',
];

const buildIncludes = [
  'Custom floor plans designed around your specific lot',
  'Full permit management through Madison County',
  'Site preparation and foundation work',
  'Framing, roofing, electrical, plumbing in-house',
  'Metal or shingle roofing included',
  'Workmanship warranty on every home',
];

const faqItems = [
  {
    question: 'Do you build custom homes in unincorporated Madison County AL?',
    answer:
      'Yes. We build throughout rural Madison County including Harvest, Meridianville, New Market, Toney, Hazel Green, and Gurley.',
  },
  {
    question: 'How is building in unincorporated Madison County different from building in Huntsville?',
    answer:
      'Unincorporated Madison County permits go through the Madison County Building Department, not the City of Huntsville. The process is distinct and we manage it on every project.',
  },
  {
    question: 'What does a custom home cost in rural Madison County AL?',
    answer:
      'Most builds run $175 to $275 per square foot. Total project costs typically range from $325,000 to $1,100,000 depending on size and finishes.',
  },
  {
    question: 'Do you handle septic permits for rural Madison County lots?',
    answer:
      'Yes. Most rural Madison County lots require a septic system. We manage the septic permit through ADPH alongside the building permit so both are coordinated from the start.',
  },
];

export default function CustomHomeBuilderMadisonCountyPage() {
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
              CUSTOM HOME BUILDER - MADISON COUNTY, AL
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Custom Home Builder<br />in Madison County AL
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Building custom homes on your lot throughout unincorporated Madison County including Harvest, Meridianville, New Market, and Toney.
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
            Custom Home Construction in Unincorporated Madison County Alabama
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/custom-homes/home13.jpeg"
                alt="Custom home built in Madison County AL by Marberry Construction"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Unincorporated Madison County is not Huntsville. The communities across the rural stretches of Madison County, from Harvest and Meridianville in the north to New Market in the east to Toney and Hazel Green near the Tennessee line, are distinct in character and permit process from the City of Huntsville. Families building in these areas want land, privacy, and the ability to build exactly what they want, not a production home in a subdivision. Marberry Construction builds that kind of home throughout rural Madison County.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                We are based in Fayetteville, Tennessee, just north of the state line, and we have been building and doing site work across northern Alabama for years. Madison County is familiar territory. We know the Madison County Building Department permit process, the ADPH septic system requirements for rural lots, and the soil conditions across the different parts of the county. Our clients in rural Madison County do not pay a learning curve cost for a contractor figuring out the process for the first time.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            The appeal of building in unincorporated Madison County has grown substantially as the Huntsville metro has expanded. Workers at Redstone Arsenal, Cummings Research Park, and the broader Huntsville technology and defense corridor who want rural land and a custom home are finding that the communities across the northern and eastern stretches of Madison County deliver exactly that, with commutes that are manageable and land prices that have not yet fully reflected the metro&apos;s growth pressure.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Marberry builds on your lot with no developer, no subdivision, and no preset floor plans. Brandon Marberry oversees every build personally from the first site visit through the final walkthrough. There are no project managers between you and the person responsible for building your home.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Building on Your Lot in Rural Madison County
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            New construction in unincorporated Madison County goes through the Madison County Building Department, not the City of Huntsville. These are different permit offices with different processes, timelines, and inspection sequences. For rural lots without sewer access, which covers most of the residential lots in Harvest, Meridianville, New Market, Toney, and similar communities, a separate septic permit through the Alabama Department of Public Health is required in addition to the building permit. We manage both permit tracks and coordinate them so the septic installation happens at the right point in the construction sequence.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Madison County soil conditions vary significantly across the county. The red clay that characterizes much of northern Alabama creates real challenges for foundation design and drain field sizing on some lots. We walk every lot before finalizing a build plan, accounting for what is actually on your property rather than making generic assumptions about the area.
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
            &quot;Unincorporated Madison County is where Huntsville professionals come to build the home they actually want on land they actually own.&quot;
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Custom Home Costs in Madison County AL
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Custom homes in rural Madison County typically run $175 to $275 per square foot depending on finish level, lot conditions, and design complexity. Total project budgets typically range from $325,000 to $1,100,000 not including land. Most clients in this area are in the $375,000 to $650,000 range for a full custom build. We provide a detailed line-item estimate before any work begins so there are no surprises during the project.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Rural Madison County land prices remain more accessible than properties inside the Huntsville city limits, though that gap has been narrowing as more buyers discover what the unincorporated county offers. Building now in communities like Harvest, Meridianville, and New Market means locking in land and construction costs before the price curve moves further.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Serving Unincorporated Madison County Communities
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            We build throughout the rural residential communities scattered across northern and eastern Madison County. Harvest and Meridianville are well-established communities with growing residential activity as the metro expands northward. Toney and Hazel Green sit along the Tennessee state line and attract buyers who want northern Alabama land with easy access to both Huntsville and southern Lincoln County, Tennessee. New Market and Gurley are further east, drawing buyers who want more land and more distance from the urban core while still staying within commuting range.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Being based in Fayetteville, Tennessee means we are well positioned to serve this entire northern tier of Madison County. Hazel Green and Toney in particular are short drives from our base. For clients building near the state line, we are the contractor who knows both Alabama and Tennessee building requirements and does not have to learn either system for the first time on your project.
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
              Serving Madison County and Surrounding Communities
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
