
const projects = [
  {
    title: "Résidence Horizon",
    category: "Architecture résidentielle",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Villa Contemporaine",
    category: "Construction & design",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Espace Signature",
    category: "Architecture intérieure",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function Projects() {
  return (
    <section
      id="projets"
      className="bg-white px-[6%] py-20 md:px-[7%] md:py-28"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-12 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[750px]">
            <span className="text-[11px] font-extrabold tracking-[3px] text-[#a87527]">
              PORTFOLIO
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[#172b3a] sm:text-5xl lg:text-[54px]">
              Des projets qui parlent{" "}
              <span className="text-[#b77920]">d&apos;eux-mêmes.</span>
            </h2>
          </div>

          <p className="max-w-[330px] text-sm leading-7 text-[#64717b] md:pb-2 md:text-base">
            Une sélection de réalisations qui reflètent notre vision,
            notre exigence et notre passion pour l&apos;architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {projects.map((project, index) => (
            <article key={project.title} className="group min-w-0">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#e8e6df]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c27]/65 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="absolute left-5 top-5 border border-white/60 bg-[#0d1c27]/25 px-3 py-2 text-xs font-bold tracking-widest text-white backdrop-blur-sm">
                  0{index + 1}
                </span>

                <a
                  href="#contact"
                  aria-label={`Demander un projet similaire à ${project.title}`}
                  className="absolute bottom-5 right-5 grid size-12 translate-y-2 place-items-center border border-white/70 bg-[#0d1c27]/30 text-xl text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:border-[#e2bd82] hover:bg-[#c99a52] hover:text-[#0d1c27] focus-visible:translate-y-0 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e2bd82] group-hover:translate-y-0 group-hover:opacity-100"
                >
                  ↗
                </a>
              </div>

              <div className="flex items-start justify-between gap-4 border-b border-[#e8e4dc] py-5">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-[#172b3a] transition-colors duration-300 group-hover:text-[#a87527]">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs tracking-wide text-[#64717b] sm:text-sm">
                    {project.category}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="mt-1 text-lg text-[#b77920]"
                >
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center md:mt-16">
          <a
            href="#contact"
            className="inline-flex min-h-[54px] items-center justify-center gap-5 border border-[#172b3a] px-7 text-xs font-bold text-[#172b3a] transition-colors duration-300 hover:border-[#172b3a] hover:bg-[#172b3a] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b77920]"
          >
            Parlons de votre projet
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
