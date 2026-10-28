
const testimonials = [
  {
    quote:
      "Une équipe attentive, organisée et exigeante. Le résultat correspond parfaitement à notre vision.",
    name: "Sophie M.",
    role: "Projet résidentiel — exemple fictif",
  },
  {
    quote:
      "Un accompagnement clair à chaque étape, avec une vraie attention portée aux finitions.",
    name: "Karim B.",
    role: "Projet de rénovation — exemple fictif",
  },
  {
    quote:
      "Une approche professionnelle et des solutions adaptées à nos besoins.",
    name: "Nadia R.",
    role: "Projet d'aménagement — exemple fictif",
  },
];

export default function Testimonials() {
  return (
    <section
      id="temoignages"
      className="bg-[#f7f6f2] px-[6%] py-20 md:px-[7%] md:py-28"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-12 max-w-[780px] md:mb-14">
          <span className="text-[11px] font-extrabold tracking-[3px] text-[#a87527]">
            ILS NOUS FONT CONFIANCE
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[#172b3a] sm:text-5xl lg:text-[52px]">
            Une relation construite sur{" "}
            <span className="font-serif font-normal italic text-[#b77920]">
              la confiance.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((item, index) => (
            <article
              key={item.name}
              className="group flex min-h-[300px] flex-col border border-[#e8e4dc] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#c99a52]/60 hover:shadow-[0_18px_45px_rgba(23,43,58,0.08)] md:p-8"
            >
              <div className="flex items-start justify-between">
                <span
                  aria-hidden="true"
                  className="font-serif text-6xl leading-none text-[#c99a52]"
                >
                  “
                </span>

                <span className="text-[11px] font-bold tracking-widest text-[#b6bdc1]">
                  0{index + 1}
                </span>
              </div>

              <blockquote className="mt-5 flex-1 text-base leading-8 text-[#43515b]">
                {item.quote}
              </blockquote>

              <div className="mt-7 border-t border-[#e8e4dc] pt-5">
                <strong className="block text-sm font-bold text-[#172b3a]">
                  {item.name}
                </strong>

                <span className="mt-2 block text-xs leading-5 text-[#7b858c]">
                  {item.role}
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs leading-6 text-[#7b858c]">
          Les témoignages présentés sont des exemples fictifs destinés à
          illustrer la présentation du site.
        </p>
      </div>
    </section>
  );
}
