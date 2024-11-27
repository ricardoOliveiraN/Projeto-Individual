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
function publicar(req, res) {
  var descricao = req.body.descricaoServer;
  var idUsuario = req.body.idUsuarioServer;
  var idPost = req.body.idPostServer;


  // Faça as validações dos valores
  if (descricao == undefined) {
      res.status(400).send("Seu nome está undefined!");
  }
  else {

      // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
      comentariosModel.publicar(descricao, idUsuario, idPost)
          .then(
              function (resultado) {
                  res.json(resultado);
              }
          ).catch(
              function (erro) {
                  console.log(erro);
                  console.log(
                      "\nHouve um erro ao realizar o cadastro! Erro: ",
                      erro.sqlMessage
                  );
                  res.status(500).json(erro.sqlMessage);
              }
          );
  }
}

/*Tela Comentário 2*/

function buscarIndicacao(req, res) {
  console.log(`Buscando os votos...`);

  var idPost = req.params.idPost

  console.log(idPost)

  comentariosModel.buscarIndicacao(idPost)
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
function buscarComentariosIndicacao (req, res){
  console.log(`Buscando os votos...`);

  var idPost = req.params.idPost

  console.log(idPost)

  comentariosModel.buscarComentariosIndicacao(idPost)
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

function publicarComentario(req, res) {
  var descricao = req.body.descricaoServer;
  var idUsuario = req.body.idUsuarioServer;
  var idPost = req.body.idPostServer;


  // Faça as validações dos valores
  if (descricao == undefined) {
      res.status(400).send("Seu nome está undefined!");
  }
  else {

      // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
      comentariosModel.publicarComentario(descricao, idUsuario, idPost)
          .then(
              function (resultado) {
                  res.json(resultado);
              }
          ).catch(
              function (erro) {
                  console.log(erro);
                  console.log(
                      "\nHouve um erro ao realizar o cadastro! Erro: ",
                      erro.sqlMessage
                  );
                  res.status(500).json(erro.sqlMessage);
              }
          );
  }
}


module.exports = {
    buscarPost,
    buscarComentarios,
    publicar,
    buscarIndicacao,
    buscarComentariosIndicacao,
    publicarComentario
};
