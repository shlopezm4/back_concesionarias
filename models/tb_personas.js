/* jshint indent: 2 */

const {
  configSequelizeModelService
 } = require("./sequelize.services"); 
 exports.config = (sequelize, DataTypes) => {
  const modelName = "tb_personas";
   const tableName = "tb_personas"; 
   const properties = { 
    id_persona: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nombres: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    apellidos: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fecha_nacimiento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sexo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    imagen: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  };
  return configSequelizeModelService( 
    sequelize, properties, modelName, tableName
  );
};