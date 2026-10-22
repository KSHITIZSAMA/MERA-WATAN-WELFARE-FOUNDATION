"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Heart,
  Maximize2,
  X,
  CheckCircle2,
  Calendar,
  Apple,
  Users,
  ShieldCheck,
  TrendingUp,
  TreePine
} from "lucide-react";

interface ActivityItem {
  id: string;
  title: string;
  body: string;
  date: string;
  tag: string;
  image: string;
  badgeColor: string;
  highlight?: string;
}

const ACTIVITIES_DATA: ActivityItem[] = [
  {
    id: "act-1",
    title: "Historic Milestone in Betul: 160 Cadets Receive Free Daily Nutritious Diet",
    body: "A landmark initiative by Mera Watan Welfare Foundation providing daily sprouted grains, fresh milk, boiled eggs, and fruits to 160 cadets (80 boys & 80 girls) undergoing rigorous military physical training.",
    date: "October 13, 2026",
    tag: "Free Cadet Nutrition",
    image: "/images/cadet-free-diet.jpg",
    badgeColor: "bg-[#FF9933]/15 text-[#D97706] border-[#FF9933]/30",
    highlight: "160 Cadets Enrolled"
  },
  {
    id: "act-2",
    title: "Over 270 Rural Youths Successfully Recruited into Indian Armed Forces & Police",
    body: "Celebrating the achievement of over 270 young men and women trained free-of-cost, securing selection as Sub-Inspectors, Constables, and soldiers across the Indian Army, MP Police, and Central Paramilitary Forces.",
    date: "October 05, 2026",
    tag: "Defence & Police Selection",
    image: "/images/cadet-selection-victory.jpg",
    badgeColor: "bg-[#10B981]/15 text-[#059669] border-[#10B981]/30",
    highlight: "270+ Recruited"
  },
  {
    id: "act-3",
    title: "Women Self-Reliance: 80+ Girls Complete Free Defence & Self-Defense Training",
    body: "Equipping rural young women with physical fitness for police and defence recruitment, martial arts self-defense techniques, computer literacy, and vocational tailoring to foster complete self-reliance.",
    date: "November 25, 2025",
    tag: "Women Empowerment",
    image: "/images/women-empowerment-activity.jpg",
    badgeColor: "bg-[#818CF8]/15 text-[#4F46E5] border-[#818CF8]/30",
    highlight: "80+ Female Cadets"
  },
  {
    id: "act-4",
    title: "Green Betul Campaign: 500+ Fruit & Shade Trees Planted by Academy Cadets",
    body: "Cadets and volunteers carried out a massive environmental drive across Betul Police Grounds and public zones, planting and adopting over 500 fruit-bearing and shade trees for ecological sustainability.",
    date: "August 15, 2025",
    tag: "Environment & Forestry",
    image: "/images/plantation-drive-activity.jpg",
    badgeColor: "bg-[#059669]/15 text-[#047857] border-[#059669]/30",
    highlight: "500+ Trees Planted"
  }
];

export default function ActivitiesShowcase() {
  const [posterModalOpen, setPosterModalOpen] = useState(false);

  return (
    <div>
      {/* ------------------------------------------------------------------- */}
      {/* 1. MAJOR SPOTLIGHT: FREE DIET & TRAINING CAMPAIGN                   */}
      {/* ------------------------------------------------------------------- */}
      <div className="mb-14 bg-gradient-to-br from-[#0D223A] via-[#132F52] to-[#0A1B30] text-white rounded-3xl p-6 sm:p-10 border-2 border-[#D97706]/60 shadow-2xl relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF9933]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
          
          {/* Left Column: Official Poster Preview (Clickable for full view) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div
              onClick={() => setPosterModalOpen(true)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden border-2 border-[#FF9933]/60 shadow-2xl hover:border-[#FF9933] transition-all max-w-sm w-full bg-[#071729]"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/images/free-diet-announcement.jpg"
                  alt="Mera Watan Welfare Foundation Free Nutrition & Diet Initiative Poster"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#0D223A]/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#FF9933] text-white flex items-center justify-center mb-2 shadow-lg">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                    View Full Flyer &amp; QR Code
                  </span>
                </div>
              </div>

              {/* Poster Bottom Bar */}
              <div className="p-3 bg-[#163B66] border-t border-[#205493] flex items-center justify-between text-xs font-mono">
                <span className="text-[#FF9933] font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Official Announcement Flyer
                </span>
                <span className="text-gray-300 text-[11px] underline flex items-center gap-1">
                  Enlarge <Maximize2 className="w-3 h-3" />
                </span>
              </div>
            </div>
            <p className="text-[11px] font-mono text-gray-300 mt-2 text-center">
              💡 Click the flyer to view the full resolution poster and donation QR code
            </p>
          </div>

          {/* Right Column: Campaign Details & Impact */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF9933]/20 border border-[#FF9933]/50 text-[#FF9933] font-mono text-[11px] font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#FF9933] animate-ping" />
              <span>Historic Community Drive · Betul, MP</span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-sans text-white leading-tight">
                Free Physical Training + <span className="text-[#FF9933]">Free Daily Nutrition &amp; Diet</span> Initiative!
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#E2E8F0] mt-1.5 font-bold uppercase tracking-wide">
                Mera Watan Welfare Foundation · &quot;Har Ghar Se Vardidhari&quot;
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-200 font-sans leading-relaxed font-normal">
              Supporting <b>160 rural and underprivileged youth cadets</b> (80 young men &amp; 80 young women) preparing for Armed Forces &amp; Police entrance with 100% free physical conditioning, endurance drills, and daily fresh high-protein nutritious diet.
            </p>

            {/* Diet Components Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="bg-[#163B66]/80 p-3 rounded-xl border border-[#205493]/70">
                <div className="text-xs font-bold text-[#FF9933] font-mono">Sprouted Moong &amp; Chana</div>
                <div className="text-[11px] text-gray-300">Daily High Protein</div>
              </div>
              <div className="bg-[#163B66]/80 p-3 rounded-xl border border-[#205493]/70">
                <div className="text-xs font-bold text-[#FF9933] font-mono">Fresh Milk &amp; Fruits</div>
                <div className="text-[11px] text-gray-300">Stamina &amp; Energy Boost</div>
              </div>
              <div className="bg-[#163B66]/80 p-3 rounded-xl border border-[#205493]/70 col-span-2 sm:col-span-1">
                <div className="text-xs font-bold text-[#FF9933] font-mono">Boiled Eggs &amp; Almonds</div>
                <div className="text-[11px] text-gray-300">Muscle Recovery</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => setPosterModalOpen(true)}
                className="px-6 py-3 bg-[#FF9933] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg hover:bg-[#E68524] transition-all flex items-center gap-2 cursor-pointer border-b-2 border-[#B45309]"
              >
                <Maximize2 className="w-4 h-4" />
                <span>View Full Flyer</span>
              </button>
              <Link
                href="/donate"
                className="px-6 py-3 bg-[#10B981] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg hover:bg-[#059669] transition-all flex items-center gap-2 border-b-2 border-[#059669]"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Sponsor Diet / Donate</span>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* 2. FIELD ACTIVITIES GRID WITH RICH PHOTOGRAPHY                       */}
      {/* ------------------------------------------------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {ACTIVITIES_DATA.map((act) => (
          <div
            key={act.id}
            className="group bg-white rounded-3xl overflow-hidden border border-[#163B66]/15 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              {/* Image Container with 16:9 ratio */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#071729]">
                <Image
                  src={act.image}
                  alt={act.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border shadow-md backdrop-blur-md bg-white/95 text-[#163B66] border-[#163B66]/20">
                    {act.tag}
                  </span>
                </div>

                {/* Highlight Pill */}
                {act.highlight && (
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-[#163B66]/90 text-white backdrop-blur-md border border-white/20">
                      ★ {act.highlight}
                    </span>
                  </div>
                )}
              </div>

              {/* Content Body */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-2">
                  <Calendar className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>{act.date}</span>
                </div>

                <h3 className="text-base sm:text-lg font-black font-sans text-[#163B66] group-hover:text-[#D97706] transition-colors leading-snug mb-3">
                  {act.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-gray-600 font-sans leading-relaxed">
                  {act.body}
                </p>
              </div>
            </div>

            {/* Footer Status Bar */}
            <div className="px-6 py-3 bg-[#F8FAFC] border-t border-gray-100 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
              <span className="flex items-center gap-1.5 text-[#059669] font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Active Field Initiative
              </span>
              <span className="text-[#163B66] font-bold group-hover:translate-x-0.5 transition-transform">
                Betul, Madhya Pradesh →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* 3. FULL POSTER MODAL LIGHTBOX                                       */}
      {/* ------------------------------------------------------------------- */}
      {posterModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative max-w-xl w-full bg-[#0D223A] rounded-3xl border-2 border-[#D97706] overflow-hidden shadow-2xl max-h-[92vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-4 bg-[#163B66] text-white flex items-center justify-between border-b border-[#205493]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FF9933]" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  Official Free Diet &amp; Physical Training Announcement Flyer
                </span>
              </div>
              <button
                onClick={() => setPosterModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Poster Scrollable Container */}
            <div className="p-3 overflow-y-auto flex-1 bg-black/40 flex justify-center">
              <div className="relative max-w-md w-full">
                <Image
                  src="/images/free-diet-announcement.jpg"
                  alt="Official Announcement Poster Full View"
                  width={600}
                  height={900}
                  className="rounded-xl w-full h-auto shadow-2xl object-contain"
                  priority
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#071729] border-t border-[#205493] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
              <div className="text-gray-300 text-center sm:text-left">
                Official Bank UPI ID: <span className="text-[#FF9933] font-bold">yespay.ypbsm000011951@yesbankltd</span>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <Link
                  href="/donate"
                  onClick={() => setPosterModalOpen(false)}
                  className="flex-1 sm:flex-initial px-5 py-2.5 bg-[#D97706] text-white font-bold rounded-xl text-center hover:bg-[#B45309] transition-colors"
                >
                  Sponsor Diet / Donate
                </Link>
                <button
                  onClick={() => setPosterModalOpen(false)}
                  className="px-4 py-2.5 bg-gray-700 text-gray-200 rounded-xl hover:bg-gray-600 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
