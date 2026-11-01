// Botón reutilizable.
// - children: el texto del botón
// - variant: "primary" (relleno) o "secondary" (borde)
// - href: si se pasa, se dibuja como enlace (ej: href="#contacto")
// - onClick, type y className son opcionales
function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type,
  className = "",
}) {
  // Estilos base que comparten todos los botones
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer";

  // Estilos según el tipo de botón
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary:
      "bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50",
  };

  const clases = `${base} ${variants[variant] ?? variants.primary} ${className}`;

  // Con href se comporta como enlace, sin href como botón normal
  if (href) {
    return (
      <a href={href} className={clases} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={clases} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
