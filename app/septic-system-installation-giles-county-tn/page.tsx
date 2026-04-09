import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Septic System Installation Giles County TN | Marberry Construction',
  description:
    'Septic system installation in Giles County TN and Pulaski. Licensed contractor. Call 256-679-8665.',
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
    'Giles County TN', 'Pulaski TN', 'Elkton TN',
    'Minor Hill TN', 'Lynnville TN', 'Prospect TN',
    'Cornersville TN', 'Lawrenceburg TN',
  ],
};

const communities = [
  'Pulaski', 'Elkton', 'Minor Hill', 'Lynnville',
  'Prospect', 'Cornersville', 'Fayetteville', 'Lawrenceburg',
];

const installSteps = [
  'Site evaluation and soil morphology report',
  'Percolation testing on your lot',
  'System design submission to Giles County Health Department',
  'TDEC review and approval',
  'Installation once permits are in hand',
  'Final county inspection and documentation',
];

const faqItems = [
  {
    question: 'Do you install septic systems in Giles County TN?',
    answer:
      'Yes. Giles County is a regular part of our septic installation service area.',
  },
  {
    question: 'How long does the Giles County permit take?',
    answer:
      'Typically 3 to 8 weeks through the Giles County Health Department depending on workload and soil evaluation results.',
  },
  {
    question: 'Do you handle the permit application?',
    answer:
      'Yes. We manage the full permit process including soil evaluation coordination and submission to the Giles County Health Department.',
  },
  {
    question: 'What type of system do I need in Giles County?',
    answer:
      'It depends on your soil. We assess your lot and recommend the right system type before any work begins.',
  },
];

export default function SepticInstallationGilesCountyPage() {
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
              SEPTIC INSTALLATION - GILES COUNTY, TN
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Septic Installation<br />in Giles County TN
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              New septic systems for homes and new construction throughout Giles County and the Pulaski Tennessee area.
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
            Septic Installation Contractor in Giles County Tennessee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/septic/septic14.jpeg"
                alt="Septic system installation Giles County TN"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Most rural properties in Giles County are not connected to municipal sewer. That means a properly designed and installed septic system is required on virtually every rural lot in the county. Marberry Construction installs conventional and alternative septic systems for new construction and existing properties throughout Giles County and the Pulaski area, working under Tennessee licensing with full familiarity of the Giles County Health Department permit process.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                The Giles County Health Department administers septic permits for unincorporated properties in the county under Tennessee Department of Environment and Conservation standards. The permit process requires a site evaluation, a soil morphology report, and an approved system design before any installation work can begin. We coordinate the soil evaluation and manage the full permit application on every project. You do not need to navigate the county process on your own.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Soil conditions in Giles County are mixed and vary by elevation and location across the county&apos;s rolling terrain. The Highland Rim geology that characterizes much of Middle Tennessee means some areas have good draining soils while others have heavier clay content that requires more careful system design. Properties at lower elevations and in creek drainage areas can have soils with poor natural drainage that affect drain field sizing and the type of system the county will approve. We assess your specific lot before recommending anything.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Most of our Giles County septic projects are new construction installs coordinated alongside a home build, or replacement installations on existing properties where the old system has reached end of life. We handle both and coordinate the septic permit timeline with the overall build schedule on new construction projects so the system is installed and inspected at the right point in the construction sequence.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Septic Permit Process in Giles County Tennessee
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Septic installation in Tennessee requires county health department approval before any work begins. The Giles County Health Department administers this process and works within TDEC standards for system design, installation, and inspection. The application package requires a site evaluation, a soil profile, and a system design that addresses the specific conditions on your lot. Once approved, the installation must be completed and inspected before the system can be placed in service.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Permit timelines in Giles County typically run 3 to 8 weeks from application to approval depending on the health department&apos;s current workload and whether the soil evaluation produces any complications. We submit complete, well-documented applications and follow up with the county throughout the process. For new construction clients, the septic permit timeline is factored into the overall build schedule from the start so nothing stalls mid-project waiting on county approvals.
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
            &quot;In Giles County, we know the health department process and the soil conditions. We handle it all so you do not have to.&quot;
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Septic System Costs in Giles County TN
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Conventional septic systems in the Giles County area typically run $4,000 to $12,000 installed, including tank, drain field, and all connections. Alternative systems, required on some lots due to soil conditions, run $8,000 to $20,000 depending on system type, size, and site conditions. The specific cost on your lot depends on the tank size required for your home, the length of drain field the county approves based on soil evaluation results, and whether any site work is needed before installation begins.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Giles County soil conditions vary enough from lot to lot that we do not quote from generic tables. We assess your specific lot and give you a written estimate based on the actual conditions we find. All costs include permits, materials, and labor. There are no surprises after the estimate is issued.
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
              Serving Pulaski and Surrounding Communities
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
