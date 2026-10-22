"use client";

import { useState } from "react";
import Link from "next/link";

export default function MembershipPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    setStatus("loading");
    setErrorMsg("");

    const form = new FormData(formEl);
    const payload = {
      name: form.get("name"),
      phone: form.get("phone"),
      email: form.get("email"),
      program: form.get("program"),
      message: form.get("message"),
    };

    try {
      const res = await fetch("/api/membership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }
      setStatus("done");
      formEl.reset();
    } catch (err) {
      console.error("Membership submission error:", err);
      setErrorMsg("Submission error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-[#F4F6F9] text-[#0F172A] pt-28 pb-24 selection:bg-[#D97706] selection:text-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#64748B] hover:text-[#163B66] transition-colors uppercase font-bold"
          >
            <span>←</span> Back to Home Page
          </Link>
        </div>

        {/* Header Hero Banner */}
        <div className="bg-[#163B66] text-white p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden mb-12 border-b-8 border-[#D97706]">

          <h1 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tight text-white mb-3">
            Join Mera Watan Welfare Foundation Betul
          </h1>
          <p className="text-gray-200 text-sm md:text-base font-body max-w-2xl leading-relaxed">
            Apply for any of our three specialized wings: Army & Defence Entrance Training, Women Empowerment Workshops, or Sports & Physical Fitness Coaching.
          </p>
        </div>

        {/* Application Form Card */}
        <div className="bg-white border border-[#163B66]/15 rounded-3xl p-6 sm:p-10 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#163B66] font-bold mb-2">
                  Full Name <span className="text-[#D97706]">*</span>
                </label>
                <input
                  name="name"
                  required
                  placeholder="e.g. Vikram Singh"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#F8FAFC] text-[#0F172A] placeholder-gray-400 font-sans focus:outline-none focus:border-[#163B66] focus:ring-1 focus:ring-[#163B66] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#163B66] font-bold mb-2">
                  Phone Number <span className="text-[#D97706]">*</span>
                </label>
                <input
                  name="phone"
                  required
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#F8FAFC] text-[#0F172A] placeholder-gray-400 font-sans focus:outline-none focus:border-[#163B66] focus:ring-1 focus:ring-[#163B66] transition-colors text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#163B66] font-bold mb-2">
                  Email Address <span className="text-gray-400 font-normal text-[11px]">(to receive email confirmation)</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="volunteer@example.com"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#F8FAFC] text-[#0F172A] placeholder-gray-400 font-sans focus:outline-none focus:border-[#163B66] focus:ring-1 focus:ring-[#163B66] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#163B66] font-bold mb-2">
                  Select Wing / Program <span className="text-[#D97706]">*</span>
                </label>
                <select
                  name="program"
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#F8FAFC] text-[#0F172A] font-sans focus:outline-none focus:border-[#163B66] transition-colors text-sm cursor-pointer"
                >
                  <option value="Army Training">Army & Defence Physical & Written Prep</option>
                  <option value="Women Empowerment">Women Empowerment & Self-Defense Wing</option>
                  <option value="Sports & Fitness">Sports Coaching & Athletics Wing</option>
                  <option value="Community Volunteer">General Social Work & Community Volunteering</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#163B66] font-bold mb-2">
                Additional Note / Experience <span className="text-gray-400 font-normal text-[11px]">(Optional)</span>
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Mention any prior volunteering experience, physical training, educational background, or specific goals..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#F8FAFC] text-[#0F172A] placeholder-gray-400 font-sans focus:outline-none focus:border-[#163B66] focus:ring-1 focus:ring-[#163B66] transition-colors text-sm"
              />
            </div>

            {status === "error" && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 font-mono text-xs">
                ⚠️ {errorMsg}
              </div>
            )}

            {status === "done" && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-xs flex items-center gap-2">
                <span className="text-lg">✔</span>
                <span>Application received! A confirmation email has been dispatched. Our ground coordinator will contact you via phone within 24 hours.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 bg-[#D97706] text-white font-mono text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-[#B45309] transition-colors shadow-lg disabled:opacity-60 border-b-4 border-[#B45309] cursor-pointer"
            >
              {status === "loading" ? "SUBMITTING APPLICATION..." : "SUBMIT VOLUNTEER / CADET APPLICATION"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
