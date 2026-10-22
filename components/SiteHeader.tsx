"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Heart,
  Menu,
  X,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  Trophy,
  Info,
  Calendar,
  Image as ImageIcon,
  Users,
  PhoneCall,
  UserPlus
} from "lucide-react";

const ACTIVITIES = [
  {
    id: "army-training",
    href: "/#army-training",
    label: "Army & Defence Prep",
    desc: "Physical PT, 1.6 km speed endurance drills & exam coaching",
    icon: ShieldCheck,
    color: "#FF9933"
  },
  {
    id: "women-empowerment",
    href: "/#women-empowerment",
    label: "Women Empowerment",
    desc: "Self-defense, tailoring, digital literacy & livelihood skills",
    icon: Sparkles,
    color: "#F59E0B"
  },
  {
    id: "sports-fitness",
    href: "/#sports-fitness",
    label: "Sports & Athletics",
    desc: "Athletics academy, Fauji Cup tournaments & stamina camps",
    icon: Trophy,
    color: "#38BDF8"
  },
];

const NAV_ITEMS = [
  { id: "about", href: "/#about", label: "About", icon: Info },
  { id: "activities", href: "/#activities", label: "Activities", icon: Calendar },
  { id: "gallery", href: "/#gallery", label: "Gallery", icon: ImageIcon },
  { id: "donors", href: "/#donors", label: "Donors", icon: Users },
  { id: "contact", href: "/#contact", label: "Contact", icon: PhoneCall },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileWingsOpen, setMobileWingsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState<string>("hero");
  
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Active Scrollspy Intersection Observer
  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = ["hero", "about", "wings", "army-training", "women-empowerment", "sports-fitness", "gallery", "activities", "donors", "contact"];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    const elem = document.getElementById(sectionId);
    if (elem) {
      e.preventDefault();
      const headerOffset = 90;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + (window.scrollY || window.pageYOffset) - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
    setDropdownOpen(false);
    setMobileOpen(false);
  };

  const isWingsActive = ["wings", "army-training", "women-empowerment", "sports-fitness"].includes(activeSection);

  return (
    <header className="sticky top-0 z-50 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Left: Mobile Menu Trigger (in place of MW) + Brand Title */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Mobile Dropdown Trigger in place of MW */}
            <button
              type="button"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden w-10 h-10 bg-[#163B66] text-white hover:bg-[#0D223A] active:scale-95 flex items-center justify-center rounded-xl shadow-md transition-all border border-[#205493]/70 focus:outline-none shrink-0 cursor-pointer"
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-[#FF9933]" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>

            {/* Desktop Brand Logo Badge (Shown only on lg+) */}
            <Link
              href="/#hero"
              onClick={(e) => handleNavClick(e, "hero")}
              className="hidden lg:flex w-10 h-10 bg-[#163B66] text-white items-center justify-center font-mono font-bold text-lg rounded-xl shadow-md hover:bg-[#0D223A] transition-colors shrink-0"
            >
              MW
            </Link>

            {/* Brand Title */}
            <Link
              href="/#hero"
              onClick={(e) => handleNavClick(e, "hero")}
              className="flex flex-col group select-none"
            >
              <div className="text-[17px] sm:text-xl font-bold tracking-wider text-[#0F172A] leading-tight group-hover:text-[#163B66] transition-colors font-display">
                MERA WATAN
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.16em] sm:tracking-[0.2em] text-[#D97706] uppercase font-bold">
                WELFARE FOUNDATION BETUL
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono font-semibold tracking-wider uppercase">
            <Link
              href="/#about"
              onClick={(e) => handleNavClick(e, "about")}
              className={`py-2 transition-colors relative ${
                activeSection === "about" ? "text-[#163B66] font-extrabold" : "text-[#0F172A] hover:text-[#163B66]"
              }`}
            >
              ABOUT
              {activeSection === "about" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D97706]" />
              )}
            </Link>

            {/* Wings & Causes Dropdown */}
            <div className="relative group" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                onMouseEnter={() => setDropdownOpen(true)}
                className={`flex items-center gap-1.5 py-2 transition-colors relative cursor-pointer ${
                  isWingsActive ? "text-[#163B66] font-extrabold" : "text-[#0F172A] hover:text-[#163B66]"
                }`}
                aria-expanded={dropdownOpen}
              >
                <span>WINGS & CAUSES</span>
                <span className="text-[10px] text-[#64748B]">[▼]</span>
                {isWingsActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D97706]" />
                )}
              </button>

              {/* Dropdown Menu Box */}
              {dropdownOpen && (
                <div
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-80 bg-white border border-[#163B66]/20 rounded-2xl shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="px-3 py-2 text-[10px] font-mono tracking-widest text-[#64748B] uppercase border-b border-[#E2E8F0] mb-2 font-bold">
                    OPERATIONAL WINGS
                  </div>
                  {ACTIVITIES.map((act) => {
                    const ActIcon = act.icon;
                    return (
                      <Link
                        key={act.id}
                        href={act.href}
                        onClick={(e) => handleNavClick(e, act.id)}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#F8FAFC] transition-colors group/item"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#163B66]/10 text-[#163B66] flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-[#163B66] group-hover/item:text-white transition-colors">
                          <ActIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#0F172A] group-hover/item:text-[#163B66] transition-colors">
                              {act.label}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#64748B] font-normal leading-tight mt-1">
                            {act.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {NAV_ITEMS.filter((i) => i.id !== "about").map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`py-2 transition-colors relative ${
                  activeSection === item.id ? "text-[#163B66] font-extrabold" : "text-[#0F172A] hover:text-[#163B66]"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D97706]" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/membership"
              className="text-xs font-mono font-bold tracking-wider uppercase px-4 py-2 border-2 border-[#163B66] text-[#163B66] hover:bg-[#163B66] hover:text-white transition-colors rounded-xl"
            >
              JOIN CAUSE
            </Link>
            <Link
              href="/#donors"
              onClick={(e) => handleNavClick(e, "donors")}
              className="text-xs font-mono font-bold tracking-wider uppercase px-5 py-2 bg-[#D97706] text-white hover:bg-[#B45309] transition-colors rounded-xl shadow-md flex items-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 fill-white text-white" />
              <span>DONATE</span>
            </Link>
          </div>

          {/* Mobile Right CTA Button: Fast Donate */}
          <div className="lg:hidden flex items-center">
            <Link
              href="/#donors"
              onClick={(e) => handleNavClick(e, "donors")}
              className="text-[11px] font-mono font-bold tracking-wider uppercase px-3.5 py-1.5 bg-[#D97706] text-white hover:bg-[#B45309] active:scale-95 transition-all rounded-xl shadow-sm flex items-center gap-1.5 border border-[#B45309]"
            >
              <Heart className="w-3 h-3 fill-white text-white" />
              <span>DONATE</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Tri-Color Accent Strip */}
      <div className="tri-band">
        <span />
        <span />
        <span />
      </div>

      {/* Elevated Mobile Dropdown Menu Drawer */}
      {mobileOpen && (
        <nav className="lg:hidden bg-[#0D223A] border-b-4 border-[#D97706] px-4 py-6 flex flex-col gap-3 font-mono text-xs uppercase tracking-wider shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
          
          <div className="pb-2 border-b border-[#205493]/70">
            <span className="text-[10px] font-bold text-[#FF9933] tracking-[0.2em]">
              NAVIGATION MENU
            </span>
          </div>

          {/* About Link */}
          <Link
            href="/#about"
            onClick={(e) => handleNavClick(e, "about")}
            className={`flex items-center gap-2.5 py-2 px-3 rounded-xl transition-all ${
              activeSection === "about"
                ? "bg-[#D97706] text-white font-bold shadow-md"
                : "text-gray-200 hover:bg-[#163B66] hover:text-white"
            }`}
          >
            <Info className="w-4 h-4 text-[#FF9933]" />
            <span>ABOUT FOUNDATION</span>
          </Link>

          {/* Wings & Causes Accordion */}
          <div className="bg-[#132F52]/80 border border-[#205493] rounded-2xl p-3 my-1">
            <button
              onClick={() => setMobileWingsOpen((v) => !v)}
              className="flex items-center justify-between w-full font-mono text-xs font-bold text-white hover:text-[#FF9933] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF9933]" />
                <span>WINGS &amp; OPERATIONAL CAUSES</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-[#FF9933] transition-transform duration-200 ${mobileWingsOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileWingsOpen && (
              <div className="flex flex-col gap-2 pt-3 mt-2 border-t border-[#205493]/60">
                {ACTIVITIES.map((act) => {
                  const ActIcon = act.icon;
                  return (
                    <Link
                      key={act.id}
                      href={act.href}
                      onClick={(e) => handleNavClick(e, act.id)}
                      className={`flex items-center gap-3 p-2 rounded-xl transition-all ${
                        activeSection === act.id
                          ? "bg-[#163B66] text-white font-bold border border-[#FF9933]/50"
                          : "text-gray-300 hover:bg-[#163B66]/60 hover:text-white"
                      }`}
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#071729] flex items-center justify-center shrink-0 border border-[#205493]">
                        <ActIcon className="w-3.5 h-3.5 text-[#FF9933]" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-white">{act.label}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Activities, Gallery, Donors, Contact */}
          {NAV_ITEMS.filter((i) => i.id !== "about").map((item) => {
            const ItemIcon = item.icon;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`flex items-center gap-2.5 py-2 px-3 rounded-xl transition-all ${
                  activeSection === item.id
                    ? "bg-[#D97706] text-white font-bold shadow-md"
                    : "text-gray-200 hover:bg-[#163B66] hover:text-white"
                }`}
              >
                <ItemIcon className="w-4 h-4 text-[#FF9933]" />
                <span>{item.label}</span>
              </Link>
            );
          })}

          {/* Bottom Action Buttons in Dropdown */}
          <div className="flex flex-col sm:flex-row gap-2.5 pt-3 mt-2 border-t border-[#205493]/70">
            <Link
              href="/membership"
              onClick={() => setMobileOpen(false)}
              className="py-3 px-4 bg-[#D97706] text-white text-center font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 hover:bg-[#B45309] transition-colors border-b-2 border-[#B45309]"
            >
              <UserPlus className="w-4 h-4" />
              <span>JOIN CAUSE / VOLUNTEER</span>
            </Link>
            <Link
              href="/#donors"
              onClick={(e) => handleNavClick(e, "donors")}
              className="py-3 px-4 bg-[#10B981] text-white text-center font-bold rounded-xl shadow-md flex items-center justify-center gap-2 hover:bg-[#059669] transition-colors border-b-2 border-[#059669]"
            >
              <Heart className="w-4 h-4 fill-white text-white" />
              <span>DONATE TO CAUSE</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
