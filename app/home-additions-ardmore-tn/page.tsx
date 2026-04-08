import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Home Additions Ardmore TN | Marberry Construction',
  description:
    'Home additions and remodeling in Ardmore TN. Licensed contractor on both sides of the TN-AL border. Call 256-679-8665.',
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

const additionTypes = [
  'Room and bedroom additions',
  'Garage additions attached or detached',
  'Kitchen and bathroom remodels',
  'Covered porches and decks',
  'Full permit management TN or AL side',
  'All trades coordinated in-house',
];

const faqItems = [
  {
    question: 'Do you build additions in Ardmore TN?',
    answer:
      'Yes. Ardmore is close to our Fayetteville TN base and we work there regularly.',
  },
  {
    question: 'Do you handle permits on both sides of the state line?',
    answer:
      'Yes. We manage permits through both Lincoln County TN and Limestone County AL building departments depending on which side your property is on.',
  },
  {
    question: 'How much does an addition cost in Ardmore?',
    answer:
      'Most additions run $120 to $220 per square foot. Total projects typically range $40,000 to $120,000.',
  },
  {
    question: 'How long does an addition take?',
    answer:
      'Most room additions take 6 to 12 weeks from permit approval depending on size and complexity.',
  },
];

export default function HomeAdditionsArdmorePage() {
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
              HOME ADDITIONS - ARDMORE, TN
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Home Additions<br />in Ardmore TN
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Room additions, garage additions, and remodeling for homes in Ardmore on both sides of the state line.
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
            Home Addition Contractor in Ardmore Tennessee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/remodeling/remodel11.jpeg"
                alt="Home addition Ardmore Tennessee"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Marberry Construction builds home additions throughout the Ardmore area on both sides of the Tennessee-Alabama state line. Whether you need a bedroom addition, a larger kitchen, an attached garage, or a covered porch, we build additions that match your existing home and handle the full permit process regardless of which state your property sits in.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Ardmore is a close-knit community where many families have lived for years and have no interest in leaving. When a home no longer fits the way it did when the family moved in, adding on is almost always the right answer. The Ardmore area does not have an abundance of larger homes available for purchase, and the cost of moving, even within the region, often outweighs the cost of building the space you need where you already are.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            The dual-state nature of Ardmore adds one layer of complexity to addition projects that does not exist in most other communities: the building permit process runs through different agencies depending on which side of the line your property sits. Lincoln County, Tennessee properties go through the Lincoln County Building Department. Limestone County, Alabama properties go through the Limestone County Building Department. Both states have different form requirements, inspection processes, and timelines. We manage both.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            We handle every phase of the addition in-house. One contractor from the initial site visit through the final walkthrough, no subcontractors you have never met, no hand-offs mid-project. We pull the permits, manage the schedule, and coordinate all trades. You have one point of contact and direct access to Brandon throughout the build.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Addition and Remodeling Services in Ardmore
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            We build a wide range of addition types in the Ardmore area. The most common requests are bedroom additions for growing families, garage additions on properties that did not have covered parking, kitchen expansions where the original footprint no longer serves the household, and covered porches that extend living space outside. We also handle full bathroom additions, mudrooms, utility rooms, and detached workshop buildings.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Matching the existing home is a priority on every project. An addition that looks like it was always part of the house adds value in a way that a visibly different structure never does. We source matching materials, align rooflines, and pay attention to trim and exterior details so the result reads as a cohesive home, not a patched-on addition.
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
            "Whether your Ardmore property is on the Tennessee side or the Alabama side, we handle the permits and build it right."
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Addition Costs in Ardmore TN
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Home additions in the Ardmore area typically run $120 to $220 per square foot depending on the complexity of the work, the finishes selected, and how much structural work is required to connect the addition to the existing home. A straightforward bedroom addition with standard finishes runs toward the lower end. A kitchen expansion or master suite with load-bearing wall work, plumbing changes, or custom finishes runs higher.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Most addition clients in the Ardmore area spend between $40,000 and $120,000 for a meaningful addition that adds real square footage and value to their home. Smaller projects like porches, mudrooms, and utility additions can come in under $30,000. On-site estimates throughout the Ardmore area are free, and we provide detailed written estimates before any work begins so you know what each part of the project costs before you commit.
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
