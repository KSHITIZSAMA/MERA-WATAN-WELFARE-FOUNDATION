"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

// Register ScrollTrigger safely for React
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// -------------------------------------------------------------------------
// 1. THEME-ADAPTIVE INLINE STYLES (MILIDECK & TACTICAL STYLING)
// -------------------------------------------------------------------------
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');

.cinematic-footer-wrapper {
  font-family: 'Plus Jakarta Sans', var(--font-body), sans-serif;
  -webkit-font-smoothing: antialiased;
  
  /* Dynamic Tactical Theme Variables */
  --pill-bg-1: rgba(63, 70, 50, 0.12);
  --pill-bg-2: rgba(30, 35, 24, 0.25);
  --pill-shadow: rgba(0, 0, 0, 0.3);
  --pill-highlight: rgba(201, 142, 42, 0.2);
  --pill-inset-shadow: rgba(0, 0, 0, 0.5);
  --pill-border: rgba(189, 193, 179, 0.25);
  
  --pill-bg-1-hover: rgba(63, 70, 50, 0.35);
  --pill-bg-2-hover: rgba(30, 35, 24, 0.55);
  --pill-border-hover: rgba(201, 142, 42, 0.6);
  --pill-shadow-hover: rgba(0, 0, 0, 0.5);
  --pill-highlight-hover: rgba(201, 142, 42, 0.4);
}

@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  100% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.8; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes footer-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px rgba(201, 142, 42, 0.6)); }
  15%, 45% { transform: scale(1.25); filter: drop-shadow(0 0 12px rgba(201, 142, 42, 0.9)); }
  30% { transform: scale(1); }
}

.animate-footer-breathe {
  animation: footer-breathe 8s ease-in-out infinite alternate;
}

.animate-footer-scroll-marquee {
  animation: footer-scroll-marquee 35s linear infinite;
}

.animate-footer-heartbeat {
  animation: footer-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transform-origin: center;
}

/* Theme-adaptive Grid Background */
.footer-bg-grid {
  background-size: 60px 60px;
  background-image: 
    linear-gradient(to right, rgba(201, 142, 42, 0.08) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(201, 142, 42, 0.08) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}

/* Theme-adaptive Aurora Glow */
.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%, 
    rgba(63, 70, 50, 0.45) 0%, 
    rgba(201, 142, 42, 0.25) 45%, 
    transparent 75%
  );
}

/* Glass Pill Theming */
.footer-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow: 
      0 10px 30px -10px var(--pill-shadow), 
      inset 0 1px 1px var(--pill-highlight), 
      inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-glass-pill:hover {
  background: linear-gradient(145deg, var(--pill-bg-1-hover) 0%, var(--pill-bg-2-hover) 100%);
  border-color: var(--pill-border-hover);
  box-shadow: 
      0 20px 40px -10px var(--pill-shadow-hover), 
      inset 0 1px 1px var(--pill-highlight-hover);
  color: #FFFFFF;
}

/* Giant Background Text Masking */
.footer-giant-bg-text {
  font-size: 24vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(201, 142, 42, 0.15);
  background: linear-gradient(180deg, rgba(205, 209, 199, 0.12) 0%, transparent 65%);
  -webkit-background-clip: text;
  background-clip: text;
}

/* Metallic Text Glow */
.footer-text-glow {
  background: linear-gradient(180deg, #FFFFFF 0%, #CFD3C7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 25px rgba(201, 142, 42, 0.3));
}
`;

// -------------------------------------------------------------------------
// 2. MAGNETIC BUTTON PRIMITIVE (Zero Dependency)
// -------------------------------------------------------------------------
export type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType;
    href?: string;
  };

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const h = rect.width / 2;
          const w = rect.height / 2;
          const x = e.clientX - rect.left - h;
          const y = e.clientY - rect.top - w;

          gsap.to(element, {
            x: x * 0.4,
            y: y * 0.4,
            rotationX: -y * 0.15,
            rotationY: x * 0.15,
            scale: 1.05,
            ease: "power2.out",
            duration: 0.4,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1.2,
          });
        };

        element.addEventListener("mousemove", handleMouseMove as any);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          element.removeEventListener("mousemove", handleMouseMove as any);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    }, []);

    return (
      <Component
        ref={(node: HTMLElement) => {
          (localRef as any).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as any).current = node;
        }}
        className={cn("cursor-pointer", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

// -------------------------------------------------------------------------
// 3. MAIN COMPONENT
// -------------------------------------------------------------------------
const MarqueeItem = () => (
  <div className="flex items-center space-x-12 px-6">
    <span>ARMY DRILL & RECRUITMENT</span> <span className="text-[#C98E2A]">✦</span>
    <span>WOMEN VOCATIONAL SKILLS</span> <span className="text-[#738062]">✦</span>
    <span>SPORTS & FITNESS TRIALS</span> <span className="text-[#C98E2A]">✦</span>
    <span>DISCIPLINE & CHARACTER BUILDING</span> <span className="text-[#738062]">✦</span>
    <span>100% DEDICATED COACHING</span> <span className="text-[#C98E2A]">✦</span>
  </div>
);

export function CinematicFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      // Background Parallax
      if (giantTextRef.current) {
        gsap.fromTo(
          giantTextRef.current,
          { y: 30, opacity: 0.1 },
          {
            y: 0,
            opacity: 0.15,
            duration: 1,
            ease: "power1.out",
          }
        );
      }

      // Content Reveal
      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const handleScrollTo = (id: string) => {
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      const headerOffset = 90;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + (window.scrollY || window.pageYOffset) - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <footer
        ref={wrapperRef}
        className="relative w-full min-h-[600px] flex flex-col justify-between overflow-hidden bg-[#0D223A] text-white cinematic-footer-wrapper border-t-4 border-[#D97706] pt-16 pb-8"
      >
        {/* Ambient Light & Grid Background */}
        <div className="footer-aurora absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[80px] pointer-events-none z-0" />
        <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

        {/* Giant background text */}
        <div
          ref={giantTextRef}
          className="footer-giant-bg-text absolute -bottom-[2vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none font-display uppercase"
        >
          MERE VATAN
        </div>

        {/* 1. Sleek Continuous Marquee Ticker */}
        <div className="w-full overflow-hidden border-y border-[#205493] bg-[#071526]/90 backdrop-blur-md py-3 z-20 shadow-2xl mb-12">
          <div className="flex w-max animate-footer-scroll-marquee text-xs md:text-sm font-bold tracking-[0.25em] text-[#CFD3C7] uppercase font-mono">
            <MarqueeItem />
            <MarqueeItem />
            <MarqueeItem />
            <MarqueeItem />
          </div>
        </div>

          {/* 2. Main Center Content */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-20 sm:mt-24 w-full max-w-5xl mx-auto">
            <div className="inline-block px-4 py-1.5 bg-[#163B66] text-[#FF9933] font-mono text-xs font-bold uppercase tracking-widest mb-3 rounded-full border border-[#D97706]/40">
              // MERE VATAN WELFARE FOUNDATION
            </div>

            <h2
              ref={headingRef}
              className="text-4xl md:text-7xl font-black footer-text-glow tracking-tight mb-10 text-center font-display uppercase leading-tight"
            >
              SERVE. EMPOWER. TRANSFORM.
            </h2>

            {/* Interactive Magnetic Pills Layout */}
            <div ref={linksRef} className="flex flex-col items-center gap-6 w-full">
              {/* Primary Membership & Wing Links */}
              <div className="flex flex-wrap justify-center gap-4 w-full">
                <MagneticButton
                  as={Link}
                  href="/membership"
                  className="footer-glass-pill px-8 py-4 rounded-full text-white font-mono font-bold text-xs md:text-sm uppercase tracking-widest flex items-center gap-3 group border-[#D97706]/60 bg-[#D97706]/20 hover:bg-[#D97706]"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF9933] group-hover:scale-125 transition-transform" />
                  JOIN AS VOLUNTEER
                </MagneticButton>

                <MagneticButton
                  as="button"
                  onClick={() => handleScrollTo("activities")}
                  className="footer-glass-pill px-8 py-4 rounded-full text-white font-mono font-bold text-xs md:text-sm uppercase tracking-widest flex items-center gap-3 group border-[#163B66]/80 bg-[#163B66]/40 hover:bg-[#163B66]"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] group-hover:scale-125 transition-transform" />
                  EXPLORE WINGS
                </MagneticButton>
              </div>

              {/* Secondary Navigation & Social / NGO Links */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full mt-2">
                <MagneticButton
                  as="a"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-glass-pill px-5 py-2.5 rounded-full text-[#E2E8F0] font-mono text-xs hover:text-white uppercase tracking-wider flex items-center gap-2 border-[#163B66]/60"
                >
                  <span className="text-[#FF9933]">📷</span>
                  Instagram
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-glass-pill px-5 py-2.5 rounded-full text-[#E2E8F0] font-mono text-xs hover:text-white uppercase tracking-wider flex items-center gap-2 border-[#163B66]/60"
                >
                  <span className="text-red-500">▶</span>
                  YouTube Channel
                </MagneticButton>
                <MagneticButton
                  as={Link}
                  href="/documents"
                  className="footer-glass-pill px-5 py-2.5 rounded-full text-[#E2E8F0] font-mono text-xs hover:text-white uppercase tracking-wider flex items-center gap-2 border-[#163B66]/60"
                >
                  <span className="text-[#FF9933]">📜</span>
                  NGO Documents
                </MagneticButton>
                <MagneticButton
                  as="button"
                  onClick={() => handleScrollTo("contact")}
                  className="footer-glass-pill px-5 py-2.5 rounded-full text-[#E2E8F0] font-mono text-xs hover:text-white uppercase tracking-wider flex items-center gap-2 border-[#163B66]/60"
                >
                  <span className="text-[#FF9933]">🎖️</span>
                  Careers // Instructors
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* 3. Bottom Bar / Credits */}
          <div className="relative z-20 w-full pb-8 px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* Copyright */}
            <div className="flex-1 flex items-center justify-center lg:justify-start order-2 lg:order-1 text-center lg:text-left">
              <span className="text-[#E2E8F0] text-[10px] md:text-xs font-mono tracking-wider md:tracking-widest uppercase">
                © 2026 MERE VATAN WELFARE FOUNDATION. ALL RIGHTS RESERVED.
              </span>
            </div>

            {/* "Made with Love" Badge */}
            <div className="flex-shrink-0 flex items-center justify-center order-1 lg:order-2">
              <div className="footer-glass-pill px-5 sm:px-6 py-2.5 rounded-full inline-flex items-center justify-center gap-2 cursor-default border-[#163B66] whitespace-nowrap shadow-sm">
                <span className="text-[#E2E8F0] text-[10px] md:text-xs font-mono font-bold uppercase tracking-wider sm:tracking-widest leading-none">
                  CRAFTED WITH
                </span>
                <span className="animate-footer-heartbeat text-sm md:text-base text-[#D97706] leading-none select-none origin-center -translate-y-[0.5px]">
                  ❤
                </span>
                <span className="text-[#E2E8F0] text-[10px] md:text-xs font-mono font-bold uppercase tracking-wider sm:tracking-widest leading-none">
                  FOR YOUTH & DEFENCE ASPIRANTS
                </span>
              </div>
            </div>

            {/* Back to top */}
            <div className="flex-1 flex items-center justify-center lg:justify-end order-3">
              <MagneticButton
                as="button"
                onClick={scrollToTop}
                className="w-12 h-12 rounded-full footer-glass-pill flex items-center justify-center text-[#E2E8F0] hover:text-white group border-[#163B66]"
                aria-label="Back to top"
              >
                <svg className="w-5 h-5 transform group-hover:-translate-y-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                </svg>
              </MagneticButton>
            </div>

          </div>
        </footer>
    </>
  );
}
