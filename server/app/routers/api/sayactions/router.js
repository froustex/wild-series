const express = require("express");

const router = express.Router();

const { sayWelcome } = require("../../../controllers/sayActions");

router.get("/", sayWelcome);

module.exports = router;
