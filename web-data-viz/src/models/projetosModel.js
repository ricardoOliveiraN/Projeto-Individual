var database = require("../database/config");


function buscarDadosInicio(fkUser) {
  var instrucaoSql = `SELECT nomeProjeto as nome, statusProjeto, dataProjeto as Inicio FROM Projetos WHERE fkUser = ${fkUser};`;

  return database.executar(instrucaoSql);
}

function buscarProjeto(idProjeto, fkUser) {
  var instrucaoSql = `SELECT nomeProjeto as nome, publicoAlvo as publico, solucao, statusProjeto, dataProjeto as Inicio FROM Projetos WHERE idProjetos = ${idProjeto} and fkUser = ${fkUser};`;

  return database.executar(instrucaoSql);
}

function buscarRequisito(fkProjeto, fkUser) {
  var instrucaoSql = `SELECT  idRequisitos, nomeRequisito, descricaoRequisito, dataInicio, dataFim FROM Requisitos WHERE fkProjeto = ${fkProjeto} and fkUser = ${fkUser};`;

  return database.executar(instrucaoSql);
}

function publicar(idUsuario, idProjetos, nomeProjeto, publicoAlvo, solucao, status) {
  
  var instrucaoSql = `
        INSERT INTO Projetos (idProjetos, fkUser, nomeProjeto, publicoAlvo, solucao, statusProjeto) VALUES ( ${idProjetos}, ${idUsuario},'${nomeProjeto}','${publicoAlvo}','${solucao}','${status}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }
function publicarRequisito(titulo, fkProjeto, fkUser, TextoRequisito) {
    
    var instrucaoSql = `
        INSERT INTO Requisitos (nomeRequisito, fkProjeto, fkUser, descricaoRequisito) VALUES ( '${titulo}', '${fkProjeto}','${fkUser}','${TextoRequisito}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function conclusaoReq(idRequisito, fkProjeto, fkUser) {
    
    var instrucaoSql = `
        UPDATE Requisitos SET dataFim = CURRENT_DATE WHERE idRequisitos = ${idRequisito} and fkProjeto = ${fkProjeto} and fkUser = ${fkUser};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function dadosKPI(fkProjeto, fkUser) {
  var instrucaoSql = `SELECT COUNT(*) as totalReq FROM Requisitos WHERE fkProjeto = ${fkProjeto} and fkUser = ${fkUser};`;

  return database.executar(instrucaoSql);
}

function graficoUm(fkProjeto, fkUser) {
  var instrucaoSql = `SELECT  COUNT(CASE WHEN dataFim IS NULL THEN 1 END) AS naoConcluido, COUNT(CASE WHEN dataFim IS NOT NULL THEN 1 END) AS Concluido FROM Requisitos WHERE fkProjeto = ${fkProjeto} AND fkUser = ${fkUser};`;

  return database.executar(instrucaoSql);
}

module.exports = {buscarProjeto, publicar, publicarRequisito, buscarRequisito, conclusaoReq, buscarDadosInicio, dadosKPI, graficoUm};
