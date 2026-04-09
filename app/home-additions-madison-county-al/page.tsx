import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Home Additions Madison County AL | Marberry Construction',
  description:
    'Home additions and remodeling in Madison County AL. Serving Harvest, Meridianville, New Market, Toney, and surrounding areas. Licensed contractor. Call 256-679-8665.',
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

const additionTypes = [
  'Room and bedroom additions',
  'Attached and detached garage additions',
  'Kitchen and bathroom remodels',
  'Covered porches and outdoor living spaces',
  'Full permit management through Madison County',
  'All trades coordinated in-house',
];

const faqItems = [
  {
    question: 'Do you build additions in rural Madison County AL?',
    answer:
      'Yes. We build throughout unincorporated Madison County including Harvest, Meridianville, New Market, Toney, Hazel Green, and Gurley.',
  },
  {
    question: 'Do you handle permits through the Madison County Building Department?',
    answer:
      'Yes. Additions in unincorporated Madison County go through the county building department, not the City of Huntsville. We manage the full permit process on every project.',
  },
  {
    question: 'How much does an addition cost in rural Madison County?',
    answer:
      'Most additions run $120 to $220 per square foot. Total projects typically range $40,000 to $130,000 depending on size and complexity.',
  },
  {
    question: 'How long does an addition take in unincorporated Madison County?',
    answer:
      'Most room additions take 6 to 14 weeks from permit approval depending on size, scope, and complexity.',
  },
];

export default function HomeAdditionsMadisonCountyPage() {
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
              HOME ADDITIONS - MADISON COUNTY, AL
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Home Additions<br />in Madison County AL
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Room additions, garage additions, and remodeling for homes throughout rural Madison County Alabama.
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
            Home Addition Contractor in Unincorporated Madison County Alabama
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/remodeling/remodel15.jpeg"
                alt="Home addition Madison County Alabama"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Marberry Construction builds home additions throughout rural Madison County. We are based in Fayetteville, Tennessee, just north of the state line, and we serve the communities of Harvest, Meridianville, New Market, Toney, Hazel Green, and Gurley as a regular part of our Alabama workload. Our Alabama license and experience with the Madison County Building Department means you are not working with a contractor who is learning the county permit system for the first time on your project.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Families who built or bought homes in rural Madison County years ago and have since outgrown their space face a real choice: sell and move into the Huntsville metro, or expand what they already have. For homeowners on rural lots with land, space, and property values that have increased substantially with the metro&apos;s growth, building an addition is almost always the better call. You keep the acreage, you avoid the disruption of moving, and you get the space your household needs built exactly the way you want it.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Additions in unincorporated Madison County go through the Madison County Building Department, not the City of Huntsville. These are separate permit offices with different processes. For homeowners in the rural communities north and east of the city, it is important to work with a contractor who knows the county process, not one who defaults to the Huntsville city process and creates delays by submitting to the wrong office.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            We handle every phase of the addition in-house from the initial site visit through the final walkthrough. One contractor, one point of contact, and direct access to Brandon Marberry throughout the project. We pull the permits, manage the schedule, and coordinate all trades involved.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            What We Build in Rural Madison County
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Rural Madison County lots tend to be larger than comparable properties inside Huntsville, which means most homeowners in this area have the physical space to add on without the setback and easement constraints that limit additions on smaller urban lots. That space is an advantage we design around from the start.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Matching the existing home is a priority on every addition we build. An addition that reads as a tacked-on afterthought does not add value the way a well-integrated addition does. We source matching materials, align the roofline, and match trim profiles so the result looks like part of the original structure from every angle.
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
            &quot;Rural Madison County lots give you the space to build what you need. We build it to last.&quot;
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Home Addition Costs in Madison County AL
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Home additions in unincorporated Madison County typically run $120 to $220 per square foot depending on the complexity of the work, finishes selected, and the structural requirements of tying the addition into the existing home. Most addition clients in rural Madison County spend between $40,000 and $130,000 for a meaningful addition that adds real square footage and long-term value.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Smaller projects like covered porches, mudrooms, and utility additions can come in under $30,000. Site visits throughout rural Madison County are free and we provide detailed written estimates before any work begins. You know exactly what the project will cost before committing.
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
