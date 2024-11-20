var express = require("express");
var router = express.Router();

var feedController = require("../controllers/feedController");

router.get("/listar", function (req, res) {
    feedController.listar(req, res);
});

// router.get("/listar/:idUsuario", function (req, res) {
//     feedController.listarPorUsuario(req, res);
// });

// router.get("/pesquisar/:descricao", function (req, res) {
//     feedController.pesquisarDescricao(req, res);
// });



router.post("/publicar", function (req, res) {
    feedController.publicar(req, res);
})

router.post("/curtir", function (req, res) {
    feedController.curtir(req, res);
})

// router.put("/editar/:idfeed", function (req, res) {
//     feedController.editar(req, res);
// });

// router.delete("/deletar/:idfeed", function (req, res) {
//     feedController.deletar(req, res);
// });

module.exports = router;