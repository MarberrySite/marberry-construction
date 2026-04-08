import type { Metadata } from 'next';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Custom Home Builder in Fayetteville TN | Marberry Construction',
  description:
    'Marberry Construction builds custom homes in Fayetteville TN, Huntsville AL, and surrounding areas. Licensed general contractor. Call 256-679-8665.',
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

const steps = [
  {
    number: '1',
    title: 'Land and Design',
    description:
      'We start with your lot and your vision. Our team helps plan the layout, room flow, and finishes.',
  },
  {
    number: '2',
    title: 'Permits and Planning',
    description:
      'We pull all required permits in Tennessee and Alabama and manage the full approval process.',
  },
  {
    number: '3',
    title: 'Construction',
    description:
      'From foundation to framing, roofing, electrical, plumbing, and finish work. All under one roof.',
  },
  {
    number: '4',
    title: 'Walk and Close',
    description:
      'Final walkthrough, punch list, and handover. You get a home built right the first time.',
  },
];

const leftChecklist = [
  'Custom floor plans',
  'Site preparation and grading',
  'Foundation and concrete work',
  'Full framing and structural',
  'Roofing (metal or shingle)',
  'Windows and exterior doors',
];

const rightChecklist = [
  'Electrical and plumbing rough-in',
  'HVAC installation',
  'Insulation and drywall',
  'Interior trim and cabinetry',
  'Flooring and paint',
  'Final landscaping and cleanup',
];

const faqItems = [
  {
    question: 'How long does it take to build a custom home in Tennessee?',
    answer:
      'Most custom homes take 8 to 14 months from permit approval to move-in, depending on size and finish level. We give you a detailed timeline at the start of every project.',
  },
  {
    question: 'Do I need to own land before I contact you?',
    answer:
      'Not necessarily. We can work with land you already own or help you think through lot requirements before you purchase.',
  },
  {
    question: 'What does a custom home cost in Fayetteville TN?',
    answer:
      'Most of our builds range from $175 to $275 per square foot depending on finishes, lot conditions, and design complexity.',
  },
  {
    question: 'Are you licensed in both Tennessee and Alabama?',
    answer:
      'Yes. Marberry Construction holds TN License #77673 and operates throughout Southern Tennessee and Northern Alabama.',
  },
];

export default function CustomHomeBuilderPage() {
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
            CUSTOM HOME CONSTRUCTION
          </p>
          <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
            Your Home.<br />Built From Scratch.
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-10">
            We handle everything from design and permits to build and handover in Fayetteville TN
            and across Southern Tennessee and Northern Alabama.
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

      {/* Section 1 — How We Build */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-skyblue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            The Process
          </p>
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            How We Build Your Home
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {steps.map((step) => (
              <div key={step.number} className="bg-warmwhite rounded-xl p-8">
                <p className="font-playfair text-5xl font-bold text-gold mb-4">{step.number}</p>
                <p className="font-semibold text-navy text-lg mb-2">{step.title}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — What's Included */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-skyblue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Scope of Work
          </p>
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            What&apos;s Included in Every Build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="space-y-3">
              {leftChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-skyblue font-bold text-lg leading-tight">&#10003;</span>
                  <span className="text-navy text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {rightChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-skyblue font-bold text-lg leading-tight">&#10003;</span>
                  <span className="text-navy text-sm">{item}</span>
                </div>
              ))}
            </div>
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
            Where We Build Custom Homes
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
