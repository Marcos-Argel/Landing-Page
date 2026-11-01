// Título para el encabezado de cada sección, para que todas se vean iguales.
// - subtitulo: texto pequeño arriba (opcional)
// - titulo: el título principal
// - descripcion: párrafo debajo (opcional)
// - align: "center" (por defecto) o "left"
function SectionTitle({ subtitulo, titulo, descripcion, align = "center" }) {
  const alineacion = align === "left" ? "text-left" : "text-center mx-auto";

  return (
    <div className={`max-w-2xl mb-12 ${alineacion}`}>
      {subtitulo && (
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600 mb-2">
          {subtitulo}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{titulo}</h2>
      {descripcion && (
        <p className="mt-4 text-lg text-gray-600">{descripcion}</p>
      )}
    </div>
  );
}

export default SectionTitle;
