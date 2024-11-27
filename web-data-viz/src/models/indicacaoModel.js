var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
    
 SELECT 
    i.idPost AS PostId,
    i.descricao AS PostDescricao,
    i.dataPostagem AS DataPost,
    u.nomeCompleto AS NomePostou,
    l.fkUsuario as idQuemCurtiu,
    c.fkUsuario as idQuemComentou,
    l.idLike as idLike,
    COUNT(DISTINCT l.idLike) AS qtdLikes,
    COUNT(DISTINCT c.idComentario) AS qtdComentarios
    FROM Indicacao AS i
    LEFT JOIN Usuarios AS u
    ON i.fkUsuario = u.idUsuario
    LEFT JOIN LikesIndicacao AS l 
    ON l.fkPost = i.idPost
    LEFT JOIN ComentariosIndicacao AS c 
    ON c.fkPost = i.idPost
    GROUP BY i.idPost, i.descricao, i.dataPostagem, u.nomeCompleto, l.fkUsuario, c.fkUsuario, l.idLike
    ORDER BY DataPost DESC 
    LIMIT 15;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarlateral() {

    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
     SELECT 
i.descricao as PostDescricao,
u.nomeCompleto as NomePostou,
i.dataPostagem as DataPost,
i.idPost as PostId,
(SELECT COUNT(*)
     FROM LikesIndicacao 
     WHERE fkPost = i.idPost) as qtdLikesIndicacao
FROM Indicacao AS i
LEFT JOIN Usuarios as u
    ON i.fkUsuario = u.idUsuario
LEFT JOIN LikesIndicacao as l ON l.fkPost = i.idPost
GROUP BY i.descricao, u.nomeCompleto, i.dataPostagem, i.idPost
ORDER BY qtdLikesIndicacao DESC LIMIT 3;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);


}

function publicar(descricao, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", descricao, idUsuario);
    var instrucaoSql = `
        INSERT INTO Indicacao (descricao, fkUsuario) VALUES ( '${descricao}', ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function curtir(fkPost, fkUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", fkPost, fkUsuario);
    var instrucaoSql = `
        INSERT INTO LikesIndicacao (fkPost, fkUsuario) VALUES ( '${fkPost}', ${fkUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function descurtir(fkPost, fkUsuario, idLike) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", fkPost, fkUsuario);
    var instrucaoSql = `
        DELETE FROM LikesIndicacao WHERE fkPost = '${fkPost}' and fkUsuario = '${fkUsuario}' and idLike = '${idLike}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    listar,

    publicar,
  
    curtir,
    descurtir,
    atualizarlateral
}
