var express = require("express");
var router = express.Router();
var userController = require("../controllers/UserController");

router.get("/main", (req, res, next) => {
    res.send("main");
});

router.get("/user", (req, res, next) => {
    userController.data.getUserList(req, res, next);
});

module.exports = router;
