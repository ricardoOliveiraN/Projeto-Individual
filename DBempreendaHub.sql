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
   
INSERT INTO Usuarios (idUsuario, nomeCompleto, numeroCelular, email, senha) VALUES
(1, 'RICARDO DE OLIVEIRA', '11985247282', 'ricardo@gmail.com', 'Garoto04@-'); 
    
select * from Usuarios;

CREATE TABLE Post (
	idPost INT  AUTO_INCREMENT,
    descricao VARCHAR(200),
    qtdLikes INT, 
    dataPostagem DATETIME DEFAULT CURRENT_TIMESTAMP,
    fkUsuario INT,
    PRIMARY KEY (idPost, fkUsuario),
    CONSTRAINT fkUserarioPost FOREIGN KEY (fkUsuario) REFERENCES Usuarios (idUsuario)) AUTO_INCREMENT = 1000;
    
    
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
    
CREATE TABLE LikesPost (
	idLike INT AUTO_INCREMENT,
    fkPost INT,
    fkUsuario INT,
    PRIMARY KEY (idLike, fkPost, fkUsuario),
    CONSTRAINT FkPostLike FOREIGN KEY (fkPost) REFERENCES Post (idPost),
    CONSTRAINT fkUsarioLike FOREIGN KEY (fkUsuario) REFERENCES Usuarios (idUsuario))AUTO_INCREMENT = 10000;
    
			
CREATE TABLE Quiz (
	idQuiz INT PRIMARY KEY);

INSERT INTO Quiz (idQuiz) VALUES
	(1),
    (2);

CREATE TABLE Metricas (
    fkUsuario INT,
    CONSTRAINT fkUserMetrica FOREIGN KEY (fkUsuario) REFERENCES Usuarios(idUsuario),
    fkQuiz INT,
    CONSTRAINT fkQuizMetrica FOREIGN KEY (fkQuiz) REFERENCES Quiz(idQuiz),
    PRIMARY KEY (fkUsuario, fkQuiz),
	Q1 INT,
    Q2 INT,
    Q3 INT);
    SELECT * FROM Usuarios;
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

	
