import projects from "../../data/projects";

function ProjectGallery() {
  return (
    <section
      id="portafolio"
      aria-labelledby="portafolio-title"
      className="bg-gray-50 px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Nuestro trabajo
          </p>
          <h2
            id="portafolio-title"
            className="text-3xl font-bold text-gray-900 md:text-4xl"
          >
            Proyectos realizados
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Una selección de proyectos para mostrar lo que podemos crear.
          </p>
          <p className="mx-auto mt-3 inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-800">
            Ejemplos provisionales: reemplázalos por los proyectos reales del equipo.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden bg-indigo-100">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <p className="mb-2 text-sm font-semibold text-indigo-600">
                  {project.category}
                </p>
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.name}
                </h3>
                <p className="mt-3 leading-relaxed text-gray-600">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectGallery;
