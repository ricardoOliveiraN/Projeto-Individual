var express = require("express");
var router = express.Router();

var projetosController = require("../controllers/projetosController");

router.get("/buscarProjeto/:idProjeto/:fkUser", function (req, res) {
    projetosController.buscarProjeto(req, res);
});
router.post("/publicar", function (req, res) {
    projetosController.publicar(req, res);
})


module.exports = router;