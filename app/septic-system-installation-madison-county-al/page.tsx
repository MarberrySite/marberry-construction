import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Septic System Installation Madison County AL | Marberry Construction',
  description:
    'Septic system installation in Madison County AL. New systems for Harvest, Meridianville, New Market, Toney, and surrounding areas. Licensed contractor. Call 256-679-8665.',
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

const installSteps = [
  'Site evaluation and soil morphology assessment',
  'Percolation testing on your specific lot',
  'System design submission to the Alabama Department of Public Health',
  'ADPH review and permit approval',
  'Full installation once permits are in hand',
  'Final county inspection and documentation',
];

const faqItems = [
  {
    question: 'Do you install septic systems in rural Madison County AL?',
    answer:
      'Yes. We install throughout unincorporated Madison County including Harvest, Meridianville, New Market, Toney, Hazel Green, and Gurley.',
  },
  {
    question: 'How does the septic permit process work in Madison County AL?',
    answer:
      'Alabama septic permits go through the Alabama Department of Public Health. We manage the full submission process including site evaluation, soil assessment, and system design.',
  },
  {
    question: 'How long does the ADPH permit take for Madison County?',
    answer:
      'Typically 4 to 10 weeks depending on ADPH workload and soil evaluation results. We factor this timeline into the overall project schedule from the start.',
  },
  {
    question: 'What type of septic system do I need on a Madison County lot?',
    answer:
      'It depends on your specific soil conditions. Madison County red clay lots often require alternative systems. We assess your lot and recommend the right system before any work begins.',
  },
];

export default function SepticInstallationMadisonCountyPage() {
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
            backgroundImage: 'url(/images/hero-septic.jpeg)',
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
              SEPTIC INSTALLATION - MADISON COUNTY, AL
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Septic Installation<br />in Madison County AL
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              New septic systems for homes and new construction throughout unincorporated Madison County Alabama.
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
            Septic Contractor Serving Rural Madison County Alabama
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/septic/septic22.jpeg"
                alt="Septic system installation Madison County Alabama"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Most residential lots across unincorporated Madison County are not connected to municipal sewer. Harvest, Meridianville, New Market, Toney, Hazel Green, and Gurley are rural communities where private septic is the standard on virtually every residential property. For families building on lots in these communities, a correctly designed and permitted septic system is not optional. It is the foundation of a functioning home.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Marberry Construction installs conventional and alternative septic systems throughout Madison County under Alabama licensing. We are familiar with the Alabama Department of Public Health permit process that governs all on-site wastewater systems in the state. The ADPH process is distinct from the county health department process used in Tennessee, and we know both from regular work on both sides of the state line.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Madison County soil conditions present real challenges for septic system design on many lots. The red clay that characterizes large portions of unincorporated Madison County drains slowly by nature. Properties on lower ground, in drainage areas, or with heavy clay content require careful system sizing and often alternative drain field configurations to function correctly long-term. We assess the specific soils on your lot before recommending any system type or providing a cost estimate. Generic designs applied to clay-heavy soils fail early. Systems designed for the actual conditions on your property work correctly for decades.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Most of our septic installations in rural Madison County are either new construction projects coordinated with a home build or replacement installations on existing properties. We handle both and coordinate the septic permit timeline with the building permit on new construction projects so neither system stalls waiting on the other.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Septic Permit Process for Madison County AL Properties
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Alabama requires ADPH approval before any septic system installation can begin. The Alabama Department of Public Health administers the on-site wastewater program statewide. The application process requires a site evaluation, a soil morphology report, and an approved system design. We coordinate the soil evaluation, prepare the application package, and manage the full submission and follow-up process. You do not need to navigate the ADPH process on your own.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Permit timelines through ADPH for Madison County typically run 4 to 10 weeks from application to approval. We factor this timeline into the overall project schedule from the start so there are no surprises. For new construction, the septic permit and building permit are coordinated together so the installation happens at the right point in the construction sequence.
          </p>
          <h3 className="font-semibold text-navy text-lg mb-4">Our installation process from start to finish:</h3>
          <ul className="space-y-3">
            {installSteps.map((item) => (
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
            "Madison County red clay soil makes septic design critical. We size the system right the first time."
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Septic System Costs in Madison County AL
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Conventional septic systems in unincorporated Madison County typically run $5,000 to $14,000 installed, including tank, drain field, and all connections. Alternative systems required on clay-heavy lots run $9,000 to $22,000 depending on system type and configuration. The specific cost on your lot depends on the tank size required, the drain field length ADPH approves, and whether any site work is needed before installation begins.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Soil conditions across Madison County vary enough from lot to lot that we do not quote from generic numbers. We assess your specific property and give you a written estimate based on what we find. All costs include permits, materials, and labor.
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
            <Link href="/septic-system-installation" className="text-skyblue font-semibold hover:underline">
              Learn more about our septic installation services
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
