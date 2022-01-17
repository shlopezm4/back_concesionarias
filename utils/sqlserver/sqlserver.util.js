const DataType = require("sequelize");
/**
 * IMPORTAR SEQUELIZE
 */
const { sequelize } = require("./sqlserver.config");
const {
  tb_concesionarios,
  tb_departamentos,
  tb_marcas,
  tb_modelos,
  tb_municipios,
  tb_personas,
  tb_vehiculos,
  tb_cotizaciones
} = require("../../models/index.js");

// Configuración
module.exports.tb_departamentos = tb_departamentos.config(sequelize, DataType);
module.exports.tb_municipios = tb_municipios.config(sequelize, DataType);
module.exports.tb_modelos = tb_modelos.config(sequelize, DataType);
module.exports.tb_marcas = tb_marcas.config(sequelize, DataType);
module.exports.tb_vehiculos = tb_vehiculos.config(sequelize, DataType);
module.exports.tb_personas = tb_personas.config(sequelize, DataType);
module.exports.tb_concesionarios = tb_concesionarios.config(
  sequelize,
  DataType
);
module.exports.tb_cotizaciones = tb_cotizaciones.config(sequelize, DataType);

this.tb_modelos.hasMany(this.tb_vehiculos, {
  as: "vehiculos",
  sourceKey: "id_modelo",
  foreignKey: "id_modelo"
});

this.tb_vehiculos.belongsTo(this.tb_modelos, {
  as: "modelo",
  targetKey: "id_modelo",
  foreignKey: "id_modelo"
});

this.tb_marcas.hasMany(this.tb_vehiculos, {
  as: "vehiculos",
  sourceKey: "id_marcas",
  foreignKey: "id_marcas"
});

this.tb_vehiculos.belongsTo(this.tb_marcas, {
  as: "marca",
  targetKey: "id_marcas",
  foreignKey: "id_marcas"
});

this.tb_departamentos.hasMany(this.tb_concesionarios, {
  as: "concesionarios",
  sourceKey: "id_departamento",
  foreignKey: "id_departamento"
});

this.tb_concesionarios.belongsTo(this.tb_departamentos, {
  as: "departamento",
  targetKey: "id_departamento",
  foreignKey: "id_departamento"
});

this.tb_municipios.hasMany(this.tb_concesionarios, {
  as: "concesionarios",
  sourceKey: "id_municipio",
  foreignKey: "id_municipio"
});

this.tb_concesionarios.belongsTo(this.tb_municipios, {
  as: "municipio",
  targetKey: "id_municipio",
  foreignKey: "id_municipio"
});

this.tb_personas.hasMany(this.tb_cotizaciones, {
  as: "cotizaciones",
  targetKey: "id_persona",
  foreignKey: "id_persona"
});

this.tb_cotizaciones.belongsTo(this.tb_personas, {
  as: "persona",
  targetKey: "id_persona",
  foreignKey: "id_persona"
});

this.tb_concesionarios.hasMany(this.tb_cotizaciones, {
  as: "cotizaciones",
  targetKey: "id_concesionario",
  foreignKey: "id_concesionario"
});

this.tb_cotizaciones.belongsTo(this.tb_concesionarios, {
  as: "concesionaria",
  targetKey: "id_concesionario",
  foreignKey: "id_concesionario"
});
