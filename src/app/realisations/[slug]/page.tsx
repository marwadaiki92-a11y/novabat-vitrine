
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const projects = [
  {
    slug: "residence-horizon",
    number: "01",
    category: "Architecture résidentielle",
    title: "Résidence Horizon",
    location: "Projet de démonstration",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
    summary:
      "Une résidence contemporaine pensée autour de la lumière, des volumes et du confort.",
    description:
      "La Résidence Horizon illustre une approche architecturale qui associe lignes épurées, matériaux élégants et ouverture sur l'extérieur. Chaque espace est conçu pour favoriser la circulation naturelle de la lumière et offrir un cadre de vie agréable.",
    objectives: [
      "Optimiser la lumière naturelle dans les espaces de vie.",
      "Créer une continuité entre les espaces intérieurs et extérieurs.",
      "Privilégier une architecture sobre et durable.",
    ],
  },
  {
    slug: "villa-contemporaine",
    number: "02",
    category: "Construction & design",
    title: "Villa Contemporaine",
    location: "Projet de démonstration",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
    summary:
      "Une villa aux lignes modernes où fonctionnalité et élégance se rencontrent.",
    description:
      "La Villa Contemporaine met en avant une conception équilibrée, des volumes généreux et une sélection cohérente de matériaux. Le projet privilégie le confort quotidien tout en affirmant une identité architecturale moderne.",
    objectives: [
      "Concevoir des espaces fonctionnels et confortables.",
      "Harmoniser les matériaux et les finitions.",
      "Valoriser les volumes et les perspectives.",
    ],
  },
  {
    slug: "espace-signature",
    number: "03",
    category: "Architecture intérieure",
    title: "Espace Signature",
    location: "Projet de démonstration",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90",
    summary:
      "Un intérieur raffiné qui associe matières naturelles, lumière et détails soignés.",
    description:
      "Espace Signature propose une vision de l'aménagement intérieur fondée sur l'équilibre des textures, la simplicité des formes et le choix de détails intemporels. L'ensemble vise à créer une atmosphère accueillante et harmonieuse.",
    objectives: [
      "Créer une ambiance cohérente et chaleureuse.",
      "Associer textures naturelles et finitions élégantes.",
      "Améliorer la fonctionnalité de chaque espace.",
    ],
  },
];

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Réalisation introuvable | NovaBât",
      description: "Cette réalisation est introuvable.",
    };
  }

  return {
    title: `${project.title} | NovaBât`,
    description: project.summary,
  };
}

function ProjectDetailFallback() {
  return (
    <main
      className="flex min-h-[60vh] items-center justify-center bg-[#f7f5f0] text-[#172a36]"
      aria-live="polite"
    >
      <p className="text-sm text-[#63717a]">
        Chargement de la réalisation…
      </p>
    </main>
  );
}

async function ProjectDetailContent({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const otherProjects = projects.filter((item) => item.slug !== slug);

  return (
    <>
      <section className="relative overflow-hidden bg-[#0d1c27] px-[6%] pb-16 pt-32 text-white md:px-[7%] md:pb-24 md:pt-40">
        <div className="mx-auto max-w-[1440px]">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-3 text-sm text-[#d5c3a5] transition-colors hover:text-white"
          >
            <span aria-hidden="true">←</span>
            Retour aux réalisations
          </Link>

          <p className="mt-12 text-xs font-bold uppercase tracking-[0.25em] text-[#e2bd82]">
            {project.category}
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#c5cfd5] md:text-lg">
            {project.summary}
          </p>

          <p className="mt-8 text-xs uppercase tracking-[0.18em] text-[#aebbc4]">
            {project.location}
          </p>
        </div>
      </section>

      <section className="px-[6%] py-12 md:px-[7%] md:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative aspect-[16/9] overflow-hidden bg-[#e6e1d8]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={`Illustration du projet ${project.title}`}
              className="h-full w-full object-cover"
            />

            <span className="absolute bottom-5 left-5 bg-[#0d1c27]/90 px-4 py-3 text-xs font-semibold tracking-[0.15em] text-white md:bottom-8 md:left-8">
              NOVABÂT — {project.number}
            </span>
          </div>

          <div className="grid gap-12 py-14 md:grid-cols-[1.1fr_0.9fr] md:gap-20 md:py-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a77b3c]">
                À propos du projet
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                Imaginer des espaces qui ont du sens.
              </h2>

              <p className="mt-7 text-base leading-8 text-[#63717a]">
                {project.description}
              </p>
            </div>

            <div className="border-t border-[#d8d4cc] pt-7 md:border-t-0 md:pt-0">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a77b3c]">
                Intentions architecturales
              </p>

              <ul className="mt-7 space-y-5">
                {project.objectives.map((objective, index) => (
                  <li
                    key={objective}
                    className="flex gap-4 border-b border-[#d8d4cc] pb-5"
                  >
                    <span className="text-sm font-semibold text-[#a77b3c]">
                      0{index + 1}
                    </span>

                    <span className="text-sm leading-7 text-[#52616b]">
                      {objective}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 border-t border-[#d8d4cc] pt-8 sm:flex-row sm:items-center">
            <p className="text-sm text-[#63717a]">
              Vous avez un projet similaire en tête ?
            </p>

            <Link
              href="/contact"
              className="inline-flex min-h-[52px] items-center justify-center gap-5 bg-[#c99a52] px-7 text-sm font-bold text-[#0d1c27] transition-colors hover:bg-[#e2bd82]"
            >
              Parlons de votre projet
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="mt-20">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a77b3c]">
              À découvrir également
            </p>

            <div className="mt-7 grid gap-6 md:grid-cols-2">
              {otherProjects.map((item) => (
                <Link
                  key={item.slug}
                  href={`/realisations/${item.slug}`}
                  className="group border border-[#e2ded6] bg-white p-6 transition-colors hover:border-[#c99a52] md:p-8"
                >
                  <span className="text-xs font-semibold text-[#a77b3c]">
                    {item.number} / {item.category}
                  </span>

                  <span className="mt-4 block text-xl font-semibold transition-colors group-hover:text-[#a77b3c] md:text-2xl">
                    {item.title}
                  </span>

                  <span className="mt-5 inline-flex items-center gap-3 text-sm font-semibold">
                    Découvrir le projet
                    <span aria-hidden="true">↗</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ProjectDetailPage({ params }: PageProps) {
  return (
    <>
      <Header />

      <main id="top" className="min-h-screen bg-[#f7f5f0] text-[#172a36]">
        <Suspense fallback={<ProjectDetailFallback />}>
          <ProjectDetailContent params={params} />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
