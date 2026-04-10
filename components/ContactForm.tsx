"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

const serviceOptions = [
  "Custom Home Construction",
  "Home Addition",
  "Metal Roofing",
  "Septic Installation",
  "Septic Repair",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    location: "",
    description: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://formspree.io/f/mvzvjnvb", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data?.error ?? "Something went wrong. Please try again or call us at 256-679-8665.");
      }
    } catch {
      setError("Unable to send your request. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
        <h3 className="font-playfair text-2xl font-bold text-navy mb-2">
          Request Received
        </h3>
        <p className="text-slate-600">
          We will be in touch within 24 hours. You can also call or text us
          directly at 256-679-8665.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm"
    >
      <div className="mb-5">
        <label className="text-navy text-sm font-medium mb-2 block">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-700 text-sm focus:outline-none focus:border-skyblue transition"
        />
      </div>

      <div className="mb-5">
        <label className="text-navy text-sm font-medium mb-2 block">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          required
          value={form.phone}
          onChange={handleChange}
          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-700 text-sm focus:outline-none focus:border-skyblue transition"
        />
      </div>

      <div className="mb-5">
        <label className="text-navy text-sm font-medium mb-2 block">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-700 text-sm focus:outline-none focus:border-skyblue transition"
        />
      </div>

      <div className="mb-5">
        <label className="text-navy text-sm font-medium mb-2 block">
          Service Needed
        </label>
        <select
          name="service"
          required
          value={form.service}
          onChange={handleChange}
          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-700 text-sm focus:outline-none focus:border-skyblue transition bg-white"
        >
          <option value="">Select a service...</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-5">
        <label className="text-navy text-sm font-medium mb-2 block">
          City / County
        </label>
        <input
          type="text"
          name="location"
          required
          value={form.location}
          onChange={handleChange}
          placeholder="e.g. Fayetteville TN, Madison County AL"
          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-700 text-sm focus:outline-none focus:border-skyblue transition placeholder:text-slate-400"
        />
      </div>

      <div className="mb-5">
        <label className="text-navy text-sm font-medium mb-2 block">
          Project Description
        </label>
        <textarea
          name="description"
          rows={4}
          value={form.description}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-700 text-sm focus:outline-none focus:border-skyblue transition placeholder:text-slate-400 resize-none"
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm mb-4">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gold text-navy font-semibold py-4 rounded-lg text-sm uppercase tracking-wide hover:bg-yellow-500 transition mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Sending…" : "SEND MY REQUEST"}
      </button>
    </form>
  );
}
