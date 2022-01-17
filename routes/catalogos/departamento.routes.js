const express = require("express");
const router = express.Router();

const departamentos = require("../../controllers/departamentos/departamentos.controller");

/**
 * @swagger
 * /departamentos:
 *   get:
 *     summary: "Obtener los catalogos de Departamentos"
 *     description: Obtener los catalogos de Departamentos
 *     tags: [Departamentos]
 *     security:
 *         - Bearer: []
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Ocurrió un error.
 */
router.route("/").get(departamentos.getAll);

/**
 * @swagger
 * /departamentos:
 *   post:
 *     summary: "Crear un nuevo registro para departamento"
 *     description: Crear un nuevo registro para departamento
 *     tags: [Departamentos]
 *     security:
 *         - Bearer: []
 *     parameters:
 *         - $ref: "#/parameters/departamentosPostModel"
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Ocurrió un error.
 */
router.route("/").post(departamentos.create);

/**
 * @swagger
 * /departamentos/{id}:
 *   get:
 *     summary: "Obtener departamento por id"
 *     description: Obtener departamento por id
 *     tags: [Departamentos]
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
router.route("/:id").get(departamentos.findOne);

/**
 * @swagger
 * /departamentos/{id}:
 *   put:
 *     summary: "Actualizar un departamento por id"
 *     description: Actualizar un departamento por id
 *     tags: [Departamentos]
 *     security:
 *         - Bearer: []
 *     parameters:
 *         - $ref: "#/parameters/idPath"
 *         - $ref: "#/parameters/departamentosPutModel"
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Ocurrió un error.
 */
router.route("/:id").put(departamentos.updateOne);



module.exports = router;
