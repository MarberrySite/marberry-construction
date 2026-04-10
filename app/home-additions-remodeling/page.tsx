import type { Metadata } from 'next';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Home Additions in Fayetteville TN | Marberry Construction',
  description:
    'Room additions, garage additions, and home remodeling in Fayetteville TN and Huntsville AL. Licensed contractor. Call 256-679-8665.',
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
    'Fayetteville TN', 'Ardmore TN', 'Huntsville AL',
    'Madison County AL', 'Athens AL', 'Taft TN',
    'Giles County TN', 'Winchester TN',
  ],
};

const serviceAreas = [
  'Huntsville AL', 'Madison County AL', 'Athens AL',
  'Fayetteville TN', 'Ardmore TN', 'Taft TN',
  'Giles County TN', 'Winchester TN',
];

const additionServices = [
  {
    title: 'Room Additions',
    body: 'Extra bedrooms, living space, or a home office. We build additions that match your existing home perfectly.',
  },
  {
    title: 'Garage Additions',
    body: 'Attached or detached garages built to your specs and matching your home\'s exterior.',
  },
  {
    title: 'Kitchen and Bath Remodels',
    body: 'Full gut and rebuild or targeted upgrades. We handle permits, demo, and finish work.',
  },
  {
    title: 'Covered Porches and Decks',
    body: 'Outdoor living spaces built to last in Tennessee weather.',
  },
];

const steps = [
  {
    number: '1',
    title: 'Consultation and Design',
    description:
      'We meet on site, measure, and plan the addition around your home\'s existing structure.',
  },
  {
    number: '2',
    title: 'Permits and Approval',
    description: 'We pull all required building permits and handle county approval.',
  },
  {
    number: '3',
    title: 'Construction',
    description:
      'We build from the outside in where possible to minimize disruption to your daily life.',
  },
  {
    number: '4',
    title: 'Final Walkthrough',
    description:
      'We walk the finished space with you and don\'t close out until you\'re satisfied.',
  },
];

const faqItems = [
  {
    question: 'Do I need a permit for a home addition in Tennessee?',
    answer:
      'Yes. Any structural addition requires a building permit in Tennessee. We handle the full permit process.',
  },
  {
    question: 'How long does a room addition take?',
    answer:
      'Most room additions take 6 to 12 weeks from permit approval depending on size and complexity.',
  },
  {
    question: 'Will construction disrupt my daily life?',
    answer:
      'We work to minimize disruption. Most additions are built from the outside in so your living space stays intact.',
  },
  {
    question: 'Can you match my existing home\'s exterior?',
    answer:
      'Yes. We source matching materials and take care to blend the addition seamlessly with your existing home.',
  },
];

export default function HomeAdditionsRemodelingPage() {
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
            HOME ADDITIONS AND REMODELING
          </p>
          <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
            More Space.<br />No Compromise.
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-10">
            We expand what you already have.<br />Additions, remodels, and renovations done right.
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

      {/* Intro */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Home Addition and Remodeling Contractor in Fayetteville TN
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Marberry Construction builds home additions and handles remodeling projects throughout Lincoln County, Giles County, Franklin County, and into Northern Alabama. Whether you need an extra bedroom, a larger kitchen, an attached garage, or a covered porch, we build additions that match your existing home in structure, materials, and appearance.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Most of our addition clients have outgrown their current home but love their land, their neighborhood, or their location too much to move. Adding on is often the smarter financial decision, especially in a market where replacing your home means taking on a much higher mortgage. A well-built addition adds usable square footage and increases your home value without the cost and disruption of buying and selling.
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            We handle every phase of the addition in-house. That means you deal with one contractor from design through final walkthrough. We pull the permits, manage the schedule, and coordinate all trades. You do not have to find a framer, then a plumber, then an electrician separately. We handle it.
          </p>
        </div>
      </section>

      {/* Section 1 — Services */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-skyblue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Addition and Remodeling Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {additionServices.map((service) => (
              <div key={service.title} className="bg-warmwhite rounded-xl p-8">
                <p className="font-semibold text-navy text-lg mb-2">{service.title}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Process */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-skyblue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            The Process
          </p>
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {steps.map((step) => (
              <div key={step.number} className="bg-white rounded-xl p-8">
                <p className="font-playfair text-5xl font-bold text-gold mb-4">{step.number}</p>
                <p className="font-semibold text-navy text-lg mb-2">{step.title}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Home Addition Costs in Tennessee and What Affects the Price
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Home additions in this region typically run $120 to $220 per square foot depending on the complexity of the work, the finishes selected, and how much structural work is required to tie the addition into the existing home. A simple bedroom addition with standard finishes costs significantly less per square foot than a kitchen expansion that requires moving load bearing walls, upgrading the electrical panel, and installing custom cabinetry.
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            Most of our addition clients in Lincoln County and surrounding areas spend between $40,000 and $120,000 for a meaningful addition that adds real value to the home. Smaller projects like covered porches, mudrooms, or utility additions can come in under $30,000. We give detailed written estimates before any work begins so you know what you are committing to before you sign anything.
          </p>
        </div>
      </section>

      {/* Section 3 — Service Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-skyblue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Where We Work
          </p>
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Our Service Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="bg-navy/5 border border-navy/20 rounded-full px-6 py-2.5 text-navy text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — FAQ */}
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

      {/* CTA Banner */}
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
