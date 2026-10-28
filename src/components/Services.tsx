
const services = [
  {
    number: "01",
    icon: "⌂",
    title: "Construction",
    text: "Des bâtiments conçus avec rigueur, du gros œuvre aux finitions, pour bâtir des espaces durables et de qualité.",
  },
  {
    number: "02",
    icon: "◇",
    title: "Architecture",
    text: "Des espaces contemporains où esthétique, confort et fonctionnalité se rencontrent pour donner vie à vos idées.",
  },
  {
    number: "03",
    icon: "↗",
    title: "Rénovation",
    text: "Une nouvelle vie pour vos espaces grâce à des solutions sur mesure et une attention portée à chaque détail.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#f7f6f2] px-[6%] py-20 md:px-[7%] md:py-28"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-12 max-w-[760px] md:mb-14">
          <span className="text-[11px] font-extrabold tracking-[3px] text-[#a87527]">
            NOS EXPERTISES
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[#172b3a] sm:text-5xl lg:text-[54px]">
            Des solutions pensées pour{" "}
            <span className="text-[#b77920]">vos ambitions.</span>
          </h2>

          <p className="mt-5 max-w-[620px] text-sm leading-8 text-[#64717b] md:text-base">
            De la conception à la réalisation, nous transformons vos idées
            en projets concrets grâce à notre expertise et notre engagement
            envers la qualité.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => (
            <article
              key={service.number}
              className="group flex min-h-[320px] flex-col border border-[#e8e4dc] border-t-[3px] border-t-transparent bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-t-[#b77920] hover:shadow-[0_22px_50px_rgba(23,43,58,0.09)] md:p-8"
            >
              <div className="flex items-center justify-between">
                <span
                  aria-hidden="true"
                  className="grid size-14 place-items-center bg-[#f8f3e9] text-[32px] text-[#b77920] transition-colors duration-300 group-hover:bg-[#172b3a] group-hover:text-white"
                >
                  {service.icon}
                </span>

                <span className="text-xs font-bold tracking-widest text-[#b6bdc1]">
                  {service.number}
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-bold tracking-tight text-[#172b3a]">
                {service.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-[#64717b]">
                {service.text}
              </p>

              <a
                href="#contact"
                aria-label={`Parler de votre projet de ${service.title}`}
                className="mt-6 inline-flex w-fit items-center gap-3 text-xs font-extrabold text-[#a56d1b] transition-all duration-300 hover:gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b77920]"
              >
                Parlons de votre projet
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
