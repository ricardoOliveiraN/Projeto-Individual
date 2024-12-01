var database = require("../database/config");

function delquiz(idUsuario) {
  console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ");
  var instrucaoSql = `
      DELETE FROM Metricas WHERE fkUsuario = '${idUsuario}' and fkQuiz = '1';
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
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

function publicarDois(idUsuario, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10){
  var instrucaoSql = `INSERT INTO Metricas (fkUsuario, fkQuiz, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10) VALUES ('${idUsuario}','2','${q1}','${q2}','${q3}','${q4}', '${q5}', '${q6}','${q7}','${q8}','${q9}','${q10}');`;

  return database.executar(instrucaoSql);
}

function KPI(fkUser) {
  var instrucaoSql = `SELECT 
    fkUsuario,
    fkQuiz,
    idMetricas,
    SUM(CASE WHEN Q1 = 1 THEN 1 ELSE 0 END
        + CASE WHEN Q2 = 1 THEN 1 ELSE 0 END
        + CASE WHEN Q3 = 1 THEN 1 ELSE 0 END
        + CASE WHEN Q4 = 1 THEN 1 ELSE 0 END
        + CASE WHEN Q5 = 1 THEN 1 ELSE 0 END
        + CASE WHEN Q6 = 1 THEN 1 ELSE 0 END
        + CASE WHEN Q7 = 1 THEN 1 ELSE 0 END
        + CASE WHEN Q8 = 1 THEN 1 ELSE 0 END
        + CASE WHEN Q9 = 1 THEN 1 ELSE 0 END
        + CASE WHEN Q10 = 1 THEN 1 ELSE 0 END) AS total_acertos,
    SUM(CASE WHEN Q1 = 0 THEN 1 ELSE 0 END
        + CASE WHEN Q2 = 0 THEN 1 ELSE 0 END
        + CASE WHEN Q3 = 0 THEN 1 ELSE 0 END
        + CASE WHEN Q4 = 0 THEN 1 ELSE 0 END
        + CASE WHEN Q5 = 0 THEN 1 ELSE 0 END
        + CASE WHEN Q6 = 0 THEN 1 ELSE 0 END
        + CASE WHEN Q7 = 0 THEN 1 ELSE 0 END
        + CASE WHEN Q8 = 0 THEN 1 ELSE 0 END
        + CASE WHEN Q9 = 0 THEN 1 ELSE 0 END
        + CASE WHEN Q10 = 0 THEN 1 ELSE 0 END) AS total_erros
FROM Metricas
WHERE fkQuiz = 2
and fkUsuario = ${fkUser}
GROUP BY fkUsuario, fkQuiz, idMetricas
ORDER BY idMetricas DESC LIMIT 1;`;

  return database.executar(instrucaoSql);
}
function dashBordDois() {
  var instrucaoSql = `SELECT 
    SUM(CASE WHEN Q1 = 1 THEN 1 ELSE 0 END) AS Q1_acertos,
    SUM(CASE WHEN Q2 = 1 THEN 1 ELSE 0 END) AS Q2_acertos,
    SUM(CASE WHEN Q3 = 1 THEN 1 ELSE 0 END) AS Q3_acertos,
    SUM(CASE WHEN Q4 = 1 THEN 1 ELSE 0 END) AS Q4_acertos,
    SUM(CASE WHEN Q5 = 1 THEN 1 ELSE 0 END) AS Q5_acertos,
    SUM(CASE WHEN Q6 = 1 THEN 1 ELSE 0 END) AS Q6_acertos,
    SUM(CASE WHEN Q7 = 1 THEN 1 ELSE 0 END) AS Q7_acertos,
    SUM(CASE WHEN Q8 = 1 THEN 1 ELSE 0 END) AS Q8_acertos,
    SUM(CASE WHEN Q9 = 1 THEN 1 ELSE 0 END) AS Q9_acertos,
    SUM(CASE WHEN Q10 = 1 THEN 1 ELSE 0 END) AS Q10_acertos
FROM Metricas WHERE fkQuiz = 2;`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarDadosUm, delquiz, publicarUm, listar, inserUser, publicarDois, KPI, dashBordDois };
