/* jshint indent: 2 */

const { configSequelizeModelService } = require("./sequelize.services");
exports.config = (sequelize, DataTypes) => {
  const modelName = "tb_concesionarios";
  const tableName = "tb_concesionarios";
  const properties = {
    id_concesionario: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    id_departamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "tb_departamentos",
        key: "id_departamento"
      }
    },
    id_municipio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "tb_municipios",
        key: "id_municipio"
      }
    }
  };
  return configSequelizeModelService(
    sequelize,
    properties,
    modelName,
    tableName
  );
};
