export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative isolate flex min-h-[760px] min-h-[100svh] items-center overflow-hidden bg-[#0d1c27] px-[6%] pb-32 pt-36 text-white md:px-[7%]"
    >
      {/* Image architecturale */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85')",
        }}
      />

      {/* Voile sombre pour garantir la lisibilité */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0d1c27]/95 via-[#0d1c27]/75 to-[#0d1c27]/25"
      />

      <div className="mx-auto w-full max-w-[1250px]">
        <span className="mb-6 inline-block text-[11px] font-bold tracking-[3px] text-[#e2bd82]">
          CONSTRUIRE AUJOURD’HUI, DURER DEMAIN
        </span>

        <h1 className="mb-7 max-w-[900px] font-serif text-5xl font-normal leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-[92px]">
          Bâtir l’avenir.
          <br />
          <span className="italic text-[#e2bd82]">
            Imaginer l’excellence.
          </span>
        </h1>

        <p className="max-w-[570px] text-[15px] leading-8 text-[#e2e7ea] md:text-base">
          Des projets pensés avec précision, conçus avec passion et réalisés
          pour durer. Novabat donne vie à vos ambitions grâce à une expertise
          dédiée à la construction, à l’architecture et à la rénovation.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projets"
            className="inline-flex min-h-[54px] items-center justify-center gap-5 border border-[#c99a52] bg-[#c99a52] px-6 text-xs font-bold text-[#0d1c27] transition-colors hover:border-[#e2bd82] hover:bg-[#e2bd82] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e2bd82]"
          >
            Découvrir nos projets <span aria-hidden="true">↗</span>
          </a>

          <a
            href="#apropos"
            className="inline-flex min-h-[54px] items-center justify-center border border-white/50 bg-white/5 px-6 text-xs font-bold text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e2bd82]"
          >
            Notre expertise
          </a>
        </div>

        <div className="absolute bottom-7 left-[6%] right-[6%] flex flex-col gap-3 text-[9px] tracking-[1px] text-[#e2e7ea] sm:bottom-8 sm:flex-row sm:items-center sm:justify-between sm:tracking-[1.5px] md:left-[7%] md:right-[7%]">
          <span>CONSTRUCTION · RÉNOVATION · ARCHITECTURE</span>

          <a
            href="#services"
            className="font-bold text-[#e2bd82] transition-colors hover:text-white"
          >
            DÉCOUVRIR LE SAVOIR-FAIRE <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}