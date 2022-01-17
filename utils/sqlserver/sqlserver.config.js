/**
 * IMPORTAR EL ARCHIVO DE CONFIGURACIONES
 */
const cfg = require("../../configs");
/**
 * IMPORTAR LA BIBLIOTECA DE SEQUELIZE
 */
const Sequelize = require("sequelize");
/**
 * CREAR LA CONEXIÓN DE SEQUELIZE
 */
module.exports.sequelize = new Sequelize(
  cfg.sqlServerName,
  cfg.sqlServerUsername,
  cfg.sqlServerPassword,
  {
    host: cfg.sqlServerHost,
    port: cfg.sqlServerPort,
    dialect: cfg.sqlServerDialect,
    operatorsAliases: cfg.sqlServerOperatorsAliases ? "1" : "0",
    logging: cfg.sqlServerLogging, //muestra el query sql de la consulta, agregar false en produccion
    dialectOptions: {
      options: {
        instanceName: cfg.sqlServerInstance,
        trustServerCertificate: true,
      },
    },
    /*reference: https://sequelize.org/master/manual/connection-pool.html*/
    pool: {
      max: cfg.sqlServerPoolMax,
      min: cfg.sqlServerPoolMin,
      acquire: cfg.sqlServerPoolAcquire,
      idle: cfg.sqlServerPoolIdle,
    },
  }
);
/**
 * VERIFICAR QUE LA CONEXIÓN HA SIDO ESTABLECIDA
 */
function init() {
  console.log(`Sequelize ${cfg.sqlServerName} connection created!`);
}
/**
 * EXPORTAR EL ARCHIVO DE CONFIGURACION
 */

module.exports.init = init;
module.exports.Sequelize = Sequelize;
