import { useState } from "react";

const preguntas = [
  {
    pregunta: "¿Qué ofrece este proyecto?",
    respuesta:
      "Aquí puedes explicar de forma breve el servicio, producto o propósito principal de la landing page.",
  },
  {
    pregunta: "¿Cómo puedo obtener más información?",
    respuesta:
      "Escríbenos desde el formulario de contacto y el equipo podrá orientarte cuando el canal de atención esté configurado.",
  },
  {
    pregunta: "¿En qué dispositivos puedo usarlo?",
    respuesta:
      "La página está diseñada para adaptarse a celulares, tabletas y computadores.",
  },
  {
    pregunta: "¿Cómo puedo contactar al equipo?",
    respuesta:
      "Puedes utilizar el formulario de contacto o el acceso a WhatsApp una vez que se hayan configurado sus datos.",
  },
];

function FAQ() {
  const [preguntaAbierta, setPreguntaAbierta] = useState(null);

  function alternarPregunta(indice) {
    setPreguntaAbierta((actual) => (actual === indice ? null : indice));
  }

  return (
    <section
      id="preguntas-frecuentes"
      className="scroll-mt-24 bg-violet-50/70 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">
            Resolvemos tus dudas
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="divide-y divide-violet-100 overflow-hidden rounded-2xl border border-violet-100 bg-white px-5 shadow-sm sm:px-7">
          {preguntas.map((item, indice) => {
            const estaAbierta = preguntaAbierta === indice;
            const botonId = `pregunta-${indice + 1}`;
            const respuestaId = `respuesta-${indice + 1}`;

            return (
              <div key={item.pregunta}>
                <h3>
                  <button
                    id={botonId}
                    type="button"
                    aria-expanded={estaAbierta}
                    aria-controls={respuestaId}
                    onClick={() => alternarPregunta(indice)}
                    className="flex w-full items-center justify-between gap-5 py-5 text-left text-base font-semibold text-slate-900 transition-colors hover:text-violet-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600 sm:text-lg"
                  >
                    {item.pregunta}
                    <span
                      aria-hidden="true"
                      className="flex size-8 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xl leading-none text-violet-700"
                    >
                      {estaAbierta ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={respuestaId}
                  role="region"
                  aria-labelledby={botonId}
                  hidden={!estaAbierta}
                  className="pb-5 pr-10 leading-7 text-slate-600"
                >
                  {item.respuesta}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
