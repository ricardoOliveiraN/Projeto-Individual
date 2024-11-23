var express = require("express");
var router = express.Router();

var feedController = require("../controllers/feedController");

router.get("/listar", function (req, res) {
    feedController.listar(req, res);
});

router.post("/publicar", function (req, res) {
    feedController.publicar(req, res);
})

router.post("/curtir", function (req, res) {
    feedController.curtir(req, res);
})

router.get("/atualizarlateral", function (req, res) {
    feedController.atualizarlateral(req, res);
})

router.delete("/descurtir", function (req, res) {
    feedController.descurtir(req, res);
})


module.exports = router;