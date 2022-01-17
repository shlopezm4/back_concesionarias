const fs = require("fs");

function saveJSON(json_file) {
  //create if not exist folder
  if (!fs.existsSync("./swagger")) fs.mkdirSync(`./swagger`);
  const stats = fs.statSync("./swagger/swagger.json");
  if (stats.mtime.getTime() + 2000 < new Date().getTime()) {
    fs.writeFileSync(
      "./swagger/swagger.json",
      json_file,
      "utf8",
      function (err) {
        if (err)
          return reject("An error occured while writing JSON Object to File.");
        console.log("Swagger File Generated!");
        resolve(true);
      }
    );
  }
}

module.exports.saveJSON = saveJSON;
