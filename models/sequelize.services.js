exports.configSequelizeModelService = (
  sequelize,
  properties,
  modelName,
  tableName,
  primaryKey
) => {
  const modelSequelize = sequelize.define(modelName, properties, {
    freezeTableName: true,
    timestamps: false,
    tableName: tableName,
  });

  modelSequelize.modelName = modelName;
  modelSequelize.tableName = tableName;
  modelSequelize.primaryKey = primaryKey;

  modelSequelize.whereOp = (parentKey, op, childKey) =>
    sequelize.where(
      sequelize.col(`${modelSequelize.modelName}.${parentKey}`),
      op,
      sequelize.col(childKey)
    );

  return modelSequelize;
};
