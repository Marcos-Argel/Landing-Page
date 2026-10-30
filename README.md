# Landing Page — Proyecto base

Proyecto base hecho con **React + Vite + Tailwind CSS**.
Listo para que todo el equipo lo clone y empiece a trabajar.

## Requisitos

- [Node.js](https://nodejs.org/) versión 18 o superior
- npm (viene con Node)

## Cómo correr el proyecto

```bash
# 1. Clonar el repositorio
git clone <URL-DEL-REPO>
cd landing-page

# 2. Instalar dependencias
npm install

# 3. Correr en modo desarrollo
npm run dev
```

Luego abre en el navegador la dirección que aparece (por defecto http://localhost:5173).

## Scripts disponibles

| Comando           | Qué hace                                         |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Inicia el servidor de desarrollo                 |
| `npm run build`   | Genera la versión para producción (carpeta dist) |
| `npm run preview` | Previsualiza el build de producción              |
| `npm run lint`    | Revisa el código con el linter                   |

## Estructura de carpetas

```
landing-page/
├── public/                 # Archivos estáticos (favicon, imágenes públicas)
├── src/
│   ├── assets/             # Imágenes y recursos usados en el código
│   ├── components/
│   │   ├── layout/         # Navbar, Footer (estructura general)
│   │   ├── sections/       # Hero, Features, Contact (secciones de la landing)
│   │   └── ui/             # Componentes reutilizables (Button, etc.)
│   ├── hooks/              # Custom hooks (lógica reutilizable)
│   ├── pages/              # Páginas (Home junta las secciones)
│   ├── utils/              # Funciones auxiliares
│   ├── App.jsx             # Componente raíz
│   ├── main.jsx            # Punto de entrada de la app
│   └── index.css           # Estilos globales + import de Tailwind
├── index.html
├── vite.config.js          # Configuración de Vite + plugin de Tailwind
└── package.json
```

## Convenciones del equipo

- Cada sección de la landing va en `src/components/sections/`.
- Los componentes que se reutilizan (botones, inputs, cards) van en `src/components/ui/`.
- Un componente por archivo, con el mismo nombre del archivo (ej: `Hero.jsx` → `function Hero`).
- Los estilos se hacen con clases de Tailwind directamente en el JSX.

## Tecnologías

- React 19
- Vite 8
- Tailwind CSS 4

<!-- Setup inicial del proyecto base - [Luis Vergara] -->
