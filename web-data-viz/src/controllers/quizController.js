var quizModel = require("../models/quizModel");

function buscarDadosUm(req, res) {
  console.log(`Buscando os votos...`);

  var fkUser = req.params.fkUser

  console.log(fkUser)

  quizModel.buscarDadosUm(fkUser)
    .then(function (resultado) {
      if (resultado.length > 0) {
        console.log(resultado); 
        res.status(200).json(resultado);
      } else {
        console.log(fkUser)
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar os votos.", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function listar(req, res) {
  quizModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  quizModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrarUm(req, res) {
  idUsuario = req.body.idUsuarioServer;
  q1 = req.body.q1Server;
  q2 = req.body.q2Server;
  q3 = req.body.q3Server;


  quizModel.publicarUm(idUsuario, q1, q2, q3)
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

module.exports = {
  buscarDadosUm,
  buscarPorId,
  cadastrarUm,
  listar,
};
