import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Phone, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Custom Home Builder Winchester TN | Marberry Construction',
  description:
    'Custom home builder in Winchester TN and Franklin County. Build on your lot. Licensed contractor. Call 256-679-8665.',
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
    'Winchester TN', 'Franklin County TN', 'Estill Springs TN',
    'Decherd TN', 'Cowan TN', 'Huntland TN',
    'Belvidere TN', 'Tullahoma TN',
  ],
};

const communities = [
  'Winchester', 'Estill Springs', 'Decherd', 'Cowan',
  'Huntland', 'Belvidere', 'Fayetteville', 'Tullahoma',
];

const buildIncludes = [
  'Custom floor plans designed around your lot',
  'Full permit management through Franklin County',
  'Site preparation and foundation engineering',
  'Framing, roofing, electrical, plumbing in-house',
  'Metal or shingle roofing included',
  'Workmanship warranty on every home',
];

const faqItems = [
  {
    question: 'Do you build custom homes in Winchester TN?',
    answer:
      'Yes. We serve Winchester and Franklin County regularly. Our Fayetteville TN base is about 25 miles away and we work throughout the region.',
  },
  {
    question: 'How long does a custom build take in Franklin County?',
    answer:
      'From permit approval to move-in, most builds take 8 to 14 months. We provide a detailed schedule at the start of every project.',
  },
  {
    question: 'What does a custom home cost in Winchester TN?',
    answer:
      'Most builds run $175 to $275 per square foot. Total project costs typically range from $300,000 to $1,100,000 depending on size and finishes.',
  },
  {
    question: 'Do you build near Normandy Lake?',
    answer:
      'Yes. We build on rural lots throughout Franklin County including properties near Normandy Lake and the surrounding area.',
  },
];

export default function CustomHomeBuilderWinchesterPage() {
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
              CUSTOM HOME BUILDER - WINCHESTER, TN
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Custom Home Builder<br />in Winchester TN
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Building custom homes on your lot throughout Winchester and Franklin County, Tennessee.
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
            Custom Home Construction in Winchester and Franklin County
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img
                src="/images/gallery/custom-homes/home6.jpeg"
                alt="Custom home built in Winchester TN by Marberry Construction"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Marberry Construction serves Winchester and Franklin County from our base in Fayetteville, Tennessee, only about 25 miles to the southwest. That proximity means we are in the area regularly and are not sending crews from a distant market who have never pulled a permit in Franklin County. We know the terrain, the building department, and the soil conditions that shape every build in this part of the state.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Winchester is the Franklin County seat, and the county as a whole has seen steady residential growth over the past decade. Families looking for land and space outside larger Tennessee cities have found that Franklin County offers what they want at a price that still makes sense. Proximity to Tullahoma, the Manchester area, and the broader Nashville and Chattanooga corridors has made the Winchester area an attractive option for custom home buyers who want acreage without paying metro-area land prices.
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            The Normandy Lake area and the rural land surrounding it is among the most scenic building country in Franklin County. Properties along the Duck River corridor and out toward the eastern edge of the county offer serious acreage at reasonable prices. If you own land in this area and are thinking about building, the combination of natural surroundings, reasonable land costs, and access to nearby employment in Tullahoma and the surrounding region makes a strong case.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Marberry builds on your lot. No developer model, no subdivision floor plans you have to choose from, no preset elevation packages. If you own land in Franklin County or the Winchester area and are ready to build, we start with your lot and your vision. Brandon Marberry oversees every build personally from the first site visit through the final walkthrough. You always have direct access to the person building your home.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Building on Your Lot in Franklin County Tennessee
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            New construction in Franklin County goes through the Franklin County Building Department. The process requires a building permit, construction drawings, and for most rural lots a separate septic permit through the Franklin County Health Department. Most rural properties in Franklin County are not connected to municipal sewer, which means the septic system is part of the build plan on virtually every rural project. We handle both the building permit and the septic permit and manage the submission process on your behalf.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Lot conditions in Franklin County vary depending on location. Properties near the Duck River and Normandy Lake can have soil that requires specific foundation and drainage approaches. Properties on higher ground toward the county edges often have more straightforward conditions. We walk every lot before finalizing a design and build plan so we are accounting for your specific site, not making assumptions based on general county data.
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
            &quot;Franklin County has some of the most beautiful building land in Tennessee. We help you build on it right.&quot;
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Custom Home Costs in Winchester TN
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Custom homes in the Winchester area typically run $175 to $275 per square foot depending on finish level, lot conditions, and design complexity. Total project budgets for our clients in this area typically range from $300,000 to $1,100,000 not including land. Most clients land in the $350,000 to $600,000 range for a full custom build. We provide a detailed line-item estimate before any work begins so there are no surprises during the project.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Land costs in Franklin County remain significantly lower than the Nashville and Chattanooga metro markets. A rural 5-acre tract in the Winchester area costs a fraction of comparable land closer to those cities. Building in the Winchester area gives you a custom floor plan, quality construction, and acreage at a total cost that production builders in larger markets cannot match. For families who want to own land and build something that is genuinely theirs, Franklin County delivers real value.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Serving Winchester and Surrounding Franklin County Communities
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            We build throughout Franklin County and know the specific conditions and permit processes in each part of the area. Our clients in the Winchester area include families who have purchased land in Estill Springs, Decherd, Cowan, Huntland, and Belvidere, as well as properties in the rural areas between those communities. Each of these areas has its own character in terms of terrain, soil, and access, and we account for those conditions from the start of every project.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Franklin County sits between Lincoln County to the west, where we are based, and the eastern Cumberland Plateau region. That position means we are a natural fit for clients building in this area. We are not a regional office of a large company. Marberry Construction is a family business and Franklin County clients are treated the same way our core Lincoln County clients are treated: directly, honestly, and with Brandon on site throughout the build.
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
