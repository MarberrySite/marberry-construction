import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Septic Systems for New Home Construction in Tennessee | Marberry Construction',
  description:
    'Every new home in rural Tennessee needs a septic system. Learn how it integrates with the construction timeline and why using one contractor for both simplifies everything.',
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Septic Systems for New Home Construction in Tennessee',
  author: { '@type': 'Organization', name: 'Marberry Construction LLC' },
  publisher: {
    '@type': 'Organization',
    name: 'Marberry Construction LLC',
    url: 'https://marberry-construction.vercel.app',
  },
  datePublished: '2025-01-01',
  description:
    'Every new home in rural Tennessee needs a septic system. Learn how it integrates with the construction timeline and why using one contractor for both simplifies everything.',
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
          Septic Systems for New Home Construction in Tennessee
        </h1>
        <p className="text-slate-500 text-sm font-inter mb-10">
          By Marberry Construction LLC, Fayetteville TN
        </p>

        <div className="prose prose-slate max-w-none font-inter text-slate-700 leading-relaxed space-y-6">
          <p>
            Every rural home in Tennessee requires a septic system unless municipal sewer service
            is available at the lot. In Lincoln County, Giles County, and most of the communities
            we build in, municipal sewer is limited to incorporated town areas. If you are building
            outside of town on your own land, a septic system is not optional. It is part of the
            project, and how it integrates with your construction timeline and your overall budget
            matters from the very beginning of planning.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            Why Soil Evaluation Comes Before Everything Else
          </h2>
          <p>
            The soil evaluation and percolation test should be the first step after identifying
            a building site, before finalizing the lot purchase and before committing to a house
            plan. Here is why: the type of septic system your lot requires is determined entirely
            by what the soil evaluation finds. If the soil supports a conventional gravity system,
            your septic cost is predictable and the drain field location can be planned around
            your house footprint. If the lot requires an alternative system, the cost goes up,
            the footprint of the system changes, and in some cases the house placement needs
            to shift to accommodate the system's required setbacks and layout.
          </p>
          <p>
            We have seen projects where a family purchased a lot, committed to a floor plan, and
            then discovered that the only location available for the required alternative system
            conflicted with the planned house location. Resolving those situations after the fact
            costs time and money. Getting the soil evaluation done early, before the lot purchase
            closes or at minimum before the construction design is finalized, prevents that
            problem entirely.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            How Septic Installation Integrates with the Construction Timeline
          </h2>
          <p>
            On a new home build, the septic system installation happens in two distinct phases,
            separated by other construction activity:
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Rough grading and septic rough-in.</strong> After the site is cleared and
              rough graded, the septic tank is set and the distribution lines are roughed in
              before the house foundation is placed. The tank location and the line routing from
              the house stub-out to the tank need to be coordinated with the foundation layout
              to ensure the plumbing exit point connects correctly to the tank inlet.
            </li>
            <li>
              <strong>Foundation and construction phase.</strong> After the tank is set and the
              rough-in lines are in place, construction on the home proceeds. The drain field
              area is typically left undisturbed during this phase so that heavy equipment working
              on the house does not compact the soil in the field area.
            </li>
            <li>
              <strong>Drain field installation and final grading.</strong> After the home is
              substantially complete and heavy equipment is no longer needed on the site, the
              drain field trenches are excavated, field lines are installed, and the system is
              inspected. Final grading and seeding of the drain field area complete the site work.
            </li>
          </ol>
          <p>
            This sequence requires coordination between the septic installation and the home
            construction to avoid conflicts in scheduling, equipment access, and grading. When
            the same contractor handles both, that coordination happens internally.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            The Problem with Using Different Contractors
          </h2>
          <p>
            When a homeowner hires a general contractor for the home and a separate septic
            installer for the system, coordination becomes the homeowner's responsibility. That
            creates several practical problems.
          </p>
          <p>
            Scheduling conflicts arise when the septic crew needs to access the site to complete
            drain field work but the general contractor's equipment is in the way, or vice versa.
            The foundation contractor may not know where the septic rough-in lines are routed,
            leading to the plumbing exit point being placed in a location that creates an awkward
            or overly long run to the tank.
          </p>
          <p>
            Liability questions become complicated when final grading disturbs a drain field that
            was installed by a different company. If something goes wrong at the interface between
            the home construction and the septic installation, both contractors point at each other
            and the homeowner is in the middle.
          </p>
          <p>
            With a single contractor handling both, none of those coordination problems exist.
            The septic installation is sequenced into the construction schedule, the plumbing
            connection is coordinated from the start, and final grading is handled as one
            continuous operation.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            Marberry Does Both
          </h2>
          <p>
            Marberry Construction (TN License #77673) handles custom home construction and septic
            system installation as a single integrated service throughout Lincoln County, Giles
            County, Franklin County, and surrounding areas. We manage the soil evaluation, permit
            process, system installation, and final inspection alongside the home build, on a
            coordinated schedule that removes one significant coordination burden from the
            homeowner.
          </p>
          <p>
            If you are planning a rural home build in Tennessee or North Alabama, call 256-679-8665
            for a free estimate that covers both the home and the septic system. You can also
            visit our{' '}
            <a href="/custom-home-builder" className="text-[#3B8BD4] underline">
              custom home builder page
            </a>{' '}
            and our{' '}
            <a href="/septic-system-installation" className="text-[#3B8BD4] underline">
              septic installation page
            </a>{' '}
            for more detail on what each service includes.
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
