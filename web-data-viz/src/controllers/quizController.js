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

function delquiz(req, res) {
  var idUsuario = req.body.idUsuarioServer;

  quizModel.delquiz(idUsuario)
    .then(
      function (resultado) {
        res.json(resultado);
      }
    ).catch(
      function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! 2 Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      }
    );
}

function delquizDois(req, res) {
  var idUsuario = req.body.idUsuarioServer;

  quizModel.delquizDois(idUsuario)
    .then(
      function (resultado) {
        res.json(resultado);
      }
    ).catch(
      function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! 2 Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      }
    );
}

function cadastrarUm(req, res) {
  var idUsuario = req.body.idUsuarioServer;
  var q1 = req.body.q1Server;
  var q2 = req.body.q2Server;
  var q3 = req.body.q3Server;


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

function cadastrarDois(req, res) {
  var idUsuario = req.body.idUsuarioServer;
  var q1 = req.body.q1Server;
  var q2 = req.body.q2Server;
  var q3 = req.body.q3Server;
  var q4 = req.body.q4Server;
  var q5 = req.body.q5Server;
  var q6 = req.body.q6Server;
  var q7 = req.body.q7Server;
  var q8 = req.body.q8Server;
  var q9 = req.body.q9Server;
  var q10 = req.body.q10Server;


  quizModel.publicarDois(idUsuario, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10)
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

function inserUser(req, res) {
  var idUsuario = req.body.idUsuarioServer;
  var perfil = req.body.perfilServer;

  console.log("Dados recebidos no backend:");
  console.log("idUsuario:", req.body.idUsuarioServer);
  console.log("perfil:", req.body.perfilServer);

  console.log('foiate aqui')

  quizModel.inserUser(perfil, idUsuario)
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

function KPI(req, res) {
  console.log(`Buscando os votos...`);

  var fkUser = req.params.fkUser

  console.log(fkUser)

  quizModel.KPI(fkUser)
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

function dashBordDois(req, res) {
  console.log(`Buscando os votos...`);



  quizModel.dashBordDois()
    .then(function (resultado) {
      if (resultado.length > 0) {
        console.log(resultado);
        res.status(200).json(resultado);
      } else {
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
  buscarDadosUm,
  delquiz,
  cadastrarUm,
  listar,
  inserUser,
  cadastrarDois,
  KPI,
  dashBordDois,
  delquizDois
};
