var indicacaoModel = require("../models/indicacaoModel");

function listar(req, res) {
    indicacaoModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function atualizarlateral(req, res) {
    indicacaoModel.atualizarlateral().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// function listarPorUsuario(req, res) {
//     var idUsuario = req.params.idUsuario;

//     avisoModel.listarPorUsuario(idUsuario)
//         .then(
//             function (resultado) {
//                 if (resultado.length > 0) {
//                     res.status(200).json(resultado);
//                 } else {
//                     res.status(204).send("Nenhum resultado encontrado!");
//                 }
//             }
//         )
//         .catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log(
//                     "Houve um erro ao buscar os avisos: ",
//                     erro.sqlMessage
//                 );
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );
// }

// function pesquisarDescricao(req, res) {
//     var descricao = req.params.descricao;

//     avisoModel.pesquisarDescricao(descricao)
//         .then(
//             function (resultado) {
//                 if (resultado.length > 0) {
//                     res.status(200).json(resultado);
//                 } else {
//                     res.status(204).send("Nenhum resultado encontrado!");
//                 }
//             }
//         ).catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );
// }

function publicar(req, res) {
    var descricao = req.body.descricaoServer;
    var idUsuario = req.body.idUsuarioServer;


    // Faça as validações dos valores
    if (descricao == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        indicacaoModel.publicar(descricao, idUsuario)
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

function curtir(req, res) {
    var fkPost = req.body.idPostServer;
    var fkUsuario = req.body.idUsuarioServer;

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    indicacaoModel.curtir(fkPost, fkUsuario)
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

function descurtir(req, res) {
    var fkPost = req.body.idPostServer;
    var fkUsuario = req.body.idUsuarioServer;
    var idLike = req.body.idLikeServer;

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    indicacaoModel.descurtir(fkPost, fkUsuario, idLike)
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



module.exports = {
    listar,
    publicar,
    curtir,
    descurtir,
    atualizarlateral
}