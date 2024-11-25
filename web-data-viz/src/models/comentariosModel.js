var database = require("../database/config");


function buscarPost(idPost) {
  var instrucaoSql = `SELECT p.descricao as Descricao, p.dataPostagem as DataPostagem, u.nomeCompleto as NomeUser FROM Post as p JOIN Usuarios as u ON p.fkUsuario = u.idUsuario WHERE p.idPost = ${idPost};`;

  return database.executar(instrucaoSql);
}
function buscarComentarios(idPost){
  var instrucaoSql = `SELECT descricao as DescricaoComentario, nomeCompleto as NomeQuemComentou FROM Comentarios JOIN Usuarios ON fkUsuario = idUsuario WHERE fkPost = ${idPost};`;

  return database.executar(instrucaoSql);
    
}

function publicar(descricao, idUsuario, idPost){
  var instrucaoSql = `INSERT INTO Comentarios (descricao,fkUsuario,fkPost) VALUES ('${descricao}', '${idUsuario}', '${idPost}');`;

  return database.executar(instrucaoSql);
}

module.exports = {buscarPost,buscarComentarios, publicar };
