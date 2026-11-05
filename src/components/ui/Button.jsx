// Botón reutilizable. Recibe el texto (children), un estilo (variant) y un onClick.
function Button({ children, variant = "primary", onClick }) {
  // Estilos base que comparten todos los botones
  const base =
    "px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer";

  // Estilos según el tipo de botón
  const variants = {
    primary: "bg-violet-700 text-white hover:bg-violet-800",
    secondary: "bg-white text-violet-700 border border-violet-700 hover:bg-violet-50",
  };

  return (
    <button className={`${base} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
