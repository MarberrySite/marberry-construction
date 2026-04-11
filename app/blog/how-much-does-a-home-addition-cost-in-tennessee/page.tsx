import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does a Home Addition Cost in Tennessee? | Marberry Construction',
  description:
    'Home additions in Tennessee cost $120-$220 per square foot. See typical project totals and what drives the price in Lincoln County and surrounding areas.',
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Much Does a Home Addition Cost in Tennessee?',
  author: { '@type': 'Organization', name: 'Marberry Construction LLC' },
  publisher: {
    '@type': 'Organization',
    name: 'Marberry Construction LLC',
    url: 'https://marberry-construction.vercel.app',
  },
  datePublished: '2025-01-01',
  description:
    'Home additions in Tennessee cost $120-$220 per square foot. See typical project totals and what drives the price in Lincoln County and surrounding areas.',
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
          How Much Does a Home Addition Cost in Tennessee?
        </h1>
        <p className="text-slate-500 text-sm font-inter mb-10">
          By Marberry Construction LLC, Fayetteville TN
        </p>

        <div className="prose prose-slate max-w-none font-inter text-slate-700 leading-relaxed space-y-6">
          <p>
            Home additions in Tennessee typically run $120 to $220 per square foot, depending on
            the type of addition, the finish level, and the complexity of integrating new
            construction with the existing structure. A standard room addition in the 300 to
            500 square foot range comes in at $40,000 to $120,000 for most projects in Lincoln
            County and the surrounding area. Smaller projects like a mudroom, screened porch,
            or laundry addition can come in under $30,000. Master suite additions with a full
            bath on the high end of finishes approach or exceed $120,000.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            What Drives the Cost of a Home Addition
          </h2>
          <p>
            Square footage sets the baseline, but several other factors determine where your
            project lands in the range:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Foundation type.</strong> The new addition needs a foundation that matches
              or ties into the existing structure. If the home is on a slab, a slab addition is
              straightforward. If the home has a crawl space, the addition typically needs a
              matching crawl space with proper venting and access. Matching an existing
              foundation type on a site with variable soil conditions adds complexity and cost
              compared to building from scratch.
            </li>
            <li>
              <strong>HVAC extension.</strong> Most additions need to be connected to the home's
              heating and cooling system. Depending on the capacity of the existing system, this
              may be as simple as running new ductwork from an existing air handler, or it may
              require adding capacity or installing a separate mini-split unit. HVAC work adds
              $3,000 to $10,000 or more depending on the scope.
            </li>
            <li>
              <strong>Windows and exterior matching.</strong> Additions that need to blend with
              the existing home exterior require matching siding material, trim profile, and
              window style. If the home has an uncommon or discontinued siding, sourcing a
              match takes more effort and cost than using standard current materials.
            </li>
            <li>
              <strong>Roofline complexity.</strong> Tying a new roof into an existing roofline
              creates valleys and transitions that require careful flashing and framing work.
              A simple shed-roof addition costs less than a full gable addition that needs to
              match the home's existing pitch and ridge height exactly.
            </li>
            <li>
              <strong>Plumbing additions.</strong> If the addition includes a bathroom, laundry
              connections, or a kitchen wet wall, plumbing runs from the existing system add
              meaningful cost. Bathroom additions in particular can add $8,000 to $20,000 over
              a simple room addition, depending on the fixture count and finish level.
            </li>
            <li>
              <strong>Interior finish level.</strong> Standard drywall, paint, and builder-grade
              fixtures keep costs near the lower end of the range. Custom tile work, high-end
              fixtures, built-ins, or specialty flooring push the number up.
            </li>
          </ul>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            Smaller Projects That Come in Under $30,000
          </h2>
          <p>
            Not every addition is a major undertaking. Several common projects fall well below
            the $40,000 threshold for a full room addition:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>A mudroom addition off an existing entry door, typically 80 to 120 square feet,
              runs $12,000 to $22,000 with storage and utility connections.</li>
            <li>A screened porch on an existing slab or deck, 150 to 250 square feet, runs
              $15,000 to $28,000 depending on roofing and finish quality.</li>
            <li>A laundry room addition, often 60 to 100 square feet, runs $14,000 to $25,000
              including plumbing rough-in and electrical.</li>
          </ul>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            Permit Costs in Tennessee
          </h2>
          <p>
            Any structural home addition in Tennessee requires a building permit through the
            county building department. Permit fees for additions in Lincoln County and surrounding
            counties typically run $200 to $800 depending on the size and type of work. We pull
            all required permits and handle the inspection process on every project we build.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            Getting a Realistic Number for Your Project
          </h2>
          <p>
            The best way to get an accurate estimate is to have a builder walk your home and
            assess the specific integration points. Online calculators cannot account for the
            existing structure's condition, foundation type, or the exterior matching requirements
            that often drive cost differences between similarly sized projects.
          </p>
          <p>
            Marberry Construction (TN License #77673) builds home additions throughout Fayetteville,
            Lincoln County, Giles County, Franklin County, and North Alabama. We provide free
            estimates and can give you a clear number after reviewing your home and your plans.
            Call 256-679-8665 or visit our{' '}
            <a href="/home-additions-remodeling" className="text-[#3B8BD4] underline">
              home additions page
            </a>{' '}
            to learn more.
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
