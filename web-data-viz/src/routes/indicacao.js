var express = require("express");
var router = express.Router();

var indicacaoController = require("../controllers/indicacaoController");

router.get("/listar", function (req, res) {
    indicacaoController.listar(req, res);
});

router.post("/publicar", function (req, res) {
    indicacaoController.publicar(req, res);
})

router.post("/curtir", function (req, res) {
    indicacaoController.curtir(req, res);
})

router.get("/atualizarlateral", function (req, res) {
    indicacaoController.atualizarlateral(req, res);
})

router.delete("/descurtir", function (req, res) {
    indicacaoController.descurtir(req, res);
})


module.exports = router;