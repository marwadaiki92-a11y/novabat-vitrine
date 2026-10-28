
"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    const form = event.currentTarget;
    setStatus("Envoi en cours...");

    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus(
          result.message ?? "Impossible d'envoyer votre demande.",
        );
        return;
      }

      setStatus("Votre demande a bien été envoyée !");
      form.reset();
    } catch {
      setStatus(
        "Erreur de connexion. Veuillez réessayer plus tard.",
      );
    }
    finally {
      setIsSubmitting(false);
    }
  };


  const fieldClass =
    "mt-2 w-full border border-[#dcdedc] bg-white px-4 py-3.5 text-sm text-[#172b3a] outline-none transition-colors placeholder:text-[#9aa2a7] focus:border-[#b77920] focus:ring-1 focus:ring-[#b77920]";

  const labelClass =
    "block text-xs font-bold tracking-wide text-[#263844]";

  return (
    <section
      id="contact"
      className="bg-white px-[6%] py-20 md:px-[7%] md:py-28"
    >
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="min-w-0">
          <span className="text-[11px] font-extrabold tracking-[3px] text-[#a87527]">
            DONNONS VIE À VOTRE PROJET
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[#172b3a] sm:text-5xl lg:text-[52px]">
            Construisons quelque chose{" "}
            <span className="font-serif font-normal italic text-[#b77920]">
              de durable.
            </span>
          </h2>

          <p className="mt-6 max-w-[480px] text-sm leading-8 text-[#64717b] sm:text-base">
            Vous avez un projet de construction, de rénovation ou
            d&apos;architecture ? Parlons-en.
          </p>

          <div className="mt-10 space-y-7">
            <div className="border-l-2 border-[#c99a52] pl-5">
              <span className="block text-[10px] font-bold tracking-[2px] text-[#8a949b]">
                EMAIL
              </span>

              <a
                href="mailto:contact@novabat.example"
                className="mt-2 inline-block break-all text-sm font-semibold text-[#172b3a] transition-colors hover:text-[#a87527] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b77920]"
              >
                contact@novabat.example
              </a>
            </div>

            <div className="border-l-2 border-[#c99a52] pl-5">
              <span className="block text-[10px] font-bold tracking-[2px] text-[#8a949b]">
                DISPONIBILITÉ
              </span>

              <strong className="mt-2 block text-sm font-semibold text-[#172b3a]">
                Sur rendez-vous
              </strong>
            </div>
          </div>
        </div>

        <form
          className="min-w-0 border border-[#e8e4dc] bg-[#f7f6f2] p-6 sm:p-8 lg:p-10"
          onSubmit={handleSubmit}
        >
          <h3 className="text-2xl font-bold tracking-tight text-[#172b3a] sm:text-3xl">
            Parlons de votre projet
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#64717b]">
            Décrivez-nous votre besoin. Nous pourrons étudier ensemble
            la meilleure approche.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <label className={labelClass}>
              Nom complet *
              <input
                className={fieldClass}
                name="name"
                autoComplete="name"
                required
                minLength={2}
                maxLength={100}
              />
            </label>

            <label className={labelClass}>
              Adresse email *
              <input
                className={fieldClass}
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
              />
            </label>
          </div>

          <label className={`${labelClass} mt-5`}>
            Sujet *
            <select
              className={fieldClass}
              name="subject"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Choisissez un sujet
              </option>
              <option>Construction</option>
              <option>Architecture</option>
              <option>Rénovation</option>
              <option>Autre demande</option>
            </select>
          </label>

          <label className={`${labelClass} mt-5`}>
            Votre message *
            <textarea
              className={`${fieldClass} resize-y`}
              name="message"
              required
              minLength={10}
              maxLength={5000}
              rows={5}
              placeholder="Parlez-nous de votre projet..."
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 inline-flex min-h-[54px] w-full items-center justify-center gap-4 bg-[#172b3a] px-6 text-xs font-bold text-white transition-colors duration-300 hover:bg-[#b77920] hover:text-[#0d1c27] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b77920] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
            {!isSubmitting && <span aria-hidden="true">↗</span>}
          </button>

          {status && (
            <p
              role="status"
              className="mt-4 border-l-2 border-[#b77920] bg-white p-4 text-sm leading-6 text-[#43515b]"
            >
              {status}
            </p>
          )}

          <small className="mt-5 block text-xs leading-5 text-[#7b858c]">
            Les champs marqués d&apos;un * sont obligatoires.
          </small>
        </form>
      </div>
    </section>
  );
}
