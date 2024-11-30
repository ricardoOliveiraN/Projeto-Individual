var database = require("../database/config");


function buscarProjeto(idProjeto, fkUser) {
  var instrucaoSql = `SELECT nomeProjeto as nome, publicoAlvo as publico, solucao, statusProjeto, dataProjeto as Inicio FROM Projetos WHERE idProjetos = ${idProjeto} and fkUser = ${fkUser};`;

  return database.executar(instrucaoSql);
}

function publicar(idUsuario, idProjetos, nomeProjeto, publicoAlvo, solucao, status) {
    
    var instrucaoSql = `
        INSERT INTO Projetos (idProjetos, fkUser, nomeProjeto, publicoAlvo, solucao, statusProjeto) VALUES ( ${idProjetos}, ${idUsuario},'${nomeProjeto}','${publicoAlvo}','${solucao}','${status}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {buscarProjeto, publicar};
