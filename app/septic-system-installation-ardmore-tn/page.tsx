import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Septic System Installation Ardmore TN | Marberry Construction',
  description:
    'Septic system installation in Ardmore TN and along the TN-AL border. Licensed contractor. Call 256-679-8665.',
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
    'Ardmore TN', 'Ardmore AL', 'Elkmont AL',
    'Tanner AL', 'Fayetteville TN', 'Athens AL',
    'Hazel Green AL', 'Limestone County AL',
  ],
};

const communities = [
  'Ardmore TN', 'Ardmore AL', 'Elkmont', 'Tanner',
  'Fayetteville', 'Athens AL', 'Hazel Green', 'Limestone County',
];

const installSteps = [
  'Property location determines which state permit applies',
  'Lincoln County TN: TDEC permit through county health department',
  'Limestone County AL: Alabama Department of Public Health',
  'Marberry manages the full application on both sides',
  'Installation once permits are approved',
  'Final inspection coordination in both states',
];

const faqItems = [
  {
    question: 'Do you install septic in Ardmore TN?',
    answer:
      'Yes. We install septic systems on both the Tennessee and Alabama sides of the Ardmore area.',
  },
  {
    question: 'Which permit process applies to my Ardmore property?',
    answer:
      'It depends on which side of the state line your property sits. We assess and handle the correct permit process for your specific lot.',
  },
  {
    question: 'How long does installation take?',
    answer:
      'Once permits are approved, most systems install in 3 to 7 days.',
  },
  {
    question: 'Do you handle both TN and AL permit systems?',
    answer:
      'Yes. We are experienced with both Lincoln County TN and Limestone County AL septic permit requirements.',
  },
];

export default function SepticInstallationArdmorePage() {
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
              SEPTIC INSTALLATION - ARDMORE, TN
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Septic Installation<br />in Ardmore TN
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              New septic systems for homes on both sides of the Tennessee-Alabama border near Ardmore.
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
            Septic Contractor Serving Ardmore TN and Limestone County AL
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/septic/septic12.jpeg"
                alt="Septic installation Ardmore TN Tennessee Alabama border"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Ardmore is a unique community that straddles the Tennessee-Alabama state line, sitting across both Lincoln County, Tennessee and Limestone County, Alabama. For most contractors, that dual-state position creates complexity. For Marberry Construction, it is home. We are based in Fayetteville, TN, about 20 miles away, and we have installed septic systems on both sides of the Ardmore area line.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Most properties in the Ardmore area are on private septic. Municipal sewer service is limited in this part of the border region, which means a properly designed and installed septic system is a requirement on virtually every residential property. Whether you are building a new home or replacing an aging system on an existing property, the permit process runs through the appropriate county and state agency depending on which side of the line you are on. We determine that at the outset and manage the entire process.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Soil conditions along the Tennessee-Alabama border vary by lot. The transition zone between the Limestone Valley in Alabama and the Highland Rim in Tennessee creates a range of soil types in a relatively small geographic area. Some lots have excellent drainage and are straightforward candidates for conventional systems. Others have clay-heavy or rocky conditions that require a different approach. We assess your specific lot before recommending a system type or a cost.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            For new construction projects near Ardmore, we coordinate the septic permit alongside the building permit to make sure both systems are approved and on schedule before the build begins. Delays in the septic permit process are one of the most common causes of construction schedule problems in this area, and managing both permits in-house eliminates that risk.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Navigating Septic Permits on the TN-AL Border
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            The septic permit process for properties near Ardmore depends entirely on which state your property is in. Tennessee-side properties in Lincoln County go through the Lincoln County Health Department under Tennessee Department of Environment and Conservation standards. Alabama-side properties in Limestone County go through the Limestone County Health Department under Alabama Department of Public Health standards. The two states have different application requirements, different approval timelines, and different system standards.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Marberry Construction is familiar with both systems. We know which forms to file, which agencies to coordinate with, and what each state&apos;s inspection process looks like at the end of the project. For Ardmore-area clients, that dual-state experience is not a selling point. It is a practical necessity that saves time and prevents the problems that come with working with a contractor who only knows one side of the line.
          </p>
          <h3 className="font-semibold text-navy text-lg mb-4">How the border permit process works:</h3>
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
            &quot;We know both the Tennessee and Alabama septic permit systems. You do not have to figure out which side of the line you are on.&quot;
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Septic Installation Costs in Ardmore TN
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Conventional septic systems in the Ardmore area typically run $4,000 to $12,000 installed, including tank, drain field, and all connections. Alternative systems, required on some lots due to soil conditions, run $8,000 to $20,000 depending on system size and configuration. All costs include permits, materials, and labor for whichever state the property is in.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            We provide written estimates after reviewing your lot and the applicable permit requirements. The number we give you is based on your actual property, not a generic estimate. Site assessments in the Ardmore area are free.
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
              Serving Ardmore and Surrounding Communities
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
