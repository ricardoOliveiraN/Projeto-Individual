CREATE DATABASE EmpreendaHub;
USE EmpreendaHub;

CREATE TABLE Usuarios (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeCompleto VARCHAR(45),
    numeroCelular CHAR(11),
    email VARCHAR(45) UNIQUE,
    senha VARCHAR(10),
    nivelExperiencia INT);
    
select * from Usuarios;

CREATE TABLE Post (
	idPost INT  AUTO_INCREMENT,
    descricao VARCHAR(200),
    qtdLikes INT, 
    dataPostagem DATETIME DEFAULT CURRENT_TIMESTAMP,
    fkUsario INT,
    PRIMARY KEY (idPost, fkUsario),
    CONSTRAINT fkUserarioPost FOREIGN KEY (fkUsario) REFERENCES Usuarios (idUsuario)) AUTO_INCREMENT = 1000;
    
    
INSERT INTO Post (descricao,qtdLikes,fkUsario) VALUES
	('Testando a api', 1, 1);
    
INSERT INTO Post (descricao,qtdLikes,fkUsario) VALUES
	('OLA MOISES', 1, 1);
    INSERT INTO Post (descricao,qtdLikes,fkUsario) VALUES
	('OLA Natalia', 1, 1);
    SELECT * FROM Post;
    
    
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
    
    
 INSERT INTO LikesPost (fkPost, fkUsuario) VALUES   
	(1011, 1);
    
SELECT 
    p.descricao AS Descricao,
    p.dataPostagem AS DataSeiLa,
    u.nomeCompleto AS Nome,
    COUNT(l.idLike) AS qtdLikes,
    l.fkUsuario AS PessoaCurtiu,
    l.fkPost AS PostCurtido
FROM Post AS p
LEFT JOIN Usuarios AS u 
    ON p.fkUsario = u.idUsuario
LEFT JOIN LikesPost AS l 
    ON p.idPost = l.fkPost
GROUP BY 
    p.descricao, 
    p.dataPostagem, 
    u.nomeCompleto, 
    l.fkUsuario, 
    l.fkPost
UNION
SELECT 
    p.descricao AS Descricao,
    p.dataPostagem AS DataSeiLa,
    u.nomeCompleto AS Nome,
    COUNT(l.idLike) AS qtdLikes,
    l.fkUsuario AS PessoaCurtiu,
    l.fkPost AS PostCurtido
FROM Post AS p
RIGHT JOIN Usuarios AS u 
    ON p.fkUsario = u.idUsuario
RIGHT JOIN LikesPost AS l 
    ON p.idPost = l.fkPost
GROUP BY 
    p.descricao, 
    p.dataPostagem, 
    u.nomeCompleto, 
    l.fkUsuario, 
    l.fkPost
LIMIT 0, 300;


SELECT 
    p.idPost AS PostId,
    p.descricao AS Descricao,
    p.dataPostagem AS DataSeiLa,
    u.nomeCompleto AS Nome,
    l.fkUsuario as idQuemCurtiu,
    (SELECT COUNT(*) 
     FROM LikesPost as l
     WHERE l.fkPost = p.idPost) AS qtdLikes
FROM Post AS p
LEFT JOIN Usuarios AS u
    ON p.fkUsario = u.idUsuario
LEFT JOIN LikesPost as l ON l.fkPost = p.idPost
;
