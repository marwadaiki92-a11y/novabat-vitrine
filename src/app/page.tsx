
import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Construction et architecture",
  description:
    "Découvrez NovaBât, ses services de construction, d’architecture et de rénovation, ainsi que ses réalisations et son accompagnement personnalisé.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NovaBât | Construction et architecture",
    description:
      "Découvrez nos services, nos réalisations et notre approche de la construction et de la rénovation.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
