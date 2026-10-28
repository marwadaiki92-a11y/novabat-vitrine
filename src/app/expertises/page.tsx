
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Nos expertises en construction et rénovation",
  description:
    "Découvrez les services de NovaBât en construction, architecture et rénovation : conception des espaces, coordination des travaux et suivi de la qualité.",
  alternates: {
    canonical: "/expertises",
  },
  openGraph: {
    title: "Nos expertises | NovaBât",
    description:
      "Construction, architecture et rénovation : découvrez les domaines d’intervention de NovaBât.",
    type: "website",
    locale: "fr_FR",
  },
};


const services = [
  {
    number: "01",
    title: "Construction",
    description:
      "Nous accompagnons la réalisation de projets de construction, de la préparation à la livraison, avec une attention particulière portée à la qualité et aux finitions.",
    details: [
      "Étude des besoins et du projet",
      "Coordination des différentes étapes",
      "Suivi de la qualité d'exécution",
    ],
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "Nous imaginons des espaces harmonieux, fonctionnels et durables, pensés pour répondre aux usages et à l'identité de chaque projet.",
    details: [
      "Conception et réflexion spatiale",
      "Optimisation des volumes et de la lumière",
      "Choix des matériaux et des finitions",
    ],
  },
  {
    number: "03",
    title: "Rénovation",
    description:
      "Nous repensons les espaces existants pour leur apporter confort, cohérence et modernité, tout en valorisant leur potentiel.",
    details: [
      "Analyse de l'existant",
      "Modernisation des espaces",
      "Amélioration des finitions",
    ],
  },
];

export default function ExpertisesPage() {
  return (
    <>
      <Header />

      <main
        id="top"
        className="min-h-screen bg-[#f7f5f0] text-[#293944]"
      >
        <section className="relative overflow-hidden bg-[#0d1c27] px-6 pb-24 pt-36 text-white sm:px-10 md:pb-32 md:pt-44">
          <div className="absolute -right-20 -top-20 size-80 rounded-full border border-[#e2bd82]/20 md:size-[460px]" />
          <div className="absolute -right-5 -top-5 size-64 rounded-full border border-[#e2bd82]/10 md:size-[360px]" />

          <div className="relative mx-auto max-w-7xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#e2bd82]">
              Notre savoir-faire
            </p>
            <h1 className="max-w-4xl font-serif text-4xl leading-tight sm:text-5xl md:text-7xl">
              Des expertises au service de vos ambitions.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              De la conception à la réalisation, chaque étape est guidée par
              l'exigence, la cohérence architecturale et le souci du détail.
            </p>
            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-4 bg-[#c99a52] px-6 py-4 text-sm font-bold text-[#0d1c27] transition-colors hover:bg-[#e2bd82]"
            >
              Parlons de votre projet <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-2xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#a77a39]">
                Nos domaines d'intervention
              </p>
              <h2 className="font-serif text-3xl leading-tight text-[#0d1c27] sm:text-4xl md:text-5xl">
                Une approche réfléchie, du premier échange aux finitions.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="group border border-[#e5e1d8] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#c99a52] hover:shadow-xl sm:p-9"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-4xl text-[#c99a52]">
                      {service.number}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-2xl text-[#c99a52] transition-transform group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-9 font-serif text-2xl text-[#0d1c27]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#65727b]">
                    {service.description}
                  </p>

                  <ul className="mt-7 space-y-3 border-t border-[#e5e1d8] pt-6">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex gap-3 text-sm leading-6 text-[#293944]"
                      >
                        <span className="text-[#c99a52]" aria-hidden="true">
                          ✓
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16 sm:px-10 md:py-20">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#a77a39]">
                Votre projet commence ici
              </p>
              <h2 className="max-w-2xl font-serif text-3xl text-[#0d1c27] sm:text-4xl">
                Construisons ensemble une vision qui vous ressemble.
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-4 border border-[#c99a52] px-6 py-4 text-sm font-bold text-[#0d1c27] transition-colors hover:bg-[#c99a52]"
            >
              Nous contacter <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
