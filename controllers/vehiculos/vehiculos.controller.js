/************************************************************************
 * IMPORTS
 ************************************************************************/
const {
  getAll,
  findOne,
  update,
  create,
  disable
} = require("../../services/vehiculos/vehiculos.services");

const { successMessages } = require("../../messages/es");

const responseService = require("../../utils/responses.utils");
/************************************************************************
 * CONTROLADORES
 ************************************************************************/

exports.getAll = async (req, res) => {
  const respuesta = await getAll();
  if (!respuesta.valid) return res.status(400).send(respuesta);

  return res.status(200).send(respuesta);
};

exports.create = async (req, res) => {
  const respuesta = await create(req.body);
  if (!respuesta.valid) return res.status(400).send(respuesta);

  return res
    .status(200)
    .send(
      responseService.success(respuesta.data, successMessages.VEHICULO_CREATED)
    );
};

exports.findOne = async (req, res) => {
  const respuesta = await findOne({ id_vehiculo: req.params.id });
  if (!respuesta.valid) return res.status(400).send(respuesta);

  return res.status(200).send(respuesta);
};

exports.updateOne = async (req, res) => {
  const respuesta = await update({ id_vehiculo: req.params.id }, req.body);
  if (!respuesta.valid) return res.status(400).send(respuesta);

  return res
    .status(200)
    .send(
      responseService.success(respuesta.data, successMessages.VEHICULO_UPDATED)
    );
};
