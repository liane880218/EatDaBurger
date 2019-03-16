DROP DATABASE burguer_db;

CREATE DATABASE burguer_db;

USE burguer_db;

CREATE TABLE `burguer_db`.`burguers` (
  `idburguer` INT NOT NULL AUTO_INCREMENT,
  `burguer_name` VARCHAR(45) NOT NULL,
  `devoured` BOOLEAN NOT NULL,
  PRIMARY KEY (`idburguer`));
  
INSERT INTO burguers (burguer_name, devoured) VALUES
("CHEESE BURGER", FALSE),
("ULTIMATE CHEESE BURGER", TRUE),
("BACON BURGER", FALSE);
