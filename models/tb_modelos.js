/* jshint indent: 2 */

const {
  configSequelizeModelService
 } = require("./sequelize.services"); 
 exports.config = (sequelize, DataTypes) => {
  const modelName = "tb_modelos";
   const tableName = "tb_modelos"; 
   const properties = { 
    id_modelo: {
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