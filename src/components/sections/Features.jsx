// Sección de características. Usamos un arreglo y lo recorremos con .map()
function Features() {
  // Datos de cada característica (fácil de editar o traer de una API después)
  const caracteristicas = [
    {
      titulo: "Rápido",
      descripcion: "Construido con Vite para una carga veloz.",
      icono: "⚡",
    },
    {
      titulo: "Responsive",
      descripcion: "Se ve bien en celular, tablet y computador.",
      icono: "📱",
    },
    {
      titulo: "Fácil de mantener",
      descripcion: "Componentes separados y organizados por carpetas.",
      icono: "🧩",
    },
  ];

  return (
    <section id="caracteristicas" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Características
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {caracteristicas.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-100 shadow-sm text-center"
            >
              <div className="text-4xl mb-4">{item.icono}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.titulo}
              </h3>
              <p className="text-gray-600">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
