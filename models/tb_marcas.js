/* jshint indent: 2 */

const {
  configSequelizeModelService
 } = require("./sequelize.services"); 
 exports.config = (sequelize, DataTypes) => {
  const modelName = "tb_marcas";
   const tableName = "tb_marcas"; 
   const properties = { 
    id_marcas: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  };
  return configSequelizeModelService( 
    sequelize, properties, modelName, tableName
  );
};