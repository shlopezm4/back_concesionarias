/************************************************************************
 * IMPORTS
 ************************************************************************/
const { tb_marcas } = require("../../utils/sqlserver/sqlserver.util");
const responseService = require("../../utils/responses.utils");
/************************************************************************
 * SERVICES
 ************************************************************************/

exports.getAll = async () => {
  try {
    const result = await tb_marcas.findAll({});
    return responseService.success(result);
  } catch (error) {
    return responseService.error(error);
  }
};

exports.create = async dataSend => {
  try {
    const result = await tb_marcas.create(dataSend);
    return responseService.success(result);
  } catch (error) {
    return responseService.error(error);
  }
};

exports.findOne = async queryCriteria => {
  try {
    const result = await tb_marcas.findOne({ where: queryCriteria });
    return responseService.success(result);
  } catch (error) {
    return responseService.error(error);
  }
};

exports.update = async (queryCriteria, dataSend) => {
  try {
    const result = await tb_marcas.update(
      dataSend,
      { where: queryCriteria },
      { new: true, useFindAndModify: false }
    );
    return responseService.success(result);
  } catch (error) {
    return responseService.error(error);
  }
};
