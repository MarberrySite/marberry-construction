import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Room Addition Cost in Tennessee | Marberry Construction',
  description:
    'Adding a room in Tennessee costs $30,000-$120,000 depending on size and type. Get real numbers for bedroom additions, living space, and more.',
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Room Addition Cost in Tennessee',
  author: { '@type': 'Organization', name: 'Marberry Construction LLC' },
  publisher: {
    '@type': 'Organization',
    name: 'Marberry Construction LLC',
    url: 'https://marberry-construction.vercel.app',
  },
  datePublished: '2025-01-01',
  description:
    'Adding a room in Tennessee costs $30,000-$120,000 depending on size and type. Get real numbers for bedroom additions, living space, and more.',
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
          Home Additions
        </p>
        <h1 className="font-playfair text-4xl font-bold text-[#1B2A4A] mb-6 leading-snug">
          Room Addition Cost in Tennessee
        </h1>
        <p className="text-slate-500 text-sm font-inter mb-10">
          By Marberry Construction LLC, Fayetteville TN
        </p>

        <div className="prose prose-slate max-w-none font-inter text-slate-700 leading-relaxed space-y-6">
          <p>
            Adding a room to your home in Tennessee costs $30,000 to $120,000 for most residential
            projects, with the wide range reflecting differences in room type, size, finish level,
            and how complex the integration with the existing structure turns out to be. Here are
            the numbers broken down by project type, based on what we see in Lincoln County and
            the surrounding region.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            Bedroom Addition: $35,000 to $80,000
          </h2>
          <p>
            A standard bedroom addition in the 180 to 250 square foot range runs $35,000 to
            $60,000 in our area for a finished room with closet, drywall, flooring, and painted
            trim. The upper end of the range applies to larger bedrooms, vaulted ceilings, or
            premium flooring and trim selections.
          </p>
          <p>
            If the bedroom addition includes an attached private bathroom, add $20,000 to $35,000
            depending on the fixture count and tile work. A bedroom-and-bath combination is the
            most common room addition we build, and it typically lands in the $55,000 to $90,000
            range all-in.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            Living Room or Family Room Expansion: $40,000 to $90,000
          </h2>
          <p>
            Expanding a living area or adding a family room, typically 250 to 400 square feet,
            runs $40,000 to $90,000 depending on size and finish selections. These additions
            often involve opening up the existing wall to create a connected flow with the current
            living space, which adds structural work but also improves the functional value of
            the addition.
          </p>
          <p>
            Key cost drivers for this type of addition: the number and size of windows (larger
            windows add light but increase material cost), whether a fireplace or built-in
            shelving is included, and flooring selection. Hardwood or engineered wood flooring
            throughout a 350 square foot addition costs more than LVP, but both are common
            choices we see in this area.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            Sunroom or Screened Porch: $20,000 to $50,000
          </h2>
          <p>
            A screened porch addition on an existing slab or new concrete pad runs $20,000 to
            $35,000 for a standard 150 to 250 square foot space with a shed or gable roof. A
            three-season sunroom with windows and insulated walls runs $30,000 to $50,000. A
            fully conditioned four-season room that ties into the home's HVAC system is priced
            closer to a full room addition at $40,000 to $70,000.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            What Drives the Cost Difference Between Projects
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Foundation matching.</strong> Adding a slab addition to a slab home is
              straightforward. Matching a crawl space foundation requires pier and beam or block
              work that adds to the scope. Homes with unusual foundation configurations can
              require more engineering at the tie-in point.
            </li>
            <li>
              <strong>HVAC.</strong> A conditioned addition needs heat and cooling. If the existing
              system has capacity, running new ductwork adds $3,000 to $6,000. If a new unit or
              mini-split is needed, the cost is higher. Unconditioned additions like screened
              porches avoid this cost entirely.
            </li>
            <li>
              <strong>Plumbing.</strong> Bedroom-only additions have no plumbing. Adding a
              bathroom changes the project significantly in terms of rough-in, fixture installation,
              and tile work. Where the new bath's plumbing ties into the existing lines also
              affects cost, as longer runs mean more pipe and more labor.
            </li>
            <li>
              <strong>Exterior material matching.</strong> Additions that need to match existing
              brick, hardy board, or uncommon siding require sourcing the right material to
              achieve a clean appearance from the outside.
            </li>
          </ul>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            Permit Process and Timeline
          </h2>
          <p>
            A structural room addition requires a building permit through the county building
            department. In Lincoln County, the permit application, plan review, and approval
            typically take two to four weeks for a straightforward addition. Construction on
            most room additions runs six to twelve weeks from permit issuance to completion,
            depending on the size and complexity.
          </p>
          <p>
            Inspection stages typically include foundation, framing, rough electrical and
            plumbing, insulation, and final. We manage all permit paperwork and schedule all
            required inspections.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            Marberry Builds Throughout the Region
          </h2>
          <p>
            Marberry Construction builds room additions throughout Fayetteville, Lincoln County,
            Giles County, Franklin County, Winchester, Ardmore, Taft, and North Alabama. We are
            a licensed Tennessee contractor (TN License #77673) and provide free estimates.
            Call 256-679-8665 or visit our{' '}
            <a href="/home-additions-remodeling" className="text-[#3B8BD4] underline">
              home additions page
            </a>{' '}
            for more detail.
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
