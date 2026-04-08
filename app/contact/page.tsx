import type { Metadata } from 'next';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Get a Free Quote | Marberry Construction LLC',
  description:
    'Request a free quote from Marberry Construction. Custom homes, roofing, and septic systems in Fayetteville TN and surrounding areas. Call 256-679-8665.',
};

const services = [
  'Custom Home Construction',
  'Home Additions and Remodeling',
  'Metal Roofing Installation',
  'Septic System Installation',
  'Septic Repair',
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-navy">
        <div
          className="hidden md:block absolute top-0 right-0 bottom-0 w-[50%]"
          style={{
            backgroundImage: 'url(/images/hero.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: '30% center',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, #1B2A4A 50%, transparent 50%)' }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-24 w-full">
          <div className="max-w-[45%]">
            <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              GET IN TOUCH
            </p>
            <h1 className="font-playfair text-3xl md:text-[60px] font-bold text-white leading-tight mb-6">
              Get a Free Quote
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Call us at 256-679-8665 or fill out the form below. We respond within 24 hours.
            </p>
            <div className="flex flex-wrap justify-start gap-8 text-white/50 text-sm">
              <span>TN Licensed #77673</span>
              <span>Insured &amp; Bonded</span>
              <span>Serving 8 Counties</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Left column */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-navy mb-8">
                Reach Us Directly
              </h2>

              <div className="flex items-start gap-4 mb-8">
                <Phone size={24} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-500 text-sm mb-1">Call or Text</p>
                  <a
                    href="tel:2566798665"
                    className="text-skyblue font-semibold text-base hover:underline"
                  >
                    256-679-8665
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8">
                <Mail size={24} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-500 text-sm mb-1">Email</p>
                  <a
                    href="mailto:marberryconstructionllc@gmail.com"
                    className="text-skyblue font-semibold text-base hover:underline break-all"
                  >
                    marberryconstructionllc@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8">
                <MapPin size={24} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-500 text-sm mb-1">Based In</p>
                  <p className="text-navy font-semibold text-base">Fayetteville, TN</p>
                  <p className="text-slate-500 text-sm mt-0.5">
                    Serving Southern Tennessee and Northern Alabama
                  </p>
                </div>
              </div>

              <h3 className="font-playfair text-xl font-bold text-navy mb-4 mt-2">
                Services We Provide
              </h3>
              <ul className="space-y-3 mb-8">
                {services.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-skyblue mt-0.5 shrink-0" />
                    <span className="text-slate-600 text-base">{s}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-warmwhite rounded-xl p-6 mt-8">
                <p className="text-slate-600 text-sm leading-relaxed">
                  Marberry Construction LLC is licensed in Tennessee (License #77673) and operates
                  throughout Southern Tennessee and Northern Alabama. We are insured and bonded on
                  every project.
                </p>
              </div>
            </div>

            {/* Right column — client component */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
