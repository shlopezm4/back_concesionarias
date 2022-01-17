const http = require("http");
const app = require("./app");
const config = require("./configs");

const server = http.createServer(app);
server.listen(
  config.port,
  console.log(
    `Servicio en Ejecucion en Ambiente "${config.nodeEnvironment}" en puerto ${config.port}`
  )
);
