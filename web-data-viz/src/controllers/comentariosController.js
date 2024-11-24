var comentariosModel = require("../models/comentariosModel");

function buscarPost(req, res) {
  console.log(`Buscando os votos...`);

  var idPost = req.params.idPost

  console.log(idPost)

  comentariosModel.buscarPost(idPost)
    .then(function (resultado) {
      if (resultado.length > 0) {
        console.log(resultado);
        res.status(200).json(resultado);
      } else {
        console.log(idPost)
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar os votos.", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function buscarComentarios (req, res){
  console.log(`Buscando os votos...`);

  var idPost = req.params.idPost

  console.log(idPost)

  comentariosModel.buscarComentarios(idPost)
    .then(function (resultado) {
      if (resultado.length > 0) {
        console.log(resultado);
        res.status(200).json(resultado);
      } else {
        console.log(idPost)
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar os votos.", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    buscarPost,
    buscarComentarios
};
