import { useState } from "react";

const initialFormData = {
  nombre: "",
  correo: "",
  asunto: "",
  mensaje: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [errores, setErrores] = useState({});
  const [estado, setEstado] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((actual) => ({ ...actual, [name]: value }));
    setErrores((actuales) => {
      if (!actuales[name]) return actuales;
      const siguientes = { ...actuales };
      delete siguientes[name];
      return siguientes;
    });
    setEstado("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nuevosErrores = {};
    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = "Escribe tu nombre completo.";
    }
    if (!formData.correo.trim()) {
      nuevosErrores.correo = "Escribe tu correo electrónico.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo.trim())) {
      nuevosErrores.correo = "Ingresa un correo electrónico válido.";
    }
    if (!formData.asunto.trim()) {
      nuevosErrores.asunto = "Escribe el asunto de tu mensaje.";
    }
    if (!formData.mensaje.trim()) {
      nuevosErrores.mensaje = "Escribe un mensaje.";
    }

    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) {
      setEstado("Revisa los campos señalados antes de continuar.");
      return;
    }

    setEstado(
      "Tus datos están completos, pero el formulario aún no está conectado a un servicio de envío.",
    );
  }

  function inputClass(name) {
    return `w-full rounded-xl border bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 ${
      errores[name] ? "border-red-400" : "border-slate-200"
    }`;
  }

  return (
    <section
      id="contacto"
      className="scroll-mt-24 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">
            Estamos para escucharte
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Hablemos de tu próximo proyecto
          </h2>
          <p className="mt-5 max-w-lg leading-7 text-slate-600">
            Cuéntanos qué necesitas. Completa el formulario y, cuando se
            conecte un servicio de envío, podremos recibir tu mensaje.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl border border-violet-100 bg-violet-50/50 p-6 shadow-sm sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="contacto-nombre"
                className="mb-2 block text-sm font-medium text-slate-800"
              >
                Nombre completo
              </label>
              <input
                id="contacto-nombre"
                name="nombre"
                type="text"
                autoComplete="name"
                value={formData.nombre}
                onChange={handleChange}
                aria-invalid={Boolean(errores.nombre)}
                aria-describedby={errores.nombre ? "error-nombre" : undefined}
                className={inputClass("nombre")}
                placeholder="Tu nombre"
              />
              {errores.nombre && (
                <p id="error-nombre" className="mt-2 text-sm text-red-700">
                  {errores.nombre}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="contacto-correo"
                className="mb-2 block text-sm font-medium text-slate-800"
              >
                Correo electrónico
              </label>
              <input
                id="contacto-correo"
                name="correo"
                type="email"
                autoComplete="email"
                value={formData.correo}
                onChange={handleChange}
                aria-invalid={Boolean(errores.correo)}
                aria-describedby={errores.correo ? "error-correo" : undefined}
                className={inputClass("correo")}
                placeholder="tu@correo.com"
              />
              {errores.correo && (
                <p id="error-correo" className="mt-2 text-sm text-red-700">
                  {errores.correo}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="contacto-asunto"
                className="mb-2 block text-sm font-medium text-slate-800"
              >
                Asunto
              </label>
              <input
                id="contacto-asunto"
                name="asunto"
                type="text"
                value={formData.asunto}
                onChange={handleChange}
                aria-invalid={Boolean(errores.asunto)}
                aria-describedby={errores.asunto ? "error-asunto" : undefined}
                className={inputClass("asunto")}
                placeholder="¿Sobre qué quieres hablar?"
              />
              {errores.asunto && (
                <p id="error-asunto" className="mt-2 text-sm text-red-700">
                  {errores.asunto}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="contacto-mensaje"
                className="mb-2 block text-sm font-medium text-slate-800"
              >
                Mensaje
              </label>
              <textarea
                id="contacto-mensaje"
                name="mensaje"
                rows="5"
                value={formData.mensaje}
                onChange={handleChange}
                aria-invalid={Boolean(errores.mensaje)}
                aria-describedby={
                  errores.mensaje ? "error-mensaje" : undefined
                }
                className={`${inputClass("mensaje")} resize-y`}
                placeholder="Escribe los detalles de tu consulta..."
              />
              {errores.mensaje && (
                <p id="error-mensaje" className="mt-2 text-sm text-red-700">
                  {errores.mensaje}
                </p>
              )}
            </div>
          </div>

          {estado && (
            <p
              role="status"
              aria-live="polite"
              className="mt-5 text-sm leading-6 text-slate-700"
            >
              {estado}
            </p>
          )}

          <button
            type="submit"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-violet-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-violet-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700 sm:w-auto"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
