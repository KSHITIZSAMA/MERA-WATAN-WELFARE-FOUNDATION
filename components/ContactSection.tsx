"use client";

import { useState } from "react";

export default function ContactSection() {
  const [contactStatus, setContactStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    setContactStatus("loading");
    const form = new FormData(formEl);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      message: form.get("message"),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        setContactStatus("error");
        return;
      }
      setContactStatus("done");
      formEl.reset();
    } catch (err) {
      console.error("Enquiry form error:", err);
      setContactStatus("error");
    }
  }

  return (
    <div className="lg:col-span-6 bg-white p-8 md:p-10 rounded-3xl border border-[#163B66]/15 shadow-xl">
      <div className="inline-block px-3 py-1 bg-[#D97706]/15 text-[#B45309] font-mono text-[10px] font-bold uppercase tracking-widest rounded-lg mb-3">
        ✉ DIRECT ENQUIRY DESK
      </div>
      <h3 className="text-xl font-bold uppercase font-display mb-2 text-[#163B66]">SUBMIT AN ENQUIRY</h3>
      <p className="text-xs text-[#64748B] font-mono mb-6 leading-relaxed">
        Have questions regarding Army coaching batches, women workshops, athletics, or activities? Send an enquiry directly to our team.
      </p>
      <form onSubmit={handleContactSubmit} className="space-y-4 font-mono text-xs">
        <div>
          <label className="block text-xs font-bold uppercase mb-1.5 text-[#163B66]">YOUR FULL NAME *</label>
          <input name="name" required placeholder="e.g. Ramesh Singh" className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#F8FAFC] text-[#0F172A] text-sm focus:outline-none focus:border-[#163B66] focus:ring-1 focus:ring-[#163B66]" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase mb-1.5 text-[#163B66]">EMAIL ADDRESS *</label>
            <input name="email" type="email" required placeholder="e.g. yourname@example.com" className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#F8FAFC] text-[#0F172A] text-sm focus:outline-none focus:border-[#163B66] focus:ring-1 focus:ring-[#163B66]" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase mb-1.5 text-[#163B66]">PHONE NUMBER (OPTIONAL)</label>
            <input name="phone" type="tel" placeholder="e.g. +91 98765 43210" className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#F8FAFC] text-[#0F172A] text-sm focus:outline-none focus:border-[#163B66] focus:ring-1 focus:ring-[#163B66]" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase mb-1.5 text-[#163B66]">ENQUIRY DETAILS *</label>
          <textarea name="message" rows={4} required placeholder="Ask about Army coaching batches, women workshops, athletics training, or foundation programs..." className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#F8FAFC] text-[#0F172A] text-sm focus:outline-none focus:border-[#163B66] focus:ring-1 focus:ring-[#163B66]" />
        </div>
        {contactStatus === "error" && <p className="text-xs text-red-600 font-bold">Something went wrong. Please try again.</p>}
        {contactStatus === "done" && <p className="text-xs text-[#10B981] font-bold">✔ Enquiry submitted successfully — our team will reach out to you soon.</p>}
        <button
          type="submit"
          disabled={contactStatus === "loading"}
          className="w-full py-4 bg-[#D97706] text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#B45309] transition-colors rounded-xl shadow-lg border-b-4 border-[#B45309] disabled:opacity-60"
        >
          {contactStatus === "loading" ? "SUBMITTING ENQUIRY…" : "SUBMIT ENQUIRY TO FOUNDATION"}
        </button>
      </form>
    </div>
  );
}
