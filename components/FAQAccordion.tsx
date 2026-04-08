'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3 mt-8">
      {items.map((item, i) => (
        <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
          <button
            className="w-full text-left px-6 py-5 flex items-center justify-between bg-white hover:bg-slate-50 transition"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-semibold text-navy text-base">{item.question}</span>
            <span className="text-skyblue font-bold text-xl ml-4 flex-shrink-0">
              {openIndex === i ? '−' : '+'}
            </span>
          </button>
          {openIndex === i && (
            <div className="px-6 py-5 bg-white border-t border-slate-100">
              <p className="text-slate-600 text-base leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
