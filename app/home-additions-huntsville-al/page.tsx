import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Home Additions Near Huntsville AL | Marberry Construction',
  description:
    'Room additions, garage additions, and home remodeling near Huntsville AL and Madison County. Licensed contractor. Call 256-679-8665.',
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
  'Harvest', 'Meridianville', 'Toney', 'New Market',
  'Madison City', 'Hazel Green', 'Athens', 'Ardmore',
];

const processSteps = [
  'On-site consultation and measurements',
  'Design and material selection',
  'Full permit management through Madison County',
  'Construction with minimal disruption to your home',
  'All trades coordinated in-house',
  'Final walkthrough and sign-off',
];

const faqItems = [
  {
    question: 'Do you build home additions near Huntsville AL?',
    answer:
      'Yes. We serve Madison County and surrounding areas including Harvest, Meridianville, Toney, New Market, and Athens. We are based 35 miles north in Fayetteville, TN and work regularly on both sides of the state line.',
  },
  {
    question: 'Do I need a permit for a home addition in Madison County?',
    answer:
      'Yes. Any structural addition to a home requires a building permit. For properties in unincorporated Madison County, permits go through the Madison County Building Department. We handle the full permit process on every project.',
  },
  {
    question: 'How long does a room addition take near Huntsville?',
    answer:
      'Most room additions take 6 to 12 weeks from permit approval depending on size and complexity. We give you a clear schedule at the start of every project.',
  },
  {
    question: 'Can you match my existing home exterior on an addition?',
    answer:
      'Yes. We source matching materials and take care to blend the addition with your existing home in siding, roofline, trim, and overall appearance.',
  },
];

export default function HomeAdditionsHuntsvillePage() {
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
              HOME ADDITIONS - HUNTSVILLE, AL
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Home Additions<br />Near Huntsville AL
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Room additions, garage additions, and remodeling for homes in Madison County and Northern Alabama.
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
            Home Addition Contractor Serving Madison County Alabama
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/remodeling/remodel4.jpeg"
                alt="Home addition project near Huntsville Alabama"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Marberry Construction builds home additions throughout Madison County and the Huntsville metro. Whether you need an extra bedroom, a larger kitchen, an attached garage, or a covered porch, we build additions that match your existing home in structure, materials, and appearance. Most of our addition clients have outgrown their current home but have no interest in moving. Adding on is often the smarter financial move, especially when you own land you like and the cost of buying something comparable would mean taking on a significantly larger mortgage.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Huntsville is one of the fastest-growing metros in the Southeast. The defense and aerospace sectors centered around Redstone Arsenal have brought significant population growth to the area, and many families who settled in communities like Harvest, Meridianville, and New Market a few years ago are finding that their homes no longer fit the way they originally planned. A second child, a parent moving in, or remote work adding a need for dedicated office space have made the case for adding on rather than moving.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            We handle every phase of the addition in-house. One contractor from the initial site visit through the final walkthrough. We pull the permits, manage the schedule, and coordinate all trades involved in the project. You do not need to find a framer, a plumber, and an electrician separately and figure out how to schedule them together. We handle it and you deal with one point of contact throughout the build.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Matching the existing home is important to us. A well-done addition should look like it was always part of the house. We source matching materials, pay attention to roofline alignment, and take care with trim details so the addition does not look like an afterthought from the street or the inside. In neighborhoods throughout Madison County, that attention to appearance matters for resale value and neighborhood standards.
          </p>
        </div>
      </section>

      {/* Section 2 — Process Checklist */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Building a Home Addition in Madison County Alabama
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Home additions in unincorporated Madison County go through the Madison County Building Department. The permit process requires construction drawings, setback compliance verification, and separate trade permits for electrical, mechanical, and plumbing work. We handle the full submission and manage the permit process so you are not dealing with multiple agencies on your own.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Setback requirements in Madison County depend on lot size, zoning classification, and any easements on the property. Before we quote a project, we verify that the addition you want is achievable on your specific lot without running into setback or easement issues. If your lot has constraints, we tell you early and work with you on a design that accomplishes your goals within what the county will approve.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            We start most additions from the outside in where possible. That means we get the exterior framing, sheathing, and roofing done before cutting into the existing home, so your living space stays intact and weathertight throughout most of the build. Interior work comes at the end, which minimizes the disruption to your daily life during construction.
          </p>
          <h3 className="font-semibold text-navy text-lg mb-4">How our addition process works:</h3>
          <ul className="space-y-3">
            {processSteps.map((item) => (
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
            "You deal with one contractor from design through final walkthrough. No hand-offs, no subcontractors you have never met."
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Home Addition Costs Near Huntsville AL
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Home additions in the Madison County area typically run $120 to $220 per square foot depending on the complexity of the work, the finishes selected, and how much structural work is required to tie the addition into the existing home. A bedroom addition with standard finishes, its own closet, and connection to the existing HVAC system is a straightforward project. A kitchen expansion that requires moving load-bearing walls, upgrading the electrical panel, and installing custom cabinetry involves more complexity and carries a higher cost per square foot.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Most addition clients in Madison County spend between $40,000 and $120,000 for a meaningful addition that adds usable square footage and real value to their home. Smaller projects like covered porches, mudrooms, and utility additions can come in under $30,000. Larger additions combining a master suite, a garage bay, and a laundry room will come in toward the higher end of the range. We provide detailed written estimates before any work begins, broken down by scope, so you know exactly what each part of the project costs before you commit.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            On-site estimates in Madison County are free. We walk the property, assess the existing structure, and give you a written number based on your specific home and the scope you have in mind. We do not quote from square footage tables without seeing the job.
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
            <Link href="/home-additions-remodeling" className="text-skyblue font-semibold hover:underline">
              Learn more about our home additions and remodeling services
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
