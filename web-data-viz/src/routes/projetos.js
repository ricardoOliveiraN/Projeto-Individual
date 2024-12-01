var express = require("express");
var router = express.Router();

var projetosController = require("../controllers/projetosController");

router.get("/buscarProjeto/:idProjeto/:fkUser", function (req, res) {
    projetosController.buscarProjeto(req, res);
});
router.get("/buscarDadosInicio/:fkUser", function (req, res) {
    projetosController.buscarDadosInicio(req, res);
});
router.get("/buscarRequisito/:fkProjeto/:fkUser", function (req, res) {
    projetosController.buscarRequisito(req, res);
});
router.post("/publicar", function (req, res) {
    projetosController.publicar(req, res);
})
router.post("/publicarRequisito", function (req, res) {
    projetosController.publicarRequisito(req, res);
})
router.post("/conclusaoReq", function (req, res) {
    projetosController.conclusaoReq(req, res);
})

router.get("/dadosKPI/:fkProjeto/:fkUser", function (req, res) {
    projetosController.dadosKPI(req, res);
});

router.get("/graficoUm/:fkProjeto/:fkUser", function (req, res) {
    projetosController.graficoUm(req, res);
});

module.exports = router;