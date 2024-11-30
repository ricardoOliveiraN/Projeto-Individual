var projetosModel = require("../models/projetosModel");

function buscarProjeto(req, res) {
    console.log(`Buscando os votos...`);

    var idProjeto = req.params.idProjeto
    var fkUser = req.params.fkUser;
    console.log(idProjeto)

    projetosModel.buscarProjeto(idProjeto, fkUser)
        .then(function (resultado) {
            if (resultado.length > 0) {
                console.log(resultado);
                res.status(200).json(resultado);
            } else {
                console.log(idProjeto)
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

    var idUsuario = req.body.idUsuarioServer;
    var idProjetos = req.body.idProjetosServer;
    var nomeProjeto = req.body.nomeProjetoServer;
    var publicoAlvo = req.body.publicoAlvoServer;
    var solucao = req.body.solucaoServer;
    var status = req.body.statusServer;



    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    projetosModel.publicar(idUsuario, idProjetos, nomeProjeto, publicoAlvo, solucao, status)
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
    buscarProjeto,
    publicar
};
