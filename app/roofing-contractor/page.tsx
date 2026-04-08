import type { Metadata } from 'next';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Roofing Contractor in Fayetteville TN | Marberry Construction',
  description:
    'Metal roofing installation and replacement in Fayetteville TN and Huntsville AL. Licensed contractor. Call 256-679-8665.',
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

const roofingServices = [
  {
    title: 'New Roof Installation',
    body: 'Full metal roofing installation on new construction and existing homes.',
  },
  {
    title: 'Roof Replacement',
    body: 'Remove old roofing and replace with durable metal. Standing seam or corrugated.',
  },
  {
    title: 'New Construction Roofing',
    body: 'We roof every home we build and take on standalone roofing projects throughout the region.',
  },
];

const whyMetal = [
  'Lasts 40 to 70 years vs 15 to 20 for shingles',
  'Lower insurance premiums in many Tennessee counties',
  'Handles Tennessee ice, wind, and summer heat better than shingles',
  'Energy efficient. Reflects heat and lowers cooling costs.',
  'Increases resale value of your home',
];

const faqItems = [
  {
    question: 'How much does a metal roof cost in Tennessee?',
    answer:
      'Metal roofing typically runs $8 to $14 per square foot installed, depending on roof pitch, size, and material choice.',
  },
  {
    question: 'How long does a roof replacement take?',
    answer: 'Most residential replacements are complete in 2 to 5 days.',
  },
  {
    question: 'Do you offer warranties?',
    answer:
      'Yes. We stand behind our work with a workmanship warranty on every roofing project.',
  },
  {
    question: 'Do you do roofing in Alabama?',
    answer:
      'Yes. We serve Huntsville AL, Madison County AL, Athens AL, and surrounding areas in addition to our Tennessee markets.',
  },
];

export default function RoofingContractorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-navy">
        <div
          className="absolute top-0 right-0 bottom-0 w-[55%]"
          style={{
            backgroundImage: 'url(/images/hero.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: '30% center',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, #1B2A4A 45%, transparent 45%)' }}
        />
        <div className="relative z-10 max-w-xl md:max-w-[45%] mx-4 md:mx-8 lg:mx-14 py-20">
          <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            ROOFING SERVICES
          </p>
          <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
            Metal Roofing<br />That Lasts Decades.
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-10">
            Installation, replacement, and repair for residential and new construction across
            Southern Tennessee and Northern Alabama.
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
      </section>

      {/* Section 1 — Services */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-skyblue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Roofing Services We Provide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {roofingServices.map((service) => (
              <div key={service.title} className="bg-warmwhite rounded-xl p-8">
                <p className="font-semibold text-navy text-lg mb-3">{service.title}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Why Metal */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-skyblue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            The Case for Metal
          </p>
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Why Metal Roofing?
          </h2>
          <div className="space-y-4 mt-8">
            {whyMetal.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="text-skyblue font-bold text-lg leading-tight">&#10003;</span>
                <span className="text-slate-600 text-base leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
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
