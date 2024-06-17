const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */
const sayactionsRouter = require("./sayactions/router");

router.use("/sayhello", sayactionsRouter);

const categoriesRouter = require("./categories/router");

router.use("/categories", categoriesRouter);

const programsRouter = require("./programs/router");

router.use("/programs", programsRouter);

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

/* ************************************************************************* */

module.exports = router;
