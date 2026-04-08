import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Custom Home Builder Athens AL | Marberry Construction',
  description:
    'Custom home builder in Athens AL and Limestone County. Build on your lot in Northern Alabama. Licensed contractor. Call 256-679-8665.',
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

const buildIncludes = [
  'Custom floor plans for your specific lot and budget',
  'Full permit management through Limestone County',
  'Foundation engineering for Alabama soil conditions',
  'Framing, roofing, electrical, plumbing in-house',
  'Metal or shingle roofing included',
  'Workmanship warranty on every home',
];

const faqItems = [
  {
    question: 'Do you build custom homes in Athens AL?',
    answer:
      'Yes. Athens and Limestone County is a regular part of our Alabama service area.',
  },
  {
    question: 'Are you licensed to build in Limestone County AL?',
    answer:
      'Yes. We are licensed in Alabama and familiar with Limestone County building department requirements.',
  },
  {
    question: 'How much does a custom home cost in Athens AL?',
    answer:
      'Most builds run $175 to $275 per square foot. Total project costs typically range from $300,000 to $1,100,000 depending on size and finishes.',
  },
  {
    question: 'How far are you from Athens AL?',
    answer:
      'We are based in Fayetteville TN, about 30 miles from Athens. We work in Limestone County regularly.',
  },
];

export default function CustomHomeBuilderAthensPage() {
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
            backgroundImage: 'url(/images/hero-custom.jpeg)',
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
              CUSTOM HOME BUILDER - ATHENS, AL
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Custom Home Builder<br />in Athens AL
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Building custom homes on your lot in Athens and throughout Limestone County, Alabama.
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
            Custom Home Construction in Athens and Limestone County Alabama
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/custom-homes/home11.jpeg"
                alt="Custom home built in Athens AL by Marberry Construction"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Marberry Construction serves Athens and Limestone County from our Fayetteville, Tennessee base, about 30 miles to the north. That proximity puts us well within our regular Alabama service area. We are licensed in Alabama, familiar with the Limestone County building department, and have worked throughout the county on custom builds, septic installations, and roofing projects. Athens is not a distant market for us.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Athens is the Limestone County seat and the county is growing rapidly as the Huntsville metro expands west and north. The employment base centered around Redstone Arsenal and the broader Huntsville technology and defense corridor has driven significant residential demand throughout Limestone County. Families who want to live near Huntsville but prefer rural acreage and lower land costs than Madison County offers are finding Athens and Limestone County to be the right answer.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Limestone County land prices remain well below Madison County despite the growth pressure moving through the region. A rural lot in the Athens area with 3 to 5 acres costs a fraction of a comparable parcel closer to Huntsville. For families who can trade a few extra miles of commute for genuine acreage and a fully custom home, building in Limestone County is among the best value propositions available in the current Northern Alabama market.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Marberry builds on your lot. No developer involved, no subdivision, no preset floor plans you choose from a binder. We start with your land and your vision and build from there. Brandon Marberry oversees every build personally from the first site visit through the final walkthrough. You always have direct access to the person building your home.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Building a Custom Home in Limestone County Alabama
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            New home construction in unincorporated Limestone County goes through the Limestone County Building Department. The process requires a building permit, construction drawings, and for most rural lots a separate septic permit through the Limestone County Health Department under Alabama Department of Public Health standards. Most rural properties in Limestone County are not connected to municipal sewer. We handle both the building permit and the septic permit and manage the full submission process.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Soil conditions in the Athens area are primarily clay-influenced, consistent with the Alabama red clay zone that extends across much of Northern Alabama. Clay soils affect foundation design, drainage planning, and septic system sizing. We account for soil conditions from the foundation up and coordinate the septic system design alongside the home design so both are engineered for your specific lot. Building on clay-heavy soil requires different approaches than building on sandy loam, and our methods reflect the conditions on the ground in Limestone County.
          </p>
          <h3 className="font-semibold text-navy text-lg mb-4">What we handle on every build:</h3>
          <ul className="space-y-3">
            {buildIncludes.map((item) => (
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
            "Athens and Limestone County are growing fast. Building now means getting ahead of the price curve that is already moving."
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Custom Home Costs in Athens AL
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Custom homes in the Athens and Limestone County area typically run $175 to $275 per square foot depending on finish level, lot conditions, and design complexity. Total project budgets typically range from $300,000 to $1,100,000 not including land. Most of our Limestone County clients are in the $350,000 to $600,000 range for a full custom build. We provide a detailed line-item estimate before any work begins so there are no surprises during the project.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Limestone County land prices remain lower than Madison County despite the growth pressure coming from the Huntsville direction. That land cost difference, combined with a custom floor plan and everything new, allows Athens-area buyers to achieve something that production builders cannot offer at any price: a home designed and built specifically for how you want to live, on land you own. As growth continues northwest from Huntsville into Limestone County, buyers who build now are getting ahead of the pricing shift that is already underway.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Serving Athens and Limestone County Communities
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            We build throughout Limestone County and are familiar with the conditions in each community. Our clients in the Athens area include families building in Tanner, Elkmont, Lester, and Mooresville, as well as rural properties across the county. The communities to the south and east of Athens are seeing particularly strong demand as workers at Huntsville employers find that Limestone County gives them the commute distance they can manage while delivering the land and space they want.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Marberry Construction's Alabama license and established presence on both sides of the state line means Athens-area clients are not working with a contractor who is new to Alabama or learning the Limestone County permit system for the first time. We know the building department, we know the soil, and we know the inspectors. That familiarity accelerates the permitting process and prevents the delays and complications that come with contractors who are new to the market.
          </p>
        </div>
      </section>

      {/* Communities */}
      <section className="py-24 bg-white">
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

      {/* Internal Link */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-slate-600 text-base">
            <Link href="/custom-home-builder" className="text-skyblue font-semibold hover:underline">
              Learn more about our custom home construction services
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
