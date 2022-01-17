/************************************************************************
 * IMPORTS
 ************************************************************************/
const {
  getAll,
  findOne,
  update,
  create,
  disable
} = require("../../services/modelos/modelos.services");

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
      responseService.success(respuesta.data, successMessages.MODELO_CREATED)
    );
};

exports.findOne = async (req, res) => {
  const respuesta = await findOne({ id_municipio: req.params.id });
  if (!respuesta.valid) return res.status(400).send(respuesta);

  return res.status(200).send(respuesta);
};

exports.updateOne = async (req, res) => {
  const respuesta = await update({ id_modelo: req.params.id }, req.body);
  if (!respuesta.valid) return res.status(400).send(respuesta);

  return res
    .status(200)
    .send(
      responseService.success(respuesta.data, successMessages.MODELO_UPDATED)
    );
};
