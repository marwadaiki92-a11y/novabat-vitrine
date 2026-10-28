
const stats = [
  { value: "12+", label: "Années d'expérience" },
  { value: "85+", label: "Projets réalisés" },
  { value: "98%", label: "Clients satisfaits" },
];

export default function About() {
  return (
    <section
      id="apropos"
      className="overflow-hidden bg-[#0d1c27] px-[6%] py-20 text-white md:px-[7%] md:py-28"
    >
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative min-w-0 pb-6 pr-5 sm:pb-8 sm:pr-8">
          <div className="absolute bottom-0 right-0 top-6 w-[75%] border border-[#c99a52]/60 sm:top-8" />

          <div className="relative aspect-[4/5] max-h-[650px] overflow-hidden bg-[#263844]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85"
              alt="Projet architectural contemporain"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c27]/80 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <span className="mb-3 block text-[10px] font-bold tracking-[3px] text-[#e2bd82]">
                NOTRE ENGAGEMENT
              </span>
              <p className="font-serif text-2xl text-white sm:text-3xl">
                La qualité dans chaque détail.
              </p>
            </div>
          </div>

          <div className="absolute right-0 top-0 h-16 w-16 border-r-2 border-t-2 border-[#c99a52] sm:h-20 sm:w-20" />
        </div>

        <div className="min-w-0">
          <span className="text-[11px] font-extrabold tracking-[3px] text-[#e2bd82]">
            QUI SOMMES-NOUS ?
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[52px]">
            Donner vie aux idées,{" "}
            <span className="font-serif font-normal italic text-[#e2bd82]">
              bâtir la confiance.
            </span>
          </h2>

          <p className="mt-7 text-sm leading-8 text-[#d0d8dd] sm:text-base">
            Novabât accompagne ses clients de la conception à la réalisation,
            avec une approche qui allie maîtrise technique, créativité et
            attention aux détails.
          </p>

          <p className="mt-4 text-sm leading-8 text-[#d0d8dd] sm:text-base">
            Notre ambition : concevoir des espaces durables qui répondent aux
            besoins d&apos;aujourd&apos;hui et aux attentes de demain.
          </p>

          <div className="mt-9 grid grid-cols-3 gap-4 border-y border-white/15 py-7 sm:gap-6 sm:py-8">
            {stats.map((stat) => (
              <div key={stat.label} className="min-w-0">
                <strong className="block text-2xl font-semibold text-[#e2bd82] sm:text-3xl lg:text-4xl">
                  {stat.value}
                </strong>
                <span className="mt-2 block text-[10px] leading-5 text-[#c5cfd5] sm:text-xs">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex min-h-[54px] items-center gap-5 border border-[#c99a52] bg-[#c99a52] px-6 text-xs font-bold text-[#0d1c27] transition-colors duration-300 hover:border-[#e2bd82] hover:bg-[#e2bd82] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e2bd82]"
          >
            Parlons de votre projet
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
