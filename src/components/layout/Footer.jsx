import navLinks from "../../data/navLinks";
import siteConfig from "../../data/siteConfig";

// Año actual para el copyright (se calcula una sola vez al cargar)
const anio = new Date().getFullYear();

// Pie de página: marca, enlaces, contacto y redes sociales.
function Footer() {
  const { contacto } = siteConfig;

  // Solo mostramos las redes que tengan url
  const redes = siteConfig.redes.filter((red) => red.url);

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        {/* Marca */}
        <div>
          <a href="#inicio" className="text-xl font-bold text-white">
            {siteConfig.nombre}
          </a>
          <p className="mt-3 text-gray-400">{siteConfig.eslogan}</p>
        </div>

        {/* Enlaces */}
        <div>
          <h3 className="text-white font-semibold mb-4">Enlaces</h3>
          <ul className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto y redes */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contacto</h3>
          <ul className="space-y-2">
            <li>
              <a href={`mailto:${contacto.email}`} className="hover:text-white">
                {contacto.email}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${contacto.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {contacto.telefono}
              </a>
            </li>
            <li>{contacto.ciudad}</li>
          </ul>

          {redes.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {redes.map((red) => (
                <a
                  key={red.nombre}
                  href={red.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full border border-gray-700 text-sm hover:border-indigo-400 hover:text-white transition-colors"
                >
                  {red.nombre}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Línea final */}
      <div className="border-t border-gray-800">
        <p className="max-w-6xl mx-auto px-6 py-5 text-sm text-gray-500 text-center">
          © {anio} {siteConfig.nombre} — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
