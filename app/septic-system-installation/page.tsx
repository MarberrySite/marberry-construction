import type { Metadata } from 'next';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Septic System Installation in Fayetteville TN | Marberry Construction',
  description:
    'New septic system installation in Lincoln County TN, Giles County TN, and Madison County AL. Licensed contractor. Call 256-679-8665.',
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
    title: 'Site Evaluation',
    description:
      'We assess your lot, soil conditions, and county requirements before any work begins.',
  },
  {
    number: '2',
    title: 'Permit Pulling',
    description:
      'We handle all county permit applications in Tennessee and Alabama.',
  },
  {
    number: '3',
    title: 'Installation',
    description:
      'Tank installation, drain field construction, and all connections done to code.',
  },
  {
    number: '4',
    title: 'Final Inspection',
    description:
      'We coordinate the final county inspection and provide full documentation.',
  },
];

const systemTypes = [
  {
    title: 'Conventional Septic',
    body: 'The standard system for most residential lots. Reliable, proven, and cost-effective.',
  },
  {
    title: 'Chamber Systems',
    body: 'An alternative to gravel drain fields. Better for certain soil types and lot conditions.',
  },
  {
    title: 'Alternative and Aerobic Systems',
    body: 'For lots where conventional systems are not approved. We assess and recommend the right fit.',
  },
];

const faqItems = [
  {
    question: 'How much does a new septic system cost in Tennessee?',
    answer:
      'Most residential septic installations run $4,000 to $12,000 depending on soil conditions, system type, and lot size.',
  },
  {
    question: 'Do you pull the permits?',
    answer: 'Yes. We handle all county permit applications in Tennessee and Alabama.',
  },
  {
    question: 'How long does installation take?',
    answer: 'Most systems are installed in 3 to 7 days once permits are approved.',
  },
  {
    question: 'Do I need a new septic for new construction?',
    answer:
      'Yes. Every new home needs an approved septic system or connection to municipal sewer. We handle the full process for new construction builds.',
  },
];

export default function SepticSystemInstallationPage() {
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
            SEPTIC INSTALLATION
          </p>
          <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
            New Septic Systems<br />Installed Right.
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-10">
            Full septic system installation for new construction and existing properties across
            Tennessee and Alabama.
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

      {/* Section 1 — Process */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-skyblue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            The Process
          </p>
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Full Septic Installation Service
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

      {/* Section 2 — System Types */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-skyblue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            System Options
          </p>
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Septic Systems We Install
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {systemTypes.map((system) => (
              <div key={system.title} className="bg-white rounded-xl p-8">
                <p className="font-semibold text-navy text-lg mb-3">{system.title}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{system.body}</p>
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
