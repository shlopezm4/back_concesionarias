const express = require("express");
const router = express.Router();

const concesionarias = require("../../controllers/concesionarias/concesionarias.controller");

router.route("/").get(concesionarias.getAll);

router.route("/").post(concesionarias.create);

router.route("/:id").get(concesionarias.findOne);

router.route("/:id").put(concesionarias.updateOne);

module.exports = router;
