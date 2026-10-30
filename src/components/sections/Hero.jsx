import Button from "../ui/Button";

// Sección principal (lo primero que ve el usuario)
function Hero() {
  return (
    <section
      id="inicio"
      className="bg-gradient-to-b from-indigo-50 to-white py-24"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          El título principal de tu landing
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Una frase corta que explica de qué trata el proyecto y por qué le
          interesa a quien lo visita.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="primary">Empezar</Button>
          <Button variant="secondary">Saber más</Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
