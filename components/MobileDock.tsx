"use client";

import Link from "next/link";
import { Phone, UserPlus, Heart } from "lucide-react";

export default function MobileDock() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0D223A]/95 backdrop-blur-md border-t-2 border-[#163B66] px-3 py-2.5 shadow-2xl">
      <div className="flex items-center justify-between gap-2 text-center font-mono text-[11px] uppercase tracking-wider font-bold">
        <a
          href="tel:+919797633077"
          className="flex-1 py-2.5 bg-[#163B66] text-white hover:bg-[#0D223A] transition-colors rounded-xl border border-[#205493] flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-[#FF9933]" />
          <span>CALL NGO</span>
        </a>
        <Link
          href="/membership"
          className="flex-1 py-2.5 bg-[#D97706] text-white hover:bg-[#B45309] transition-colors rounded-xl flex items-center justify-center gap-1.5 shadow-md"
        >
          <UserPlus className="w-3.5 h-3.5 text-white" />
          <span>JOIN CAUSE</span>
        </Link>
        <Link
          href="/#donors"
          className="flex-1 py-2.5 bg-[#10B981] text-white hover:bg-[#059669] transition-colors rounded-xl border border-[#34D399] flex items-center justify-center gap-1.5"
        >
          <Heart className="w-3.5 h-3.5 fill-white text-white" />
          <span>DONATE</span>
        </Link>
      </div>
    </div>
  );
}
