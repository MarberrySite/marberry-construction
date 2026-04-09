import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Septic System Installation Fayetteville TN | Marberry Construction',
  description:
    'New septic system installation in Fayetteville TN and Lincoln County. Licensed contractor. Conventional and alternative systems. Call 256-679-8665.',
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


const communities = [
  'Fayetteville', 'Flintville', 'Petersburg', 'Kelso',
  'Elora', 'Taft', 'Ardmore', 'Hazel Green',
];

const installSteps = [
  'Site evaluation and soil testing',
  'Permit application to Lincoln County Health Dept',
  'System design and county approval',
  'Tank and drain field installation',
  'Final county inspection',
  'Full documentation provided at completion',
];

const faqItems = [
  {
    question: 'Do you install septic systems in Fayetteville TN?',
    answer:
      'Yes. Fayetteville and Lincoln County is our primary service area. We install conventional and alternative septic systems for new construction and existing properties throughout the county.',
  },
  {
    question: 'How much does a septic system cost in Lincoln County TN?',
    answer:
      'Most residential septic installations in Lincoln County run $4,000 to $12,000 depending on soil conditions, system type, and lot configuration. We provide written estimates before any work begins.',
  },
  {
    question: 'Do you handle the permit process in Lincoln County?',
    answer:
      'Yes. We handle the full septic permit application through the Lincoln County Health Department, including coordinating the soil evaluation and percolation test required before permit approval.',
  },
  {
    question: 'How long does it take to get a septic permit in Lincoln County?',
    answer:
      'The Lincoln County permit process typically takes 3 to 8 weeks from application to approval. We submit everything correctly the first time to avoid delays.',
  },
];

export default function SepticInstallationFayettevillePage() {
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
            SEPTIC INSTALLATION - FAYETTEVILLE, TN
          </p>
          <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
            Septic System Installation in Fayetteville TN
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-10">
            New septic system installation for homes and new construction in Fayetteville and throughout Lincoln County, Tennessee.
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
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Septic Installation Contractor in Fayetteville and Lincoln County
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Marberry Construction installs septic systems throughout Fayetteville and Lincoln County, Tennessee. Most rural properties in Lincoln County are not connected to municipal sewer, which means a properly designed and installed septic system is required before a home can be built or occupied. We handle every phase of the process from site evaluation through county inspection.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Lincoln County soils vary considerably across the county. Some areas have sandy loam that percolates well and supports a straightforward conventional system. Other areas, particularly in lower elevations or closer to creek drainages, have heavier clay soils that drain slowly and require a different system design. We conduct or coordinate the soil evaluation and perc test required by the county before any system is designed, so we are working from the actual conditions on your specific lot, not assumptions.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Most of our septic installation projects in the Fayetteville area fall into one of two categories: new construction builds where the septic system is part of a larger home build project, and replacement installations on existing properties where the old system has failed or where a property is being improved for sale or rental. We handle both. For new construction clients, the septic is coordinated with the rest of the build so everything goes in on schedule.
          </p>
        </div>
      </section>

      {/* Section 2 — Inline Photo + Text + Checklist */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-10">
            The Septic Permit Process in Lincoln County
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/septic/septic2.jpeg"
                alt="Septic system installation in Lincoln County Tennessee"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                In Tennessee, a septic permit is required before any system can be installed. The permit application goes through the Lincoln County Health Department and requires a site evaluation, a soil morphology report, and an approved system design before a permit is issued. The county uses this process to determine whether the lot can support a conventional system or whether an alternative system is required.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                The Lincoln County permit timeline typically runs 3 to 8 weeks from application to approval depending on the health department&apos;s current workload and whether any issues come up during the soil evaluation. We submit complete applications and coordinate the site evaluation on your behalf so you are not managing multiple agencies on your own.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            For properties in Northern Alabama, the permit process runs through the county health department in Madison County or Limestone County. The requirements are similar to Tennessee in terms of soil evaluation and system approval, though the specific forms and approval process differ. We are familiar with both systems and can handle permitting on either side of the state line.
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
            &quot;We handle the permit, the install, and the inspection. You do not have to navigate the county alone.&quot;
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Septic Installation Costs in Lincoln County TN
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Most residential septic installations in the Fayetteville area run $4,000 to $12,000 for a conventional system, including tank, drain field, and all connections. Alternative systems, including aerobic and chamber systems, run higher depending on the system size and site conditions. The final cost depends on the size of the tank required for your home, the length of drain field needed, soil conditions that affect excavation difficulty, and whether the lot requires any site work before installation.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            For new construction projects, the septic system cost is typically included in the overall construction estimate rather than quoted separately. We size the system appropriately for the home being built and account for site conditions identified during the lot evaluation. For standalone septic installations, we provide a written estimate after reviewing the permit documentation and walking the installation site.
          </p>
        </div>
      </section>

      {/* Communities + Service Areas */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-skyblue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Where We Work
          </p>
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Our Service Areas
          </h2>
          <div className="bg-navy/5 border border-navy/10 rounded-xl p-8 mt-8 text-left">
            <h3 className="font-playfair text-2xl font-bold text-navy mb-4">
              Serving Fayetteville and Surrounding Communities
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
              Learn more about our septic system installation services
            </Link>
          </p>
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
