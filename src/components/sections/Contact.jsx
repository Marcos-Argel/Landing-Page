import Button from "../ui/Button";

// Sección de contacto con un formulario simple
function Contact() {
  // Se ejecuta cuando se envía el formulario
  function handleSubmit(e) {
    e.preventDefault(); // evita que la página se recargue
    alert("¡Formulario enviado! (aquí irá la lógica real)");
  }

  return (
    <section id="contacto" className="py-20 bg-indigo-50">
      <div className="max-w-md mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Contáctanos
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Tu nombre"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-600"
            required
          />
          <input
            type="email"
            placeholder="Tu correo"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-600"
            required
          />
          <textarea
            placeholder="Tu mensaje"
            rows="4"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-600"
            required
          ></textarea>
          <Button variant="primary">Enviar</Button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
