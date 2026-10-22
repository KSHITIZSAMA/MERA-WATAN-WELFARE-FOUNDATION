import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { db } from "@/lib/db";
import { Briefcase, ShieldCheck, TrendingUp, MapPin, Users, Award, Laptop, FileText } from "lucide-react";

export default function AboutPage() {
  const data = db.read();
  const president = data.management.find((m) => m.role.toLowerCase().includes("president"));

  return (
    <div className="bg-[#F4F6F9] min-h-screen text-[#0F172A]">
      {/* Hero Header */}
      <PageHero
        eyebrow="ABOUT MERA WATAN WELFARE FOUNDATION BETUL"
        title="Who We Are & Mission Yuva Shakti"
        subtitle="Empowering rural and economically weaker youth across Betul and Madhya Pradesh through integrated Defence Career Preparation, Women Empowerment, Digital Skill Development, and Sports Leadership."
      />

      {/* 1. Core Vision & Tagline Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="bg-[#163B66] text-white p-8 sm:p-12 rounded-3xl shadow-2xl border-b-8 border-[#D97706] relative overflow-hidden">
          {/* Subtle background ambient glows */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#D97706]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#0D223A]/80 rounded-full blur-3xl pointer-events-none" />

          {/* Top row: Flagship title & Key impact counters */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#205493]/70">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D97706]/20 border border-[#D97706]/50 text-[#FF9933] font-mono text-[11px] font-bold tracking-widest uppercase mb-3 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#FF9933] animate-pulse" />
                <span>FLAGSHIP INITIATIVE: MISSION YUVA SHAKTI (2026–27)</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black font-display uppercase text-white tracking-tight leading-tight">
                "हर युवा को हुनर, हर हाथ को अवसर"
              </h2>
              <p className="text-gray-200 text-sm sm:text-base font-sans mt-2 max-w-3xl leading-relaxed font-normal">
                Building a structured ecosystem for 300 direct beneficiaries and 1,000+ rural family members in Betul & surrounding rural regions of Madhya Pradesh.
              </p>
            </div>

            {/* Impact metric pills */}
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

          {/* Bottom row: The Three Guiding Pillars Showcase */}
          <div className="relative z-10 mt-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF9933]" />
                <span className="font-mono text-xs sm:text-sm font-bold text-[#FF9933] uppercase tracking-wider">
                  THREE GUIDING PILLARS OF MISSION YUVA SHAKTI
                </span>
              </div>
              <span className="font-mono text-[11px] text-gray-300 uppercase tracking-wider">
                Strategic Framework &amp; Youth Transformation
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
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-white leading-tight">
                    हुनर से रोजगार
                  </h3>
                  <div className="text-xs font-mono font-bold text-[#FF9933] uppercase tracking-wider mt-1">
                    Skill to Employment
                  </div>
                  <p className="text-xs sm:text-[13px] text-gray-300 font-sans leading-relaxed mt-3 font-normal">
                    Free employment-oriented vocational training in tailoring, beautician crafts, IT fundamentals, Tally/GST, and digital skills linked to sustainable local job placements.
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
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-white leading-tight">
                    अनुशासन से नेतृत्व
                  </h3>
                  <div className="text-xs font-mono font-bold text-[#38BDF8] uppercase tracking-wider mt-1">
                    Discipline to Leadership
                  </div>
                  <p className="text-xs sm:text-[13px] text-gray-300 font-sans leading-relaxed mt-3 font-normal">
                    Army-standard physical endurance training, timed 1.6 km runs, beam drills, obstacle courses, and officer leadership ethics guided by Indian Army veterans.
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
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-white leading-tight">
                    अवसर से आत्मनिर्भरता
                  </h3>
                  <div className="text-xs font-mono font-bold text-[#34D399] uppercase tracking-wider mt-1">
                    Opportunity to Self-Reliance
                  </div>
                  <p className="text-xs sm:text-[13px] text-gray-300 font-sans leading-relaxed mt-3 font-normal">
                    Enabling rural women and cadets to break intergenerational poverty through micro-enterprises, district athletic championships, self-confidence, and dignity.
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
      </section>

      {/* 2. President's Message */}
      {president && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#163B66]/15 shadow-xl border-l-8 border-[#D97706]">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D97706]/10 border border-[#D97706]/30 text-[#D97706] font-mono text-[11px] font-bold tracking-widest uppercase mb-4 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                <span>FOUNDER &amp; PRESIDENT&apos;S ADDRESS</span>
              </div>
              <p className="text-base sm:text-lg italic font-sans leading-relaxed text-[#334155] max-w-3xl">
                "Mera Watan Welfare Foundation Betul was established with a singular conviction — that discipline, physical fitness, and career-oriented skills can transform a family's economic future in a single generation. Our flagship project, Mission Yuva Shakti, is designed not just for examination coaching, but to make youth career-ready, skill-ready, and employment-ready."
              </p>
              <div className="mt-4 font-mono text-sm font-bold text-[#163B66]">
                {president.name} — <span className="text-[#D97706] uppercase">{president.role}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Project at a Glance & Target Beneficiaries */}
      <section className="bg-white py-16 border-y border-[#163B66]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">

            <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#163B66] font-display">
              Target Beneficiaries & Program Distribution
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#64748B] mt-2">
              Comprehensive 12-Month Integrated Youth Development Program in Betul, Madhya Pradesh.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-[#F8FAFC] p-6 rounded-3xl border border-[#163B66]/15 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-black font-mono text-[#163B66] mb-1">120</div>
              <div className="text-xs font-mono font-bold text-[#D97706] uppercase mb-2">Defence & Uniformed Services</div>
              <p className="text-xs text-[#64748B]">Army, Police, Agniveer & Paramilitary physical & written preparation.</p>
            </div>

            <div className="bg-[#F8FAFC] p-6 rounded-3xl border border-[#163B66]/15 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-black font-mono text-[#D97706] mb-1">75</div>
              <div className="text-xs font-mono font-bold text-[#163B66] uppercase mb-2">Women Empowerment</div>
              <p className="text-xs text-[#64748B]">Digital literacy, spoken English, MS Office & financial self-reliance.</p>
            </div>

            <div className="bg-[#F8FAFC] p-6 rounded-3xl border border-[#163B66]/15 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-black font-mono text-[#10B981] mb-1">75</div>
              <div className="text-xs font-mono font-bold text-[#163B66] uppercase mb-2">Youth Skill & Employability</div>
              <p className="text-xs text-[#64748B]">Data entry, Tally/GST, graphic design & apprenticeship linkages.</p>
            </div>

            <div className="bg-[#F8FAFC] p-6 rounded-3xl border border-[#163B66]/15 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-black font-mono text-[#163B66] mb-1">30+</div>
              <div className="text-xs font-mono font-bold text-[#D97706] uppercase mb-2">Sports & Leadership</div>
              <p className="text-xs text-[#64748B]">Athletics, Fauji Cup BPL tournaments & physical stamina camps.</p>
            </div>
          </div>

          <div className="p-6 bg-[#0D223A] text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 border border-[#205493]">
            <div className="font-mono text-xs space-y-1">
              <div className="text-[#FF9933] font-bold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>LOCATION COVERAGE</span>
              </div>
              <div>Betul & surrounding rural Panchayats, Madhya Pradesh</div>
            </div>
            <div className="font-mono text-xs space-y-1 text-right">
              <div className="text-[#FF9933] font-bold flex items-center justify-end gap-1.5">
                <Users className="w-3.5 h-3.5" />
                <span>INDIRECT BENEFICIARIES</span>
              </div>
              <div>1,000+ Rural Family & Community Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Four Core Programme Components */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 bg-[#D97706]/15 border border-[#D97706]/40 text-[#B45309] font-mono text-xs font-bold tracking-widest uppercase rounded-lg mb-3">
            FOUR INTEGRATED PROGRAMMES
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#163B66] font-display">
            Our Key Operational Wings
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pillar 1 */}
          <div className="bg-white p-8 rounded-3xl border border-[#163B66]/15 shadow-xl border-t-8 border-[#163B66] space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-[#163B66] text-[#FF9933] font-mono text-xs font-bold rounded-lg uppercase">
                PROGRAMME 01
              </span>
              <span className="font-mono text-xs font-bold text-[#64748B]">120 CADETS</span>
            </div>
            <h3 className="text-2xl font-bold font-display uppercase text-[#163B66]">
              Defence &amp; Uniformed Services Prep
            </h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Structured preparation for Army, Agniveer, MP Police, SSC GD &amp; Paramilitary service examinations.
            </p>
            <ul className="text-xs font-mono text-[#334155] space-y-2 border-t pt-3 border-gray-100">
              <li>• <strong>Academic Coaching:</strong> Mathematics, Reasoning, GK, Science, Current Affairs &amp; Mock Tests.</li>
              <li>• <strong>Physical Fitness:</strong> 1.6km Speed Endurance Run, Strength, Agility &amp; Obstacle Drills.</li>
              <li>• <strong>Career Counselling:</strong> Recruitment documentation, eligibility checks &amp; personality building.</li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-8 rounded-3xl border border-[#163B66]/15 shadow-xl border-t-8 border-[#D97706] space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-[#D97706] text-white font-mono text-xs font-bold rounded-lg uppercase">
                PROGRAMME 02
              </span>
              <span className="font-mono text-xs font-bold text-[#64748B]">75 WOMEN</span>
            </div>
            <h3 className="text-2xl font-bold font-display uppercase text-[#163B66]">
              Women Empowerment &amp; Self-Reliance
            </h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Creating a supportive and secure environment for women to achieve economic participation and career confidence.
            </p>
            <ul className="text-xs font-mono text-[#334155] space-y-2 border-t pt-3 border-gray-100">
              <li>• <strong>Digital Literacy:</strong> Computer Fundamentals, MS Office, Social Media &amp; Spoken English.</li>
              <li>• <strong>Financial Literacy:</strong> Banking basics, digital payments &amp; entrepreneurship orientation.</li>
              <li>• <strong>Self-Defense &amp; Fitness:</strong> Physical confidence, leadership camps &amp; career guidance.</li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-8 rounded-3xl border border-[#163B66]/15 shadow-xl border-t-8 border-[#10B981] space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-[#10B981] text-white font-mono text-xs font-bold rounded-lg uppercase">
                PROGRAMME 03
              </span>
              <span className="font-mono text-xs font-bold text-[#64748B]">75 YOUTH</span>
            </div>
            <h3 className="text-2xl font-bold font-display uppercase text-[#163B66]">
              Youth Skill Development &amp; Employability
            </h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Employment-oriented practical IT and vocational skills mapping to active job market requirements.
            </p>
            <ul className="text-xs font-mono text-[#334155] space-y-2 border-t pt-3 border-gray-100">
              <li>• <strong>Practical IT Modules:</strong> Data Entry, Tally/GST Basics, Graphic Design &amp; IT Support.</li>
              <li>• <strong>Career Readiness:</strong> Resume building, interview prep &amp; communication skills.</li>
              <li>• <strong>Apprenticeship Linkage:</strong> Connecting trained youth with local and regional employers.</li>
            </ul>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white p-8 rounded-3xl border border-[#163B66]/15 shadow-xl border-t-8 border-[#205493] space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-[#205493] text-white font-mono text-xs font-bold rounded-lg uppercase">
                PROGRAMME 04
              </span>
              <span className="font-mono text-xs font-bold text-[#64748B]">30+ ATHLETES</span>
            </div>
            <h3 className="text-2xl font-bold font-display uppercase text-[#163B66]">
              Sports, Fitness &amp; Youth Leadership
            </h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Fostering discipline, teamwork, confidence, and competitive sportsmanship among rural athletes.
            </p>
            <ul className="text-xs font-mono text-[#334155] space-y-2 border-t pt-3 border-gray-100">
              <li>• <strong>Sports Disciplines:</strong> Athletics, Football, Volleyball &amp; Fauji Cup BPL Cricket.</li>
              <li>• <strong>Conditioning Camps:</strong> Physical stamina tests, nutrition awareness &amp; team building.</li>
              <li>• <strong>Youth Competitions:</strong> Organizing tournaments and state-level selection trials.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Implementation Model & Support Infrastructure */}
      <section className="bg-[#0D223A] text-white py-16 border-t-4 border-[#D97706]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 bg-[#163B66] text-[#FF9933] font-mono text-xs font-bold tracking-widest uppercase rounded-lg mb-3">
              5-PHASE PROJECT IMPLEMENTATION MODEL
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white font-display">
              From Identification to Employment Linkage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            <div className="bg-[#163B66] p-5 rounded-2xl border border-[#205493] space-y-2">
              <div className="font-mono text-xs text-[#FF9933] font-bold">PHASE 01 // M1-M2</div>
              <div className="font-bold text-sm uppercase font-display text-white">Identification & Baseline</div>
              <p className="text-[11px] text-gray-300">Outreach, registration, baseline survey & physical aptitude test.</p>
            </div>

            <div className="bg-[#163B66] p-5 rounded-2xl border border-[#205493] space-y-2">
              <div className="font-mono text-xs text-[#FF9933] font-bold">PHASE 02 // M2-M10</div>
              <div className="font-bold text-sm uppercase font-display text-white">Integrated Training</div>
              <p className="text-[11px] text-gray-300">Academic classes, defence drills, IT skilling & physical camps.</p>
            </div>

            <div className="bg-[#163B66] p-5 rounded-2xl border border-[#205493] space-y-2">
              <div className="font-mono text-xs text-[#FF9933] font-bold">PHASE 03 // M4-M11</div>
              <div className="font-bold text-sm uppercase font-display text-white">Assessment System</div>
              <p className="text-[11px] text-gray-300">Monthly written tests, physical tracking & quarterly reviews.</p>
            </div>

            <div className="bg-[#163B66] p-5 rounded-2xl border border-[#205493] space-y-2">
              <div className="font-mono text-xs text-[#FF9933] font-bold">PHASE 04 // M6-M12</div>
              <div className="font-bold text-sm uppercase font-display text-white">Career Linkage</div>
              <p className="text-[11px] text-gray-300">Employer connect, job drives, apprenticeship & recruitment support.</p>
            </div>

            <div className="bg-[#163B66] p-5 rounded-2xl border border-[#205493] space-y-2">
              <div className="font-mono text-xs text-[#FF9933] font-bold">PHASE 05 // M12</div>
              <div className="font-bold text-sm uppercase font-display text-white">Impact Assessment</div>
              <p className="text-[11px] text-gray-300">Endline evaluation, success stories & CSR impact reporting.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-[#163B66]/80 rounded-2xl border border-[#205493] space-y-3">
              <div className="text-xs font-mono text-[#FF9933] font-bold uppercase flex items-center gap-2">
                <Laptop className="w-4 h-4 text-[#FF9933]" />
                <span>DIGITAL LEARNING &amp; RESOURCE CENTRE</span>
              </div>
              <p className="text-xs text-gray-200 leading-relaxed font-body">
                Equipped with computer systems, high-speed internet, projector learning resources, and a physical competitive examination book bank (question papers, study guides &amp; skill materials).
              </p>
            </div>

            <div className="p-6 bg-[#163B66]/80 rounded-2xl border border-[#205493] space-y-3">
              <div className="text-xs font-mono text-[#FF9933] font-bold uppercase flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#FF9933]" />
                <span>CAREER &amp; EMPLOYMENT SUPPORT CELL</span>
              </div>
              <p className="text-xs text-gray-200 leading-relaxed font-body">
                Dedicated unit conducting career counselling, job mapping, resume drafting, employer linkage, and tracking selection outcomes for every enrolled youth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Management Team Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 bg-[#163B66]/15 text-[#163B66] font-mono text-xs font-bold tracking-widest uppercase rounded-lg mb-3">
            LEADERSHIP &amp; GOVERNING BODY
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#163B66] font-display">
            Who Runs Mera Watan Welfare Foundation Betul
          </h2>
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
                  <div className="font-mono text-xs text-[#D97706] mb-1.5 font-bold">LEADERSHIP • {m.id}</div>
                  <h3 className="text-xl font-bold font-sans text-[#163B66] mb-1">{m.name}</h3>
                  <div className="text-xs font-mono text-[#D97706] font-bold mb-3 uppercase tracking-wider">{m.role}</div>
                  <p className="text-xs sm:text-sm font-sans text-[#475569] leading-relaxed font-medium">{m.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Statutory CSR Compliance Badges */}
      <section className="bg-white py-16 border-t border-[#163B66]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-block px-3 py-1 bg-[#10B981]/15 text-[#047857] font-mono text-xs font-bold tracking-widest uppercase rounded-lg mb-2">
              STATUTORY &amp; CSR COMPLIANCE CREDENTIALS
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#163B66] font-display">
              100% Compliant Implementing Agency
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-200 text-center font-mono text-xs">
              <div className="text-[#D97706] font-bold text-sm mb-1">SECTION 80G</div>
              <div className="text-[#64748B]">Tax Exemption Certificate</div>
            </div>
            <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-200 text-center font-mono text-xs">
              <div className="text-[#163B66] font-bold text-sm mb-1">SECTION 12A / 12AB</div>
              <div className="text-[#64748B]">Income Tax Registration</div>
            </div>
            <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-200 text-center font-mono text-xs">
              <div className="text-[#10B981] font-bold text-sm mb-1">MCA CSR-1</div>
              <div className="text-[#64748B]">CSR Implementing Registration</div>
            </div>
            <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-200 text-center font-mono text-xs">
              <div className="text-[#163B66] font-bold text-sm mb-1">SCHEDULE VII</div>
              <div className="text-[#64748B]">Education, Skills &amp; Sports Aligned</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/documents"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#163B66] text-white font-mono text-xs font-bold uppercase rounded-xl hover:bg-[#0D223A] transition-colors"
            >
              <FileText className="w-4 h-4 text-[#FF9933]" />
              <span>VIEW ALL NGO COMPLIANCE DOCUMENTS &amp; CERTIFICATES</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

