import type { Metadata } from 'next';
import GalleryGrid from '@/components/GalleryGrid';

export const metadata: Metadata = {
  title: 'Project Gallery | Marberry Construction',
  description:
    'Photos of custom homes, additions, remodeling, and septic installations by Marberry Construction LLC in Fayetteville TN and surrounding areas.',
};

const galleryImages = [
  // Custom Homes
  { src: '/images/gallery/custom-homes/home1.jpeg', category: 'custom-homes', alt: 'Custom home built by Marberry Construction in Fayetteville TN' },
  { src: '/images/gallery/custom-homes/home2.jpeg', category: 'custom-homes', alt: 'New custom home construction Fayetteville TN' },
  { src: '/images/gallery/custom-homes/home3.jpeg', category: 'custom-homes', alt: 'Custom home builder Lincoln County TN' },
  { src: '/images/gallery/custom-homes/home4.jpeg', category: 'custom-homes', alt: 'Custom built home Southern Tennessee' },
  { src: '/images/gallery/custom-homes/home5.jpeg', category: 'custom-homes', alt: 'New construction home Marberry Construction' },
  { src: '/images/gallery/custom-homes/home6.jpeg', category: 'custom-homes', alt: 'Custom home Fayetteville TN' },
  { src: '/images/gallery/custom-homes/home7.jpeg', category: 'custom-homes', alt: 'Custom home build Lincoln County Tennessee' },
  { src: '/images/gallery/custom-homes/home8.jpeg', category: 'custom-homes', alt: 'Marberry Construction custom home project' },
  { src: '/images/gallery/custom-homes/home9.jpeg', category: 'custom-homes', alt: 'Custom home Southern Tennessee' },
  { src: '/images/gallery/custom-homes/home10.jpeg', category: 'custom-homes', alt: 'New home construction Lincoln County TN' },
  { src: '/images/gallery/custom-homes/home11.jpeg', category: 'custom-homes', alt: 'Custom home builder Fayetteville Tennessee' },
  { src: '/images/gallery/custom-homes/home12.jpeg', category: 'custom-homes', alt: 'Custom home project Marberry Construction' },
  { src: '/images/gallery/custom-homes/home13.jpeg', category: 'custom-homes', alt: 'Residential construction Fayetteville TN' },
  { src: '/images/gallery/custom-homes/home14.jpeg', category: 'custom-homes', alt: 'Custom home build Tennessee' },
  { src: '/images/gallery/custom-homes/home16.jpeg', category: 'custom-homes', alt: 'New construction home Lincoln County' },
  { src: '/images/gallery/custom-homes/home17.jpeg', category: 'custom-homes', alt: 'Custom home Marberry Construction LLC' },
  // Remodeling
  { src: '/images/gallery/remodeling/remodel1.jpeg', category: 'remodeling', alt: 'Home addition and remodeling Fayetteville TN' },
  { src: '/images/gallery/remodeling/remodel2.jpeg', category: 'remodeling', alt: 'Room addition contractor Tennessee' },
  { src: '/images/gallery/remodeling/remodel3.jpeg', category: 'remodeling', alt: 'Home remodel Marberry Construction' },
  { src: '/images/gallery/remodeling/remodel4.jpeg', category: 'remodeling', alt: 'Home addition Lincoln County TN' },
  { src: '/images/gallery/remodeling/remodel5.jpeg', category: 'remodeling', alt: 'Remodeling contractor Fayetteville TN' },
  { src: '/images/gallery/remodeling/remodel10.jpeg', category: 'remodeling', alt: 'Home remodel Southern Tennessee' },
  { src: '/images/gallery/remodeling/remodel11.jpeg', category: 'remodeling', alt: 'Addition and remodel project Tennessee' },
  { src: '/images/gallery/remodeling/remodel12.jpeg', category: 'remodeling', alt: 'Residential remodel Marberry Construction' },
  // Septic
  { src: '/images/gallery/septic/septic1.jpeg', category: 'septic', alt: 'Septic system installation Fayetteville TN' },
  { src: '/images/gallery/septic/septic2.jpeg', category: 'septic', alt: 'New septic tank installation Tennessee' },
  { src: '/images/gallery/septic/septic3.jpeg', category: 'septic', alt: 'Septic installation Lincoln County TN' },
  { src: '/images/gallery/septic/septic4.jpeg', category: 'septic', alt: 'Septic system contractor Tennessee' },
  { src: '/images/gallery/septic/septic7.jpeg', category: 'septic', alt: 'Septic installation Madison County AL' },
  { src: '/images/gallery/septic/septic8.jpeg', category: 'septic', alt: 'Residential septic system Marberry Construction' },
  { src: '/images/gallery/septic/septic9.jpeg', category: 'septic', alt: 'Septic system installation Southern Tennessee' },
  { src: '/images/gallery/septic/septic10.jpeg', category: 'septic', alt: 'New septic system Lincoln County TN' },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            OUR WORK
          </p>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Project Gallery
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Custom homes, additions, remodeling, and septic installations across Southern Tennessee and Northern Alabama.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-warmwhite">
        <div className="max-w-6xl mx-auto px-6">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-center py-24 px-6">
        <h2 className="font-playfair text-4xl font-bold text-white mb-4">Ready to Start?</h2>
        <p className="text-white/60 text-lg mb-10">
          Call 256-679-8665 or request a free quote. We respond within 24 hours.
        </p>
        <a
          href="/contact"
          className="inline-block bg-gold text-navy font-semibold px-10 py-4 text-sm uppercase tracking-wide hover:bg-yellow-500 transition rounded-sm"
        >
          GET A FREE QUOTE
        </a>
      </section>
    </>
  );
}
