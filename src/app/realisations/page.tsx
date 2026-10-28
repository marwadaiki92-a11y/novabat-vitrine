
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Nos réalisations en architecture et construction",
  description:
    "Découvrez les projets de démonstration NovaBât en architecture résidentielle, construction contemporaine et architecture intérieure.",
  alternates: {
    canonical: "/realisations",
  },
  openGraph: {
    title: "Nos réalisations | NovaBât",
    description:
      "Explorez les projets présentés par NovaBât et découvrez notre approche de l'architecture, de la construction et de l'aménagement.",
    type: "website",
    locale: "fr_FR",
  },
};


const projects = [
  {
    slug: "residence-horizon",
    category: "Architecture résidentielle",
    title: "Résidence Horizon",
    location: "Projet de démonstration",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    description:
      "Une résidence contemporaine pensée autour de la lumière naturelle, de volumes équilibrés et d'une relation harmonieuse avec l'extérieur.",
    number: "01",
  },
  {
    slug: "villa-contemporaine",
    category: "Construction & design",
    title: "Villa Contemporaine",
    location: "Projet de démonstration",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    description:
      "Une villa aux lignes épurées, où les matériaux, les ouvertures et les espaces de vie composent une architecture sobre et lumineuse.",
    number: "02",
  },
  {
    slug: "espace-signature",
    category: "Architecture intérieure",
    title: "Espace Signature",
    location: "Projet de démonstration",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    description:
      "Un espace intérieur chaleureux associant matières naturelles, fonctionnalité et attention portée aux détails.",
    number: "03",
  },
];

export default function RealisationsPage() {
  return (
    <>
      <Header />

      <main id="top" className="min-h-screen bg-[#f7f5f0] text-[#293944]">
        <section className="bg-[#0d1c27] px-6 pb-20 pt-36 text-white sm:px-10 md:pb-28 md:pt-44">
          <div className="mx-auto max-w-7xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#e2bd82]">
              Portfolio Novabât
            </p>
            <h1 className="max-w-4xl font-serif text-4xl leading-tight sm:text-5xl md:text-7xl">
              Des lieux conçus pour traverser le temps.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              Découvrez une sélection de projets illustrant une vision de
              l'architecture fondée sur l'équilibre, la fonctionnalité et la
              qualité des finitions.
            </p>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#a77a39]">
                  Sélection de projets
                </p>
                <h2 className="font-serif text-3xl text-[#0d1c27] sm:text-4xl">
                  Nos réalisations
                </h2>
              </div>
              <span className="text-sm text-[#75818a]">
                {projects.length} projets présentés
              </span>
            </div>

            <div className="grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.slug} className="group">
                  <Link
                    href={`/realisations/${project.slug}`}
                    className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c99a52]"
                    aria-label={`Découvrir le projet ${project.title}`}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#e5e1d8]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={`Illustration de ${project.title}`}
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute left-4 top-4 bg-[#0d1c27]/90 px-3 py-2 text-xs font-semibold tracking-wider text-white">
                        {project.number}
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute bottom-4 right-4 grid size-11 place-items-center bg-[#c99a52] text-lg text-[#0d1c27] transition-transform group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </div>

                    <div className="pt-5">
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#a77a39]">
                        {project.category}
                      </p>
                      <h3 className="mt-2 font-serif text-2xl text-[#0d1c27] transition-colors group-hover:text-[#a77a39]">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#75818a]">
                        {project.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#0d1c27]">
                        Découvrir le projet{" "}
                        <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16 sm:px-10 md:py-20">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <h2 className="max-w-2xl font-serif text-3xl text-[#0d1c27] sm:text-4xl">
              Vous avez un projet en tête ?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 bg-[#c99a52] px-6 py-4 text-sm font-bold text-[#0d1c27] transition-colors hover:bg-[#e2bd82]"
            >
              Parlons de votre projet <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
