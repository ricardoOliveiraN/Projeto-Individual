CREATE DATABASE EmpreendaHub;
USE EmpreendaHub;

CREATE TABLE Usuarios (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeCompleto VARCHAR(45),
    numeroCelular CHAR(11),
    email VARCHAR(45) UNIQUE,
    senha VARCHAR(20),
    tipoPerfil VARCHAR(15)
   );

SELECT nomeCompleto, numeroCelular, email, tipoPerfil FROM Usuarios WHERE idUsuario = 1;

INSERT INTO Usuarios (idUsuario, nomeCompleto, numeroCelular, email, senha) VALUES
(2, 'RICARDO DE OLIVEIRA NICOLAU', '11985247282', 'ricardo@gmai.com', 'Garoto04@-'); 
    
select * from Usuarios;

CREATE TABLE Post (
	idPost INT  AUTO_INCREMENT,
    descricao VARCHAR(200),
    qtdLikes INT, 
    dataPostagem DATETIME DEFAULT CURRENT_TIMESTAMP,
    fkUsuario INT,
    PRIMARY KEY (idPost, fkUsuario),
    CONSTRAINT fkUserarioPost FOREIGN KEY (fkUsuario) REFERENCES Usuarios (idUsuario)) AUTO_INCREMENT = 1000;
    
SELECT p.descricao as Descricao, p.dataPostagem as DataPostagem, u.nomeCompleto as NomeUser FROM Post as p JOIN Usuarios as u ON p.fkUsuario = u.idUsuario WHERE p.idPost = 1000;

INSERT INTO Post (descricao,qtdLikes,fkUsuario) VALUES
	('Testando a api', 1, 1);
    
INSERT INTO Post (descricao,qtdLikes,fkUsuario) VALUES
	('OLA MOISES', 1, 1);
    INSERT INTO Post (descricao,qtdLikes,fkUsuario) VALUES
	('OLA Natalia', 1, 1);
    SELECT * FROM Post;
DELETE FROM Post WHERE idPost = 1002 and fkUsuario = 1;
SELECT * FROM Post;

DELETE FROM Comentarios WHERE fkPost = 1002 and fkUsuario = 1;    

    DELETE FROM Post WHERE idPost = 1001;
    
CREATE TABLE Comentarios (
	idComentario INT AUTO_INCREMENT,
    fkPost INT,
    fkUsuario INT,
    PRIMARY KEY (idComentario, fkPost, fkUsuario),
    descricao VARCHAR(200),
    CONSTRAINT FkPostComentario FOREIGN KEY (fkPost) REFERENCES Post (idPost),
    CONSTRAINT fkUsarioComentario FOREIGN KEY (fkUsuario) REFERENCES Usuarios (idUsuario))AUTO_INCREMENT = 10000;

INSERT INTO Comentarios (fkPost, fkUsuario, descricao) VALUES
	(1002, 1, 'Estou apenas testando17'),
    (1002, 1, 'Estou apenas testando175'),
    (1002, 1, 'Estou apenas testando117'),
    (1002, 1, 'Estou apenas testando122'),
    (1002, 1, 'Estou apenas testando19'),
    (1002, 1, 'Estou apenas testando18');
    
       SELECT 
p.descricao as PostDescricao,
u.nomeCompleto as NomePostou,
p.dataPostagem as DataPost,
p.idPost as PostId,
(SELECT COUNT(*)
     FROM Comentarios as c 
     WHERE c.fkPost = p.idPost) as qtdComentarios
FROM Post as p
LEFT JOIN Usuarios as u
    ON p.fkUsuario = u.idUsuario
LEFT JOIN Comentarios as c ON c.fkPost = p.idPost
GROUP BY p.descricao, u.nomeCompleto, p.dataPostagem, p.idPost
ORDER BY qtdComentarios DESC LIMIT 3
;

select * from Comentarios;
DROP TABLE Comentarios;
     
 SELECT 
    p.idPost AS PostId,
    p.descricao AS PostDescricao,
    p.dataPostagem AS DataPost,
    u.nomeCompleto AS NomePostou,
    l.fkUsuario as idQuemCurtiu,
    c.fkUsuario as idQuemComentou,
    l.idLike as idLike,
    COUNT(DISTINCT l.idLike) AS qtdLikes,
    COUNT(DISTINCT c.idComentario) AS qtdComentarios
    FROM Post AS p
    LEFT JOIN Usuarios AS u
    ON p.fkUsuario = u.idUsuario
    LEFT JOIN LikesPost AS l 
    ON l.fkPost = p.idPost
    LEFT JOIN Comentarios AS c 
    ON c.fkPost = p.idPost
    GROUP BY p.idPost, p.descricao, p.dataPostagem, u.nomeCompleto, l.fkUsuario, c.fkUsuario, l.idLike
    ORDER BY DataPost DESC 
    LIMIT 15;

    
SELECT descricao as DescricaoComentario, nomeCompleto as NomeQuemComentou FROM Comentarios JOIN Usuarios ON fkUsuario = idUsuario WHERE fkPost = 1002;

CREATE TABLE LikesPost (
	idLike INT AUTO_INCREMENT,
    fkPost INT,
    fkUsuario INT,
    PRIMARY KEY (idLike, fkPost, fkUsuario),
    CONSTRAINT FkPostLike FOREIGN KEY (fkPost) REFERENCES Post (idPost),
    CONSTRAINT fkUsarioLike FOREIGN KEY (fkUsuario) REFERENCES Usuarios (idUsuario))AUTO_INCREMENT = 10000;
DROP TABLE LikesPost;
INSERT INTO LikesPost (fkPost, fkUsuario) VALUES 
	(1002, 2);
SELECT * FROM LikesPost;
CREATE TABLE Quiz (
	idQuiz INT PRIMARY KEY);

INSERT INTO Quiz (idQuiz) VALUES
	(1),
    (2);

CREATE TABLE Metricas (
	idMetricas INT AUTO_INCREMENT,
    fkUsuario INT,
    CONSTRAINT fkUserMetrica FOREIGN KEY (fkUsuario) REFERENCES Usuarios(idUsuario),
    fkQuiz INT,
    CONSTRAINT fkQuizMetrica FOREIGN KEY (fkQuiz) REFERENCES Quiz(idQuiz),
    PRIMARY KEY (idMetricas, fkUsuario, fkQuiz),
	Q1 INT,
    Q2 INT,
    Q3 INT,
    Q4 INT,
    Q5 INT,
    Q6 INT,
    Q7 INT,
    Q8 INT,
    Q9 INT,
    Q10 INT
    );
    
    SELECT * FROM Metricas WHERE fkQuiz = 2;

SELECT 
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
and fkUsuario = 1
GROUP BY fkUsuario, fkQuiz, idMetricas
ORDER BY idMetricas DESC LIMIT 1;

SELECT * FROM Metricas;


SELECT 
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
WHERE fkUsuario = 1 and fkQuiz = 1; 

SELECT 
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
FROM Metricas;

SELECT 
    Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10
FROM Metricas
WHERE fkUsuario = 1; 



    SELECT * FROM Usuarios;
    SELECT * FROM Metricas;
UPDATE Usuarios SET tipoPerfil = '' WHERE idUsuario = 1;
DROP TABLE  Metricas;
SELECT Q1 as qtdConservador, Q2 as qtdModerado, Q3 as qtdAgressivo FROM Metricas WHERE idQuiz = 1 and fkUser = 1;
SELECT * FROM Metricas;
	
 INSERT INTO Comentarios (fkPost, fkUsuario, descricao) VALUES   
	(1000, 1, 'oi');
    


SELECT 
    p.idPost as PostId,
    p.descricao as PostDescricao,
    p.dataPostagem as DataPost,
    u.nomeCompleto as NomePostou,
    l.fkUsuario as idQuemCurtiu,
    c.fkUsuario as idQuemComentou,
    (SELECT COUNT(*) 
     FROM LikesPost as l
     WHERE l.fkPost = p.idPost) as qtdLikes,
     (SELECT COUNT(*)
     FROM Comentarios as c 
     WHERE c.fkPost = p.idPost) as qtdComentarios
FROM Post as p
LEFT JOIN Usuarios as u
    ON p.fkUsuario = u.idUsuario
LEFT JOIN LikesPost as l ON l.fkPost = p.idPost
LEFT JOIN Comentarios as c ON c.fkPost = p.idPost
ORDER BY DataPost DESC 
LIMIT 15;

SELECT 
p.descricao as PostDescricao,
u.nomeCompleto as NomePostou,
p.dataPostagem as DataPost,
(SELECT COUNT(*)
     FROM Comentarios as c 
     WHERE c.fkPost = p.idPost) as qtdComentarios
FROM Post as p
LEFT JOIN Usuarios as u
    ON p.fkUsuario = u.idUsuario
LEFT JOIN Comentarios as c ON c.fkPost = p.idPost
ORDER BY qtdComentarios DESC LIMIT 3;


CREATE TABLE Indicacao (
	idPost INT  AUTO_INCREMENT,
    descricao VARCHAR(200),
    qtdLikes INT, 
	titulo VARCHAR(200),
    autor VARCHAR(200),
    dataPostagem DATETIME DEFAULT CURRENT_TIMESTAMP,
    fkUsuario INT,
    PRIMARY KEY (idPost, fkUsuario),
    CONSTRAINT fkUserarioIndicacao FOREIGN KEY (fkUsuario) REFERENCES Usuarios (idUsuario)) AUTO_INCREMENT = 20000;
	
CREATE TABLE ComentariosIndicacao (
	idComentario INT AUTO_INCREMENT,
    fkPost INT,
    fkUsuario INT,
    PRIMARY KEY (idComentario, fkPost, fkUsuario),
    descricao VARCHAR(200),
    CONSTRAINT FkIndicacaoComentario FOREIGN KEY (fkPost) REFERENCES Indicacao (idPost),
    CONSTRAINT fkUsarioComentarioIndicacao FOREIGN KEY (fkUsuario) REFERENCES Usuarios (idUsuario))AUTO_INCREMENT = 20000;
    


CREATE TABLE LikesIndicacao (
	idLike INT AUTO_INCREMENT,
    fkPost INT,
    fkUsuario INT,
    PRIMARY KEY (idLike, fkPost, fkUsuario),
    CONSTRAINT FkIndicacaoLike FOREIGN KEY (fkPost) REFERENCES Indicacao (idPost),
    CONSTRAINT fkUsarioLikeIndicacao FOREIGN KEY (fkUsuario) REFERENCES Usuarios (idUsuario))AUTO_INCREMENT = 20000;




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


-- Projetos

CREATE TABLE Projetos (
	idProjetos INT,
    fkUser INT,
    CONSTRAINT fkProjetoUser FOREIGN KEY (fkUser) REFERENCES Usuarios(idUsuario),
    PRIMARY KEY (idProjetos, fkUser),
    nomeProjeto VARCHAR(45),
    publicoAlvo VARCHAR(45),
    solucao VARCHAR(200),
    statusProjeto VARCHAR(45),
    dataProjeto DATETIME DEFAULT CURRENT_TIMESTAMP);
  
select * from Projetos;
    
INSERT INTO Projetos (idProjetos, fkUser, nomeProjeto, solucao, statusProjeto) VALUES 
	(1, 1, 'testando', 'testando mais do que necessário para ver se da certo', 'standby');



CREATE TABLE Requisitos (
	idRequisitos INT AUTO_INCREMENT,
    fkProjeto INT,
    CONSTRAINT fkProjetoRequisitos FOREIGN KEY (fkProjeto) REFERENCES Projetos(idProjetos),
    fkUser INT,
    CONSTRAINT fkUserRequisitos FOREIGN KEY (fkUser) REFERENCES Usuarios(idUsuario),
    PRIMARY KEY (idRequisitos, fkProjeto, fkUser),
    nomeRequisito VARCHAR(45),
    descricaoRequisito VARCHAR(150),
    dataInicio DATETIME DEFAULT CURRENT_TIMESTAMP,
    dataFim DATETIME);

SELECT COUNT(*) FROM Requisitos WHERE fkProjeto = 1 and fkUser = 1;

SELECT  COUNT(CASE WHEN dataFim IS NULL THEN 1 END) AS naoConcluido, COUNT(CASE WHEN dataFim IS NOT NULL THEN 1 END) AS Concluido FROM Requisitos WHERE fkProjeto = 1 AND fkUser = 1;

SELECT COUNT(*) AS Concluido, dataFim AS dataConclusao FROM Requisitos WHERE fkUser = 1 AND fkProjeto = 1 AND dataFim IS NOT NULL GROUP BY dataFim;


SELECT  idRequisitos, nomeRequisito, descricaoRequisito, dataInicio, dataFim FROM Requisitos WHERE fkProjeto = 2 and fkUser = 1;
select * from requisitos;
DROP TABLE Projetos;

DROP TABLE Requisitos;
