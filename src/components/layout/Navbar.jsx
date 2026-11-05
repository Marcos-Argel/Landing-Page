import { useState } from "react";
import Button from "../ui/Button";
import navLinks from "../../data/navLinks";
import siteConfig from "../../data/siteConfig";

// Barra de navegación superior, fija al hacer scroll.
// En celular los enlaces se esconden detrás de un botón de menú.
function Navbar() {
  // true = menú del celular abierto
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Al tocar un enlace en el celular, cerramos el menú
  function cerrarMenu() {
    setMenuAbierto(false);
  }

  return (
    <nav className="w-full bg-white/95 backdrop-blur shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / nombre del proyecto */}
        <a href="#inicio" className="text-xl font-bold text-indigo-600">
          {siteConfig.nombre}
        </a>

        {/* Enlaces en computador */}
        <ul className="hidden lg:flex gap-6 text-gray-600 font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-indigo-600 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón de acción en computador */}
        <div className="hidden lg:block">
          <Button href="#contacto">Cotiza ya</Button>
        </div>

        {/* Botón hamburguesa (solo celular y tablet) */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
          aria-controls="menu-movil"
        >
          {menuAbierto ? (
            // Ícono X
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            // Ícono de tres rayas
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menú desplegable del celular */}
      {menuAbierto && (
        <div id="menu-movil" className="lg:hidden border-t border-gray-100 bg-white">
          <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={cerrarMenu}
                  className="block py-2 hover:text-indigo-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button href="#contacto" onClick={cerrarMenu} className="w-full">
                Cotiza ya
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
