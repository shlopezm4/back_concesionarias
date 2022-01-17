/* jshint indent: 2 */

const {
  configSequelizeModelService
 } = require("./sequelize.services"); 
 exports.config = (sequelize, DataTypes) => {
  const modelName = "tb_departamentos";
   const tableName = "tb_departamentos"; 
   const properties = { 
    id_departamento: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    estatus: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '1'
    }
  };
  return configSequelizeModelService( 
    sequelize, properties, modelName, tableName
  );
};