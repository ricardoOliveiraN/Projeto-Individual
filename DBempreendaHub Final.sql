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
(1, 'RICARDO DE OLIVEIRA NICOLAU', '11985247282', 'ricardo@gmai.com', 'Garoto04@'),
(2, 'MOISES HENRY', '11985222222', 'moises@gmai.com', 'Garoto04@'); 
    


CREATE TABLE Post (
	idPost INT  AUTO_INCREMENT,
    descricao VARCHAR(200),
    qtdLikes INT, 
    dataPostagem DATETIME DEFAULT CURRENT_TIMESTAMP,
    fkUsuario INT,
    PRIMARY KEY (idPost, fkUsuario),
    CONSTRAINT fkUserarioPost FOREIGN KEY (fkUsuario) REFERENCES Usuarios (idUsuario)) AUTO_INCREMENT = 1000;
    


INSERT INTO Post (descricao,fkUsuario) VALUES
	('O que é MVP?', 2),
    ('Como faz marketing?', 2),
    ('O que é uma análise SWOT', 2);

    
CREATE TABLE Comentarios (
	idComentario INT AUTO_INCREMENT,
    fkPost INT,
    fkUsuario INT,
    PRIMARY KEY (idComentario, fkPost, fkUsuario),
    descricao VARCHAR(200),
    CONSTRAINT FkPostComentario FOREIGN KEY (fkPost) REFERENCES Post (idPost),
    CONSTRAINT fkUsarioComentario FOREIGN KEY (fkUsuario) REFERENCES Usuarios (idUsuario))AUTO_INCREMENT = 10000;

INSERT INTO Comentarios (fkPost, fkUsuario, descricao) VALUES
	(1000, 1, 'É um produto minímo viável'),
    (1000, 1, 'Utilizado muito para testar viabilidade do projeto');
    


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
    
INSERT INTO Metricas(Q1,
    Q2,
    Q3,
    Q4,
    Q5,
    Q6,
    Q7,
    Q8,
    Q9,
    Q10,fkUsuario, fkQuiz) VALUES (1,1,1,1,1,1,1,1,1,1,2, 2);
    


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
	(1, 1, 'ChatBot', 'Um chatbot de whatsapp utilizado para filtrar compras de usuários de acordo com o desejo dele.', 'standby');



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
    dataFim DATE);

INSERT INTO Requisitos (fkProjeto, fkUser, nomeRequisito, descricaoRequisito, dataFim) VALUES
	(1, 1, 'BackLog', 'Colocar os requisitos no excel', '2024-11-15'),
    (1, 1, 'Documentação', 'Fazer documentação com contexto, objetivo, justificativa...', '2024-11-20');
