import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roof Replacement Cost in Tennessee | Marberry Construction',
  description:
    'Metal roof replacement in Tennessee costs $8-$22 per square foot installed. Get real numbers for corrugated and standing seam roofs in Lincoln County.',
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Roof Replacement Cost in Tennessee',
  author: { '@type': 'Organization', name: 'Marberry Construction LLC' },
  publisher: {
    '@type': 'Organization',
    name: 'Marberry Construction LLC',
    url: 'https://marberry-construction.vercel.app',
  },
  datePublished: '2025-01-01',
  description:
    'Metal roof replacement in Tennessee costs $8-$22 per square foot installed. Get real numbers for corrugated and standing seam roofs in Lincoln County.',
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
          Metal Roofing
        </p>
        <h1 className="font-playfair text-4xl font-bold text-[#1B2A4A] mb-6 leading-snug">
          Roof Replacement Cost in Tennessee
        </h1>
        <p className="text-slate-500 text-sm font-inter mb-10">
          By Marberry Construction LLC, Fayetteville TN
        </p>

        <div className="prose prose-slate max-w-none font-inter text-slate-700 leading-relaxed space-y-6">
          <p>
            If you are pricing a roof replacement in Tennessee and considering metal, here are
            the real numbers we work with in Lincoln County and the surrounding region.
            Corrugated metal with exposed fasteners runs $8 to $14 per square foot installed.
            Standing seam with hidden fasteners runs $14 to $22 per square foot installed. For a
            typical 1,500 to 2,000 square foot home footprint, that puts total metal roof
            replacement in the $12,000 to $44,000 range depending on the system you choose and
            the specifics of your roof.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            Corrugated vs Standing Seam: The Cost Difference
          </h2>
          <p>
            Corrugated metal, also called exposed-fastener metal roofing, uses screws that
            penetrate through the panel face and into the decking. It is less labor-intensive to
            install and less material-intensive, which is why it comes in lower in cost per
            square foot. For outbuildings, agricultural structures, and some residential
            applications, corrugated metal is a practical and durable choice.
          </p>
          <p>
            Standing seam uses panels with raised seams that interlock and clip to the roof deck
            without any fastener penetrating through the face of the panel. Because the fasteners
            are concealed inside the seam, there are no exposed screw points to rust, leak, or
            back out over time. Standing seam carries a higher upfront cost but performs better
            over decades because water infiltration at fastener points is not a factor.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            What Affects the Total Cost of Your Roof Replacement
          </h2>
          <p>
            The square footage of your roof footprint is just the starting point. Several other
            factors move the final number:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Roof pitch.</strong> Steeper roofs take longer to install safely and require
              more specialized equipment. A standard 6:12 pitch is manageable. Roofs steeper than
              10:12 add to labor costs because of the additional time and safety rigging required.
            </li>
            <li>
              <strong>Tear-off of existing roofing.</strong> Removing the old shingles or
              corrugated panels before installation adds $1 to $3 per square foot to the project.
              Some homeowners consider installing metal over existing shingles, but we generally
              do not recommend it. Decking problems, moisture intrusion, and underlying rot are
              often discovered during tear-off, and addressing them before laying a roof that will
              last 50 years makes more sense than covering them up.
            </li>
            <li>
              <strong>Penetrations and valleys.</strong> Every chimney, plumbing stack, skylight,
              and roof valley requires flashing work. A simple gable roof with minimal penetrations
              costs less than a hip roof with multiple valleys, dormers, and five or six plumbing
              penetrations. Complexity in the roofline is reflected in the installation time.
            </li>
            <li>
              <strong>Decking condition.</strong> If the plywood or OSB decking is damaged,
              rotted, or delaminating, it needs to be replaced before the new roof goes on. Decking
              replacement adds to material and labor costs. This is typically not known until
              tear-off is underway, which is one reason we build a contingency discussion into
              every estimate.
            </li>
            <li>
              <strong>Gutters.</strong> Roof replacement is a natural time to evaluate or replace
              gutters, since new drip edge and fascia board work is already underway. Gutter
              replacement adds to the total project cost but avoids a second mobilization later.
            </li>
          </ul>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            What a Typical Project Looks Like in Lincoln County
          </h2>
          <p>
            Most residential roof replacements we do in Lincoln County and the surrounding area
            are on homes with 1,600 to 2,400 square foot footprints and moderate pitch rooflines.
            For a project in that range using corrugated metal with tear-off included, homeowners
            typically spend $14,000 to $28,000. For standing seam on the same footprint,
            $24,000 to $50,000 is a realistic range depending on complexity.
          </p>
          <p>
            Agricultural buildings and large shop roofs can vary widely because the square
            footage is often higher and the pitch is typically lower, which reduces labor time
            even though the panel count goes up.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            Getting an Accurate Estimate
          </h2>
          <p>
            Online calculators are useful for ballpark numbers but cannot account for your roof's
            specific pitch, complexity, or the condition of what is underneath the current roofing.
            The only way to get an accurate number is to have someone walk the roof and look at
            the full picture.
          </p>
          <p>
            Marberry Construction is a licensed Tennessee contractor (TN License #77673) based
            in Fayetteville. We provide free estimates throughout Lincoln County, Giles County,
            Franklin County, Winchester, Ardmore, Taft, and North Alabama. Call 256-679-8665 or
            request an estimate below. You can also visit our{' '}
            <a href="/roofing-contractor" className="text-[#3B8BD4] underline">
              roofing services page
            </a>{' '}
            for more information.
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
