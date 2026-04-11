import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Construction Blog | Marberry Construction',
  description:
    'Guides on building costs, roofing, septic systems, and home additions in Tennessee and North Alabama from Marberry Construction LLC.',
};

const articles = [
  {
    href: '/blog/how-much-to-build-a-custom-home-in-tennessee',
    title: 'How Much Does It Cost to Build a Custom Home in Tennessee?',
    description:
      'Cost per square foot ranges, total project budgets, and why Lincoln County land costs less than Nashville or Huntsville.',
    category: 'Custom Homes',
  },
  {
    href: '/blog/build-a-house-in-tennessee-under-500k',
    title: 'Can You Build a House in Tennessee Under $500K?',
    description:
      'What a $400,000 to $500,000 budget gets you in Lincoln County versus the Nashville suburbs, and how land cost is the biggest variable.',
    category: 'Custom Homes',
  },
  {
    href: '/blog/how-long-does-a-metal-roof-last-in-tennessee',
    title: 'How Long Does a Metal Roof Last in Tennessee?',
    description:
      'Standing seam metal roofs last 40 to 70 years. Here is what affects lifespan in Tennessee\'s climate and why metal outperforms shingles.',
    category: 'Roofing',
  },
  {
    href: '/blog/metal-roof-vs-shingles-tennessee',
    title: 'Metal Roof vs Shingles in Tennessee: Which Is Better?',
    description:
      'Upfront cost, long-term value, storm resistance, and energy savings compared for Tennessee homeowners.',
    category: 'Roofing',
  },
  {
    href: '/blog/roof-replacement-cost-tennessee',
    title: 'Roof Replacement Cost in Tennessee',
    description:
      'Corrugated metal runs $8 to $14 per square foot installed. Standing seam runs $14 to $22. Real numbers for Lincoln County projects.',
    category: 'Roofing',
  },
  {
    href: '/blog/standing-seam-metal-roof-tennessee',
    title: 'Standing Seam Metal Roofs in Tennessee',
    description:
      'How hidden fastener panels work, why they outperform corrugated, and what the cost premium looks like on a typical Tennessee home.',
    category: 'Roofing',
  },
  {
    href: '/blog/new-roof-installation-lincoln-county-tn',
    title: 'New Roof Installation in Lincoln County TN',
    description:
      'Permit requirements, the dominant role of metal roofing in rural Lincoln County, and how Marberry handles projects from estimate to installation.',
    category: 'Roofing',
  },
  {
    href: '/blog/metal-roof-replacement-giles-county-tn',
    title: 'Metal Roof Replacement in Giles County TN',
    description:
      'Why Giles County homeowners choose metal over shingles, and how Marberry serves Pulaski and surrounding communities from its Fayetteville base.',
    category: 'Roofing',
  },
  {
    href: '/blog/how-much-does-septic-installation-cost-in-tennessee',
    title: 'How Much Does Septic Installation Cost in Tennessee?',
    description:
      'Conventional systems run $4,000 to $12,000. Alternative systems run $8,000 to $20,000. What drives the cost and how TDEC permitting works.',
    category: 'Septic',
  },
  {
    href: '/blog/new-septic-tank-cost-tennessee',
    title: 'New Septic Tank Cost in Tennessee',
    description:
      'Tank-only cost versus full system cost, concrete versus poly tanks, and how soil type in Lincoln County affects what your property needs.',
    category: 'Septic',
  },
  {
    href: '/blog/alternative-septic-systems-tennessee',
    title: 'Alternative Septic Systems in Tennessee: When You Need One',
    description:
      'What alternative systems are, why a lot fails a perc test, and which system types TDEC permits in Tennessee.',
    category: 'Septic',
  },
  {
    href: '/blog/do-i-need-a-permit-for-septic-in-tennessee',
    title: 'Do I Need a Permit for a Septic System in Tennessee?',
    description:
      'Yes. Every installation requires a permit through TDEC and your county health department. Here is the full process and what happens without one.',
    category: 'Septic',
  },
  {
    href: '/blog/septic-system-for-new-construction-tennessee',
    title: 'Septic Systems for New Home Construction in Tennessee',
    description:
      'How septic installation integrates with the construction timeline and why using one contractor for both the home and the system avoids coordination problems.',
    category: 'Septic',
  },
  {
    href: '/blog/how-much-does-a-home-addition-cost-in-tennessee',
    title: 'How Much Does a Home Addition Cost in Tennessee?',
    description:
      'Home additions run $120 to $220 per square foot. Typical project totals and what drives cost in Lincoln County and surrounding areas.',
    category: 'Home Additions',
  },
  {
    href: '/blog/room-addition-cost-tennessee',
    title: 'Room Addition Cost in Tennessee',
    description:
      'Bedroom additions, living room expansions, sunrooms, and screened porches with real cost ranges for each type of project.',
    category: 'Home Additions',
  },
  {
    href: '/blog/permit-for-home-addition-tennessee',
    title: 'Do You Need a Permit for a Home Addition in Tennessee?',
    description:
      'Yes. What triggers the requirement, how the permit process works in Lincoln County and Giles County, and what happens without one.',
    category: 'Home Additions',
  },
  {
    href: '/blog/master-suite-addition-tennessee',
    title: 'Master Suite Addition in Tennessee: Costs and What to Expect',
    description:
      'A full master suite addition runs $60,000 to $120,000. What drives the cost and why it is one of the highest-ROI additions for Tennessee homes.',
    category: 'Home Additions',
  },
];

const categories = ['Custom Homes', 'Roofing', 'Septic', 'Home Additions'];

const categoryColors: Record<string, string> = {
  'Custom Homes': 'bg-blue-50 text-blue-700',
  Roofing: 'bg-slate-100 text-slate-700',
  Septic: 'bg-green-50 text-green-700',
  'Home Additions': 'bg-amber-50 text-amber-700',
};

export default function BlogIndex() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B2A4A] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-3 font-inter">
            Marberry Construction
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Construction Blog
          </h1>
          <p className="text-[#F7F6F4]/80 text-lg font-inter max-w-2xl mx-auto leading-relaxed">
            Marberry Construction has been building custom homes, installing metal roofs, and
            handling septic systems throughout Lincoln County and surrounding areas for years.
            These guides cover the questions we hear most from homeowners in Fayetteville,
            Winchester, Ardmore, Giles County, and across the state line into North Alabama.
          </p>
        </div>
      </section>

      {/* Article grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {categories.map((cat) => {
          const catArticles = articles.filter((a) => a.category === cat);
          return (
            <div key={cat} className="mb-14">
              <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mb-6 pb-2 border-b border-slate-200">
                {cat}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {catArticles.map((article) => (
                  <Link
                    key={article.href}
                    href={article.href}
                    className="group block bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span
                      className={`inline-block text-xs font-semibold px-2 py-0.5 rounded mb-3 font-inter ${categoryColors[article.category]}`}
                    >
                      {article.category}
                    </span>
                    <h3 className="font-playfair text-lg font-bold text-[#1B2A4A] mb-2 group-hover:text-[#3B8BD4] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-slate-500 text-sm font-inter leading-relaxed">
                      {article.description}
                    </p>
                    <span className="mt-4 inline-block text-[#3B8BD4] text-sm font-semibold font-inter group-hover:underline">
                      Read article &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="bg-[#1B2A4A] py-16 px-6 text-center">
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
