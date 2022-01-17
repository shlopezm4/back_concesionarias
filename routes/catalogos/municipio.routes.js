const express = require("express");
const router = express.Router();

const municipios = require("../../controllers/municipios/municipios.controller");

/**
 * @swagger
 * /municipios:
 *   get:
 *     summary: "Obtener los catalogos de Municipio"
 *     description: Obtener los catalogos de Municipio
 *     tags: [Municipios]
 *     security:
 *         - Bearer: []
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Ocurrió un error.
 */
router.route("/").get(municipios.getAll);

/**
 * @swagger
 * /municipios:
 *   post:
 *     summary: "Crear un nuevo registro para Municipio"
 *     description: Crear un nuevo registro para Municipio
 *     tags: [Municipios]
 *     security:
 *         - Bearer: []
 *     parameters:
 *         - $ref: "#/parameters/municipiosPostModel"
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Ocurrió un error.
 */
router.route("/").post(municipios.create);

/**
 * @swagger
 * /municipios/{id}:
 *   get:
 *     summary: "Obtener Municipio por id"
 *     description: Obtener Municipio por id
 *     tags: [Municipios]
 *     security:
 *         - Bearer: []
 *     parameters:
 *         - $ref: "#/parameters/idPath"
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Ocurrió un error.
 */
router.route("/:id").get(municipios.findOne);

/**
 * @swagger
 * /municipios/{id}:
 *   put:
 *     summary: "Actualizar Municipio por id"
 *     description: Actualizar Municipio por id
 *     tags: [Municipios]
 *     security:
 *         - Bearer: []
 *     parameters:
 *         - $ref: "#/parameters/idPath"
 *         - $ref: "#/parameters/municipiosPutModel"
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Ocurrió un error.
 */
router.route("/:id").put(municipios.updateOne);

module.exports = router;
