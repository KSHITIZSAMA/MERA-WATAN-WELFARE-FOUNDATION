"use client";

import { useState } from "react";
import Link from "next/link";

export default function DonatePage() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    setStatus("loading");
    setErrorMsg("");
    setDownloadUrl(null);

    const form = new FormData(formEl);
    const payload = {
      donorName: form.get("donorName"),
      email: form.get("email"),
      amount: form.get("amount"),
      purpose: form.get("purpose"),
    };

    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);

      const a = document.createElement("a");
      a.href = url;
      a.download = `Mere_Vatan_Donation_Receipt_${Date.now()}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();

      setStatus("done");
      formEl.reset();
    } catch (err) {
      console.error("Donation submission error:", err);
      setErrorMsg("Error completing donation. Please try again.");
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-[#F4F6F9] text-[#0F172A] pt-28 pb-24 selection:bg-[#D97706] selection:text-white">
      
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#64748B] hover:text-[#163B66] transition-colors uppercase font-bold"
          >
            <span>←</span> Back to Home Page
          </Link>
        </div>

        <div className="bg-[#163B66] text-white p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden mb-12 border-b-8 border-[#D97706]">

          <h1 className="text-3xl md:text-5xl font-black uppercase font-display tracking-tight text-white mb-3">
            Support Mera Watan Welfare Foundation Betul
          </h1>
          <p className="text-gray-200 max-w-3xl text-sm md:text-base leading-relaxed font-body">
            Every contribution directly funds free physical defence coaching for rural youth, women self-reliance workshops, sports trials, tree plantation drives, and essential equipment.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Bank & UPI Donation Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Account Card */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#163B66]/15 shadow-md space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#163B66] text-[#FF9933] flex items-center justify-center font-bold text-xl">
                  🏛️
                </div>
                <div>
                  <h3 className="font-bold font-mono text-sm uppercase text-[#163B66]">Bank Transfer Details</h3>
                  <p className="text-xs text-[#64748B]">Direct NEFT / RTGS / IMPS</p>
                </div>
              </div>

              <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-200 space-y-2 text-xs font-mono text-[#334155]">
                <div className="flex justify-between border-b pb-1.5 border-gray-200">
                  <span className="text-[#64748B]">Account Name:</span>
                  <span className="font-bold text-[#163B66]">MERA WATAN WELFARE FOUNDATION BETUL</span>
                </div>
                <div className="flex justify-between border-b pb-1.5 border-gray-200">
                  <span className="text-[#64748B]">Bank Name:</span>
                  <span className="font-bold text-[#0F172A]">YES Bank</span>
                </div>
                <div className="flex justify-between border-b pb-1.5 border-gray-200">
                  <span className="text-[#64748B]">Account No:</span>
                  <span className="font-bold text-[#D97706] tracking-widest">054694600000021</span>
                </div>
                <div className="flex justify-between border-b pb-1.5 border-gray-200">
                  <span className="text-[#64748B]">IFSC Code:</span>
                  <span className="font-bold text-[#0F172A]">YESB0000546</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Branch:</span>
                  <span className="font-bold text-[#0F172A]">Main Branch, Betul</span>
                </div>
              </div>
            </div>

            {/* Contact Support Card */}
            <div className="bg-[#0D223A] text-white p-6 rounded-3xl border border-[#205493] shadow-md space-y-3">
              <div className="text-xs font-mono text-[#FF9933] font-bold uppercase tracking-wider">
                📞 DONATION ASSISTANCE & TAX SLIP QUERY
              </div>
              <p className="text-xs text-gray-300 font-mono leading-relaxed">
                For bulk CSR contributions or 80G tax certificate queries, reach out directly to foundation founder:
              </p>
              <div className="pt-1 font-mono text-xs text-[#FF9933] space-y-1">
                <div>📱 Phone: +91 9797633077</div>
                <div>📧 Email: raghuwanshiashok34@gmail.com</div>
              </div>
            </div>

          </div>

          {/* Right Column: Instant Cash Receipt Generator */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-[#163B66]/15 shadow-xl">
            
            <div className="mb-6 border-b border-gray-100 pb-4">
              <div className="inline-block px-3 py-1 bg-[#10B981]/15 text-[#047857] font-mono text-[10px] font-bold uppercase tracking-widest rounded-lg mb-2">
                INSTANT RECEIPT GENERATOR
              </div>
              <h2 className="text-2xl font-bold font-display uppercase text-[#163B66]">
                Generate 80G Official Receipt
              </h2>
              <p className="text-xs text-[#64748B] font-mono mt-1">
                Enter your donation details below to download an official PDF receipt for your record.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#163B66] mb-1.5">
                  Donor Full Name *
                </label>
                <input
                  name="donorName"
                  required
                  placeholder="e.g. Ramesh Singh"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#F8FAFC] text-sm focus:outline-none focus:border-[#163B66] focus:ring-1 focus:ring-[#163B66]"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-[#163B66] mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="raghuwanshiashok34@gmail.com"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#F8FAFC] text-sm focus:outline-none focus:border-[#163B66] focus:ring-1 focus:ring-[#163B66]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-[#163B66] mb-1.5">
                    Donation Amount (₹) *
                  </label>
                  <input
                    name="amount"
                    type="number"
                    min="1"
                    required
                    placeholder="e.g. 2100"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#F8FAFC] text-sm focus:outline-none focus:border-[#163B66] focus:ring-1 focus:ring-[#163B66]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#163B66] mb-1.5">
                  Purpose / Wing Selection
                </label>
                <select
                  name="purpose"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#F8FAFC] text-sm font-mono focus:outline-none focus:border-[#163B66]"
                >
                  <option>General Foundation Welfare Fund</option>
                  <option>Army Training & Physical Entrance Wing</option>
                  <option>Women Empowerment & Vocational Livelihood Wing</option>
                  <option>Sports & Athletic Coaching Wing</option>
                  <option>Tree Plantation & Environmental Drive</option>
                </select>
              </div>

              {status === "error" && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-mono rounded-xl">
                  {errorMsg}
                </div>
              )}

              {status === "done" && (
                <div className="p-5 bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-mono rounded-2xl space-y-3 shadow-md">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <span className="text-xl">✔</span>
                    <span>Donation Recorded & Official Receipt Generated!</span>
                  </div>
                  <p className="text-emerald-700 leading-relaxed">
                    Your official PDF donation receipt has been generated. If your automatic download did not start, click the button below to download it directly.
                  </p>
                  {downloadUrl && (
                    <a
                      href={downloadUrl}
                      download="Mere_Vatan_Donation_Receipt.pdf"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-[#10B981] hover:bg-[#047857] text-white font-bold rounded-xl shadow transition-all uppercase tracking-wider"
                    >
                      <span>📥</span>
                      <span>CLICK HERE TO DOWNLOAD RECEIPT (PDF)</span>
                    </a>
                  )}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-[#D97706] text-white font-mono text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-[#B45309] transition-colors shadow-lg disabled:opacity-60 border-b-4 border-[#B45309]"
              >
                {status === "loading" ? "Generating Official PDF Receipt..." : "DONATE & DOWNLOAD OFFICIAL PDF RECEIPT"}
              </button>
            </form>

          </div>

        </div>

      </div>

    </main>
  );
}
