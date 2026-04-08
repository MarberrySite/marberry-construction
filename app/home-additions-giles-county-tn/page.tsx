import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Home Additions Giles County TN | Marberry Construction',
  description:
    'Home additions and remodeling in Giles County TN and Pulaski. Licensed contractor. Call 256-679-8665.',
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
    'Giles County TN', 'Pulaski TN', 'Elkton TN',
    'Minor Hill TN', 'Lynnville TN', 'Prospect TN',
    'Cornersville TN', 'Lawrenceburg TN',
  ],
};

const communities = [
  'Pulaski', 'Elkton', 'Minor Hill', 'Lynnville',
  'Prospect', 'Cornersville', 'Fayetteville', 'Lawrenceburg',
];

const additionTypes = [
  'Room and bedroom additions',
  'Attached and detached garage additions',
  'Kitchen and bathroom remodels',
  'Covered porches and decks',
  'Mudrooms and utility additions',
  'Full permit management in Giles County',
];

const faqItems = [
  {
    question: 'Do you build additions in Giles County TN?',
    answer:
      'Yes. Giles County is a regular part of our service area for additions and remodeling.',
  },
  {
    question: 'Do I need a permit in Giles County?',
    answer:
      'Yes. All structural additions require a permit. We handle the full process through the Giles County building department.',
  },
  {
    question: 'How long does an addition take in Pulaski?',
    answer:
      'Most room additions take 6 to 12 weeks from permit approval depending on size and complexity.',
  },
  {
    question: 'Can you match my existing home exterior?',
    answer:
      'Yes. We source matching materials so the addition blends seamlessly with your existing home in siding, roofline, trim, and appearance.',
  },
];

export default function HomeAdditionsGilesCountyPage() {
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
            backgroundImage: 'url(/images/hero-additions.jpeg)',
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
              HOME ADDITIONS - GILES COUNTY, TN
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Home Additions<br />in Giles County TN
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Room additions, garage additions, and remodeling for homes throughout Giles County and Pulaski Tennessee.
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
            Home Addition Contractor in Giles County Tennessee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/remodeling/remodel12.jpeg"
                alt="Home addition Giles County Tennessee Pulaski"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Marberry Construction builds home additions throughout Giles County and the Pulaski area. Whether you need a bedroom addition, a larger kitchen, an attached garage, or a covered porch, we build additions that match your existing home and handle the full permit process through Giles County. Most of our addition clients have outgrown their current home and have no interest in moving. Adding on is almost always the smarter financial move when you own land you like and prefer to stay where you are.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Pulaski area homeowners are staying put and expanding in the current market rather than trying to sell and find something larger. Inventory in Giles County is limited and prices have moved. A growing family, a parent moving in, or more time spent working from home have made the need for additional space real for many households in the area. Building an addition on your existing property is the most cost-effective path to getting that space without disrupting where you live.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Giles County home values have increased meaningfully over the past several years as the region has attracted attention from families priced out of larger markets to the north and south. A well-built addition adds real equity to your property while delivering the functional space you need now. That combination of immediate benefit and long-term value makes additions a strong decision for most Giles County homeowners.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            We handle every phase of the addition in-house. One contractor from the initial site visit through the final walkthrough. We pull the permits, manage the schedule, and coordinate all trades involved in the project. There are no hand-offs and no subcontractors you have never met taking over mid-project.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            What We Build in Giles County
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Home additions in Giles County require a building permit through the Giles County Building Department. The permit process involves construction drawings, setback verification against property lines and any easements, and trade permits for electrical, mechanical, and plumbing work where applicable. We manage the full submission and follow up with the county throughout. If your lot has setback constraints that affect the addition design, we identify those before quoting and work with you on a design that achieves your goals within what the county will approve.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Matching the existing home is a priority on every project we build. A well-done addition should look like it was always part of the house. We source matching siding, shingles or metal roofing, trim details, and window profiles so the result is cohesive from the street and from inside the home. An addition that looks like an afterthought reduces rather than adds to property value.
          </p>
          <h3 className="font-semibold text-navy text-lg mb-4">Addition and remodeling services we offer:</h3>
          <ul className="space-y-3">
            {additionTypes.map((item) => (
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
            "A well-built addition in Giles County adds square footage, adds value, and costs far less than moving to a bigger home."
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Home Addition Costs in Giles County TN
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Home additions in the Giles County area typically run $120 to $220 per square foot depending on the complexity of the work, the finishes selected, and how much structural work is required to tie the addition into the existing home. A bedroom addition with standard finishes and connection to the existing HVAC system is a straightforward project that comes in toward the lower end. A kitchen expansion involving load-bearing wall work, electrical upgrades, and custom cabinetry involves more complexity and carries a higher cost per square foot.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Most addition clients in Giles County spend between $40,000 and $120,000 for a meaningful addition that adds usable square footage and real value to their home. Smaller projects like covered porches, mudrooms, and utility additions can come in under $30,000. On-site estimates throughout Giles County are free, and we provide detailed written estimates before any work begins so you know exactly what each part of the project costs before you commit.
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
            <Link href="/home-additions-remodeling" className="text-skyblue font-semibold hover:underline">
              Learn more about our home addition services
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
