const express = require("express");
const router = express.Router();

const cotizaciones = require("../../controllers/cotizaciones/cotizaciones.controllers");

router.route("/").get(cotizaciones.getAll);

router.route("/").post(cotizaciones.create);

router.route("/:id").get(cotizaciones.findOne);

router.route("/:id").put(cotizaciones.updateOne);

module.exports = router;
