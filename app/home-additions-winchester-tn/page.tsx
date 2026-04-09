import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Home Additions Winchester TN | Marberry Construction',
  description:
    'Home additions and remodeling in Winchester TN and Franklin County. Licensed contractor. Call 256-679-8665.',
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
    'Winchester TN', 'Franklin County TN', 'Estill Springs TN',
    'Decherd TN', 'Cowan TN', 'Huntland TN',
    'Belvidere TN', 'Tullahoma TN',
  ],
};

const communities = [
  'Winchester', 'Estill Springs', 'Decherd', 'Cowan',
  'Huntland', 'Belvidere', 'Fayetteville', 'Tullahoma',
];

const additionTypes = [
  'Room and bedroom additions',
  'Attached and detached garage additions',
  'Kitchen and bathroom remodels',
  'Covered porches and decks',
  'Mudrooms and utility additions',
  'Full permit management in Franklin County',
];

const faqItems = [
  {
    question: 'Do you build home additions in Winchester TN?',
    answer:
      'Yes. Winchester and Franklin County is a regular part of our service area.',
  },
  {
    question: 'Do I need a permit for an addition in Franklin County?',
    answer:
      'Yes. All structural additions require a permit. We handle the full process through the Franklin County Building Department.',
  },
  {
    question: 'How long does an addition take in Winchester?',
    answer:
      'Most room additions take 6 to 12 weeks from permit approval depending on size and complexity.',
  },
  {
    question: 'Can you match my existing home exterior?',
    answer:
      'Yes. We source matching materials so the addition blends seamlessly with your existing home in siding, roofline, trim, and overall appearance.',
  },
];

export default function HomeAdditionsWinchesterPage() {
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
              HOME ADDITIONS - WINCHESTER, TN
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Home Additions<br />in Winchester TN
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Room additions, garage additions, and remodeling for homes in Winchester and Franklin County.
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
            Home Addition Contractor in Winchester Tennessee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/remodeling/remodel10.jpeg"
                alt="Home addition project Winchester Tennessee"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Marberry Construction builds home additions throughout Winchester and Franklin County, Tennessee. Whether you need an extra bedroom, a larger kitchen, an attached garage, or a covered porch, we build additions that match your existing home in structure, materials, and appearance. Most of our Franklin County addition clients have outgrown their current home but have no interest in moving. Adding on is almost always the smarter financial move when you own land you like and the cost of buying something larger would mean taking on a significantly larger mortgage.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Winchester homeowners are staying put and expanding in the current market rather than trying to sell and find something larger at today&apos;s prices. A second child, a parent moving in, or more time spent working from home have made the need for more space real for a lot of Franklin County families. Building an addition on your existing property is the most cost-effective path to getting that space without disrupting where you live or the community you have settled into.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Franklin County home values have risen meaningfully over the past several years. Additions built to a high standard add real equity to your property. A well-done bedroom addition, a garage addition, or a kitchen expansion increases the value of your home while delivering the space you need now. That combination of functional benefit and financial return makes additions a strong investment decision for most Winchester homeowners.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            We handle every phase of the addition in-house. One contractor from the initial site visit through the final walkthrough. We pull the permits, manage the schedule, and coordinate all trades involved in the project. You do not need to find a framer, a plumber, and an electrician separately and figure out how to sequence them. We handle it and you deal with one person throughout the build.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            What We Build in Winchester and Franklin County
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Home additions in Franklin County require a building permit through the county building department. The process involves construction drawings, setback and easement verification, and trade permits for electrical, mechanical, and plumbing work. We handle the full submission. If your lot has setback constraints or easements that affect the addition design you have in mind, we identify those early and work with you on a design that achieves your goals within what the county will approve.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Matching the existing home is a priority on every addition project. A well-done addition should look like it was always part of the house. We source matching materials, pay attention to roofline alignment, and take care with trim details so the addition does not stand out as an afterthought from the street or from inside.
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
            &quot;Most of our Winchester clients have outgrown their home but love their land. We build the space they need around the life they have built.&quot;
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Home Addition Costs in Winchester TN
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Home additions in the Winchester area typically run $120 to $220 per square foot depending on the complexity of the work, the finishes selected, and how much structural work is required to tie the addition into the existing home. A bedroom addition with standard finishes, its own closet, and connection to the existing HVAC system is a straightforward project. A kitchen expansion or master suite addition involving load-bearing wall work, plumbing relocation, or custom cabinetry carries a higher cost per square foot.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Most addition clients in Franklin County spend between $40,000 and $120,000 for a meaningful addition that adds usable square footage and real value to their home. Smaller projects like covered porches, mudrooms, and utility additions can come in under $30,000. We provide detailed written estimates before any work begins, broken down by scope, so you know exactly what each part of the project costs before you commit. On-site estimates in Franklin County are free.
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
              Serving Winchester and Surrounding Communities
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
