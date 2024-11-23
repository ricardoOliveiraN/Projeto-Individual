var quizModel = require("../models/quizModel");

function buscarPorCnpj(req, res) {
  var cnpj = req.query.cnpj;

  quizModel.buscarPorCnpj(cnpj).then((resultado) => {
    res.status(200).json(resultado);
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
  buscarPorCnpj,
  buscarPorId,
  cadastrarUm,
  listar,
};
