/* jshint indent: 2 */

const { configSequelizeModelService } = require("./sequelize.services");
exports.config = (sequelize, DataTypes) => {
  const modelName = "tb_cotizaciones";
  const tableName = "tb_cotizaciones";
  const properties = {
    id_cotizacion: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    id_concesionario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "tb_concesionarios",
        key: "id_concesionario"
      }
    },
    id_persona: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "tb_personas",
        key: "id_persona"
      }
    },
    nombres: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    apellidos: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    sexo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    correo: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  };
  return configSequelizeModelService(
    sequelize,
    properties,
    modelName,
    tableName
  );
};
