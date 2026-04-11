import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alternative Septic Systems in Tennessee: When You Need One | Marberry Construction',
  description:
    'If your lot fails a perc test, you need an alternative septic system. Learn what that means and what it costs in Tennessee.',
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Alternative Septic Systems in Tennessee: When You Need One',
  author: { '@type': 'Organization', name: 'Marberry Construction LLC' },
  publisher: {
    '@type': 'Organization',
    name: 'Marberry Construction LLC',
    url: 'https://marberry-construction.vercel.app',
  },
  datePublished: '2025-01-01',
  description:
    'If your lot fails a perc test, you need an alternative septic system. Learn what that means and what it costs in Tennessee.',
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
          Alternative Septic Systems in Tennessee: When You Need One
        </h1>
        <p className="text-slate-500 text-sm font-inter mb-10">
          By Marberry Construction LLC, Fayetteville TN
        </p>

        <div className="prose prose-slate max-w-none font-inter text-slate-700 leading-relaxed space-y-6">
          <p>
            A conventional septic system works by moving wastewater from the home into a septic
            tank where solids settle, then allowing the liquid effluent to flow into a subsurface
            drain field where soil filters and treats it. This process requires soil that
            percolates at an acceptable rate. When soil cannot do that job, Tennessee requires
            an alternative system. Understanding the difference, and what triggers the requirement,
            matters before you buy land or start planning a build.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            Why a Lot Fails a Perc Test
          </h2>
          <p>
            The percolation test measures how quickly water moves through the soil at the
            proposed drain field depth. TDEC requires perc rates to fall within an acceptable
            range for a conventional system. Three conditions most commonly cause a site to fail:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Heavy clay soil.</strong> Clay holds water and releases it slowly. When the
              soil absorbs water faster than the conventional system design allows for treatment,
              untreated effluent can surface or migrate toward groundwater. Clay-heavy soils are
              common in parts of Lincoln County, Giles County, and the surrounding region, and
              they are the most frequent reason we see alternative systems required on rural
              Tennessee properties.
            </li>
            <li>
              <strong>High water table.</strong> A seasonally high water table means the soil
              beneath the drain field is saturated at certain times of year. Conventional
              subsurface systems need adequate separation between the drain field and the
              seasonal high water table to allow proper treatment before effluent reaches
              groundwater. When that separation does not exist, a conventional system is not
              approved.
            </li>
            <li>
              <strong>Shallow rock or bedrock.</strong> Middle Tennessee has areas where limestone
              bedrock sits close to the surface. A conventional drain field requires minimum soil
              depth for treatment. When rock limits that depth, a conventional system cannot be
              permitted, and an alternative approach is required.
            </li>
          </ul>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            Types of Alternative Systems Used in Tennessee
          </h2>
          <p>
            TDEC approves several types of alternative systems depending on the specific
            site conditions and the degree to which conventional treatment is not feasible:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Mound systems.</strong> When natural soil depth is insufficient, a mound
              system creates an elevated drain field above grade using imported fill material with
              acceptable percolation. The fill provides the treatment depth that the natural
              soil cannot. Mound systems are visible above grade and require more land area than
              conventional systems. They are common on lots with high water tables or shallow
              rock.
            </li>
            <li>
              <strong>Aerobic treatment units (ATUs).</strong> ATUs use mechanical aeration to
              treat wastewater to a higher level before dispersal. The treated effluent can then
              be distributed via drip irrigation or other methods in areas where conventional
              drain fields are not feasible. ATUs have mechanical components that require periodic
              maintenance and inspection, which adds to the long-term ownership cost.
            </li>
            <li>
              <strong>Chamber systems.</strong> Chamber systems replace the gravel-and-pipe
              approach of conventional drain fields with plastic arch chambers that sit in the
              trench. They require less excavation and can work in some slower-percolation soils
              that would not support a standard gravel trench. They are not a solution for all
              alternative scenarios but are a middle-ground option for moderate perc rate issues.
            </li>
            <li>
              <strong>Drip irrigation systems.</strong> Often used with ATUs, drip systems
              distribute treated effluent through subsurface drip tubing across a wide area at
              shallow depth. They work on sites where soil conditions prevent a deep conventional
              field but still support slow subsurface dispersal with properly treated effluent.
            </li>
          </ul>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            Cost Premium for Alternative Systems
          </h2>
          <p>
            Conventional systems in Tennessee typically run $4,000 to $12,000 for full
            installation. Alternative systems run $8,000 to $20,000, and complex configurations
            on difficult sites can go higher. The premium reflects additional engineering, more
            materials, specialized equipment, and in some cases ongoing maintenance requirements
            for mechanical components.
          </p>
          <p>
            For families budgeting a rural home build, this cost difference is significant enough
            that it should factor into land selection. A lot that looks affordable can become
            considerably more expensive to build on if the soil requires an alternative system.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            Get the Soil Evaluation Before You Buy Land
          </h2>
          <p>
            This is the single most important piece of advice for anyone purchasing rural land in
            Tennessee with the intent to build. A soil evaluation and perc test, conducted before
            purchase, tells you exactly what type of system is required. That information directly
            affects your total project budget and may affect whether a particular lot makes sense
            for your plans at all.
          </p>
          <p>
            Marberry Construction (TN License #77673) installs conventional and all types of
            alternative septic systems throughout Tennessee and North Alabama. We coordinate the
            soil evaluation, permit application, and full system installation in-house. Call
            256-679-8665 or visit our{' '}
            <a href="/septic-system-installation" className="text-[#3B8BD4] underline">
              septic installation page
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
