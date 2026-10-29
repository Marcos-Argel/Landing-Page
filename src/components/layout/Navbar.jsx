// Barra de navegación superior
function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / nombre del proyecto */}
        <span className="text-xl font-bold text-indigo-600">MiProyecto</span>

        {/* Links de navegación */}
        <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
          <li><a href="#inicio" className="hover:text-indigo-600">Inicio</a></li>
          <li><a href="#caracteristicas" className="hover:text-indigo-600">Características</a></li>
          <li><a href="#contacto" className="hover:text-indigo-600">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
