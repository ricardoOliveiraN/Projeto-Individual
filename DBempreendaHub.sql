CREATE DATABASE EmpreendaHub;
USE EmpreendaHub;

CREATE TABLE Usuarios (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeCompleto VARCHAR(45),
    numeroCelular CHAR(9),
    email VARCHAR(45),
    senha VARCHAR(10),
    nivelExperiencia INT);
    

    