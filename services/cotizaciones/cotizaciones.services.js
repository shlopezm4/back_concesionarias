/************************************************************************
 * IMPORTS
 ************************************************************************/
const { tb_cotizaciones } = require("../../utils/sqlserver/sqlserver.util");
const responseService = require("../../utils/responses.utils");
/************************************************************************
 * SERVICES
 ************************************************************************/

exports.getAll = async () => {
  try {
    const result = await tb_cotizaciones.findAll({
      include: ["concesionaria", "persona"]
    });
    console.log("result: ", result);
    return responseService.success(result);
  } catch (error) {
    return responseService.error(error);
  }
};

exports.create = async dataSend => {
  try {
    const result = await tb_cotizaciones.create(dataSend);
    return responseService.success(result);
  } catch (error) {
    return responseService.error(error);
  }
};

exports.findOne = async queryCriteria => {
  try {
    const result = await tb_cotizaciones.findOne({
      where: queryCriteria,
      include: ["concesionaria", "persona"]
    });
    return responseService.success(result);
  } catch (error) {
    return responseService.error(error);
  }
};

exports.update = async (queryCriteria, dataSend) => {
  try {
    const result = await tb_cotizaciones.update(
      dataSend,
      { where: queryCriteria },
      { new: true, useFindAndModify: false }
    );
    return responseService.success(result);
  } catch (error) {
    return responseService.error(error);
  }
};
