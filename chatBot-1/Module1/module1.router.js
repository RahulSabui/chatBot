const express = require('express');
// eslint-disable-next-line
const router = express.Router();
const module1Controller = require("./module1.controller")


router.post('/ask', module1Controller.chatBot1);
router.get('/chat', module1Controller.openPage);



module.exports = router;
