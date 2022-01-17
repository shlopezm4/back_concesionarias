const swaggerJSDoc = require("swagger-jsdoc");
const json = require("./swagger.utils");

const cfg = require("../../configs");

const environments = require("../../entorno.js");
environments.verifyEnvironment();

const port = process.env.SWAGGER_PORT ? process.env.SWAGGER_PORT : cfg.port;
const name = process.env.SWAGGER_NAME
  ? process.env.SWAGGER_NAME
  : "Se debe modificar el nombre del proyecto en swagger.config.js";

// Inicio - Configuraciones pertinentes a SwaggerJSDoc
const swaggerDefinition = {
  info: {
    // Información de API (requerida)
    title: `API - ${name}`, // Título (requerido)
    version: "1.0.0", // Versión (requerida)
    description: `Documentación de API ${name}`, // Descripción (Opcional)
  },
  host: cfg.host + `:` + parseInt(port), // Host (Opcional)
  basePath: cfg.basePath, // Base path (Opcional)
  schemes: ["http", "https"],
};

// Opciones de Swagger
const options = {
  // Importando swaggerDefinitions
  swaggerDefinition,
  // Path de los lugares donde serán documentadas las API (routes)
  // Tenga en cuenta que esta ruta es relativa al directorio actual desde el que se ejecuta Node.js, no la aplicación en sí.
  apis: [
    "./routes/**/*.js",
    "./swagger/definitions/*.definitions.yaml",
    "./swagger/parameters/*.parameters.yaml",
  ],
};

// Inicializar swagger-jsdoc -> Devuelve especificaciones de swagger validadas en formato json
const swaggerSpec = swaggerJSDoc(options);

// Fin - Configuraciones pertinentes a SwaggerJSDoc
function init() {
  json.saveJSON(JSON.stringify(swaggerSpec));
}
module.exports.init = init;
