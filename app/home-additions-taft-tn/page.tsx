import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Home Additions Taft TN | Marberry Construction',
  description:
    'Home additions and remodeling in Taft TN and southern Lincoln County. Licensed contractor. Call 256-679-8665.',
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

const additionTypes = [
  'Room and bedroom additions',
  'Attached and detached garage additions',
  'Kitchen and bathroom remodels',
  'Covered porches and outdoor living spaces',
  'Full permit management through Lincoln County',
  'All trades coordinated in-house',
];

const faqItems = [
  {
    question: 'Do you build additions in Taft TN?',
    answer:
      'Yes. Taft is in southern Lincoln County, our home base. We work in this area regularly.',
  },
  {
    question: 'Do you handle Lincoln County permits for Taft area additions?',
    answer:
      'Yes. We manage the full permit process through the Lincoln County Building Department on every project.',
  },
  {
    question: 'How much does an addition cost near Taft TN?',
    answer:
      'Most additions run $120 to $220 per square foot. Total projects typically range $40,000 to $120,000 depending on size and complexity.',
  },
  {
    question: 'How long does a Taft area addition take?',
    answer:
      'Most room additions take 6 to 12 weeks from permit approval depending on size and complexity.',
  },
];

export default function HomeAdditionsTaftPage() {
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
              HOME ADDITIONS - TAFT, TN
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Home Additions<br />in Taft TN
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Room additions, garage additions, and remodeling for homes in Taft and throughout southern Lincoln County.
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
            Home Addition Contractor in Taft and Southern Lincoln County
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/remodeling/remodel14.jpeg"
                alt="Home addition Taft TN southern Lincoln County"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Marberry Construction builds home additions throughout Lincoln County and the southern part of the county including Taft. Our Fayetteville base puts us less than 15 miles from Taft, which is not a service area extension for us. It is home territory. When you hire us for an addition in the Taft area, you are working with the contractor who knows this specific part of Lincoln County, knows the building department process, and is close enough to be on site quickly and consistently throughout your project.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Many homes in the Taft area sit on larger rural lots with room to expand. For homeowners who have outgrown their current space but do not want to leave the land, a well-built addition delivers exactly what a move to a bigger house would deliver, without the disruption and cost of selling, buying, and relocating. You stay on your property, keep your acreage, and get the space your household actually needs built the way you want it.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Additions in southern Lincoln County go through the Lincoln County Building Department. The permit process requires construction drawings, setback and easement verification, and trade permits for any electrical, plumbing, or mechanical work included in the scope. We handle the full submission process on every addition we build. You do not need to navigate the county permit system on your own or track down subcontractors for individual trades.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Every addition we build is coordinated so it matches the existing home. Siding profiles, roofline alignment, window sizing, and trim details are all matched to the original structure. An addition that looks like a mismatched attachment does not add value the way a well-integrated addition does. Our approach is to build something that looks like it was always part of the house.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            What We Build in Taft and Southern Lincoln County
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            We build a full range of residential additions throughout the Taft area. Bedroom and living space additions are the most common request as families grow. Attached garages are a close second, particularly on older homes in southern Lincoln County that were built without one. Covered porches and outdoor living structures are increasingly popular as homeowners look to maximize the value of the rural lot they are already on.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Kitchen and bathroom remodels are frequently paired with addition projects. If you are already pulling permits and having a crew on site for an addition, addressing an outdated kitchen or bathroom at the same time is efficient and cost-effective. We handle all of it in-house with one point of contact throughout.
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
            "Southern Lincoln County homeowners are closer to us than most of our clients. We treat that proximity like the advantage it is."
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Home Addition Costs Near Taft TN
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Home additions in the Taft and southern Lincoln County area typically run $120 to $220 per square foot depending on the complexity of the work, the finishes selected, and how much structural work is required to connect the addition to the existing home. Most addition projects in this area come in between $40,000 and $120,000 for a meaningful addition that adds usable square footage and real value.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Smaller projects like covered porches, mudrooms, and utility additions can come in under $30,000. Site visits throughout Taft and southern Lincoln County are free and we provide detailed written estimates before any work begins. You know what the project will cost before committing to anything.
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
