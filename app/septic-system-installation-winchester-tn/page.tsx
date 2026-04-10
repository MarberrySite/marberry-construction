import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Septic System Installation Winchester TN | Marberry Construction',
  description:
    'Septic system installation in Winchester TN and Franklin County. Licensed contractor. Call 256-679-8665.',
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
    'Winchester TN', 'Franklin County TN', 'Estill Springs TN',
    'Decherd TN', 'Cowan TN', 'Huntland TN',
    'Belvidere TN', 'Tullahoma TN',
  ],
};

const communities = [
  'Winchester', 'Estill Springs', 'Decherd', 'Cowan',
  'Huntland', 'Belvidere', 'Fayetteville', 'Tullahoma',
];

const installSteps = [
  'Site evaluation and soil morphology report',
  'Percolation testing',
  'System design submission to Franklin County Health Department',
  'TDEC approval process',
  'Installation once permits are approved',
  'Final inspection and documentation',
];

const faqItems = [
  {
    question: 'Do you install septic systems in Winchester TN?',
    answer:
      'Yes. We serve Winchester and Franklin County for new septic installations.',
  },
  {
    question: 'How long does the Franklin County permit take?',
    answer:
      'Typically 3 to 8 weeks through the Franklin County Health Department depending on workload and whether any issues arise during the soil evaluation.',
  },
  {
    question: 'Do you handle the permit application?',
    answer:
      'Yes. We manage the full permit process including soil evaluation coordination and submission to the Franklin County Health Department.',
  },
  {
    question: 'What affects septic system cost in Franklin County?',
    answer:
      'Soil conditions, system type, tank size, and drain field length. We assess your lot and give a detailed estimate before any work begins.',
  },
];

export default function SepticInstallationWinchesterPage() {
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
              SEPTIC INSTALLATION - WINCHESTER, TN
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Septic Installation<br />in Winchester TN
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              New septic systems for homes and new construction throughout Winchester and Franklin County.
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
            Septic Installation Contractor in Franklin County Tennessee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/septic/septic4.jpeg"
                alt="Septic system installation Franklin County TN"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Most rural properties in Franklin County are not connected to municipal sewer. That means a properly designed and installed septic system is required on virtually every rural property in the area. Marberry Construction installs conventional and alternative septic systems for new construction and existing properties throughout Winchester and Franklin County, Tennessee.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                The Franklin County Health Department oversees septic permits for unincorporated properties in the county. The permit process requires a site evaluation, a soil morphology report, and an approved system design before any installation can begin. We coordinate the soil evaluation and manage the full permit application on every project. You do not need to navigate the county process on your own.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Soil conditions in the Winchester area are varied and worth understanding before a system is designed. Franklin County sits at the edge of the Highland Rim and the Cumberland Plateau, which means soil composition changes significantly depending on where your property is located. Some parts of the county have limestone-based soils with good drainage characteristics. Other areas have heavier clay content that drains more slowly and requires a larger drain field or an alternative system design. We assess your lot&apos;s specific soil before recommending a system type.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Most of our Franklin County septic projects are either new construction installs coordinated with a home build or replacement installations on existing properties where the old system has reached end of life. We handle both and we know the Franklin County Health Department process well. For new construction clients, the septic permit timeline factors into the overall build schedule so the system is installed and inspected at the right point in the construction sequence.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Septic Permit Process in Franklin County TN
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            In Tennessee, septic system installation requires approval through the county health department before any work begins. The Franklin County Health Department administers this process under Tennessee Department of Environment and Conservation standards. The application requires a site evaluation, a soil morphology report, and an approved system design. Once the permit is approved, installation must be completed and inspected before the system can be placed into service.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            The permit timeline in Franklin County typically runs 3 to 8 weeks from application to approval depending on the health department&apos;s workload and whether any issues arise during the soil evaluation. We submit complete applications and follow up with the county throughout the process. For new construction projects, the septic permit timeline factors into the overall build schedule so nothing stalls mid-project waiting on permit approval.
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
            &quot;We handle the full permit process in Franklin County so you can focus on building your home, not navigating county paperwork.&quot;
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Septic System Costs in Winchester TN
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Conventional septic systems in the Franklin County area typically run $4,000 to $12,000 installed, including tank, drain field, and all connections. Alternative systems, including aerobic and chamber systems required on some soil types, run $8,000 to $20,000 depending on system size and site conditions. The specific cost on your lot depends on the size of the tank required, the length of drain field the county approves based on your soil, and whether any site work is needed before installation begins.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Limestone soils in parts of Franklin County can affect drain field design by limiting depth before bedrock is encountered. Clay-heavy areas require larger drain fields or alternative system configurations. Both situations affect cost, and we factor them in from the start rather than surprising you with changes once installation is underway. All costs include permits, materials, and labor. We provide written estimates after reviewing your lot so the number we give you reflects your actual site conditions.
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
              Serving Winchester and Surrounding Communities
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
