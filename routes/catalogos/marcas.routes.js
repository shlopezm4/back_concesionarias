const express = require("express");
const router = express.Router();

const marcas = require("../../controllers/marcas/marcas.controller");

router.route("/").get(marcas.getAll);

router.route("/").post(marcas.create);

router.route("/:id").get(marcas.findOne);

router.route("/:id").put(marcas.updateOne);


module.exports = router;
