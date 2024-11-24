var express = require("express");
var router = express.Router();

var comentariosController = require("../controllers/comentariosController");

router.get("/buscarPost/:idPost", function (req, res) {
    comentariosController.buscarPost(req, res);
});

router.get("/buscarComentarios/:idPost", function (req, res) {
    comentariosController.buscarComentarios(req, res);
});



module.exports = router;