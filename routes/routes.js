var express = require("express");
var cf = require("../configs");

var swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("../swagger/swagger.json");
var app = express.Router();

app.use(cf.routeApiDocs, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get(cf.routeSwaggerRes, function(req, res, next) {
  res.redirect(cf.routeApiDocs);
});

/** Importanto módulo de Catálogos */
const departamentos = require("./catalogos/departamento.routes");
const municipios = require("./catalogos/municipio.routes");
const modelos = require("./catalogos/modelos.routes");
const marcas = require("./catalogos/marcas.routes");
const vehiculos = require("./business/vehiculos.routes");
const concesionarias = require("./business/concesionarias.routes");
const personas = require("./business/personas.routes");
const cotizaciones = require("./business/cotizaciones.routes");

/** Rutas de Catálogos */
app.use("/departamentos", departamentos);
app.use("/municipios", municipios);
app.use("/modelos", modelos);
app.use("/marcas", marcas);
/* Rutas del Negocio */
app.use("/vehiculos", vehiculos);
app.use("/concesionarias", concesionarias);
app.use("/personas", personas);
app.use("/cotizaciones", cotizaciones);

module.exports = app;
