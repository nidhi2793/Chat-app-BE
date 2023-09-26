const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chatController");
const userAuthentication = require("../middleware/auth");

router.post("/sendMessage", userAuthentication, chatController.sendMessage);

module.exports = router;
