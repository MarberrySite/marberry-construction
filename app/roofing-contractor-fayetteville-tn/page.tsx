import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Roofing Contractor Fayetteville TN | Marberry Construction',
  description:
    'Metal roofing contractor in Fayetteville TN. Installation and replacement in Lincoln County. Licensed. Call 256-679-8665.',
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
    'Fayetteville TN', 'Ardmore TN', 'Huntsville AL',
    'Madison County AL', 'Athens AL', 'Taft TN',
    'Giles County TN', 'Winchester TN',
  ],
};


const communities = [
  'Fayetteville', 'Flintville', 'Petersburg', 'Kelso',
  'Elora', 'Taft', 'Ardmore', 'Hazel Green',
];

const metalAdvantages = [
  'Lasts 40 to 70 years vs 15 to 20 for shingles',
  'Lower insurance premiums in Lincoln County',
  'Handles Tennessee ice, wind, and summer heat',
  'Energy efficient — reflects heat, lowers cooling bills',
  'Increases resale value',
  'No granule loss, no lifting, no cracking',
];

const faqItems = [
  {
    question: 'Do you do roofing in Fayetteville TN?',
    answer:
      'Yes. Fayetteville and Lincoln County is our primary service area for roofing. We install and replace metal roofs on residential homes throughout the area.',
  },
  {
    question: 'How much does a metal roof cost in Lincoln County TN?',
    answer:
      'Most residential metal roof replacements in our area run $12,000 to $35,000 depending on roof size and complexity.',
  },
  {
    question: 'How long does a metal roof last in Tennessee?',
    answer:
      'A quality metal roof installed correctly will last 40 to 70 years in the Tennessee climate. Asphalt shingles typically last 15 to 20 years in the same conditions.',
  },
  {
    question: 'Do you replace shingle roofs with metal?',
    answer:
      'Yes. Shingle-to-metal replacement is one of our most common roofing projects in Fayetteville and Lincoln County.',
  },
];

export default function RoofingContractorFayettevillePage() {
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
            backgroundImage: 'url(/images/hero-roofing.jpeg)',
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
            ROOFING CONTRACTOR - FAYETTEVILLE, TN
          </p>
          <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
            Metal Roofing Contractor in Fayetteville TN
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-10">
            Metal roof installation and replacement for homes in Fayetteville and throughout Lincoln County, Tennessee.
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

      {/* Section 1 — text + checklist */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Roofing Contractor Serving Fayetteville and Lincoln County
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Marberry Construction has been installing metal roofing on residential homes in Fayetteville and throughout Lincoln County for years. We install standing seam and corrugated metal roofing on new construction and existing homes, and we replace aging shingle roofs for homeowners who are ready for a more durable solution. Fayetteville and the surrounding Lincoln County area is our primary roofing market.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Tennessee weather is hard on roofing. Fayetteville sits in a region that sees hot, humid summers with occasional hail, followed by winters with ice, freezing rain, and wind. Asphalt shingles are not designed to hold up well under repeated freeze-thaw cycles and prolonged UV exposure. After 15 to 20 years, most shingle roofs in Lincoln County are showing granule loss, cracking, and wear that leads to leaks and interior damage.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Most homes in Lincoln County with shingle roofs that are 15 years or older are good candidates for a metal replacement. If you have had repeated leak issues, are seeing missing granules in your gutters, or if your roof has been through more than one round of repairs in the last few years, the math on replacement versus continued repair usually favors replacement. We give honest assessments and will tell you if your roof has more life in it before recommending anything.
          </p>
          <h3 className="font-semibold text-navy text-lg mt-8 mb-4">
            Why metal roofing outperforms shingles in Lincoln County:
          </h3>
          <ul className="space-y-3">
            {metalAdvantages.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-skyblue mt-1 shrink-0" />
                <span className="text-slate-600 text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 2 — Inline Photo + Text */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-10">
            Metal Roofing Installation in Fayetteville TN
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/hero-roofing.jpeg"
                alt="Metal roofing installation Fayetteville TN by Marberry Construction"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                We install two main metal roofing profiles: standing seam and corrugated. Standing seam is a concealed fastener system where the metal panels interlock at raised seams, keeping all fasteners hidden from the weather. It is the more premium option, better suited for lower-pitch roofs, and provides the cleanest look. Corrugated metal uses exposed fasteners and is well-suited for higher-pitch roofs and applications where cost is the primary driver. Both are durable, long-lasting choices for homes in Lincoln County.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                A typical residential roof replacement in Fayetteville takes 2 to 5 days from start to finish once materials are on site. The process starts with removing the existing shingles, inspecting and repairing any damaged decking, and then installing the new metal over a fresh underlayment. We protect the home throughout the process and clean up the site completely each day. Most homeowners can stay in their home through the full installation without disruption.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed">
            Before any installation begins, we measure the roof, provide a detailed written quote, and review the product options with you. We do not start work until you understand exactly what you are getting and what it costs. On larger or more complex roofs, we schedule a site visit to walk the roof and take measurements before quoting so the numbers we give you are accurate.
          </p>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-playfair text-2xl md:text-3xl font-bold text-white leading-relaxed italic">
            &quot;A metal roof installed correctly will outlast the house it is on. That is what we install.&quot;
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Roof Replacement Cost in Fayetteville TN
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Corrugated metal roofing installed in the Fayetteville TN area typically runs $8 to $14 per square foot installed. Standing seam runs $14 to $22 per square foot depending on the profile and gauge of the metal. These are installed prices that include tear-off of the existing roof, disposal, new underlayment, materials, and labor. Pitch, access complexity, and roof configuration all affect the final number.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Most homeowners in Lincoln County replacing a shingle roof with metal spend between $12,000 and $35,000 for the complete job. A single-story home with a straightforward roof line comes in on the lower end. A larger home with multiple roof sections, steep pitch, or dormers and valleys comes in higher. The upfront cost of metal is more than shingles, but a metal roof that lasts 50 years costs significantly less over time than replacing a shingle roof every 15 to 20 years. We provide itemized written quotes so you know exactly what each part of the project costs.
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
            <Link href="/roofing-contractor" className="text-skyblue font-semibold hover:underline">
              Learn more about our roofing services
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
