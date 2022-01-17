/* jshint indent: 2 */

const { configSequelizeModelService } = require("./sequelize.services");
exports.config = (sequelize, DataTypes) => {
  const modelName = "tb_vehiculos";
  const tableName = "tb_vehiculos";
  const properties = {
    id_vehiculo: {
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
    id_marcas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "tb_marcas",
        key: "id_marcas"
      }
    },
    id_modelo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "tb_modelos",
        key: "id_modelo"
      }
    },
    anio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    imagen: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    peso: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    asientos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    combustible: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    traccion: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    velocidades: {
      type: DataTypes.INTEGER,
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
