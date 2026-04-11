import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Roof Installation in Lincoln County TN | Marberry Construction',
  description:
    'Marberry Construction installs metal roofs throughout Lincoln County TN. Licensed, local, and based in Fayetteville. Free estimates.',
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'New Roof Installation in Lincoln County TN',
  author: { '@type': 'Organization', name: 'Marberry Construction LLC' },
  publisher: {
    '@type': 'Organization',
    name: 'Marberry Construction LLC',
    url: 'https://marberry-construction.vercel.app',
  },
  datePublished: '2025-01-01',
  description:
    'Marberry Construction installs metal roofs throughout Lincoln County TN. Licensed, local, and based in Fayetteville. Free estimates.',
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
          New Roof Installation in Lincoln County TN
        </h1>
        <p className="text-slate-500 text-sm font-inter mb-10">
          By Marberry Construction LLC, Fayetteville TN
        </p>

        <div className="prose prose-slate max-w-none font-inter text-slate-700 leading-relaxed space-y-6">
          <p>
            Marberry Construction is based in Fayetteville and installs metal roofs throughout
            Lincoln County, including Fayetteville, Ardmore, Taft, and the rural communities
            across the county. We are a licensed Tennessee contractor (TN License #77673) and
            have been working on homes and agricultural structures in this county long enough to
            know the terrain, the permit process, and what performs best in this region's climate.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            Roofing in Lincoln County: What to Know
          </h2>
          <p>
            Lincoln County is predominantly rural, and the roofing needs here reflect that.
            Farms, agricultural outbuildings, older homes with wood or shingle roofs that have
            run their useful life, and new custom builds are the most common projects we take on
            in the county. The housing stock includes a mix of older construction from the
            mid-20th century and newer custom homes, and the replacement cycle for roofing is
            accelerating as homes built with 25-year shingles in the 1990s and 2000s reach the
            end of their service life.
          </p>
          <p>
            Metal roofing is the dominant choice for new installations and replacements in rural
            Lincoln County for a practical reason: these homes are spread out, maintenance calls
            are inconvenient, and owners prefer a roof that will last without attention for
            decades. A metal roof installed properly on a home in Taft or Ardmore will outlast
            the homeowner's need to think about it again. That is the value proposition, and it
            is why the majority of our residential roofing work in this county is metal.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            Permit Requirements in Lincoln County
          </h2>
          <p>
            Roof replacement and new roof installation in Lincoln County typically require a
            building permit through the Lincoln County building department. The permit process
            covers the structural and fire code compliance of the installation and requires an
            inspection at completion. We pull all required permits on every project we do.
          </p>
          <p>
            Working with a contractor who handles permits is important for a straightforward
            reason: if a roof is installed without required permits and an issue arises later,
            insurance claims can be complicated by the unpermitted work. We ensure every project
            is documented properly from start to finish.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            Why Metal Is the Right Choice for Lincoln County Homes
          </h2>
          <p>
            Beyond durability, metal makes practical sense for the types of homes and properties
            we see most often in Lincoln County:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Older farmhouses and rural homes.</strong> These homes often have complex
              rooflines, multiple additions from different decades, and underlying structures that
              need attention. Getting a proper metal roof on them protects the investment and stops
              the maintenance cycle of repeated shingle repairs.
            </li>
            <li>
              <strong>Agricultural and shop buildings.</strong> Corrugated metal on barns, pole
              buildings, and equipment sheds is cost-effective and durable. We install on
              agricultural structures throughout the county.
            </li>
            <li>
              <strong>New custom homes.</strong> Standing seam metal is the standard for custom
              home construction in this area. Most builders and homeowners specify metal on new
              construction because it lasts the life of the home.
            </li>
            <li>
              <strong>Storm damage replacement.</strong> When a hailstorm or high-wind event
              damages a shingle roof, many Lincoln County homeowners use the replacement as an
              opportunity to upgrade to metal. We work with homeowners through the insurance
              process where applicable.
            </li>
          </ul>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            Our Installation Process
          </h2>
          <p>
            Every project starts with a free estimate. We walk the roof, assess the existing
            structure and decking condition, and give you a written price for the work. We discuss
            system options, including corrugated versus standing seam, and walk through the cost
            difference and performance tradeoffs so you can make an informed decision.
          </p>
          <p>
            After the estimate is accepted, we pull the required permit, schedule the work, and
            handle tear-off and disposal of the old roofing material. Decking repairs are
            addressed before the new panels go on. Installation typically takes one to three days
            for a standard residential project, depending on roof size and complexity.
          </p>
          <p>
            We serve all of Lincoln County from our base in Fayetteville. If you are in Ardmore,
            Taft, Elora, Flintville, or anywhere else in the county, we can get to you. Call
            256-679-8665 or visit our{' '}
            <a href="/roofing-contractor" className="text-[#3B8BD4] underline">
              roofing contractor page
            </a>{' '}
            to learn more about what we do.
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
