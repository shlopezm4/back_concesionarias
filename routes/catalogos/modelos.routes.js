const express = require("express");
const router = express.Router();

const modelos = require("../../controllers/modelos/modelos.controller");

router.route("/").get(modelos.getAll);

router.route("/").post(modelos.create);

router.route("/:id").get(modelos.findOne);

router.route("/:id").put(modelos.updateOne);


module.exports = router;
