import Link from "next/link";

export const metadata = {
  title: "NGO Official Documents & Registration | Mera Watan Welfare Foundation Betul",
  description: "View official registration certificates, 80G tax exemption, 12A registration, NITI Aayog Darpan ID, and audited financial statements of Mera Watan Welfare Foundation Betul.",
};

const DOCUMENTS = [
  {
    id: "doc-80g",
    title: "Section 80G Tax Exemption Certificate",
    category: "TAX & COMPLIANCE",
    categoryKey: "tax",
    regNo: "AAATR8841DF20241",
    authority: "Income Tax Department, Govt. of India",
    date: "April 12, 2024",
    status: "Active & Valid",
    description: "Donations to Mera Watan Welfare Foundation are 50% tax exempt under Section 80G of the Income Tax Act, 1961.",
    size: "1.8 MB • PDF",
    fileUrl: "#",
    icon: "📜",
  },
  {
    id: "doc-12a",
    title: "Section 12A Charitable Trust Registration",
    category: "TAX & COMPLIANCE",
    categoryKey: "tax",
    regNo: "AAATR8841DE20240",
    authority: "Income Tax Department, Govt. of India",
    date: "March 28, 2024",
    status: "Active & Valid",
    description: "Official registration granting status as a non-profit charitable trust dedicated to youth defence training and sports development.",
    size: "2.1 MB • PDF",
    fileUrl: "#",
    icon: "🏛️",
  },
  {
    id: "doc-society",
    title: "Society Registration Certificate",
    category: "GOVT REGISTRATIONS",
    categoryKey: "govt",
    regNo: "REG/RJ/DEF/2024/0984",
    authority: "Registrar of Societies & Sports Academies",
    date: "January 15, 2024",
    status: "Registered",
    description: "Legal founding document certifying the establishment of Mera Watan Welfare Foundation as a registered society.",
    size: "2.4 MB • PDF",
    fileUrl: "#",
    icon: "📑",
  },
  {
    id: "doc-darpan",
    title: "NITI Aayog NGO Darpan Certificate",
    category: "GOVT REGISTRATIONS",
    categoryKey: "govt",
    regNo: "RJ/2024/0488921",
    authority: "NITI Aayog, Government of India",
    date: "February 04, 2024",
    status: "Verified Portal Partner",
    description: "Official enrollment on NITI Aayog Darpan portal for government partnerships, grants, and youth empowerment projects.",
    size: "1.2 MB • PDF",
    fileUrl: "#",
    icon: "🌐",
  },
  {
    id: "doc-audit-2025",
    title: "Annual Financial Audit Report (2024-2025)",
    category: "FINANCIAL AUDITS",
    categoryKey: "financial",
    regNo: "AUD/2025/RDSA-001",
    authority: "Verma & Associates (Chartered Accountants)",
    date: "May 10, 2025",
    status: "Audited & Clean",
    description: "Complete transparent balance sheet, income/expenditure statements, and donor fund utilization report audited by independent CA firm.",
    size: "3.6 MB • PDF",
    fileUrl: "#",
    icon: "📊",
  },
  {
    id: "doc-pan",
    title: "NGO PAN & TAN Allotment Letter",
    category: "TAX & COMPLIANCE",
    categoryKey: "tax",
    regNo: "AAATR8841D",
    authority: "Central Board of Direct Taxes (CBDT)",
    date: "January 20, 2024",
    status: "Active",
    description: "Official Permanent Account Number and Tax Deduction Account Number assigned to the foundation for transparent banking operations.",
    size: "1.1 MB • PDF",
    fileUrl: "#",
    icon: "💳",
  },
];

export default function DocumentsPage() {
  return (
    <main className="min-h-screen bg-[#161912] text-white selection:bg-[#C98E2A] selection:text-black pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#738062] hover:text-[#C98E2A] transition-colors uppercase"
          >
            <span>←</span> Back to Foundation Home
          </Link>
        </div>

        {/* Hero Section */}
        <div className="relative border-l-4 border-[#C98E2A] pl-6 md:pl-10 py-4 mb-16 bg-[#3F4632]/10 rounded-r-2xl border-t border-b border-r border-[#586248]/30">

          <h1 className="text-3xl md:text-5xl font-black font-display tracking-tight text-white mb-4 uppercase">
            NGO Registration & Compliance Documents
          </h1>
          <p className="text-[#CFD3C7] max-w-3xl text-sm md:text-base leading-relaxed font-sans">
            Mera Watan Welfare Foundation operates with 100% legal transparency and governance. Below are our verified government registration certificates, 80G tax exemption documents, 12A trust certificates, and audited financial statements.
          </p>

          {/* Quick Stat Pill */}
          <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono">
            <div className="bg-[#161912]/80 border border-[#586248]/50 px-4 py-2 rounded-lg flex items-center gap-2">
              <span className="text-[#C98E2A]">✔</span>
              <span className="text-gray-400">80G Status:</span>
              <span className="text-white font-bold">50% Tax Exempt</span>
            </div>
            <div className="bg-[#161912]/80 border border-[#586248]/50 px-4 py-2 rounded-lg flex items-center gap-2">
              <span className="text-[#C98E2A]">✔</span>
              <span className="text-gray-400">NITI Aayog Darpan:</span>
              <span className="text-white font-bold">RJ/2024/0488921</span>
            </div>
            <div className="bg-[#161912]/80 border border-[#586248]/50 px-4 py-2 rounded-lg flex items-center gap-2">
              <span className="text-[#C98E2A]">✔</span>
              <span className="text-gray-400">Audit Status:</span>
              <span className="text-emerald-400 font-bold">100% CA Verified</span>
            </div>
          </div>
        </div>

        {/* Document Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCUMENTS.map((doc) => (
            <div
              key={doc.id}
              className="group relative bg-[#1E2319]/90 border border-[#586248]/40 hover:border-[#C98E2A]/70 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(201,142,42,0.15)] flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-2xl">{doc.icon}</span>
                  <span className="px-3 py-1 rounded-md bg-[#3F4632]/50 border border-[#586248]/40 text-[#C98E2A] font-mono text-[10px] uppercase font-bold tracking-wider">
                    {doc.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white font-display mb-2 group-hover:text-[#C98E2A] transition-colors">
                  {doc.title}
                </h3>

                {/* Metadata list */}
                <div className="space-y-1.5 font-mono text-xs mb-4">
                  <div className="flex justify-between border-b border-[#586248]/20 pb-1">
                    <span className="text-gray-400">Reg / Certificate No:</span>
                    <span className="text-white font-semibold">{doc.regNo}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#586248]/20 pb-1">
                    <span className="text-gray-400">Authority:</span>
                    <span className="text-gray-300 text-[11px] truncate max-w-[170px]">{doc.authority}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#586248]/20 pb-1">
                    <span className="text-gray-400">Issue Date:</span>
                    <span className="text-gray-300">{doc.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Verification:</span>
                    <span className="text-emerald-400 font-semibold">✔ {doc.status}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-xs leading-relaxed mb-6">
                  {doc.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#586248]/30 flex items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-gray-400">{doc.size}</span>
                <a
                  href={`/documents/${doc.id}.pdf`}
                  download
                  className="px-4 py-2 rounded-xl bg-[#3F4632] hover:bg-[#C98E2A] text-white hover:text-black font-mono font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 shadow-md"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Guarantee Banner */}
        <div className="mt-16 bg-[#3F4632]/20 border border-[#C98E2A]/40 rounded-2xl p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-[#C98E2A]/10 rounded-full blur-2xl pointer-events-none" />
          <h2 className="text-2xl font-bold font-display text-white mb-2 uppercase">
            Need Document Verification or Hard Copies?
          </h2>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto mb-6">
            For corporate CSR partnerships, government verification, or certified true copy requests, contact our NGO administration team directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-[#C98E2A] text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
            >
              Contact Admin Office
            </Link>
            <a
              href="mailto:raghuwanshiashok34@gmail.com"
              className="px-6 py-3 rounded-full bg-[#161912] border border-[#586248] text-white font-mono text-xs uppercase tracking-widest hover:border-[#C98E2A] transition-colors"
            >
              Email Compliance Desk
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
