import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Septic Tank Cost in Tennessee | Marberry Construction',
  description:
    'A new septic tank in Tennessee costs $800-$2,500 for the tank alone. Full system installation runs $4,000-$20,000. Get real numbers for Lincoln County.',
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'New Septic Tank Cost in Tennessee',
  author: { '@type': 'Organization', name: 'Marberry Construction LLC' },
  publisher: {
    '@type': 'Organization',
    name: 'Marberry Construction LLC',
    url: 'https://marberry-construction.vercel.app',
  },
  datePublished: '2025-01-01',
  description:
    'A new septic tank in Tennessee costs $800-$2,500 for the tank alone. Full system installation runs $4,000-$20,000. Get real numbers for Lincoln County.',
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
          Septic Systems
        </p>
        <h1 className="font-playfair text-4xl font-bold text-[#1B2A4A] mb-6 leading-snug">
          New Septic Tank Cost in Tennessee
        </h1>
        <p className="text-slate-500 text-sm font-inter mb-10">
          By Marberry Construction LLC, Fayetteville TN
        </p>

        <div className="prose prose-slate max-w-none font-inter text-slate-700 leading-relaxed space-y-6">
          <p>
            Homeowners researching septic costs often want to know what the tank itself costs,
            separate from the full system. In Tennessee, the tank alone runs $800 to $2,500
            depending on size and material. But the tank is only one component. A complete septic
            system installation, including the tank, distribution box, field lines, excavation,
            backfill, and permitting, typically runs $4,000 to $12,000 for a conventional system
            and $8,000 to $20,000 for an alternative system when soil conditions require it.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            Concrete vs Poly Tanks: What Tennessee Installers Use
          </h2>
          <p>
            There are two common tank materials: precast concrete and polyethylene (poly). Both
            are used in Tennessee, but concrete is more common in our area for several practical
            reasons.
          </p>
          <p>
            Concrete tanks are heavier, which makes them less likely to shift or float in
            high-water-table situations. They are typically factory-inspected before delivery and
            have a long service record in this region. A standard 1,000-gallon precast concrete
            tank runs $800 to $1,400 depending on manufacturer and delivery distance. A 1,500-gallon
            concrete tank, required for larger homes, runs $1,100 to $1,800.
          </p>
          <p>
            Poly tanks are lighter, which makes installation faster and reduces equipment needs
            on tight or difficult access sites. They will not corrode, crack from freeze-thaw
            cycling, or absorb groundwater. A comparable poly tank runs $900 to $2,000 depending
            on capacity. The lighter weight that makes them easy to install can also make them
            susceptible to shifting during installation if the site has a high water table, so
            proper bedding and backfill procedures matter more with poly than concrete.
          </p>
          <p>
            For most residential installations in Lincoln County and surrounding areas, both
            materials perform well. The choice often comes down to site access, the installer's
            equipment, and availability from local precast suppliers.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            What the Full System Cost Includes
          </h2>
          <p>
            The tank is a fraction of the total system cost. Here is what makes up the rest of a
            typical residential septic installation:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Soil evaluation and percolation test.</strong> Required before permitting.
              A licensed evaluator assesses the site and determines whether a conventional system
              is feasible or an alternative system is required. This evaluation feeds directly
              into the system design.
            </li>
            <li>
              <strong>Permit through county health department.</strong> Septic permits in
              Tennessee go through the county environmental health office, not the building
              department. Permit fees typically run $200 to $600 for residential installations.
            </li>
            <li>
              <strong>Excavation and site work.</strong> Digging the tank pit, running the
              distribution lines, and excavating the drain field trenches requires equipment
              time. Rocky ground, sloped sites, or difficult access increases this cost.
            </li>
            <li>
              <strong>Distribution box and field lines.</strong> The distribution box splits
              effluent flow from the tank into the drain field trenches. Field lines, typically
              perforated pipe in gravel-filled trenches, handle the final treatment and dispersal.
              The required length depends on soil perc rates and system size.
            </li>
            <li>
              <strong>Backfill and site restoration.</strong> After installation and inspection,
              trenches are backfilled and the site is graded. On new construction sites, this
              typically integrates with the overall grading work.
            </li>
          </ul>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            How Soil Type in Lincoln County Affects System Selection
          </h2>
          <p>
            Lincoln County soil varies significantly across the county. The limestone-underlain
            areas near the county's central corridor tend to have moderately good percolation,
            supporting conventional systems on most properties with adequate acreage. The areas
            with heavier clay soils, particularly in the lower-lying sections, are more likely
            to require extended field lines or alternative systems due to slower percolation
            rates.
          </p>
          <p>
            The only way to know what your specific property requires is a proper soil evaluation
            and perc test, which must be done before the permit application is submitted. We
            recommend getting this evaluation done before purchasing raw land if you are planning
            to build, because a site that requires an expensive alternative system changes the
            budget picture significantly.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            Marberry Handles the Full Installation
          </h2>
          <p>
            Marberry Construction (TN License #77673) installs complete septic systems throughout
            Lincoln County, Giles County, Franklin County, and surrounding areas, as well as
            North Alabama. We handle the soil evaluation coordination, permit application, full
            system installation, and final inspection. For homeowners building a new home with
            us, the septic system integrates directly into the construction timeline without
            separate contractor coordination.
          </p>
          <p>
            Call 256-679-8665 for a free estimate or visit our{' '}
            <a href="/septic-system-installation" className="text-[#3B8BD4] underline">
              septic installation page
            </a>{' '}
            for more detail on the types of systems we install.
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
