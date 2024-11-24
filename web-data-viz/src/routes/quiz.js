var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/quizum", function (req, res) {
    quizController.cadastrarUm(req, res);
})

router.get("/dadosUm/:fkUser", function (req, res) {
    quizController.buscarDadosUm(req, res);
});

router.delete("/delquiz", function (req, res) {
  quizController.delquiz(req, res);
})
router.get("/listar", function (req, res) {
  quizController.listar(req, res);
});

router.post("/inserUser", function (req, res) {
  quizController.inserUser(req, res);
})

module.exports = router;