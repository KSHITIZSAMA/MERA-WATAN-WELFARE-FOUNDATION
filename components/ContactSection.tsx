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
      console.error("Contact form error:", err);
      setContactStatus("error");
    }
  }

  return (
    <div className="lg:col-span-6 bg-white p-8 md:p-10 rounded-3xl border border-[#163B66]/15 shadow-xl">
      <div className="inline-block px-3 py-1 bg-[#D97706]/15 text-[#B45309] font-mono text-[10px] font-bold uppercase tracking-widest rounded-lg mb-3">
        ✉ DIRECT ENQUIRY & VOLUNTEER DESK
      </div>
      <h3 className="text-xl font-bold uppercase font-display mb-6 text-[#163B66]">SEND A DIRECT MESSAGE</h3>
      <form onSubmit={handleContactSubmit} className="space-y-4 font-mono text-xs">
        <div>
          <label className="block text-xs font-bold uppercase mb-1.5 text-[#163B66]">YOUR FULL NAME *</label>
          <input name="name" required placeholder="e.g. Ramesh Singh" className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#F8FAFC] text-[#0F172A] text-sm focus:outline-none focus:border-[#163B66] focus:ring-1 focus:ring-[#163B66]" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase mb-1.5 text-[#163B66]">EMAIL ADDRESS *</label>
          <input name="email" type="email" required placeholder="raghuwanshiashok34@gmail.com" className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#F8FAFC] text-[#0F172A] text-sm focus:outline-none focus:border-[#163B66] focus:ring-1 focus:ring-[#163B66]" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase mb-1.5 text-[#163B66]">MESSAGE / QUERY DETAILS *</label>
          <textarea name="message" rows={4} required placeholder="Ask about Army coaching batches, women workshops, or volunteering..." className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#F8FAFC] text-[#0F172A] text-sm focus:outline-none focus:border-[#163B66] focus:ring-1 focus:ring-[#163B66]" />
        </div>
        {contactStatus === "error" && <p className="text-xs text-red-600 font-bold">Something went wrong. Please try again.</p>}
        {contactStatus === "done" && <p className="text-xs text-[#10B981] font-bold">✔ Message sent successfully — our team will reach out to you soon.</p>}
        <button
          type="submit"
          disabled={contactStatus === "loading"}
          className="w-full py-4 bg-[#D97706] text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#B45309] transition-colors rounded-xl shadow-lg border-b-4 border-[#B45309] disabled:opacity-60"
        >
          {contactStatus === "loading" ? "SENDING MESSAGE…" : "SEND MESSAGE TO FOUNDATION"}
        </button>
      </form>
    </div>
  );
}
