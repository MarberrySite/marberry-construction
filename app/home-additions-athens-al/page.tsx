import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Home Additions Athens AL | Marberry Construction',
  description:
    'Home additions and remodeling in Athens AL and Limestone County. Licensed contractor. Call 256-679-8665.',
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

const additionTypes = [
  'Room and bedroom additions',
  'Attached and detached garage additions',
  'Kitchen and bathroom remodels',
  'Covered porches and outdoor living spaces',
  'Full permit management through Limestone County',
  'All trades coordinated in-house',
];

const faqItems = [
  {
    question: 'Do you build additions in Athens AL?',
    answer:
      'Yes. Athens and Limestone County is part of our regular Alabama service area.',
  },
  {
    question: 'Do you handle permits in Limestone County AL?',
    answer:
      'Yes. We manage permits through the Limestone County building department on every project.',
  },
  {
    question: 'How much does an addition cost in Athens AL?',
    answer:
      'Most additions run $120 to $220 per square foot. Total projects typically range $40,000 to $120,000.',
  },
  {
    question: 'How long does an addition take in Limestone County?',
    answer:
      'Most room additions take 6 to 12 weeks from permit approval depending on size and complexity.',
  },
];

export default function HomeAdditionsAthensPage() {
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
              HOME ADDITIONS - ATHENS, AL
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Home Additions<br />in Athens AL
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Room additions, garage additions, and remodeling for homes in Athens and throughout Limestone County.
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
            Home Addition Contractor in Athens Alabama
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/remodeling/remodel13.jpeg"
                alt="Home addition Athens Alabama Limestone County"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Marberry Construction builds home additions throughout Limestone County and the Athens area. Whether you need a bedroom addition, a larger kitchen, an attached garage, or a covered porch, we build additions that match your existing home and handle the full permit process through Limestone County. Our Alabama license and experience in this area means you are not working with a contractor who is learning the Limestone County building department for the first time on your project.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Athens area home values have risen meaningfully with the Huntsville metro expansion pushing northwest into Limestone County. Homeowners who purchased rural lots in the Athens area several years ago and built or bought homes on them are sitting on property values that have increased substantially. A well-built addition adds to that value while delivering the functional space the household actually needs. That combination of immediate benefit and long-term equity makes additions a strong decision for Limestone County homeowners.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Many Athens-area homeowners own larger rural lots and want to expand their home without giving up that land. Building an addition is the right answer for those families. You keep the property, you keep the acreage, and you get the space you need built exactly the way you want it, without the cost and disruption of selling, finding something larger, and moving.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            We handle every phase of the addition in-house. One contractor from the initial site visit through the final walkthrough. We pull the permits, manage the schedule, and coordinate all trades involved. You have one point of contact throughout the build and direct access to Brandon throughout the project.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            What We Build in Athens and Limestone County
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Home additions in Limestone County require a building permit through the Limestone County Building Department. The process involves construction drawings, setback and easement verification, and trade permits for electrical, mechanical, and plumbing work. We handle the full submission and follow up with the county throughout. For Alabama-side projects, we are familiar with Limestone County's specific requirements and the inspection sequence the county uses for residential addition projects.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Matching the existing home is a priority on every project. An addition that looks like it belongs to the house adds value in a way that a visibly different structure does not. We source matching siding, roofing, trim, and window profiles and pay attention to roofline alignment so the result looks like part of the original home from every angle.
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
            "Athens homeowners are sitting on rising property values. A well-built addition compounds that value even further."
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Home Addition Costs in Athens AL
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Home additions in the Athens and Limestone County area typically run $120 to $220 per square foot depending on the complexity of the work, the finishes selected, and how much structural work is required to tie the addition into the existing home. Labor and material costs in Limestone County are similar to Southern Tennessee, which means Athens-area clients get the same pricing structure as our Tennessee service area clients.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Most addition clients in Limestone County spend between $40,000 and $120,000 for a meaningful addition that adds usable square footage and real value to their home. Smaller projects like covered porches, mudrooms, and utility additions can come in under $30,000. On-site estimates throughout Athens and Limestone County are free, and we provide detailed written estimates before any work begins so you know exactly what the project will cost before you commit.
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
