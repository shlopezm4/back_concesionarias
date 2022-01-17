const express = require("express");
const router = express.Router();

const vehiculos = require("../../controllers/vehiculos/vehiculos.controller");

router.route("/").get(vehiculos.getAll);

router.route("/").post(vehiculos.create);

router.route("/:id").get(vehiculos.findOne);

router.route("/:id").put(vehiculos.updateOne);

module.exports = router;
