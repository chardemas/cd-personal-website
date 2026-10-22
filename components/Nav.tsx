"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/content";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        aria-label="Main"
        className={`flex w-full max-w-5xl items-center justify-between gap-2 rounded-full border py-2 pr-2 pl-4 transition-all duration-300 ${
          scrolled ? "border-line-strong bg-bg/70 shadow-lg shadow-black/30 backdrop-blur-xl" : "border-transparent"
        }`}
      >
        <a href="#top" className="group flex items-center gap-2.5 font-medium tracking-tight">
          <Monogram />
          <span className="hidden sm:inline">Charlotte Demas</span>
        </a>
        <ul className="hidden items-center gap-1 text-sm lg:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={active === s.id ? "true" : undefined}
                className={`rounded-full px-3 py-1.5 transition-colors ${
                  active === s.id ? "bg-white/8 text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href="#contact" className="rounded-full px-3 py-1.5 text-sm text-muted hover:text-ink lg:hidden">
            Contact
          </a>
          <a
            href={profile.resume}
            download
            className="rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-bg transition hover:bg-pink"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

function Monogram() {
  // 3x3 block of neon dashes
  const colors = ["#ff4fd2", "#b45cff", "#ff3366", "#b45cff", "#ff4fd2", "#3dffa2", "#ff3366", "#3dffa2", "#3b8cff"];
  return (
    <svg viewBox="0 0 30 30" className="h-7 w-7 transition-transform duration-500 group-hover:rotate-90" aria-hidden>
      <rect width="30" height="30" rx="8" fill="#1b1916" />
      {colors.map((c, i) => {
        const x = 6 + (i % 3) * 9;
        const y = 6 + Math.floor(i / 3) * 9;
        return <rect key={i} x={x - 5} y={y - 1.8} width="10" height="3.6" rx="1.8" fill={c} transform={`rotate(-45 ${x} ${y})`} />;
      })}
    </svg>
  );
}
