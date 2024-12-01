var usuarioModel = require("../models/usuarioModel");
var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        // aquarioModel.buscarAquariosPorEmpresa(resultadoAutenticar[0].empresaId)
                        //     .then((resultadoAquarios) => {
                        //         if (resultadoAquarios.length > 0) {
                                    res.json({
                                        id: resultadoAutenticar[0].idUsuario,
                                        email: resultadoAutenticar[0].email,
                                        nome: resultadoAutenticar[0].nomeCompleto,
                                        senha: resultadoAutenticar[0].senha,
                                        celular: resultadoAutenticar[0].numeroCelular
                                    });
                            //     } else {
                            //         res.status(204).json({ aquarios: [] });
                            //     }
                            // })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var celular = req.body.celularServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (celular == undefined) {
        res.status(400).send("Seu celular está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, celular)
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

function dadosPerfil(req, res) {
    console.log(`Buscando os votos...`);
  
    var idUser = req.params.idUser
  

  
    usuarioModel.dadosPerfil(idUser)
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
    autenticar,
    cadastrar,
    dadosPerfil
}