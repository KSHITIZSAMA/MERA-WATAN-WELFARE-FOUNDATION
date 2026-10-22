import Link from "next/link";
import Image from "next/image";
import { Heart, MapPin, Phone, Mail, Clock, Briefcase, ShieldCheck, TrendingUp } from "lucide-react";
import { db } from "@/lib/db";
import ContactSection from "@/components/ContactSection";
import ScrollButton from "@/components/ScrollButton";
import GallerySection from "@/components/GallerySection";
import StatCounter from "@/components/StatCounter";
import { GradientBackground } from "@/components/GradientBackground";
import ActivitiesShowcase from "@/components/ActivitiesShowcase";

export const dynamic = "force-dynamic";

export default function Home() {
  const data = db.read();
  const recentActivity = [...data.notices].slice(0, 4);
  const sortedDonors = [...data.donors].sort((a, b) => (a.date < b.date ? 1 : -1));
  const president = data.management.find((m) => m.role.toLowerCase().includes("president"));

  return (
    <div className="relative text-[#0F172A] min-h-screen">
      {/* 21st.dev Custom Noise & Gradient Backdrop */}
      <GradientBackground className="fixed inset-0 pointer-events-none -z-10" />

      {/* ------------------------------------------------------------------------- */}
      {/* 1. HERO SECTION (id="hero") — MILIDECK "X" Framed Photo & 98+ Recruitment Stats */}
      {/* ------------------------------------------------------------------------- */}
      {/* ------------------------------------------------------------------------- */}
      {/* 1. HERO SECTION (id="hero") — Modern NGO Prestige Hero Layout */}
      {/* ------------------------------------------------------------------------- */}
      <section id="hero" className="relative bg-transparent text-[#0F172A] overflow-hidden border-b-2 border-[#163B66]/20 py-10 lg:py-16 scroll-mt-24">

        {/* Background Ambient Radiance & Tri-Color Strip */}
        <div className="absolute top-0 inset-x-0 h-1.5 flex z-30">
          <span className="w-1/3 bg-[#FF9933]" />
          <span className="w-1/3 bg-[#163B66]" />
          <span className="w-1/3 bg-[#10B981]" />
        </div>
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#163B66]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#D97706]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">


          <div className="grid lg:grid-cols-12 gap-10 items-center">

            {/* Left Column: Mission, Title & CTAs */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">

              {/* Eyebrow Pill Badge for Mobile & Desktop */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#163B66]/10 border border-[#163B66]/20 text-[#163B66] font-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#FF9933] animate-pulse" />
                <span>Govt. Regd. Non-Profit · Betul, M.P.</span>
              </div>

              {/* High-Impact Dual Tone Heading */}
              <div className="space-y-1">
                <h1 className="text-3xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#163B66] leading-[1.08] font-display">
                  MERA WATAN
                </h1>
                <div className="text-xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#D97706] leading-tight font-display">
                  WELFARE FOUNDATION BETUL
                </div>
              </div>

              {/* Subtext */}
              <p className="text-xs sm:text-base font-body text-[#334155] tracking-normal max-w-2xl leading-relaxed font-normal">
                Dedicated to free physical defence entrance training, women self-reliance &amp; vocational empowerment, youth sports excellence, and community environmental welfare across India.
              </p>

              {/* Action Buttons: Unified in One Line */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <Link
                  href="/membership"
                  className="px-5 sm:px-6 py-3.5 bg-[#D97706] text-white font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#B45309] active:scale-[0.99] transition-all shadow-md hover:shadow-lg rounded-xl flex items-center justify-center gap-2 border-b-4 border-[#B45309] group whitespace-nowrap"
                >
                  <span>JOIN AS VOLUNTEER / CADET</span>
                  <span className="text-[#FF9933] group-hover:translate-x-1 transition-transform">→</span>
                </Link>

                <Link
                  href="/donate"
                  className="px-5 sm:px-6 py-3.5 bg-[#163B66] text-white font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#0D223A] active:scale-[0.99] transition-all shadow-md hover:shadow-lg rounded-xl flex items-center justify-center gap-2 border-b-4 border-[#0D223A] whitespace-nowrap"
                >
                  <Heart className="w-3.5 h-3.5 fill-white text-white" />
                  <span>DONATE</span>
                </Link>

                <ScrollButton
                  targetId="about"
                  className="px-5 sm:px-6 py-3.5 bg-white border-2 border-[#163B66]/30 border-b-4 border-b-[#163B66]/40 text-[#163B66] font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#163B66] hover:text-white active:scale-[0.99] transition-all rounded-xl shadow-xs hover:shadow-md flex items-center justify-center text-center whitespace-nowrap"
                >
                  OUR IMPACT ↓
                </ScrollButton>
              </div>

              {/* Impact Stat Banner */}
              <div className="mt-6 sm:mt-8 bg-[#163B66] text-white p-4 sm:p-6 shadow-xl flex items-center gap-4 sm:gap-5 border-l-4 sm:border-l-8 border-[#D97706] rounded-2xl border border-[#205493]/60 relative overflow-hidden">
                <div className="text-3xl sm:text-5xl font-mono font-extrabold text-[#FF9933] shrink-0">
                  <StatCounter end={270} suffix="+" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-mono font-bold text-[#FF9933] uppercase tracking-wider sm:tracking-widest">
                    DEFENCE SELECTIONS &amp; QUALIFIED CADETS
                  </div>
                  <div className="text-[10px] sm:text-xs font-mono text-[#E2E8F0] leading-snug sm:leading-relaxed uppercase mt-0.5 font-medium">
                    Young men &amp; women successfully recruited into Army, Police &amp; Athletic Teams.
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Officer Frame Showcase */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-none">

                {/* Glow ring */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#163B66] via-[#D97706] to-[#10B981] opacity-30 blur-lg animate-pulse" />

                {/* Main Card */}
                <div className="relative bg-[#0D223A] border-4 border-[#163B66] rounded-3xl overflow-hidden shadow-2xl p-2.5">
                  <div className="relative h-[360px] sm:h-[480px] lg:h-[540px] w-full rounded-2xl overflow-hidden bg-[#071526]">
                    <Image
                      src="/images/ashok-raghuvanshi-hero.jpg"
                      alt="Mera Watan Welfare Foundation Founder Ashok Raghuvanshi (Ex-Army)"
                      fill
                      priority
                      className="object-cover object-center filter contrast-105 brightness-100 transform hover:scale-105 transition-transform duration-700"
                    />

                    {/* Bottom Floating Card */}
                    <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4 z-20">
                      <div className="p-3 sm:p-4 bg-[#163B66]/90 backdrop-blur-md border border-[#D97706]/50 rounded-xl text-white shadow-xl">
                        <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] font-bold text-[#FF9933] uppercase tracking-wider mb-1">
                          <span>FOUNDER &amp; PRESIDENT</span>
                          <span className="bg-[#D97706] text-white px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-bold">INDIAN ARMY (RETD.)</span>
                        </div>
                        <p className="text-[11px] sm:text-xs font-mono text-gray-200 leading-snug font-semibold">
                          DFR Ashok Raghuvanshi (Retd. Indian Army) — Guiding youth towards national service, discipline &amp; fitness.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom 4-Item Quick Trust Metrics Bar */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white/80 backdrop-blur-sm border border-[#163B66]/15 rounded-2xl shadow-sm text-center">
              <div className="text-2xl font-black font-mono text-[#163B66]">270+</div>
              <div className="text-[11px] font-mono font-bold text-[#64748B] uppercase mt-0.5">Defence Selections</div>
            </div>
            <div className="p-4 bg-white/80 backdrop-blur-sm border border-[#163B66]/15 rounded-2xl shadow-sm text-center">
              <div className="text-2xl font-black font-mono text-[#D97706]">100%</div>
              <div className="text-[11px] font-mono font-bold text-[#64748B] uppercase mt-0.5">Non-Profit</div>
            </div>
            <div className="p-4 bg-white/80 backdrop-blur-sm border border-[#163B66]/15 rounded-2xl shadow-sm text-center">
              <div className="text-2xl font-black font-mono text-[#10B981]">500+</div>
              <div className="text-[11px] font-mono font-bold text-[#64748B] uppercase mt-0.5">Trees Planted</div>
            </div>
            <div className="p-4 bg-white/80 backdrop-blur-sm border border-[#163B66]/15 rounded-2xl shadow-sm text-center">
              <div className="text-2xl font-black font-mono text-[#163B66]">340+</div>
              <div className="text-[11px] font-mono font-bold text-[#64748B] uppercase mt-0.5">Youth Empowered</div>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* 2. ABOUT SECTION (id="about") — Mission Yuva Shakti, Leadership & Objectives */}
      {/* ------------------------------------------------------------------------- */}
      <section id="about" className="py-20 border-b-2 border-[#163B66]/15 bg-transparent scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>

              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#163B66] font-display">
                MISSION YUVA SHAKTI & OUR VISION
              </h2>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#D97706] hover:bg-[#B45309] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl border-b-4 border-[#B45309] group mt-4 md:mt-0 shrink-0"
            >
              <span>EXPLORE FULL CSR PROJECT PROPOSAL</span>
              <span className="group-hover:translate-x-1 transition-transform font-bold text-white">→</span>
            </Link>
          </div>

          {/* Mission Yuva Shakti Banner */}
          <div className="bg-[#163B66] text-white p-8 sm:p-12 rounded-3xl shadow-xl mb-12 border-b-8 border-[#D97706] relative overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#D97706]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#0D223A]/80 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#205493]/70">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D97706]/20 border border-[#D97706]/50 text-[#FF9933] font-mono text-[11px] font-bold tracking-widest uppercase mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#FF9933] animate-pulse" />
                  <span>FLAGSHIP PROGRAMME 2026–27</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black uppercase font-display text-white tracking-tight leading-tight">
                  "हर युवा को हुनर, हर हाथ को अवसर"
                </h3>
                <p className="text-gray-200 text-xs sm:text-sm font-sans mt-2 max-w-2xl leading-relaxed font-normal">
                  Building a structured ecosystem for 300 direct beneficiaries and 1,000+ rural family members in Betul & surrounding rural regions of Madhya Pradesh.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 shrink-0 font-mono text-center w-full sm:w-auto">
                <div className="bg-[#0D223A]/90 p-4 rounded-2xl border border-[#205493] shadow-md min-w-[130px]">
                  <div className="text-2xl font-black text-[#FF9933]">300</div>
                  <div className="text-[11px] text-gray-300 uppercase tracking-wider mt-0.5">Direct Beneficiaries</div>
                </div>
                <div className="bg-[#0D223A]/90 p-4 rounded-2xl border border-[#205493] shadow-md min-w-[130px]">
                  <div className="text-2xl font-black text-[#10B981]">1,000+</div>
                  <div className="text-[11px] text-gray-300 uppercase tracking-wider mt-0.5">Indirect Families</div>
                </div>
              </div>
            </div>

            {/* Three Guiding Pillars Showcase */}
            <div className="relative z-10 mt-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF9933]" />
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#FF9933] uppercase tracking-wider">
                    THREE GUIDING PILLARS
                  </span>
                </div>
                <span className="font-mono text-[11px] text-gray-300 uppercase tracking-wider">
                  Core Foundations of Youth Transformation
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Pillar 01 */}
                <div className="group relative bg-[#0D223A]/90 hover:bg-[#0B1E33] border border-[#205493]/70 hover:border-[#FF9933]/70 p-6 rounded-2xl shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[11px] font-bold tracking-wider text-[#FF9933] bg-[#071729] px-3 py-1 rounded-lg border border-[#205493]/80">
                        PILLAR 01
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-[#FF9933]/15 border border-[#FF9933]/30 flex items-center justify-center text-[#FF9933] group-hover:scale-110 transition-transform">
                        <Briefcase className="w-4 h-4" />
                      </div>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold font-sans text-white leading-tight">
                      हुनर से रोजगार
                    </h4>
                    <div className="text-xs font-mono font-bold text-[#FF9933] uppercase tracking-wider mt-1">
                      Skill to Employment
                    </div>
                    <p className="text-xs sm:text-[13px] text-gray-300 font-sans leading-relaxed mt-3 font-normal">
                      Vocational tailoring, IT computer literacy, digital skills, and trade certifications mapped directly to career opportunities.
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
                    <span className="uppercase">Core Focus</span>
                    <span className="text-[#FF9933] font-bold">Vocational &amp; Digital</span>
                  </div>
                </div>

                {/* Pillar 02 */}
                <div className="group relative bg-[#0D223A]/90 hover:bg-[#0B1E33] border border-[#205493]/70 hover:border-[#38BDF8]/70 p-6 rounded-2xl shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[11px] font-bold tracking-wider text-[#38BDF8] bg-[#071729] px-3 py-1 rounded-lg border border-[#205493]/80">
                        PILLAR 02
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] group-hover:scale-110 transition-transform">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold font-sans text-white leading-tight">
                      अनुशासन से नेतृत्व
                    </h4>
                    <div className="text-xs font-mono font-bold text-[#38BDF8] uppercase tracking-wider mt-1">
                      Discipline to Leadership
                    </div>
                    <p className="text-xs sm:text-[13px] text-gray-300 font-sans leading-relaxed mt-3 font-normal">
                      Indian Army standard physical endurance regimens, 1.6 km speed runs, and mental character drills that instill officer values.
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
                    <span className="uppercase">Core Focus</span>
                    <span className="text-[#38BDF8] font-bold">Physical &amp; Defence Prep</span>
                  </div>
                </div>

                {/* Pillar 03 */}
                <div className="group relative bg-[#0D223A]/90 hover:bg-[#0B1E33] border border-[#205493]/70 hover:border-[#34D399]/70 p-6 rounded-2xl shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[11px] font-bold tracking-wider text-[#34D399] bg-[#071729] px-3 py-1 rounded-lg border border-[#205493]/80">
                        PILLAR 03
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-[#34D399]/15 border border-[#34D399]/30 flex items-center justify-center text-[#34D399] group-hover:scale-110 transition-transform">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold font-sans text-white leading-tight">
                      अवसर से आत्मनिर्भरता
                    </h4>
                    <div className="text-xs font-mono font-bold text-[#34D399] uppercase tracking-wider mt-1">
                      Opportunity to Self-Reliance
                    </div>
                    <p className="text-xs sm:text-[13px] text-gray-300 font-sans leading-relaxed mt-3 font-normal">
                      Empowering rural youth and women with athletic tournament opportunities, financial independence, and social dignity.
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
                    <span className="uppercase">Core Focus</span>
                    <span className="text-[#34D399] font-bold">Women &amp; Rural Growth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* President's Message */}
          {president && (
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl mb-12 border-l-8 border-[#D97706] border border-[#163B66]/15">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D97706]/10 border border-[#D97706]/30 text-[#D97706] font-mono text-[11px] font-bold tracking-widest uppercase mb-4 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                  <span>FOUNDER &amp; PRESIDENT&apos;S MESSAGE</span>
                </div>
                <p className="text-base sm:text-lg italic font-sans leading-relaxed text-[#334155] max-w-4xl">
                  "We started this foundation with one belief — that discipline, physical fitness, and skill self-reliance can transform a family's economic future in a single generation. Every batch we run, every cadet we mentor, is a step toward a stronger nation."
                </p>
                <div className="mt-4 font-mono text-sm font-bold text-[#163B66]">
                  {president.name} — <span className="text-[#D97706] uppercase">{president.role}</span>
                </div>
              </div>
            </div>
          )}

          {/* Management Team Grid */}
          <div className="space-y-6 mb-16">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#163B66]/10 border border-[#163B66]/20 text-[#163B66] font-mono text-xs font-bold tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#163B66]" />
              <span>FOUNDATION LEADERSHIP &amp; MANAGEMENT</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 max-w-5xl">
              {data.management.map((m) => (
                <div key={m.id} className="bg-white rounded-3xl border border-[#163B66]/15 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col">
                  {m.image ? (
                    <div className="relative h-72 sm:h-80 w-full bg-[#0D223A] overflow-hidden">
                      <Image
                        src={m.image}
                        alt={m.name}
                        fill
                        className="object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="h-48 w-full bg-gradient-to-br from-[#163B66] to-[#0D223A] flex items-center justify-center text-white/40 font-mono text-sm">
                      [ Photo Reserved ]
                    </div>
                  )}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold font-sans text-[#163B66] mb-1">{m.name}</h3>
                      <div className="text-xs font-mono text-[#D97706] font-bold mb-3 uppercase tracking-wider">{m.role}</div>
                      <p className="text-xs sm:text-sm font-sans text-[#475569] leading-relaxed font-medium">{m.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Objectives */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B1E33] via-[#0D223A] to-[#071322] border-2 border-[#163B66]/60 p-8 sm:p-12 shadow-2xl">
            {/* Ambient glows inside */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D97706]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#163B66]/40 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-[#163B66]">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF9933]/15 border border-[#FF9933]/30 text-[#FF9933] font-mono text-[11px] font-bold tracking-widest uppercase mb-3 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#FF9933] animate-pulse" />
                  <span>Strategic Roadmap &amp; Mission</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-display tracking-tight">
                  Core Objectives &amp; Foundation Values
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#94A3B8] font-sans max-w-md font-medium leading-relaxed">
                Empowering rural youth through discipline, physical agility, women self-reliance, and transparent social governance.
              </p>
            </div>

            {/* 6 Objective Cards Grid */}
            <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.objectives.map((obj, i) => {
                const parts = obj.split(":");
                const title = parts[0]?.trim();
                const desc = parts.slice(1).join(":").trim() || obj;

                return (
                  <div
                    key={i}
                    className="group relative bg-[#0F2847]/70 hover:bg-[#163B66] border border-[#205493]/40 hover:border-[#FF9933]/60 p-6 rounded-2xl shadow-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                  >
                    <div>
                      {/* Top Bar with Pillar Tag */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-bold tracking-wider text-[#FF9933] bg-[#0D223A] px-3 py-1 rounded-lg border border-[#205493]/50">
                          PILLAR 0{i + 1}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-[#D97706]/70 group-hover:scale-125 group-hover:bg-[#FF9933] transition-all" />
                      </div>

                      {/* Title */}
                      <h4 className="text-white font-bold font-sans text-base leading-snug mb-2 group-hover:text-[#FF9933] transition-colors">
                        {title}
                      </h4>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-[#94A3B8] font-sans leading-relaxed font-normal">
                        {desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-[#D97706] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Explore Pillar</span>
                      <span>→</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* 3. BRANCHES & WINGS OVERVIEW (id="wings") */}
      {/* ------------------------------------------------------------------------- */}
      <section id="wings" className="py-20 border-b-2 border-[#163B66]/15 bg-[#F4F6F9] scroll-mt-24">
        <span id="branches" className="sr-only" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>

              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#163B66] font-display">
                BRANCHES OF THE FOUNDATION
              </h2>
            </div>
            <p className="text-sm font-mono text-[#64748B] max-w-md mt-3 md:mt-0 leading-relaxed uppercase font-semibold">
              Three specialized departments providing physical, vocational, and athletic training to youth across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1: Army Training (Saffron / Orange - Top Flag Color) */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-[#D97706] flex flex-col justify-between group border-x border-b border-gray-200 card-hover-saffron shimmer-card">
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#64748B] mb-4">
                  <span>WING 01</span>
                  <span className="px-3 py-1 bg-[#D97706] text-white text-[10px] uppercase font-bold rounded-full shadow-sm">DEFENCE</span>
                </div>
                <h3 className="text-2xl font-extrabold uppercase mb-3 tracking-wide text-[#163B66] font-display group-hover:text-[#D97706] transition-colors">
                  ARMY TRAINING
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed mb-6 font-sans font-medium">
                  Rigorous physical endurance sessions, 1.6 km speed runs, mock written examinations, and SSB interview guidance for Indian Armed Forces aspirants.
                </p>
              </div>

              <div>
                <div className="bg-[#F8FAFC] p-4 text-xs font-mono mb-5 rounded-2xl border border-gray-200">
                  <div className="text-[#D97706] font-bold">KEY FOCUS:</div>
                  <div className="text-[#0F172A] font-bold">Physical Standards & Written Tests</div>
                </div>
                <ScrollButton
                  targetId="army-training"
                  className="w-full py-3.5 bg-[#D97706] hover:bg-[#B45309] text-white text-center font-mono text-xs font-bold uppercase tracking-wider transition-all rounded-xl shadow-md border-b-4 border-[#B45309]"
                >
                  VIEW WING DETAILS ↓
                </ScrollButton>
              </div>
            </div>

            {/* Card 2: Women Empowerment (Navy Blue / White - Middle Flag Color) */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-[#163B66] flex flex-col justify-between group border-x border-b border-gray-200 card-hover-navy shimmer-card">
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#64748B] mb-4">
                  <span>WING 02</span>
                  <span className="px-3 py-1 bg-[#163B66] text-[#FF9933] text-[10px] uppercase font-bold rounded-full shadow-sm">VOCATIONAL</span>
                </div>
                <h3 className="text-2xl font-extrabold uppercase mb-3 tracking-wide text-[#163B66] font-display group-hover:text-[#163B66] transition-colors">
                  WOMEN EMPOWERMENT
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed mb-6 font-sans font-medium">
                  Market-ready skill development batches in tailoring, stitching, beautician training, and food processing to enable financial independence.
                </p>
              </div>

              <div>
                <div className="bg-[#F8FAFC] p-4 text-xs font-mono mb-5 rounded-2xl border border-gray-200">
                  <div className="text-[#163B66] font-bold">KEY FOCUS:</div>
                  <div className="text-[#0F172A] font-bold">Self-Reliance & Skill Certificates</div>
                </div>
                <ScrollButton
                  targetId="women-empowerment"
                  className="w-full py-3.5 bg-[#163B66] hover:bg-[#0D223A] text-white text-center font-mono text-xs font-bold uppercase tracking-wider transition-all rounded-xl shadow-md border-b-4 border-[#0D223A]"
                >
                  VIEW WING DETAILS ↓
                </ScrollButton>
              </div>
            </div>

            {/* Card 3: Sports & Employment (India Green - Bottom Flag Color) */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-[#10B981] flex flex-col justify-between group border-x border-b border-gray-200 card-hover-green shimmer-card">
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#64748B] mb-4">
                  <span>WING 03</span>
                  <span className="px-3 py-1 bg-[#10B981] text-white text-[10px] uppercase font-bold rounded-full shadow-sm">ATHLETICS</span>
                </div>
                <h3 className="text-2xl font-extrabold uppercase mb-3 tracking-wide text-[#163B66] font-display group-hover:text-[#10B981] transition-colors">
                  SPORTS & EMPLOYMENT
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed mb-6 font-sans font-medium">
                  District tournaments, athletics coaching, Kabaddi championships, and job placement drives in security, logistics, and administration sectors.
                </p>
              </div>

              <div>
                <div className="bg-[#F8FAFC] p-4 text-xs font-mono mb-5 rounded-2xl border border-gray-200">
                  <div className="text-[#10B981] font-bold">KEY FOCUS:</div>
                  <div className="text-[#0F172A] font-bold">Tournaments & Direct Job Placement</div>
                </div>
                <ScrollButton
                  targetId="sports-fitness"
                  className="w-full py-3.5 bg-[#10B981] hover:bg-[#047857] text-white text-center font-mono text-xs font-bold uppercase tracking-wider transition-all rounded-xl shadow-md border-b-4 border-[#047857]"
                >
                  VIEW WING DETAILS ↓
                </ScrollButton>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* 4. DETAILED WING 01: ARMY TRAINING (id="army-training") */}
      {/* ------------------------------------------------------------------------- */}
      <section id="army-training" className="py-20 bg-transparent border-b-2 border-[#163B66]/15 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">


          <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#163B66] mb-4 font-display">
            ARMY TRAINING WING
          </h2>
          <p className="text-sm font-mono text-[#64748B] max-w-2xl uppercase leading-relaxed mb-10 font-semibold">
            Physical training, mock written exams and interview preparation for candidates aiming for Indian Army, Navy, Air Force and paramilitary recruitment.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Physical Training (PT)", body: "Daily morning drills — running, push-ups, sit-ups and obstacle practice — built around official recruitment standards." },
              { title: "Written Exam Coaching", body: "General knowledge, reasoning and mathematics classes aligned to Army/Navy/Air Force entrance papers." },
              { title: "Interview & SSB Prep", body: "Mock interviews, group discussions and personality development sessions led by retired defence personnel." },
            ].map((c) => (
              <div key={c.title} className="border-l-8 border-[#D97706] p-6 bg-white/90 backdrop-blur-sm rounded-3xl shadow-md border-y border-r border-gray-200">
                <h3 className="text-xl font-bold uppercase font-display text-[#163B66] mb-2">{c.title}</h3>
                <p className="text-xs font-sans text-[#475569] leading-relaxed font-medium">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#D97706] text-white p-8 rounded-3xl shadow-2xl grid sm:grid-cols-3 gap-6 text-center border-t-8 border-[#163B66]">
            <div>
              <div className="text-4xl font-mono font-extrabold text-white">
                <StatCounter end={340} suffix="+" />
              </div>
              <p className="text-xs font-mono text-white/90 mt-1 uppercase font-bold">YOUTH TRAINED</p>
            </div>
            <div>
              <div className="text-4xl font-mono font-extrabold text-[#163B66]">
                <StatCounter end={58} />
              </div>
              <p className="text-xs font-mono text-white/90 mt-1 uppercase font-bold">RECRUITED SO FAR</p>
            </div>
            <div>
              <div className="text-4xl font-mono font-extrabold text-white">12 WEEKS</div>
              <p className="text-xs font-mono text-white/90 mt-1 uppercase font-bold">PER TRAINING BATCH</p>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* 5. DETAILED WING 02: WOMEN EMPOWERMENT (id="women-empowerment") */}
      {/* ------------------------------------------------------------------------- */}
      <section id="women-empowerment" className="py-20 bg-transparent border-b-2 border-[#163B66]/15 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">


          <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#163B66] mb-4 font-display">
            WOMEN EMPOWERMENT WING
          </h2>
          <p className="text-sm font-mono text-[#64748B] max-w-2xl uppercase leading-relaxed mb-10 font-semibold">
            Vocational training batches in tailoring, beautician courses and handicrafts aimed at financial independence and self-reliance for local women.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Tailoring & Stitching", body: "Practical training in cutting, pattern making and machine operation for everyday garments." },
              { title: "Beautician Course", body: "Skilling in skin care, hair styling, bridal makeup and salon management for self-employment." },
              { title: "Self-Defence & Health", body: "Basic martial-arts self-defence sessions paired with personal hygiene and health awareness." },
            ].map((c) => (
              <div key={c.title} className="border-l-8 border-[#163B66] p-6 bg-white/90 backdrop-blur-sm rounded-3xl shadow-md border-y border-r border-gray-200">
                <h3 className="text-xl font-bold uppercase font-display text-[#163B66] mb-2">{c.title}</h3>
                <p className="text-xs font-sans text-[#475569] leading-relaxed font-medium">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#163B66] text-white p-8 rounded-3xl shadow-2xl grid sm:grid-cols-3 gap-6 text-center border-t-8 border-[#D97706] border border-[#205493]">
            <div>
              <div className="text-4xl font-mono font-extrabold text-[#FF9933]">
                <StatCounter end={220} suffix="+" />
              </div>
              <p className="text-xs font-mono text-gray-200 mt-1 uppercase font-bold">WOMEN SKILLED</p>
            </div>
            <div>
              <div className="text-4xl font-mono font-extrabold text-white">
                <StatCounter end={45} suffix="+" />
              </div>
              <p className="text-xs font-mono text-gray-200 mt-1 uppercase font-bold">MICRO-ENTERPRISES STARTED</p>
            </div>
            <div>
              <div className="text-4xl font-mono font-extrabold text-[#FF9933]">8 WEEKS</div>
              <p className="text-xs font-mono text-gray-200 mt-1 uppercase font-bold">COURSE DURATION</p>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* 6. DETAILED WING 03: SPORTS & FITNESS (id="sports-fitness") */}
      {/* ------------------------------------------------------------------------- */}
      <section id="sports-fitness" className="py-20 bg-transparent border-b-2 border-[#163B66]/15 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">


          <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#163B66] mb-4 font-display">
            SPORTS & FITNESS WING
          </h2>
          <p className="text-sm font-mono text-[#64748B] max-w-2xl uppercase leading-relaxed mb-10 font-semibold">
            Athletic coaching, district-level recruitment trials, marathon preparation, and community fitness drives for youth.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Athletic Coaching", body: "100m/400m sprint training, long jump and high jump techniques led by certified physical trainers." },
              { title: "District Trial Events", body: "Organizing competitive trial runs and physical assessment camps for state and district sports trials." },
              { title: "Community Fitness", body: "Open morning workout sessions and marathon fitness drives encouraging a healthy lifestyle." },
            ].map((c) => (
              <div key={c.title} className="border-l-8 border-[#10B981] p-6 bg-white/90 backdrop-blur-sm rounded-3xl shadow-md border-y border-r border-gray-200">
                <h3 className="text-xl font-bold uppercase font-display text-[#163B66] mb-2">{c.title}</h3>
                <p className="text-xs font-sans text-[#475569] leading-relaxed font-medium">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#071526] text-white p-8 rounded-3xl shadow-2xl grid sm:grid-cols-3 gap-6 text-center border-t-8 border-[#10B981] border border-[#205493]">
            <div>
              <div className="text-4xl font-mono font-extrabold text-[#10B981]">
                <StatCounter end={500} suffix="+" />
              </div>
              <p className="text-xs font-mono text-gray-200 mt-1 uppercase font-bold">ATHLETES COACHED</p>
            </div>
            <div>
              <div className="text-4xl font-mono font-extrabold text-white">
                <StatCounter end={18} />
              </div>
              <p className="text-xs font-mono text-gray-200 mt-1 uppercase font-bold">DISTRICT MEDALS WON</p>
            </div>
            <div>
              <div className="text-4xl font-mono font-extrabold text-[#10B981]">YEAR-ROUND</div>
              <p className="text-xs font-mono text-gray-200 mt-1 uppercase font-bold">ACTIVE COACHING</p>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* 7. PHOTO GALLERY SECTION (id="gallery") */}
      {/* ------------------------------------------------------------------------- */}
      <GallerySection />


      {/* ------------------------------------------------------------------------- */}
      {/* 9. ACTIVITIES & FIELD INITIATIVES (id="activities") */}
      {/* ------------------------------------------------------------------------- */}
      <section id="activities" className="py-20 bg-transparent border-b-2 border-[#163B66]/15 scroll-mt-24">
        {/* Backward compatibility anchor */}
        <span id="notices" className="sr-only" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <div className="mb-10 text-center sm:text-left">
            <span className="inline-block px-3.5 py-1 bg-white/90 backdrop-blur-sm text-[#163B66] font-mono text-[11px] font-black uppercase tracking-wider rounded-full mb-3 border border-[#163B66]/15 shadow-xs">
              Foundation In Action
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#163B66] font-display tracking-tight drop-shadow-sm">
              ACTIVITIES
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#FF9933] to-[#138808] rounded-full mt-3 sm:mx-0 mx-auto"></div>
            <p className="text-xs sm:text-sm font-sans text-[#475569] mt-3 max-w-2xl font-medium leading-relaxed sm:mx-0 mx-auto">
              Field programs, free physical training drives, daily nutrition distribution, women vocational camps, and community welfare initiatives led by Mera Watan Welfare Foundation Betul.
            </p>
          </div>

          {/* Rich Activities Showcase with Featured Poster and Action Photography */}
          <ActivitiesShowcase />

        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* 10. DONORS ROLL SECTION (id="donors") */}
      {/* ------------------------------------------------------------------------- */}
      <section id="donors" className="py-20 bg-transparent border-b-2 border-[#163B66]/15 scroll-mt-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">

          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-white/90 backdrop-blur-sm text-[#163B66] font-mono text-[11px] font-black uppercase tracking-wider rounded-full mb-3 border border-[#163B66]/15 shadow-xs">
              Honour Roll & Acknowledgements
            </span>
            <h2 className="text-3xl sm:text-6xl font-black uppercase tracking-tight text-[#163B66] font-display drop-shadow-sm">
              THANK YOU TO OUR DONORS
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] mx-auto rounded-full mt-3 mb-3 shadow-xs"></div>
            <p className="text-xs sm:text-sm font-mono text-[#163B66]/90 max-w-xl mx-auto uppercase font-bold tracking-wide">
              Every contribution supports training kits, physical equipment, and skill certifications.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden border border-[#163B66]/15 shadow-xl mb-8">
            <div className="overflow-x-auto w-full scrollbar-thin">
              <table className="w-full text-xs font-mono min-w-[320px] sm:min-w-full">
                <thead className="bg-[#163B66] text-white">
                  <tr>
                    <th className="text-left px-3.5 sm:px-6 py-3.5 sm:py-4 uppercase font-bold tracking-wider text-[11px] sm:text-xs">DONOR NAME</th>
                    <th className="text-left px-3 sm:px-6 py-3.5 sm:py-4 uppercase font-bold tracking-wider text-[11px] sm:text-xs">CONTRIBUTION</th>
                    <th className="text-left px-3 sm:px-6 py-3.5 sm:py-4 uppercase font-bold tracking-wider text-[11px] sm:text-xs">FREQUENCY</th>
                    <th className="hidden sm:table-cell text-left px-6 py-4 uppercase font-bold tracking-wider text-xs">DATE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {sortedDonors.map((d, i) => (
                    <tr key={d.id} className={i % 2 ? "bg-[#F8FAFC]/80" : "bg-white/90"}>
                      <td className="px-3.5 sm:px-6 py-3 sm:py-4 font-bold text-[#163B66]">
                        <div className="leading-tight">{d.name}</div>
                        <div className="sm:hidden text-[10px] text-[#64748B] font-normal mt-0.5">{d.date}</div>
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-[#D97706] font-bold whitespace-nowrap">
                        ₹{d.amount.toLocaleString("en-IN")}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                        <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-[#10B981]/15 text-[#059669] border border-[#10B981]/30 inline-block">
                          {d.frequency || "Monthly"}
                        </span>
                      </td>
                      <td className="hidden sm:table-cell px-6 py-4 text-[#64748B] whitespace-nowrap">{d.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center">
            <Link href="/donate" className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#D97706] text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#B45309] transition-all rounded-xl inline-block shadow-lg border-b-4 border-[#B45309]">
              BECOME A DONOR &amp; SUPPORT OUR MISSION →
            </Link>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* 11. CONTACT & HEADQUARTERS SECTION (id="contact") */}
      {/* ------------------------------------------------------------------------- */}
      <section id="contact" className="py-20 bg-transparent scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <div className="mb-12">

            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#163B66] font-display">
              GET IN TOUCH & LOCATION
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Interactive Contact Form (Client Component) */}
            <ContactSection />

            {/* Headquarters & Map */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-[#0D223A] text-white p-8 rounded-3xl shadow-xl border-l-8 border-[#D97706] border border-[#205493]">
                <h3 className="text-lg font-bold uppercase font-mono mb-4 text-[#FF9933]">HEADQUARTERS CONTACT</h3>
                <ul className="space-y-3 font-mono text-xs text-gray-200">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#FF9933] shrink-0" />
                    <span>BETUL, MADHYA PRADESH, INDIA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#FF9933] shrink-0" />
                    <span>+91 97976 33077 (CALL / WHATSAPP)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#FF9933] shrink-0" />
                    <span>RAGHUWANSHIASHOK34@GMAIL.COM</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#FF9933] shrink-0" />
                    <span>05:30 AM - 07:00 PM IST</span>
                  </li>
                </ul>
              </div>

              {/* Map Embed */}
              <div className="aspect-video w-full rounded-3xl overflow-hidden border-2 border-[#163B66]/20 shadow-xl">
                <iframe
                  title="Foundation location map"
                  className="w-full h-full"
                  loading="lazy"
                  src="https://www.google.com/maps?q=Betul,Madhya+Pradesh&output=embed"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
