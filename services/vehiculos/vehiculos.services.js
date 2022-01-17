/************************************************************************
 * IMPORTS
 ************************************************************************/
const { tb_vehiculos } = require("../../utils/sqlserver/sqlserver.util");
const responseService = require("../../utils/responses.utils");
/************************************************************************
 * SERVICES
 ************************************************************************/

exports.getAll = async () => {
  try {
    const result = await tb_vehiculos.findAll({ include: ["modelo", "marca"] });
    console.log("result: ", result);
    return responseService.success(result);
  } catch (error) {
    console.log("error: ", error);
    return responseService.error(error);
  }
};

exports.create = async dataSend => {
  try {
    const result = await tb_vehiculos.create(dataSend);
    return responseService.success(result);
  } catch (error) {
    return responseService.error(error);
  }
};

exports.findOne = async queryCriteria => {
  try {
    const result = await tb_vehiculos.findOne({
      where: queryCriteria,
      include: ["modelo", "marca"]
    });
    return responseService.success(result);
  } catch (error) {
    return responseService.error(error);
  }
};

exports.update = async (queryCriteria, dataSend) => {
  try {
    const result = await tb_vehiculos.update(
      dataSend,
      { where: queryCriteria },
      { new: true, useFindAndModify: false }
    );
    return responseService.success(result);
  } catch (error) {
    return responseService.error(error);
  }
};
