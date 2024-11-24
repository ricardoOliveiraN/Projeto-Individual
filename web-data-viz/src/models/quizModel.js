var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM empresa WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT id, razao_social, cnpj, codigo_ativacao FROM empresa`;

  return database.executar(instrucaoSql);
}

function buscarDadosUm(fkUser) {
  var instrucaoSql = `SELECT Q1 as qtdConservador, Q2 as qtdModerado, Q3 as qtdAgressivo FROM Metricas WHERE fkQuiz = 1 and fkUsuario = ${fkUser}`;

  return database.executar(instrucaoSql);
}

function publicarUm(idUsuario, q1, q2, q3) {
  var instrucaoSql = `INSERT INTO Metricas (fkUsuario, fkQuiz, q1, q2, q3) VALUES ('${idUsuario}','1','${q1}','${q2}','${q3}');`;

  return database.executar(instrucaoSql);
}

function inserUser(perfil, idUsuario){
  var instrucaoSql = `UPDATE Usuarios SET tipoPerfil = '${perfil}' WHERE idUsuario = ${idUsuario};`;

  return database.executar(instrucaoSql);
  
}

module.exports = { buscarDadosUm, buscarPorId, publicarUm, listar, inserUser };
