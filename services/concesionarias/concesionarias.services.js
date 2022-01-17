/************************************************************************
 * IMPORTS
 ************************************************************************/
const { tb_concesionarios } = require("../../utils/sqlserver/sqlserver.util");
const responseService = require("../../utils/responses.utils");
/************************************************************************
 * SERVICES
 ************************************************************************/

exports.getAll = async () => {
  try {
    const result = await tb_concesionarios.findAll({
      include: ["departamento", "municipio"]
    });
    console.log("result: ", result);
    return responseService.success(result);
  } catch (error) {
    return responseService.error(error);
  }
};

exports.create = async dataSend => {
  try {
    const result = await tb_concesionarios.create(dataSend);
    return responseService.success(result);
  } catch (error) {
    return responseService.error(error);
  }
};

exports.findOne = async queryCriteria => {
  try {
    const result = await tb_concesionarios.findOne({
      where: queryCriteria,
      include: ["departamento", "municipio"]
    });
    return responseService.success(result);
  } catch (error) {
    return responseService.error(error);
  }
};

exports.update = async (queryCriteria, dataSend) => {
  try {
    const result = await tb_concesionarios.update(
      dataSend,
      { where: queryCriteria },
      { new: true, useFindAndModify: false }
    );
    return responseService.success(result);
  } catch (error) {
    return responseService.error(error);
  }
};
