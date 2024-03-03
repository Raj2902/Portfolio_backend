const express = require("express");
const router = express.Router();
const helloWorldController = require("../controllers/helloWorld");

router.get("/helloWorld", helloWorldController);

module.exports = router;
