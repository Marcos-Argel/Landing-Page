import siteConfig from "../../data/siteConfig";

// El número se cambia en src/data/siteConfig.js (lo usa también el Footer)
const WHATSAPP_PHONE = siteConfig.contacto.whatsapp;

function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
      title="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-slate-900/20 transition duration-200 hover:scale-105 hover:bg-[#1ebe5d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#128C7E] sm:bottom-7 sm:right-7 sm:size-16"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="size-8"
      >
        <path d="M16.04 3C8.88 3 3.05 8.82 3.05 15.98c0 2.29.6 4.52 1.75 6.5L3 29l6.68-1.75a12.97 12.97 0 0 0 6.36 1.66h.01c7.16 0 12.99-5.82 13-12.98A12.91 12.91 0 0 0 25.24 6.7 12.9 12.9 0 0 0 16.04 3Zm0 23.72h-.01c-1.98 0-3.92-.53-5.61-1.54l-.4-.24-3.96 1.04 1.06-3.86-.26-.4a10.73 10.73 0 0 1-1.65-5.74c0-5.97 4.86-10.82 10.84-10.82a10.76 10.76 0 0 1 7.66 3.17 10.76 10.76 0 0 1 3.17 7.67c0 5.97-4.86 10.82-10.84 10.82Zm5.95-8.1c-.33-.16-1.94-.96-2.24-1.07-.3-.11-.52-.16-.74.16-.22.33-.85 1.07-1.04 1.29-.19.22-.38.25-.71.08-.33-.16-1.4-.52-2.66-1.65-.98-.87-1.64-1.95-1.83-2.28-.19-.33-.02-.5.14-.66.15-.15.33-.38.49-.57.16-.19.22-.33.33-.54.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.43-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.15 1.12-1.15 2.73s1.18 3.17 1.34 3.39c.16.22 2.32 3.55 5.62 4.97.78.34 1.39.54 1.86.69.78.25 1.49.21 2.05.13.63-.1 1.94-.79 2.21-1.56.27-.77.27-1.42.19-1.56-.08-.14-.3-.22-.63-.38Z" />
      </svg>
    </a>
  );
}

export default WhatsAppButton;
