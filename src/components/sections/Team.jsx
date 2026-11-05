const integrantes = [
  {
    nombre: "Integrante 1",
    rol: "Rol por definir",
    descripcion:
      "Agrega aquí una breve presentación y el aporte de esta persona al proyecto.",
    fotografia: "",
  },
  {
    nombre: "Integrante 2",
    rol: "Rol por definir",
    descripcion:
      "Agrega aquí una breve presentación y el aporte de esta persona al proyecto.",
    fotografia: "",
  },
  {
    nombre: "Integrante 3",
    rol: "Rol por definir",
    descripcion:
      "Agrega aquí una breve presentación y el aporte de esta persona al proyecto.",
    fotografia: "",
  },
];

function getInitials(nombre) {
  return nombre
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0])
    .join("")
    .toUpperCase();
}

function Team() {
  return (
    <section id="equipo" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">
            Las personas detrás de la idea
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Nuestro equipo
          </h2>
          <p className="mt-4 text-slate-600">
            Un equipo comprometido con crear una experiencia útil y cercana.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {integrantes.map((integrante) => (
            <article
              key={integrante.nombre}
              className="overflow-hidden rounded-2xl border border-violet-100 bg-white p-6 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-900/10"
            >
              {integrante.fotografia ? (
                <img
                  src={integrante.fotografia}
                  alt={`Fotografía de ${integrante.nombre}`}
                  className="mx-auto mb-5 size-28 rounded-full object-cover ring-4 ring-violet-100"
                />
              ) : (
                <div
                  aria-label={`Avatar provisional de ${integrante.nombre}`}
                  className="mx-auto mb-5 flex size-28 items-center justify-center rounded-full bg-gradient-to-br from-violet-200 to-fuchsia-100 text-3xl font-bold text-violet-800 ring-4 ring-violet-50"
                  role="img"
                >
                  {getInitials(integrante.nombre)}
                </div>
              )}
              <h3 className="text-xl font-semibold text-slate-900">
                {integrante.nombre}
              </h3>
              <p className="mt-1 font-medium text-violet-700">{integrante.rol}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {integrante.descripcion}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
