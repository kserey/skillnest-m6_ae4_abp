# 🚀 Portafolio Personal (M6_AE4_ABP)

Este repositorio contiene la solución para el **Ejercicio Individual M6_AE4_ABP** del Bootcamp Full Stack de Skillnest.

El proyecto es una aplicación web simple desarrollada con **Express.js** que sirve un portafolio personal utilizando **Handlebars (HBS)** como motor de plantillas y **Bootstrap 5** para el diseño responsivo.

## ✨ Características y Soluciones Implementadas

Este proyecto cumple con todos los requisitos del ejercicio, incluyendo buenas prácticas de desarrollo *frontend* y *backend*:

1.  **Backend Minimalista:** Servidor configurado con **Express.js** en `index.js`.
2.  **Motor de Plantillas:** Uso de **Handlebars** para renderizar contenido dinámico (`.hbs`).
3.  **Contenido Dinámico:**
    * Los datos del usuario (`nombre`, `descripcion`) y los proyectos se gestionan desde un arreglo JavaScript (`portfolioData` en `index.js`).
    * La experiencia laboral se gestiona en un objeto (`aboutData`) y se renderiza en la página `/about`.
4.  **Estructura de Vistas Modular:**
    * Uso de **Layouts** (`main.hbs`) para la estructura base.
    * Uso de **Parciales** (`header.hbs`, `footer.hbs`) para elementos reutilizables en todas las páginas.
5.  **Rutas Definidas:**
    * `/` (Home): Introducción personal y proyectos destacados.
    * `/about`: Historia personal y experiencia laboral detallada.
    * `/projects`: Lista completa de proyectos.
    * **Manejo de Error 404:** Implementado para rutas no existentes.
6.  **Estilizado Rápido y Profesional:**
    * Integración de **Bootstrap 5.3** y **Bootstrap Icons** vía CDN.
    * Uso de componentes de Bootstrap como **Cards** (proyectos) y **Acordeón** (experiencia laboral) para una presentación estética y responsiva.
7.  **Helper Personalizado:** Se creó el *helper* `{{getCurrentYear}}` en Handlebars para mostrar el año actual dinámicamente en el footer.
8.  **Responsive Design (Sticky Footer):** Implementada la técnica de Flexbox en el layout (`d-flex flex-column min-vh-100`) para asegurar que el footer permanezca al final de la pantalla cuando el contenido es corto.

## 🛠️ Tecnologías Utilizadas

* **Node.js / Express.js:** Backend del servidor.
* **Handlebars (HBS):** Motor de plantillas.
* **Bootstrap 5.3:** Framework de CSS/JS para estilos y componentes.
* **HTML5 / CSS3 / JavaScript (ES6):** Estándares web.

## 📂 Estructura del Proyecto
├── node_modules/ # (Ignorada por .gitignore) 
├── public/ 
│ ├── css/ 
│ │ └── styles.css
│ └── img/ 
│ │ └── fotoPerfil.png 
├── views/ 
│ ├── layouts/ 
│ │ └── main.hbs # Layout principal
│ └── partials/ 
│ │ ├── footer.hbs # Footer 
│ │ └── header.hbs # Navbar 
│ ├── 404.hbs # Página de error 
│ ├── about.hbs # Vista "Sobre Mí" con experiencia (Acordeón) 
│ ├── home.hbs # Vista principal (Intro con Foto) 
│ ├── projects.hbs # Vista de proyectos detallada 
└── .gitignore
└── index.js # Servidor Express, Rutas y Configuración 
└── package.json 
└── package-lock.json 


## 🚀 Puesta en Marcha

Para ejecutar este proyecto localmente, sigue estos pasos:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/nombre-del-repo.git](https://github.com/tu-usuario/nombre-del-repo.git)
    cd nombre-del-repo
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Ejecutar el servidor:**
    ```bash
    node index.js
    ```
4.  Abre tu navegador y navega a: `http://localhost:3000/`
