// Tarjeta reutilizable (servicios, planes, testimonios, etc.).
// - icono: emoji o elemento que va arriba (opcional)
// - titulo: título de la tarjeta (opcional)
// - children: el contenido de la tarjeta
// - className: clases extra si necesitas ajustar algo
function Card({ icono, titulo, children, className = "" }) {
  return (
    <div
      className={`p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      {icono && <div className="text-4xl mb-4">{icono}</div>}
      {titulo && (
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{titulo}</h3>
      )}
      <div className="text-gray-600">{children}</div>
    </div>
  );
}

export default Card;
