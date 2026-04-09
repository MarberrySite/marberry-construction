import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Septic System Installation Athens AL | Marberry Construction',
  description:
    'Septic system installation in Athens AL and Limestone County. Licensed contractor. Call 256-679-8665.',
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

const installSteps = [
  'Soil evaluation and percolation test',
  'System design based on your specific lot',
  'Permit application to Limestone County Health Department',
  'Alabama Department of Public Health review',
  'Installation once permits are approved',
  'Final inspection and full documentation',
];

const faqItems = [
  {
    question: 'Do you install septic systems in Athens AL?',
    answer:
      'Yes. Athens and Limestone County is a regular part of our Alabama septic service area.',
  },
  {
    question: 'How long does the Limestone County permit take?',
    answer:
      'Typically 3 to 6 weeks through the Limestone County Health Department depending on workload and soil conditions.',
  },
  {
    question: 'Do you handle the Alabama permit process?',
    answer:
      'Yes. We manage the full application through the Limestone County Health Department under Alabama Department of Public Health standards.',
  },
  {
    question: 'What type of system do I need in Limestone County?',
    answer:
      'It depends on your soil conditions. Clay soils common in this area sometimes require alternative systems. We assess your lot first and design accordingly.',
  },
];

export default function SepticInstallationAthensPage() {
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
              SEPTIC INSTALLATION - ATHENS, AL
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Septic Installation<br />in Athens AL
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              New septic systems for homes and new construction in Athens and throughout Limestone County Alabama.
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
            Septic System Contractor in Limestone County Alabama
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/septic/septic18.jpeg"
                alt="Septic system installation Athens AL Limestone County"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Unincorporated Limestone County is largely on private septic. Municipal sewer service is concentrated in incorporated areas of Athens and a few other communities, but the vast majority of rural residential properties in the county rely on private septic systems. For new construction on rural lots throughout Limestone County, a properly designed and installed septic system is a requirement, not an option.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Marberry Construction installs conventional and alternative septic systems throughout Limestone County under Alabama licensing. We handle both the system installation and the full permit process through the Limestone County Health Department and the Alabama Department of Public Health. For clients building a new home, we coordinate the septic permit with the building permit so both systems are approved and on schedule before the build begins.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Soil conditions in the Athens area are heavily influenced by the Alabama red clay that characterizes much of Northern Alabama. Clay soils drain slowly, which directly affects how a septic system is designed for your lot. Clay-heavy soil requires larger drain fields or, in some cases, an alternative system type that manages effluent differently than a conventional gravity-fed field. We assess your lot&apos;s specific soil before recommending a system, and we explain what the soil findings mean for system type and cost before any design work begins.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Limestone County has seen rapid residential growth as the Huntsville metro expands northwest. That growth means more new septic installations on rural lots throughout the county, many of which have the clay-heavy soil conditions that require careful system design. We account for those conditions from the start of every project. A system designed correctly for the soil it sits in functions well for decades. A system designed for different conditions will fail early on Limestone County clay.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Septic Permits in Limestone County Alabama
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            In Alabama, septic system installation requires approval through the county health department before any work begins. The Limestone County Health Department administers this process under Alabama Department of Public Health standards. The application requires a site evaluation, a soil morphology report, and an approved system design. The ADPH sets the standards the county enforces, and the county inspection at the end of the installation is required before the system can be placed into service.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Permit timelines in Limestone County typically run 3 to 6 weeks from application to approval. We submit complete applications and follow up with the health department throughout the process. For new construction projects, the septic permit timeline is factored into the overall build schedule from the start so the installation happens at the right point in the construction sequence and nothing sits idle waiting on county approval.
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
            &quot;Limestone County septic permits go through the Alabama Department of Public Health. We handle every step of that process.&quot;
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Septic Installation Costs in Athens AL
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Conventional septic systems in the Limestone County area typically run $4,000 to $12,000 installed, including tank, drain field, and all connections. Alternative systems, required on some lots due to clay soil conditions, run $8,000 to $20,000 depending on system type and configuration. The specific cost on your lot depends on the tank size required, the drain field length the county approves based on your soil evaluation, and whether site work is needed before installation begins.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Clay soils common in the Athens area sometimes require larger drain fields or alternative system designs, both of which affect cost. We account for this from the start rather than discovering it mid-project. All costs include permits, materials, and labor. We provide written estimates after reviewing your lot and the permit requirements so the number we give you is based on your actual site conditions.
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
