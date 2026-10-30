// Botón reutilizable. Recibe el texto (children), un estilo (variant) y un onClick.
function Button({ children, variant = "primary", onClick }) {
  // Estilos base que comparten todos los botones
  const base =
    "px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer";

  // Estilos según el tipo de botón
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50",
  };

  return (
    <button className={`${base} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
