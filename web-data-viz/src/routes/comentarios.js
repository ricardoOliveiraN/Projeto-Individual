var express = require("express");
var router = express.Router();

var comentariosController = require("../controllers/comentariosController");

router.get("/buscarPost/:idPost", function (req, res) {
    comentariosController.buscarPost(req, res);
});

router.get("/buscarComentarios/:idPost", function (req, res) {
    comentariosController.buscarComentarios(req, res);
});

router.post("/publicar", function (req, res) {
    comentariosController.publicar(req, res);
})
/*Tela comentário 2*/
router.get("/buscarIndicacao/:idPost", function (req, res) {
    comentariosController.buscarIndicacao(req, res);
});

router.get("/buscarComentariosIndicacao/:idPost", function (req, res) {
    comentariosController.buscarComentariosIndicacao(req, res);
});

router.post("/publicarComentario", function (req, res) {
    comentariosController.publicarComentario(req, res);
})



module.exports = router;