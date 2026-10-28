
export default function Footer() {
  return (
    <footer className="bg-[#09151e] px-[6%] text-white md:px-[7%]">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 py-12 md:flex-row md:items-center md:py-14">
          <div>
            <a
              className="inline-block text-2xl font-extrabold tracking-[2px] transition-opacity hover:opacity-80"
              href="/"
              aria-label="Novabât, retour à l'accueil"
            >
              NOVA<span className="text-[#e2bd82]">BÂT</span>
              <span className="mt-1 block text-[9px] font-semibold tracking-[2px] text-[#aebbc4]">
                CONSTRUCTION & ARCHITECTURE
              </span>
            </a>

            <p className="mt-4 text-sm text-[#aebbc4]">
              Concevoir avec sens. Construire pour durer.
            </p>
          </div>

          <nav
            aria-label="Navigation de pied de page"
            className="flex flex-wrap gap-x-7 gap-y-4"
          >
            <a
              href="/expertises"
              className="text-sm text-[#c5cfd5] transition-colors hover:text-[#e2bd82]"
            >
              Expertises
            </a>

            <a
              href="/realisations"
              className="text-sm text-[#c5cfd5] transition-colors hover:text-[#e2bd82]"
            >
              Réalisations
            </a>

            <a
              href="/#apropos"
              className="text-sm text-[#c5cfd5] transition-colors hover:text-[#e2bd82]"
            >
              À propos
            </a>

            <a
              href="/contact"
              className="text-sm text-[#c5cfd5] transition-colors hover:text-[#e2bd82]"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="flex flex-col gap-4 py-6 text-xs text-[#8796a1] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Novabât — Démonstration portfolio.</span>

          <a
            href="#top"
            className="inline-flex items-center gap-2 transition-colors hover:text-[#e2bd82]"
          >
            Retour en haut <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
