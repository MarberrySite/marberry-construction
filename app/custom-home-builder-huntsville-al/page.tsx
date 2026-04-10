import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Custom Home Builder Near Huntsville AL | Marberry Construction',
  description:
    'Custom home builder serving Huntsville AL and Madison County. Build on your lot in Northern Alabama. Licensed contractor. Call 256-679-8665.',
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
    'Huntsville AL', 'Madison County AL', 'Madison City AL',
    'Harvest AL', 'Meridianville AL', 'Toney AL',
    'New Market AL', 'Hazel Green AL',
  ],
};

const communities = [
  'Harvest', 'Meridianville', 'Toney', 'New Market',
  'Madison City', 'Hazel Green', 'Ardmore', 'Fayetteville TN',
];

const buildIncludes = [
  'Custom floor plans designed around your lot and budget',
  'Full permit management through Madison County',
  'Foundation engineering for Alabama red clay soils',
  'Framing, roofing, electrical, plumbing in-house',
  'Brandon Marberry on site throughout the build',
  'Workmanship warranty on every home',
];

const faqItems = [
  {
    question: 'Do you build custom homes near Huntsville AL?',
    answer:
      'Yes. We serve Madison County and surrounding areas including Harvest, Meridianville, Toney, and New Market. We are based 35 miles north in Fayetteville TN and work regularly on both sides of the state line.',
  },
  {
    question: 'Are you licensed to build in Alabama?',
    answer:
      'Yes. We are licensed to operate in Alabama and are familiar with Madison County building department requirements.',
  },
  {
    question: 'How much does a custom home cost near Huntsville?',
    answer:
      'Most builds in our service area run $175 to $275 per square foot. Total project costs typically range from $300,000 to $1,100,000 depending on size and finishes.',
  },
  {
    question: 'Can I build on rural land outside Huntsville city limits?',
    answer:
      'Yes. Unincorporated Madison County land is where most of our Alabama clients build. We handle the county permit process and septic installation as part of the full build.',
  },
];

export default function CustomHomeBuilderHuntsvillePage() {
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
              CUSTOM HOME BUILDER - HUNTSVILLE, AL
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Custom Home Builder<br />Serving Huntsville AL
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Building custom homes on your lot in Madison County and surrounding areas of Northern Alabama.
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
            Custom Home Construction Near Huntsville, Alabama
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/custom-homes/home4.jpeg"
                alt="Custom home built near Huntsville AL by Marberry Construction"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Marberry Construction is based in Fayetteville, Tennessee, roughly 35 miles north of Huntsville. That proximity means we work in Madison County and the surrounding Northern Alabama area regularly. We are not a company sending crews three states away. We know the local terrain, the permitting process, and the soil conditions that affect every build in this part of Alabama.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Huntsville is one of the fastest growing metros in the Southeast. The defense, aerospace, and technology sectors centered around Redstone Arsenal and Cummings Research Park have brought tens of thousands of jobs and residents to the region. That growth has pushed housing demand far outside the city limits into Madison County, Limestone County, and just across the state line into Lincoln County, Tennessee.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            A significant number of Huntsville-area workers want land and space that the city cannot offer at a reasonable price. Subdivisions in Madison County fill that gap for some buyers, but many families want something different. They want acreage, a custom floor plan, and a home built specifically for their land and the way they live. That is exactly what we build.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Marberry builds on your lot. No developer. No subdivision. No preset floor plans you have to choose from. If you own land in Madison County or the surrounding area and are ready to build, we start with your lot and your vision and work from there. Brandon Marberry oversees every build personally from the first site visit through the final walkthrough.
          </p>
        </div>
      </section>

      {/* Section 2 — Checklist */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Building a Custom Home in Madison County Alabama
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            New home construction in unincorporated Madison County goes through the Madison County Building Department. The process requires a building permit, construction drawings, and for most rural lots a separate septic permit through the Madison County Health Department. Most rural properties in Madison County are not connected to municipal sewer, so the septic permit and system design are part of every build we do in this area. We handle both permits and manage the full submission process on your behalf.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Lot requirements in unincorporated Madison County depend on the specific property and location. For homes on private septic, the county typically requires enough acreage to accommodate the septic system setbacks from property lines, water features, and the home itself. If you are looking at land in the area and want a read on whether a specific lot works for the home you have in mind, we can walk it with you before you commit to the purchase.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Soil conditions in the Huntsville area are heavily influenced by red clay, which is common throughout Madison County and the Tennessee Valley region. Red clay affects foundation design, drainage planning, and septic system sizing. We account for soil conditions from the foundation up and coordinate with the septic engineer to make sure both systems are designed correctly for your specific lot. Building here is not the same as building on sandy loam soil, and our foundation approach reflects that.
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
            &quot;Building just outside Huntsville means land, space, and a custom home for what a production builder charges for a subdivision lot.&quot;
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Custom Home Costs Near Huntsville AL
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Custom homes in the Huntsville area typically run $175 to $275 per square foot depending on finish level, lot conditions, and design complexity. Total project budgets for our clients in this area typically range from $300,000 to $1,100,000 not including land. Most clients are in the $350,000 to $600,000 range for a full custom build. We give you a detailed line-item estimate before any work begins so there are no surprises during the project.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Land costs in Madison County vary significantly depending on acreage, utilities, and proximity to Huntsville. A raw 5-acre tract in Meridianville or Toney costs considerably less than a comparable parcel inside the city. Building on land outside Huntsville can save $100,000 or more compared to buying a finished home of similar square footage inside the city, while giving you a custom floor plan and everything new. That math makes the case for building rather than buying for many families in this market.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Why Huntsville Area Families Build With Marberry
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            We are not a national builder with a regional office and a sales team managing the process from a distance. Marberry Construction is a locally owned business that operates on both sides of the Tennessee-Alabama state line. We know Madison County building requirements and we know how the permitting process actually works on the ground. When something comes up during a build, you reach Brandon directly and it gets resolved. There are no layers between you and the person building your home.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Most of our Huntsville-area clients are in communities like Harvest, Meridianville, Toney, New Market, and Hazel Green. These are the areas where Huntsville workers are buying land and building the homes they want. We have built in all of them and know the specific permit offices, inspectors, and site conditions in each community. That familiarity saves time and prevents problems that a contractor new to the area would run into on their first build here.
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
