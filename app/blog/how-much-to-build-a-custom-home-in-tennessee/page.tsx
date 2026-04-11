import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does It Cost to Build a Custom Home in Tennessee? | Marberry Construction',
  description:
    'Custom home costs in Tennessee run $175-$275 per square foot. See what affects your price in Lincoln County, Fayetteville, and surrounding areas.',
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Much Does It Cost to Build a Custom Home in Tennessee?',
  author: { '@type': 'Organization', name: 'Marberry Construction LLC' },
  publisher: {
    '@type': 'Organization',
    name: 'Marberry Construction LLC',
    url: 'https://marberry-construction.vercel.app',
  },
  datePublished: '2025-01-01',
  description:
    'Custom home costs in Tennessee run $175-$275 per square foot. See what affects your price in Lincoln County, Fayetteville, and surrounding areas.',
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-[#3B8BD4] text-xs font-semibold tracking-widest uppercase mb-3 font-inter">
          Custom Home Construction
        </p>
        <h1 className="font-playfair text-4xl font-bold text-[#1B2A4A] mb-6 leading-snug">
          How Much Does It Cost to Build a Custom Home in Tennessee?
        </h1>
        <p className="text-slate-500 text-sm font-inter mb-10">
          By Marberry Construction LLC, Fayetteville TN
        </p>

        <div className="prose prose-slate max-w-none font-inter text-slate-700 leading-relaxed space-y-6">
          <p>
            The most common question we hear from families planning a new home in Middle Tennessee
            is simple: what is this actually going to cost? The honest answer depends on several
            factors, but in Tennessee, most custom homes fall between $175 and $275 per square foot
            for construction alone. That range accounts for standard finishes on the low end and
            higher-end cabinetry, tile, fixtures, and structural upgrades on the high end.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            What That Means in Real Dollar Terms
          </h2>
          <p>
            A 1,800 square foot home built at $175 per square foot comes to $315,000 in
            construction costs. At $275 per square foot, that same footprint reaches $495,000. Add
            your land, site prep, and utility connections, and total project budgets in our area
            typically run from $300,000 on the lower end up to $1.1 million for larger or more
            detailed builds. Most families we work with in Lincoln County and the surrounding
            region land somewhere in the $400,000 to $700,000 total project range, including land.
          </p>
          <p>
            Those numbers look different in Nashville, where land alone in many zip codes runs
            $100,000 to $300,000 or more for a buildable lot. In Fayetteville, Ardmore, and the
            rural communities around Lincoln County, land costs are meaningfully lower. That
            difference is one reason why building here gives families more home for their money
            compared to the Nashville suburbs or even the Huntsville, Alabama metro.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            What Drives Cost Up in Custom Home Construction
          </h2>
          <p>
            Square footage is the most obvious driver, but it is not the only one. Here are the
            factors that push a project toward the higher end of the range:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Land prep and site conditions.</strong> Rocky ground, poor drainage, steep
              slopes, or heavily wooded lots all add to site preparation costs before a foundation
              can go in. A flat, open lot with easy access is the least expensive scenario. Heavily
              wooded or sloped lots can add $15,000 to $40,000 or more in clearing, grading, and
              fill before construction begins.
            </li>
            <li>
              <strong>Finishes and selections.</strong> Builder-grade cabinets, laminate
              countertops, and standard fixtures are priced into the low end of the range. Custom
              cabinetry, quartz or granite countertops, tile showers, and hardwood floors move the
              number up. These decisions are yours to make, but they have real cost consequences.
            </li>
            <li>
              <strong>Square footage and room count.</strong> More rooms mean more plumbing
              fixtures, more electrical circuits, more HVAC zones. A three-bedroom home costs less
              per square foot to build than a five-bedroom home of the same total size, because the
              bedroom and bathroom count drives fixture costs independent of square footage.
            </li>
            <li>
              <strong>Roofline complexity.</strong> A simple gable roof is less expensive than a
              hip roof with multiple valleys, dormers, or custom pitch angles. Metal roofing, which
              we install on most custom homes we build, adds cost over shingles but pays back in
              durability over time.
            </li>
            <li>
              <strong>Septic and well systems.</strong> Homes outside of town on private well and
              septic add $8,000 to $20,000 depending on soil conditions and required system type.
              We handle both septic installation and the full home build, so there is no
              coordination gap between subcontractors.
            </li>
          </ul>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            Why Lincoln County Is a Good Place to Build Right Now
          </h2>
          <p>
            Lincoln County still has available land at prices that make a custom home financially
            practical for working families. You can find buildable lots in the county for $30,000
            to $80,000 in many areas, which is a fraction of what comparable land costs closer to
            Huntsville or Nashville. Combine that with construction costs in the $175 to $275
            range, and a full custom home on your own land is achievable without stretching into
            a seven-figure budget.
          </p>
          <p>
            We build throughout Lincoln County and the surrounding region, including Fayetteville,
            Ardmore, Winchester, Taft, Giles County, and across the state line into Madison County
            and North Alabama. We pull permits locally, know the county building departments, and
            work with the soil and terrain conditions common to this part of Tennessee.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            Getting a Real Number for Your Project
          </h2>
          <p>
            Online cost calculators give you a starting point, but they cannot account for your
            specific lot, your planned finishes, or the site conditions that will affect your
            foundation and utility work. The only way to get a real number is to talk to a builder
            who has worked in your area and can walk your land.
          </p>
          <p>
            Marberry Construction is a licensed Tennessee general contractor (TN License #77673)
            based in Fayetteville. We provide free estimates and can help you understand what your
            budget gets you before you commit to a land purchase. Call us at 256-679-8665 or use
            the link below to request an estimate.
          </p>
          <p>
            You can also learn more about our{' '}
            <a href="/custom-home-builder" className="text-[#3B8BD4] underline">
              custom home construction services
            </a>{' '}
            and the areas we serve.
          </p>
        </div>
      </article>

      <section className="bg-[#1B2A4A] py-16 px-6 text-center mt-16">
        <h2 className="font-playfair text-3xl text-white mb-4">Ready to Build?</h2>
        <p className="text-[#F7F6F4] mb-8 text-lg">
          Marberry Construction serves Fayetteville, Lincoln County, and surrounding areas. Call us
          or request a free estimate today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:2566798665"
            className="bg-[#C9A84C] text-[#1B2A4A] font-semibold px-8 py-3 rounded hover:bg-yellow-500 transition"
          >
            Call 256-679-8665
          </a>
          <a
            href="/contact"
            className="border border-[#C9A84C] text-[#C9A84C] font-semibold px-8 py-3 rounded hover:bg-[#C9A84C] hover:text-[#1B2A4A] transition"
          >
            Free Estimate
          </a>
        </div>
      </section>
    </>
  );
}
