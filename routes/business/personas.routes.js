const express = require("express");
const router = express.Router();

const personas = require("../../controllers/personas/personas.controller");

router.route("/").get(personas.getAll);

router.route("/").post(personas.create);

router.route("/:id").get(personas.findOne);

router.route("/:id").put(personas.updateOne);

module.exports = router;
