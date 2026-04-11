import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Metal Roof Replacement in Giles County TN | Marberry Construction',
  description:
    'Marberry Construction installs and replaces metal roofs throughout Giles County TN, including Pulaski. Licensed and based in nearby Fayetteville.',
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Metal Roof Replacement in Giles County TN',
  author: { '@type': 'Organization', name: 'Marberry Construction LLC' },
  publisher: {
    '@type': 'Organization',
    name: 'Marberry Construction LLC',
    url: 'https://marberry-construction.vercel.app',
  },
  datePublished: '2025-01-01',
  description:
    'Marberry Construction installs and replaces metal roofs throughout Giles County TN, including Pulaski. Licensed and based in nearby Fayetteville.',
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
          Metal Roof Replacement in Giles County TN
        </h1>
        <p className="text-slate-500 text-sm font-inter mb-10">
          By Marberry Construction LLC, Fayetteville TN
        </p>

        <div className="prose prose-slate max-w-none font-inter text-slate-700 leading-relaxed space-y-6">
          <p>
            Marberry Construction serves Giles County homeowners for metal roof installation and
            replacement, operating out of our base in Fayetteville, which puts us a short drive
            from Pulaski and the communities throughout the county. We are a licensed Tennessee
            contractor (TN License #77673) and install both standing seam and corrugated metal
            roofing on residential homes, agricultural buildings, and shops throughout the region.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            Giles County Roofing: Local Context
          </h2>
          <p>
            Giles County is rural Middle Tennessee at its core, with Pulaski as the county seat
            and a mix of farms, small communities, and residential properties spread across the
            countryside. The housing stock includes older homes that have been in families for
            decades alongside newer builds on rural acreage. Many of the older homes are reaching
            the point where their original or replacement shingle roofs have run their course.
          </p>
          <p>
            Metal roofing has always had a presence in Giles County on agricultural buildings
            and barns. The transition to metal on residential structures has accelerated as
            homeowners watch their shingle roofs deteriorate faster than expected in Tennessee's
            climate and calculate the long-term cost of repeated replacement. For Giles County
            property owners who plan to stay in their homes for 20 or more years, the math on
            metal is usually straightforward.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            Why Giles County Homeowners Choose Metal
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Durability in Tennessee weather.</strong> Giles County sees the same storm
              profile as the rest of Middle Tennessee: severe spring storms, summer heat,
              ice events in winter, and humidity throughout. Metal handles all of these stressors
              better than asphalt shingles. A standing seam roof installed today is expected to
              last 50 or more years without replacement.
            </li>
            <li>
              <strong>One replacement versus many.</strong> Homeowners who have already replaced
              a shingle roof once know what that involves: contractor coordination, disposal, time,
              and expense. Switching to metal turns roofing into a one-time decision for the life
              of the home or the foreseeable future of the property.
            </li>
            <li>
              <strong>Agricultural building compatibility.</strong> Many Giles County properties
              include outbuildings, barns, or shops alongside the main residence. We can install
              corrugated metal on agricultural structures and standing seam or corrugated on the
              home in a single project, simplifying coordination.
            </li>
            <li>
              <strong>Insurance storm damage replacement.</strong> When a hailstorm or severe
              wind event damages an existing shingle roof, many homeowners in this area take the
              opportunity to upgrade to metal during the insurance-funded replacement. We can
              work through that process with you.
            </li>
          </ul>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            Process and Timeline
          </h2>
          <p>
            We start with a free estimate. For a roof replacement project, that means walking the
            existing roof, assessing the current roofing material and the decking condition, and
            reviewing the roofline for any complexities that affect installation, including
            valleys, penetrations, and pitch. We provide a written estimate that covers tear-off,
            disposal, any decking repairs needed, and the new metal installation.
          </p>
          <p>
            After the estimate is accepted and the permit is pulled through the Giles County
            building department, we schedule the work. Most standard residential roof
            replacements in Giles County take one to three days, depending on the size of the
            roof and the condition of what is underneath. Larger or more complex roofs take
            longer.
          </p>
          <p>
            We pull the required permits and handle all county building department coordination.
            We serve Pulaski, Lynnville, Elkton, Minor Hill, Campbellsville, and communities
            throughout Giles County. From our Fayetteville base, we are well-positioned to
            reach any part of the county without the travel cost of a Nashville or Huntsville
            crew.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mt-10 mb-4">
            Free Estimates Available
          </h2>
          <p>
            There is no cost to get an estimate from us. We will come to your property, assess
            the existing roof, and give you a clear written number for the work. If you are
            comparing metal versus shingles, we can walk through the cost and performance
            tradeoffs for your specific home and situation so you can make a decision that fits
            your budget and your plans for the property.
          </p>
          <p>
            Call 256-679-8665 or use the link below to request an estimate. You can also visit
            our{' '}
            <a href="/roofing-contractor" className="text-[#3B8BD4] underline">
              roofing services page
            </a>{' '}
            for more detail on what we install and the areas we cover.
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
