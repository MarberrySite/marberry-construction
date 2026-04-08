import Image from "next/image";

const services = [
  "Custom Home Construction",
  "Home Additions",
  "Roofing",
  "Septic Installation",
  "Septic Repair",
];

const serviceAreas = [
  "Fayetteville TN",
  "Ardmore TN",
  "Huntsville AL",
  "Madison County AL",
  "Athens AL",
  "Taft TN",
  "Giles County TN",
  "Winchester TN",
];

export default function Footer() {
  return (
    <footer className="bg-[#0f1d35] text-white pt-16 pb-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Col 1 */}
        <div>
          <Image
            src="/logo.png"
            alt="Marberry Construction LLC"
            height={44}
            width={160}
            style={{ height: 44, width: "auto" }}
            className="mb-4"
          />
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Building homes, installing systems, and protecting roofs across
            Southern Tennessee and Northern Alabama.
          </p>
          <p className="text-white/60 text-sm">
            <a href="tel:2566798665" className="hover:text-white transition">
              256-679-8665
            </a>
          </p>
          <p className="text-white/60 text-sm mt-1">
            <a
              href="mailto:marberryconstructionllc@gmail.com"
              className="hover:text-white transition"
            >
              marberryconstructionllc@gmail.com
            </a>
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-4">
            Services
          </h4>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s}>
                <a href="#services" className="text-white/70 hover:text-white text-sm transition">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-4">
            Service Areas
          </h4>
          <ul className="space-y-2">
            {serviceAreas.map((area) => (
              <li key={area} className="text-white/70 text-sm">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto border-t border-white/10 pt-6 mt-8">
        <p className="text-white/40 text-xs text-center">
          © 2025 Marberry Construction LLC · TN License #77673 · This website
          does not constitute a contract or guarantee of services.
        </p>
      </div>
    </footer>
  );
}
