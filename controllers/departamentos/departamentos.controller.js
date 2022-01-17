/************************************************************************
 * IMPORTS
 ************************************************************************/
const {
  getAll,
  findOne,
  update,
  create,
  disable
} = require("../../services/departamentos/departamentos.services");

const { successMessages } = require("../../messages/es");

const responseService = require("../../utils/responses.utils");
/************************************************************************
 * CONTROLADORES
 ************************************************************************/

exports.getAll = async (req, res) => {
  const respuesta = await getAll();
  console.log('respuesta: ', respuesta);
  if (!respuesta.valid) return res.status(400).send(respuesta);

  return res.status(200).send(respuesta);
};

exports.create = async (req, res) => {
  const respuesta = await create(req.body);
  console.log("respuesta: ", respuesta);
  if (!respuesta.valid) return res.status(400).send(respuesta);

  return res
    .status(200)
    .send(
      responseService.success(
        respuesta.data,
        successMessages.DEPARTAMENTO_CREATED
      )
    );
};

exports.findOne = async (req, res) => {
  const respuesta = await findOne({ id_departamento: req.params.id });
  if (!respuesta.valid) return res.status(400).send(respuesta);

  return res.status(200).send(respuesta);
};

exports.updateOne = async (req, res) => {
  const respuesta = await update({ id_departamento: req.params.id }, req.body);
  if (!respuesta.valid) return res.status(400).send(respuesta);

  return res
    .status(200)
    .send(
      responseService.success(
        respuesta.data,
        successMessages.DEPARTAMENTO_UPDATED
      )
    );
};

exports.disableOne = async (req, res) => {
  const respuesta = await disable({ id_departamento: req.params.id });

  if (!respuesta.valid) return res.status(400).send(respuesta);

  return res
    .status(200)
    .send(
      responseService.success(
        respuesta.data,
        successMessages.DEPARTAMENTO_DISABLED
      )
    );
};
