'use client';
import { useState } from 'react';

interface GalleryImage {
  src: string;
  category: string;
  alt: string;
}

const CATEGORIES = [
  { key: 'all', label: 'All Projects' },
  { key: 'custom-homes', label: 'Custom Homes' },
  { key: 'remodeling', label: 'Additions & Remodeling' },
  { key: 'septic', label: 'Septic' },
];

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState('all');

  const filtered = active === 'all' ? images : images.filter((img) => img.category === active);

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition ${
              active === cat.key
                ? 'bg-navy text-white'
                : 'bg-navy/5 border border-navy/20 text-navy hover:bg-navy/10'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((img) => (
          <div key={img.src} className="rounded-xl overflow-hidden aspect-video bg-navy/5">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
}
