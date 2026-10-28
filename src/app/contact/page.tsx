
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Contact et demande de projet",
  description:
    "Contactez NovaBât pour présenter votre projet de construction, d’architecture ou de rénovation et échanger sur vos besoins.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | NovaBât",
    description:
      "Parlons de votre projet de construction, d’architecture ou de rénovation avec NovaBât.",
    type: "website",
    locale: "fr_FR",
  },
};


export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f7f5f0] pt-24 text-[#293944]">
        <section className="bg-[#0d1c27] px-6 py-16 text-white sm:px-10 md:py-24">
          <div className="mx-auto max-w-7xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#e2bd82]">
              Contactez-nous
            </p>

            <h1 className="max-w-4xl font-serif text-4xl leading-tight sm:text-5xl md:text-7xl">
              Donnons forme à votre prochain projet.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              Construction, architecture ou rénovation : partagez votre idée
              avec nous pour amorcer une première discussion.
            </p>

            <Link
              href="/realisations"
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#e2bd82] transition-colors hover:text-white"
            >
              Découvrir nos réalisations
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="px-6 py-12 sm:px-10 md:py-16">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <aside className="space-y-8">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#a77a39]">
                  Votre projet
                </p>
                <h2 className="font-serif text-3xl text-[#0d1c27]">
                  Parlons de vos besoins.
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#65727b]">
                  Décrivez-nous votre besoin, vos objectifs et vos premières
                  idées. Ces informations nous aideront à mieux comprendre
                  votre demande.
                </p>
              </div>

              <div className="border-t border-[#d9d3c8] pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#a77a39]">
                  Nos domaines
                </p>
                <ul className="mt-4 space-y-3 text-sm text-[#293944]">
                  <li>Construction</li>
                  <li>Architecture</li>
                  <li>Rénovation</li>
                  <li>Aménagement intérieur</li>
                </ul>
              </div>

              <div className="border-t border-[#d9d3c8] pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#a77a39]">
                  Une première étape
                </p>
                <p className="mt-3 text-sm leading-7 text-[#65727b]">
                  Chaque projet commence par une conversation claire sur vos
                  attentes, vos contraintes et vos priorités.
                </p>
              </div>
            </aside>

            <div className="min-w-0 bg-white p-5 shadow-sm sm:p-8 md:p-10">
              <Contact />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
