
"use client";

import { useState } from "react";

const links = [
  { label: "Accueil", href: "/" },
  { label: "Expertises", href: "/expertises" },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/#apropos" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-50 border-b border-white/15 bg-[#0d1c27]/90 px-[6%] text-white backdrop-blur-md md:px-[7%]">
      <div className="mx-auto flex min-h-[88px] max-w-[1440px] items-center justify-between gap-6">
        <a
          href="/"
          aria-label="Novabât, accueil"
          className="shrink-0 text-xl font-extrabold tracking-[2px] text-white transition-opacity hover:opacity-80 sm:text-2xl"
          onClick={() => setOpen(false)}
        >
          NOVA<span className="text-[#e2bd82]">BÂT</span>
          <span className="mt-1 block text-[8px] font-semibold tracking-[2px] text-[#c5cfd5] sm:text-[9px]">
            CONSTRUCTION & ARCHITECTURE
          </span>
        </a>

        <button
          type="button"
          className="grid size-11 shrink-0 place-items-center border border-white/25 text-xl text-white transition-colors hover:border-[#e2bd82] hover:text-[#e2bd82] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e2bd82] md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
        >
          {open ? "✕" : "☰"}
        </button>

        <nav
          id="main-navigation"
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 right-0 top-full flex-col border-b border-white/15 bg-[#0d1c27] px-[6%] pb-6 pt-3 shadow-xl md:static md:flex md:flex-row md:items-center md:justify-end md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none lg:gap-9`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 text-xs font-semibold text-[#e2e7ea] transition-colors hover:text-[#e2bd82] md:border-0 md:py-3"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex min-h-[48px] items-center justify-center gap-4 border border-[#c99a52] bg-[#c99a52] px-5 text-center text-xs font-bold text-[#0d1c27] transition-colors hover:border-[#e2bd82] hover:bg-[#e2bd82] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e2bd82] md:mt-0 md:whitespace-nowrap"
          >
            Parlons de votre projet <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
