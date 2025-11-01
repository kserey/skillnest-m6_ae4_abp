const express = require('express');
const { engine } = require('express-handlebars');
const { url } = require('inspector');
const path = require('path');
const app = express();
const port = 3000;

// ==== CONTENIDO DINÁMICO ====
const aboutData = {
    experienciaLaboral: [
        { id: 1,
            empresa: "Compad SPA",
            cargo: "Consultora en Transformación Digital",
            periodo: "May 2025 - Presente",
            logros: ["Colaboro con equipos multidisciplinarios para implementar soluciones tecnológicas que optimicen procesos y fortalezcan la inteligencia empresarial.","Gestiono proyectos utilizando metodologías ágiles como Kanban, asegurando una entrega eficiente y alineada con los objetivos organizacionales.","Aplico mis habilidades en informática para desarrollar herramientas que mejoren la toma de decisiones basadas en datos.","Impulso la innovación tecnológica dentro de la empresa, promoviendo el uso estratégico de la tecnología para resolver retos empresariales complejos.","Genero alianzas estratégicas con socios tecnológicos para potenciar las capacidades digitales de la organización."]
        },
        { id: 2,
            empresa: "Sourcing SpA",
            cargo: "Gerente Operaciones Digitales Corporativas",
            periodo: "Mar 2023 - Dic 2023",
            logros: ["Gestioné proyectos digitales para el grupo, coordinando con clientes internos, externos y proveedores.","Dirigí el equipo de desarrollo inhouse utilizando metodologías ágiles adaptadas a cada equipo.","Destacados proyectos en Machine Learning e IoT para Coca-Cola y Codelco.","Administré todos los aspectos de la empresa, desde la apertura de nuevos mercados hasta la generación de alianzas estratégicas.","Diseñé e implementé soluciones tecnológicas para la Gestión de Terceros en todo su ciclo de vida, incluyendo hitos claves como la acreditación del personal y la generación de estados de pago.","Optimicé procesos operativos y tecnológicos, generando utilidades de $220.000 USD en el último año."]
        },
        { id: 3,
            empresa: "Check Digital – Grupo Sourcing",
            cargo: "Gerente General",
            periodo: "Ene 2019 - Feb 2023",
            logros: ["Lideré el proyecto de Control Laboral, formando un equipo de verificación, capacitando a clientes y usuarios internos, y desarrollando el SaaS Check Digital para el Control de Terceros.","Consolidé el servicio de Check Laboral implementando protocolos y procedimientos, generando manuales de verificación y material de apoyo interno.","Diseñé un modelo de implementación del servicio para nuevos clientes."]
        },
        { id: 4,
            empresa: "Sourcing SpA",
            cargo: "Jefe de Proyectos",
            periodo: "Jul 2018 - Dic 2018",
            logros: ["Integré las necesidades del cliente con las áreas de Informática y Operaciones.","Realicé revisiones finales de informes, pruebas de nuevos desarrollos y consultas SQL.","Implementé mejoras continuas, reduciendo el tiempo de implementación de nuevas empresas de 30 a 21 días."]
        },
        { id: 5,
            empresa: "Top Partners S.A. (SubcontrataLey)",
            cargo: "Jefe de Verificación y Mesa de Ayuda",
            periodo: "Dic 2016 - Sep 2017",
            logros: ["Integré las necesidades del cliente con las áreas de Informática y Operaciones.","Realicé revisiones finales de informes, pruebas de nuevos desarrollos y consultas SQL.","Implementé mejoras continuas, reduciendo el tiempo de implementación de nuevas empresas de 30 a 21 días."]
        }
    ]
};


const portfolioData = {
    nombre: "Irina Serey",
    descripcion: "Ingeniera Industrial, Consultora en Transformación Digital, Data Scientist, Desarrolladora Full Stack Python y JavaScript.",
    proyectos: [
        { id: 1, 
            nombre: "Rediseño Web Compad SPA", 
            tecnologia: "HTML5, CSS3, JavaScript (ES6), Bootstrap 5", 
            descripcion_corta: "Rediseño completo del sitio web corporativo de Compad SPA como una single page moderna y responsiva.", 
            descripcion_larga: "Migración de una estructura anticuada a una plataforma escalable. Incluye la renderización dinámica de Servicios (desde un array JS con pestañas interactivas) y Carruseles de Casos de Éxito, asegurando un diseño moderno y modular para facilitar el mantenimiento futuro. Se implementaron prácticas de SEO y optimización de rendimiento para mejorar la visibilidad en motores de búsqueda y la experiencia del usuario. El sitio es completamente responsivo, garantizando una experiencia óptima en dispositivos móviles y de escritorio.", 
            url: "https://www.compad.cl/" },
        { id: 2, 
            nombre: "Proyecto2", 
            tecnologia: "techs2", 
            descripcion_corta: "descripción corta2", 
            descripcion_larga: "descripción larga2" },
        { id: 3, 
            nombre: "Proyecto3", 
            tecnologia: "techs3", 
            descripcion_corta: "descripción corta3", 
            descripcion_larga: "descripción larga3" }
    ]
};



// --- HANDLEBARS ---
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials'),
    // --- HELPER PERSONALIZADO ---
    helpers: {
        getCurrentYear: () => {
            return new Date().getFullYear(); // DEVUELVE EL AÑO ACTUAL PARA EL FOOTER
        }
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));



app.use(express.static(path.join(__dirname, 'public')));



// ==== ROUTERS ====

// ==== RUTA PRINCIPAL (home.hbs) ====
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Inicio - Mi Portafolio',
        ...portfolioData,
        activeHome: true
    });
});

// RUTA /about (about.hbs)
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Sobre Mí',
        nombre: portfolioData.nombre,
        historia: 'Como Consultora en Transformación Digital en Compad, colaboro con equipos multidisciplinarios para implementar soluciones tecnológicas que optimicen procesos y fortalezcan la inteligencia empresarial. Mis habilidades en Kanban y herramientas de informática me permiten gestionar proyectos de manera eficiente y asegurar resultados alineados con los objetivos organizacionales. Cuento con más de 10 años de experiencia en gestión de proyectos y optimización de procesos en entornos tecnológicos. Me motiva impulsar la innovación y fomentar el uso estratégico de la tecnología para resolver retos empresariales complejos, siempre guiada por un enfoque en la mejora continua y el aprendizaje constante.',
        activeAbout: true,
        experiencias: aboutData.experienciaLaboral
    });
});

// RUTA /projects (projects.hbs)
app.get('/projects', (req, res) => {
    res.render('projects', {
        title: 'Mis Proyectos',
        nombre: portfolioData.nombre,
        proyectos: portfolioData.proyectos,
        activeProjects: true
    });
});

// MANEJO DE ERRORES 404
app.use((req, res, next) => {
    res.status(404).render('404', {
        title: 'Página No Encontrada',
        nombre: portfolioData.nombre,
        message: 'Lo sentimos, la página que estás buscando no existe.'
    });
});


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});