// Datos generales del sitio.
// Cambia aquí el nombre, el contacto y las redes: el Navbar y el Footer
// los leen de este archivo, así no hay que tocar los componentes.
const siteConfig = {
  nombre: "MiProyecto",
  eslogan: "Creamos páginas web y soluciones digitales para hacer crecer tu negocio.",

  contacto: {
    email: "contacto@miproyecto.com",
    telefono: "+57 300 000 0000",
    // Número de WhatsApp solo con dígitos (código de país + número)
    whatsapp: "573000000000",
    ciudad: "Apartadó, Antioquia",
  },

  // Deja la url vacía ("") para ocultar una red
  redes: [
    { nombre: "Instagram", url: "https://instagram.com/" },
    { nombre: "Facebook", url: "https://facebook.com/" },
    { nombre: "LinkedIn", url: "https://linkedin.com/" },
  ],
};

export default siteConfig;
