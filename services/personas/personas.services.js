/************************************************************************
 * IMPORTS
 ************************************************************************/
const { tb_personas } = require("../../utils/sqlserver/sqlserver.util");
const responseService = require("../../utils/responses.utils");
/************************************************************************
 * SERVICES
 ************************************************************************/

exports.getAll = async () => {
  try {
    const result = await tb_personas.findAll({});
    return responseService.success(result);
  } catch (error) {
    console.log("error: ", error);
    return responseService.error(error);
  }
};

exports.create = async dataSend => {
  try {
    const result = await tb_personas.create(dataSend);
    return responseService.success(result);
  } catch (error) {
    return responseService.error(error);
  }
};

exports.findOne = async queryCriteria => {
  try {
    const result = await tb_personas.findOne({
      where: queryCriteria
    });
    return responseService.success(result);
  } catch (error) {
    return responseService.error(error);
  }
};

exports.update = async (queryCriteria, dataSend) => {
  try {
    const result = await tb_personas.update(
      dataSend,
      { where: queryCriteria },
      { new: true, useFindAndModify: false }
    );
    return responseService.success(result);
  } catch (error) {
    return responseService.error(error);
  }
};
