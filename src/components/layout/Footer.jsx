// Pie de página
function Footer() {
  // Año actual para el copyright
  const anio = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p>© {anio} MiProyecto — Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
