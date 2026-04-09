import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Custom Home Builder Taft TN | Marberry Construction',
  description:
    'Custom home builder in Taft TN and Lincoln County. Build on your lot near the Tennessee-Alabama border. Licensed contractor. Call 256-679-8665.',
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

const buildIncludes = [
  'Custom floor plans designed around your specific lot',
  'Full permit management through Lincoln County',
  'Site preparation and foundation work',
  'Framing, roofing, electrical, plumbing in-house',
  'Metal or shingle roofing included',
  'Workmanship warranty on every home',
];

const faqItems = [
  {
    question: 'Do you build custom homes in Taft TN?',
    answer:
      'Yes. Taft is in Lincoln County which is our home base. We build throughout southern Lincoln County regularly.',
  },
  {
    question: 'How far is Marberry from Taft TN?',
    answer:
      'We are based in Fayetteville TN, less than 15 miles from Taft. This is our core territory.',
  },
  {
    question: 'What does a custom home cost near Taft TN?',
    answer:
      'Most builds run $175 to $275 per square foot. Total project costs typically range from $300,000 to $1,100,000 depending on size and finishes.',
  },
  {
    question: 'Do you handle Lincoln County permits for Taft area builds?',
    answer:
      'Yes. We manage the full permit process through the Lincoln County building department on every project.',
  },
];

export default function CustomHomeBuilderTaftPage() {
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
              CUSTOM HOME BUILDER - TAFT, TN
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Custom Home Builder<br />in Taft TN
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Building custom homes on your lot in Taft and southern Lincoln County Tennessee.
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
            Custom Home Construction in Taft and Southern Lincoln County
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/custom-homes/home12.jpeg"
                alt="Custom home built in Taft TN by Marberry Construction"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Taft sits in southern Lincoln County, just north of the Alabama state line, in some of the most accessible rural building territory in our service area. Marberry Construction is based in Fayetteville, the Lincoln County seat, less than 15 miles from Taft. This is not an area we travel to from a distant market. Southern Lincoln County is home territory, and the Taft area is where we have worked for years on custom builds, septic installations, and roofing projects.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                The Taft area offers something increasingly valuable: rural land on the corridor between Fayetteville and the Huntsville, Alabama metro, at prices that still reflect rural Lincoln County rather than the growth pressure that has hit Madison County to the south. Families who need proximity to the Huntsville employment corridor but want land, space, and the ability to build exactly what they want are discovering that southern Lincoln County gives them all three.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            The drive from Taft to Huntsville takes roughly 40 to 45 minutes depending on the specific destination. For workers at Redstone Arsenal, Cummings Research Park, or the broader Huntsville technology and defense corridor, that commute is manageable and the value of building in southern Lincoln County is substantial. Land that would cost a premium inside Madison County is available in the Taft area at rural Lincoln County prices.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Marberry builds on your lot. No developer, no subdivision, no preset floor plans. We start with your land and your vision. Brandon Marberry oversees every build personally from the first site visit through the final walkthrough. There are no project managers between you and the person responsible for building your home.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Building on Your Lot Near Taft Tennessee
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            New construction in the Taft area goes through Lincoln County. The process requires a building permit from the Lincoln County Building Department and, for rural lots without sewer access, a separate septic permit through the Lincoln County Health Department. Most properties in southern Lincoln County are not connected to municipal sewer, which means the septic system is part of the build plan on virtually every rural project we do in this area. We handle both permits and manage the full submission process.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Soil conditions in southern Lincoln County near Taft vary depending on the specific property. Some lots on higher ground have good drainage and are straightforward to build on. Properties at lower elevations or with heavier clay content require more attention to foundation design and drain field sizing. We walk every lot before finalizing a design and build plan, accounting for your specific site rather than making generic assumptions about the area.
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
            &quot;Taft sits right on the corridor between Fayetteville and Huntsville. Land here is still priced like rural Tennessee.&quot;
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Custom Home Costs Near Taft TN
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Custom homes in the Taft area typically run $175 to $275 per square foot depending on finish level, lot conditions, and design complexity. Total project budgets typically range from $300,000 to $1,100,000 not including land. Most clients in this area are in the $350,000 to $600,000 range for a full custom build. We provide a detailed line-item estimate before any work begins so there are no surprises during the project.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Southern Lincoln County land prices remain affordable compared to Madison County, Alabama, despite the proximity. Families who need Huntsville access but do not need to pay Madison County land premiums are finding real value in the Taft area. A custom build here delivers acreage, a home designed the way you want it, and a total project cost that compares favorably to buying a production home inside the Huntsville metro.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Serving Taft and Surrounding Communities
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Lincoln County is our home base and we know the terrain and permit process in every part of the county. The southern corridor around Taft sits between our Fayetteville headquarters and the Tennessee-Alabama state line at Ardmore. We work throughout this corridor regularly and our familiarity with the land, the county building department, and the soil conditions in this specific part of Lincoln County means our clients do not pay the learning curve costs that contractors new to the area inevitably create.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Taft is also positioned within a short drive of Ardmore and the northern reaches of Madison County, Alabama. For clients building in this area who also need to navigate work across the state line, we are the contractor who knows both sides of the border without having to learn either system for the first time on your project.
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
