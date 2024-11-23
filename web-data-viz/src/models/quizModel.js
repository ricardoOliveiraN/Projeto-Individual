var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM empresa WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT id, razao_social, cnpj, codigo_ativacao FROM empresa`;

  return database.executar(instrucaoSql);
}

function buscarPorCnpj(cnpj) {
  var instrucaoSql = `SELECT * FROM empresa WHERE cnpj = '${cnpj}'`;

  return database.executar(instrucaoSql);
}

function publicarUm(idUsuario, q1, q2, q3) {
  var instrucaoSql = `INSERT INTO Metricas (fkUsuario, fkQuiz, q1, q2, q3) VALUES ('${idUsuario}','1','${q1}','${q2}','${q3}');`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorCnpj, buscarPorId, publicarUm, listar };
