const environments = require("./entorno.js");
environments.verifyEnvironment();

module.exports = {
  // ------------- CONSTANTES PROPIAS --------------
  allowMethods: "GET,PUT,POST,DELETE",
  allowHeaders: process.env.ALLOW_HEADERS,
  allowExpose: "x-filename, Content-disposition",
  allowOrigin: "*",
  // ------------- CONSTANTES INYECTABLES --------------
  //Global variables
  routeSwaggerRes: process.env.ROUTE_SWAGGER_RES,
  routeApiDocs: process.env.ROUTE_API_DOCS,
  host: process.env.HOST,
  port: parseInt(process.env.PORT),
  messageTerminal: process.env.MESSAGE_TERMINAL,
  nodeEnvironment: process.env.NODE_ENV,
  reactCryptoKey: process.env.REACT_APP_CRYPTO_KEY,

  //MySQL database
  sqlServerName: process.env.MYSQLDB_NAME,
  sqlServerUsername: process.env.MYSQLDB_USERNAME,
  sqlServerPassword: process.env.MYSQLDB_PASSWORD,
  sqlServerPort: parseInt(process.env.MYSQLDB_PORT),
  sqlServerHost: process.env.MYSQLDB_HOST,
  sqlServerInstance: process.env.MYSQLDB_INSTANCE,
  sqlServerDialect: process.env.MYSQLDB_DIALECT,
  sqlServerLogging: !!parseInt(process.env.MYSQLDB_LOGGING),
  sqlServerOperatorsAliases: !!parseInt(
    process.env.MYSQLDB_OPERATORS_ALIASES
  ),
  sqlServerPoolMax: parseInt(process.env.MYSQLDB_POOL_MAX),
  sqlServerPoolMin: parseInt(process.env.MYSQLDB_POOL_MIN),
  sqlServerPoolAcquire: parseInt(process.env.MYSQLDB_POOL_ACQUIRE),
  sqlServerPoolIdle: parseInt(process.env.MYSQLDB_POOL_IDLE),

  ttexpira: process.env.TTEXPIRA,
  jwt_key: process.env.JWT_KEY,
  
  //Swagger documentation OpenApi 2.0
  basePath: process.env.BASE_PATH,
  swaggerPort: process.env.SWAGGER_PORT
    ? process.env.SWAGGER_PORT
    : process.env.PORT,
};
