import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Septic System Installation Near Huntsville AL | Marberry Construction',
  description:
    'Septic system installation in Madison County AL and near Huntsville. Licensed contractor. Call 256-679-8665.',
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

const installSteps = [
  'Soil evaluation and percolation test',
  'System design based on lot conditions',
  'Permit application to Madison County Health Department',
  'Alabama Department of Public Health approval',
  'Tank and drain field installation to code',
  'Final county inspection and documentation',
];

const faqItems = [
  {
    question: 'Do you install septic systems near Huntsville AL?',
    answer:
      'Yes. We serve Madison County and surrounding areas including Harvest, Meridianville, Toney, and New Market.',
  },
  {
    question: 'How long does septic installation take in Madison County?',
    answer:
      'Once permits are approved, most installations take 3 to 7 days. The permit process typically takes 3 to 6 weeks.',
  },
  {
    question: 'Do you handle the Alabama septic permit process?',
    answer:
      'Yes. We handle the full permit application through the Madison County Health Department.',
  },
  {
    question: 'What type of septic system do I need in Madison County?',
    answer:
      'It depends on your soil. Red clay common in Madison County sometimes requires an alternative system. We assess your lot before making any recommendation.',
  },
];

export default function SepticInstallationHuntsvillePage() {
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
              SEPTIC INSTALLATION - HUNTSVILLE, AL
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Septic Installation<br />Near Huntsville AL
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              New septic systems for homes and new construction in Madison County and Northern Alabama.
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
            Septic System Contractor Serving Madison County Alabama
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/septic/septic3.jpeg"
                alt="Septic system installation near Huntsville Alabama"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Most properties in unincorporated Madison County are not connected to municipal sewer. That means a properly designed and installed septic system is required on virtually every rural property in the area. Marberry Construction installs conventional and alternative septic systems for new construction builds and existing properties throughout Madison County and surrounding areas of Northern Alabama.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                The Madison County Health Department handles septic permits for all unincorporated properties in the county. The permit process requires a soil evaluation and percolation test before a system can be designed and approved. We coordinate the soil evaluation and manage the full permit application on every project we take on. You do not have to navigate the county process on your own.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Red clay soils are common throughout the Huntsville area and much of the Tennessee Valley. Clay is what makes this region's soil what it is, and it has real implications for septic system design. Clay drains slowly, which affects drain field sizing, the type of system that can be approved on a given lot, and the long-term performance of the system once it is installed. We account for soil conditions in every system we design and install. A properly designed system on clay soil works well for decades. A system that was sized for sandy loam and installed on clay will fail early.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Most of our Madison County septic projects are either new construction installs coordinated with a full home build, or replacement installations on existing properties where the old system has failed or where a property is being developed for the first time. We handle both and we work on both sides of the state line, so if your project crosses from Alabama into Limestone County or Lincoln County, Tennessee, we know the requirements on each side.
          </p>
        </div>
      </section>

      {/* Section 2 — Checklist */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Septic Permits in Madison County Alabama
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            In Alabama, septic system installation requires approval through the county health department before any work begins. The Madison County Health Department oversees this process for unincorporated properties in the county. The application requires a site evaluation, a soil morphology report, and an approved system design. The Alabama Department of Public Health sets the standards that the county enforces, and the county inspection at the end of the installation is required before the system can be placed into service.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            The permit timeline in Madison County typically runs 3 to 6 weeks from application to approval depending on the health department's workload and whether any issues arise during the soil evaluation. We submit complete applications and follow up with the county throughout the process. For new construction projects, the septic permit timeline factors into the overall build schedule so that the system is installed and inspected at the right point in the construction sequence.
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
            "We handle the permit, the install, and the inspection on both sides of the Tennessee-Alabama state line."
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Septic Installation Costs Near Huntsville AL
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Conventional septic systems in the Madison County area typically run $4,000 to $12,000 installed, including tank, drain field, and all connections. Alternative systems, including aerobic and chamber systems, run $8,000 to $20,000 depending on system size and site conditions. The specific cost on your lot depends on the size of the tank required for your home, the length of drain field the county approves based on your soil, and whether any site work is needed before installation begins.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Madison County red clay soils sometimes require larger drain fields or alternative system designs compared to sandy soil lots. That affects cost, and we factor it in from the start rather than surprising you with changes mid-project. All costs include permits, materials, and labor. We provide written estimates after reviewing the permit documentation and walking the site, so the number we give you is based on your actual lot, not a generic square footage estimate.
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
