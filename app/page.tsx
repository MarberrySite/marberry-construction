import { Home, PlusSquare, Wrench, Droplets } from "lucide-react";

const serviceCards = [
  {
    icon: Home,
    title: "Custom Home Construction",
    description:
      "From design to move-in day, we build homes tailored to your vision and your land.",
  },
  {
    icon: PlusSquare,
    title: "Home Additions & Remodeling",
    description:
      "Expand what you have. We add space without disrupting your life.",
  },
  {
    icon: Wrench,
    title: "Roofing",
    description:
      "Metal roofing installation and replacement built for Tennessee weather.",
  },
  {
    icon: Droplets,
    title: "Septic Systems",
    description:
      "New installations, repairs, and replacements for residential and new construction.",
  },
];

const stats = [
  { number: "280+", label: "Projects Completed" },
  { number: "8", label: "Counties Served" },
  { number: "Licensed", label: "TN #77673" },
  { number: "Insured", label: "& Bonded" },
];

const serviceAreas = [
  "Huntsville AL",
  "Madison County AL",
  "Athens AL",
  "Fayetteville TN",
  "Ardmore TN",
  "Taft TN",
  "Giles County TN",
  "Winchester TN",
];

export default function Page() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[80vh] flex items-center bg-navy">
        {/* Image — covers only the right 55% of the section */}
        <div
          className="hidden md:block absolute top-0 right-0 bottom-0 w-[50%]"
          style={{
            backgroundImage: 'url(/images/hero.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: '30% center',
          }}
        />
        {/* Hard line at 45% */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, #1B2A4A 50%, transparent 50%)' }}
        />

        {/* Text content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-24 w-full">
          <div className="max-w-[45%]">
          <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Serving Southern Tennessee &amp; Northern Alabama
          </p>
          <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
            Built to Last.<br />Built for You.
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-10">
            Custom homes, roofing, and septic systems.<br />From foundation to finish.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start mb-10">
            <a
              href="#contact"
              className="bg-gold text-navy font-semibold px-8 py-4 text-sm uppercase tracking-wide hover:bg-yellow-500 transition rounded-sm"
            >
              Get a Quote
            </a>
            <a
              href="#gallery"
              className="border-2 border-white text-white font-semibold px-8 py-4 text-sm uppercase tracking-wide hover:bg-white hover:text-navy transition rounded-sm"
            >
              View Our Work
            </a>
          </div>
          <div className="flex flex-wrap justify-start gap-8 text-white/50 text-sm">
            <span>TN Licensed #77673</span>
            <span>Insured &amp; Bonded</span>
            <span>Serving 8 Counties</span>
          </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — SERVICES */}
      <section id="services" className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-skyblue text-xs font-semibold tracking-[0.2em] uppercase text-center mb-3">
            Our Services
          </p>
          <h2 className="font-playfair text-4xl font-bold text-navy text-center mb-10">
            What We Build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCards.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white border border-slate-100 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-skyblue/10 flex items-center justify-center mb-6">
                  <Icon size={28} className="text-skyblue" />
                </div>
                <h3 className="font-semibold text-navy text-lg mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {description}
                </p>
                <a
                  href="#contact"
                  className="text-skyblue text-sm font-medium hover:underline"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — ABOUT */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Photo placeholder */}
            <div className="w-full aspect-square rounded-2xl max-w-lg overflow-hidden relative">
              <img
                src="/images/about.jpeg"
                alt="Brandon Marberry - General Contractor, Fayetteville TN"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-skyblue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                About Marberry Construction
              </p>
              <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
                Local Builders. Real Experience.
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-10">
                Marberry Construction LLC has been serving Fayetteville, TN and
                the surrounding region for years, building custom homes,
                installing septic systems, and protecting roofs for families
                across Lincoln County, Giles County, Madison County, and beyond.
                We are licensed, insured, and bonded in Tennessee.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ number, label }) => (
                  <div
                    key={label}
                    className="bg-white rounded-xl p-6 border border-slate-100"
                  >
                    <p className="font-playfair text-4xl font-bold text-navy">
                      {number}
                    </p>
                    <p className="text-slate-500 text-sm mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — SERVICE AREAS */}
      <section id="locations" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-skyblue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Where We Work
          </p>
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
            Our Service Areas
          </h2>
          <p className="text-slate-500 text-base mb-10">
            We build throughout Southern Tennessee and Northern Alabama.<br />From Lincoln County to Madison County, we know this land and we build it right.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="bg-navy/5 border border-navy/20 rounded-full px-6 py-2.5 text-navy text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — CTA BANNER */}
      <section id="contact" className="py-24 bg-navy text-center px-6">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
          Ready to Build?
        </h2>
        <p className="text-white/60 text-lg mb-10">
          Call us at 256-679-8665 or request a quote online. We respond
          within 24 hours.
        </p>
        <a
          href="tel:2566798665"
          className="inline-block bg-gold text-navy font-semibold px-10 py-4 text-sm uppercase tracking-wide hover:bg-yellow-500 transition rounded-sm"
        >
          Get a Quote
        </a>
      </section>
    </>
  );
}
