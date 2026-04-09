import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Custom Home Builder Fayetteville TN | Marberry Construction',
  description:
    'Custom home builder in Fayetteville TN. Marberry Construction builds on your lot in Lincoln County. Licensed, insured. Call 256-679-8665 for a free quote.',
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

const buildIncludes = [
  'Custom floor plans designed around your lot',
  'Full permit management in Lincoln County',
  'Foundation through finish work in-house',
  'Metal or shingle roofing included',
  'Brandon Marberry on site throughout the build',
  'Workmanship warranty on every home',
];

const faqItems = [
  {
    question: 'Do you build custom homes in Fayetteville TN?',
    answer:
      'Yes. Fayetteville is our home base. We have built throughout Lincoln County and know the local permit process, soil conditions, and county requirements well.',
  },
  {
    question: 'How long does a custom home build take in Lincoln County?',
    answer:
      'From permit approval to move-in, most builds in Lincoln County take 8 to 14 months. We give you a detailed schedule at the start of every project.',
  },
  {
    question: 'Do you build on private land outside of Fayetteville?',
    answer:
      'Yes. We build throughout Lincoln County and into surrounding counties in Tennessee and Northern Alabama.',
  },
  {
    question: 'What is the minimum lot size for a custom home in Lincoln County?',
    answer:
      'For a home on a private septic system, Lincoln County typically requires a minimum of 0.75 to 1 acre depending on soil conditions and the approved septic design.',
  },
];

export default function CustomHomeBuilderFayettevillePage() {
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
            CUSTOM HOME BUILDER - FAYETTEVILLE, TN
          </p>
          <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
            Custom Homes Built in Fayetteville TN
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-10">
            Licensed general contractor building custom homes on your lot in Fayetteville and throughout Lincoln County.
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
            Custom Home Builder in Fayetteville, Tennessee
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Marberry Construction LLC is based in Fayetteville, Tennessee, which means Lincoln County is not just a service area on a list. It is where we work every day. We build custom homes on private lots throughout Fayetteville, Flintville, Kelso, Petersburg, and the surrounding Lincoln County area. Every project starts on your land with a conversation about what you want to build and how you want to live.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Fayetteville has seen consistent residential growth over the past decade. The proximity to Huntsville, Alabama, roughly 35 miles south, has made Lincoln County attractive to remote workers and families who want acreage and a lower cost of living without paying Madison County land prices. We are seeing more first-time custom home builders who have relocated from Huntsville or Nashville and want to build something that fits their land and their family, not a floor plan from a catalog.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Building custom instead of buying existing makes sense for a lot of families in this market. Existing homes in Lincoln County are limited in inventory, especially for buyers looking for 3 or more acres. Building allows you to get exactly what you want, in the right location, with the right layout for your land. The cost per square foot for a custom home in this area is often comparable to buying a similar existing home, with the advantage that everything is new and built to your specifications.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Brandon Marberry is on every job site personally. He is not managing from an office while a crew you have never met builds your home. When you call, you get Brandon. When you have questions during the build, you get direct answers. That is a different experience from larger builders, and it is why most of our clients come to us through referrals from neighbors and family in the Lincoln County area.
          </p>
        </div>
      </section>

      {/* Section 2 — Inline Photo + Text + Checklist */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-10">
            Building a Custom Home on Your Lot in Lincoln County
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/custom-homes/home3.jpeg"
                alt="Custom home built by Marberry Construction in Lincoln County TN"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Lincoln County has a straightforward building permit process compared to more urbanized counties in the state. For a residential new construction project, you will need a building permit from the Lincoln County building department and a separate septic permit through the county health department if the property is not connected to municipal sewer, which most rural lots in the county are not. We handle both and manage the full submission and approval process so you are not dealing with multiple agencies on your own.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Lot requirements for a custom home in Lincoln County depend on several factors. For a home on private septic, the county typically requires a minimum of 0.75 to 1 acre, though actual requirements depend on soil conditions and the approved septic design. Setbacks from property lines, roads, and waterways also apply. If you are looking at land in the area, we can walk the lot with you before you purchase and flag any site issues before you commit.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Soil conditions in the Fayetteville area are a mix of clay-heavy soils and sandy loam depending on the specific location of your lot. Clay soils require more attention at the foundation level and can affect what type of septic system is approved for the property. We account for soil conditions in our foundation design and work with the septic engineer to make sure both systems are sized and designed correctly for your specific lot. Building on your land means understanding your land, not assuming it is like every other lot we have been on.
          </p>
          <h3 className="font-semibold text-navy text-lg mb-4">What every Marberry build includes:</h3>
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
            &quot;We do not subcontract work to people we do not know. Brandon Marberry is on every job site.&quot;
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            What Does a Custom Home Cost in Fayetteville TN?
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Custom homes in the Fayetteville TN area typically run $175 to $275 per square foot depending on the finish level, lot conditions, and design complexity. A 2,000 square foot home with standard finishes comes in at a different number than a 2,000 square foot home with custom trim, vaulted ceilings, tile showers, and a covered porch. Both are custom builds, but the materials and labor costs are different. We give you a detailed line-item estimate before any work begins so there are no surprises mid-project.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Total project budgets for our clients in Lincoln County typically range from $300,000 to $1,100,000, not including land. Most of our clients are in the $350,000 to $600,000 range for their full home build. Land cost varies significantly depending on acreage, location within the county, and whether utilities are already on the property. A lot with an existing well, power at the road, and cleared acreage will cost more but saves money in site development during the build.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Why Fayetteville Families Choose Marberry Construction
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            We are not a franchise or a large regional builder with multiple crews operating across three states. Marberry Construction is a locally owned business based in Fayetteville. We use local subcontractors when possible, buy materials from regional suppliers, and do business the way people in this county expect to be treated. You will not be handed off to a project coordinator after signing the contract. Brandon stays on every project from the first site visit through the final walkthrough.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            After the build is complete and you have moved in, we stand behind our work. If something is not right, you call Brandon directly and we address it. We have built a reputation in Lincoln County on word of mouth, and that reputation depends on every home we build being something we are willing to put our name on. Every home we finish is a reference for the next one.
          </p>
        </div>
      </section>

      {/* Communities + Service Areas */}
      <section className="py-24 bg-white">
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
