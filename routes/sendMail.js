const express = require("express");
const router = express.Router();
const sendMailController = require("../controllers/sendMail");

router.post("/sendMail", sendMailController);

module.exports = router;
